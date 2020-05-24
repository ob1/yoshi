(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),o=(n(0),n(283)),a={id:"overview",title:"Structure Overview",sidebar_label:"Overview"},c={id:"editor-flow/structure-api/overview",title:"Structure Overview",description:"Basic app structure",source:"@site/docs/editor-flow/structure-api/overview.md",permalink:"/yoshi/docs/next/editor-flow/structure-api/overview",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/editor-flow/structure-api/overview.md",version:"next",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589989555,sidebar_label:"Overview",sidebar:"editor-flow",previous:{title:"CLI API",permalink:"/yoshi/docs/next/editor-flow/cli-API"},next:{title:"App Configuration Level",permalink:"/yoshi/docs/next/editor-flow/structure-api/app-configuration"}},l=[{value:"Basic app structure",id:"basic-app-structure",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-app-structure"},"Basic app structure"),Object(o.b)("p",null,"After you bootstraped the app via create-yoshi-app, the structure will be similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"my-app\n\u251c\u2500\u2500 .application.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 viewer.app.ts\n    \u251c\u2500\u2500 editor.app.ts\n    \u251c\u2500\u2500 assets\n    \u2502   \u2514\u2500\u2500 locales\n    \u2514\u2500\u2500 components\n        \u2514\u2500\u2500 MyComponent\n            \u251c\u2500\u2500 .component.json\n            \u251c\u2500\u2500 controller.ts\n            \u251c\u2500\u2500 controller.spec.ts\n            \u251c\u2500\u2500 Widget\n            \u2502   \u251c\u2500\u2500 index.ts\n            \u2502   \u251c\u2500\u2500 Widget.tsx\n            \u2502   \u251c\u2500\u2500 Widget.spec.ts\n            \u2502   \u251c\u2500\u2500 Widget.e2e.ts\n            \u2502   \u2514\u2500\u2500 Widget.st.css\n            \u2514\u2500\u2500 Settings\n                \u251c\u2500\u2500 index.ts\n                \u251c\u2500\u2500 Settings.tsx\n                \u251c\u2500\u2500 Settings.spec.ts\n                \u251c\u2500\u2500 Settings.e2e.ts\n                \u2514\u2500\u2500 Settings.scss\n")),Object(o.b)("p",null,"Yoshi flow editor requires users to use strictly defined file structure. This allows editor flow to collect controllers, wrap some methods and pass additional helpers as a ",Object(o.b)("inlineCode",{parentName:"p"},"flowAPI"),"."),Object(o.b)("p",null,"In next sections, we'll explain usage of extended platform API with editor flow methods and what boilerplate code can be bypassed, since it's already handled in most optimal way behind the scenes."),Object(o.b)("p",null,"Editor flow apps structure consist of 3 levels:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"App configuration level: root of the project with configuration file (",Object(o.b)("inlineCode",{parentName:"li"},".application.json"),")"),Object(o.b)("li",{parentName:"ul"},"Application level: Entry points for viewerScript (",Object(o.b)("inlineCode",{parentName:"li"},"viewer.app.ts"),") and editorScript (",Object(o.b)("inlineCode",{parentName:"li"},"editor.app.ts"),") - files that's running in worker for all components. Located under ",Object(o.b)("inlineCode",{parentName:"li"},"src")," direcotry."),Object(o.b)("li",{parentName:"ul"},"Component level: Single components located in ",Object(o.b)("inlineCode",{parentName:"li"},"src/components/:componentName")," directories. Includes ",Object(o.b)("inlineCode",{parentName:"li"},"Widget"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Settings")," panel and ",Object(o.b)("inlineCode",{parentName:"li"},"controller"),".")))}p.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);