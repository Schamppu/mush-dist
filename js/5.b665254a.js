(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"43c7":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-particles",attrs:{id:"particles-js"}})},n=[],a=i("2b0e"),l=a["a"].extend({components:{},mounted(){particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#7e7e7e"},shape:{type:"circle",stroke:{width:0,color:"#7e7e7e"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.1,random:!1,anim:{enable:!1,speed:.1,opacity_min:.01,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#7e7e7e",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}),r=l,c=(i("4ec2"),i("2877")),o=Object(c["a"])(r,s,n,!1,null,null,null);t["a"]=o.exports},"4ec2":function(e,t,i){"use strict";var s=i("741e"),n=i.n(s);n.a},"568b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"row justify-evenly"},[i("Particles"),i("div",{staticClass:"row justify-evenly card-timeline"},[i("div",{staticClass:"example-centered"},[i("div",{staticClass:"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"},[i("ul",{staticClass:"timeline timeline-split"},[i("div",{domProps:{innerHTML:e._s(e.renderCode)}})])])])])],1)},n=[],a=i("60a3"),l=i("43c7"),r=function(e,t,i,s){var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};class c{constructor(e,t,i,s){this.strTime=e,this.onlyTime=t,this.strTitle=i,this.strText=s}}let o=class extends a["c"]{constructor(){super(...arguments),this.timeline=[],this.renderCode=""}created(){this.timeline.push(new c(this.fixText("roadmap.0.date"),!1,this.fixText("roadmap.0.title"),this.fixText("roadmap.0.text"))),this.timeline.push(new c(this.fixText("roadmap.1.date"),!1,this.fixText("roadmap.1.title"),this.fixText("roadmap.1.text"))),this.timeline.push(new c("2021",!0)),this.timeline.push(new c(this.fixText("roadmap.2.date"),!1,this.fixText("roadmap.2.title"),this.fixText("roadmap.2.text"))),this.timeline.push(new c(this.fixText("roadmap.3.date"),!1,this.fixText("roadmap.3.title"),this.fixText("roadmap.3.text"))),this.timeline.push(new c(this.fixText("roadmap.4.date"),!1,this.fixText("roadmap.4.title"),this.fixText("roadmap.4.text"))),this.createRenderCode()}fixText(e){let t=this.$t(e).toString();while(-1!==t.indexOf("#ht1"))t=t.replace("#ht1",'<span class="c-high-main">'),t=t.replace("##","</span>");return t}createRenderCode(){for(let e=0;e<this.timeline.length;e++){const t=this.timeline[e].strTime,i=this.timeline[e].onlyTime,s=this.timeline[e].strTitle,n=this.timeline[e].strText;this.renderCode+=!0===i?'<li class="timeline-item period">\n  <div class="timeline-info"></div>\n  <div class="timeline-marker"></div>\n  <div class="timeline-content">\n    <h6 class="timeline-title">'+t+"</h6>\n  </div>\n</li>":'<li class="timeline-item">\n  <div class="timeline-info">\n    <span>'+t+'</span>\n  </div>\n  <div class="timeline-marker"></div>\n  <div class="timeline-content">\n    <h4 class="timeline-title">'+s+"</h4>\n    <p>"+n+"</p>\n  </div>\n</li>"}}};o=r([Object(a["a"])({components:{Particles:l["a"]}})],o);var d=o,m=d,p=(i("7621"),i("2877")),h=i("9989"),u=i("eebe"),f=i.n(u),x=Object(p["a"])(m,s,n,!1,null,null,null);t["default"]=x.exports;f()(x,"components",{QPage:h["a"]})},"741e":function(e,t,i){},7621:function(e,t,i){"use strict";var s=i("8cc4"),n=i.n(s);n.a},"8cc4":function(e,t,i){}}]);