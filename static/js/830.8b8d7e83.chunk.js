(self.webpackChunkgithub_pages_test=self.webpackChunkgithub_pages_test||[]).push([[830],{90967:(e,t,s)=>{"use strict";s.d(t,{j:()=>l});const l=[{label:"BTC - Bitcoin",value:"BTC"},{label:"ETH - Ethereum",value:"ETH"},{label:"APTOS - Aptos",value:"APTOS"},{label:"EOS - EOS",value:"EOS"},{label:"WAX - EOS",value:"WAX"},{label:"SOL - Solana",value:"SOL"},{label:"STX - Stacks",value:"STX"},{label:"STARK - Starknet",value:"STARK"},{label:"TRX - Tron",value:"TRX"},{label:"ZKSPACE - Zkspace",value:"ZKSPACE"},{label:"ZKSYNC - Zkspace",value:"ZKSYNC"}]},41435:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var l=s(72791),a=s(77257),i=s(57621),r=s(39504),n=s(20890),o=s(47924),c=s(72363),h=s(94294),d=s(94215),u=s(97474),x=s(94070),S=s(47317),W=s(41004),b=s(90967),p=s(8622),v=s(80184);const w=(0,a.Pi)((()=>{const[e,t]=(0,l.useState)(),[s,a]=(0,l.useState)(),[w,Z]=(0,l.useState)([]),{walletStore:j}=(0,p.oR)(),k=j.isInitialized;(0,l.useEffect)((()=>{t(),a(),Z([])}),[k]);return(0,v.jsxs)(i.Z,{variant:"outlined",sx:{minWidth:275,borderRadius:5},children:[(0,v.jsx)(r.Z,{sx:{pb:1},children:(0,v.jsx)(n.Z,{sx:{fontSize:26},children:"Generate Mnenomic"})}),(0,v.jsx)(o.Z,{flexItem:!0}),(0,v.jsx)(r.Z,{sx:{pb:0},children:(0,v.jsx)(n.Z,{sx:{fontSize:20},children:"Mnenomic"})}),(0,v.jsx)(r.Z,{sx:{py:1,mx:2,borderRadius:2,backgroundColor:"#f7f7f7"},children:(0,v.jsx)(n.Z,{sx:{minHeight:24,fontSize:20},children:s})}),(0,v.jsx)(c.Z,{sx:{pl:2,pr:2,pb:2},children:(0,v.jsx)(h.Z,{size:"small",variant:"contained",sx:{backgroundColor:"black",borderRadius:2},onClick:async()=>{try{const e=await W.bip39.generateMnemonic();a(e)}catch(e){console.error(e)}},disabled:!k||!!s,children:"Generate Mnenomic"})}),(0,v.jsx)(r.Z,{sx:{pb:0},children:(0,v.jsx)(n.Z,{sx:{fontSize:20},children:"Coin Type"})}),(0,v.jsxs)(c.Z,{sx:{pl:2,pr:2,pb:2},children:[(0,v.jsx)(d.Z,{options:b.j,sx:{width:288,p:1},renderInput:e=>(0,v.jsx)(u.Z,{...e,label:"Coin Type"}),onChange:(e,s)=>t(null===s||void 0===s?void 0:s.value),isOptionEqualToValue:(e,t)=>e.value===t.value,disabled:!k},!k),(0,v.jsx)(h.Z,{size:"small",variant:"contained",sx:{backgroundColor:"black",borderRadius:2},onClick:async()=>{if(console.log(e),e)try{let t=j.getWallet(e);if(t){const l=await t.getDerivedPath({index:0}),a=await t.getDerivedPrivateKey({mnenomic:s,hdPath:l}),i=await t.getNewAddress({privateKey:a}),r={network:e,derivedPath:l,privateKey:a,address:i.address};Z([r,...w])}}catch(t){console.error(t)}else Z([void 0,...w])},disabled:!k||!s||!e,children:"Generate Address"})]}),w&&w.map(((e,t)=>e?(0,v.jsxs)(x.Z,{severity:"success",children:[(0,v.jsx)(S.Z,{children:"Success"}),(0,v.jsx)("strong",{children:`Chain: ${e.network}`}),(0,v.jsx)("br",{}),(0,v.jsx)("strong",{children:`Derivation Path: ${e.derivedPath}`}),(0,v.jsx)("br",{}),(0,v.jsx)("strong",{children:`Private Key: ${e.privateKey}`}),(0,v.jsx)("br",{}),(0,v.jsx)("strong",{children:`Address: ${e.address}`})]},t):(0,v.jsxs)(x.Z,{severity:"error",children:[(0,v.jsx)(S.Z,{children:"Failure"}),"Please select a coin type!"]},t)))]})}))},8622:(e,t,s)=>{"use strict";s.d(t,{oR:()=>v});var l=s(72791),a=s(84098),i=s(66283),r=s(17734),n=s(48707),o=s(2679),c=s(24996),h=s(45693),d=s(84302),u=s(89480),x=s(75652),S=s(45417),W=s(92063);class b{constructor(e){this.isInit=!1,(0,a.ky)(this,{rootStore:!1}),this.rootStore=e}initialize(){this.btcWallet=new i.BtcWallet,this.ethWallet=new r.EthWallet,this.aptosWallet=new n.AptosWallet,this.cosmosWallet=new o.CosmosWallet,this.eosWallet=new c.EosWallet,this.waxWallet=new c.WaxWallet,this.solWallet=new h.SolWallet,this.stxWallet=new d.StxWallet,this.starknetWallet=new u.StarknetWallet,this.suiWallet=new x.SuiWallet,this.trxWallet=new S.TrxWallet,this.zkSpaceWallet=new W.ZkspaceWallet,this.zkSyncWallet=new W.ZksyncWallet,this.isInit=!0}get isInitialized(){return this.isInit}getWallet(e){switch(e){case"BTC":return this.btcWallet;case"ETH":return this.ethWallet;case"APTOS":return this.aptosWallet;case"COSMOS":return this.cosmosWallet;case"EOS":return this.eosWallet;case"WAX":return this.waxWallet;case"SOL":return this.solWallet;case"STX":return this.stxWallet;case"STARK":return this.starknetWallet;case"SUI":return this.suiWallet;case"TRX":return this.trxWallet;case"ZKSPACE":return this.zkSpaceWallet;case"ZKSYNC":return this.zkSyncWallet;default:throw new Error("No such wallet")}}dispose(){this.btcWallet=void 0,this.ethWallet=void 0,this.isInit=!1}}const p=(0,l.createContext)(new class{constructor(){this.walletStore=new b(this)}}),v=()=>(0,l.useContext)(p)},88677:()=>{},97413:()=>{},43094:()=>{},69159:()=>{},46601:()=>{},71456:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=830.8b8d7e83.chunk.js.map