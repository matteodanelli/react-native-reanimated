(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{212:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(242)),i={id:"web-support",title:"Web Support",sidebar_label:"Web Support"},c={id:"version-2.0.0-rc.2/web-support",title:"Web Support",description:"Since",source:"@site/versioned_docs/version-2.0.0-rc.2/web-support.md",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/web-support",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/web-support.md",version:"2.0.0-rc.2",sidebar_label:"Web Support",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"Migrating from Reanimated 1.x",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/migration"},next:{title:"Troubleshooting common problems",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/troubleshooting"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated/releases/tag/2.0.0-alpha.7"}),"2.0.0-alpha.7"),"\nrelease it's possible to launch reanimated 2 in a web browser. For that case all of the functionalities are implemented purely in javascript, hence the efficiency of the animations might drop."),Object(o.b)("p",null,"If you use\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"playground"),"\nand want to start the app in the browser, just type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn web\n")),Object(o.b)("p",null,"If you want to start example applications from the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated"}),"reanimated repository"),"\nyou need to run a following command inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Example")," directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn start-web\n")))}u.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);