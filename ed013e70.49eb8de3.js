(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(254)),a={id:"stylelint-setup",title:"Stylelint Setup",sidebar_label:"Stylelint Setup"},l={id:"version-4.x/legacy-guides/stylelint-setup",title:"Stylelint Setup",description:"## Introduction",source:"@site/versioned_docs/version-4.x/legacy-guides/stylelint-setup.md",permalink:"/yoshi/docs/legacy-guides/stylelint-setup",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/stylelint-setup.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572998,sidebar_label:"Stylelint Setup"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stylelint.io"}),"Stylelint")," is a linter for stylesheet files, like CSS, LESS and SASS. It can also integrate with Prettier, to make sure code style is consistent and more maintainable. For example, consider the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".button {\n  color: #fa; /* <- what */\n}\n")),Object(o.b)("p",null,"This CSS code is problematic: color hex codes must be 6 or 3 figures long: ",Object(o.b)("inlineCode",{parentName:"p"},"#000000"),", or its shorthand ",Object(o.b)("inlineCode",{parentName:"p"},"#000"),".\nHow does Chrome handle this undefined behavior? What about IE 11? Safari? Even if it is already well tested and works exactly like we want - ",Object(o.b)("strong",{parentName:"p"},"this is an error-prone code"),", that the common developer shouldn't even bother to know about - and CSS has many of these.\nStylelint solves these code smells by warning us ",Object(o.b)("em",{parentName:"p"},"while writing our code"),", in our favorite environment. \ud83d\udc4f"),Object(o.b)("p",null,"To make this integration easy and consistent across Wix, Yoshi defines ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/master/packages/stylelint-config-yoshi"}),Object(o.b)("inlineCode",{parentName:"a"},"stylelint-config-yoshi")),", which is a custom ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stylelint.io/user-guide/configuration/"}),"Stylelint configuration")," to enable zero-configuration stylesheet linting for any application. It follows the following mindset:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only fail on errors that can cause production bugs rather than stylistic opinions"),Object(o.b)("li",{parentName:"ul"},"If it's not a critical bug, we try only to add auto-fixable rules (",Object(o.b)("inlineCode",{parentName:"li"},"yoshi lint --fix"),")")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev stylelint-config-yoshi\n")),Object(o.b)("p",null,"Add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "stylelint": {\n    "extends": "stylelint-config-yoshi"\n  }\n}\n')),Object(o.b)("p",null,"Finally, configure your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to run Stylelint after ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi lint"),":"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yoshi lint && stylelint")))}p.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(y,l({ref:t},s,{components:n})):i.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);