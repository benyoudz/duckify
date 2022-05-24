"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[612],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"basics",title:"Basics"},p=void 0,s={unversionedId:"scripting/basics",id:"scripting/basics",title:"Basics",description:"Duckify's script language is compatible with Ducky Script. However, some functions and keys were added or modified.",source:"@site/docs/scripting/basics.md",sourceDirName:"scripting",slug:"/scripting/basics",permalink:"/docs/scripting/basics",draft:!1,editUrl:"https://github.com/spacehuhntech/duckify/blob/main/docs/scripting/basics.md",tags:[],version:"current",frontMatter:{id:"basics",title:"Basics"},sidebar:"docs",previous:{title:"Edit VID & PID",permalink:"/docs/digispark/change-ids"},next:{title:"Functions",permalink:"/docs/scripting/functions"}},c={},d=[{value:"Basic rules:",id:"basic-rules",level:2},{value:"Example Script:",id:"example-script",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Duckify's script language is compatible with Ducky Script. However, some functions and keys were added or modified.\nYou can find a great Ducky Script quick reference ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hak5.org/usb-rubber-ducky-1/the-ducky-script-language/ducky-script-quick-reference"},"at docs.hak5.org"),"."))),(0,i.kt)("h2",{id:"basic-rules"},"Basic rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A single space separates keys"),(0,i.kt)("li",{parentName:"ul"},"All keys as part of the same line gets pressed and released simultaneously"),(0,i.kt)("li",{parentName:"ul"},"To write text, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"STRING")," function"),(0,i.kt)("li",{parentName:"ul"},"Upper and lower case matters!")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WINDOWS R")),(0,i.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING Hello World")),(0,i.kt)("td",{parentName:"tr",align:null},'Write "Hello World"')))),(0,i.kt)("h2",{id:"example-script"},"Example Script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Hello World Example Script\nDEFAULTDELAY 200\nDELAY 2000\nGUI R\nSTRING notepad\nENTER\nSTRING Hello World!\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Line"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"# This is a comment")),(0,i.kt)("td",{parentName:"tr",align:null},"Comment something.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,i.kt)("td",{parentName:"tr",align:null},"Set the default delay between each line to 200 milliseconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DELAY 2000")),(0,i.kt)("td",{parentName:"tr",align:null},"Wait 2 seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GUI R")),(0,i.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously to open the run window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING notepad")),(0,i.kt)("td",{parentName:"tr",align:null},'Type "notepad".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,i.kt)("td",{parentName:"tr",align:null},"Press enter key to launch the Windows Notepad application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,i.kt)("td",{parentName:"tr",align:null},'Type "Hello World!" into the newly opened notepad window.')))))}m.isMDXComponent=!0}}]);