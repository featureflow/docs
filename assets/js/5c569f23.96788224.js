"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),f=r,h=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Using Featureflow with AWS Lambda",sidebar_label:"AWS Lambda",slug:"/using-featureflow-with-aws-lambda"},l="Overview",i={unversionedId:"SDK_Guides/lambda",id:"SDK_Guides/lambda",title:"Using Featureflow with AWS Lambda",description:"This guide demonstrates using featureflow in an AWS Lambda serverless function.",source:"@site/docs/05-SDK_Guides/lambda.mdx",sourceDirName:"05-SDK_Guides",slug:"/using-featureflow-with-aws-lambda",permalink:"/using-featureflow-with-aws-lambda",draft:!1,tags:[],version:"current",frontMatter:{title:"Using Featureflow with AWS Lambda",sidebar_label:"AWS Lambda",slug:"/using-featureflow-with-aws-lambda"},sidebar:"docsSidebar",previous:{title:"Javascript Client",permalink:"/javascript-client"},next:{title:"ReactJS Client",permalink:"/reactjs-client"}},s={},u=[{value:"You will need:",id:"you-will-need",level:4},{value:"IAM Role for the lambda",id:"iam-role-for-the-lambda",level:2},{value:"Trigger from CloudFront",id:"trigger-from-cloudfront",level:2},{value:"First step",id:"first-step",level:3},{value:"Second step",id:"second-step",level:3},{value:"Links",id:"links",level:3}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This guide demonstrates using featureflow in an AWS Lambda serverless function."),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h4",{id:"you-will-need"},"You will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A featureflow account - If you don't have one already, Get your Featureflow account at ",(0,r.kt)("a",{parentName:"li",href:"http://www.featureflow.io"},"featureflow.io")),(0,r.kt)("li",{parentName:"ul"},"An AWS Account"),(0,r.kt)("li",{parentName:"ul"},"For this example, we will use the serverless framework as a simplified way to deploy the function to AWS"),(0,r.kt)("li",{parentName:"ul"},"The example code from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/featureflow/featureflow-lambda-edge-example"},"github"))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://serverless.com"},"serverless.com")," to install the serverless command line"),(0,r.kt)("p",null,"Clone the Github example code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/featureflow/featureflow-lambda-edge-example"},"https://github.com/featureflow/featureflow-lambda-edge-example")),(0,r.kt)("h1",{id:"create-the-lambda"},"Create the lambda"),(0,r.kt)("p",null,"Clone the example code at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/featureflow/featureflow-lambda-edge-example"},"https://github.com/featureflow/featureflow-lambda-edge-example")),(0,r.kt)("p",null,"Let's have a look at the lambda code."),(0,r.kt)("p",null,"Firstly, you ",(0,r.kt)("strong",{parentName:"p"},"must")," instantiate featureflow ",(0,r.kt)("strong",{parentName:"p"},"outside")," of the handler function."),(0,r.kt)("admonition",{title:"Instantiating the featureflow client outside of the lambda handler function",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is imperative that you Instantiate the featureflow client ",(0,r.kt)("strong",{parentName:"p"},"outside")," of the handler function! Featureflow will run as a singleton for the life of the lambda."),(0,r.kt)("p",{parentName:"admonition"},"When instantiated, featureflow will get the latest feature rules, optimally cache your features while the lambda is hot and update configuration automatically if feature flag values change."),(0,r.kt)("p",{parentName:"admonition"},"Instantiating the client inside the handler would cause performance issues and excessive requests as feature rules would get loaded for each handler invocation.")),(0,r.kt)("p",null,"So the first lines of this function are simply to require the nodejs library and to instantiate featureflow."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk-srv-env-YOUR-KEY")," with the Server SDK key from your associated featureflow environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"'use strict';\nvar Featureflow = require('featureflow-node-sdk');\n\nvar featureflow = new Featureflow.Client({apiKey: 'sdk-srv-env-YOUR-KEY'});\n\nexports.handler = async (event) => {\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy the Server SDK Key",src:a(163).Z,title:"Select the Server Environment SDK Key",width:"1295",height:"506"})),(0,r.kt)("p",null,"Next we create our handler and add the featureflow evaluation code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"exports.handler = async (event) => {\n  const request = event.Records[0].cf.request;\n  const headers = request.headers;\n  const country = headers['cloudfront-viewer-country'] ? headers['cloudfront-viewer-country'][0].value : \"US\";\n  const cohort = headers['x-cohort'] ? headers['x-cohort'][0].value : \"none\";\n  console.log(`country: ${country} cohort: ${cohort}`);\n  let user = new Featureflow.UserBuilder(\"exampleuser@featureflow.io\")\n      .withAttribute('country', country)\n      .withAttribute('cohort', cohort)\n      .withAttributes('role', ['USER_ADMIN', 'BETA_CUSTOMER'])\n      .build();\n  await featureflow.waitForReady();\n  let response;\n  const evaluated = featureflow.evaluate('lambda-redirect', user).value();\n  console.log(`Featureflow has evaluated: ${evaluated}`);\n  if (featureflow.evaluate('lambda-redirect', user).is(\"original\")){\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://featureflow.io'\n        }],\n      },\n    };\n  }else if (featureflow.evaluate('lambda-redirect', user).is(\"new\")){\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://featureflow.com'\n        }],\n      },\n    };\n  }else{\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://www.featureflow.io',\n        }],\n      },\n    };\n  }\n  return response;\n};\n")),(0,r.kt)("p",null,"We've put a bit in here so let's unpack it:"),(0,r.kt)("p",null,"Firstly, we get some context. From the incoming request we grab one Lambda injected header and one custom header, ",(0,r.kt)("inlineCode",{parentName:"p"},"country")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cohort"),"."),(0,r.kt)("p",null,"We will use these values in our feature evaluations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  const country = headers['cloudfront-viewer-country'] ? headers['cloudfront-viewer-country'][0].value : \"US\";\n  const cohort = headers['x-cohort'] ? headers['x-cohort'][0].value : \"none\";\n")),(0,r.kt)("p",null,"Then we create a featureflow user context object and set some example attributes, we have added country and cohort, plus an example of an array of roles which in a real implementations could be derived from your IAM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let user = new Featureflow.UserBuilder(\"exampleuser@featureflow.io\")\n      .withAttribute('country', country)\n      .withAttribute('cohort', cohort)\n      .withAttributes('role', ['USER_ADMIN', 'BETA_CUSTOMER'])\n      .build();\n")),(0,r.kt)("p",null,"We call the ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," function to ensure that featureflow is ready. This covers for the case of the very first lambda invocation, where the SDK may still be pulling feature configuration from featureflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"await featureflow.waitForReady();\n")),(0,r.kt)("p",null,"Then we evaluate the feature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (featureflow.evaluate('lambda-redirect', user).is(\"original\")){\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://featureflow.io'\n        }],\n      },\n    };\n  }else if (featureflow.evaluate('lambda-redirect', user).is(\"new\")){\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://featureflow.com'\n        }],\n      },\n    };\n  }else{\n    response = {\n      status: '302',\n      statusDescription: 'Found',\n      headers: {\n        location: [{\n          key: 'Location',\n          value: 'https://www.featureflow.io',\n        }],\n      },\n    };\n  }\n")),(0,r.kt)("p",null,"Here we are checking a feature flag named ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda-redirect")," - given the outcome of the evaluation we redirect the user with a 302."),(0,r.kt)("h1",{id:"deploy-the-lambda"},"Deploy the lambda"),(0,r.kt)("h2",{id:"iam-role-for-the-lambda"},"IAM Role for the lambda"),(0,r.kt)("p",null,"The lambda has a very basic IAM role set up that will be created by ",(0,r.kt)("inlineCode",{parentName:"p"},"serverless"),". The role has access to write to CloudWatch logs, and it can be assumed by ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"edgelambda")," services. For production, the logs should be more restrictive than the AWS managed ",(0,r.kt)("inlineCode",{parentName:"p"},"AWSLambdaBasicExecutionRole"),"."),(0,r.kt)("p",null,"Set up a profile that has access to create cloudformation templates, access S3 etc. Please check the relevant ",(0,r.kt)("a",{parentName:"p",href:"https://serverless.com/framework/docs/providers/aws/guide/credentials/"},"documentation of serverless"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"serverless deploy --aws-profile=my-profile-name\n")),(0,r.kt)("h1",{id:"create-the-feature-flag-in-featureflow"},"Create the feature flag in featureflow"),(0,r.kt)("p",null,"Create a feature in the featureflow console with a matching key (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda-redirect"),")"),(0,r.kt)("p",null,"Create two variants, ",(0,r.kt)("inlineCode",{parentName:"p"},"original")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," - we will use these to define the 302 redirects in the lambda"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Featureflow Variants",src:a(4352).Z,title:"Define featureflow variants",width:"2284",height:"1642"})),(0,r.kt)("p",null,"Then you can target the variants using rules based on the user attributes obtained from the header and cookie values:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Featureflow Targeting",src:a(8543).Z,title:"Define featureflow targeting rules",width:"2260",height:"1718"})),(0,r.kt)("p",null,"In the above example, we redirect if the ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," is after a certain date. Date is an attribute we get for free from the featureflow SDK and is the date that the request is made."),(0,r.kt)("p",null,"We also target the ",(0,r.kt)("inlineCode",{parentName:"p"},"country")," attribute, which we get from ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudfront-viewer-country")," header."),(0,r.kt)("h1",{id:"test-the-lambda"},"Test the lambda"),(0,r.kt)("p",null,"In the lambda view click 'test' and create an event, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Records": [\n    {\n      "cf": {\n        "config": {\n          "distributionId": "EXAMPLE"\n        },\n        "request": {\n          "uri": "/",\n          "method": "GET",\n          "clientIp": "2001:cdba::3257:9652",\n          "headers": {\n            "cloudfront-viewer-country": [\n              {\n                "key": "UK",\n                "value": "UK"\n              }\n            ],\n            "x-cohort": [\n              {\n                "key": "beta",\n                "value": "beta"\n              }\n            ],\n            "user-agent": [\n              {\n                "key": "User-Agent",\n                "value": "Test Agent"\n              }\n            ],\n            "host": [\n              {\n                "key": "Host",\n                "value": "d123.cf.net"\n              }\n            ],\n            "cookie": [\n              {\n                "key": "Cookie",\n                "value": "SomeCookie=1; AnotherOne=A; X-Experiment-Name=B"\n              }\n            ]\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Check the result and note the evaluated variant."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Featureflow Variants",src:a(1382).Z,title:"Feature invocation original result logs",width:"3116",height:"1358"})),(0,r.kt)("p",null,"Try updating the targeting rules, for example, redirect all ",(0,r.kt)("inlineCode",{parentName:"p"},"US")," requests to the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," URL:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Featureflow Targeting US beta",src:a(5080).Z,width:"2254",height:"894"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Featureflow Variants",src:a(2993).Z,title:"Feature invocation new result logs",width:"3122",height:"1358"})),(0,r.kt)("h2",{id:"trigger-from-cloudfront"},"Trigger from CloudFront"),(0,r.kt)("p",null,"On the AWS console for Lambda, find the function and click on ",(0,r.kt)("em",{parentName:"p"},"Deploy to Lambda@Edge"),"."),(0,r.kt)("p",null,"On the next screen you will need to select which distribution you are deploying to and on which event, select ",(0,r.kt)("inlineCode",{parentName:"p"},"viewer request")," event."),(0,r.kt)("p",null,"Viewer request is evaluated ",(0,r.kt)("em",{parentName:"p"},"before")," the cache is hit, otherwise the cache would continue to return with the first evaluated variant."),(0,r.kt)("h3",{id:"first-step"},"First step"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy first step",src:a(8575).Z,title:"Deploy first step",width:"744",height:"245"})),(0,r.kt)("h3",{id:"second-step"},"Second step"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy second step",src:a(2526).Z,title:"Deploy second step",width:"1644",height:"1352"})),(0,r.kt)("p",null,"After the function is deployed make a request to the cloudfront url, you should be redirected to the failover endpoint."),(0,r.kt)("p",null,"Note that the logs will be written to a region that is close to the CDN edge node that is serving you. For example even though the Lambda is in ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1")," it is now deployed throughout the distribution and if you are in France for example the logs of the edge function will be written to the Paris region."),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("p",null,"Github repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/featureflow/featureflow-lambda-edge-example"},"https://github.com/featureflow/featureflow-lambda-edge-example")),(0,r.kt)("p",null,"2-minute video guide: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VbcLbwJirGo"},"https://www.youtube.com/watch?v=VbcLbwJirGo")))}c.isMDXComponent=!0},163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/featureflow-select-sdk-key-ab8e596a4f6f9292b1ff9edaf2023dd7.png"},8575:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-deploy-1-680cfb3e497c9ab99660a4d34d83c578.png"},2526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-deploy-2-c2a063ec4913cdaec89d0db36d2ffde8.png"},4352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-feature-settings-9316b47d8c34d41a1140d2eddc53ce51.png"},5080:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-feature-targeting-us-162e160c66cf295548c00ce8d9031ced.png"},8543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-feature-targeting-2321b3ddab6b2ce18e5920e43beb2797.png"},2993:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-logs-new-29acee2e57f07a7e684c98047d06238b.png"},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lambda-logs-original-132a2772dacf7dc8fe3bcaa8b838e2b5.png"}}]);