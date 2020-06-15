import chalk from 'chalk';
import { Urls } from 'react-dev-utils/WebpackDevServerUtils';
import clearConsole from 'react-dev-utils/clearConsole';
import {
  State,
  ProcessState,
  ProcessType,
} from 'yoshi-common/build/dev-environment';
import {
  hasErrorsOrWarnings,
  isAllCompiled,
  shouldClearConsole,
  getProcessName,
} from 'yoshi-common/build/dev-environment-logger';
import tinyurl from 'tinyurl';
import { FlowEditorModel } from '../model';

const cache = new Map();
const shortenUrl = async (url: string) => {
  if (!cache.has(url)) {
    try {
      cache.set(url, await tinyurl.shorten(url));
    } catch (e) {
      console.log("Can't make development url short.", e);
      return url;
    }
  }
  return cache.get(url);
};

const logUrls = ({
  urls,
  model,
  processType,
}: {
  urls?: Urls;
  model: FlowEditorModel;
  processType: ProcessType;
}) => {
  if (processType === 'AppServer') {
    logEditorUrls({ urls, model });
  } else if (processType === 'DevServer') {
    logViewerUrls({ urls, model });
  }
};

const logEditorUrls = ({
  urls,
  model,
}: {
  urls?: Urls;
  model: FlowEditorModel;
}) => {
  console.log(`Editor urls:`);

  model.components.map((component) => {
    console.log(`${chalk.cyan.bold(component.name)}`);
    console.log(
      `  ${chalk.bold('Widget:')}            ${
        urls?.localUrlForTerminal
      }editor/${component.name}`,
    );
    console.log(
      `  ${chalk.bold('Settings panel:')}    ${
        urls?.localUrlForTerminal
      }settings/${component.name}`,
    );
  });
};

const logViewerUrls = ({
  urls,
  model,
}: {
  urls?: Urls;
  model: FlowEditorModel;
}) => {
  console.log('Viewer urls:');

  model.components.map((component) => {
    console.log(`${chalk.cyan.bold(component.name)}`);
    console.log(
      `  ${chalk.bold('Widget:')}            ${urls?.localUrlForTerminal}${
        component.name
      }ViewerWidget.bundle.js`,
    );
  });

  console.log();
};

const logProcessState = (
  {
    processType,
    model,
  }: {
    processType: ProcessType;
    appName: string;
    model: FlowEditorModel;
  },
  state: ProcessState,
) => {
  switch (state.status) {
    case 'compiling':
      console.log();
      console.log(`${getProcessName(processType)}:`, 'Compiling...');
      break;

    case 'success': {
      logUrls({ urls: state.urls, model, processType });
      break;
    }
  }
};

const logStateErrorsOrWarnings = (state: State) => {
  const { DevServer, TypeScript } = state;

  if (TypeScript && TypeScript.status === 'errors') {
    console.log(TypeScript.errors?.join('\n\n'));
    return;
  }

  if (DevServer && DevServer.status === 'errors') {
    console.log(chalk.red('Failed to compile.\n'));
    console.log(DevServer.errors?.join('\n\n'));
    return;
  }

  if (DevServer && DevServer.status === 'warnings') {
    console.log(chalk.red('Compiled with warnings.\n'));
    console.log(DevServer.warnings?.join('\n\n'));
    return;
  }
};

export default (model: FlowEditorModel, startUrl: Array<string>) => ({
  state,
  appName,
}: {
  state: State;
  appName: string;
  suricate: boolean;
}) => {
  if (shouldClearConsole()) {
    clearConsole();
  }

  if (hasErrorsOrWarnings(state)) {
    return logStateErrorsOrWarnings(state);
  }

  const isCompiled = isAllCompiled(state);

  if (isCompiled) {
    console.log(chalk.green('Compiled successfully!'));

    console.log(`Your bundles for viewer and apps for editor are ready!`);
    console.log('');
  } else {
    console.log(chalk.bold('Compiling...'));
  }

  for (const processTypeKey in state) {
    const processType = processTypeKey as ProcessType;
    const processState = state[processType];

    processState &&
      logProcessState({ model, processType, appName }, processState);
  }

  Promise.all(startUrl.map(shortenUrl)).then((urls) => {
    if (isCompiled) {
      console.log('Following urls will be opened with local overrides:\n');
      urls.map((url: string) => {
        console.log(`${chalk.cyan.underline(url)}`);
        console.log();
      });
    }
  });
};
