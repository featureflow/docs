"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,v=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(v,a(a({ref:n},m),{},{components:t})):r.createElement(v,a({ref:n},m))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={title:"Manage Environments",description:"Administer environments",sidebar_label:"Environments",slug:"environments"},a="Manage Environments",s={unversionedId:"Admin/manage-environments",id:"Admin/manage-environments",title:"Manage Environments",description:"Administer environments",source:"@site/docs/03-Admin/manage-environments.mdx",sourceDirName:"03-Admin",slug:"/Admin/environments",permalink:"/Admin/environments",draft:!1,tags:[],version:"current",frontMatter:{title:"Manage Environments",description:"Administer environments",sidebar_label:"Environments",slug:"environments"},sidebar:"docsSidebar",previous:{title:"Experiments",permalink:"/User-Guide/experiments"},next:{title:"Projects",permalink:"/Admin/projects"}},l={},c=[],m={toc:c};function u(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-environments"},"Manage Environments"),(0,o.kt)("p",null,"Within your project you create environments. Environments will map directly you your projects environments such as 'Development', 'Test', 'Production'."),(0,o.kt)("p",null,"When you create a feature we create a default control for each environment. You can then manage the feature for each environment."),(0,o.kt)("p",null,"Each user gets their own special sandbox 'local' environment - this has its own unique keys and settings and allows developers to develop without affecting others."),(0,o.kt)("p",null,"Select Account > Admin > Projects (Tab) > Your Project (Tab) to navigate to your desired project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manage Environments",src:t(6529).Z,width:"1422",height:"773"})),(0,o.kt)("p",null,"From here you can create a New environment, update environments and delete environments. Note you must have at least 1 environment for a project."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u2757\ufe0fDeleting Environments"),(0,o.kt)("p",{parentName:"admonition"},"Delete an environment with extreme caution! Deleting an environment will remove feature configuration for that environment and remove the environment API Keys. This will cause your SDKs to fail - any applications using that environment will fall back to the failover rules defined in the application code. This is NOT reversible.")))}u.isMDXComponent=!0},6529:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/admin-environments-1-041ee617d6412669e642ffa1458a14bd.png"}}]);