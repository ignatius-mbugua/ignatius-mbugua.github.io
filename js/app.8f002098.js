(function(t){function a(a){for(var s,o,n=a[0],l=a[1],c=a[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},3704:function(t,a,e){t.exports=e.p+"img/doctor_drug_prescription.367a69ff.jpg"},"44ec":function(t,a,e){"use strict";e("74b7")},4511:function(t,a,e){t.exports=e.p+"img/undraw_code_review.44e1babf.svg"},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),i=e("7496"),r=e("f6c4"),o=function(){var t=this,a=t._self._c;return a(i["a"],[a("AppBar"),a(r["a"],[a("router-view")],1),a("Footer")],1)},n=[],l=e("40dc"),c=e("8336"),d=e("132d"),u=e("2fa4"),p=e("2a7f"),m=function(){var t=this,a=t._self._c;return a(l["a"],{attrs:{app:"",color:"primary",dark:""}},[a(p["a"],{attrs:{id:"top"}},[t._v("Ignatius Mbugua")]),a(u["a"]),a("div",{staticClass:"hidden-sm-and-down"},[a(c["a"],{attrs:{href:"#",text:""},on:{click:function(a){return t.$vuetify.goTo("#about")}}},[t._v(" About ")]),a(c["a"],{attrs:{href:"#",text:""},on:{click:function(a){return t.$vuetify.goTo("#services")}}},[t._v(" Services ")]),a(c["a"],{attrs:{href:"#",text:""},on:{click:function(a){return t.$vuetify.goTo("#portfolio")}}},[t._v(" Portfolio ")])],1),t.darkmode?a(c["a"],{attrs:{icon:"","aria-label":"light theme"},on:{click:t.toggleTheme}},[a(d["a"],[t._v(t._s(t.icons.mdiWhiteBalanceSunny))])],1):a(c["a"],{attrs:{icon:"","aria-label":"dark theme"},on:{click:t.toggleTheme}},[a(d["a"],[t._v(t._s(t.icons.mdiMoonWaningCrescent))])],1)],1)},g=[],v=e("94ed"),f={name:"AppBar",data:()=>({icons:{mdiWhiteBalanceSunny:v["o"],mdiMoonWaningCrescent:v["k"]},darkmode:!1}),methods:{toggleTheme(){this.darkmode=!this.darkmode,this.$vuetify.theme.dark=this.darkmode}}},h=f,b=e("2877"),_=Object(b["a"])(h,m,g,!1,null,null,null),y=_.exports,w=e("553a"),x=function(){var t=this,a=t._self._c;return a(w["a"],{staticClass:"justify-center white--text",attrs:{color:"primary"}},[a("div",[t._v("Ignatius Mbugua © "+t._s((new Date).getFullYear()))])])},C=[],k={name:"Footer"},j=k,P=Object(b["a"])(j,x,C,!1,null,null,null),S=P.exports,T={name:"App",components:{AppBar:y,Footer:S},data:()=>({})},L=T,O=Object(b["a"])(L,o,n,!1,null,null,null),D=O.exports,A=e("8c4f"),M=e("a523"),I=function(){var t=this,a=t._self._c;return a(M["a"],[a("Header"),a("Skills"),a("About"),a("Portfolio"),a("ScrollToTop")],1)},W=[],N=e("62ad"),H=e("adda"),F=e("0fd9"),$=function(){var t=this,a=t._self._c;return a("section",{staticClass:"my-3 py-10",attrs:{id:"header"}},[a(F["a"],{staticClass:"align-md-center"},[a(N["a"],{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Ignatius Mbugua")]),a("h2",{staticClass:"subheading font-weight-regular"},[t._v("Web Developer")])])]),a(N["a"],{attrs:{cols:"12",sm:"6"}},[a(H["a"],{attrs:{height:"300px",contain:"",src:e("8aa9"),alt:"header image"}})],1)],1)],1)},B=[],J={name:"Header"},z=J,Q=Object(b["a"])(z,$,B,!1,null,null,null),V=Q.exports,U=e("b0af"),Y=e("99d9"),E=function(){var t=this,a=t._self._c;return a("section",{staticClass:"text-center my-3 py-10",attrs:{id:"services"}},[a("h1",{staticClass:"primary--text text-uppercase pb-5"},[t._v("Skills")]),a(F["a"],[a(N["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{height:"100%",outlined:""}},[a(d["a"],{attrs:{color:"primary",size:"100"}},[t._v(" "+t._s(t.icons.mdiMonitorCellphone)+" ")]),a(Y["c"],{staticClass:"justify-center"},[t._v(" Responsive Web Design ")]),a(Y["b"],[t._v(" Making the visual look of websites look attractive to your visitors as well as make it responsive on all screens whether big or small ")])],1)],1),a(N["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{height:"100%",outlined:""}},[a(d["a"],{attrs:{color:"primary",size:"100"}},[t._v(" "+t._s(t.icons.mdiCodeTags))]),a(Y["c"],{staticClass:"justify-center"},[t._v(" Web Application Development ")]),a(Y["b"],[t._v(" Development of interactive websites and web apps from ecommerce, web portals, marketplaces single page applications as well as customize and add features to existing web apps ")])],1)],1),a(N["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{height:"100%",outlined:""}},[a(d["a"],{attrs:{color:"primary",size:"100"}},[t._v(" "+t._s(t.icons.mdiWeb)+" ")]),a(Y["c"],{staticClass:"justify-center"},[t._v(" Web Scrapping ")]),a(Y["b"],[t._v(" Fetching of data from APIs as well as scrap data from websites around the internet for your custom use or analysis ")])],1)],1)],1)],1)},R=[],q={name:"Skills",data:()=>({icons:{mdiMonitorCellphone:v["j"],mdiCodeTags:v["b"],mdiWeb:v["n"]}})},G=q,K=Object(b["a"])(G,E,R,!1,null,null,null),X=K.exports,Z=e("cc20"),tt=function(){var t=this,a=t._self._c;return a("section",{staticClass:"my-3 py-10",attrs:{id:"about"}},[a("h1",{staticClass:"primary--text text-uppercase pb-5 text-center"},[t._v("About")]),a(F["a"],[a(N["a"],{attrs:{cols:"12",sm:"12"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{outlined:""}},[a(F["a"],{attrs:{align:"center"}},[a(N["a"],{attrs:{cols:"12",sm:"6"}},[a(H["a"],{attrs:{height:"300px",contain:"",src:e("4511"),alt:"about image"}})],1),a(N["a"],{attrs:{cols:"12",sm:"6"}},[a(Y["b"],[t._v(" I am a web developer with 2 years experience in web design and development. I am an ambitious problem solver with passion for web development and creating logical and innovative solutions to complex problems. As someone who takes responsibility for my personal development, I am continually evaluating and upgrading my skills so that I can stay at the cutting edge of web development. ")]),a(Y["c"],{staticClass:"primary--text"},[t._v(" Languages: ")]),a(Y["b"],[a("p",[a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiLanguageHtml5)+" ")]),t._v(" HTML ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(t._s(t.icons.mdiLanguageCss3)+" ")]),t._v(" CSS ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiLanguageJavascript)+" ")]),t._v(" Javascript ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiLanguagePython)+" ")]),t._v(" Python ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiLanguagePhp)+" ")]),t._v(" PHP ")],1)],1)]),a(Y["c"],{staticClass:"primary--text"},[t._v(" Frameworks: ")]),a(Y["b"],[a("p",[a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiLaravel))]),t._v(" Laravel ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiCodeTags)+" ")]),t._v(" Django ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiVuejs)+" ")]),t._v(" Vuejs ")],1)],1)]),a(Y["c"],{staticClass:"primary--text"},[t._v(" Database: ")]),a(Y["b"],[a("p",[a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiDatabase)+" ")]),t._v(" MySQL ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiDatabase)+" ")]),t._v(" MSSQL ")],1),a(Z["a"],{staticClass:"ma-1"},[a(d["a"],{attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiDatabase)+" ")]),t._v(" SQLite ")],1)],1)])],1)],1)],1)],1)],1)],1)},at=[],et={name:"About",data:()=>({icons:{mdiLanguageHtml5:v["e"],mdiLanguageCss3:v["d"],mdiLanguageJavascript:v["f"],mdiLanguagePython:v["h"],mdiLanguagePhp:v["g"],mdiLaravel:v["i"],mdiCodeTags:v["b"],mdiVuejs:v["m"],mdiDatabase:v["c"]}})},st=et,it=Object(b["a"])(st,tt,at,!1,null,null,null),rt=it.exports,ot=function(){var t=this,a=t._self._c;return a("section",{staticClass:"my-3 py-10",attrs:{id:"portfolio"}},[a("h1",{staticClass:"primary--text text-center text-uppercase pb-5"},[t._v("Portfolio")]),a(F["a"],[a(N["a"],{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a(U["a"],{staticClass:"rounded-xl d-flex flex-column",attrs:{height:"100%",outlined:""}},[a(H["a"],{staticClass:"white--text align-end",attrs:{height:"200px",src:e("850d"),alt:"Medical Drug Prescription Prediction image",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"}},[a(Y["c"],[t._v("Medical Drug Prescription Prediction")])],1),a(Y["b"],{staticClass:"text--primary"},[a("div",[t._v(" A web application that prescribes medicine to a patient. It was developed in Django web framework and also uses Python Decision Trees. ")])]),a(Y["a"],[a(c["a"],{attrs:{block:"",rounded:"",color:"primary",dark:"",href:"https://github.com/ignatius-mbugua/medical-drug-prescription-prediction",target:"_blank"}},[t._v(" Project Link "),a(d["a"],{attrs:{right:""}},[t._v(" "+t._s(t.icons.mdiOpenInNew)+" ")])],1)],1)],1)],1),a(N["a"],{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a(U["a"],{staticClass:"rounded-xl d-flex flex-column",attrs:{height:"100%",outlined:""}},[a(H["a"],{staticClass:"white--text align-end",attrs:{height:"200px",src:e("3704"),alt:"Doctor Drug Prescription System image",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"}},[a(Y["c"],[t._v("Doctor Drug Prescription System")])],1),a(Y["b"],{staticClass:"text--primary"},[a("div",[t._v(" A web application that assists a doctor in prescribing effective medicine to patients that reduces side effects. It was developed in Django web framework and also uses Python Decision Trees. ")])]),a(Y["a"],[a(c["a"],{attrs:{block:"",rounded:"",color:"primary",dark:"",href:"https://github.com/ignatius-mbugua/doctor-drug-prescription-system",target:"_blank"}},[t._v(" Project Link "),a(d["a"],{attrs:{right:""}},[t._v(" "+t._s(t.icons.mdiOpenInNew)+" ")])],1)],1)],1)],1),a(N["a"],{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{height:"100%",outlined:""}},[a(H["a"],{staticClass:"white--text align-end",attrs:{height:"200px",src:e("7741"),alt:"Course Advisory image",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"}},[a(Y["c"],[t._v("Course Advisory")])],1),a(Y["b"],{staticClass:"text--primary"},[a("div",[t._v(" A web application that assists students in choosing the right course when joining the university. It was developed using the Laravel framework where i was actively involved in the backend and administration of the application. ")])]),a(Y["a"],[a(c["a"],{attrs:{block:"",rounded:"",color:"primary",dark:"",href:"https://github.com/ignatius-mbugua/course_advisory",target:"_blank"}},[t._v(" Project Link "),a(d["a"],{attrs:{right:""}},[t._v(" "+t._s(t.icons.mdiOpenInNew)+" ")])],1)],1)],1)],1),a(N["a"],{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a(U["a"],{staticClass:"rounded-xl",attrs:{height:"100%",outlined:""}},[a(H["a"],{staticClass:"white--text align-end",attrs:{height:"200px",src:e("c1bf"),alt:"Nanotech Website image",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"}},[a(Y["c"],[t._v("Nanotech Website")])],1),a(Y["b"],{staticClass:"text--primary"},[a("div",[t._v(" A website developed using Laravel framework for the company Nanotech Engineering Ltd. I was fully involved in developing of the backend of the website to ensure easy management of its content. ")])]),a(Y["a"],[a(c["a"],{attrs:{block:"",rounded:"",color:"primary",dark:""}},[t._v(" Project Link ")])],1)],1)],1)],1)],1)},nt=[],lt={name:"Portfolio",data:()=>({icons:{mdiOpenInNew:v["l"]}})},ct=lt,dt=Object(b["a"])(ct,ot,nt,!1,null,null,null),ut=dt.exports,pt=e("f977"),mt=function(){var t=this,a=t._self._c;return a(c["a"],{directives:[{def:pt["b"],name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[a(d["a"],[t._v(" "+t._s(t.mdiChevronUp)+" ")])],1)},gt=[],vt={name:"ScrollToTop",data:()=>({mdiChevronUp:v["a"],fab:!1}),methods:{onScroll(t){if("undefined"===typeof window)return;const a=window.pageYOffset||t.target.scrollTop||0;this.fab=a>500},toTop(){this.$vuetify.goTo(0)}}},ft=vt,ht=Object(b["a"])(ft,mt,gt,!1,null,null,null),bt=ht.exports,_t={components:{Header:V,Skills:X,About:rt,Portfolio:ut,ScrollToTop:bt}},yt=_t,wt=(e("44ec"),Object(b["a"])(yt,I,W,!1,null,"926dab22",null)),xt=wt.exports;s["a"].use(A["a"]);const Ct=[{path:"/",name:"Home",component:xt}],kt=new A["a"]({mode:"history",base:"/",routes:Ct});var jt=kt,Pt=e("f309");s["a"].use(Pt["a"]);var St=new Pt["a"]({icons:{iconfont:"mdiSvg"}});s["a"].config.productionTip=!1,new s["a"]({router:jt,vuetify:St,render:t=>t(D)}).$mount("#app")},"74b7":function(t,a,e){},7741:function(t,a,e){t.exports=e.p+"img/compressed_projects_course.5dde4bfd.png"},"850d":function(t,a,e){t.exports=e.p+"img/patient_medical_drug_prescription.f95ccdf2.jpg"},"8aa9":function(t,a,e){t.exports=e.p+"img/undraw_dev_productivity.a2dee864.svg"},c1bf:function(t,a,e){t.exports=e.p+"img/compressed_projects_nanotech.e3990c8d.png"}});