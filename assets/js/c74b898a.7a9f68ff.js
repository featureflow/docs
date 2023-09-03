"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(a),p=r,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||l;return a?n.createElement(m,u(u({ref:t},c),{},{components:a})):n.createElement(m,u({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[f]="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4445:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>C,contentTitle:()=>F,default:()=>j,frontMatter:()=>I,metadata:()=>O,toc:()=>S});var n=a(7462),r=a(7294),l=a(3905),u=a(6010),o=a(2466),i=a(6550),s=a(1980),c=a(7392),f=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[u,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=h({queryString:a,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,f.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var b=a(2389);const w="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(f(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,u.Z)("tabs__item",g,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=v(e);return r.createElement("div",{className:(0,u.Z)("tabs-container",w)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}const x="tabItem_Ymn6";function E(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,u.Z)(x,n),hidden:a},t)}const I={title:"Quick start - server",sidebar_label:"Quick start - Server",slug:"/quick-start-server"},F=void 0,O={unversionedId:"Quickstart/quickstart-server",id:"Quickstart/quickstart-server",title:"Quick start - server",description:"This Quick start is designed to get featureflow into your existing application as quickly as possible.",source:"@site/docs/01-Quickstart/1-quickstart-server.md",sourceDirName:"01-Quickstart",slug:"/quick-start-server",permalink:"/quick-start-server",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick start - server",sidebar_label:"Quick start - Server",slug:"/quick-start-server"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Quick start - Front End",permalink:"/quick-start-frontend"}},C={},S=[{value:"Install the Featureflow client",id:"install-the-featureflow-client",level:2},{value:"Create a Featureflow client and register features",id:"create-a-featureflow-client-and-register-features",level:2},{value:"Evaluate a feature",id:"evaluate-a-feature",level:2},{value:"Try it out!",id:"try-it-out",level:2}],q={toc:S};function j(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},q,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This Quick start is designed to get featureflow into your existing application as quickly as possible."),(0,l.kt)("h2",{id:"install-the-featureflow-client"},"Install the Featureflow client"),(0,l.kt)(N,{mdxType:"Tabs"},(0,l.kt)(E,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.featureflow</groupId>\n    <artifactId>featureflow-java-sdk</artifactId>\n    <version>1.1.2</version>\n</dependency>\n"))),(0,l.kt)(E,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"NodeJS",NodeJS:!0},"\nnpm install featureflow-node-sdk\n\n"))),(0,l.kt)(E,{value:"dotnet",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:".NET",".NET":!0},"Install-Package Featureflow\n"))),(0,l.kt)(E,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n# Without bundler\n$ gem install featureflow\n\n# With bundler\n# in your Gemfile\ngem 'featureflow'\n# then\n$ bundle install\n\n"))),(0,l.kt)(E,{value:"go",label:"Go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'\npackage main\n\nimport (\n  "github.com/featureflow/featureflow-go-sdk/featureflow"\n)\n\n')))),(0,l.kt)("h2",{id:"create-a-featureflow-client-and-register-features"},"Create a Featureflow client and register features"),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"The featureflow client must be a Singleton in your application.")),(0,l.kt)("p",null,"Do not instantiate featureflow on every request This will cause a reload of features every time which will incur a performance penalty and excessive usage."),(0,l.kt)("p",null,"The Featureflow Client will maintain an optimised cache of all your feature rules."),(0,l.kt)(N,{mdxType:"Tabs"},(0,l.kt)(E,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'FeatureflowClient client = new  FeatureflowClient\n        .Builder({Server Environment Api Key})\n        .withFeatures(Arrays.asList(\n        new Feature("logout-button", Variant.off),\n        new Feature("example-feature", Variant.off)),\n        ));\n\n//The client is a singleton, so for example if you use spring you might declare it in a @Configuration class.\n\n//we recommend that you use an enum for your feature keys - this helps you track them in your IDE and reduces debt.\n'))),(0,l.kt)(E,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar Featureflow = require(\'featureflow-node-sdk\');\n\nvar withFeatures = [\n    new Featureflow.Feature("logout-button").build(),\n    new Featureflow.Feature("example-button").build(),\n]\n\nnew Featureflow.Client({\n    apiKey: "server-api-key",\n    withFeatures: withFeatures\n}, function(error, featureflow) {\n    if (!error) {\n        throw error;\n    }\n    // featureflow is now initialized\n    featureflow\n});\n\n//You should only create one instance of a Featureflow.Client\n\n'))),(0,l.kt)(E,{value:"dotnet",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dotnet",metastring:".NET",".NET":!0},'using Featureflow.Client;\nvar client = FeatureflowClientFactory.Create("srv-env-YOUR_SERVER_ENVIRONMENT_API_KEY");\n'))),(0,l.kt)(E,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"\nrequire 'featureflow'\n\nwith_features = [\n  Featureflow::Feature.create('logout-button'),\n  Featureflow::Feature.create('example-button')\n]\n\nfeatureflow = Featureflow::Client.new(api_key: \"server api key\", with_features: with_features)\n\n"))),(0,l.kt)(E,{value:"go",label:"Go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'\nfeatureflowClient, error := featureflow.Client("server api", featureflow.Config{\n  WithFeatures: []featureflow.FeatureRegistration{\n    featureflow.WithFeature("logout-button", "off").Build(),\n    featureflow.WithFeature("example-button", "off").Build(),\n  },\n})\n\n')))),(0,l.kt)("p",null,"Your 'Server Environment SDK Key' is available on your environment page in featureflow."),(0,l.kt)("p",null,"You may wish to register your features at startup. This provides additional benefits - we know immediately when a feature is available in an environment, you can provide an alternative failover variant (the default is 'off') - the failover variant is the variant that is chosen if there is no matching feature available to evaluate (if you are offline with no cache, misconfigured or the feature has not been created yet in featureflow). It also helps as a central place to refer to all your currently deployed features."),(0,l.kt)("h2",{id:"evaluate-a-feature"},"Evaluate a feature"),(0,l.kt)(N,{mdxType:"Tabs"},(0,l.kt)(E,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Without User\nif(featureflowClient.evaluate("example-feature").isOn())) {\n        //do something\n        } else {\n        //do not do something\n        }\n\n//With a User\n        FeatureflowUser user = new FeatureflowUser("uniqueUserId")\n        .withAttribute("tier", "silver")\n        .withAttribute("age", 32)\n        .withAttribute("signup_date", new DateTime(2017, 1, 1, 12, 0, 0, 0));\n\n        if(featureflowClient.evaluate("example-feature", user).isOn()) {\n        //do something\n        }\n'))),(0,l.kt)(E,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//Without Context Values\nif (featureflow.evaluate(\"example-feature\", \"uniqueuserkey1\").isOn())) {\n    //do something\n} else {\n    //do not do something\n}\n\n//With a User\nvar UserBuilder = require(\"featureflow-node-sdk\").UserBuilder;\nvar user = new UserBuilder('uniqueuserkey1')\n    .withAttribute('tier', 'silver')\n    .withAttribute('age', 32)\n    .withAttribute('signup_date', new Date(2017, 0, 1, 12, 0, 0, 0))\n\nif (featureflow.evaluate(\"example-feature\", user).isOn()) {\n    //do something\n}\n"))),(0,l.kt)(E,{value:"dotnet",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dotnet",metastring:".NET",".NET":!0},'var user = new User("1234");\nuser.WithAttribute("region", "sydney");\nuser.WithAttribute("days", new List<int> { 11, 1, 4, 29 });\nuser.WithSessionAttribute("dayofweek", 5);\nvar result = client.Evaluate("example-feature", user).Value();\n\n if (client.Evaluate("example-feature").IsOn())\n    {\n        //do something\n    }\n    if (client.Evaluate("example-feature").IsOff())\n    {\n        //do something\n    }\n'))),(0,l.kt)(E,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'# without user attributes\nif featureflow.evaluate("example-feature", "uniqueuserkey1").on?\n  # do something\nend\n\n#with user attributes\nuser = Featureflow::UserBuilder.new(\'uniqueuserkey1\')\n.withAttributes(\n                                        tier: \'silver\',\n                                        age: 32,\n                                        signup_date: Time.new(2017, 1, 1, 12).iso8601\n                                       ).build\n\nif featureflow.evaluate("example-feature", user).on?\n  # do something\nend\n\n'))),(0,l.kt)(E,{value:"go",label:"Go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// without context values\nif featureflowClient.EvaluateBasic("example-feature", "uniqueuserkey1").IsOn() {\n    //do something\n}\n\n// with context values\nuser := featureflow.NewUserBuilder("uniqueuserkey1").\n  WithAttribute("tier", "silver").\n  WithAttribute("age", 23).\n  WithAttribute("signup_date", "2017-01-01T12:00:00+00:00").\n  Build()\n\nif featureflowClient.Evaluate("example-feature", user).IsOn() {\n    //do something\n}\n\n')))),(0,l.kt)("p",null,"In the Server-side SDK's we create a FeatureFlow User and pass that into the 'evaluate' method.\nThe FeatureflowUser contains a a set of name/value pairs which give featureflow information on which you can base your feature rules. If you do not provide a user we will assume the user is 'anonymous'."),(0,l.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,l.kt)("p",null,"You may now fire up your application - keep an eye on the features list in the featureflow admin panel and you will see your features appear with default on/off settings."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations you're done!")),(0,l.kt)("p",null,"If you wish of course you can create the features via the featureflow UI - featureflow will make the connection using the feature Key.\nTo do this click 'New Feature' (in any environment) and enter a name and key:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create Feature",src:a(7229).Z,width:"597",height:"812"})),(0,l.kt)("p",null,"You will see your feature in the list - you will notice that it has an empty green circle next to it - this means we have not seen the feature yet in the environment."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Register or evaluate the new feature in your SDK code (you can find the feature Key in the feature detail modal)"),(0,l.kt)("li",{parentName:"ul"},"Restart your application - You will find that the icon has updated to a ticked green circle as soon as we detect your new feature (ensure you're looking at the environment that matches your SDK environment key).")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Status Icon",src:a(9352).Z,width:"288",height:"122"})),(0,l.kt)("p",null,"Thats the basics to get started. "),(0,l.kt)("p",null,"Check out the User guide for to learn how to manage gradual rollouts, targeting, and multiple feature variants. "),(0,l.kt)("p",null,"You may wish to try the  ",(0,l.kt)("a",{parentName:"p",href:"/javascript-client"},"javascript client SDK")," started to manage your front-end."))}j.isMDXComponent=!0},7229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quickstart-1-create-feature-1e408d9d882547d097cac341ff782e56.png"},9352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quickstart-2-toggle-ecb5b7bc5666756740ac32a5a9e4e01d.png"}}]);