(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11fd1b4f":"b6629220","chunk-174c5952":"eac9a329","chunk-c7ff0512":"e6b7713e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-c7ff0512":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-11fd1b4f":"31d6cfe0","chunk-174c5952":"31d6cfe0","chunk-c7ff0512":"e080857c"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"097e":function(e,t){(function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/750*100+"px")};e.addEventListener&&(t.addEventListener(r,o,!1),e.addEventListener("DOMContentLoaded",o,!1))})(document,window)},"0f9a":function(e,t,n){"use strict";n.r(t);const r={token:""},o={SET_TOKEN:(e,t)=>{e.token=t}},a={};t["default"]={namespaced:!0,state:r,mutations:o,actions:a}},4360:function(e,t,n){"use strict";n("13d5");var r=n("2b0e"),o=n("2f62");const a={token:e=>e.user.token};var u=a;r["a"].use(o["a"]);const c=n("c653"),i=c.keys().reduce((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=c(t);return e[n]=r.default,e},{}),s=new o["a"].Store({modules:i,getters:u});t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"App"},c=u,i=n("2877"),s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,f=n("8c4f");r["a"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"Quotation",meta:{title:"报价单"},component:()=>Promise.all([n.e("chunk-11fd1b4f"),n.e("chunk-174c5952")]).then(n.bind(null,"1e4b"))},{path:"/simple",name:"Simple",meta:{title:"报价单"},component:()=>Promise.all([n.e("chunk-11fd1b4f"),n.e("chunk-c7ff0512")]).then(n.bind(null,"f3ec"))}]}),p=n("4360"),h=(n("097e"),n("f524"),{install(e){e.directive("preventReClick",{inserted(e,t){console.log(e,t.value),e.addEventListener("click",()=>{e.disabled||(e.disabled=!0,setTimeout(()=>{e.disabled=!1},t.value||1e3))})}})}}),v=n("d399"),m=n("473d"),b=n("1a23"),g=n("565f"),y=n("8f80");n("c2d8"),n("b625"),n("476f"),n("fdc4"),n("c241");r["a"].use(h),r["a"].use(v["a"]),r["a"].use(m["a"]),r["a"].use(b["a"]),r["a"].use(g["a"]),r["a"].use(y["a"]),r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:d,store:p["a"],render:e=>e(l)})},c653:function(e,t,n){var r={"./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},f524:function(e,t,n){}});