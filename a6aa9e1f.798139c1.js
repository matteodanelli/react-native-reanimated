(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(243),l=a(254),o=a(259),i=a(246);var s=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};t.default=function(e){var t=e.metadata,a=e.items,n=Object(c.a)().siteConfig.title,i="/"===t.permalink?n:"Blog";return r.a.createElement(l.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},a.map((function(e){var t=e.content;return r.a.createElement(o.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.a.createElement(t,null))})),r.a.createElement(s,{metadata:t})))))}},247:function(e,t,a){"use strict";var n=a(0),r=a(249);t.a=function(){return Object(n.useContext)(r.a)}},248:function(e,t,a){"use strict";var n=a(243),r=a(247),c=a(245),l=a(250);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,m=i.href||t,u={};i.target?u={target:i.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},249:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},252:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},254:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(255),l=a(250),o=a(243),i=a(245),s="",m="dark",u=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),u=Object(n.useCallback)((function(){c(m),l(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:i,setDarkTheme:u}},d=a(249);var v=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},b=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}},h=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var f=function(e){var t=b(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(h.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(48),E=a.n(g);var p=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,i=a.backgroundColor,s=a.textColor,m=Object(n.useState)(!0),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),j=a(6),O=a(244),_=a.n(O),N=a(246),w=a(251),C=a(257),y=a.n(C),T=a(49),S=a.n(T),x=function(){return r.a.createElement("span",{className:_()(S.a.toggle,S.a.moon)})},B=function(){return r.a.createElement("span",{className:_()(S.a.toggle,S.a.sun)})},L=function(e){var t=Object(o.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(B,null)}},e))},D=a(247),I=a(256);var M=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},P=a(9),R=function(){return{scrollX:P.a.canUseDOM?window.pageXOffset:0,scrollY:P.a.canUseDOM?window.pageYOffset:0}},G=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(R()),r=a[0],c=a[1],l=function(){var t=R();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r},H=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),d=u[0],v=u[1],b=Object(n.useCallback)((function(e){null!==e&&v(e.getBoundingClientRect().height)}),[]),h=Object(I.b)(),f=M(h.hash),g=f[0],E=f[1];return G((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(l)return o(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),E(h.hash))}),[h]),Object(n.useEffect)((function(){e&&g&&o(!0)}),[g]),{navbarRef:b,isNavbarVisible:a}},U=a(252),A=a(248),F=a(253),J=a(50),W=a.n(J);function $(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,l=e.label,o=e.activeClassName,s=void 0===o?"navbar__link--active":o,m=e.prependBaseUrlToHref,u=Object(j.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),d=Object(i.a)(n),v=Object(i.a)(t),b=Object(i.a)(c,!0);return r.a.createElement(N.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?b:c}:Object.assign({isNavLink:!0,activeClassName:s,to:d},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}}:null),u),l)}function V(e){var t=e.items,a=e.position,n=e.className,c=Object(j.a)(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),_()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement($,Object(k.a)({className:l(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement($,Object(k.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement($,Object(k.a)({className:l(n)},c))}function Y(e){var t=e.items,a=(e.position,e.className),n=Object(j.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),_()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(j.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement($,Object(k.a)({activeClassName:"menu__link--active",className:c(a)},l,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(k.a)({className:c(a)},n)))}var K=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,m=void 0===s?[]:s,u=l.hideOnScroll,d=void 0!==u&&u,v=c.disableDarkMode,b=void 0!==v&&v,h=a.isClient,f=Object(n.useState)(!1),g=f[0],E=f[1],p=Object(n.useState)(!1),j=p[0],O=p[1],C=Object(D.a)(),y=C.isDarkTheme,T=C.setLightTheme,S=C.setDarkTheme,x=H(d),B=x.navbarRef,I=x.isNavbarVisible,M=Object(A.a)(),P=M.logoLink,R=M.logoLinkProps,G=M.logoImageUrl,J=M.logoAlt;Object(U.a)(g);var $=Object(n.useCallback)((function(){E(!0)}),[E]),K=Object(n.useCallback)((function(){E(!1)}),[E]),X=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]);return r.a.createElement("nav",{ref:B,className:_()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[W.a.navbarHideable]=d,e[W.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:$,onKeyDown:$},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",to:P},R),null!=i&&r.a.createElement("strong",{className:_()("navbar__title",(t={},t[W.a.hideLogoText]=j,t))},i))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(V,Object(k.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(V,Object(k.a)({},e,{key:t}))})),!b&&r.a.createElement(L,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:X}),r.a.createElement(w.a,{handleSearchBarToggle:O,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:K}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",onClick:K,to:P},R),null!=G&&r.a.createElement("img",{key:h,className:"navbar__logo",src:G,alt:J}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!b&&g&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:X})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement(Y,Object(k.a)({},e,{onClick:K,key:t}))})))))))};a(51);var X=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(i.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(N.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")))):null};a(52);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,m=a.themeConfig.image,u=a.url,d=a.customFields,b=e.children,h=e.title,g=e.noFooter,E=e.description,k=e.image,j=e.keywords,O=e.permalink,_=e.version,N=d&&d.shortTitle?d.shortTitle:s,w=h?h+" | "+N:N,C=k||m,y=u+Object(i.a)(C);Object(l.a)(C)||(y=C);var T=Object(i.a)(n);return r.a.createElement(v,null,r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:y}),C&&r.a.createElement("meta",{property:"twitter:image",content:y}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),O&&r.a.createElement("meta",{property:"og:url",content:u+O}),O&&r.a.createElement("link",{rel:"canonical",href:u+O}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},b),!g&&r.a.createElement(X,null)))}},258:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(246),o=a(244),i=a.n(o),s=a(263),m=a(260),u=a.n(m),d=a(261),v=a.n(d),b=a(243),h=a(262),f=a(247),g=function(){var e=Object(b.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(f.a)().isDarkTheme,n=t.theme||h.a,r=t.darkTheme||n;return a?r:n},E=a(53),p=a.n(E),k=/{([\d,-]+)}/,j=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},O=/title=".*"/,_=function(e){var t=e.children,a=e.className,l=e.metastring,o=Object(b.a)().siteConfig.themeConfig.prism,m=void 0===o?{}:o,d=Object(r.useState)(!1),h=d[0],f=d[1],E=Object(r.useState)(!1),_=E[0],N=E[1];Object(r.useEffect)((function(){N(!0)}),[]);var w=Object(r.useRef)(null),C=Object(r.useRef)(null),y=[],T="",S=g();if(l&&k.test(l)){var x=l.match(k)[1];y=v.a.parse(x).filter((function(e){return e>0}))}l&&O.test(l)&&(T=l.match(O)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return C.current&&(e=new u.a(C.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[C.current,w.current]);var B=a&&a.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);var L=t.replace(/\n$/,"");if(0===y.length&&void 0!==B){for(var D,I="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}}(B),P=t.replace(/\n$/,"").split("\n"),R=0;R<P.length;){var G=R+1,H=P[R].match(M);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=G+",";break;case"highlight-start":D=G;break;case"highlight-end":I+=D+"-"+(G-1)+","}P.splice(R,1)}else R+=1}y=v.a.parse(I),L=P.join("\n")}var U=function(){window.getSelection().empty(),f(!0),setTimeout((function(){return f(!1)}),2e3)};return c.a.createElement(s.a,Object(n.a)({},s.b,{key:_,theme:S,code:L,language:B}),(function(e){var t,a,r=e.className,l=e.style,o=e.tokens,s=e.getLineProps,m=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,T&&c.a.createElement("div",{style:l,className:p.a.codeBlockTitle},T),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:i()(p.a.copyButton,(t={},t[p.a.copyButtonWithTitle]=T,t)),onClick:U},h?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:i()(r,p.a.codeBlock,(a={},a[p.a.codeBlockWithTitle]=T,a))},c.a.createElement("div",{ref:w,className:p.a.codeBlockLines,style:l},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return y.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return c.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))},N=a(6),w=(a(54),a(55)),C=a.n(w),y=function(e){return function(t){var a,n=t.id,r=Object(N.a)(t,["id"]),l=Object(b.a)().siteConfig,o=(l=void 0===l?{}:l).themeConfig,s=(o=void 0===o?{}:o).navbar,m=(s=void 0===s?{}:s).hideOnScroll,u=void 0!==m&&m;return n?c.a.createElement(e,r,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:i()("anchor",(a={},a[C.a.enhancedAnchor]=!u,a)),id:n}),r.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):c.a.createElement(e,r)}},T=a(56),S=a.n(T);t.a={code:function(e){var t=e.children;return"string"==typeof t?c.a.createElement(_,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(l.a,e)},pre:function(e){return c.a.createElement("div",Object(n.a)({className:S.a.mdxCodeBlock},e))},h1:y("h1"),h2:y("h2"),h3:y("h3"),h4:y("h4"),h5:y("h5"),h6:y("h6")}},259:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(244),l=a.n(c),o=a(242),i=a(246),s=a(258),m=a(57),u=a.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,c,m,v=e.children,b=e.frontMatter,h=e.metadata,f=e.truncated,g=e.isBlogPostPage,E=void 0!==g&&g,p=h.date,k=h.permalink,j=h.tags,O=h.readingTime,_=b.author,N=b.title,w=b.author_url||b.authorURL,C=b.author_title||b.authorTitle,y=b.author_image_url||b.authorImageURL;return r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(t=E?"h1":"h2",a=p.substring(0,10).split("-"),n=a[0],c=d[parseInt(a[1],10)-1],m=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},E?N:r.a.createElement(i.a,{to:k},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:u.a.blogPostDate},c," ",m,", ",n," ",O&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(O)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:s.a},v)),(j.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),j.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More")))))}}}]);