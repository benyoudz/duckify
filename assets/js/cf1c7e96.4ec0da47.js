"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"arduino-setup",title:"Arduino Setup"},l=void 0,p={unversionedId:"digispark/arduino-setup",id:"digispark/arduino-setup",title:"Arduino Setup",description:"Drivers",source:"@site/docs/digispark/arduino-setup.md",sourceDirName:"digispark",slug:"/digispark/arduino-setup",permalink:"/docs/digispark/arduino-setup",draft:!1,editUrl:"https://github.com/spacehuhntech/duckify/blob/main/docs/digispark/arduino-setup.md",tags:[],version:"current",frontMatter:{id:"arduino-setup",title:"Arduino Setup"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/digispark/getting-started"},next:{title:"Usage",permalink:"/docs/digispark/usage"}},d={},u=[{value:"Drivers",id:"drivers",level:2},{value:"Setup Arduino-IDE",id:"setup-arduino-ide",level:2},{value:"Flash example sketch",id:"flash-example-sketch",level:2}],c={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"drivers"},"Drivers"),(0,i.kt)("p",null,"To make the Digispark work with Arduino on Windows, you need to install drivers.  "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Drivers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip"},"Download Digispark drivers for Windows"),'. Unzip and run "Install Drivers.exe".'))),(0,i.kt)("h2",{id:"setup-arduino-ide"},"Setup Arduino-IDE"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Download and install Arduino IDE")),(0,i.kt)("li",{parentName:"ol"},"Start Arduino IDE"),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"File")," > ",(0,i.kt)("strong",{parentName:"li"},"Preferences")," > ",(0,i.kt)("strong",{parentName:"li"},"Additional Boards Manager URLs")," and paste",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json")," then click OK to save and close the Preferences\n",(0,i.kt)("img",{alt:"Digispark Board URL",src:n(2419).Z,width:"1920",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Tools")," > ",(0,i.kt)("strong",{parentName:"li"},"Board")," > ",(0,i.kt)("strong",{parentName:"li"},"Boards Manager"),", search for ",(0,i.kt)("inlineCode",{parentName:"li"},"Digispark"),' and install "Digistump AVR Boards"\n',(0,i.kt)("img",{alt:"Install Digispark Boards",src:n(1399).Z,width:"1920",height:"1080"}))),(0,i.kt)("h2",{id:"flash-example-sketch"},"Flash example sketch"),(0,i.kt)("p",null,"You can upload an example to ensure everything is correctly set up and working."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"6s delay")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Digispark goes into a bootloader mode for 6 seconds when plugged in. You can only upload new firmware in these 6s. Afterward, it will leave this mode and run the code you flashed onto it. So you ",(0,i.kt)("strong",{parentName:"p"},"always have this 6-second delay")," before your code starts."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Tools")," > ",(0,i.kt)("strong",{parentName:"li"},"Board")," > ",(0,i.kt)("strong",{parentName:"li"},"Digistump Boards")," and select ",(0,i.kt)("strong",{parentName:"li"},"Digispark")),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"File")," > ",(0,i.kt)("strong",{parentName:"li"},"Examples")," > ",(0,i.kt)("strong",{parentName:"li"},"Digispark_Examples")," > ",(0,i.kt)("strong",{parentName:"li"},"Blink")),(0,i.kt)("li",{parentName:"ol"},"Click Upload (in the top left)"),(0,i.kt)("li",{parentName:"ol"},"Plugin your Digispark when told (check the output at the bottom)")),(0,i.kt)("p",null,"When done, the LED on your Digispark should start blinking."))}m.isMDXComponent=!0},2419:function(e,t,n){t.Z=n.p+"assets/images/Digispark-URL-Arduino-bba673ea3224d7cd69402af7f87ac42f.jpg"},1399:function(e,t,n){t.Z=n.p+"assets/images/Install-Digispark-49e671ad39edaedcd2bbebe2e5448c9b.jpg"}}]);