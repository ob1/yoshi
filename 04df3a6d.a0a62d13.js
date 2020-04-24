(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),i=(n(0),n(210)),o={id:"overview",title:"Editor Flow Overview",sidebar_label:"Editor Flow"},l={id:"version-4.x/editor-flow/overview",title:"Editor Flow Overview",description:"- [Overview](#overview)",source:"@site/versioned_docs/version-4.x/editor-flow/overview.md",permalink:"/yoshi/docs/editor-flow/overview",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/overview.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1587713141,sidebar_label:"Editor Flow",sidebar:"version-4.x/editor-flow",next:{title:"Dev Center Registration",permalink:"/yoshi/docs/editor-flow/dev-center-registration"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Dev-Center registration",id:"dev-center-registration",children:[]},{value:"Testing",id:"testing",children:[{value:"Viewer App",id:"viewer-app",children:[]},{value:"Editor App &amp; Settings Panel",id:"editor-app--settings-panel",children:[]},{value:"Component &amp; Unit Tests",id:"component--unit-tests",children:[]}]}],c={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#overview"}),"Overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#initial-setup"}),"Initial Setup")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#local-development"}),"Local Development")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#testing"}),"Testing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#viewer-app"}),"Viewer App"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#e2e-against-production"}),"E2E Against Production")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#ssr"}),"SSR")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#editor-app--settings-panel"}),"Editor App & Settings Panel"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#e2e-against-locally-served-htmls"}),"E2E Against Locally Served HTMLs")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#component--unit-tests"}),"Component & Unit Tests")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#deployment"}),"Deployment"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#register-an-app-in-wix-s-dev-center"}),"Register an App in Wix's Dev Center")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#deploy-a-new-version"}),"Deploy a new version")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#ooi-development-app"}),"OOI Development App"))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you already has OOI experience and understand how it's working, just pass it to Local Development section.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"out-of-iframe")," is a code name for a platform that enables creating Wix Apps that lives in the Viewer's main frame. It's similar to the old TPA but should be more performant. For more information head to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/client-frameworks#out-of-iframe"}),"official docs"),"."),Object(i.b)("p",null,"For more info about current flow, take a look at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/issues/1489"}),"RFC")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OOI app is constructed from 2 parts:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Viewer")),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Can include single or multple widgets. For example, component with list of items and item page.\nEach widget contains of component (view) and controller (logic, runs on webWorker). All controllers are being collected in a single file called ",Object(i.b)("inlineCode",{parentName:"p"},"viewerScript"),".\nSo the result will be ",Object(i.b)("inlineCode",{parentName:"p"},"[:widgetName]ViewerWidget.js")," (for ex ",Object(i.b)("inlineCode",{parentName:"p"},"buttonViewerWidget"),") for each widget and single ",Object(i.b)("inlineCode",{parentName:"p"},"viewerScript.js")," for the whole app. These files is located in ",Object(i.b)("inlineCode",{parentName:"p"},"dist/statics")," directory."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Editor")),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"To preview viewer script in editor, it's not enough to provide viewerWidget. Currently platoform will create an iframe for you widget. So instead of js bundle, you have to prodive html file. It should be deprecated in future.\nMoreover, each of you widget should have Settings app. Here, you can provide ability for users to configure your widget. (color, logic, labels, etc).\nThe result will be ",Object(i.b)("inlineCode",{parentName:"p"},"editor.html")," and ",Object(i.b)("inlineCode",{parentName:"p"},"settings.html")," for each of your widgets located in ",Object(i.b)("inlineCode",{parentName:"p"},"dist/statics/editor/:widgetName.html")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dist/statics/settings/:widgetName.html"),".")))),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"create-yoshi-app\n> Your Name\n> Your Email\n> Editor FLow\n> Typescript or Babel\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: We will use .ts files as an example, but you can use .js ones if you picked Babel project")),Object(i.b)("p",null,"This will bootstrap project with simple components (button, text).\nEach component should contain 3 files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Widget.ts - ",Object(i.b)("em",{parentName:"li"},"Will be rendered in both viewer and editor"),"."),Object(i.b)("li",{parentName:"ul"},"controller.ts - ",Object(i.b)("em",{parentName:"li"},"Logical part of your widget running in WebWorker")),Object(i.b)("li",{parentName:"ul"},"Settings.ts - ",Object(i.b)("em",{parentName:"li"},"Settings pannel for widget in editor"),".")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configure chrome to allow invalid certificates for resources loaded from localhost")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The viewer is running on ",Object(i.b)("inlineCode",{parentName:"p"},"https"),", thus we need to serve our application on ",Object(i.b)("inlineCode",{parentName:"p"},"https")," as well. Yoshi is using a self signed certificate which is ",Object(i.b)("inlineCode",{parentName:"p"},"invalid")," for chrome.")),Object(i.b)("p",null,"Paste the following in Chrome's omnibox and change the highlighted flag from ",Object(i.b)("inlineCode",{parentName:"p"},"Disabled")," to ",Object(i.b)("inlineCode",{parentName:"p"},"Enabled"),".:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"chrome://flags/#allow-insecure-localhost\n")),Object(i.b)("h2",{id:"local-development"},"Local Development"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Develop your local app on production platforms")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm start\n")),Object(i.b)("p",null,"This command runs ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi-flow-editor start")," and opens two tabs:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Production ",Object(i.b)("strong",{parentName:"p"},"viewer")," with a site that has the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#ooi-development-app"}),"ooi development app"),", it points to your local ",Object(i.b)("em",{parentName:"p"},"viewer script")," and ",Object(i.b)("em",{parentName:"p"},"viewer widget"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Production ",Object(i.b)("strong",{parentName:"p"},"editor")," with a site that has the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#ooi-development-app"}),"ooi development app"),", It points to your local ",Object(i.b)("em",{parentName:"p"},"editor app")," and ",Object(i.b)("em",{parentName:"p"},"settings panel"),"."))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: ooi-development-app is just an informative way to show how you can start your app in production environment. It's a pre-registered wix website with installed app pointed to localhost.\nAfter understanding basic concept, we recommend you to read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#dev-center-registration"}),"Dev-Center registraion section")," and register your app.")),Object(i.b)("h2",{id:"dev-center-registration"},"Dev-Center registration"),Object(i.b)("p",null,"To register your app please read: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./DEV_CENTER_REGISTRATION.md"}),"Register your app via Dev Center")),Object(i.b)("p",null,"#####After your app is registered"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"update viewer and editor urls under ",Object(i.b)("inlineCode",{parentName:"li"},"dev/sites.js")),Object(i.b)("li",{parentName:"ul"},"create/update ",Object(i.b)("inlineCode",{parentName:"li"},".component.json")," which is located in each component's directory. This file should contain ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field, which is pointing to appropriate widget registered on dev center.")),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm start"),", open another terminal and run ",Object(i.b)("inlineCode",{parentName:"p"},"npx jest --watch")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Tip - If you are using ",Object(i.b)("inlineCode",{parentName:"p"},"iterm2")," use ",Object(i.b)("inlineCode",{parentName:"p"},"cmd"),"+",Object(i.b)("inlineCode",{parentName:"p"},"d")," to split the window vertically")),Object(i.b)("h3",{id:"viewer-app"},"Viewer App"),Object(i.b)("h4",{id:"e2e-against-production"},"E2E Against Production"),Object(i.b)("p",null,"Using the ooi development app that points to your local ",Object(i.b)("em",{parentName:"p"},"viewer script")," and ",Object(i.b)("em",{parentName:"p"},"viewer widget"),"."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./src/viewerApp/viewerApp.e2e.js"}),Object(i.b)("inlineCode",{parentName:"a"},"viewerApp/viewerApp.e2e.js"))," for an example."),Object(i.b)("h4",{id:"ssr"},"SSR"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TBD")),Object(i.b)("h3",{id:"editor-app--settings-panel"},"Editor App & Settings Panel"),Object(i.b)("h4",{id:"e2e-against-locally-served-htmls"},"E2E Against Locally Served HTMLs"),Object(i.b)("p",null,"When running tests, Yoshi runs your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./dev/server.js"}),Object(i.b)("inlineCode",{parentName:"a"},"dev/server.js"))," as configured in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./jest-yoshi.config.js"}),Object(i.b)("inlineCode",{parentName:"a"},"jest-yoshi.config.js")),"."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./src/editorApp/editorApp.e2e.js"}),Object(i.b)("inlineCode",{parentName:"a"},"editorApp/editorApp.e2e.js"))," & ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./src/settingsPanel/settingsPanel.e2e.js"}),Object(i.b)("inlineCode",{parentName:"a"},"settingsPanel/settingsPanel.e2e.js"))," for an example."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Testing against the production editor similarly to the viewer app is problematic due to the editor loading time and required authentication.")),Object(i.b)("h3",{id:"component--unit-tests"},"Component & Unit Tests"),Object(i.b)("p",null,"Nothing special about the ooi platform, component tests should be written in the ",Object(i.b)("inlineCode",{parentName:"p"},"components")," directory. Unit tests can be written everywhere."))}b.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.a.createElement(u,l({ref:t},c,{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);