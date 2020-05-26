(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(284)),i={id:"assets",title:"Assets",sidebar_label:"Assets"},s={id:"version-4.x/styles-and-assets/assets",title:"Assets",description:"With webpack, using static assets like images works similarly to CSS.",source:"@site/versioned_docs/version-4.x/styles-and-assets/assets.md",permalink:"/yoshi/docs/styles-and-assets/assets",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/styles-and-assets/assets.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1590505197,sidebar_label:"Assets",sidebar:"version-4.x/docs",previous:{title:"Node API",permalink:"/yoshi/docs/node-api"},next:{title:"Disable CSS Modules",permalink:"/yoshi/docs/styles-and-assets/disable-css-modules"}},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With webpack, using static assets like images works similarly to CSS."),Object(o.b)("p",null,"You can ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"import")," a file right in a JavaScript/TypeScript module"),". This tells webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," attribute of an image or the ",Object(o.b)("inlineCode",{parentName:"p"},"href")," of a link to a PDF."),Object(o.b)("p",null,"To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"}),"data URI")," instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png."),Object(o.b)("p",null,"Here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport logo from "./logo.png"; // Tell webpack this JS file uses this image\n\nconsole.log(logo); // /media/logo.ea74b57b.png\n\nfunction Header() {\n  // Import result is the URL of your image\n  return <img src={logo} alt="Logo" />;\n}\n\nexport default Header;\n')),Object(o.b)("p",null,"This ensures that when the project is built, webpack will correctly move the images into the build folder, and provide us with correct paths."),Object(o.b)("p",null,"This works in CSS too:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".Logo {\n  background-image: url(./logo.png);\n}\n")),Object(o.b)("p",null,"webpack finds all relative module references in CSS (they start with ",Object(o.b)("inlineCode",{parentName:"p"},"./"),") and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by webpack from content hashes. If the file content changes in the future, webpack will give it a different name in production so you don\u2019t need to worry about long-term caching of assets."))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);