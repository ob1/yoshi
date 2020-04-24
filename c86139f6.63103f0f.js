(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{183:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(1),i=t(6),r=(t(0),t(210)),a={id:"split-chunks",title:"Split Chunks",sidebar_label:"Split Chunks"},c={id:"version-4.x/legacy-guides/split-chunks",title:"Split Chunks",description:"## How do I separately bundle common logic for multiple entries?",source:"@site/versioned_docs/version-4.x/legacy-guides/split-chunks.md",permalink:"/yoshi/docs/legacy-guides/split-chunks",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/split-chunks.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572998,sidebar_label:"Split Chunks",sidebar:"version-4.x/docs",previous:{title:"Moment.js optimization",permalink:"/yoshi/docs/legacy-guides/momentjs-optimization"},next:{title:"How to use SVG?",permalink:"/yoshi/docs/legacy-guides/svg"}},l=[{value:"How do I separately bundle common logic for multiple entries?",id:"how-do-i-separately-bundle-common-logic-for-multiple-entries",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-do-i-separately-bundle-common-logic-for-multiple-entries"},"How do I separately bundle common logic for multiple entries?"),Object(r.b)("p",null,"If you are using multiple entries you might consider using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(r.b)("inlineCode",{parentName:"a"},"yoshi.splitChunks")),", it will create a separate file (chunk) consisting of common modules shared between multiple entry points. This results in page speed optimizations as the browser can quickly serve the shared code from cache, rather than being forced to load a larger bundle whenever a new page is visited."),Object(r.b)("p",null,"If you want to add it, go to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and add the ",Object(r.b)("inlineCode",{parentName:"p"},"commonChunks")," option, the value can be a ",Object(r.b)("em",{parentName:"p"},"boolean")," or an ",Object(r.b)("em",{parentName:"p"},"object"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n  },\n  "splitChunks": true\n}\n')),Object(r.b)("p",null,"Insert ",Object(r.b)("inlineCode",{parentName:"p"},"true")," for the default configuration and an object for custom configuration, it is the same config you would normally insert to the plugin -> ",Object(r.b)("inlineCode",{parentName:"p"},"optimization.splitChunks: <config>")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'// default configuration\n{\n  "chunks": "all",\n  "name": "commons",\n  "minChunks": 2\n};\n')),Object(r.b)("p",null,"Once the plugin is active it will generate the following files if needed:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.chunk.js")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.chunk.min.js")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.chunk.js.map")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.css")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.min.css")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"commons.css.map"))),Object(r.b)("p",null,"Don't forget to add them into your html file before the entry point."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<script\n  src="commons.chunk<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n<script\n  src="entry.bundle<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<link\n  rel="stylesheet"\n  type="text/css"\n  href="commons<% if (!debug) { %>.min<% } %>.css"\n/>\n<link\n  rel="stylesheet"\n  type="text/css"\n  href="app<% if (!debug) { %>.min<% } %>.css"\n/>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," since ",Object(r.b)("inlineCode",{parentName:"p"},"1.1.0")," version (webpack 4 support), if you're customizing ",Object(r.b)("inlineCode",{parentName:"p"},"splitChunks")," with ",Object(r.b)("em",{parentName:"p"},"configuration object"),", you should pass ",Object(r.b)("inlineCode",{parentName:"p"},'splitChunks.chunks: "all" | "async" | "initial"')," option.\nPlease look into ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"RIP CommonsChunkPlugin")," to receive all advantage of webpack 4 ",Object(r.b)("inlineCode",{parentName:"p"},"splitChunks")," optimizations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note 2:")," consider chunk filename update after ",Object(r.b)("inlineCode",{parentName:"p"},"1.1.0"),": ",Object(r.b)("inlineCode",{parentName:"p"},"chunk")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"bundle"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"- commons.bundle.js\n+ commons.chunk.js\n")))}p.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||r;return t?i.a.createElement(d,c({ref:n},s,{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);