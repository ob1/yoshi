(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(216)),i={id:"react-binding",title:"React Binding",sidebar_label:"React Binding"},c={id:"yoshi-server/react-binding",title:"React Binding",description:"> The React bindings for Yoshi Server lets your components consume and manage data from the server easily.",source:"@site/docs/yoshi-server/react-binding.md",permalink:"/yoshi/docs/next/yoshi-server/react-binding",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/yoshi-server/react-binding.md",version:"next",lastUpdatedBy:"Yaniv Efraim",lastUpdatedAt:1588578613,sidebar_label:"React Binding"},s=[{value:"Installation",id:"installation",children:[]},{value:"Fetching data",id:"fetching-data",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The React bindings for Yoshi Server lets your components consume and manage data from the server easily.")),Object(o.b)("p",null,"Passing the ",Object(o.b)("inlineCode",{parentName:"p"},"httpClient")," as a prop to your components might be cumbersome. Instead, we suggest using the ",Object(o.b)("inlineCode",{parentName:"p"},"useRequest")," hook, together with the `HttpProvider. This will make your code cleaner and will also simplify data management code by tracking error and loading states for you."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm install yoshi-server-react\n")),Object(o.b)("h3",{id:"fetching-data"},"Fetching data"),Object(o.b)("p",null,"Wrap your component with the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpProvider"),", and pass it an ",Object(o.b)("inlineCode",{parentName:"p"},"httpClient")," instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'//client.tsx\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport HttpClient from "yoshi-server-client";\nimport { HttpProvider } from "yoshi-server-react";\nimport App from "./components/App";\n\nconst client = new HttpClient();\n\nReactDOM.render(\n  <HttpProvider client={client}>\n    <App />\n  </HttpProvider>,\n  document.getElementById("root")\n);\n')),Object(o.b)("p",null,"Next, use the ",Object(o.b)("inlineCode",{parentName:"p"},"useRequest")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React Hook")," inside your React component to fetch data from your server function. When your component renders, ",Object(o.b)("inlineCode",{parentName:"p"},"useRequest")," returns an object that contains loading, error, and data properties you can use to render your UI."),Object(o.b)("p",null,"Fetch data using ",Object(o.b)("inlineCode",{parentName:"p"},"useRequest"),", and handle the response:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// App.tsx\nimport React from "react";\nimport { useRequest } from "yoshi-server-react";\nimport { greet } from "../../api/greeting.api";\n\nconst App = () => {\n  // Fetch Data\n  const req = useRequest(greet, "Yaniv");\n\n  // Show a loading message\n  if (req.loading) {\n    return <p data-testid="loading">Loading...</p>;\n  }\n\n  // Show an error message\n  if (req.error) {\n    return <p data-testid="error">Error :(</p>;\n  }\n\n  // render the data\n  return (\n    <div>\n      <h2>{req.data.greeting}</h2>\n    </div>\n  );\n};\n\nexport default App;\n')),Object(o.b)("h4",{id:"how-does-it-work"},"How does it work?"),Object(o.b)("p",null,"As our query executes and the values of loading, error, and data change, the App component can intelligently render different UI elements according to the query's state:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As long as loading is true (indicating the query is still in flight), the component presents a ",Object(o.b)("inlineCode",{parentName:"p"},"Loading...")," notice.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When loading is false and there is no error, the query has completed. The component renders a greeting data returned by the server.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Show an error messege in case there's an ",Object(o.b)("inlineCode",{parentName:"p"},"req.error")," (",Object(o.b)("inlineCode",{parentName:"p"},"req.error")," contains an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"}),"Error")," object)."))))}l.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);