(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{74153:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buy",function(){return n(92800)}])},19893:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(26042),s=n(85893),o=n(44423),c=n(84095);function i(e){var t=(0,a.Z)({listedCount:0,userListedCount:0,notListedCount:!1,isLoading:!1,collectionInfo:!1,collectionMeta:!1,isMy:!1,isSell:!1},e),n=t.isLoading,i=t.address,l=t.collectionInfo,r=t.collectionMeta,d=t.listedCount,u=t.userListedCount,h=t.notListedCount,x=t.isSell,f=t.isMy;if(n)return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-full bg-gradient-to-r from-[#333] via-[#555] to-[#333] bg-cover animate-pulse max-h-full min-h-[12px] p-[2px] m-[2px]",style:{width:"335px",height:"262px",borderRadius:"inherit"}})});var m=(0,a.Z)({},l||{},r||{});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("article",{className:"relative flex flex-col group items-center hover:scale-[1.035] group transition-all duration-150",children:(0,s.jsxs)("a",{className:"flex flex-col group items-center",href:(0,o.R)("collection","".concat(i).concat(x?"/sell":f?"/my_listed":"")),children:[m&&m.image?(0,s.jsxs)("div",{className:"rounded-t-[6px] rounded-b-[15px]",style:{background:"#090013",position:"relative",width:"275px",height:"275px"},children:[(0,s.jsx)("div",{className:"w-full bg-gradient-to-r from-[#333] via-[#555] to-[#333] rounded-t-[6px] rounded-b-[15px] bg-cover animate-pulse max-h-full min-h-[12px] p-[2px] m-[2px]",style:{width:"275px",height:"270px",borderRadius:"inherit",position:"absolute"}}),(0,s.jsx)(c.Z,{src:m.image,alt:m&&m.name?"".concat(m.name," thumbnail"):"...",className:"z-10 w-[300px] h-[235px] object-cover rounded-t-[6px] rounded-b-[15px] group-hover:ring ring-indigo-200",style:{objectFit:"contain",width:"275px",height:"275px",position:"relative"},loadStyle:{width:"275px",height:"270px"}})]}):(0,s.jsx)("div",{className:"z-10 w-[300px] h-[275px] object-cover rounded-t-[6px] rounded-b-[15px] group-hover:ring ring-indigo-200",style:{border:"2px solid #FFFFFF",background:"#090013",lineHeight:"275px",textAlign:"center",verticalAlign:"middle"},children:(0,s.jsx)("span",{children:m&&m.symbol?(0,s.jsx)(s.Fragment,{children:m.symbol}):(0,s.jsx)(s.Fragment,{children:"Loading..."})})}),(0,s.jsxs)("div",{className:"-mt-3 border bg-gradient-to-br from-black via-slate-900 to-black border-yellow-200 group-hover:border-moon-gold shadow shadow-moon-white w-[300px] lg:w-[350px] h-[100px] flex flex-col items-center text-center rounded-md",children:[(0,s.jsx)("h6",{className:"mt-7 tracking-widest text-indigo-100 group-hover:text-white max-w-[250px] lg:max-w-[320px] text-center truncate",style:(0,a.Z)({},0!=h?{marginTop:"1em"}:{}),children:m&&m.name?(0,s.jsx)(s.Fragment,{children:m.name}):(0,s.jsx)(s.Fragment,{children:"..."})}),!1!==h&&(0,s.jsxs)("p",{className:"mt-[7px] text-sm flex items-center",children:[(0,s.jsx)("span",{className:"opacity-60",children:"Your not listed"}),(0,s.jsx)("span",{className:"ml-[14px] flex items-center gap-[6px]",children:h})]}),(0,s.jsxs)("p",{className:"mt-[7px] text-sm flex items-center",children:[!x&&!f&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"opacity-60",children:"Listed"}),(0,s.jsx)("span",{className:"ml-[14px] flex items-center gap-[6px]",children:d})]}),(x||f)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"opacity-60",children:"Your listed"}),(0,s.jsx)("span",{className:"ml-[14px] flex items-center gap-[6px]",children:u})]})]})]})]})})})}},87198:function(e,t,n){"use strict";var a=n(26042),s=n(29815),o=n(78899),c=n(3283),i=n.n(c),l=n(99312),r=n(64262),d=n(81586),u=n(42304);t.Z=function(e){var t=(0,a.Z)({forAddress:!1},e),n=t.addressList,c=t.chainId,h=t.forAddress;return new Promise((function(e,t){var x=(0,r.T_)(c),f=o;if(x&&x.rpcUrls)try{var m=new(new(i())(x.rpcUrls[0]).eth.Contract)(l,r.Ce[c]),p=new d.vU(f),g=(0,a.Z)({owner:{func:"owner"},totalSupply:{func:"totalSupply"},maxSupply:{func:"MAX_SUPPLY"},name:{func:"name"},contractURI:{func:"contractURI "},hiddenMetadataUri:{func:"hiddenMetadataUri"},baseExtension:{func:"baseExtension"},zeroTokenURI:{func:"tokenURI",args:[0]},oneTokenURI:{func:"tokenURI",args:[1]},symbol:{func:"symbol"}},h?{balance:{func:"balanceOf",args:[h]}}:{}),v=[];n.forEach((function(e){Object.keys(g).forEach((function(t){v=(0,s.Z)(v).concat([(0,a.Z)({group:e,target:e,encoder:p,value:t},g[t])])}))})),(0,u.L)({multicall:m,calls:v}).then((function(t){n.forEach((function(e){!t[e].zeroTokenURI&&t[e].oneTokenURI&&(t[e].zeroTokenURI=t[e].oneTokenURI)})),!t.zeroTokenURI&&t.oneTokenURI&&(t.zeroTokenURI=t.oneTokenURI),e(t)})).catch((function(e){console.log(">>> Fail fetch many nft meta",e),t(e)}))}catch(j){t(j)}else t("NOT_SUPPORTED_CHAIN")}))}},92800:function(e,t,n){"use strict";n.r(t);var a=n(47568),s=n(14924),o=n(26042),c=n(69396),i=n(828),l=n(34051),r=n.n(l),d=n(85893),u=n(66089),h=n.n(u),x=n(11163),f=n(64708),m=n(12975),p=n(67294),g=n(54153),v=n(19902),j=n(33052),b=n(55111),Z=n(19893),k=n(13533),_=n(87198),w=n(54030),y=n(64262),I=n(77491),N=n(98765),C=n(98901),S=n(4248),R=n(29223);t.default=function(e){var t=e.storageData,n=(e.storageData.isBaseConfigReady,e.isOwner,(0,x.useRouter)()),l=((n.asPath.split("#")[1]||"").split("/"),"assets"),u="collections",U=(0,i.Z)((n.asPath.split("#")[1]||"").split("/"),1)[0],E=(0,p.useState)(U||l),F=E[0],T=E[1];(0,p.useEffect)((function(){var e=function(e){var t=(0,i.Z)((e.split("#")[1]||"").split("/"),1)[0];T(t||l)};return function(){n.events.off("hashChangeStart",e)}}),[n.events]);var L=(0,p.useState)(null===t||void 0===t?void 0:t.marketplaceChainId),P=L[0],A=L[1],M=(0,p.useState)(null===t||void 0===t?void 0:t.marketplaceContract),O=M[0],z=M[1],W=(0,R.Z)(P),D=(W.isWalletConnecting,W.isConnected,W.address),Y=(W.activeChainId,W.activeWeb3,W.connectWeb3,W.switchChainId,(0,p.useState)([])),X=Y[0],B=Y[1],H=(0,p.useState)(!0),G=H[0],q=H[1],J=(0,p.useState)(0),K=(J[0],J[1]),Q=(0,p.useState)({}),V=Q[0],$=Q[1],ee=(0,p.useState)(!1),te=ee[0],ne=ee[1],ae=(0,p.useState)({}),se=ae[0],oe=ae[1],ce=function(e){B(e)},ie=(0,p.useState)(!1),le=ie[0],re=ie[1];(0,p.useEffect)((function(){le&&(re(!1),(0,N.Z)({address:O,chainId:P,onlyTokens:!0}).then((function(e){ce(e.tokensAtSale)})))}),[le]),(0,p.useEffect)((function(){te&&function(e){var t={chainId:V.chainId,tokensInfo:e.map((function(e){return{address:e.collection,tokenId:e.tokenId}}))};(0,C.Z)(t).then((function(e){oe((function(t){return Object.keys(e).forEach((function(n){if(!1!==e[n]){var a=(0,i.Z)(n.split("_"),2),l=a[0],r=a[1];t=(0,c.Z)((0,o.Z)({},t),(0,s.Z)({},l,(0,c.Z)((0,o.Z)({},t[l]),(0,s.Z)({},r,e[n].tokenURI))))}})),t}))})).catch((function(e){console.log(">> err",e)}))}(X)}),[te,X]),(0,p.useEffect)((function(){P&&O&&(0,N.Z)({address:O,chainId:P}).then((function(e){$(e),K(e.tokensAtSaleCount),ce(e.tokensAtSale),q(!1),ne(!0)})).catch((function(e){console.log(">>> fail fetch market info",e)}))}),[P,O]),(0,p.useEffect)((function(){t&&t.marketplaceChainId&&t.marketplaceContract&&(A(t.marketplaceChainId),z(t.marketplaceContract))}),[t]);var de=(0,p.useState)(!1),ue=de[0],he=de[1];(0,p.useEffect)((function(){V&&(0,k.Z)({erc20list:(0,S.Z)(V.allowedERC20).filter((function(e){return e!==y.r_})),chainId:P}).then((function(e){he(e)})).catch((function(e){console.log(">> fail fetch allowedERC20 token info",V.erc20,e)}))}),[V]);(0,p.useEffect)((function(){F==l&&re(!0),F==u&&Ze(!0)}),[F]);var xe=(0,p.useState)({}),fe=xe[0],me=xe[1],pe=(0,p.useState)({}),ge=pe[0],ve=pe[1],je=(0,p.useState)(!1),be=je[0],Ze=je[1];(0,p.useEffect)((function(){if(Object.keys(fe).length){var e=[];Object.keys(fe).filter((function(e){return void 0===ge[e]})).forEach((function(t){e.push(new Promise(function(){var e=(0,a.Z)(r().mark((function e(n){var a,i,l,d,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,l=!1,d=!1,!fe[t].contractURI){e.next=13;break}return e.prev=5,e.next=8,(0,w.L)((0,m.W)(fe[t].contractURI));case 8:i=e.sent,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(5);case 13:if(!fe[t].zeroTokenURI){e.next=22;break}return e.prev=14,e.next=17,(0,w.L)((0,m.W)(fe[t].zeroTokenURI));case 17:l=e.sent,e.next=22;break;case 20:e.prev=20,e.t1=e.catch(14);case 22:if(i||l||!fe[t].baseExtension||!fe[t].hiddenMetadataUri){e.next=31;break}return e.prev=23,e.next=26,(0,w.L)((0,m.W)("".concat(fe[t].hiddenMetadataUri,1).concat(fe[t].baseExtension)));case 26:d=e.sent,e.next=31;break;case 29:e.prev=29,e.t2=e.catch(23);case 31:u={name:(null===i||void 0===i?void 0:i.name)||(null===l||void 0===l?void 0:l.name)||fe[t].symbol||"-",description:(null===i||void 0===i?void 0:i.description)||(null===l||void 0===l?void 0:l.description)||fe[t].name||"-",image:(null===i||void 0===i?void 0:i.image)||(null===l||void 0===l?void 0:l.image)||(null===d||void 0===d?void 0:d.image)||!1,totalSupply:(null===(a=fe[t])||void 0===a?void 0:a.totalSupply)||0},ve((function(e){return(0,c.Z)((0,o.Z)({},e),(0,s.Z)({},t,u))})),n(!0);case 34:case"end":return e.stop()}}),e,null,[[5,11],[14,20],[23,29]])})));return function(t){return e.apply(this,arguments)}}()))})),Promise.all(e).then((function(e){}))}}),[fe]),(0,p.useEffect)((function(){be&&V&&V.chainId&&(Ze(!1),(0,_.Z)({addressList:(0,S.Z)(V.nftCollections),chainId:V.chainId}).then((function(e){me((0,o.Z)({},fe,e))})).catch((function(e){console.log(">> err",e)})))}),[be,V]);var ke=(0,p.useState)(0),_e=ke[0],we=ke[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h(),{id:g.Z.__hash,children:g.Z}),(0,d.jsxs)("div",{className:"jsx-".concat(g.Z.__hash),children:[(0,d.jsx)(v.Z,(0,o.Z)({},e)),(0,d.jsx)("div",{className:"jsx-".concat(g.Z.__hash)+" pt-10 md:pt-12 lg:pt-16 xl:pt-20 m flex flex-col items-center w-full",children:(0,d.jsxs)("div",{className:"jsx-".concat(g.Z.__hash)+" flex flex-col items-center md:items-start",children:[(0,d.jsx)("h2",{className:"jsx-".concat(g.Z.__hash)+" font-GoodTimes tracking-wide flex items-center text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-moon-gold to-indigo-100",children:"Buy NFTs"}),(0,d.jsx)("div",{className:"jsx-".concat(g.Z.__hash)+" my-8 flex gap-6 sm:gap-8 lg:my-10 flex-col items-center sm:flex-row",children:(0,d.jsxs)("div",{className:"jsx-".concat(g.Z.__hash)+" flex gap-6",children:[(0,d.jsxs)("div",{className:"jsx-".concat(g.Z.__hash)+" flex flex-col divide-y-2 text-left font-semibold tracking-wider",children:[(0,d.jsx)("p",{className:"jsx-".concat(g.Z.__hash)+" "+"".concat(F==l?"false":"opacity-60"," text-yellow-200 py-1 transition-all duration-150"),children:"Assets"}),(0,d.jsx)("p",{className:"jsx-".concat(g.Z.__hash)+" text-indigo-300 py-1",children:(0,d.jsx)("span",{className:"jsx-".concat(g.Z.__hash)+" "+"".concat(F==l?"opacity-60":"false"," transition-all duration-150"),children:"Collections"})})]}),(0,d.jsx)("div",{className:"jsx-".concat(g.Z.__hash)+" "+"".concat(F==l?"bg-moon-gold":"bg-indigo-600"," flex w-8 h-16 rounded-full ease-in-ease-out duration-150"),children:(0,d.jsx)("button",{onClick:function(){T(F==l?u:l);var e=(0,f.Rg)("buy",F==l?"collections":"assets");n.push(e.replace("_MYAPP/",""))},className:"jsx-".concat(g.Z.__hash)+" "+"".concat(F==l?"false":"translate-y-8"," w-9 h-9 bg-white rounded-full ease-in-ease-out duration-150")})})]})}),(0,d.jsxs)("p",{className:"jsx-".concat(g.Z.__hash)+" mt-[14px] lg:mt-6 text-xl opacity-80",children:[F==l&&(0,d.jsx)(d.Fragment,{children:"Pick an asset"}),F==u&&(0,d.jsx)(d.Fragment,{children:"Pick from a collection"})]}),(0,d.jsxs)("section",{className:"jsx-".concat(g.Z.__hash)+" mt-10 md:mt-16 flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-flow-row md:gap-12 xl:grid-cols-3 xl:gap-14",children:[F==l&&(0,d.jsx)(d.Fragment,{children:!G&&(0,d.jsx)(d.Fragment,{children:X.slice(0,_e+15).map((function(e,t){var n=e.tokenId;return(0,d.jsx)(b.Z,{mediaUrl:!(!se[e.collection]||!se[e.collection][n.toString()])&&se[e.collection][n.toString()],tokenInfo:e,allowedERC20Info:ue,chainId:P,isDeList:D&&D.toLowerCase()==e.seller.toLowerCase()},t)}))})}),F==u&&(0,d.jsx)(d.Fragment,{children:V&&V.nftCollections&&(0,d.jsx)(d.Fragment,{children:(0,S.Z)(V.nftCollections).map((function(e){return(0,d.jsx)(Z.Z,{address:e,isLoading:void 0===fe[e],collectionInfo:fe[e]||!1,collectionMeta:ge[e]||!1,listedCount:V.collectionListing[e]},e)}))})}),(0,d.jsx)("article",{className:"jsx-".concat(g.Z.__hash)+" relative group overflow-hidden",children:(0,d.jsx)("div",{className:"jsx-".concat(g.Z.__hash)+" w-[335px] h-[1px] overflow-hidden"})})]}),F==l&&_e+15<X.length&&(0,d.jsx)("div",{style:{textAlign:"center",width:"100%",paddingTop:"2em"},className:"jsx-".concat(g.Z.__hash),children:(0,d.jsx)(I.Z,{onClick:function(){we(_e+15)},children:"Load more"})})]})}),(0,d.jsx)(j.Z,(0,o.Z)({},e))]})]})}}},function(e){e.O(0,[976,697,991,100,303,193,774,888,179],(function(){return t=74153,e(e.s=t);var t}));var t=e.O();_N_E=t}]);