"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||c[d]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[f]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"NodeJS - 5 Minute test",sidebar_label:"NodeJS - 5 Minute test",slug:"/nodejs-5minute"},l=void 0,u={unversionedId:"Quickstart/nodejs-5minute",id:"Quickstart/nodejs-5minute",title:"NodeJS - 5 Minute test",description:"Want to test us out? Let's do the 5 minute test:",source:"@site/docs/01-Quickstart/3-nodejs-5minute.md",sourceDirName:"01-Quickstart",slug:"/nodejs-5minute",permalink:"/nodejs-5minute",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"NodeJS - 5 Minute test",sidebar_label:"NodeJS - 5 Minute test",slug:"/nodejs-5minute"},sidebar:"docsSidebar",previous:{title:"Quick start - Front End",permalink:"/quick-start-frontend"},next:{title:"Javascript - 5 Minute test",permalink:"/javascript-5minute"}},i={},s=[{value:"Want to test us out? Let&#39;s do the 5 minute test:",id:"want-to-test-us-out-lets-do-the-5-minute-test",level:2}],p={toc:s};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"want-to-test-us-out-lets-do-the-5-minute-test"},"Want to test us out? Let's do the 5 minute test:"),(0,r.kt)("p",null,"Ok, want to test us out in (less than) 5 minutes? Lets have a go!"),(0,r.kt)("p",null,"Firstly, If you haven't signed up yet you can ",(0,r.kt)("a",{parentName:"p",href:"https://app.featureflow.io/"},"go and get a free account here")),(0,r.kt)("p",null,"Once signed up, we give you a default project with a test and production environment plus one example feature."),(0,r.kt)("p",null,"Now your ready to go..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the github repo from here:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/featureflow/featureflow-fiveminute-node\ncd featureflow-fiveminute-node\nnpm install\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set your environment api Key")),(0,r.kt)("p",null,"Edit './helloworld.js'"),(0,r.kt)("p",null,"Add your server environment API key."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{{YOUR_SERVER_ENVIRONMENT_API_KEY_HERE}}")," with the Server Environment SDK Key: which can be retrieved under the 'API Keys' Link on the top right of your environment page."),(0,r.kt)("p",null,"This is your unique key - used to identify the server when you call to get your features."),(0,r.kt)("p",null,"The code will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var featureflow = new Featureflow.Client({apiKey: 'srv-env-23456abc...'});\n\nfeatureflow.ready(function(){\n    if (featureflow.evaluate('example-feature').isOn()) {\n        console.log('The variant is on!');\n    }\n    else {\n        console.log('The variant is not on!');\n    }\n    //featureflow is now initialized in this block\n});\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Evaluate a feature")),(0,r.kt)("p",null,"We will now evaluate a feature - to do this we need to set the feature key in the evaluate call. You can get the feature key from the features list in featureflow (in brackets) next to the name.\nIf you have just created a new account you can use the 'example-feature' that we have created for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fedatures List",src:n(1917).Z,width:"783",height:"507"})),(0,r.kt)("p",null,"In 'helloworld.js' you will see an example of a feature evaluation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (featureflow.evaluate('example-feature').isOn()){\n  console.log('The variant is on!');\n}\nelse{\n  console.log('The variant is not on!');\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the above code we are evaluating the feature ",(0,r.kt)("em",{parentName:"p"},"'example-feature'"),"."),(0,r.kt)("p",{parentName:"admonition"},"The first parameter we pass in is the key to identify the feature."),(0,r.kt)("p",{parentName:"admonition"},"You can specify featureflow to startup with features defined in code."),(0,r.kt)("p",{parentName:"admonition"},"Featureflow holds a local cache of all feature rules however in the event that the key cannot be found or some other error occurs then we will always fall back to failover value specified in your features passed in your config object, or if not specified it will default to 'off'.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run the program")),(0,r.kt)("p",null,"Now, run the program and observe the output"),(0,r.kt)("p",null,"You can run it using the node command below, or running the file using your favourite IDE."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node helloworld.js\n")),(0,r.kt)("p",null,"If all runs well, and assuming you have setup you should get the following output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The variant is not on!\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Update your feature")),(0,r.kt)("p",null,"In featureflow, toggle your feature on in your environment, run the program again and observe the output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The variant is on!\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Complete!")," ")),(0,r.kt)("p",null,"You have simply and successfully enabled a very powerful way to manage and release your features."),(0,r.kt)("p",null,"Congratulations! That was easy hey?"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"*** Ensure FeatureflowClient is a singleton!"),(0,r.kt)("p",{parentName:"admonition"},"NB: In a real world server you must ensure the Featureflow Client is a Singleton."),(0,r.kt)("p",{parentName:"admonition"},"Featureflow pulls feature configurations on startup and optimises evaluations by caching those feature rules and only updating when necessary."),(0,r.kt)("p",{parentName:"admonition"},"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/featureflow/featureflow-node-example"},"https://github.com/featureflow/featureflow-node-example")," for an example using express.")),(0,r.kt)("p",null,"Now have a look at ",(0,r.kt)("em",{parentName:"p"},"helloworldWithUser.js")," to get and idea of how you can target your features to specific audiences."),(0,r.kt)("p",null,"or you might want to try the same ",(0,r.kt)("a",{parentName:"p",href:"https://docs.featureflow.io/docs/featureflow-five-minute-javascript"},"5 minute test")," in the javascript API so you can get end to end and beautifully synchronised management"),(0,r.kt)("p",null,"or go a bit further and learn about ",(0,r.kt)("a",{parentName:"p",href:"/gradual-rollouts"},"gradual rollouts"),", ",(0,r.kt)("a",{parentName:"p",href:"/managing-feature-variants"},"variants")," and ",(0,r.kt)("a",{parentName:"p",href:"/targeting-features"},"targeting features"),"."))}f.isMDXComponent=!0},1917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-nodejs-1-4792857ae6eb16db53c095ea41001e32.png"}}]);