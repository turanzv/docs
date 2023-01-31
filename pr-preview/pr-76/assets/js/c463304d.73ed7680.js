"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||a;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},o="The Rollkit Stack",i={unversionedId:"rollkit-stack",id:"rollkit-stack",title:"The Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups.",source:"@site/docs/rollkit-stack.md",sourceDirName:".",slug:"/rollkit-stack",permalink:"/pr-preview/pr-76/docs/rollkit-stack",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/rollkit-stack.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rollkit Stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-76/docs/intro"},next:{title:"Tutorials",permalink:"/pr-preview/pr-76/docs/category/tutorials"}},s={},p=[{value:"Rollup Application Dependencies",id:"rollup-application-dependencies",level:2},{value:"Mempool",id:"mempool",level:2},{value:"State Fraud Proofs",id:"state-fraud-proofs",level:2},{value:"P2P-Layer",id:"p2p-layer",level:2},{value:"DA-Access",id:"da-access",level:2},{value:"Rollkit Node Types",id:"rollkit-node-types",level:2},{value:"Sequencer node",id:"sequencer-node",level:3},{value:"Full node",id:"full-node",level:3},{value:"Light node",id:"light-node",level:3},{value:"Block-Manager",id:"block-manager",level:2},{value:"RPC Layer",id:"rpc-layer",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rollkit-stack"},"The Rollkit Stack"),(0,r.kt)("p",null,"This section will cover the dependencies and customizeable components of Rollkit."),(0,r.kt)("p",null,"Roll-up sequencer nodes collect transactions from users, aggregate them into blocks, and post the blocks onto Celestia (or other DA layer) to be ordered and finalized. Full nodes execute and verify roll-up blocks, and propagate fraud-proofs when needed. Light clients receive headers, verify fraud proofs, and can authenticate trust-minimized queries about the state."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit's stack, you may want to skip to the ",(0,r.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,r.kt)("p",null,"For an understanding of the Rollkit stack, let's first look at the key components of a rollup. A typical rollup has:"),(0,r.kt)("h2",{id:"rollup-application-dependencies"},"Rollup Application Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires Golang version 1.19+")),(0,r.kt)("h2",{id:"mempool"},"Mempool"),(0,r.kt)("p",null,"The mempool keeps the set of pending transactions, and is used by block\nproducers (full nodes) to produce blocks. Transactions are handled by\nnodes in the First-Come, First-Served (FCFS) manner. Ordering of transactions\ncan be implemented on the application level (for example by adding\nnonce/sequence number). This behaviour is similar to the Tendermint mempool."),(0,r.kt)("h2",{id:"state-fraud-proofs"},"State Fraud Proofs"),(0,r.kt)("h2",{id:"p2p-layer"},"P2P-Layer"),(0,r.kt)("h2",{id:"da-access"},"DA-Access"),(0,r.kt)("p",null,"Data Availability (DA) can be accessed using generic [interfaces[(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/main/da/da.go"},"https://github.com/rollkit/rollkit/blob/main/da/da.go"),"). This design allows for seamless integration with any DA."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataAvailabilityLayerClient")," interface includes essential life-cycle methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop"),") as well as data-availability methods (",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitBlock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBlockAvailability"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockRetriever")," interface serves to enable syncing of full nodes from the Data Availability layer.\nIt's important to keep in mind that there is no direct correlation between the DA block height and the rollup height. Each DA block may contain an arbitrary number of rollup blocks."),(0,r.kt)("h2",{id:"rollkit-node-types"},"Rollkit Node Types"),(0,r.kt)("h3",{id:"sequencer-node"},"Sequencer node"),(0,r.kt)("p",null,"Some roll-ups utilize ",(0,r.kt)("em",{parentName:"p"},"sequencer nodes"),". Sequencers are the main block producers for rollups, respoonsible for aggregating transactions into blocks, and typically executing transactions to produce a state root, securing the rollup's light clients."),(0,r.kt)("p",null,"Rollkit plans to support multiple different pluggable sequencer schemes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Deploy in one-click"),(0,r.kt)("th",{parentName:"tr",align:null},"Faster soft-confirmations than L1"),(0,r.kt)("th",{parentName:"tr",align:null},"Control over rollup's transaction ordering"),(0,r.kt)("th",{parentName:"tr",align:null},"Atomic Composability with other Rollups"),(0,r.kt)("th",{parentName:"tr",align:null},"Censorship resistance"),(0,r.kt)("th",{parentName:"tr",align:null},"Implementation Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires spinning up a sequencer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Eventual \u23f3"),(0,r.kt)("td",{parentName:"tr",align:null},"Implemented! \u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decentralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires spinning up a sequencer set"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon \ud83d\udfe2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shared Decentralized Sequencer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon \ud83d\udfe2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pure Fork-Choice Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"Eventual \u23f3"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon \ud83d\udfe2")))),(0,r.kt)("h3",{id:"full-node"},"Full node"),(0,r.kt)("p",null,"Full nodes verify all blocks and can produce fraud proofs for optimistic rollups. Since they fully validate all rollup blocks, they don't rely on fraud or validity proofs for security."),(0,r.kt)("h3",{id:"light-node"},"Light node"),(0,r.kt)("p",null,"Light nodes are light-weight rollup nodes that authenticate block headers, and are secured by fraud proofs or validity proofs. They're recommended for average users on low-resource devices. Users running light nodes can make trust-minimized queries about the rollup's state."),(0,r.kt)("h2",{id:"block-manager"},"Block-Manager"),(0,r.kt)("h2",{id:"rpc-layer"},"RPC Layer"),(0,r.kt)("p",null,"This layer is for exploring the rollup chain and submitting transactions."))}c.isMDXComponent=!0}}]);