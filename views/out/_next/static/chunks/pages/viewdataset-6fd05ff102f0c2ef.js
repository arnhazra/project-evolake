(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{8535:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewdataset",function(){return n(1205)}])},8609:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(5893),i=n(1555),s=n(4184),o=n.n(s),r=n(7294),l=n(6792),d=n(6611),u=n(9602);let c=r.forwardRef(({bsPrefix:e,className:t,variant:n,as:i="img",...s},r)=>{let d=(0,l.vE)(e,"card-img");return(0,a.jsx)(i,{ref:r,className:o()(n?`${d}-${n}`:d,t),...s})});c.displayName="CardImg";var p=n(9059);let y=r.forwardRef(({bsPrefix:e,className:t,as:n="div",...i},s)=>{let d=(0,l.vE)(e,"card-header"),u=(0,r.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,a.jsx)(p.Z.Provider,{value:u,children:(0,a.jsx)(n,{ref:s,...i,className:o()(t,d)})})});y.displayName="CardHeader";let m=(0,u.Z)("h5"),v=(0,u.Z)("h6"),f=(0,d.Z)("card-body"),h=(0,d.Z)("card-title",{Component:m}),b=(0,d.Z)("card-subtitle",{Component:v}),x=(0,d.Z)("card-link",{Component:"a"}),T=(0,d.Z)("card-text",{Component:"p"}),g=(0,d.Z)("card-footer"),w=(0,d.Z)("card-img-overlay"),j=r.forwardRef(({bsPrefix:e,className:t,bg:n,text:i,border:s,body:r=!1,children:d,as:u="div",...c},p)=>{let y=(0,l.vE)(e,"card");return(0,a.jsx)(u,{ref:p,...c,className:o()(t,y,n&&`bg-${n}`,i&&`text-${i}`,s&&`border-${s}`),children:r?(0,a.jsx)(f,{children:d}):d})});j.displayName="Card";var k=Object.assign(j,{Img:c,Title:h,Subtitle:b,Body:f,Link:x,Text:T,Header:y,Footer:g,ImgOverlay:w}),N=n(1664),C=n.n(N);let M=e=>{let{id:t,category:n,name:s,price:o}=e;return(0,a.jsx)(i.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,a.jsx)(C(),{href:"/viewdataset?id=".concat(t),children:(0,a.jsxs)(k,{children:[(0,a.jsx)(k.Header,{className:"pt-3",children:(0,a.jsx)("div",{className:"".concat(n.toLowerCase(),"Container pt-4")})}),(0,a.jsxs)(k.Footer,{className:"pt-4 pb-2 ps-4 ".concat(n.toLowerCase(),"Color"),children:[(0,a.jsx)("div",{className:"nameContainer",children:(0,a.jsx)("p",{className:"lead",children:s})}),(0,a.jsx)("p",{className:"smalltext",children:n}),(0,a.jsx)("p",{className:"smalltext",children:0===o?"FREE":o+" LST"})]})]})})})};var Z=M},3298:function(e,t,n){"use strict";var a=n(5893),i=n(8893);let s=e=>{let{customMessage:t}=e;return(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)("p",{className:"branding mb-4",children:t||i.Z.ErrorMessage}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-exclamation fa-4x "}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("button",{onClick:()=>window.history.back(),className:"btn mt-2",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-left"}),"Go Back"]})]})};t.Z=s},3700:function(e,t){"use strict";var n,a;(a=n||(n={})).tokenContractAddress="0xd659a1a8d30971f199b5a2e999216ef026cb9b9c",a.vendorContractAddress="0x24049967884f0b6039b23fca5a8071117b33bb90",a.nftContractAddress="0x08155a0035cd6df53734f1b53026199858b6d6aa",t.Z=n},5912:function(e,t){"use strict";var n,a;(a=n||(n={})).POST="POST",a.GET="GET",a.PATCH="PATCH",a.PUT="PUT",a.DELETE="DELETE",a.OPTIONS="OPTIONS",t.Z=n},2291:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});let a=[{inputs:[{internalType:"uint256",name:"exchangeRate",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"from",type:"address"},{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokensPerUnitEther",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}]},1627:function(e,t,n){"use strict";var a=n(6154),i=n(8767),s=n(1163),o=n(6501),r=n(8893);t.Z=function(e,t,n,l,d){let u=(0,s.useRouter)(),c=async()=>{let{data:e}=await (0,a.Z)({method:n,url:t,data:l});return e},{error:p,data:y,isLoading:m}=(0,i.useQuery)([e,l,d],()=>c(),{enabled:!0,refetchOnWindowFocus:!1,retry:3,retryDelay:2500,onError(t){t.response&&401===t.response.status&&(localStorage.removeItem("accessToken"),u.push("/")),o.Am.error("".concat(r.Z.ToastError," fetching ").concat(e))}});return{error:p,data:y,isLoading:m}}},1205:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(5893),i=n(7294),s=n(682),o=n(4051),r=n(1555),l=n(7918),d=n.n(l),u=n(3056),c=n(1120),p=n(6154),y=n(2291);let m=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"createNft",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}];var v=n(3700),f=n(9063),h=n(6501),b=n(8609),x=n(1163),T=n(1627),g=n(5912),w=n(3298),j=n(3773),k=n(1664),N=n.n(k);let C=new(d())(d().givenProvider),M=()=>{var e,t,n,l,d,k,M,Z,_,S,A,I,E,P,V,L,F,G,O;let R=(0,x.useRouter)(),{id:W}=R.query,[H,$]=(0,i.useState)(Math.random().toString()),[q,z]=(0,i.useState)(""),[B,D]=(0,i.useState)(!1),U=(0,T.Z)("view dataset",f.Z.datasetViewEndpoint,g.Z.POST,{datasetId:W}),X=(0,T.Z)("similar datasets",f.Z.findsimilarDatasets,g.Z.POST,{datasetId:W}),J=(0,T.Z)("subscription status",f.Z.checkSubscriptionEndpoint,g.Z.POST,{datasetId:W},H);(0,i.useEffect)(()=>{let e=async()=>{try{let e=await window.ethereum.request({method:"eth_requestAccounts"});z(e[0])}catch(e){h.Am.error("Please install metamask")}};e()},[]);let K=async()=>{if(0===U.data.price)try{if(void 0!==window.ethereum)try{D(!0);let e=await window.ethereum.request({method:"eth_requestAccounts"});z(e[0]);let t=Math.floor(1e6+9e6*Math.random()),n=new C.eth.Contract(m,v.Z.nftContractAddress);await n.methods.createNft(t).send({from:q,gas:5e5}),await p.Z.post("".concat(f.Z.subscribeEndpoint),{datasetId:W,tokenId:t}),$(Math.random().toString()),D(!1)}catch(e){D(!1),h.Am.error("Unable to connect to metamask")}else D(!1),h.Am.error("Please install metamask")}catch(e){D(!1),h.Am.error("Please install metamask")}else try{if(void 0!==window.ethereum)try{D(!0);let e=await window.ethereum.request({method:"eth_requestAccounts"});z(e[0]);let t=Math.floor(1e6+9e6*Math.random()),n=new C.eth.Contract(y.r,v.Z.tokenContractAddress);await n.methods.transfer(v.Z.tokenContractAddress,C.utils.toWei(U.data.price.toString(),"ether")).send({from:q});let a=new C.eth.Contract(m,v.Z.nftContractAddress);await a.methods.createNft(t).send({from:q,gas:5e5}),await p.Z.post("".concat(f.Z.subscribeEndpoint),{datasetId:W,tokenId:t}),$(Math.random().toString()),D(!1)}catch(e){D(!1),h.Am.error("Unable to connect to metamask")}else D(!1),h.Am.error("Please install metamask")}catch(e){D(!1),h.Am.error("Please install metamask")}},Q=null==X?void 0:null===(e=X.data)||void 0===e?void 0:null===(t=e.similarDatasets)||void 0===t?void 0:t.map(e=>(0,a.jsx)(b.Z,{id:e._id,category:e.category,name:null==e?void 0:e.name,price:null==e?void 0:e.price},e._id)),Y=null==U?void 0:null===(n=U.data)||void 0===n?void 0:null===(l=n.description)||void 0===l?void 0:l.split(" ").slice(0,30).map(e=>{if(e.length>4)return(0,a.jsx)("button",{className:"btn tag-chip",title:"tags",children:e},Math.random().toString())}),ee=()=>{navigator.clipboard.writeText("".concat(f.Z.metadataapi,"/").concat(W)),h.Am.success("Copied to Clipboard")},et=()=>{var e;navigator.clipboard.writeText("".concat(f.Z.dataapi,"/").concat(W,"/").concat(null==J?void 0:null===(e=J.data)||void 0===e?void 0:e.subscriptionId)),h.Am.success("Copied to Clipboard")};return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsxs)(c.Z,{condition:!(null==J?void 0:J.isLoading)&&!(null==U?void 0:U.isLoading)&&!(null==X?void 0:X.isLoading),children:[(0,a.jsx)(c.Z,{condition:!U.error,children:(0,a.jsxs)(s.Z,{className:"mt-4",children:[(0,a.jsxs)("div",{className:"jumbotron",children:[(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(b.Z,{id:null==U?void 0:null===(d=U.data)||void 0===d?void 0:d._id,category:null==U?void 0:null===(k=U.data)||void 0===k?void 0:k.category,name:null==U?void 0:null===(M=U.data)||void 0===M?void 0:M.name,price:null==U?void 0:null===(Z=U.data)||void 0===Z?void 0:Z.price},null==U?void 0:null===(_=U.data)||void 0===_?void 0:_._id),(0,a.jsxs)(r.Z,{sm:6,md:8,lg:9,xl:10,children:[(0,a.jsx)("p",{className:"display-6 text-capitalize",children:null==U?void 0:null===(S=U.data)||void 0===S?void 0:S.name}),(0,a.jsx)("p",{className:"lead",children:null==U?void 0:null===(A=U.data)||void 0===A?void 0:A.category}),(0,a.jsx)(j.i,{initialValue:null==U?void 0:null===(I=U.data)||void 0===I?void 0:I.rating,allowHover:!1,allowFraction:!0,size:25,readonly:!0}),(0,a.jsx)(c.Z,{condition:null==J?void 0:null===(E=J.data)||void 0===E?void 0:E.isSubscribed,children:(0,a.jsx)(N(),{target:"_blank",passHref:!0,href:"https://sepolia.etherscan.io/nft/".concat(v.Z.nftContractAddress,"/").concat(null==J?void 0:null===(P=J.data)||void 0===P?void 0:P.tokenId),children:(0,a.jsx)("img",{style:{marginLeft:"1rem"},src:"https://cdn2.iconfinder.com/data/icons/nft-flat/64/NFT_Cryptocurrency_blockchain-90-256.png",alt:"NFT",height:50,width:50})})}),(0,a.jsx)("p",{className:"lead mt-3",children:null==U?void 0:null===(V=U.data)||void 0===V?void 0:V.description}),(0,a.jsx)("div",{children:Y})]})]}),(0,a.jsxs)(c.Z,{condition:!(null==J?void 0:null===(L=J.data)||void 0===L?void 0:L.isSubscribed),children:[(0,a.jsx)(c.Z,{condition:!B,children:(0,a.jsxs)("button",{className:"btn",onClick:K,children:["Subscribe ",(null==U?void 0:null===(F=U.data)||void 0===F?void 0:F.price)===0?"FREE":"".concat(null==U?void 0:null===(G=U.data)||void 0===G?void 0:G.price," LST"),(0,a.jsx)("i",{className:"fa-solid fa-circle-plus"})]})}),(0,a.jsx)(c.Z,{condition:B,children:(0,a.jsxs)("button",{disabled:!0,className:"btn",children:["Processing Transaction ",(0,a.jsx)("i",{className:"fas fa-circle-notch fa-spin"})]})}),(0,a.jsxs)("button",{className:"btn",onClick:ee,children:["Metadata API ",(0,a.jsx)("i",{className:"fa-solid fa-copy"})]})]}),(0,a.jsxs)(c.Z,{condition:null==J?void 0:null===(O=J.data)||void 0===O?void 0:O.isSubscribed,children:[(0,a.jsxs)("button",{disabled:!0,className:"btn",children:["Subscribed ",(0,a.jsx)("i",{className:"fa-solid fa-circle-check"})]}),(0,a.jsxs)("button",{className:"btn",onClick:et,children:["Data API ",(0,a.jsx)("i",{className:"fa-solid fa-copy"})]})]})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)("p",{className:"lead text-center text-white mb-4",children:"Similar Datasets"}),Q]})]})}),(0,a.jsx)(c.Z,{condition:U.error,children:(0,a.jsx)(w.Z,{})})]}),(0,a.jsx)(c.Z,{condition:(null==J?void 0:J.isLoading)||(null==U?void 0:U.isLoading)||(null==X?void 0:X.isLoading),children:(0,a.jsx)(u.Z,{})})]})};var Z=M},4051:function(e,t,n){"use strict";var a=n(4184),i=n.n(a),s=n(7294),o=n(6792),r=n(5893);let l=s.forwardRef(({bsPrefix:e,className:t,as:n="div",...a},s)=>{let l=(0,o.vE)(e,"row"),d=(0,o.pi)(),u=(0,o.zG)(),c=`${l}-cols`,p=[];return d.forEach(e=>{let t;let n=a[e];delete a[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let i=e!==u?`-${e}`:"";null!=t&&p.push(`${c}${i}-${t}`)}),(0,r.jsx)(n,{ref:s,...a,className:i()(t,l,...p)})});l.displayName="Row",t.Z=l},3773:function(e,t,n){"use strict";var a=n(5893),i=n(7294),s=function(){return(s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t,n){if(n||2==arguments.length)for(var a,i=0,s=t.length;i<s;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}function r(e){var t=e.size,n=void 0===t?25:t,i=e.SVGstrokeColor,o=e.SVGstorkeWidth,r=e.SVGclassName,l=e.SVGstyle;return a.jsx("svg",s({className:void 0===r?"star-svg":r,style:l,stroke:void 0===i?"currentColor":i,fill:"currentColor",strokeWidth:void 0===o?0:o,viewBox:"0 0 24 24",width:n,height:n,xmlns:"http://www.w3.org/2000/svg"},{children:a.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function l(e,t){switch(t.type){case"PointerMove":return s(s({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return s(s({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return s(s({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}function d(){return"undefined"!=typeof window&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||"undefined"!=typeof navigator&&navigator.maxTouchPoints>0}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),t.i=function(e){var t,n,u=e.onClick,c=e.onPointerMove,p=e.onPointerEnter,y=e.onPointerLeave,m=e.initialValue,v=void 0===m?0:m,f=e.iconsCount,h=void 0===f?5:f,b=e.size,x=void 0===b?40:b,T=e.readonly,g=void 0!==T&&T,w=e.rtl,j=void 0!==w&&w,k=e.customIcons,N=void 0===k?[]:k,C=e.allowFraction,M=void 0!==C&&C,Z=e.style,_=e.className,S=e.transition,A=e.allowHover,I=void 0===A||A,E=e.disableFillHover,P=void 0!==E&&E,V=e.fillIcon,L=void 0===V?null:V,F=e.fillColor,G=e.fillColorArray,O=e.fillStyle,R=e.fillClassName,W=e.emptyIcon,H=void 0===W?null:W,$=e.emptyColor,q=e.emptyStyle,z=e.emptyClassName,B=e.allowTitleTag,D=e.showTooltip,U=e.tooltipDefaultText,X=e.tooltipArray,J=void 0===X?[]:X,K=e.tooltipStyle,Q=e.tooltipClassName,Y=e.SVGclassName,ee=void 0===Y?"star-svg":Y,et=e.titleSeparator,en=e.SVGstyle,ea=e.SVGstorkeWidth,ei=void 0===ea?0:ea,es=e.SVGstrokeColor,eo=void 0===es?"currentColor":es,er=i.useReducer(l,{hoverIndex:0,valueIndex:0,ratingValue:v,hoverValue:null}),el=er[0],ed=el.ratingValue,eu=el.hoverValue,ec=el.hoverIndex,ep=el.valueIndex,ey=er[1];i.useEffect(function(){v&&ey({type:"MouseClick",payload:0})},[v]);var em=i.useMemo(function(){return M?2*h:h},[M,h]),ev=i.useMemo(function(){return v>em?0:M||Math.floor(v)===v?Math.round(v/h*100):2*Math.ceil(v)*10},[M,v,h,em]),ef=i.useMemo(function(){return(M?2*v-1:v-1)||0},[M,v]),eh=i.useCallback(function(e){return h%2!=0?e/2/10:e*h/100},[h]),eb=function(e){for(var t=e.clientX,n=e.currentTarget.children[0].getBoundingClientRect(),a=n.left,i=n.right,s=n.width,o=j?i-t:t-a,r=em,l=Math.round(s/em),d=0;d<=em;d+=1)if(o<=l*d){r=0===d&&o<l?0:d;break}var u=r-1;r>0&&(ey({type:"PointerMove",payload:100*r/em,index:u}),c&&eu&&c(eh(eu),u,e))},ex=function(e){eu&&(ey({type:"MouseClick",payload:eu}),u&&u(eh(eu),ec,e))},eT=i.useMemo(function(){if(I){if(P){var e=ed&&ed||ev;return eu&&eu>e?eu:e}return eu&&eu||ed&&ed||ev}return ed&&ed||ev},[I,P,eu,ed,ev]);i.useEffect(function(){J.length>em&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[J.length,em]);var eg=i.useCallback(function(e){return eu&&e[ec]||ed&&e[ep]||v&&e[ef]},[eu,ec,ed,ep,v,ef]),ew=i.useMemo(function(){return eu&&eh(eu)||ed&&eh(ed)||v&&eh(ev)},[eu,eh,ed,v,ev]);return a.jsxs("span",s({className:"style-module_starRatingWrap__q-lJC",style:{direction:"".concat(j?"rtl":"ltr")}},{children:[a.jsxs("span",s({className:"".concat("style-module_simpleStarRating__nWUxf"," ").concat(void 0===_?"react-simple-star-rating":_),style:s({cursor:g?"":"pointer"},Z),onPointerMove:g?void 0:eb,onPointerEnter:g?void 0:function(e){p&&p(e),d()&&eb(e)},onPointerLeave:g?void 0:function(e){d()&&ex(),ey({type:"PointerLeave"}),y&&y(e)},onClick:g?void 0:ex,"aria-hidden":"true"},{children:[a.jsx("span",s({className:"".concat("style-module_emptyIcons__Bg-FZ"," ").concat(void 0===z?"empty-icons":z),style:s({color:void 0===$?"#cccccc":$},q)},{children:o([],Array(h),!0).map(function(e,t){var n;return a.jsx(i.Fragment,{children:(null===(n=N[t])||void 0===n?void 0:n.icon)||H||a.jsx(r,{SVGclassName:ee,SVGstyle:en,SVGstorkeWidth:ei,SVGstrokeColor:eo,size:x})},t)})})),a.jsx("span",s({className:"".concat("style-module_fillIcons__6---A"," ").concat(void 0===R?"filled-icons":R),style:s(((t={})[j?"right":"left"]=0,t.color=eg(void 0===G?[]:G)||(void 0===F?"#ffbc0b":F),t.transition=void 0!==S&&S?"width .2s ease, color .2s ease":"",t.width="".concat(eT,"%"),t),O),title:void 0===B||B?"".concat(ew," ").concat(void 0===et?"out of":et," ").concat(h):void 0},{children:o([],Array(h),!0).map(function(e,t){var n;return a.jsx(i.Fragment,{children:(null===(n=N[t])||void 0===n?void 0:n.icon)||L||a.jsx(r,{SVGclassName:ee,SVGstyle:en,SVGstorkeWidth:ei,SVGstrokeColor:eo,size:x})},t)})}))]})),void 0!==D&&D&&a.jsx("span",s({className:"".concat("style-module_tooltip__tKc3i"," ").concat(void 0===Q?"react-simple-star-rating-tooltip":Q),style:s(((n={})[j?"marginRight":"marginLeft"]=20,n),K)},{children:(J.length>0?eg(J):ew)||(void 0===U?"Your Rate":U)}))]}))}}},function(e){e.O(0,[543,774,888,179],function(){return e(e.s=8535)}),_N_E=e.O()}]);