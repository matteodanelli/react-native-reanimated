(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(242)),l={id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},c={id:"version-2.0.0-rc.2/api/withTiming",title:"withTiming",description:"Starts a time based animation.",source:"@site/versioned_docs/version-2.0.0-rc.2/api/withTiming.md",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withTiming",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/api/withTiming.md",version:"2.0.0-rc.2",sidebar_label:"withTiming",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useAnimatedProps"},next:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withSpring"}},o=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starts a time based animation."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"tovalue-number--string"},Object(i.b)("inlineCode",{parentName:"h4"},"toValue")," ","[number | string]"),Object(i.b)("p",null,"The target value at which the animation should conclude.\nIt can be specified as a color value by providing string like: ",Object(i.b)("inlineCode",{parentName:"p"},"rgba(255, 105, 180, 0)"),"."),Object(i.b)("p",null,"Currently supported formats are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"rgb(r, g, b)"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"rgba(r, g, b, a)"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"hsl(h, s, l)"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"hsla(h, s, l, a)"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"#rgb"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"#rgba"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"#rrggbb"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"#rrggbbaa"'))),Object(i.b)("h4",{id:"options-object"},Object(i.b)("inlineCode",{parentName:"h4"},"options")," ","[object]"),Object(i.b)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"300"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"How long the animation should last")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"easing"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"in-out quad easing"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Worklet that drives the easing curve for the animation")))),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"easing")," parameter we recommend using one of the pre-configured worklets defined in ",Object(i.b)("inlineCode",{parentName:"p"},"Easing")," module."),Object(i.b)("h4",{id:"callback-function"},Object(i.b)("inlineCode",{parentName:"h4"},"callback")," ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"optional"}),"function")),Object(i.b)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",Object(i.b)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"useAnimatedStyle"}),Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  Easing,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: withTiming(width.value, {\n        duration: 500,\n        easing: Easing.bezier(0.25, 0.1, 0.25, 1),\n      }),\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, style]} />\n      <Button onPress={() => (width.value = Math.random() * 300)} title=\"Hey\" />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);