(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(217)),i={id:"project-types",title:"Project Types",sidebar_label:"Project Types"},c={id:"version-4.x/getting-started/project-types",title:"Project Types",description:"The following Project Types can be generated using `create-yoshi-app`:",source:"@site/versioned_docs/version-4.x/getting-started/project-types.md",permalink:"/yoshi/docs/getting-started/project-types",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/getting-started/project-types.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572493,sidebar_label:"Project Types"},s=[{value:"Client",id:"client",children:[]},{value:"Fullstack",id:"fullstack",children:[]},{value:"Node Library",id:"node-library",children:[]},{value:"Server",id:"server",children:[]},{value:"Business Manager Module",id:"business-manager-module",children:[]},{value:"Out Of Iframe",id:"out-of-iframe",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following Project Types can be generated using ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app"),":"),Object(o.b)("h2",{id:"client"},"Client"),Object(o.b)("p",null,"Only Client project built with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),". The result is a bundle that will be uploaded to the cdn."),Object(o.b)("h2",{id:"fullstack"},"Fullstack"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," Server + Client project. The result is similar to the client, with a server that serves an html file which uses the created bundle."),Object(o.b)("h2",{id:"node-library"},"Node Library"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/creating-node-modules"}),"Node.js")," module that should be used by other Node.js applications as a 3rd party dependency."),Object(o.b)("h2",{id:"server"},"Server"),Object(o.b)("p",null,"Only Server project"),Object(o.b)("h2",{id:"business-manager-module"},"Business Manager Module"),Object(o.b)("p",null,"A client project that integrate with business manager APIs."),Object(o.b)("h2",{id:"out-of-iframe"},"Out Of Iframe"),Object(o.b)("p",null,"An application that has it's view components written in React and run in the viewer.\nThe application business logic runs inside the platform worker.\nFor more information head to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/client-frameworks#viewer-platform-(ooi)"}),"official docs"),"."),Object(o.b)("hr",null),Object(o.b)("p",null,"For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/master/packages/create-yoshi-app/templates"}),"the templates"),"\nfor those project types"))}p.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);