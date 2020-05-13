(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),o=(n(0),n(229)),i={id:"app-flow",title:"App Flow",sidebar_label:"App Flow"},p={id:"app-flow",title:"App Flow",description:"We want to deliver awesome developer experience, one that's specific to the type of application that you build.",source:"@site/docs/app-flow.md",permalink:"/yoshi/docs/next/app-flow",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/app-flow.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589292417,sidebar_label:"App Flow",sidebar:"docs",previous:{title:"Templates",permalink:"/yoshi/docs/next/templates"},next:{title:"Library Flow",permalink:"/yoshi/docs/next/library-flow"}},s=[{value:"Migration for Fullstack apps (bootstrap)",id:"migration-for-fullstack-apps-bootstrap",children:[]},{value:"Migration for Client apps",id:"migration-for-client-apps",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We want to deliver awesome developer experience, one that's specific to the type of application that you build."),Object(o.b)("p",null,"App flow is an improved developer experience that is specific to apps. Internally, instead of running many different tools (babel/typescript, sass/less) on various glob patterns, it creates a dedicated Webpack bundle, specifically for the server."),Object(o.b)("p",null,"This has a few advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Clean output, clear errors:")," If your build fails or your server throws you should know about it immediately and clearly. Forget of long stack traces or errors that show multiple times; See your server's output in your terminal."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Faster build times:")," Now that Yoshi knows it targets apps, it can only run relevant build operations which can result in a significant speed boost."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Faster server reload:")," When you're working in watch mode and you change a file, Yoshi knows whether to reload your server, client or both. With the addition of ",Object(o.b)("strong",{parentName:"li"},"server-side HMR"),", Yoshi will be able to reload your ",Object(o.b)("inlineCode",{parentName:"li"},"wix-bootstrap-ng")," server almost instantly.")),Object(o.b)("p",null,"In the future, we plan on providing many features specifically for apps. We want to encourage applications to use the new flow."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/11733036/79953456-8a5b2500-8484-11ea-9b2a-956fb0547fe0.png",alt:"A terminal showing the new app flow"}))),Object(o.b)("p",null,"The purpose of this document is to explain how to opt-into this new feature. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/pull/586"}),"https://github.com/wix/yoshi/pull/586")," for more information on the changes it introduces."),Object(o.b)("h3",{id:"migration-for-fullstack-apps-bootstrap"},"Migration for Fullstack apps (bootstrap)"),Object(o.b)("p",null,"Start by opting into app flow by changing your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," to include:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "yoshi": {\n+    "projectType": "app"\n  }\n}\n')),Object(o.b)("p",null,"Since we now have one bundle for the server, we'll direct Bootstrap's express app to ",Object(o.b)("inlineCode",{parentName:"p"},"dist/server.js")," file. Edit ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"const bootstrap = require('@wix/wix-bootstrap-ng');\n\nconst app = bootstrap()\n  .use(require('@wix/wix-bootstrap-greynode'))\n  .use(require('@wix/wix-bootstrap-hadron'))\n  .use(require('@wix/wix-bootstrap-renderer'));\n\n-if (process.env.NODE_ENV === 'test') {\n-  app.express('./src/server');\n-} else {\n-  app.express('./dist/src/server');\n-}\n+app.express('./dist/server');\n\napp.start();\n")),Object(o.b)("p",null,"We use Webpack to bundle our server code and it can't handle mixing ",Object(o.b)("inlineCode",{parentName:"p"},"module.exports")," and ECMAScript imports in the same file. To solve it, change your ",Object(o.b)("inlineCode",{parentName:"p"},"server.js")," file to use EcmaScript modules for both, importing and exporting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"import wixExpressCsrf from '@wix/wix-express-csrf';\nimport wixExpressRequireHttps from '@wix/wix-express-require-https';\n\n-module.exports = (app, context) => {\n+export default (app, context) => {\n  const config = context.config.load('{%projectName%}');\n\n  app.use(wixExpressCsrf());\n  app.use(wixExpressRequireHttps);\n  app.use(context.renderer.middleware());\n\n  app.get('/', (req, res) => {\n    const renderModel = getRenderModel(req);\n\n    res.renderView('./index.ejs', renderModel);\n  });\n\n  function getRenderModel(req) {\n    const { language, basename, debug } = req.aspects['web-context'];\n\n    return {\n      language,\n      basename,\n      debug: debug || process.env.NODE_ENV === 'development',\n      title: 'Wix Full Stack Project Boilerplate',\n      staticsDomain: config.clientTopology.staticsDomain,\n    };\n  }\n\n  return app;\n};\n")),Object(o.b)("p",null,"We use ",Object(o.b)("inlineCode",{parentName:"p"},"source-map-support")," internally so stack traces show locations in your source files. To work in production (with New Relic monitoring), please install ",Object(o.b)("inlineCode",{parentName:"p"},"source-map-support")," under ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save source-map-support\n")),Object(o.b)("p",null,"If you're interested, opt-into hot module replacement for your server by installing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i --save bootstrap-hot-loader\n")),Object(o.b)("p",null,"Then edit ",Object(o.b)("inlineCode",{parentName:"p"},"server.js")," with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"import wixExpressCsrf from '@wix/wix-express-csrf';\nimport wixExpressRequireHttps from '@wix/wix-express-require-https';\n+import { hot } from 'bootstrap-hot-loader';\n\n-export default (app, context) => {\n+export default hot(module, (app, context) => {\n  const config = context.config.load('{%projectName%}');\n\n  app.use(wixExpressCsrf());\n  app.use(wixExpressRequireHttps);\n  app.use(context.renderer.middleware());\n\n  app.get('/', (req, res) => {\n    const renderModel = getRenderModel(req);\n\n    res.renderView('./index.ejs', renderModel);\n  });\n\n  function getRenderModel(req) {\n    const { language, basename, debug } = req.aspects['web-context'];\n\n    return {\n      language,\n      basename,\n      debug: debug || process.env.NODE_ENV === 'development',\n      title: 'Wix Full Stack Project Boilerplate',\n      staticsDomain: config.clientTopology.staticsDomain,\n    };\n  }\n\n  return app;\n-};\n+});\n")),Object(o.b)("h3",{id:"migration-for-client-apps"},"Migration for Client apps"),Object(o.b)("p",null,"Start by opting into app flow by changing your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," to include:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "yoshi": {\n+    "projectType": "app"\n  }\n}\n')),Object(o.b)("p",null,"In app flow, Yoshi looks for the entry file of your server at ",Object(o.b)("inlineCode",{parentName:"p"},"/dev/server.(js|ts)"),". Move your current local dev server to that location. For example, if your local dev server is in ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir dev\nmv index.js dev/server.js\n")),Object(o.b)("p",null,"With that, Yoshi will now bundle it into ",Object(o.b)("inlineCode",{parentName:"p"},"/dist/server.js"),"."),Object(o.b)("h3",{id:"cli"},"CLI"),Object(o.b)("p",null,"These are the scripts that are available to you in a project that uses app flow:"),Object(o.b)("h4",{id:"npx-yoshi-start"},Object(o.b)("inlineCode",{parentName:"h4"},"npx yoshi start")),Object(o.b)("p",null,"Starts the application in development mode. Runs your application server and ",Object(o.b)("inlineCode",{parentName:"p"},"webpack-dev-server")," on port 3200. Watches for changes and reloads your app automatically. Compilation errors will show both, in the terminal and in the browser."),Object(o.b)("p",null,"Possible flags:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--server"),": ",Object(o.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})," By default, starts your application server by running ",Object(o.b)("inlineCode",{parentName:"li"},"index-dev.js|ts"),". Pass a different value to start up a different script."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--url"),": By default, opens your browser with ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000"),". Use this to pass a different URL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--production"),": Start using un-minified production build."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--debug"),": Pass this flag to run your application server with a debugger.")),Object(o.b)("h4",{id:"npx-yoshi-test"},Object(o.b)("inlineCode",{parentName:"h4"},"npx yoshi test")),Object(o.b)("p",null,"Runs your test with the configured test runner (Jest by default). Pass ",Object(o.b)("inlineCode",{parentName:"p"},"--watch")," to start it in watch mode."),Object(o.b)("h4",{id:"npx-yoshi-build"},Object(o.b)("inlineCode",{parentName:"h4"},"npx yoshi build")),Object(o.b)("p",null,"Builds your app for production into the ",Object(o.b)("inlineCode",{parentName:"p"},"/dist")," directory. Normally, this command will only run in CI. Client-side assets will be minified."),Object(o.b)("p",null,"Possible flags:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--analyze"),": Analyze production bundle. This is helpful to understand what is included in the bundle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--stats"),": Generate Webpack stats into ",Object(o.b)("inlineCode",{parentName:"li"},"dist/webpack-stats.json"),".")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The app flow is using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/yoshi/docs/next/yoshi-config"}),"yoshi-config")))}c.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,p({ref:t},l,{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);