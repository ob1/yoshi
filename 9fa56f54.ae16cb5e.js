(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(9),i=(n(0),n(283)),o={id:"babel-preset-yoshi",title:"Babel Preset Yoshi",sidebar_label:"Babel Preset Yoshi"},l={id:"version-4.x/babel-preset-yoshi",title:"Babel Preset Yoshi",description:"Introduction",source:"@site/versioned_docs/version-4.x/babel-preset-yoshi.md",permalink:"/yoshi/docs/babel-preset-yoshi",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/babel-preset-yoshi.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589795517,sidebar_label:"Babel Preset Yoshi"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Modes",id:"modes",children:[]},{value:"Wanna know what&#39;s inside?",id:"wanna-know-whats-inside",children:[{value:"Environment specific plugins:",id:"environment-specific-plugins",children:[]}]}],b={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Yoshi comes with its own preset for full-stack, client or Node.js projects. It is pre-configured, maintained and tuned for the current state of Yoshi."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," There is no need to configure Babel with ",Object(i.b)("inlineCode",{parentName:"p"},".babelrc")," or ",Object(i.b)("inlineCode",{parentName:"p"},"babel.config.js"),"."),Object(i.b)("h2",{id:"modes"},"Modes"),Object(i.b)("p",null,"The preset behaves differently according to the environment. The environment is determined by checking ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.BABEL_ENV"),", ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"development")," as the default if none was supplied."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV = 'test'")," - Transpile for current node version for fast testing in mind.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV = 'development'")," - Transpile for modern browsers for fast builds in mind.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV = 'production'")," - Optimize bundle, compile for all possible targets from ",Object(i.b)("inlineCode",{parentName:"p"},"IE10"),", prepare for uglifycation, with full browsers support, runtime optimization and small bundle size in mind."))),Object(i.b)("h2",{id:"wanna-know-whats-inside"},"Wanna know what's inside?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/preset-env"}),"preset-env")," for ESNext to ES5 transform. Moreover, you can customize current targets and module type to build for. Will use all targets and commonjs module type as a default values. Configured with target ",Object(i.b)("inlineCode",{parentName:"li"},"node")," for ",Object(i.b)("inlineCode",{parentName:"li"},"test")," environment."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/preset-react"}),"preset-react")," for JSX and Flow transforms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/transform-runtime"}),"transform-runtime")," externalize references to helpers and builtins, automatically polyfilling your code without polluting globals."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/transform-class-properties"}),"transform-class-properties"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/transform-decorators"}),"transform-decorators")," (legacy).")),Object(i.b)("h3",{id:"environment-specific-plugins"},"Environment specific plugins:"),Object(i.b)("h4",{id:"test"},Object(i.b)("inlineCode",{parentName:"h4"},"test")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/airbnb/babel-plugin-dynamic-import-node"}),"dynamic-import-node")," - Babel plugin to transpile import() to a deferred require(), for node."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/syntax-object-rest-spread"}),"syntax-object-rest-spread")," Allow the syntax of Object ",Object(i.b)("inlineCode",{parentName:"li"},"{ ...rest, ...spread }"))),Object(i.b)("h4",{id:"development"},Object(i.b)("inlineCode",{parentName:"h4"},"development")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import"}),"syntax-dynamic-import")," - Allow the syntax of dynamic imports since all transformations done by webpack."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/syntax-object-rest-spread"}),"syntax-object-rest-spread")," Allow the syntax of Object ",Object(i.b)("inlineCode",{parentName:"li"},"{ ...rest, ...spread }"))),Object(i.b)("h4",{id:"production"},Object(i.b)("inlineCode",{parentName:"h4"},"production")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import"}),"syntax-dynamic-import")," - Allow the syntax of dynamic imports since all transformations done by webpack."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types"}),"remove-prop-types")," only for production builds."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/plugins/transform-object-rest-spread"}),"proposal-object-rest-spread")," - Transform Object ",Object(i.b)("inlineCode",{parentName:"li"},"{ ...rest, ...spread }"))))}c.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);