"use strict";(self.webpackChunkfeatureflow_docs=self.webpackChunkfeatureflow_docs||[]).push([[577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(i,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[f]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Featureflow Angular Client",sidebar_label:"Featureflow Angular Client",slug:"/angular-2"},o=void 0,u={unversionedId:"SDKs/angular",id:"SDKs/angular",title:"Featureflow Angular Client",description:"Github//github.com/featureflow/featureflow-angular",source:"@site/docs/05-SDKs/angular.mdx",sourceDirName:"05-SDKs",slug:"/angular-2",permalink:"/docs/angular-2",draft:!1,tags:[],version:"current",frontMatter:{title:"Featureflow Angular Client",sidebar_label:"Featureflow Angular Client",slug:"/angular-2"},sidebar:"docsSidebar",previous:{title:"Slack Integration",permalink:"/docs/Integrations/slack"},next:{title:"Featureflow Angular 1 Client",permalink:"/docs/angular-1"}},i={},p=[{value:"Installation",id:"installation",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Local Example",id:"local-example",level:2},{value:"Developing",id:"developing",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Running unit tests",id:"running-unit-tests",level:2}],s={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodei.co/npm/featureflow-angular"},(0,a.kt)("img",{parentName:"a",src:"https://nodei.co/npm/featureflow-angular.png",alt:null}))),(0,a.kt)("p",null,"Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/featureflow/featureflow-angular"},"https://github.com/featureflow/featureflow-angular")),(0,a.kt)("p",null,"Get your Featureflow account at ",(0,a.kt)("a",{parentName:"p",href:"http://www.featureflow.io"},"featureflow.io")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Using NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save featureflow-angular\n")),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"add  ",(0,a.kt)("inlineCode",{parentName:"li"},"FeatureflowAngularModule")," to app ",(0,a.kt)("inlineCode",{parentName:"li"},"NgModule"),".",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { FeatureflowAngularModule } from 'featureflow-angular';\n//...\n@NgModule({\n  declarations: [\n   //...\n  ],\n  imports: [\n    BrowserModule,\n    FeatureflowAngularModule // FeatureflowAngularModule added\n  ],\nproviders: [],\n})\nclass MainModule {}\n")),"Use")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { FeatureflowAngularService } from 'featureflow-angular';\n\n@Component({\n    //...\n    template: `\n    <div *ngIf=\"featureflowService.evaluate('my-feature-key').isOn()\">\n        <h2>I will be seen when the feature is on</h2>\n        <p>And this is some extra text</p>\n    </div>\n    <div *ngFor=\"let item of features | keyvalue\">\n          {{item.key}}:{{item.value}}\n    </div>`\n})\nexport class YourComponent {\n  features: any;\n  featureflow: any;\n\n  constructor(\n    private featureflowService: FeatureflowAngularService\n  ) {\n        featureflowService.init(API_KEY, {id: '1'}, null);\n        this.features = featureflowService.getFeatures();\n        this.featureflow = featureflowService.client();\n  }\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That's it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to update your component when the evaluated feature changes in realtime,\nus featureChanged$ subscription from ",(0,a.kt)("inlineCode",{parentName:"p"},"featureflowService")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\n\n@Component({\n    //...\n    changeDetection: ChangeDetectionStrategy.OnPush // to make your app perform smooth and faster\n})\nexport class YourComponent {\n  features: any;\n  featureflow: any;\n  updateFeatures: Subscription = null;\n\n  constructor(\n    //...\n    private ref: ChangeDetectorRef\n  ) {\n        // listen for the real time streaming changes\n        this.updateFeatures = this.featureflowService.featureChanged$.subscribe(features => {\n              this.features = featureflowService.getFeatures(); // update features after feature change\n              this.ref.detectChanges(); // change detection in features is manually run\n        });\n  }\n\n  ngOnDestroy() {\n    // unsubscribe to ensure no memory leaks\n    this.updateFeatures.unsubscribe();\n  }\n}\n   ```\n")))),(0,a.kt)("h2",{id:"live-example"},"Live Example"),(0,a.kt)("p",null,"There is a simple running example based on the angular starter on stackblitz: ",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/simple-featureflow-angular-example"},"https://stackblitz.com/edit/simple-featureflow-angular-example")),(0,a.kt)("p",null,"Replace the key in app.component.ts with your own Environment SDK Key."),(0,a.kt)("h2",{id:"local-example"},"Local Example"),(0,a.kt)("p",null,"Update the SDK key in featureflow-angular-examaple/src/app/app.component.ts to match your JS Client Environment SDK Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    featureflowService.init('js-env-YOUR-KEY-HERE', {id: 'uniqueId1'}, null);\n")),(0,a.kt)("p",null,"Start the example project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd projects/featureflow-angular-example\nng serve\n")),(0,a.kt)("p",null,"Try toggling features in the featureflow dashboard for your project and environment."),(0,a.kt)("h2",{id:"developing"},"Developing"),(0,a.kt)("p",null,"This project consists of 2 modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/projects/featureflow-angular - the angular service library"),(0,a.kt)("li",{parentName:"ul"},"/projects/featureflow-angular-example - the example implementation")),(0,a.kt)("p",null,"to build the library, from the root directory run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ng build featureflow-angular\n")),(0,a.kt)("p",null,"then run the example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd projects/featureflow-angular-example\nng serve\n")),(0,a.kt)("h2",{id:"publishing"},"Publishing"),(0,a.kt)("p",null,"After building your library with ",(0,a.kt)("inlineCode",{parentName:"p"},"ng build featureflow-angular"),", go to the dist folder ",(0,a.kt)("inlineCode",{parentName:"p"},"cd dist/featureflow-angular")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm publish"),"."),(0,a.kt)("h2",{id:"running-unit-tests"},"Running unit tests"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"ng test featureflow-angular")," to execute the unit tests via ",(0,a.kt)("a",{parentName:"p",href:"https://karma-runner.github.io"},"Karma"),"."))}f.isMDXComponent=!0}}]);