(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[8],{474:function(e,s,a){"use strict";var t=a(1),r=a(51),c=a(0),i=a(40),n=a(476),o=a(487),l=a(449),m=a(486),d=a(450),j=a(76),u=a(59),h=a(47),b=a(472),g={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={signUp:u.k,showAuthMessage:u.c,hideAuthMessage:u.b,showLoading:u.d};s.a=Object(i.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),x)((function(e){var s=e.signUp,a=e.showLoading,i=e.token,u=e.loading,x=e.redirect,p=e.message,O=e.showMessage,f=e.hideAuthMessage,w=e.allowRedirect,y=l.a.useForm(),v=Object(r.a)(y,1)[0],k=Object(h.g)();return Object(c.useEffect)((function(){null!==i&&w&&k.push(x),O&&setTimeout((function(){f()}),3e3)})),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(t.jsx)(m.a,{type:"error",showIcon:!0,message:p})}),Object(t.jsxs)(l.a,{form:v,layout:"vertical",name:"register-form",onFinish:function(){v.validateFields().then((function(e){a(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(t.jsx)(l.a.Item,{name:"email",label:"Email",rules:g.email,hasFeedback:!0,children:Object(t.jsx)(d.a,{prefix:Object(t.jsx)(n.a,{className:"text-primary"})})}),Object(t.jsx)(l.a.Item,{name:"password",label:"Password",rules:g.password,hasFeedback:!0,children:Object(t.jsx)(d.a.Password,{prefix:Object(t.jsx)(o.a,{className:"text-primary"})})}),Object(t.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:g.confirm,hasFeedback:!0,children:Object(t.jsx)(d.a.Password,{prefix:Object(t.jsx)(o.a,{className:"text-primary"})})}),Object(t.jsx)(l.a.Item,{children:Object(t.jsx)(j.a,{type:"primary",htmlType:"submit",block:!0,loading:u,children:"Sign Up"})})]})]})}))},481:function(e,s,a){"use strict";a.r(s);var t=a(18),r=a(1),c=(a(0),a(474)),i=a(136),n=a(84),o=a(457),l=a(40),m={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=function(e){var s=Object(l.c)((function(e){return e.theme.currentTheme}));return Object(r.jsx)("div",{className:"h-100",style:m,children:Object(r.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(n.a,{xs:20,sm:20,md:20,lg:7,children:Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),Object(r.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(n.a,{xs:24,sm:24,md:20,lg:20,children:Object(r.jsx)(c.a,Object(t.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=8.b78b8b84.chunk.js.map