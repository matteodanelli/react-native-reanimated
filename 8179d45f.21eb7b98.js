(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(242)),o={id:"useAnimatedReaction",title:"useAnimatedReaction",sidebar_label:"useAnimatedReaction"},s={id:"api/useAnimatedReaction",title:"useAnimatedReaction",description:"useAnimatedReaction hook allows performing certain actions on some shared values' change. The key idea is, all of the shared values included in the first worklet are the inputs set. Every time any of those change both worklets are triggered in the order specified above. Also the second worklet may modify any shared values excluding those used in the first worklet.",source:"@site/docs/api/useAnimatedReaction.md",permalink:"/react-native-reanimated/docs/next/api/useAnimatedReaction",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/useAnimatedReaction.md",version:"next",sidebar_label:"useAnimatedReaction",sidebar:"docs",previous:{title:"useAnimatedRef",permalink:"/react-native-reanimated/docs/next/api/useAnimatedRef"},next:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/next/api/useAnimatedProps"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useAnimatedReaction")," hook allows performing certain actions on some shared values' change. The key idea is, all of the shared values included in the first worklet are the inputs set. Every time any of those change both worklets are triggered in the order specified above. Also the second worklet may modify any shared values excluding those used in the first worklet."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"prepare-function"},Object(i.b)("inlineCode",{parentName:"h4"},"prepare")," ","[Function]"),Object(i.b)("p",null,"worklet used for data preparation for the second parameter. It also defines the inputs, in other words on which shared values change will it be called."),Object(i.b)("h4",{id:"react-function"},Object(i.b)("inlineCode",{parentName:"h4"},"react")," ","[Function]"),Object(i.b)("p",null,"worklet which takes data prepared by the ",Object(i.b)("inlineCode",{parentName:"p"},"prepare")," callback (being the first parameter of the hook) and performs some actions. As a second parameter it receives a result of the previous ",Object(i.b)("inlineCode",{parentName:"p"},"prepare")," call(starting with ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"). It can modify any shared values but those which are mentioned in the first worklet. Beware of that, because this may result in endless loop and high cpu usage."),Object(i.b)("h4",{id:"dependencies-array"},Object(i.b)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),Object(i.b)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{10}","{10}":!0}),"const App = () => {\n  const [state, setState] = useState(0);\n  const sv1 = useSharedValue(0);\n  const sv2 = useSharedValue(0);\n\n  const derived = useAnimatedReaction(() => {\n    return sv1.value * state;\n  }, (result, previous) => {\n    if (result !== previous) {\n        sv2.value = result - 5;\n    }\n  }, dependencies);\n  //...\n  return <></>\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklets will be rebuilt if there is any change in their bodies or any values from their closure(variables from outer scope used in worklet),"),Object(i.b)("li",{parentName:"ul"},"empty array(",Object(i.b)("inlineCode",{parentName:"li"},"[]"),") - worklets will be rebuilt only if their body change,"),Object(i.b)("li",{parentName:"ul"},"array of values(",Object(i.b)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklets will be rebuilt if there is any change in thier bodies or any values from the given array.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const x = useSharedValue(0);\nconst x2 = useSharedValue(0);\n\nconst maxX2 = 80;\nuseAnimatedReaction(\n  () => {\n    return x.value / 1.5;\n  },\n  (data) => { // data holds what was returned from the first worklet's execution\n    if (x2.value < maxX2) {\n      x2.value = data;\n    }\n  }\n);\n")))}u.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);