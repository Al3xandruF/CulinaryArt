(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{13:function(e,a,t){e.exports={Row:"SignInUpForm_Row__3PbVy",Input:"SignInUpForm_Input__3xaLZ",Header:"SignInUpForm_Header__3joQJ",Link:"SignInUpForm_Link__1BeMm",Container:"SignInUpForm_Container__2cuBp",SignInCol:"SignInUpForm_SignInCol__3ImPK",SignUpCol:"SignInUpForm_SignUpCol__28o4y",Submit:"SignInUpForm_Submit__24gpn"}},14:function(e,a,t){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Content:"App_Content__ZaMNr",FillerImage:"App_FillerImage__2ob-g",Image:"App_Image__3UPXw"}},22:function(e,a,t){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",Blue:"Button_Blue__10GcT",BlueOutline:"Button_BlueOutline__YqCWO",Bright:"Button_Bright__1MBHR",Black:"Button_Black__2dCp7",BlackOutline:"Button_BlackOutline__I-kZ-"}},33:function(e,a,t){e.exports={Container:"RecipeCreateEditForm_Container__Vd_a2",Submit:"RecipeCreateEditForm_Submit__2YoNx"}},55:function(e,a,t){e.exports={Avatar:"Avatar_Avatar__196lW"}},59:function(e,a,t){e.exports={Asset:"Asset_Asset__1dBcX"}},64:function(e,a,t){},7:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__1amC6",NavLink:"NavBar_NavLink__34ons",Active:"NavBar_Active__3PBZb"}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(27),i=t.n(s),r=(t(64),t(14)),l=t.n(r),o=t(98),d=t(24),j=t(97),p=t.p+"static/media/logo.c9622b9a.png",u=t(7),m=t.n(u),b=t(8),x=t(11),h=t.n(x);h.a.defaults.baseURL="/api",h.a.defaults.headers.post["Content-Type"]="multipart/form-data",h.a.defaults.withCredentials=!0;const O=h.a.create(),v=h.a.create();var g=t(9),f=t(1);const _=Object(n.createContext)(),N=Object(n.createContext)(),C=()=>Object(n.useContext)(N),y=e=>{let{children:a}=e;const[t,c]=Object(n.useState)(null),s=Object(g.f)();return Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await v.get("dj-rest-auth/user/");c(e)}catch(e){console.log(e)}})()}),[]),Object(n.useMemo)((()=>{O.interceptors.request.use((async e=>{try{await h.a.post("/dj-rest-auth/token/refresh/")}catch(a){return c((e=>(e&&s.push("/signin"),null))),e}return e}),(e=>Promise.reject(e))),v.interceptors.response.use((e=>e),(async e=>{var a;if(401===(null===(a=e.response)||void 0===a?void 0:a.status)){try{await h.a.post("/dj-rest-auth/token/refresh/")}catch(e){c((e=>(e&&s.push("/signin"),null)))}return h()(e.config)}return Promise.reject(e)}))}),[s]),Object(f.jsx)(_.Provider,{value:t,children:Object(f.jsx)(N.Provider,{value:c,children:a})})};var w=t(55),I=t.n(w);var k=e=>{let{src:a,height:t=45,text:n}=e;return Object(f.jsxs)("span",{children:[Object(f.jsx)("img",{className:I.a.Avatar,src:a,height:t,width:t,alt:"avatar"}),n]})};var S=()=>{const[e,a]=Object(n.useState)(!1),t=Object(n.useRef)(null);return Object(n.useEffect)((()=>{const e=e=>{t.current&&!t.current.contains(e.target)&&a(!1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[t]),{expanded:e,setExpanded:a,ref:t}};var L=()=>{const e=Object(n.useContext)(_),a=C(),{expanded:t,setExpanded:c,ref:s}=S(),i=Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/recipes/create",children:[Object(f.jsx)("i",{className:"fas fa-pencil-alt"}),"Add recipe"]}),r=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/chefs",children:[Object(f.jsx)("i",{class:"fa-brands fa-redhat"}),"Chefs"]}),Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/recipes",children:[Object(f.jsx)("i",{class:"fa-solid fa-utensils"}),"Recipes"]}),Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/savedrecipes",children:[Object(f.jsx)("i",{className:"fas fa-bookmark ".concat(m.a.Icons)}),"Saved Recipes"]}),Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/feed",children:[Object(f.jsx)("i",{className:"fa-solid fa-rss ".concat(m.a.Icons)}),"Feed"]}),Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/liked",children:[Object(f.jsx)("i",{className:"fas fa-thumbs-up ".concat(m.a.Icons)}),"Liked"]}),Object(f.jsx)(b.c,{className:m.a.NavLink,to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(f.jsx)(k,{src:null===e||void 0===e?void 0:e.profile_image,text:"Profile",height:35})}),Object(f.jsxs)(b.c,{className:m.a.NavLink,onClick:async()=>{try{await h.a.post("dj-rest-auth/logout/"),a(null)}catch(e){console.log(e)}},to:"/",children:[Object(f.jsx)("i",{className:"fas fa-sign-out-alt ".concat(m.a.Icons)}),"Sign Out"]})]}),l=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/signin",children:[Object(f.jsx)("i",{class:"fa-solid fa-door-open"}),"Sign In"]}),Object(f.jsxs)(b.c,{className:m.a.NavLink,activeClassName:m.a.Active,to:"/signup",children:[Object(f.jsx)("i",{class:"fa-solid fa-user-plus"}),"Sign Up"]})]});return Object(f.jsx)(o.a,{expanded:t,className:m.a.NavBar,expand:"md",fixed:"top",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(b.c,{to:"/",children:Object(f.jsx)(o.a.Brand,{children:Object(f.jsx)("img",{src:p,alt:"logo",height:"50"})})}),e&&i,Object(f.jsx)(o.a.Toggle,{ref:s,onClick:()=>c(!t),"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(j.a,{className:"ml-auto",children:[Object(f.jsxs)(b.c,{exact:!0,className:m.a.NavLink,activeClassName:m.a.Active,to:"/",children:[Object(f.jsx)("i",{class:"fa-solid fa-house-chimney-user"}),"Home"]}),e?r:l]})})]})})},A=t(13),B=t.n(A),F=t(22),U=t.n(F),R=t(58),P=t(31),G=t(6),D=t(18),E=t(32),M=t(36),T=t.p+"static/media/auth.8869f9ff.png";var H=()=>{var e,a,t,c;const[s,i]=Object(n.useState)({username:"",password1:"",password2:""}),{username:r,password1:o,password2:j}=s,[p,u]=Object(n.useState)({}),m=Object(g.f)(),x=e=>{i({...s,[e.target.name]:e.target.value})};return Object(f.jsxs)(R.a,{className:B.a.Row,children:[Object(f.jsxs)(P.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(f.jsxs)(d.a,{className:"".concat(l.a.Content," p-4 "),children:[Object(f.jsx)("h1",{className:B.a.Header,children:"sign up"}),Object(f.jsxs)(G.a,{onSubmit:async e=>{e.preventDefault();try{await h.a.post("/dj-rest-auth/registration/",s),m.push("/signin")}catch(t){var a;u(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(f.jsxs)(G.a.Group,{controlId:"username",children:[Object(f.jsx)(G.a.Label,{className:"d-none",children:"username"}),Object(f.jsx)(G.a.Control,{className:B.a.Input,type:"text",placeholder:"Username",name:"username",value:r,onChange:x})]}),null===(e=p.username)||void 0===e?void 0:e.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"password1",children:[Object(f.jsx)(G.a.Label,{className:"d-none",children:"Password"}),Object(f.jsx)(G.a.Control,{className:B.a.Input,type:"password",placeholder:"Password",name:"password1",value:o,onChange:x})]}),null===(a=p.password1)||void 0===a?void 0:a.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"password2",children:[Object(f.jsx)(G.a.Label,{className:"d-none",children:"Confirm password"}),Object(f.jsx)(G.a.Control,{className:B.a.Input,type:"password",placeholder:"Confirm password",name:"password2",value:j,onChange:x})]}),null===(t=p.password2)||void 0===t?void 0:t.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsx)(E.a,{className:"".concat(B.a.Submit," ").concat(U.a.Wide),type:"submit",children:"Sign Up"}),null===(c=p.non_field_errors)||void 0===c?void 0:c.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(f.jsx)(d.a,{className:"mt-3 ".concat(l.a.Content),children:Object(f.jsxs)(b.b,{className:B.a.Link,to:"/signin",children:["Already have an account? ",Object(f.jsx)("span",{children:"Sign in"})]})})]}),Object(f.jsx)(P.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(B.a.SignUpCol),children:Object(f.jsx)(M.a,{className:"".concat(l.a.FillerImage),src:T,alt:"auth",height:"450",width:"450"})})]})};var W=function(){var e,a,t;const c=C(),[s,i]=Object(n.useState)({username:"",password:""}),{username:r,password:o}=s,[j,p]=Object(n.useState)({}),u=Object(g.f)(),m=e=>{i({...s,[e.target.name]:e.target.value})};return Object(f.jsxs)(R.a,{className:B.a.Row,children:[Object(f.jsxs)(P.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(f.jsxs)(d.a,{className:"".concat(l.a.Content," p-4 "),children:[Object(f.jsx)("h1",{className:B.a.Header,children:"sign in"}),Object(f.jsxs)(G.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await h.a.post("/dj-rest-auth/login/",s);c(e.user),u.push("/")}catch(t){var a;p(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(f.jsxs)(G.a.Group,{controlId:"username",children:[Object(f.jsx)(G.a.Label,{className:"d-none",children:"Username"}),Object(f.jsx)(G.a.Control,{type:"text",placeholder:"Username",name:"username",className:B.a.Input,value:r,onChange:m})]}),null===(e=j.username)||void 0===e?void 0:e.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"password",children:[Object(f.jsx)(G.a.Label,{className:"d-none",children:"Password"}),Object(f.jsx)(G.a.Control,{type:"password",placeholder:"Password",name:"password",className:B.a.Input,value:o,onChange:m})]}),null===(a=j.password)||void 0===a?void 0:a.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsx)(E.a,{className:"".concat(B.a.Submit," ").concat(U.a.Wide),type:"submit",children:"Sign In"}),null===(t=j.non_field_errors)||void 0===t?void 0:t.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(f.jsx)(d.a,{className:"mt-3 ".concat(l.a.Content),children:Object(f.jsxs)(b.b,{className:B.a.Link,to:"/signup",children:["Don't have an account? ",Object(f.jsx)("span",{children:"Sign up now!"})]})})]}),Object(f.jsx)(P.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(B.a.SignInCol),children:Object(f.jsx)(M.a,{className:"".concat(l.a.FillerImage),src:T,alt:"auth",height:"450",width:"450"})})]})},Z=t(96),J=t(59),q=t.n(J);var Q=e=>{let{spinner:a,src:t,message:n}=e;return Object(f.jsxs)("div",{className:"".concat(q.a.Asset," p-4"),children:[a&&Object(f.jsx)(Z.a,{animation:"border"}),t&&Object(f.jsx)("img",{src:t,alt:n}),n&&Object(f.jsx)("p",{className:"mt-4",children:n})]})},V=t(33),X=t.n(V),Y=t.p+"static/media/upload.c280d5e6.jpeg";const K=Object(n.createContext)({alertMessage:"",alertType:"",setAlert:()=>{}});var z=K;var $=()=>Object(n.useContext)(z);var ee=function(){var e,a,t,c,s,i,r,o;(e=>{const a=Object(g.f)();Object(n.useEffect)((()=>{(async()=>{try{await h.a.post("/dj-rest-auth/token/refresh/"),"loggedIn"===e&&a.push("/")}catch(t){"loggedOut"===e&&a.push("/")}})()}),[a,e])})("loggedOut");const[j,p]=Object(n.useState)({}),{setAlert:u}=((new Date).toISOString().split("T")[0],$()),[m,b]=Object(n.useState)({recipe_title:"",image:"",recipe_description:"",ingredients:"",cooking_time:"",difficulty:"",servings:"",calories:"",recipe_preparation:""}),{recipe_title:x,image:v,recipe_description:_,ingredients:N,cooking_time:C,difficulty:y,servings:w,calories:I,recipe_preparation:k}=m,S=Object(n.useRef)(null),L=Object(g.f)(),A=e=>{b({...m,[e.target.name]:e.target.value})};return Object(f.jsx)("div",{className:"d-flex justify-content-center mb-5 mt-4",children:Object(f.jsxs)(G.a,{onSubmit:async e=>{e.preventDefault();const a=new FormData;a.append("recipe_title",x),a.append("image",S.current.files[0]),a.append("recipe_description",_),a.append("ingredients",N),a.append("cooking_time",C),a.append("difficulty",y),a.append("servings",w),a.append("calories",I),a.append("recipe_preparation",k);try{const{data:e}=await O.post("/recipes/",a);L.push("/recipes/".concat(e.id)),u("Recipe Created!","success")}catch(c){var t,n;if(401!==(null===(t=c.response)||void 0===t?void 0:t.status))p(null===(n=c.response)||void 0===n?void 0:n.data)}},children:[Object(f.jsxs)(d.a,{className:"".concat(l.a.Content," ").concat(X.a.Container," d-flex flex-column justify-content-center"),children:[Object(f.jsxs)(G.a.Group,{controlId:"recipe_title",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Recipe Title"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add recipe title",type:"text",name:"recipe_title",value:x,onChange:A})]}),null===j||void 0===j||null===(e=j.recipe_title)||void 0===e?void 0:e.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{className:"text-center",children:[v?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("figure",{children:Object(f.jsx)(M.a,{className:l.a.Image,src:v,rounded:!0})}),Object(f.jsx)("div",{children:Object(f.jsx)(G.a.Label,{className:"".concat(X.a.Submit," ").concat(U.a.Blue," btn"),htmlFor:"image-upload",children:"Change the image"})})]}):Object(f.jsx)(G.a.Label,{className:"d-flex justify-content-center",htmlFor:"image-upload",children:Object(f.jsx)(Q,{src:Y,message:"Click or tap to upload an image"})}),Object(f.jsx)(G.a.File,{id:"image-upload",accept:"image/*",onChange:e=>{e.target.files.length&&(URL.revokeObjectURL(v),b({...m,image:URL.createObjectURL(e.target.files[0])}))},ref:S})]}),Object(f.jsxs)(G.a.Group,{controlId:"recipe_description",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Recipe Description"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add recipe description",type:"text",name:"recipe_description",value:_,onChange:A})]}),null===j||void 0===j||null===(a=j.recipe_description)||void 0===a?void 0:a.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"ingredients",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Ingredients"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add ingredients",type:"text",name:"ingredients",value:N,onChange:A})]}),null===j||void 0===j||null===(t=j.ingredients)||void 0===t?void 0:t.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"cooking_time",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Cooking Time"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add cooking time",type:"text",name:"cooking_time",value:C,onChange:A})]}),null===j||void 0===j||null===(c=j.cooking_time)||void 0===c?void 0:c.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"difficulty",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Difficulty"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add difficulty",type:"text",name:"difficulty",value:y,onChange:A,min:"0"})]}),null===j||void 0===j||null===(s=j.difficulty)||void 0===s?void 0:s.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"servings",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Servings"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add servings",type:"text",name:"servings",value:w,onChange:A,min:"0"})]}),null===j||void 0===j||null===(i=j.servings)||void 0===i?void 0:i.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"calories",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Calories"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add calories",type:"text",name:"calories",value:I,onChange:A,min:"0"})]}),null===j||void 0===j||null===(r=j.calories)||void 0===r?void 0:r.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a))),Object(f.jsxs)(G.a.Group,{controlId:"recipe_preparation",children:[Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(G.a.Label,{children:"Recipe Preparation"})}),Object(f.jsx)(G.a.Control,{as:"textarea",placeholder:"Add recipe preparation",type:"text",name:"recipe_preparation",value:k,onChange:A})]}),null===j||void 0===j||null===(o=j.recipe_preparation)||void 0===o?void 0:o.map(((e,a)=>Object(f.jsx)(D.a,{variant:"warning",children:e},a)))]}),Object(f.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(f.jsx)(E.a,{className:"".concat(X.a.Submit," ").concat(U.a.Button),onClick:e=>{e.preventDefault(),L.goBack()},children:"cancel"}),Object(f.jsx)(E.a,{className:"".concat(X.a.Submit," ").concat(U.a.Button),type:"submit",children:"create"})]})]})})};var ae=function(){return Object(f.jsxs)("div",{className:l.a.App,children:[Object(f.jsx)(L,{}),Object(f.jsx)(d.a,{className:l.a.Main,children:Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/",render:()=>Object(f.jsx)("h1",{children:"Home"})}),Object(f.jsx)(g.a,{exact:!0,path:"/chefs",render:()=>Object(f.jsx)("h1",{children:"Chefs"})}),Object(f.jsx)(g.a,{exact:!0,path:"/recipes/create",render:()=>Object(f.jsx)(ee,{})}),Object(f.jsx)(g.a,{exact:!0,path:"/signin",render:()=>Object(f.jsx)(W,{})}),Object(f.jsx)(g.a,{exact:!0,path:"/signup",render:()=>Object(f.jsx)(H,{})}),Object(f.jsx)(g.a,{render:()=>Object(f.jsx)("h2",{children:"Page Not Found!"})})]})})]})};var te=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,99)).then((a=>{let{getCLS:t,getFID:n,getFCP:c,getLCP:s,getTTFB:i}=a;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(b.a,{children:Object(f.jsx)(y,{children:Object(f.jsx)(ae,{})})})}),document.getElementById("root")),te()}},[[94,1,2]]]);
//# sourceMappingURL=main.95c920a1.chunk.js.map