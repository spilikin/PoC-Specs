(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-e2bfb12e":"dea16686"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-e2bfb12e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-e2bfb12e":"399ef62c"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/PoC-Specs/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Home")])],1)],1),e._l(e.packets,(function(t){return n("v-list-item",{key:t.version,attrs:{to:"/Release/"+t.version}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-file-cabinet")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Release "+e._s(t.version))])],1)],1)}))],2)],1),n("v-app-bar",{attrs:{app:"",color:"blue",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Application")])],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{color:"blue",app:""}},[n("span",{staticClass:"white--text"},[e._v("© 2019")])])],1)},o=[],i=n("bc3a"),c=n.n(i),s=r["a"].extend({name:"App",components:{},data:function(){return{drawer:null,packets:[]}},mounted:function(){var e=this;c.a.get("/PoC-Specs/packets.json").then((function(t){e.packets=t.data}))}}),u=s,l=n("2877"),p=n("6544"),f=n.n(p),d=n("7496"),v=n("40dc"),m=n("5bc1"),h=n("a75b"),b=n("553a"),g=n("132d"),y=n("8860"),w=n("da13"),_=n("1800"),k=n("5d23"),j=n("f774"),C=n("2a7f"),O=Object(l["a"])(u,a,o,!1,null,null,null),P=O.exports;f()(O,{VApp:d["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VContent:h["a"],VFooter:b["a"],VIcon:g["a"],VList:y["a"],VListItem:w["a"],VListItemAction:_["a"],VListItemContent:k["a"],VListItemTitle:k["b"],VNavigationDrawer:j["a"],VToolbarTitle:C["a"]});var V=n("f309");r["a"].use(V["a"]);var x=new V["a"]({icons:{iconfont:"mdi"}}),A=(n("d3b7"),n("8c4f")),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},E=[],T={name:"home"},L=T,I=Object(l["a"])(L,S,E,!1,null,null,null),N=I.exports;r["a"].use(A["a"]);var B=[{path:"/",name:"home",component:N},{path:"/Release/:version",name:"Release",component:function(){return n.e("chunk-e2bfb12e").then(n.bind(null,"1efe"))}}],M=new A["a"]({mode:"history",base:"/PoC-Specs/",routes:B}),R=M;r["a"].config.productionTip=!1,new r["a"]({vuetify:x,router:R,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.a638c405.js.map