(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(364)},161:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),i=(a(161),a(19)),l=a(26),s=a(28),u=a(27),m=a(29),p=a(51),E=a(37),b=a(74),d=a(75),f=a(148),h=a.n(f),A=a(149),_=a.n(A),O=a(150),g=a.n(O),P=a(43),j=a.n(P),C=a(145),R=a.n(C),w=a(152),v=a.n(w),T=a(151),y=a.n(T),D=a(153),I=a.n(D),N=a(76),S=a.n(N),k=a(77),B=a.n(k),M=a(79),U=a.n(M),x=a(78),G=a.n(x),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={left:!1},a.toggleDrawer=function(e,t){return function(){a.setState(Object(b.a)({},e,t))}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement("div",{className:e.list},r.a.createElement(R.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement(S.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(G.a,null)),r.a.createElement(U.a,{primary:"Home"}))),r.a.createElement(S.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(G.a,null)),r.a.createElement(U.a,{primary:"All Posts"})),r.a.createElement(S.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(G.a,null)),r.a.createElement(U.a,{primary:"Add Post"}))));return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(_.a,null,r.a.createElement(g.a,{onClick:this.toggleDrawer("left",!0),className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(y.a,null)),r.a.createElement(j.a,{variant:"h5",color:"inherit",className:e.grow},"Fireact"),r.a.createElement(v.a,{color:"inherit"}," ",r.a.createElement(p.b,{to:"/signin",className:e.navlink}," Login")))),r.a.createElement(I.a,{anchor:"left",open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},t)))}}]),t}(r.a.Component),L=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},list:{width:250},navlink:{color:"#ffffff",textDecoration:"none"}})(K),J=a(154),Y=a(105),F=a.n(Y),H=a(73),z=a.n(H),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(F.a,{container:!0,spacing:24},r.a.createElement(F.a,{item:!0,xs:12},r.a.createElement(z.a,{className:e.paper,elevation:1},r.a.createElement(j.a,{variant:"h5",component:"h3"},"Hello World"),r.a.createElement(j.a,{component:"p"},"This is a blog built using React, Material-UI and Firebase")))))}}]),t}(n.Component),V=Object(d.withStyles)(function(e){return{root:Object(J.a)({flexGrow:1},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),paper:{padding:2*e.spacing.unit,textAlign:"center"}}})(W),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," Login ")}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," Register ")}}]),t}(n.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(E.a,{exact:!0,path:"/",component:V}),r.a.createElement(E.a,{path:"/signup",component:q}),r.a.createElement(E.a,{path:"/signin",component:$})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=r.a.createContext(null),Z=a(155),ee=a.n(Z),te={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"AIzaSyCT6p-pO8uGr-K0MKufkMB3j1JFc9bMPdY",REACT_APP_AUTH_DOMAIN:"fireact-46dbd.firebaseapp.com",REACT_APP_DATABASE_URL:"https://fireact-46dbd.firebaseio.com",REACT_APP_PROJECT_ID:"fireact-46dbd",REACT_APP_STORAGE_BUCKET:"fireact-46dbd.appspot.com",REACT_APP_MESSAGIN_SENDER_ID:"41463522217"}).YOUR_API_KEY,authDomain:"fireact-46dbd.firebaseapp.com",databaseURL:"https://fireact-46dbd.firebaseio.com",projectId:"fireact-46dbd",storageBucket:"fireact-46dbd.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"AIzaSyCT6p-pO8uGr-K0MKufkMB3j1JFc9bMPdY",REACT_APP_AUTH_DOMAIN:"fireact-46dbd.firebaseapp.com",REACT_APP_DATABASE_URL:"https://fireact-46dbd.firebaseio.com",REACT_APP_PROJECT_ID:"fireact-46dbd",REACT_APP_STORAGE_BUCKET:"fireact-46dbd.appspot.com",REACT_APP_MESSAGIN_SENDER_ID:"41463522217"}).REACT_APP_MESSAGING_SENDER_ID},ae=function e(){Object(i.a)(this,e),ee.a.initializeApp(te)};o.a.render(r.a.createElement(X.Provider,{value:new ae},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.164d3af6.chunk.js.map