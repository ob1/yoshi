(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(284)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},p={id:"editor-flow/getting-started",title:"Getting Started",description:"## Generate an Editor Flow App with `create-yoshi-app` tool",source:"@site/docs/editor-flow/getting-started.md",permalink:"/yoshi/docs/next/editor-flow/getting-started",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/editor-flow/getting-started.md",version:"next",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589989555,sidebar_label:"Getting Started",sidebar:"editor-flow",previous:{title:"Editor Flow Overview",permalink:"/yoshi/docs/next/editor-flow/overview"},next:{title:"CLI API",permalink:"/yoshi/docs/next/editor-flow/cli-API"}},l=[{value:"Generate an Editor Flow App with <code>create-yoshi-app</code> tool",id:"generate-an-editor-flow-app-with-create-yoshi-app-tool",children:[{value:"Create a new Out of Iframe app",id:"create-a-new-out-of-iframe-app",children:[]},{value:"Migrate Out of iFrame app to the new Editor Flow",id:"migrate-out-of-iframe-app-to-the-new-editor-flow",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"generate-an-editor-flow-app-with-create-yoshi-app-tool"},"Generate an Editor Flow App with ",Object(o.b)("inlineCode",{parentName:"h2"},"create-yoshi-app")," tool"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1521229/77897090-e2d24480-7281-11ea-9cbf-e3fdc4d8c509.PNG",alt:"E52C44BF-55C7-407E-AA9C-0AE07E1B7A71"}))),Object(o.b)("p",null,"Run create-yoshi-app and generate the project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-yoshi-app@latest my-app\n")),Object(o.b)("p",null,"Now, you'll be prompt with questions."),Object(o.b)("p",null,"Fill your ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"email"),"."),Object(o.b)("p",null,"Pick ",Object(o.b)("inlineCode",{parentName:"p"},"flow-editor - Out of Iframe")," or ",Object(o.b)("inlineCode",{parentName:"p"},"flow-editor - Platform app")," according to the type of app you want to create.\nIn most cases you'll need ",Object(o.b)("em",{parentName:"p"},"Out of iFrame"),", to read more about Platform apps, please go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/next/editor-flow/platform-apps-support"}),"Platform apps section"),"."),Object(o.b)("p",null,"According to your needs, the next steps could vary:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#create-a-new-out-of-iframe-app"}),"Create a new Out of Iframe app")," if you want to create Out of iFrame app from scratch "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#migrate-out-of-iframe-app-to-the-new-editor-flow"}),"Migrate Out of iFrame app to the new Editor Flow")," if you already have Out of IFrame app, but want to migrate it to use new Editor Flow.")),Object(o.b)("h3",{id:"create-a-new-out-of-iframe-app"},"Create a new Out of Iframe app"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This section is useful for new apps. If your Out of iFrame app is already registered in Dev Center, please follow the ",Object(o.b)("em",{parentName:"p"},"Migrate Out of iFrame app to new Editor Flow")," section.")),Object(o.b)("p",null,"Pick ",Object(o.b)("inlineCode",{parentName:"p"},"Yes, I want to register my app in Dev Center")," option. Fill the name of your new app after."),Object(o.b)("p",null,"In the next question, we'll ask to create a ",Object(o.b)("inlineCode",{parentName:"p"},"Widget")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Page")," for your app. Note, you can create multiple ones. If you are finished, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Finish registration")," option."),Object(o.b)("p",null,"The new project will be created in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.wix.com"}),"Dev Center")," and generated on your local machine.\nMoreover, we already configure it based on your app's artifact, ids, and links to all bundles which will be generated by our flow."),Object(o.b)("p",null,"Start your local experience by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-app\nnpm run start\n")),Object(o.b)("p",null,"After build will be finished, we'll open a webpage with the next steps you might be interested in."),Object(o.b)("p",null,"In few words you just need to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"register your app on the LifeCycle"),Object(o.b)("li",{parentName:"ul"},"create a new blank Wix website"),Object(o.b)("li",{parentName:"ul"},"add your app to this website via ",Object(o.b)("inlineCode",{parentName:"li"},"Test your app")," button in Dev Center's app page."),Object(o.b)("li",{parentName:"ul"},"update ",Object(o.b)("inlineCode",{parentName:"li"},"dev/sites.js")," file with a newly created website by using editor and viewer links")),Object(o.b)("p",null,"After the latest steps will be finished, you'll have a fully configured app to start working in a production environment with a single ",Object(o.b)("inlineCode",{parentName:"p"},"npm run start")," command."),Object(o.b)("h3",{id:"migrate-out-of-iframe-app-to-the-new-editor-flow"},"Migrate Out of iFrame app to the new Editor Flow"),Object(o.b)("p",null,"Pick ",Object(o.b)("inlineCode",{parentName:"p"},"No, I want to use already registered app"),".\nFind your app in the list. You can use autocomplete for faster search by typing part of you app's name.\nNote, you should be a Team Member of the app to use this tool."),Object(o.b)("p",null,"After, select components to migrate. Currently we support Out of iFrame Widgets and Pages."),Object(o.b)("p",null,"Then, we'll bootstrap a project with components you select. Note, the code of these components is still a boilerplate. The idea is to show how new structure should look like and to configure ",Object(o.b)("inlineCode",{parentName:"p"},"appDefinitionId")," and component's ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"s on your local project."),Object(o.b)("p",null,"Since every directory in ",Object(o.b)("inlineCode",{parentName:"p"},"src/components")," represents a single component, we need to move the main parts of your component to be in the same directory. It's ",Object(o.b)("inlineCode",{parentName:"p"},"Widget"),", ",Object(o.b)("inlineCode",{parentName:"p"},"controller"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," panel."),Object(o.b)("h5",{id:"updating-widget"},"Updating ",Object(o.b)("inlineCode",{parentName:"h5"},"Widget")),Object(o.b)("p",null,"Widget is still a React Component. Move the content related to UI to be located in ",Object(o.b)("inlineCode",{parentName:"p"},"Widget")," directory and make sure your Widget.ts file ",Object(o.b)("inlineCode",{parentName:"p"},"export default")," your component.\nRemove any logic related to ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOM.render"),". We don't need it anymore. The Widget will be automatically rendered in both editor and viewer environments."),Object(o.b)("h5",{id:"updating-settings"},"Updating ",Object(o.b)("inlineCode",{parentName:"h5"},"Settings")),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," panel is a React Component, make sure your Settings.ts file ",Object(o.b)("inlineCode",{parentName:"p"},"export default")," it.\nRemove any logic related to ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOM.render"),"."),Object(o.b)("h5",{id:"updating-controllerts"},"Updating ",Object(o.b)("inlineCode",{parentName:"h5"},"controller.ts")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"controller")," is a function that returns an object specified and consumed by the platform.\n",Object(o.b)("inlineCode",{parentName:"p"},"export default")," it from ",Object(o.b)("inlineCode",{parentName:"p"},"controller.ts")," file."),Object(o.b)("h5",{id:"removing-templates"},"Removing templates"),Object(o.b)("p",null,"Editor Flow is now responsible for all templates needed to render an app in iFrame. It generates ",Object(o.b)("inlineCode",{parentName:"p"},".vm")," and ",Object(o.b)("inlineCode",{parentName:"p"},".html")," files during the build and output to the ",Object(o.b)("inlineCode",{parentName:"p"},"dist/editor")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dist/settings")," directories.\nRemove ",Object(o.b)("inlineCode",{parentName:"p"},"src/templates")," directory with ",Object(o.b)("inlineCode",{parentName:"p"},".vm")," files."))}b.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(m,p({ref:t},c,{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);