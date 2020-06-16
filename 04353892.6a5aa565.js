(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),i=(n(0),n(254)),a={id:"platform-apps-support",title:"Platform Apps Support",sidebar_label:"Platform Apps Support"},p={id:"version-4.x/editor-flow/platform-apps-support",title:"Platform Apps Support",description:"> For more specific info related to platform app, please check [the official docs](https://bo.wix.com/wix-docs/client/editor-platform/editor-application-reference/editor-platform-app)",source:"@site/versioned_docs/version-4.x/editor-flow/platform-apps-support.md",permalink:"/yoshi/docs/editor-flow/platform-apps-support",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/platform-apps-support.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1590505197,sidebar_label:"Platform Apps Support",sidebar:"version-4.x/editor-flow",previous:{title:"Testing",permalink:"/yoshi/docs/editor-flow/testing"}},l=[{value:"Intro",id:"intro",children:[]},{value:"App structure",id:"app-structure",children:[]},{value:"Components",id:"components",children:[]},{value:"App Entry Points",id:"app-entry-points",children:[]},{value:"App configuration files",id:"app-configuration-files",children:[]}],c={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For more specific info related to platform app, please check ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/editor-platform/editor-application-reference/editor-platform-app"}),"the official docs"))),Object(i.b)("h3",{id:"intro"},"Intro"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1521229/79906725-028fff00-8421-11ea-934b-660adef18180.png",alt:"Wix Apps Evolution"}))),Object(i.b)("p",null,"After understanding that we have a lot of things in common between platform apps and out-of-iframe apps,\nwe decided to combine efforts and allow yoshi to support platform apps.\nThis means 2 big things for the future of the development apps inside Wix:"),Object(i.b)("p",null,"Firstly, if you are developing out-of-iframe app and want to migrate it gradually to platform app, you don't have to create a new project. Imagine you have 2 components in your out-of-iframe app: products list and product page.\nYou want to allow your users to get all the benefits of platform's apps. Configuring each element in the list using already created native components sounds promising!\nBut creating a new project from scratch could take time. A lot of functional logic will be just copy-pasted. You basically have to remove ",Object(i.b)("inlineCode",{parentName:"p"},"Widget.ts")," containing\nReact Component and make all the UI magic inside the viewer controller. So by using editor flow you can just do this w/o new bootstrap.\nYoshi is smart enough to understand what kind of component it needs to handle."),Object(i.b)("p",null,"The second win is a learning curve. We are trying to find more things in common between the platform and OOI apps, so most of the configuration options, way we are developing\nlocally, serving Settings Panel App, running tests, etc should be almost the same. Both types of apps have a controller for viewer part -",Object(i.b)("inlineCode",{parentName:"p"},"viewer.controller.ts"),", entry points for worker bundles: ",Object(i.b)("inlineCode",{parentName:"p"},"viewer.app.ts"),", ",Object(i.b)("inlineCode",{parentName:"p"},"editor.app.ts"),", Settings panel, rendered via React  - ",Object(i.b)("inlineCode",{parentName:"p"},"Settings.ts"),"."),Object(i.b)("h3",{id:"app-structure"},"App structure"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"app\n\u2502   .application.json\n\u2502\n\u2514\u2500\u2500\u2500src\n    \u2502   editor.app.ts\n    \u2502   viewer.app.ts\n    \u2502\n    \u2514\u2500\u2500\u2500components\n        \u2514\u2500\u2500\u2500ProductList\n        \u2502   .component.json\n        \u2502   editor.controller.ts\n        \u2502   viewer.controller.ts\n        \u2502   Settings.ts\n        \u2502\n        \u2514\u2500\u2500\u2500ProductPage\n            .component.json\n            editor.controller.ts\n            viewer.controller.ts\n")),Object(i.b)("h3",{id:"components"},"Components"),Object(i.b)("p",null,"Each application consists of components. All components' files are grouped by directories located in ",Object(i.b)("inlineCode",{parentName:"p"},"components")," directory.\nFor platform apps, the main parts of the component are ",Object(i.b)("inlineCode",{parentName:"p"},"editor.controller.ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},"viewer.controller.ts"),"."),Object(i.b)("h4",{id:"viewercontrollerts"},Object(i.b)("inlineCode",{parentName:"h4"},"viewer.controller.ts")),Object(i.b)("p",null,"It's a controller for the viewer UI part. Each controller is being mapped with ",Object(i.b)("inlineCode",{parentName:"p"},"controllerConfigs")," provided by the platform under the hood based on the component ID in ",Object(i.b)("inlineCode",{parentName:"p"},".component.json"),".\nHere we are creating a platform Widget, add UI handlers for it, providing other component's functional logic.\nThis file should ",Object(i.b)("inlineCode",{parentName:"p"},"export default")," a single function generated by ",Object(i.b)("inlineCode",{parentName:"p"},"widgetScriptBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"function createViewerController({ $w, controllerConfig, appData, wixCodeApi }) {\n    return {\n        pageReady() {\n            $w('#name').text = 'Hello!';\n            // ...\n        }\n    }\n}\n\nexport default widgetScriptBuilder()\n  .withCreateMethod(createViewerController)\n  .build();\n")),Object(i.b)("h4",{id:"editorcontrollerts"},Object(i.b)("inlineCode",{parentName:"h4"},"editor.controller.ts")),Object(i.b)("p",null,"A Controller for the editor part. Under the hood, it's going to be collected and processed in the ",Object(i.b)("inlineCode",{parentName:"p"},"editorScript"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"export default function(): WidgetEditor {\n  return {\n    type: widgetId,\n    getStageData() {\n        return widgetStageData;\n    },\n    getVariations() {\n        return {\n          variations: variationPresets,\n          options: {\n            presetsPanelTitle: 'Change layout',\n          },\n        };\n      },\n  };\n}\n")),Object(i.b)("h3",{id:"app-entry-points"},"App Entry Points"),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"viewerScript")," (bundle that maps user's ",Object(i.b)("inlineCode",{parentName:"p"},"viewer.controller"),"s with controller configs inside ",Object(i.b)("inlineCode",{parentName:"p"},"createControllers")," function) and ",Object(i.b)("inlineCode",{parentName:"p"},"editorScript")," (bundle that collects all ",Object(i.b)("inlineCode",{parentName:"p"},"editor.controller"),"s in a single place) are generated by yoshi automatically.\nBut you can still override values which are supported by the platform for these kinds of files."),Object(i.b)("h4",{id:"viewerappts"},Object(i.b)("inlineCode",{parentName:"h4"},"viewer.app.ts")),Object(i.b)("p",null,"Here we'll map lifecycle methods provided by platform and add useful helpers provided by the flow. Note that you can't override ",Object(i.b)("inlineCode",{parentName:"p"},"createControllers")," function."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initAppForPage")," ",Object(i.b)("em",{parentName:"li"},"(platform)")," - ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_initappforpage"}),"https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_initappforpage"))),Object(i.b)("p",null,"Returned data will be passed to each controller as an ",Object(i.b)("inlineCode",{parentName:"p"},"appData"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"viewer.app.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"export const initAppForPage = async ({ reportError }) => {\n    let someInitialData = {};\n    try {\n      console.log('App inited!');\n      someInitialData = await getInitialData();\n    } catch(error) {\n      reportError(error);\n    }\n    return { someInitialData }; // Will be available in `controller`\n};\n")),Object(i.b)("h4",{id:"editorappts"},Object(i.b)("inlineCode",{parentName:"h4"},"editor.app.ts")),Object(i.b)("p",null,"An Entry-point for the ",Object(i.b)("inlineCode",{parentName:"p"},"editor")," bundle. For more info read ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/editor-platform/platform-articles/application-structure-and-lifecycle#editor-platform_platform-articles_application-structure-and-lifecycle_application-life-cycle-and-structure"}),"editor app docs"),"\nYou can use ",Object(i.b)("inlineCode",{parentName:"p"},"editorScriptBuilder")," to build editor script by configuring it using your manifest, app's event handler and registering editor.controller."),Object(i.b)("p",null,"In the future, we'll register the widget under the hood as we do for ",Object(i.b)("inlineCode",{parentName:"p"},"viewerScript"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import productWidget from './components/ProductPage/editor.controller';\n\nexport default editorScriptBuilder()\n  .withEditorReady(editorReady)\n  .withAppManifest(appManifest)\n  .withEventHandler(eventHandler)\n  .withWidget(productWidget)\n  .build();\n")),Object(i.b)("h3",{id:"app-configuration-files"},"App configuration files"),Object(i.b)("p",null,'As you noticed, we are using "magic" to reduce boilerplate in many parts of the app. We are going to improve it in the future, so in the future we\'re going to simplify ',Object(i.b)("inlineCode",{parentName:"p"},"editor.app.ts")," as well.\nTo bring it to life we need some pre-configuration from the user."),Object(i.b)("h4",{id:"applicationjson"},Object(i.b)("inlineCode",{parentName:"h4"},".application.json")),Object(i.b)("p",null,"This is a configuration JSON object located in the project's root. Here we should specify ",Object(i.b)("inlineCode",{parentName:"p"},'"appDefinitionId"')," from the Dev Center. Yoshi uses it to override URLs during the local development to point viewerScript and editorScript bundles to the local code served by flow."),Object(i.b)("h4",{id:"componentjson"},Object(i.b)("inlineCode",{parentName:"h4"},".component.json")),Object(i.b)("p",null,"Each component should contain a single configuration file in the component's directory root. We support only ",Object(i.b)("inlineCode",{parentName:"p"},'"id"')," field, which is controller ",Object(i.b)("inlineCode",{parentName:"p"},"type")," that you defined when you created and added the controller to the stage. It's needed in order to match between each controller config to its matching controller logic and for URL overrides for local development."))}s.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(f,p({ref:t},c,{components:n})):r.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);