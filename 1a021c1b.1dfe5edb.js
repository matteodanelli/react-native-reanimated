(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(242)),c={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},l={id:"version-2.0.0-rc.2/api/withDecay",title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.0.0-rc.2/api/withDecay.md",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withDecay",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/api/withDecay.md",version:"2.0.0-rc.2",sidebar_label:"withDecay",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withSpring"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/cancelAnimation"}},o=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Starts a velocity based "scroll" animation.'),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"options-object"},Object(i.b)("inlineCode",{parentName:"h4"},"options")," ","[object]"),Object(i.b)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"velocity"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initial velocity")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deceleration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.998"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rate of decay")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clamp"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[]"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of two animation boundaries (optional)")))),Object(i.b)("h4",{id:"callback-function"},Object(i.b)("inlineCode",{parentName:"h4"},"callback")," ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"optional"}),"function")),Object(i.b)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",Object(i.b)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"useAnimatedStyle"}),Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: evt => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}u.isMDXComponent=!0}}]);