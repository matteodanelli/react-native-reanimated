(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(254),l=a(259),i=a(246);var o=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=function(e){var t=e.content,a=t.frontMatter,n=t.metadata,i=n.title,s=n.description,m=n.nextItem,u=n.prevItem,d=n.editUrl;return r.a.createElement(c.a,{title:i,description:s},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(l.a,{frontMatter:a,metadata:n,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,d&&r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(m||u)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:m,prevItem:u}))))))}},247:function(e,t,a){"use strict";var n=a(0),r=a(249);t.a=function(){return Object(n.useContext)(r.a)}},248:function(e,t,a){"use strict";var n=a(243),r=a(247),c=a(245),l=a(250);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,i=(a=void 0===a?{}:a).logo,o=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,m=o.href||t,u={};o.target?u={target:o.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=o.srcDark&&s?o.srcDark:o.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:o.alt}}},249:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},252:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},254:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(255),l=a(250),i=a(243),o=a(245),s="",m="dark",u=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),o=Object(n.useCallback)((function(){c(s),l(s)}),[]),u=Object(n.useCallback)((function(){c(m),l(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:o,setDarkTheme:u}},d=a(249);var v=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},b=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}},h=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var g=function(e){var t=b(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(h.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},f=a(48),E=a.n(f);var p=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,o=a.backgroundColor,s=a.textColor,m=Object(n.useState)(!0),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:o,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),j=a(6),_=a(244),N=a.n(_),O=a(246),w=a(251),C=a(257),y=a.n(C),T=a(49),S=a.n(T),x=function(){return r.a.createElement("span",{className:N()(S.a.toggle,S.a.moon)})},B=function(){return r.a.createElement("span",{className:N()(S.a.toggle,S.a.sun)})},L=function(e){var t=Object(i.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(B,null)}},e))},I=a(247),D=a(256);var M=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},P=a(9),R=function(){return{scrollX:P.a.canUseDOM?window.pageXOffset:0,scrollY:P.a.canUseDOM?window.pageYOffset:0}},A=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(R()),r=a[0],c=a[1],l=function(){var t=R();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r},G=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],i=c[1],o=Object(n.useState)(0),s=o[0],m=o[1],u=Object(n.useState)(0),d=u[0],v=u[1],b=Object(n.useCallback)((function(e){null!==e&&v(e.getBoundingClientRect().height)}),[]),h=Object(D.b)(),g=M(h.hash),f=g[0],E=g[1];return A((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(l)return i(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),E(h.hash))}),[h]),Object(n.useEffect)((function(){e&&f&&i(!0)}),[f]),{navbarRef:b,isNavbarVisible:a}},U=a(252),H=a(248),F=a(253),J=a(50),W=a.n(J);function Y(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,l=e.label,i=e.activeClassName,s=void 0===i?"navbar__link--active":i,m=e.prependBaseUrlToHref,u=Object(j.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),d=Object(o.a)(n),v=Object(o.a)(t),b=Object(o.a)(c,!0);return r.a.createElement(O.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?b:c}:Object.assign({isNavLink:!0,activeClassName:s,to:d},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}}:null),u),l)}function $(e){var t=e.items,a=e.position,n=e.className,c=Object(j.a)(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),N()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:N()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(Y,Object(k.a)({className:l(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(k.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement(Y,Object(k.a)({className:l(n)},c))}function z(e){var t=e.items,a=(e.position,e.className),n=Object(j.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),N()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(j.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(k.a)({activeClassName:"menu__link--active",className:c(a)},l,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(k.a)({className:c(a)},n)))}var V=function(){var e,t,a=Object(i.a)(),c=a.siteConfig.themeConfig,l=c.navbar,o=(l=void 0===l?{}:l).title,s=l.links,m=void 0===s?[]:s,u=l.hideOnScroll,d=void 0!==u&&u,v=c.disableDarkMode,b=void 0!==v&&v,h=a.isClient,g=Object(n.useState)(!1),f=g[0],E=g[1],p=Object(n.useState)(!1),j=p[0],_=p[1],C=Object(I.a)(),y=C.isDarkTheme,T=C.setLightTheme,S=C.setDarkTheme,x=G(d),B=x.navbarRef,D=x.isNavbarVisible,M=Object(H.a)(),P=M.logoLink,R=M.logoLinkProps,A=M.logoImageUrl,J=M.logoAlt;Object(U.a)(f);var Y=Object(n.useCallback)((function(){E(!0)}),[E]),V=Object(n.useCallback)((function(){E(!1)}),[E]),q=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]);return r.a.createElement("nav",{ref:B,className:N()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":f},e[W.a.navbarHideable]=d,e[W.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(O.a,Object(k.a)({className:"navbar__brand",to:P},R),null!=o&&r.a.createElement("strong",{className:N()("navbar__title",(t={},t[W.a.hideLogoText]=j,t))},o))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement($,Object(k.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement($,Object(k.a)({},e,{key:t}))})),!b&&r.a.createElement(L,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:q}),r.a.createElement(w.a,{handleSearchBarToggle:_,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(O.a,Object(k.a)({className:"navbar__brand",onClick:V,to:P},R),null!=A&&r.a.createElement("img",{key:h,className:"navbar__logo",src:A,alt:J}),null!=o&&r.a.createElement("strong",{className:"navbar__title"},o)),!b&&f&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement(z,Object(k.a)({},e,{onClick:V,key:t}))})))))))};a(51);var q=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(o.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:N()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(O.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")))):null};a(52);t.a=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,m=a.themeConfig.image,u=a.url,d=a.customFields,b=e.children,h=e.title,f=e.noFooter,E=e.description,k=e.image,j=e.keywords,_=e.permalink,N=e.version,O=d&&d.shortTitle?d.shortTitle:s,w=h?h+" | "+O:O,C=k||m,y=u+Object(o.a)(C);Object(l.a)(C)||(y=C);var T=Object(o.a)(n);return r.a.createElement(v,null,r.a.createElement(g,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),N&&r.a.createElement("meta",{name:"docsearch:version",content:N}),j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:y}),C&&r.a.createElement("meta",{property:"twitter:image",content:y}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),_&&r.a.createElement("meta",{property:"og:url",content:u+_}),_&&r.a.createElement("link",{rel:"canonical",href:u+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(V,null),r.a.createElement("div",{className:"main-wrapper"},b),!f&&r.a.createElement(q,null)))}},258:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(246),i=a(244),o=a.n(i),s=a(263),m=a(260),u=a.n(m),d=a(261),v=a.n(d),b=a(243),h=a(262),g=a(247),f=function(){var e=Object(b.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(g.a)().isDarkTheme,n=t.theme||h.a,r=t.darkTheme||n;return a?r:n},E=a(53),p=a.n(E),k=/{([\d,-]+)}/,j=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},_=/title=".*"/,N=function(e){var t=e.children,a=e.className,l=e.metastring,i=Object(b.a)().siteConfig.themeConfig.prism,m=void 0===i?{}:i,d=Object(r.useState)(!1),h=d[0],g=d[1],E=Object(r.useState)(!1),N=E[0],O=E[1];Object(r.useEffect)((function(){O(!0)}),[]);var w=Object(r.useRef)(null),C=Object(r.useRef)(null),y=[],T="",S=f();if(l&&k.test(l)){var x=l.match(k)[1];y=v.a.parse(x).filter((function(e){return e>0}))}l&&_.test(l)&&(T=l.match(_)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return C.current&&(e=new u.a(C.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[C.current,w.current]);var B=a&&a.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);var L=t.replace(/\n$/,"");if(0===y.length&&void 0!==B){for(var I,D="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}}(B),P=t.replace(/\n$/,"").split("\n"),R=0;R<P.length;){var A=R+1,G=P[R].match(M);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":I=A;break;case"highlight-end":D+=I+"-"+(A-1)+","}P.splice(R,1)}else R+=1}y=v.a.parse(D),L=P.join("\n")}var U=function(){window.getSelection().empty(),g(!0),setTimeout((function(){return g(!1)}),2e3)};return c.a.createElement(s.a,Object(n.a)({},s.b,{key:N,theme:S,code:L,language:B}),(function(e){var t,a,r=e.className,l=e.style,i=e.tokens,s=e.getLineProps,m=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,T&&c.a.createElement("div",{style:l,className:p.a.codeBlockTitle},T),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:o()(p.a.copyButton,(t={},t[p.a.copyButtonWithTitle]=T,t)),onClick:U},h?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:o()(r,p.a.codeBlock,(a={},a[p.a.codeBlockWithTitle]=T,a))},c.a.createElement("div",{ref:w,className:p.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return y.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return c.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))},O=a(6),w=(a(54),a(55)),C=a.n(w),y=function(e){return function(t){var a,n=t.id,r=Object(O.a)(t,["id"]),l=Object(b.a)().siteConfig,i=(l=void 0===l?{}:l).themeConfig,s=(i=void 0===i?{}:i).navbar,m=(s=void 0===s?{}:s).hideOnScroll,u=void 0!==m&&m;return n?c.a.createElement(e,r,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",(a={},a[C.a.enhancedAnchor]=!u,a)),id:n}),r.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):c.a.createElement(e,r)}},T=a(56),S=a.n(T);t.a={code:function(e){var t=e.children;return"string"==typeof t?c.a.createElement(N,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(l.a,e)},pre:function(e){return c.a.createElement("div",Object(n.a)({className:S.a.mdxCodeBlock},e))},h1:y("h1"),h2:y("h2"),h3:y("h3"),h4:y("h4"),h5:y("h5"),h6:y("h6")}},259:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(244),l=a.n(c),i=a(242),o=a(246),s=a(258),m=a(57),u=a.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,c,m,v=e.children,b=e.frontMatter,h=e.metadata,g=e.truncated,f=e.isBlogPostPage,E=void 0!==f&&f,p=h.date,k=h.permalink,j=h.tags,_=h.readingTime,N=b.author,O=b.title,w=b.author_url||b.authorURL,C=b.author_title||b.authorTitle,y=b.author_image_url||b.authorImageURL;return r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(t=E?"h1":"h2",a=p.substring(0,10).split("-"),n=a[0],c=d[parseInt(a[1],10)-1],m=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},E?O:r.a.createElement(o.a,{to:k},O)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:u.a.blogPostDate},c," ",m,", ",n," ",_&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(_)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:N})),r.a.createElement("div",{className:"avatar__intro"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},N)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:s.a},v)),(j.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),j.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:h.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,"Read More")))))}}}]);