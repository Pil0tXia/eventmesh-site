"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9941],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},c="How to run eventmesh-sdk-java demo",l={unversionedId:"instructions/eventmesh-sdk-java-quickstart",id:"instructions/eventmesh-sdk-java-quickstart",title:"How to run eventmesh-sdk-java demo",description:"Maven Central",source:"@site/docs/instructions/eventmesh-sdk-java-quickstart.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-sdk-java-quickstart",permalink:"/docs/instructions/eventmesh-sdk-java-quickstart",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-sdk-java-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-runtime Quick start Instruction",permalink:"/docs/instructions/eventmesh-runtime-quickstart"},next:{title:"Eventmesh-store Quick start Instruction",permalink:"/docs/instructions/eventmesh-store-quickstart"}},u={},p=[{value:"1. TCP DEMO",id:"1-tcp-demo",level:3},{value:"Async msg",id:"async-msg",level:4},{value:"Broadcast msg",id:"broadcast-msg",level:4},{value:"2. HTTP DEMO",id:"2-http-demo",level:3},{value:"Async event",id:"async-event",level:4},{value:"3. GRPC DEMO",id:"3-grpc-demo",level:3},{value:"Async event publisher and webhook subscriber",id:"async-event-publisher-and-webhook-subscriber",level:4},{value:"Sync event publisher and stream subscriber",id:"sync-event-publisher-and-stream-subscriber",level:4},{value:"Batch async event publisher",id:"batch-async-event-publisher",level:4}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-run-eventmesh-sdk-java-demo"},"How to run eventmesh-sdk-java demo"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,s.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg",alt:"Maven Central"}))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java, as the client, communicated with eventmesh-runtime, used to complete the sending and receiving of message."),(0,s.kt)("p",{parentName:"blockquote"},"Supports async msg and broadcast msg. Async msg means the producer just sends msg and does not care reply msg. Broadcast msg means the producer send msg once and all the consumer subscribed the broadcast topic will receive the msg."),(0,s.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java supports the protocol of TCP, HTTP and GRPC.")),(0,s.kt)("p",null,"TCP, HTTP and GRPC demos are both under the ",(0,s.kt)("strong",{parentName:"p"},"eventmesh-example")," module."),(0,s.kt)("h3",{id:"1-tcp-demo"},"1. TCP DEMO"),(0,s.kt)("h4",{id:"async-msg"},"Async msg"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create topic TEST-TOPIC-TCP-ASYNC on rocketmq-console")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Start consumer, subscribe topic in previous step."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start producer, send message")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish\n")),(0,s.kt)("h4",{id:"broadcast-msg"},"Broadcast msg"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create topic TEST-TOPIC-TCP-BROADCAST on rocketmq-console")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Start consumer, subscribe topic in previous step."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start producer, send broadcast message")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast\n")),(0,s.kt)("h3",{id:"2-http-demo"},"2. HTTP DEMO"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As to HTTP, eventmesh-sdk-java implements  the pub and sub for async event ."),(0,s.kt)("p",{parentName:"blockquote"},"In the demo, the field of ",(0,s.kt)("inlineCode",{parentName:"p"},"content")," of the java class ",(0,s.kt)("inlineCode",{parentName:"p"},"LiteMessage")," represents a special protocal, so if you want to use http-client of eventmesh-sdk-java, you just need to design the content of protocol and supply the consumer application at the same time.")),(0,s.kt)("h4",{id:"async-event"},"Async event"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"producer send the event to consumer and don't need waiting response msg from consumer")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create topic TEST-TOPIC-HTTP-ASYNC on rocketmq-console")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Start consumer, subscribe topic"),(0,s.kt)("p",{parentName:"li"},"Async consumer demo is a spring boot application demo, you can easily run this demo to start service and subscribe the\ntopic."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start producer, produce msg")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,s.kt)("h3",{id:"3-grpc-demo"},"3. GRPC DEMO"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java implements the gRPC transport protocol. It can send events to eventmesh-runtime asynchronously\nand synchronously (using request-reply). It can also subscribe to the events using webhook subscriber and stream subscriber.\nCNCF CloudEvents protocol is also supported in the demo.")),(0,s.kt)("h4",{id:"async-event-publisher-and-webhook-subscriber"},"Async event publisher and webhook subscriber"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"producer asynchronously send the event to eventmesh-runtime, and don't need to wait for the event is delivered to the ",(0,s.kt)("inlineCode",{parentName:"p"},"event-store")," of the eventmesh runtime\nIn webhook subscriber, event is delivered to the http endpoint url that is specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Subscription")," model. This is similar to the Http eventmesh client.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create topic TEST-TOPIC-GRPC-ASYNC on rocketmq-console"),(0,s.kt)("li",{parentName:"ul"},"start publisher to publish to the topic as the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start webhook subscriber as the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication\n")),(0,s.kt)("h4",{id:"sync-event-publisher-and-stream-subscriber"},"Sync event publisher and stream subscriber"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"producer synchronously send the event to eventmesh-runtime, and wait for the event is delivered to the ",(0,s.kt)("inlineCode",{parentName:"p"},"event-store")," of the eventmesh runtime\nIn stream subscriber, event is delivered to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," client as serials of event streams. This is similar to the TCP eventmesh client.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create topic TEST-TOPIC-GRPC-RR on rocketmq-console"),(0,s.kt)("li",{parentName:"ul"},"start Request-Reply publisher to publish to the topic as the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start stream subscriber as the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe\n")),(0,s.kt)("h4",{id:"batch-async-event-publisher"},"Batch async event publisher"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Batch event publisher can publish several events in a batch to the eventmesh-runtime. This is synchronous operation.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create topic TEST-TOPIC-GRPC-ASYNC on rocketmq-console"),(0,s.kt)("li",{parentName:"ul"},"start publisher to publish to the topic as the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance\n")))}h.isMDXComponent=!0}}]);