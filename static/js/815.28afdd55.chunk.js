(self.webpackChunkgithub_pages_test=self.webpackChunkgithub_pages_test||[]).push([[815],{75439:(e,t,l)=>{"use strict";l.d(t,{M:()=>n});var a=l(94294),i=l(80184);const n=e=>{let{buttonText:t,handleClick:l,disabled:n=!1}=e;return(0,i.jsx)(a.Z,{size:"small",variant:"contained",sx:{backgroundColor:"black",borderRadius:2},onClick:l,disabled:n,children:t})}},40233:(e,t,l)=>{"use strict";l.d(t,{d:()=>r});var a=l(5289),i=l(65661),n=l(39157),s=l(51691),o=l(97123),h=l(94294),p=l(80184);const r=e=>{let{title:t,content:l,closeButtonText:r="No",confirmButtonText:w="Yes",showDialog:k=!1,handleClose:T,handleConfirm:c}=e;return(0,p.jsxs)(a.Z,{open:k,onClose:T||c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,p.jsx)(i.Z,{id:"alert-dialog-title",children:t}),(0,p.jsx)(n.Z,{children:(0,p.jsx)(s.Z,{id:"alert-dialog-description",children:l})}),(0,p.jsxs)(o.Z,{children:[T&&(0,p.jsx)(h.Z,{onClick:T,children:r}),(0,p.jsx)(h.Z,{onClick:c,autoFocus:!0,children:w})]})]})}},38759:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>T});var a=l(72791),i=l(77257),n=l(57621),s=l(39504),o=l(20890),h=l(72363),p=l(75439),r=l(40233),w=l(8622),k=l(80184);const T=(0,i.Pi)((()=>{const[e,t]=(0,a.useState)(!1),{walletStore:l}=(0,w.oR)(),i=l.isInit;(0,a.useEffect)((()=>{t(!1)}),[i]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(n.Z,{variant:"outlined",sx:{minWidth:275,borderRadius:5},children:[(0,k.jsxs)(s.Z,{sx:{pb:1},children:[(0,k.jsx)(o.Z,{display:"inline",sx:{fontSize:26},children:"OKX Wallet SDK"}),i&&(0,k.jsx)(o.Z,{display:"inline",sx:{fontSize:14,color:"blue"},children:" (Initialized)"})]}),(0,k.jsx)(h.Z,{sx:{pl:2,pr:2,pb:2},children:i?(0,k.jsx)(p.M,{buttonText:"Dispose",handleClick:()=>{t(!0)}}):(0,k.jsx)(p.M,{buttonText:"Initialize",handleClick:()=>{l.initialize()}})})]}),(0,k.jsx)(r.d,{title:"Are you sure?",content:"The Mnenomics and Private Keys generated will be lost!",showDialog:e,handleClose:()=>{t(!1)},handleConfirm:()=>{l.dispose(),t(!1)}})]})}))},8622:(e,t,l)=>{"use strict";l.d(t,{oR:()=>b});var a=l(72791),i=l(84098),n=l(66283),s=l(17734),o=l(48707),h=l(2679),p=l(24996),r=l(45693),w=l(84302),k=l(89480),T=l(75652),c=l(45417),W=l(92063);class u{constructor(e){this.coinTypeMapping=[],this.isInit=!1,(0,i.ky)(this,{rootStore:!1}),this.rootStore=e}initialize(){this.btcWallet=new n.BtcWallet,this.coinTypeMapping.push({network:"BTC",token:"BTC",label:"BTC",wallet:this.btcWallet}),this.bchWallet=new n.BchWallet,this.coinTypeMapping.push({network:"BTC",token:"BCH",label:"BCH",wallet:this.bchWallet}),this.bsvWallet=new n.BsvWallet,this.coinTypeMapping.push({network:"BTC",token:"BSV",label:"BSV",wallet:this.bsvWallet}),this.ltcWallet=new n.LtcWallet,this.coinTypeMapping.push({network:"BTC",token:"LTC",label:"LTC",wallet:this.ltcWallet}),this.dogeWallet=new n.DogeWallet,this.coinTypeMapping.push({network:"BTC",token:"DOGE",label:"Doge",wallet:this.dogeWallet}),this.tbtcWallet=new n.TBtcWallet,this.coinTypeMapping.push({network:"BTC",token:"TBTC",label:"TBTC",wallet:this.tbtcWallet}),this.usdtWallet=new n.UsdtWallet,this.coinTypeMapping.push({network:"BTC",token:"OMNI-USDT",label:"Omni USDT",wallet:this.usdtWallet}),this.ethWallet=new s.EthWallet,this.coinTypeMapping.push({network:"ETH",token:"ETH",label:"ETH",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"A1",label:"Arbitrum One",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"NOVA",label:"Arbitrum Nova",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"AVAX",label:"Avalance C",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"BOBA",label:"Boba",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"BNB (ERC20)",label:"BNB Chain",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"CORE",label:"Core",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"CRO (ERC20)",label:"Cronos (EVM)",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"CELO",label:"Celo",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"CFX",label:"Conflux (EVM)",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"ACE",label:"Endurance",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"ETHW",label:"Ethereum PoW",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"ETHF",label:"Ethereum Fair",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"FIL (ERC20)",label:"Filecoin (EVM)",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"FTM",label:"Fantom",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"FLR",label:"Flare",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"GNO",label:"Gnosis",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"GETH",label:"Goerli",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"HAQQ",label:"HAQQ Network",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"KLAY",label:"Klaytn",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"KCS",label:"KCC",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"KAVA (ERC20)",label:"Kava (EVM)",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"TBA",label:"Linea",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"METIS",label:"Metis",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"GLMR",label:"Moonebeam",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"MOVR",label:"Moonriver",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"MNT",label:"Mantle",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"OMN",label:"Omega Network",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"OKT",label:"OKTC",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"OP",label:"Optimism",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"OPBNB",label:"opBNB",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"MATIC",label:"Polygon",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"MATIC (zkEVM)",label:"Polygon zkEVM",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"PULSE",label:"Pulse Chain",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"SEPOLIA",label:"Sepolia",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"ZKSYNC-ERA",label:"zkSync Era",wallet:this.ethWallet}),this.coinTypeMapping.push({network:"ETH",token:"ZETA",label:"Zeta Chain",wallet:this.ethWallet}),this.atomWallet=new h.AtomWallet,this.coinTypeMapping.push({network:"COSMOS",token:"ATOM",label:"Atom",wallet:this.atomWallet}),this.axelarWallet=new h.AxelarWallet,this.coinTypeMapping.push({network:"COSMOS",token:"AXL",label:"Axelar",wallet:this.axelarWallet}),this.cronosWallet=new h.CronosWallet,this.coinTypeMapping.push({network:"COSMOS",token:"CRO",label:"Cronos",wallet:this.cronosWallet}),this.osmoWallet=new h.OsmoWallet,this.coinTypeMapping.push({network:"COSMOS",token:"OSMO",label:"Osmosis",wallet:this.osmoWallet}),this.evmosWallet=new h.EvmosWallet,this.coinTypeMapping.push({network:"COSMOS",token:"EVMOS",label:"Evmos",wallet:this.evmosWallet}),this.irisWallet=new h.IrisWallet,this.coinTypeMapping.push({network:"COSMOS",token:"IRIS",label:"Iris",wallet:this.irisWallet}),this.junoWallet=new h.JunoWallet,this.coinTypeMapping.push({network:"COSMOS",token:"JUNO",label:"Juno",wallet:this.junoWallet}),this.kavaWallet=new h.KavaWallet,this.coinTypeMapping.push({network:"COSMOS",token:"KAVA",label:"Kava",wallet:this.kavaWallet}),this.kujiraWallet=new h.KujiraWallet,this.coinTypeMapping.push({network:"COSMOS",token:"KUJI",label:"Kujira",wallet:this.kujiraWallet}),this.secretWallet=new h.SecretWallet,this.coinTypeMapping.push({network:"COSMOS",token:"SCRT",label:"Secret",wallet:this.secretWallet}),this.seiWallet=new h.SeiWallet,this.coinTypeMapping.push({network:"COSMOS",token:"SEI",label:"Sei",wallet:this.seiWallet}),this.stargazeWallet=new h.StargazeWallet,this.coinTypeMapping.push({network:"COSMOS",token:"STARS",label:"Stargaze",wallet:this.stargazeWallet}),this.terraWallet=new h.TerraWallet,this.coinTypeMapping.push({network:"COSMOS",token:"LUNA",label:"Terra",wallet:this.terraWallet}),this.aptosWallet=new o.AptosWallet,this.coinTypeMapping.push({network:"APTOS",token:"APTOS",label:"Aptos",wallet:this.aptosWallet}),this.eosWallet=new p.EosWallet,this.coinTypeMapping.push({network:"EOS",token:"EOS",label:"EOS",wallet:this.eosWallet}),this.solWallet=new r.SolWallet,this.coinTypeMapping.push({network:"SOL",token:"SOL",label:"Solana",wallet:this.solWallet}),this.stxWallet=new w.StxWallet,this.coinTypeMapping.push({network:"STX",token:"STX",label:"Stacks",wallet:this.stxWallet}),this.starknetWallet=new k.StarknetWallet,this.coinTypeMapping.push({network:"STARK",token:"STARK",label:"Starknet",wallet:this.starknetWallet}),this.suiWallet=new T.SuiWallet,this.coinTypeMapping.push({network:"SUI",token:"SUI",label:"SUI",wallet:this.suiWallet}),this.trxWallet=new c.TrxWallet,this.coinTypeMapping.push({network:"TRX",token:"TRON",label:"TRX",wallet:this.trxWallet}),this.zkSpaceWallet=new W.ZkspaceWallet,this.coinTypeMapping.push({network:"ZKSPACE",token:"ZKSPACE",label:"Zkspace",wallet:this.zkSpaceWallet}),this.zkSyncWallet=new W.ZksyncWallet,this.coinTypeMapping.push({network:"ZKSYNC",token:"ZKSYNC",label:"Zkspace",wallet:this.zkSyncWallet}),this.isInit=!0}getWallet(e){return this.coinTypeMapping.find((t=>t.token===e)).wallet}dispose(){this.coinTypeMapping=[],this.isInit=!1}}const M=(0,a.createContext)(new class{constructor(){this.walletStore=new u(this)}}),b=()=>(0,a.useContext)(M)},88677:()=>{},97413:()=>{},43094:()=>{},69159:()=>{},46601:()=>{},71456:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=815.28afdd55.chunk.js.map