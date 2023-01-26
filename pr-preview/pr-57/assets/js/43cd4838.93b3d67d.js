"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Core Concepts",description:"Getting started with Rollkit, a modular development kit for building rollup chains."},r="Core Concepts",l={unversionedId:"core-concepts",id:"core-concepts",title:"Core Concepts",description:"Getting started with Rollkit, a modular development kit for building rollup chains.",source:"@site/docs/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/pr-preview/pr-57/docs/core-concepts",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/core-concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Core Concepts",description:"Getting started with Rollkit, a modular development kit for building rollup chains."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-57/docs/intro"},next:{title:"Rollkit Stack",permalink:"/pr-preview/pr-57/docs/rollkit-stack"}},s={},c=[{value:"Rollups",id:"rollups",level:2},{value:"Rollups are Modular",id:"rollups-are-modular",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Shared Security",id:"shared-security",level:2},{value:"Fraud Proofs",id:"fraud-proofs",level:2},{value:"Leader Selection",id:"leader-selection",level:2},{value:"Why you would use a sequencer",id:"why-you-would-use-a-sequencer",level:3},{value:"Main types of Rollups",id:"main-types-of-rollups",level:2},{value:"zk-Rollups",id:"zk-rollups",level:3},{value:"Optimistic Rollups",id:"optimistic-rollups",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,a.kt)("p",null,"This section will cover the core concepts and basics of Rollkit so you can\nbuild rollups using an SDK."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit's core concepts, you may want to skip to the\n",(0,a.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,a.kt)("h2",{id:"rollups"},"Rollups"),(0,a.kt)("p",null,"A rollup is a blockchain that uses another chain as its consensus and data\navailability (DA) layer, but does execution off-chain to the consensus and\nDA chain. The rollup inherits security from the consensus and DA layer, by\nmaking transactions available for fraud proofs and optimistic rollups, or\nmaking state accessible for zero knowledge (ZK) rollups. Rollups are able\nto implement unique execution environments without needing a new Layer 1\nblockchain, such as Fuelmint, CosmWasm, and Ethermint. Scalability for\nrollups is enabled by outsourcing computation off-chain to the L1, and\navoiding the rollups need to share computational resources to other\napplications or rollups."),(0,a.kt)("p",null,"The downside to using traditional, monolithic rollups is that there are\nexisting ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-57/docs/intro#developer-pain-points"},"developer pain points"),"\nthat we covered in the introduction."),(0,a.kt)("p",null,"If you want to learn more, we recommend Vitalik Buterin's\n",(0,a.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/01/05/rollup.html"},"An Incomplete Guide to Rollups"),"\nread this ",(0,a.kt)("a",{parentName:"p",href:"https://members.delphidigital.io/reports/the-complete-guide-to-rollups"},"The Complete Guide to Rollups"),"\nby Jon Charbonneau from Delphi Digital."),(0,a.kt)("h2",{id:"rollups-are-modular"},"Rollups are Modular"),(0,a.kt)("p",null,"A rollup allows you to scale your blockchain without sacrificing security or\ndecentralization. By using a layer of off-chain data availability andconsensus,\na rollup can help to scale an L1 by making computation off-chain. However, a\nsingle rollup chain itself is not inherently more scalable than an L1 solely\nbecause it is a rollup, given it uses the same type of execution environment.\nA rollup may have lower transaction fees not because it is more scalable than\na traditional blockchain, but because it doesn\u2019t share computational\nresources with other applications. You can scale blockchains in general by\nhaving multiple rollups (similar to execution sharding), similar to how the\nCosmos SDK\u2019s scalability story is predicated around having many chains - but\na single rollup isn\u2019t necessarily more scalable than a single chain."),(0,a.kt)("p",null,"Using Rollkit, anyone can ",(0,a.kt)("strong",{parentName:"p"},"easily deploy a rollup chain with minimal overhead"),"."),(0,a.kt)("p",null,"Developers can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy easily",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Developers can easily deploy a new blockchain without needing to bootstrap\na secure and decentralized validator set. In addition, Rollkit does not have\nthe overhead associated with a heavy BFT consensus mechanism."))),(0,a.kt)("li",{parentName:"ul"},"Be sovereign",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rollkit enables developers to build rollups with sovereignty in mind. A\nsovereign rollup can fork just like an L1, giving its community a mechanism\nfor social coordination."))),(0,a.kt)("li",{parentName:"ul"},"Scale effortlessly",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Developers don\u2019t need to sacrifice on security to achieve scale. Rollkit\nenables developers to build rollups using a data availability layer that\nscales with adoption while staying decentralized and secure."))),(0,a.kt)("li",{parentName:"ul"},"Use a credibly neutral public good",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rollkit supports multiple DA layers, not just Celestia, as Rollkit is a\npublic good.")))),(0,a.kt)("h2",{id:"consensus"},"Consensus"),(0,a.kt)("p",null,"In Celestia (and other modular consensus layers), validators don't need to\nagree on the validity of rollup blocks. In order case, consensus is reaching\nagreement on what data (i.e. transactions) is included in the blocks and\ntheir ordering."),(0,a.kt)("p",null,"Consensus algorithms are designed to ensure that the network remains secure\nand that transactions are processed in a fair and transparent manner. Some\nexamples of consensus algorithms include BFT or Nakamoto consensus."),(0,a.kt)("h2",{id:"shared-security"},"Shared Security"),(0,a.kt)("p",null,"Shared security is security that a blockchain inherits from an external source.\nThis security can come in the forms such as preventing invalid state\ntransitions or re-org attacks. Since security of the external blockchain can\nbe shared, multiple blockchains can derive benefits from harnessing its\nsecurity."),(0,a.kt)("p",null,"For example, Celestia will provide shared security to blockchains that deploy\non it because they will inherit security from the consensus and data\navailability Celestia provides, which is shared among all chains that will\nutilize it."),(0,a.kt)("p",null,"Interchain security is another example of shared security where security\nisn\u2019t inherited from the blockchain itself. Rather, the Cosmos Hub validator\nset will be able to opt-in to become a validator for other zones."),(0,a.kt)("h2",{id:"fraud-proofs"},"Fraud Proofs"),(0,a.kt)("p",null,"The Rollkit chains will inherit the consensus of the consensus layer when\nit comes to ordering rollup blocks. All valid rollup blocks on the DA layer\nwill be accepted by nodes. In the case of a pessimistic rollup, you can\nrun a full node for the rollup for fraud proofs. In a zk-rollup, there will\nbe zk-proofs."),(0,a.kt)("p",null,"The rollup developer has the freedom to choose their execution layer and\nhow state is committed to."),(0,a.kt)("p",null,"Cosmos SDK fraud proofs, for example, use IAVL trees. To be able to validate\nfraud proofs, blocks of the Rollkit chain have to contain intermediate state\nroots, reflecting the state of IAVL after every transaction."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There is an MVP of Cosmos SDK fraud proofs that is a work in progress.")),(0,a.kt)("h2",{id:"leader-selection"},"Leader Selection"),(0,a.kt)("p",null,"In a PoS system, the leader is responsible for proposing new blocks and\nvalidating transactions. When a new block needs to be added to the chain,\nthe leader is selected through a voting process in which the nodes with\nthe highest stake are more likely to be chosen as the leader."),(0,a.kt)("p",null,"Once the leader has been selected, they are responsible for proposing the\nnew block and including the transactions that they wish to include in it.\nThe other nodes in the network then validate the proposed block, and if\nit is deemed valid, it is added to the chain."),(0,a.kt)("p",null,"Overall, the leader selection process in a PoS blockchain is designed to\nincentivize node operators to act in the best interests of the network,\nas they stand to gain more rewards if they are selected as the leader\nand their proposed blocks are successfully added to the chain."),(0,a.kt)("h3",{id:"why-you-would-use-a-sequencer"},"Why you would use a sequencer"),(0,a.kt)("p",null,"A blockchain is a distrbitued database that consists of a chain of blocks,\nwhere each block contains a list of transactions. The transactions in each\nblock are grouped together and sequenced, so that they can be processed\nin a specific order."),(0,a.kt)("p",null,"Rollkit inherits the consensus of the consensus and DA layer."),(0,a.kt)("p",null,"Rollups don't ",(0,a.kt)("em",{parentName:"p"},"need")," a sequencer, but they usually have one. For example,\nusers may just be able to post transactions directly to the DA, and the\nrollup executes transactions according to their order in the DA, thus using\nDA for sequencing. Rollups may want a sequencer to capture their own MEV\ninstead of leaking MEV to the DA layer's validators."),(0,a.kt)("h2",{id:"main-types-of-rollups"},"Main types of Rollups"),(0,a.kt)("h3",{id:"zk-rollups"},"zk-Rollups"),(0,a.kt)("p",null,"A zk-rollup is a type of scaling solution for blockchains that use\nzero-knowledge proofs to allow for the processing of transactions\noff-chain or on another chain."),(0,a.kt)("p",null,"In a zk-rollup, transactions are bundled together and then a zero-knowledge\nproof is generated to prove that the transactions are valid. The zk-rollup\nreveals the state differences by publishing them to the DA layer, so that\nother nodes know what the state of the chain is. zk-rollups do not need to\npost their proofs to the DA layer and consensus layer. If they are sovereign\nzk-rollups, they can just distribute the proofs p2p like Mina."),(0,a.kt)("p",null,"Zk-rollups can help improve the scalability and performance of a blockchain\nnetwork by allowing for more transactions to be processed off-chain or on\nanother chain."),(0,a.kt)("h3",{id:"optimistic-rollups"},"Optimistic Rollups"),(0,a.kt)("p",null,"An optimistic rollup is a type of scaling solution for blockchains that\nallows for the processing of transactions off-chain or on another chain,\nwhile still maintaining the security guarantees of the main chain. Optimistic\nrollups do not produce a proof that the transcations are valid. They produce\nfraud proofs when transactions are ",(0,a.kt)("em",{parentName:"p"},"not")," valid."),(0,a.kt)("p",null,"This proof is distributed in p2p, where it can be quickly\nverified without requiring the entire transaction history to be processed.\nThis allows for higher transaction throughput and lower fees, while still\ninheriting the security of the main chain."))}p.isMDXComponent=!0}}]);