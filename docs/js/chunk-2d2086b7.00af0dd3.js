(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("app-page",[t("v-flex",[t("h1",[e._v("Login")]),t("v-text-field",{attrs:{autofocus:"",label:"Username",required:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),t("v-text-field",{attrs:{label:"Password",required:"",type:"password"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),t("v-layout",{attrs:{"justify-end":""}},[t("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Login")])],1)],1)],1)},r=[],n=(t("a481"),t("96cf"),t("3b8d")),o=t("d97b"),u={components:{AppPage:o["a"]},data:function(){return{password:"",username:""}},methods:{submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.password,this.username),e.next=3,this.$store.dispatch("setUser",{password:this.password,username:this.username});case 3:s=e.sent,console.log(s),s.success&&this.$router.replace("/");case 6:case"end":return e.stop()}},e,this)}));function s(){return e.apply(this,arguments)}return s}()}},i=u,c=t("2877"),l=t("6544"),p=t.n(l),d=t("8336"),m=t("0e8f"),f=t("a722"),w=t("2677"),h=Object(c["a"])(i,a,r,!1,null,null,null);s["default"]=h.exports;p()(h,{VBtn:d["a"],VFlex:m["a"],VLayout:f["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-2d2086b7.00af0dd3.js.map