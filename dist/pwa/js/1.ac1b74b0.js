(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0a5e":function(t,e,a){},b438:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex bg-image"},[a("div",{staticClass:"fit col-grow items-center justify-center"},[a("div",{staticClass:"q-pa-md row justify-center items-start q-gutter-md"},[a("div",{staticClass:"v-login"},[a("div",{staticClass:"title"},[a("p",{staticClass:"title-text"},[t._v(t._s(t.titleText))])]),a("q-form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"distantare"},[a("q-input",{attrs:{rounded:"",outlined:"","bg-color":"grey-5",label:"Email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-envelope"}})]},proxy:!0}]),model:{value:t.tf_email_user,callback:function(e){t.tf_email_user=e},expression:"tf_email_user"}})],1),a("div",{staticClass:"distantare"},[a("q-input",{attrs:{rounded:"",outlined:"","bg-color":"grey-5",type:t.isPwd?"password":"text",label:"Parola"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-key"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.tf_parola_user,callback:function(e){t.tf_parola_user=e},expression:"tf_parola_user"}})],1),a("div",{staticClass:"distantare"},[a("q-btn",{attrs:{rounded:"",color:"red-10",type:"submit",label:t.btnText}})],1)]),a("div",{staticClass:"distantare"},[a("q-btn",{attrs:{rounded:"",color:"red-10",label:t.signupText},on:{click:function(e){return t.redirectRegister()}}})],1),a("div",{staticClass:"distantare"},[a("p",{staticStyle:{color:"white"},attrs:{clickable:""},on:{click:function(e){return t.forgetPass()}}},[t._v("\n            "+t._s(t.forgetPassText)+"\n          ")])])],1)])])])},s=[],r=a("7338"),n=a.n(r),o={name:"VLogin",data(){return{tf_email_user:"",tf_parola_user:"",isPwd:!0}},props:{titleText:{type:String,default:"Autentificare"},emailtelefonText:{type:String,default:"Email"},passText:{type:String,default:"parola"},btnText:{type:String,default:"intră în cont"},signupText:{type:String,default:"înregistreaza-te"},forgetPassText:{type:String,default:"Recupereaza parola"}},methods:{login(){n.a.post("/api/loginUtilizator",{email:this.tf_email_user,password:this.tf_parola_user}).then((t=>{localStorage.setItem("usertoken",t.data.token),this.email="",this.password="",this.$forceUpdate(),this.$q.notify({color:"green-5",position:"center",textColor:"white",icon:"warning",message:"Autentificat cu succes!"}),this.$router.push({name:"listainstitutii"})})).catch((t=>{console.log(t),this.$q.notify({color:"red-5",position:"center",textColor:"white",icon:"warning",message:"Utilizator sau parola gresita!"})}))},emitMethod(){EventBus.$emit("logged-in","loggedin")},redirectRegister(){this.$router.push({name:"register"})},forgetPass(){this.$router.push({name:"forgetPass"})}}},l=o,c=(a("f87c"),a("a6c2")),u=a("3548"),f=a("a3be"),p=a("19dc"),d=a("ef9c"),g=a("63c1"),m=a.n(g),_=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=_.exports;m()(_,"components",{QForm:u["a"],QInput:f["a"],QIcon:p["a"],QBtn:d["a"]})},f87c:function(t,e,a){"use strict";a("0a5e")}}]);