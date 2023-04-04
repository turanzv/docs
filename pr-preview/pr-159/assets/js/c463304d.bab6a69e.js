"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Rollkit stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},l="The Rollkit stack",i={unversionedId:"rollkit-stack",id:"rollkit-stack",title:"The Rollkit stack",description:"Intro to Rollkit's stack, a modular framework for rollups.",source:"@site/docs/rollkit-stack.md",sourceDirName:".",slug:"/rollkit-stack",permalink:"/pr-preview/pr-159/docs/rollkit-stack",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/rollkit-stack.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollkit stack",description:"Intro to Rollkit's stack, a modular framework for rollups."},sidebar:"docs",previous:{title:"Introduction",permalink:"/pr-preview/pr-159/docs/intro"},next:{title:"Transaction flow",permalink:"/pr-preview/pr-159/docs/transaction-flow"}},s={},p=[{value:"Application structure",id:"application-structure",level:2},{value:"ABCI interface",id:"abci-interface",level:3},{value:"Cosmos SDK",id:"cosmos-sdk",level:4},{value:"Data availability",id:"data-availability",level:3},{value:"Celestia",id:"celestia",level:4},{value:"Node components",id:"node-components",level:2},{value:"Mempool",id:"mempool",level:3},{value:"Block manager",id:"block-manager",level:3},{value:"RPC",id:"rpc",level:3},{value:"P2P layer",id:"p2p-layer",level:3},{value:"Rollkit node types",id:"rollkit-node-types",level:2},{value:"Full node",id:"full-node",level:3},{value:"Light node (work in progress)",id:"light-node-work-in-progress",level:3},{value:"Sequencer node",id:"sequencer-node",level:3},{value:"State validity modes",id:"state-validity-modes",level:2},{value:"Pessimistic (full nodes only)",id:"pessimistic-full-nodes-only",level:3},{value:"Optimistic (fraud proofs) (work in progress)",id:"optimistic-fraud-proofs-work-in-progress",level:3},{value:"Validity (ZK proofs)",id:"validity-zk-proofs",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rollkit-stack"},"The Rollkit stack"),(0,r.kt)("p",null,"This page will cover the main components of Rollkit."),(0,r.kt)("p",null,"Rollup sequencer nodes collect transactions from users, aggregate them into blocks, and post the blocks onto a data availability (DA) layer (such as Celestia) to be ordered and finalized. Full nodes execute and verify rollup blocks, and in the case of an optimistic rollup, propagate fraud proofs when needed. Light clients will receive headers, verify proofs (fraud, zk, etc), and authenticate trust-minimized queries about the state."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit's stack, you may want to skip to the ",(0,r.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"),".")),(0,r.kt)("h2",{id:"application-structure"},"Application structure"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rollup architecture with Rollkit and ABCI.",src:a(3334).Z,width:"1538",height:"1127"})),(0,r.kt)("h3",{id:"abci-interface"},"ABCI interface"),(0,r.kt)("p",null,"Rollkit is a fully functional Application BlockChain Interface (ABCI) client software. It can be used as a Tendermint replacement for any ABCI application.\nThanks to this compatibility, you can use tools like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/app-dev/abci-cli.html"},"abci-cli")," to test and debug your rollup."),(0,r.kt)("h4",{id:"cosmos-sdk"},"Cosmos SDK"),(0,r.kt)("p",null,"Would you like to change your Cosmos SDK application to a Rollkit rollup?\nNo problem! You need to replace the Cosmos SDK Go dependency with a\nRollkit-enabled version, which can be found\nat the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/cosmos-sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"rollkit/cosmos-sdk"))," repository."),(0,r.kt)("p",null,"Note the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/cosmos-sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"rollkit/cosmos-sdk"))," repository follows the release branches of\nupstream Cosmos SDK, but with the bonus of using Rollkit instead of Tendermint\nas the ABCI client."),(0,r.kt)("p",null,"And don't forget to replace another dependency, ",(0,r.kt)("inlineCode",{parentName:"p"},"tendermint"),", with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/tendermint"},(0,r.kt)("inlineCode",{parentName:"a"},"rollkit/tendermint")),", which has an enhanced ABCI interface that includes\nthe methods needed for state fraud proofs."),(0,r.kt)("h3",{id:"data-availability"},"Data availability"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/da"},"Data availability (DA)")," can be accessed using generic ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/main/da/da.go"},"interfaces"),". This design allows for seamless integration with any DA layer. New implementations can be plugged in programmatically, without a need to fork Rollkit."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataAvailabilityLayerClient")," interface includes essential lifecycle methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop"),") as well as data availability methods (",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitBlock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBlockAvailability"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockRetriever")," interface serves to enable syncing of full nodes from the data availability layer.\nIt's important to keep in mind that there is no direct correlation between the DA layer block height and the rollup height. Each DA layer block may contain an arbitrary number of rollup blocks."),(0,r.kt)("h4",{id:"celestia"},"Celestia"),(0,r.kt)("p",null,"Celestia is an example of a data availability integration implemented for Rollkit.\nIt's using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-gateway-docs/"},"Celestia Node Gateway API"),"\nvia the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/go-cnc"},(0,r.kt)("inlineCode",{parentName:"a"},"celestiaorg/go-cnc"))," package.\nTo deploy a Rollkit rollup on Celestia you also have to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial/"},"run a Celestia light node"),"."),(0,r.kt)("h2",{id:"node-components"},"Node components"),(0,r.kt)("h3",{id:"mempool"},"Mempool"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/mempool"},"mempool")," is inspired by the Tendermint mempool. By default, transactions are handled in a First Come, First Served (FCFS) manner. Ordering of transactions can be implemented on the application level; currently this is possible by returning a priority on ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckTx"),", and once we support ABCI++ it is also possible via ",(0,r.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/building-apps/app-mempool"},"application mempool"),"."),(0,r.kt)("h3",{id:"block-manager"},"Block manager"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/block"},"block manager")," contains Go routines ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLoop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RetrieveLoop"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop")," that communicate through Go channels. These Go routines are ran when a Rollkit node starts up (",(0,r.kt)("inlineCode",{parentName:"p"},"OnStart"),"). Only the sequencer nodes run ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLoop")," which controls the frequency of block production for a rollup with a timer as per the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockTime")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager"),"."),(0,r.kt)("p",null,"All nodes run ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop")," which looks for the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive block headers"),": block headers are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"HeaderInCh")," and Rollkit nodes attempt to verify the block with the corresponding block data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive block data"),": block bodies are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"blockInCh")," and Rollkit nodes attempt to verify the block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive state fraud proofs"),": state fraud proofs are received through a channel ",(0,r.kt)("inlineCode",{parentName:"li"},"FraudProofInCh")," and Rollkit nodes attempt to verify them. Note that we plan to make this configurable for full nodes since full nodes also produce state fraud proofs on their own."),(0,r.kt)("li",{parentName:"ul"},"Signal ",(0,r.kt)("inlineCode",{parentName:"li"},"RetrieveLoop")," with timer as per the ",(0,r.kt)("inlineCode",{parentName:"li"},"DABlockTime")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockManager"),".")),(0,r.kt)("p",null,"All nodes also run ",(0,r.kt)("inlineCode",{parentName:"p"},"RetrieveLoop")," which is responsible for interacting with the data availability layer. It checks the last updated ",(0,r.kt)("inlineCode",{parentName:"p"},"DAHeight")," to retrieve a block with timer ",(0,r.kt)("inlineCode",{parentName:"p"},"DABlockTime")," signaled by ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncLoop"),". Note that the start height of the DA layer for the rollup, ",(0,r.kt)("inlineCode",{parentName:"p"},"DAStartHeight"),", is configurable in ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager"),"."),(0,r.kt)("h3",{id:"rpc"},"RPC"),(0,r.kt)("p",null,"Rollkit's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/rpc"},"RPC")," fully implements the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/rpc"},"Tendermint RPC")," interfaces and APIs for querying:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Information about the rollup node"),": information such as node's health, status, and network info."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The rollup blockchain"),": getting information about the rollup blockchain such as blocks and block headers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The rollup transactions"),": getting transaction information and broadcasting raw transactions, with search capabilities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ABCI"),": rollup application information.")),(0,r.kt)("p",null,"The following RPC protocols are currently supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URI over HTTP"),(0,r.kt)("li",{parentName:"ul"},"JSON-RPC over HTTP"),(0,r.kt)("li",{parentName:"ul"},"JSON-RPC over WebSockets")),(0,r.kt)("h3",{id:"p2p-layer"},"P2P layer"),(0,r.kt)("p",null,"Rollkit's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/p2p"},"P2P layer")," enables\ndirect communication between rollup nodes.\nIt's used to gossip transactions, headers of newly created blocks, and state fraud proofs.\nThe P2P layer is implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p"},"libp2p"),"."),(0,r.kt)("p",null,"Rollkit uses ",(0,r.kt)("a",{parentName:"p",href:"https://curriculum.pl-launchpad.io/curriculum/libp2p/dht/"},"DHT-based active peer discovery"),".\nStarting a node connects to pre-configured bootstrap peers, and advertises its namespace ID in the DHT.\nThis solution is flexible, because multiple rollup networks may reuse the same DHT/bootstrap nodes,\nbut specific rollup network might decide to use dedicated nodes as well."),(0,r.kt)("h2",{id:"rollkit-node-types"},"Rollkit node types"),(0,r.kt)("p",null,"Rollkit nodes are implemented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/node"},(0,r.kt)("inlineCode",{parentName:"a"},"node"))," package."),(0,r.kt)("h3",{id:"full-node"},"Full node"),(0,r.kt)("p",null,"Full nodes verify all blocks, and produce fraud proofs for optimistic rollups. Since they fully verify all rollup blocks, they don't rely on fraud or validity proofs for security."),(0,r.kt)("h3",{id:"light-node-work-in-progress"},"Light node (work in progress)"),(0,r.kt)("p",null,"Light nodes are light-weight rollup nodes that authenticate block headers, and can be secured by fraud proofs or validity proofs. They're recommended for average users on low-resource devices. Users running light nodes can make trust-minimized queries about the rollup's state. Currently, Rollkit light nodes are still under development."),(0,r.kt)("h3",{id:"sequencer-node"},"Sequencer node"),(0,r.kt)("p",null,"Rollups can utilize sequencer nodes. Sequencers are block producers for rollups, responsible for aggregating transactions into blocks, and typically executing transactions to produce a state root, used by the rollup's light clients."),(0,r.kt)("p",null,"Rollkit plans to support multiple different pluggable sequencer schemes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deploy in one-click"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Faster soft-confirmations than L1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Control over rollup's transaction ordering"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Atomic composability with other rollups"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Censorship resistance"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Implementation Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Centralized sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requires spinning up a sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Eventual \u23f3*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 Implemented!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Decentralized sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requires spinning up a sequencer set"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Shared decentralized sequencer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Real-time \u26a1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pure fork-choice rule"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes \u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maybe \ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Eventual \u23f3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Planned")))),(0,r.kt)("p",null,'"Pure fork-choice rule" refers to any rollup without privileged sequencers, e.g. nodes defer to the data availability layer for ordering and apply a "first-come-first-serve" fork-choice rule.'),(0,r.kt)("p",null,"*"," implementation of this property is in progress."),(0,r.kt)("h2",{id:"state-validity-modes"},"State validity modes"),(0,r.kt)("h3",{id:"pessimistic-full-nodes-only"},"Pessimistic (full nodes only)"),(0,r.kt)("p",null,"A pessimistic rollup is a rollup that only supports full nodes that replay all the transactions in the rollup in order to check its validity. Rollkit supports pessimistic rollups by default."),(0,r.kt)("p",null,"Pessimistic rollups are similar to how Tether uses Bitcoin as a data availability layer via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OmniLayer/spec/blob/master/OmniSpecification-v0.6.adoc#summary"},"OmniLayer"),"."),(0,r.kt)("h3",{id:"optimistic-fraud-proofs-work-in-progress"},"Optimistic (fraud proofs) (work in progress)"),(0,r.kt)("p",null,"Rollkit's current design consists of a single sequencer that posts blocks to the DA layer, and multiple (optional) full nodes. Sequencers gossip block headers to full nodes and full nodes fetch posted blocks from the DA layer. Full nodes then execute transactions in these blocks to update their state, and gossip block headers over the P2P network to Rollkit light nodes."),(0,r.kt)("p",null,"Once state fraud proofs are enabled, when a block contains a fraudulent state transition, Rollkit full nodes can detect it by comparing intermediate state roots (ISRs) between transactions, and generate a state fraud proof that can be gossiped over the P2P network to Rollkit light nodes. These Rollkit light nodes can then use this state fraud proof to verify whether a fraudulent state transition occurred or not by themselves."),(0,r.kt)("p",null,"Overall, state fraud proofs will enable trust-minimization between full nodes and light nodes as long as there is at least one honest full node in the system that will generate state fraud proofs."),(0,r.kt)("p",null,"Note that Rollkit state fraud proofs are still a work in progress and will require new methods on top of ABCI, specifically, ",(0,r.kt)("inlineCode",{parentName:"p"},"GenerateFraudProof"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyFraudProof"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAppHash"),"."),(0,r.kt)("p",null,"You can find current detailed design and the remaining work needed to push state fraud proofs towards completion in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/manav/state_fraud_proofs_adr/docs/lazy-adr/adr-009-state-fraud-proofs.md"},"Architecture Decision Record (ADR)"),"."),(0,r.kt)("h3",{id:"validity-zk-proofs"},"Validity (ZK proofs)"),(0,r.kt)("p",null,"Validity (ZK) rollups are planned, but not currently supported by Rollkit."))}d.isMDXComponent=!0},3334:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rollkit-abci-75320e3e62c47f3eeebc5b90dd5d01d0.png"}}]);