(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(78586)}])},98901:function(e,t,n){"use strict";var a=n(828),r=n(3283),s=n.n(r),i=n(99312),o=n(64262),l=n(81586),p=n(26566),u=n(42304);t.Z=function(e){var t=e.chainId,n=e.tokensInfo;return new Promise((function(e,r){var d=(0,o.T_)(t);if(d&&d.rpcUrls)try{var c=new(new(s())(d.rpcUrls[0]).eth.Contract)(i,o.Ce[t]),m=new l.vU(p),y={},x=n.map((function(e){var t=e.address;return!y[t]&&(y[t]=!0,{group:t,func:"baseExtension",encoder:m,target:t})})).filter((function(e){return!1!==e})),f=n.map((function(e){var t=e.address,n=e.tokenId;return{group:"".concat(t,"_").concat(n),func:"tokenURI",encoder:m,args:[n],target:t}}));(0,u.L)({multicall:c,calls:x}).then((function(t){(0,u.L)({multicall:c,calls:f}).then((function(n){Object.keys(n).map((function(e){var r=(0,a.Z)(e.split("_"),2),s=r[0],i=r[1];t[s]&&t[s].baseExtension&&n[e].tokenURI.substr(-t[s].baseExtension.length)!==t[s].baseExtension&&(n[e].tokenURI="".concat(n[e].tokenURI).concat(i).concat(t[s].baseExtension))})),e(n)})).catch((function(e){console.log(">>> Fail fetch all info",e),r(e)}))})).catch((function(e){console.log(">>> fail fetch baseExtension",e)}))}catch(h){console.log(">>> err",h),r(h)}else r("NOT_SUPPORTED_CHAIN")}))}},78586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(85893),r=n(66089),s=n.n(r),i=n(11163),o=n(54153),l=n(19902),p=n(33052),u=n(44423),d=n(67294),c=n(14924),m=n(26042),y=n(69396),x=n(828),f=n(98765),h=n(4248),g=n(98901),b=n(64708),v=n(83300),w=n.n(v),T=n(12975);function I(e){var t=e.url,n=(0,d.useState)(!1),r=n[0],s=n[1],i=(0,d.useState)(!0),o=(i[0],i[1]),l=(0,d.useState)(!1),p=(l[0],l[1]),u=(0,d.useState)(!1),c=(u[0],u[1]),x=(0,d.useState)({}),f=x[0],h=x[1],g=(0,d.useState)(!1),v=g[0],I=g[1],j=(0,d.useState)(!1),_=(j[0],j[1]),k=(0,d.useState)(!1),E=k[0],Z=k[1],M=(0,d.useState)(!1),N=M[0],S=M[1],A=(0,d.useState)(0),R=A[0],O=A[1];(0,d.useEffect)((function(){if(v){var e=new Image;!function(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(e){},t.onprogress=function(e){O(Math.round(e.loaded/e.total*100))},t.send(),S(!0)}(v),e.onload=function(){Z(!0)},e.src=v,_(e)}}),[v]),(0,d.useState)((function(){t&&w()((0,T.W)(t)).then((function(e){return e.headers.get("content-type").startsWith("image/")?"IMAGE":e.text()})).then((function(e){if("IMAGE"==e)return"IMAGE";try{return JSON.parse(e.slice(1))}catch(t){try{return JSON.parse(e)}catch(n){return"FAIL_PARSE"}}})).then((function(e){s(!0),o(!1),"FAIL_PARSE"!==e&&"IMAGE"!==e?h(e):"IMAGE"===e?p(!0):c(!0)})).catch((function(e){console.log("fail fetch",e)}))}),[t]),(0,d.useEffect)((function(){f&&f.image&&I((0,T.W)(f.image))}),[f]);var F=(0,d.useState)(!1),C=(F[0],F[1]);return(0,a.jsx)(a.Fragment,{children:r&&f&&f.image&&v&&E?(0,a.jsx)("img",(0,m.Z)({src:v,onLoad:function(){C(!0)},loading:"lazy"},e)):(0,a.jsxs)("div",(0,y.Z)((0,m.Z)({},e),{style:{background:"#000000",position:"relative",display:"flex",textAlign:"center",alignItems:"center"},children:[(0,a.jsx)("img",{src:(0,b.Vh)("images/index-gallery-loader.svg","IndexGalleryLoader"),style:{width:"50%",position:"absolute",left:"50%",top:"50%",marginTop:"-25%",marginLeft:"-25%"}}),N&&(0,a.jsxs)("strong",{style:{width:"100%"},children:[R,"%"]})]}))})}function j(e){var t=e.chainId,n=e.marketplaceContract,r=(0,d.useState)([]),s=r[0],i=r[1];(0,d.useEffect)((function(){t&&n&&(0,f.Z)({address:n,chainId:t,onlyTokens:!0}).then((function(e){i((0,h.Z)(e.tokensAtSale).sort((function(e,t){return Number(e.utx)>Number(t.utx)?-1:1})).slice(0,4))}))}),[t,n]);var o=(0,d.useState)({}),l=o[0],p=o[1];(0,d.useEffect)((function(){if(s&&s.length){var e={chainId:t,tokensInfo:s.map((function(e){return{address:e.collection,tokenId:e.tokenId}}))};(0,g.Z)(e).then((function(e){p((function(t){return Object.keys(e).forEach((function(n){if(!1!==e[n]){var a=(0,x.Z)(n.split("_"),2),r=a[0],s=a[1];t=(0,y.Z)((0,m.Z)({},t),(0,c.Z)({},r,(0,y.Z)((0,m.Z)({},t[r]),(0,c.Z)({},s,e[n].tokenURI))))}})),t}))})).catch((function(e){console.log(">> err",e)}))}}),[s]);var u=(0,d.useState)(0),v=u[0],w=u[1];(0,d.useEffect)((function(){var e=setInterval((function(){var e=v+1;w(e<s.length?e:0)}),3e3);return function(){return clearInterval(e)}}),[v]);return(0,a.jsx)("div",{className:"flex flex-col items-center relative md:-mt-32 xl:-mt-16 2xl:-mt-0",children:s&&s.length>0&&(0,a.jsxs)(a.Fragment,{children:[s.map((function(e,t){return(0,a.jsx)("div",{style:{display:t==v?"block":"none"},children:l[s[t].collection]&&l[s[t].collection][s[t].tokenId]?(0,a.jsx)("a",{href:(0,b.Rg)("asset","".concat(s[t].collection,"/").concat(s[t].tokenId)),children:(0,a.jsx)(I,{url:l[s[t].collection][s[t].tokenId],className:"w-[290px] hover:ring xl:hover:ring-4 ring-moon-orange transition-all duration-300 h-[362px] lg:h-[443.38px] xl:h-[499.58px] 2xl:h-[564px] object-cover lg:w-[355px] xl:w-[400px] 2xl:w-[536px] rounded-tl-[99px] rounded-br-[99px]",width:"290",height:"362"})}):(0,a.jsx)("a",{href:(0,b.Rg)("asset","".concat(s[t].collection,"/").concat(s[t].tokenId)),children:(0,a.jsx)("div",{className:"w-[290px] hover:ring xl:hover:ring-4 ring-moon-orange transition-all duration-300 h-[362px] lg:h-[443.38px] xl:h-[499.58px] 2xl:h-[564px] object-cover lg:w-[355px] xl:w-[400px] 2xl:w-[536px] rounded-tl-[99px] rounded-br-[99px]",style:{background:"#000000",position:"relative"},children:(0,a.jsx)("img",{src:(0,b.Vh)("images/index-gallery-loader.svg","IndexGalleryLoader"),style:{width:"50%",position:"absolute",left:"50%",top:"50%",marginTop:"-25%",marginLeft:"-25%"}})})})},t)})),(0,a.jsx)("div",{className:"mt-8 flex gap-5 lg:ml-12 lg:mt-6",children:s.map((function(e,t){return(0,a.jsx)("button",{className:"".concat(t==v?"bg-moon-secondary":"bg-white bg-opacity-20"," transition-all duration-150 w-11 lg:w-8 2xl:w-11 h-1 xl:h-[6px] rounded"),onClick:function(){!function(e){w(e)}(t)}},t)}))})]})})}var _=function(e){var t=e.storageData,n=(e.storageData.isBaseConfigReady,e.isOwner,(0,i.useRouter)(),(0,d.useState)(null===t||void 0===t?void 0:t.marketplaceChainId)),r=n[0],c=(n[1],(0,d.useState)(null===t||void 0===t?void 0:t.marketplaceContract)),m=c[0];c[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{id:o.Z.__hash,children:o.Z}),(0,a.jsxs)("div",{className:"jsx-".concat(o.Z.__hash),children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("main",{className:"jsx-".concat(o.Z.__hash)+" flex flex-col items-center px-6 md:px-10",children:(0,a.jsxs)("div",{className:"jsx-".concat(o.Z.__hash)+" mt-10 flex flex-col items-center pb-12 md:flex-row-reverse md:py-10 lg:pt-12 md:gap-12 xl:gap-28 2xl:gap-40",children:[(0,a.jsx)(j,{chainId:r,marketplaceContract:m}),(0,a.jsxs)("div",{className:"jsx-".concat(o.Z.__hash)+" md:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] relative mt-16 text-center z-10 md:text-left flex flex-col items-center md:mt-2 md:items-start lg:mt-10",children:[(0,a.jsx)("div",{"aria-hidden":"true",className:"jsx-".concat(o.Z.__hash)+" absolute overflow-hidden hidden lg:block -z-50 lg:left-[calc(-90%-30rem)] xl:left-[calc(-40%-30rem)] lg:top-[calc(50%-30rem)] 2xl:left-[calc(-5%-30rem)] 2xl:top-[calc(50%-30rem)] transform-gpu blur-[85px] ",children:(0,a.jsx)("div",{style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"},className:"jsx-".concat(o.Z.__hash)+" relative aspect-[1400/678] rotate-[30deg] bg-gradient-to-tr from-moon-secondary to-orange-600 opacity-[0.15] w-[82.1875rem]"})}),(0,a.jsx)("h1",{className:"jsx-".concat(o.Z.__hash)+" text-white font-GoodTimes text-[34px] md:text-4xl md:tracking-wide md:leading-relaxed lg:text-5xl xl:text-6xl 2xl:text-7xl",children:"MARKET TITLE"}),(0,a.jsx)("p",{className:"jsx-".concat(o.Z.__hash)+" mt-8 md:mt-6 2xl:mt-[26px] lg:mt-7 text-sm leading-6 px-3 md:px-0 text-moon-orange text-md md:text-left lg:text-base xl:text-lg max-w-sm lg:max-w-md xl:max-w-[600px] 2xl:max-w-[658px]",children:"MARKET DESCRIPTION"}),(0,a.jsx)("a",{href:(0,u.R)("buy"),className:"jsx-".concat(o.Z.__hash),children:(0,a.jsx)("button",{className:"jsx-".concat(o.Z.__hash)+" mt-12 lg:mt-10 2xl:mt-[50px] font-mono flex text-gray-100 hover:bg-gradient-to-b from-yellow-600  to-moon-secondary hover:text-white duration-150 items-center gap-2 border-[0.6px] hover:border-yellow-600 rounded border-white border-opacity-50 py-3 pl-6 pr-6 font-bold",children:"Explore assets"})}),(0,a.jsx)("a",{href:(0,u.R)("buy","collections"),className:"jsx-".concat(o.Z.__hash),children:(0,a.jsx)("button",{className:"jsx-".concat(o.Z.__hash)+" mt-12 lg:mt-10 2xl:mt-[50px] font-mono flex text-gray-100 hover:bg-gradient-to-b from-yellow-600  to-moon-secondary hover:text-white duration-150 items-center gap-2 border-[0.6px] hover:border-yellow-600 rounded border-white border-opacity-50 py-3 pl-6 pr-6 font-bold",children:"Explore collections"})})]})]})}),(0,a.jsx)(p.Z,{})]})]})}},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(13375);var r=n(91566);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,a.Z)(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},26566:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}},function(e){e.O(0,[976,384,997,432,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);