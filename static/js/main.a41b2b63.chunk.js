(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(310)},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),c=a(24),l=a(25),s=a(28),u=a(26),d=a(29),p=a(56),m=a(94),h=a.n(m),v=Object(p.createMuiTheme)({palette:{primary:{main:h.a[700]},secondary:{main:h.a.A700},gradient:{darkBlue:"#051937",purple:"#692194"},background:"#eeeeee"},typography:{useNextVariants:!0},overrides:{MuiPickersModal:{dialogRoot:{backgroundColor:"white"}}}}),f=a(131),g=a.n(f),b=a(70),w=a.n(b),E=a(32),y=a.n(E),k=a(43),j=a.n(k),O=a(132),S=a.n(O),C=a(311),x=Object(p.withStyles)(function(e){return{menuButton:{marginLeft:-12,marginRight:20},link:{color:e.palette.primary.contrastText,textDecoration:"none"}}})(function(e){var t=e.withMenu,a=e.classes;return r.a.createElement(g.a,{position:"static"},r.a.createElement(w.a,null,t&&r.a.createElement(j.a,{className:a.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(S.a,null)),r.a.createElement(y.a,{variant:"h6",color:"inherit"},r.a.createElement(C.a,{to:"/",className:a.link},"CashControl"))))}),N="primary",I="secondary",D=a(60),_=a.n(D),T=a(39),F=a.n(T),U=function(e){return r.a.createElement(F.a,{component:e.component,color:e.type,variant:"contained"},e.children)},A=function(e){return r.a.createElement(C.a,Object.assign({to:"/signin"},e))},P=function(e){return r.a.createElement(C.a,Object.assign({to:"/signup"},e))},M=Object(p.withStyles)(function(e){return{root:{flexGrow:1,background:"linear-gradient(to bottom, ".concat(e.palette.primary.main,", ").concat(e.palette.gradient.darkBlue,");")},buttonContainer:{display:"flex"},space:{display:"block",width:16}}})(function(e){var t=e.classes;return r.a.createElement(_.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:t.root},r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(U,{type:I,component:A},"Sign In"),r.a.createElement("span",{className:t.space}," "),r.a.createElement(U,{type:I,component:P},"Sign Up")))}),G=a(4),R=a.n(G),V=a(314),Y=a(315),B=a(312),L=a(313),H=a(37),J=a(17),Q=a(38),W=a.n(Q),z=a(22),$=a.n(z),q=a(91),K=a.n(q),X=function(e){return r.a.createElement(K.a,{color:e.type,variant:"contained",onClick:e.onClick,disabled:e.disabled},e.children)},Z=a(15),ee=a.n(Z),te=a(21),ae={headers:{"Content-Type":"application/json","x-access-token":null}},ne="https://cash-control.herokuapp.com",re={signIn:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,o;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.login,n=t.password,r=Object(J.a)({method:"POST"},ae,{body:JSON.stringify({login:a,password:n})}),e.prev=2,e.next=5,fetch("".concat(ne,"/authenticate"),r).then(function(e){return e.json()});case 5:o=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return ae.headers["x-access-token"]=o.token,e.abrupt("return",o);case 13:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,o,i;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.login,n=t.password,r=t.email,o=Object(J.a)({method:"POST"},ae,{body:JSON.stringify({login:a,password:n,email:r})}),e.prev=2,e.next=5,fetch("".concat(ne,"/register"),o).then(function(e){return e.json()});case 5:i=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}()},oe="AUTH_SIGN_IN_REQUEST",ie="AUTH_SIGN_IN_SUCCESS",ce="AUTH_SIGN_IN_FAILURE",le="AUTH_SIGN_UP_REQUEST",se="AUTH_SIGN_UP_SUCCESS",ue="AUTH_SIGN_UP_FAILURE",de=function(e){var t=e.login,a=e.password;return function(){var e=Object(te.a)(ee.a.mark(function e(n){var r;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:oe}),e.prev=1,e.next=4,re.signIn({login:t,password:a});case 4:r=e.sent,n({type:ie,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:ce});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},pe=function(e){var t=e.login,a=e.password,n=e.email;return function(){var e=Object(te.a)(ee.a.mark(function e(r){var o;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:le}),e.prev=1,e.next=4,re.signUp({login:t,password:a,email:n});case 4:o=e.sent,r({type:se,payload:o}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:ue});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},me=a(27),he=a(30),ve=a.n(he),fe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).validateField=function(e){return e.length},a.validateForm=function(){a.setState(function(e){var t=e.login,n=e.password,r={login:!a.validateField(t.value),password:!a.validateField(n.value)};return{login:Object(J.a)({},t,{error:r.login}),password:Object(J.a)({},n,{error:r.password}),isValid:Object.keys(r).reduce(function(e,t){return e&&!r[t]},!0)}})},a.handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(H.a)({},e,{value:n,error:!a.validateField(n)})),a.validateForm()}},a.handleSubmit=function(){var e=a.props.signIn,t=a.state,n=t.password,r=t.login;if(!t.isValid)return a.validateForm(),void a.setState({showErrors:!0});e({login:r.value,password:n.value})},a.state={login:{value:"",error:!1},password:{value:"",error:!1},isValid:!1,showErrors:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.login,n=t.password,o=t.showErrors;return r.a.createElement(W.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},r.a.createElement(ve.a,{variant:"h5",className:e.title},"Sign In"),r.a.createElement($.a,{error:o&&a.error,id:"login",label:"Login",value:this.state.login.value,onChange:this.handleChange("login"),margin:"normal"}),r.a.createElement($.a,{error:o&&n.error,id:"password",label:"Password",type:"password",value:this.state.password.value,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement("div",{className:e.buttonContainer},r.a.createElement(X,{type:N,onClick:this.handleSubmit},"Submit")))}}]),t}(n.Component),ge=Object(me.b)(null,function(e){return{signIn:function(t){var a=t.login,n=t.password;return e(de({login:a,password:n}))}}})(Object(p.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background},buttonContainer:{display:"flex",marginTop:20},title:{background:"-webkit-linear-gradient(".concat(e.palette.primary.main,", ").concat(e.palette.gradient.purple,")"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}})(fe)),be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).validateField=function(e){return e.length},a.validateEmail=function(e){return e.includes("@")},a.validatePasswords=function(e,t){return e===t},a.validateForm=function(){var e=!0;return a.setState(function(t){var n=t.login,r=t.password,o=t.email,i=t.passwordConfirm,c={login:!a.validateField(n.value),email:!a.validateEmail(o.value),password:!a.validateField(r.value)||!a.validatePasswords(r.value,i.value)};return e=Object.keys(c).reduce(function(e,t){return e&&!c[t]},!0),{login:Object(J.a)({},n,{error:c.login}),email:Object(J.a)({},o,{error:c.email}),password:Object(J.a)({},r,{error:c.password}),passwordConfirm:Object(J.a)({},i,{error:c.password}),isValid:e}}),e},a.handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(H.a)({},e,{value:n,error:!a.validateField(n)})),a.validateForm()}},a.handleSubmit=function(){var e=a.props.signUp,t=a.state,n=t.password,r=t.login,o=t.email;if(!t.isValid)return a.validateForm(),void a.setState({showErrors:!0});e({login:r.value,password:n.value,email:o.value})},a.state={login:{value:"",error:!1},email:{value:"",error:!1},password:{value:"",error:!1},passwordConfirm:{value:""},isValid:!1,showErrors:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.login,n=t.email,o=t.password,i=t.passwordConfirm,c=t.showErrors;return r.a.createElement(W.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},r.a.createElement(ve.a,{variant:"h5",className:e.title},"Sign Up"),r.a.createElement($.a,{error:c&&a.error,id:"login",label:"Login",value:this.state.login.value,onChange:this.handleChange("login"),margin:"normal"}),r.a.createElement($.a,{error:c&&n.error,id:"email",label:"Email",value:this.state.email.value,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement($.a,{error:c&&o.error,id:"password",label:"Password",type:"password",value:this.state.password.value,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement($.a,{error:c&&i.error,id:"passwordConfirm",label:"Confirm Password",type:"password",value:this.state.passwordConfirm.value,onChange:this.handleChange("passwordConfirm"),margin:"normal"}),r.a.createElement("div",{className:e.buttonContainer},r.a.createElement(X,{type:N,onClick:this.handleSubmit},"Submit")))}}]),t}(n.Component),we=Object(me.b)(null,function(e){return{signUp:function(t){var a=t.login,n=t.password,r=t.email;return e(pe({login:a,password:n,email:r}))}}})(Object(p.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background},buttonContainer:{display:"flex",marginTop:20},title:{background:"-webkit-linear-gradient(".concat(e.palette.primary.main,", ").concat(e.palette.gradient.purple,")"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}})(be)),Ee=a(33),ye=a(133),ke=a.n(ye),je=a(134),Oe=a.n(je),Se=a(71),Ce=a(57),xe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).openPicker=function(e){a.picker.open(e)},a.changeDate=function(e,t){return Ee(e)[t](1,"days")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.date,o=t.onChange;return r.a.createElement(_.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(ke.a,{className:a.icon,onClick:function(){return o(e.changeDate(n,"subtract"))}}),r.a.createElement(ve.a,{className:a.date,onClick:this.openPicker},Ee(n).format("DD MMM YYYY")),r.a.createElement(Oe.a,{className:a.icon,onClick:function(){return o(e.changeDate(n,"add"))}}),r.a.createElement(Ce.b,{utils:Se.a},r.a.createElement("div",{className:this.props.classes.picker},r.a.createElement(Ce.a,{value:n,onChange:o,ref:function(t){return e.picker=t},disableFuture:!0,showTodayButton:!0}))))}}]),t}(n.Component),Ne=R()(function(e){return{icon:{margin:e.spacing.unit,color:e.palette.primary.main,fontSize:24,cursor:"pointer"},date:{fontSize:18,color:e.palette.primary.main,cursor:"pointer"},picker:{display:"none"}}})(xe),Ie=a(93),De=a.n(Ie),_e=a(141),Te=a.n(_e),Fe=a(142),Ue=a.n(Fe),Ae=a(143),Pe=a.n(Ae),Me=a(90),Ge=a.n(Me),Re=a(144),Ve=a.n(Re),Ye=function(e){return r.a.createElement(Te.a,Object.assign({button:!0,divider:!0,component:C.a},e))},Be=Object(p.withStyles)(function(e){return{root:{width:"100%"},item:{display:"flex",alignItems:"baseline"},amount:{display:"inline-block",width:50,textAlign:"right",background:"-webkit-linear-gradient(".concat(e.palette.primary.main,", ").concat(e.palette.gradient.purple,")"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}})(function(e){var t=e.spendings,a=e.classes,n=e.onDelete;return r.a.createElement(De.a,{component:"section",className:a.root},t.map(function(e){return r.a.createElement(Ye,{key:e.id,to:"/".concat(e.id),className:a.item},r.a.createElement(ve.a,{variant:"h5",className:a.amount},e.amount," \u20b4"),r.a.createElement(Ue.a,{primary:e.title}),r.a.createElement(Pe.a,{onClick:function(){return n(e.id)}},r.a.createElement(Ge.a,{"aria-label":"Delete"},r.a.createElement(Ve.a,null))))}))}),Le=a(148),He=a.n(Le),Je=a(149),Qe=a.n(Je),We=a(42),ze=a(145),$e=a(146),qe=a.n($e),Ke=a(147),Xe={token:null};var Ze={id:null,email:null,login:null};var et=a(98),tt=[];var at=Object(We.createStore)(Object(We.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return{token:t.payload.token};default:return e}},user:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ie:return{id:(e=a.payload.user).id,email:e.email,login:e.login};default:return t}},spendings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return function(e){var a=t.payload.spendings;return Object(et.a)(a)}();case ot:return[].concat(Object(et.a)(e),[t.payload]);case lt:return e.filter(function(e){return e.id!==t.payload});default:return e}}}),Object(ze.composeWithDevTools)(Object(We.applyMiddleware)(Ke.a,qe.a))),nt={add:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,o,i,c;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,n=t.amount,r=t.date,o=t.userId,i=Object(J.a)({method:"POST"},ae,{body:JSON.stringify({title:a,amount:n,date:r})}),e.prev=2,e.next=5,fetch("".concat(ne,"/users/").concat(o,"/spendings"),i).then(function(e){return e.json()});case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),edit:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,o,i,c,l;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.title,r=t.amount,o=t.date,i=t.userId,c=Object(J.a)({method:"PATCH"},ae,{body:JSON.stringify({title:n,amount:r,date:o})}),e.prev=2,e.next=5,fetch("".concat(ne,"/users/").concat(i,"/spendings/").concat(a),c).then(function(e){return e.json()});case 5:l=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",l);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,o;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.userId,n=t.id,r=Object(J.a)({method:"DELETE"},ae),e.prev=2,e.next=5,fetch("".concat(ne,"/users/").concat(a,"/spendings/").concat(n),r).then(function(e){return e.json()});case 5:o=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}()},rt="SPENDINGS_ADD_REQUEST",ot="SPENDINGS_ADD_SUCCESS",it="SPENDINGS_ADD_FAILURE",ct="SPENDINGS_REMOVE_REQUEST",lt="SPENDINGS_REMOVE_SUCCESS",st="SPENDINGS_REMOVE_FAILURE",ut=function(e){var t=e.title,a=e.amount,n=e.date,r=e.history,o=at.getState().user.id;return function(){var e=Object(te.a)(ee.a.mark(function e(i){var c;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:rt}),e.prev=1,e.next=4,nt.add({title:t,amount:a,date:n,userId:o});case 4:c=e.sent,i({type:ot,payload:c}),r.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:it});case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},dt=function(e){var t=e.id,a=at.getState().user.id;return function(){var e=Object(te.a)(ee.a.mark(function e(n){return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:ct}),e.prev=1,e.next=4,nt.remove({userId:a,id:t});case 4:e.sent,n({type:lt,payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:st});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},pt=function(e){return r.a.createElement(C.a,Object.assign({to:"/add"},e))},mt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getCurrentSpendings=function(){return a.props.spendings.filter(function(e){return Ee(e.date).format("YYYY-MM-DD")===a.state.date.format("YYYY-MM-DD")})},a.removeSpending=function(e){return a.props.remove(e)},a.state={date:Ee()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateDate",value:function(e){this.setState({date:e})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.date;return r.a.createElement(W.a,{container:!0,direction:"column",alignItems:"center",className:t.root},r.a.createElement(Ne,{date:a,onChange:function(t){return e.updateDate(t)}}),r.a.createElement(Be,{spendings:this.getCurrentSpendings(),onDelete:function(t){return e.removeSpending(t)}}),r.a.createElement(He.a,{color:"primary","aria-label":"Add",className:t.fab,component:pt},r.a.createElement(Qe.a,null)))}}]),t}(n.Component),ht=Object(me.b)(function(e){return{spendings:e.spendings}},function(e){return{remove:function(t){return e(dt({id:t}))}}})(Object(p.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background},fab:{margin:3*e.spacing.unit,marginTop:"auto",alignSelf:"flex-end"}}})(mt)),vt=a(316),ft=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).validateField=function(e){return e.length},a.validateAmount=function(e){return!Number.isNaN(e)&&e>0},a.validateForm=function(){a.setState(function(e){var t=e.title,n=e.amount,r={title:!a.validateField(t.value),amount:!a.validateAmount(n.value)};return{title:Object(J.a)({},t,{error:r.title}),amount:Object(J.a)({},n,{error:r.amount}),isValid:Object.keys(r).reduce(function(e,t){return e&&!r[t]},!0)}})},a.handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(H.a)({},e,{value:n,error:!a.validateField(n)})),a.validateForm()}},a.handleDateChange=function(e){a.setState({date:{value:e,error:!1}})},a.handleSubmit=function(){var e=a.props,t=e.add,n=e.history,r=a.state,o=r.title,i=r.amount,c=r.date;if(!r.isValid)return a.validateForm(),void a.setState({showErrors:!0});t({title:o.value,amount:i.value,date:c.value,history:n})},a.state={title:{value:"",error:!1},amount:{value:"",error:!1},date:{value:Ee(),error:!1},isValid:!1,showErrors:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.title,n=t.amount,o=t.date,i=t.showErrors;return r.a.createElement(W.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},r.a.createElement(ve.a,{variant:"h5",className:e.title},"Add spending"),r.a.createElement($.a,{error:i&&a.error,id:"title",label:"Title",value:a.value,onChange:this.handleChange("title"),margin:"normal"}),r.a.createElement($.a,{error:i&&n.error,id:"amount",label:"Amount",value:n.value,onChange:this.handleChange("amount"),margin:"normal"}),r.a.createElement(Ce.b,{utils:Se.a},r.a.createElement("div",{className:this.props.classes.picker},r.a.createElement(Ce.a,{label:"Date",value:o.value,onChange:this.handleDateChange,showTodayButton:!0,disableFuture:!0}))),r.a.createElement("div",{className:e.buttonContainer},r.a.createElement(X,{type:N,onClick:this.handleSubmit},"Add")))}}]),t}(n.Component),gt=Object(vt.a)(Object(me.b)(null,function(e){return{add:function(t){var a=t.title,n=t.amount,r=t.date,o=t.history;return e(ut({title:a,amount:n,date:r,history:o}))}}})(Object(p.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background},buttonContainer:{display:"flex",marginTop:20},title:{background:"-webkit-linear-gradient(".concat(e.palette.primary.main,", ").concat(e.palette.gradient.purple,")"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},picker:{marginTop:2*e.spacing.unit}}})(ft))),bt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.auth;return r.a.createElement(p.MuiThemeProvider,{theme:v},r.a.createElement("div",{className:t.root},r.a.createElement(V.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(x,{withMenu:a}),!a&&r.a.createElement(Y.a,null,r.a.createElement(B.a,{path:"/",exact:!0,component:M}),r.a.createElement(B.a,{path:"/signin",exact:!0,component:ge}),r.a.createElement(B.a,{path:"/signup",exact:!0,component:we}),r.a.createElement(L.a,{to:"/"})),a&&r.a.createElement(Y.a,null,r.a.createElement(B.a,{path:"/",exact:!0,component:ht}),r.a.createElement(B.a,{path:"/add",exact:!0,component:gt}),r.a.createElement(L.a,{to:"/"}))))))}}]),t}(n.Component),wt=Object(me.b)(function(e){return{auth:e.auth.token}})(R()({root:{height:"100vh",display:"flex",flexDirection:"column"}})(bt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(306),a(308);i.a.render(r.a.createElement(me.a,{store:at},r.a.createElement(wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,2,1]]]);
//# sourceMappingURL=main.a41b2b63.chunk.js.map