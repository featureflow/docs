"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[524],{3905:(e,t,A)=>{A.d(t,{Zo:()=>s,kt:()=>m});var n=A(7294);function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){i(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function l(e,t){if(null==e)return{};var A,n,i=function(e,t){if(null==e)return{};var A,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(i[A]=e[A]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var o=n.createContext({}),g=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},s=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var A=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=g(A),u=i,m=c["".concat(o,".").concat(u)]||c[u]||f[u]||a;return A?n.createElement(m,r(r({ref:t},s),{},{components:A})):n.createElement(m,r({ref:t},s))}));function m(e,t){var A=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=A.length,r=new Array(a);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var g=2;g<a;g++)r[g]=A[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,A)}u.displayName="MDXCreateElement"},5:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var n=A(7462),i=(A(7294),A(3905));const a={},r="Jira Integration",l={unversionedId:"Integrations/jira",id:"Integrations/jira",title:"Jira Integration",description:"\ud83d\udcd8 Integration for Jira Cloud",source:"@site/docs/04-Integrations/jira.mdx",sourceDirName:"04-Integrations",slug:"/Integrations/jira",permalink:"/Integrations/jira",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Heap Analytics Integration",permalink:"/Integrations/heap"},next:{title:"Slack Integration",permalink:"/Integrations/slack"}},o={},g=[{value:"Installation",id:"installation",level:2},{value:"Create a new feature from Jira",id:"create-a-new-feature-from-jira",level:2},{value:"Link an existing feature from Jira",id:"link-an-existing-feature-from-jira",level:2},{value:"Link an existing Jira ticket from Featureflow",id:"link-an-existing-jira-ticket-from-featureflow",level:2},{value:"View your features in Jira",id:"view-your-features-in-jira",level:2},{value:"Remove the integration",id:"remove-the-integration",level:2}],s={toc:g};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jira-integration"},"Jira Integration"),(0,i.kt)("p",null,"\ud83d\udcd8 Integration for Jira Cloud"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This integration is for jira cloud only.")),(0,i.kt)("p",null,"With Featureflow's first-class Jira Cloud integration, you can create, link and view the status of all of your feature flags directly from Jira. You'll also be able to link your jira tasks to your features directly from Featureflow."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Installation is simple:\nGrab the featureflow integration from the Atlassian Marketplace"),(0,i.kt)("p",null,"Once installed, click 'Get started'"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(1269).Z,width:"1190",height:"660"})),(0,i.kt)("p",null,"Enter the domain of your featureflow site and click 'connect'"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(7464).Z,width:"1306",height:"438"})),(0,i.kt)("p",null,"Your jira integration is complete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(315).Z,width:"989",height:"148"})),(0,i.kt)("h2",{id:"create-a-new-feature-from-jira"},"Create a new feature from Jira"),(0,i.kt)("p",null,"In the 'releases' section of your jira ticket, click '+ Add feature flag' > 'Create feature flag'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(7672).Z,width:"752",height:"1260"})),(0,i.kt)("p",null,"Select the project in which to create the feature, give the feature a name and a key. The jira key will be pre-populated in the 'Jira' field."),(0,i.kt)("p",null,"Click 'Create feature'"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(9110).Z,width:"1056",height:"954"})),(0,i.kt)("p",null,"Linked Jira tickets are displayed just below the feature title. You can now view and link back to related jira tickets from your featureflow feature."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(754).Z,width:"260",height:"108"})),(0,i.kt)("h2",{id:"link-an-existing-feature-from-jira"},"Link an existing feature from Jira"),(0,i.kt)("p",null,"In the 'releases' section of your jira ticket, click '+ Add feature flag' > 'Connect feature flag'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(7557).Z,width:"762",height:"1248"})),(0,i.kt)("p",null,"Choose the desired project and search for an existing feature flag."),(0,i.kt)("p",null,"Click 'Link feature'"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(8982).Z,width:"1224",height:"666"})),(0,i.kt)("p",null,"When a feature is linked to your jira ticket, you will see the jira key in the feature detail view."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(571).Z,width:"552",height:"266"})),(0,i.kt)("h2",{id:"link-an-existing-jira-ticket-from-featureflow"},"Link an existing Jira ticket from Featureflow"),(0,i.kt)("p",null,"When you have Jira integration enabled you will have a 'Jira Issues' field visible in the edit view.\nThe Jira issue must exist before you link from featureflow."),(0,i.kt)("p",null,"Enter a list of Jira Issue keys to associate them with your feature."),(0,i.kt)("p",null,"Removing issue keys will remove the association."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(6470).Z,width:"884",height:"488"})),(0,i.kt)("h2",{id:"view-your-features-in-jira"},"View your features in Jira"),(0,i.kt)("p",null,"Jira shows a view of all associated feature flags under the 'RELEASES' section in the right hand column.\nThe summary status is either the status of your current production environment flag or the first environment if none are marked as production."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(8133).Z,width:"338",height:"98"})),(0,i.kt)("p",null,"Clicking the link will show a summary of all related flags in each environment"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(6630).Z,width:"955",height:"655"})),(0,i.kt)("p",null,"Hovering over the Rollout details will display a textual representation of the rollout rules"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(8594).Z,width:"950",height:"346"})),(0,i.kt)("h2",{id:"remove-the-integration"},"Remove the integration"),(0,i.kt)("p",null,"To remove the integration, in featureflow, navigate to 'Admin > Integrations' and click the trash can icon next to the integration. All links will be removed and the integration will be de-linked.\nYou may then wish to delete the integration plugin in jira, or re-connect at any time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Integration",src:A(1381).Z,width:"1176",height:"144"})))}c.isMDXComponent=!0},1269:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-1-4a1812795b22dba34366b6a66942d6f9.png"},8133:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6630:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-11-91bdd0a902316d4217a88a0c16929ba3.png"},8594:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-12-4696bc9b8c299acf063585b7e9e3a0e2.png"},1381:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-13-f6027bd751c457acf799cbac7088ee77.png"},7464:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-2-9a47e068dec5530533822c99aab2c9a4.png"},315:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-3-3e019b63c1ef5022db20abb5f5fab9a8.png"},7672:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-4-c93f36c43fb4c0bf6d8aee5e91b6b280.png"},9110:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-5-94cf8b6e798cfd5adff44065acef6591.png"},754:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8982:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-7-8b9ce09f93d7cc65acfc8447a7b77565.png"},7557:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-71-d45f7c187760cc20b32cc4808794bf22.png"},571:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-8-14a2bdac626ea6d5f892e3afbb0da189.png"},6470:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/integrations-jira-9-022ffc709bac59a8918b492bcc21a109.png"}}]);