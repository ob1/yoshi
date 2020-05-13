(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),b=(n(0),n(229)),r={id:"legacy-flow",title:"Legacy Flow",sidebar_label:"Legacy Flow"},l={id:"version-4.x/legacy-flow",title:"Legacy Flow",description:"## CLI",source:"@site/versioned_docs/version-4.x/legacy-flow.md",permalink:"/yoshi/docs/legacy-flow",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-flow.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589296391,sidebar_label:"Legacy Flow",sidebar:"version-4.x/docs",previous:{title:"Business-Manager Flow",permalink:"/yoshi/docs/business-manager-flow"},next:{title:"Getting Started",permalink:"/yoshi/docs/yoshi-server/getting-started"}},o=[{value:"CLI",id:"cli",children:[{value:"Global options",id:"global-options",children:[]},{value:"start",id:"start",children:[]},{value:"build",id:"build",children:[]},{value:"test",id:"test",children:[]},{value:"lint",id:"lint",children:[]},{value:"release",id:"release",children:[]}]},{value:"Configuration",id:"configuration",children:[]}],c={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"cli"},"CLI"),Object(b.b)("h3",{id:"global-options"},"Global options"),Object(b.b)("h4",{id:"--help---h-"},Object(b.b)("inlineCode",{parentName:"h4"},"--help")," ( ",Object(b.b)("inlineCode",{parentName:"h4"},"-h")," )"),Object(b.b)("p",null,"Output usage information"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"./dist/index.js")),Object(b.b)("h4",{id:"--verbose"},Object(b.b)("inlineCode",{parentName:"h4"},"--verbose")),Object(b.b)("p",null,"Yoshi will print verbose logs and error messages."),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"true")," in CI"),Object(b.b)("h3",{id:"start"},"start"),Object(b.b)("p",null,"This will run the specified (server) ",Object(b.b)("inlineCode",{parentName:"p"},"entryPoint")," file and mount a CDN server."),Object(b.b)("h4",{id:"options"},"options"),Object(b.b)("h5",{id:"--entry-point---e-"},Object(b.b)("inlineCode",{parentName:"h5"},"--entry-point")," ( ",Object(b.b)("inlineCode",{parentName:"h5"},"-e")," ) ",Object(b.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})),Object(b.b)("p",null,"Entry point for the app."),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"index.js")),Object(b.b)("h5",{id:"--server"},Object(b.b)("inlineCode",{parentName:"h5"},"--server")," ",Object(b.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"An alias for ",Object(b.b)("inlineCode",{parentName:"p"},"entry-point")," configuration option.")),Object(b.b)("p",null,"Entry point for the app server. Supported only by ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"/yoshi/docs/app-flow"}),"app flow"),"."),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"index.js")),Object(b.b)("h5",{id:"--manual-restart"},Object(b.b)("inlineCode",{parentName:"h5"},"--manual-restart")),Object(b.b)("p",null,"Get SIGHUP on change and manage application reboot manually"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("h5",{id:"--with-tests"},Object(b.b)("inlineCode",{parentName:"h5"},"--with-tests")),Object(b.b)("p",null,"Spawn ",Object(b.b)("inlineCode",{parentName:"p"},"npm test")," after start"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("h5",{id:"--no-server"},Object(b.b)("inlineCode",{parentName:"h5"},"--no-server")),Object(b.b)("p",null,"Do not spawn the app server"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("h5",{id:"--debug"},Object(b.b)("inlineCode",{parentName:"h5"},"--debug")),Object(b.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"0")),Object(b.b)("h5",{id:"--debug-brk"},Object(b.b)("inlineCode",{parentName:"h5"},"--debug-brk")),Object(b.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]",", process won't start until debugger will be attached"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"0")),Object(b.b)("h5",{id:"--production"},Object(b.b)("inlineCode",{parentName:"h5"},"--production")),Object(b.b)("p",null,"Start using unminified production build (the tests would not run in this mode)"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"0")),Object(b.b)("p",null,"The following are the default values for the CDN server's port, mount directory and whether to serve statics over https or regular http. You can change them in your ",Object(b.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "servers": {\n    "cdn": {\n      "port": 3200,\n      "dir": "dist/statics",\n      "ssl": false\n    }\n  }\n}\n')),Object(b.b)("h5",{id:"--url"},Object(b.b)("inlineCode",{parentName:"h5"},"--url")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Similar to the ",Object(b.b)("inlineCode",{parentName:"p"},"startUrl")," configuration option. If both are specified ",Object(b.b)("inlineCode",{parentName:"p"},"--url")," will be used.")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Note: You can disable browser opening functionality by using ",Object(b.b)("inlineCode",{parentName:"p"},"BROWSER=none")," env variable.")),Object(b.b)("p",null,"Opens the browser on a supplied url, also supports multiple urls separated by comma."),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"http://localhost:3000")),Object(b.b)("h3",{id:"build"},"build"),Object(b.b)("h4",{id:"options-1"},"options"),Object(b.b)("h5",{id:"--analyze"},Object(b.b)("inlineCode",{parentName:"h5"},"--analyze")),Object(b.b)("p",null,"run webpack-bundle-analyzer plugin."),Object(b.b)("h5",{id:"--stats"},Object(b.b)("inlineCode",{parentName:"h5"},"--stats")),Object(b.b)("p",null,"output webpack stats file to ",Object(b.b)("inlineCode",{parentName:"p"},"dist/webpack-stats.json")," (see also ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"/yoshi/docs/legacy-guides/bundle-analyze"}),"bundle analysis"),")|"),Object(b.b)("h5",{id:"--source-map"},Object(b.b)("inlineCode",{parentName:"h5"},"--source-map")),Object(b.b)("p",null,"Explicitly emit bundle source maps."),Object(b.b)("p",null,"This task will perform the following:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Compile using ",Object(b.b)("inlineCode",{parentName:"li"},"TypeScript")," (",Object(b.b)("inlineCode",{parentName:"li"},"*.ts"),") or ",Object(b.b)("inlineCode",{parentName:"li"},"babel")," (",Object(b.b)("inlineCode",{parentName:"li"},"*.js"),") files into ",Object(b.b)("inlineCode",{parentName:"li"},"dist/"),"."),Object(b.b)("li",{parentName:"ol"},"Copy assets to ",Object(b.b)("inlineCode",{parentName:"li"},"dist")," folder (ejs/html/images...).")),Object(b.b)("p",null,"You can specify multiple entry points in your ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," file. This gives the ability build multiple bundles at once. More info about Webpack entries can be found ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"http://webpack.github.io/docs/configuration.html#entry"}),"here"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n    "c": ["./c", "./d"]\n  }\n}\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," if you have multiple entries you should consider using the ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(b.b)("inlineCode",{parentName:"a"},"optimization.splitChunks"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note2:")," the decision whether to use ",Object(b.b)("inlineCode",{parentName:"p"},"TypeScript")," or ",Object(b.b)("inlineCode",{parentName:"p"},"babel")," is done by searching ",Object(b.b)("inlineCode",{parentName:"p"},"tsconfig.json")," inside the root directory."),Object(b.b)("h3",{id:"test"},"test"),Object(b.b)("p",null,"Executes tests using ",Object(b.b)("inlineCode",{parentName:"p"},"jest")," as default."),Object(b.b)("h4",{id:"options-2"},"options"),Object(b.b)("h5",{id:"--jest"},Object(b.b)("inlineCode",{parentName:"h5"},"--jest")),Object(b.b)("p",null,"Run tests with Jest - this is the default"),Object(b.b)("h5",{id:"--mocha"},Object(b.b)("inlineCode",{parentName:"h5"},"--mocha")),Object(b.b)("p",null,"Run unit tests with Mocha"),Object(b.b)("p",null,"You can set environment variable ",Object(b.b)("inlineCode",{parentName:"p"},"MOCHA_TIMEOUT")," to set the timeout for mocha tests.\ndefaults to 30000ms"),Object(b.b)("h5",{id:"--jasmine"},Object(b.b)("inlineCode",{parentName:"h5"},"--jasmine")),Object(b.b)("p",null,"Run unit tests with Jasmine"),Object(b.b)("h5",{id:"--karma"},Object(b.b)("inlineCode",{parentName:"h5"},"--karma")),Object(b.b)("p",null,"Run tests with Karma (browser)"),Object(b.b)("h5",{id:"--protractor"},Object(b.b)("inlineCode",{parentName:"h5"},"--protractor")),Object(b.b)("p",null,"Run e2e tests with Protractor (e2e)"),Object(b.b)("h5",{id:"--watch"},Object(b.b)("inlineCode",{parentName:"h5"},"--watch")),Object(b.b)("p",null,"Run tests on watch mode (works for mocha, jasmine, jest & karma)"),Object(b.b)("h5",{id:"--debug-1"},Object(b.b)("inlineCode",{parentName:"h5"},"--debug")),Object(b.b)("p",null,"Allow test debugging (works for mocha, jest & protractor)"),Object(b.b)("h5",{id:"--debug-brk-1"},Object(b.b)("inlineCode",{parentName:"h5"},"--debug-brk")),Object(b.b)("p",null,"Allow test debugging (works for mocha, jest & protractor), process won't start until debugger will be attached"),Object(b.b)("h5",{id:"--coverage"},Object(b.b)("inlineCode",{parentName:"h5"},"--coverage")),Object(b.b)("p",null,"Collect and output code coverage"),Object(b.b)("h4",{id:"examples"},"Examples"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Jest test setup:"),Object(b.b)("p",{parentName:"li"},"Every other argument you'll pass to ",Object(b.b)("inlineCode",{parentName:"p"},"yoshi test")," will be forwarded to jest, For example:"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"yoshi test --forceExit foo.spec.js")),Object(b.b)("p",{parentName:"li"},"Will run jest on ",Object(b.b)("inlineCode",{parentName:"p"},"foo.spec.js")," file and will apply ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/cli#forceexit"}),Object(b.b)("inlineCode",{parentName:"a"},"forceExit")),"."),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Note:")," ",Object(b.b)("inlineCode",{parentName:"p"},"--debug & --debug-brk")," won't be transfer to jest, but instead will be ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/troubleshooting#tests-are-failing-and-you-don-t-know-why"}),"used in yoshi for test debugging"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Mocha tests setup:"),Object(b.b)("p",{parentName:"li"},"You can add a ",Object(b.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js")," file, with mocha tests specific setup. Mocha will ",Object(b.b)("inlineCode",{parentName:"p"},"require")," this file, if exists.\nExample for such ",Object(b.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js"),":"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'import "babel-polyfill";\nimport "isomorphic-fetch";\nimport sinonChai from "sinon-chai";\nimport chaiAsPromised from "chai-as-promised";\nimport chai from "chai";\n\nchai.use(sinonChai);\nchai.use(chaiAsPromised);\n'))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Karma tests setup:"),Object(b.b)("p",{parentName:"li"},"When running tests using Karma, make sure you have the right configurations in your ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"#wixspecs"}),Object(b.b)("inlineCode",{parentName:"a"},"yoshi.specs"))," section. In addition, if you have a ",Object(b.b)("inlineCode",{parentName:"p"},"karma.conf.js")," file, the configurations will be merged with our ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"yoshi/config/karma.conf.js"}),"built-in configurations"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Jasmine tests setup:"),Object(b.b)("p",{parentName:"li"},"Specifying a custom glob for test files is possible by configuring ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"#wixspecs"}),Object(b.b)("inlineCode",{parentName:"a"},"yoshi.specs")),". The default glob matches ",Object(b.b)("inlineCode",{parentName:"p"},".spec.")," files in all folders."),Object(b.b)("p",{parentName:"li"},"If you wish to load helpers, import them all in a file placed at ",Object(b.b)("inlineCode",{parentName:"p"},"'test/setup.js'"),"."))),Object(b.b)("h3",{id:"lint"},"lint"),Object(b.b)("h4",{id:"options-3"},"options"),Object(b.b)("h5",{id:"--fix"},Object(b.b)("inlineCode",{parentName:"h5"},"--fix")),Object(b.b)("p",null,"Automatically fix lint problems"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("h5",{id:"--format"},Object(b.b)("inlineCode",{parentName:"h5"},"--format")),Object(b.b)("p",null,"Use a specific formatter for eslint/tslint"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"stylish")),Object(b.b)("h5",{id:"files"},Object(b.b)("inlineCode",{parentName:"h5"},"[files...]")),Object(b.b)("p",null,"Optional list of files (space delimited) to run lint on"),Object(b.b)("p",null,"Default: empty"),Object(b.b)("p",null,"Executes linters based on the project type:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(i.a)({parentName:"li"},{href:"https://palantir.github.io/tslint/"}),Object(b.b)("inlineCode",{parentName:"a"},"TSLint"))," for TypeScript projects (a ",Object(b.b)("inlineCode",{parentName:"li"},"tslint.json")," configuration file is required)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(i.a)({parentName:"li"},{href:"https://eslint.org/"}),Object(b.b)("inlineCode",{parentName:"a"},"ESLint"))," for Babel projects (an ",Object(b.b)("inlineCode",{parentName:"li"},".eslintrc")," configuration file is required)")),Object(b.b)("h3",{id:"release"},"release"),Object(b.b)("h4",{id:"options-4"},"options"),Object(b.b)("h5",{id:"--minor"},Object(b.b)("inlineCode",{parentName:"h5"},"--minor")),Object(b.b)("p",null,"bump a minor version instead of a patch"),Object(b.b)("p",null,"Default: ",Object(b.b)("inlineCode",{parentName:"p"},"false")),Object(b.b)("p",null,"Bump the patch version in ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," using ",Object(b.b)("inlineCode",{parentName:"p"},"wnpm-release"),". --\x3e"),Object(b.b)("h2",{id:"configuration"},"Configuration"),Object(b.b)("p",null,"The legacy flow is using ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"/yoshi/docs/yoshi-config"}),"yoshi-config")))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var i=n(0),a=n.n(i);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},b=Object.keys(e);for(i=0;i<b.length;i++)n=b[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(i=0;i<b.length;i++)n=b[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,b=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,j=s["".concat(r,".").concat(d)]||s[d]||u[d]||b;return n?a.a.createElement(j,l({ref:t},c,{components:n})):a.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var b=n.length,r=new Array(b);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<b;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);