(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(242)),o={id:"installation",title:"Installation",sidebar_label:"Installation"},l={id:"version-2.0.0-rc.2/installation",title:"Installation",description:"Reanimated 2 is primarily built in C++ using Turbo Modules infrastructure which is not yet completely deployed in React Native (specifically on Android).",source:"@site/versioned_docs/version-2.0.0-rc.2/installation.md",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/installation",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/installation.md",version:"2.0.0-rc.2",sidebar_label:"Installation",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"About React Native Reanimated",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/about"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/worklets"}},c=[{value:"I just want to try new Reanimated...",id:"i-just-want-to-try-new-reanimated",children:[]},{value:"Installing the package",id:"installing-the-package",children:[{value:"Reanimated 2 in Expo",id:"reanimated-2-in-expo",children:[]},{value:"Using master branch builds",id:"using-master-branch-builds",children:[]}]},{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[{value:"Proguard",id:"proguard",children:[]}]},{value:"iOS",id:"ios",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Reanimated 2 is primarily built in C++ using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"}),"Turbo Modules")," infrastructure which is not yet completely deployed in React Native (specifically on Android).\nBecause of that the installation of new Reanimated requires additional steps apart from just adding a dependency to ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," ."),Object(i.b)("p",null,"As a consequence of the above the minimum supported version of React Native is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.62.0"}),"v0.62"),".\nBefore you continue with the installation, make sure that you are running the supported version of React Native."),Object(i.b)("p",null,"Please follow the below instructions for Android and iOS."),Object(i.b)("h2",{id:"i-just-want-to-try-new-reanimated"},"I just want to try new Reanimated..."),Object(i.b)("p",null,"We realize the project setup is very complex and you may not want to add that to your existing app rightaway.\nIf you just want to play with Reanimated 2, we made a clean repo that has all the steps configured so that you can pull it from github and give the new version a shot."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Visit the Playground repo here")," or copy the command below to do a git clone:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> git clone git@github.com:software-mansion-labs/reanimated-2-playground.git\n")),Object(i.b)("p",null,"Continue with the instruction below if you'd like to install Reanimated v2 on an existing or new React Native project."),Object(i.b)("h2",{id:"installing-the-package"},"Installing the package"),Object(i.b)("p",null,"First step is to install ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," alpha as a dependency in your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> yarn add react-native-reanimated@next\n")),Object(i.b)("h3",{id:"reanimated-2-in-expo"},"Reanimated 2 in Expo"),Object(i.b)("p",null,"To use experimental support of Reanimated 2 in the Expo managed apps follow ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/reanimated/"}),"their installation instructions"),"."),Object(i.b)("h3",{id:"using-master-branch-builds"},"Using master branch builds"),Object(i.b)("p",null,"To use Reanimated 2 built from the master branch:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"go to the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-reanimated/actions?query=workflow%3A%22Build+npm+package%22"}),'"Build npm package" workflow in Reanimated repository')),Object(i.b)("li",{parentName:"ul"},"select latest build and download ",Object(i.b)("inlineCode",{parentName:"li"},"react-native-reanimated-2.0.0-alpha.tgz")," artifact"),Object(i.b)("li",{parentName:"ul"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"tar zxvf react-native-reanimated-2.0.0-alpha.tgz.zip")," to unpack zip (or unpack it manually)"),Object(i.b)("li",{parentName:"ul"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn add file:react-native-reanimated-2.0.0-*.tgz")," to install the package"),Object(i.b)("li",{parentName:"ul"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"cd android && ./gradlew clean"))),Object(i.b)("h2",{id:"babel-plugin"},"Babel plugin"),Object(i.b)("p",null,"Add Reanimated's babel plugin to your ",Object(i.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"NOTE:"))," Reanimated plugin has to be listed last.")),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Turn on Hermes engine by editing ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/build.gradle"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{2}","{2}":!0}),"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Plug Reanimated in ",Object(i.b)("inlineCode",{parentName:"li"},"MainApplication.java"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{1-2,12-15}","{1-2,12-15}":!0}),'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n      @Override\n      protected String getJSMainModuleName() {\n        return "index";\n      }\n\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new ReanimatedJSIModulePackage(); // <- add\n      }\n    };\n  ...\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"NOTE:"))," In previous releases, we required an additional step which is turning on Turbo Modules.\nIf you are upgrading from alpha.{ <=3 } please remove the following lines:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Java"}),"static {\n   ReactFeatureFlags.useTurboModules = true;\n }\n")),Object(i.b)("p",{parentName:"blockquote"},"from ",Object(i.b)("inlineCode",{parentName:"p"},"MainActivity.java"),".")),Object(i.b)("p",null,"You can refer ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8"}),"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Playground repo"),"."),Object(i.b)("h3",{id:"proguard"},"Proguard"),Object(i.b)("p",null,"If you're using Proguard, make sure to add rule preventing it from optimizing Turbomodule classes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"-keep class com.facebook.react.turbomodule.** { *; }\n")),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("p",null,"On iOS installation is automatic."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"NOTE:"))," In previous releases, the installation process was manual and required turning turbo modules on. Some libraries break when turbo modules are enabled so we decided to change our approach and we no longer\nuse the standard way for registering a turbo module. It let us simplify the installation process and as a result, you can safely\nundo all installation steps from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/2.0.0-alpha.7/installation#ios"}),"previous instruction"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"NOTE:"))," If you want to turn off autoinstall on iOS please add the following compilation flag:\n",Object(i.b)("inlineCode",{parentName:"p"},"DONT_AUTOINSTALL_REANIMATED"),".\nIt can be done by pasting:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"post_install do |installer|\n   installer.pods_project.targets.each do |target|\n       target.build_configurations.each do |config|\n           config.build_settings['OTHER_CPLUSPLUSFLAGS'] = '-DDONT_AUTOINSTALL_REANIMATED'\n       end\n   end\nend\n")),Object(i.b)("p",{parentName:"blockquote"},"to your ",Object(i.b)("inlineCode",{parentName:"p"},"Podfile"),". Don't forget to run ",Object(i.b)("inlineCode",{parentName:"p"},"pod install")," after doing that.")))}b.isMDXComponent=!0},242:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);