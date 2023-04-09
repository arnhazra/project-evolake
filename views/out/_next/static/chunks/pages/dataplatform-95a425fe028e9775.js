(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{6414:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dataplatform",function(){return s(1306)}])},5930:function(e,t,s){"use strict";s.d(t,{Z:function(){return b}});var a=s(5893),r=s(1555),n=s(4184),l=s.n(n),o=s(7294),i=s(6792),c=s(6611),d=s(9602);let u=o.forwardRef(({bsPrefix:e,className:t,variant:s,as:r="img",...n},o)=>{let c=(0,i.vE)(e,"card-img");return(0,a.jsx)(r,{ref:o,className:l()(s?`${c}-${s}`:c,t),...n})});u.displayName="CardImg";var m=s(9059);let p=o.forwardRef(({bsPrefix:e,className:t,as:s="div",...r},n)=>{let c=(0,i.vE)(e,"card-header"),d=(0,o.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,a.jsx)(m.Z.Provider,{value:d,children:(0,a.jsx)(s,{ref:n,...r,className:l()(t,c)})})});p.displayName="CardHeader";let h=(0,d.Z)("h5"),f=(0,d.Z)("h6"),x=(0,c.Z)("card-body"),v=(0,c.Z)("card-title",{Component:h}),j=(0,c.Z)("card-subtitle",{Component:f}),g=(0,c.Z)("card-link",{Component:"a"}),Z=(0,c.Z)("card-text",{Component:"p"}),N=(0,c.Z)("card-footer"),E=(0,c.Z)("card-img-overlay"),C=o.forwardRef(({bsPrefix:e,className:t,bg:s,text:r,border:n,body:o,children:c,as:d="div",...u},m)=>{let p=(0,i.vE)(e,"card");return(0,a.jsx)(d,{ref:m,...u,className:l()(t,p,s&&`bg-${s}`,r&&`text-${r}`,n&&`border-${n}`),children:o?(0,a.jsx)(x,{children:c}):c})});C.displayName="Card",C.defaultProps={body:!1};var T=Object.assign(C,{Img:u,Title:v,Subtitle:j,Body:x,Link:g,Text:Z,Header:p,Footer:N,ImgOverlay:E}),w=s(1664),y=s.n(w);let S=e=>{let{id:t,category:s,name:n,price:l}=e;return(0,a.jsx)(r.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,a.jsx)(y(),{href:"/viewdataset?id=".concat(t),children:(0,a.jsxs)(T,{children:[(0,a.jsx)(T.Header,{className:"pt-3",children:(0,a.jsx)("div",{className:"".concat(s.toLowerCase(),"Container pt-4")})}),(0,a.jsxs)(T.Footer,{className:"pt-4 pb-2 ps-4 ".concat(s.toLowerCase(),"Color"),children:[(0,a.jsx)("div",{className:"nameContainer",children:(0,a.jsx)("p",{className:"lead",children:n})}),(0,a.jsx)("p",{className:"smalltext",children:s})]})]})})})};var b=S},5912:function(e,t){"use strict";var s,a;(a=s||(s={})).POST="POST",a.GET="GET",a.PATCH="PATCH",a.PUT="PUT",a.DELETE="DELETE",a.OPTIONS="OPTIONS",t.Z=s},1627:function(e,t,s){"use strict";var a=s(6154),r=s(8767),n=s(1163),l=s(6501),o=s(8893);t.Z=function(e,t,s,i,c){let d=(0,n.useRouter)(),u=async()=>{let{data:e}=await (0,a.Z)({method:s,url:t,data:i});return e},{error:m,data:p,isLoading:h}=(0,r.useQuery)([e,i,c],()=>u(),{enabled:!0,refetchOnWindowFocus:!1,retry:3,retryDelay:2500,onError(t){t.response&&401===t.response.status&&(localStorage.removeItem("accessToken"),d.push("/")),l.Am.error("".concat(o.Z.ToastError," fetching ").concat(e))}});return{error:m,data:p,isLoading:h}}},1306:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var a=s(5893),r=s(7294),n=s(682),l=s(4051),o=s(1555),i=s(4119),c=s(1358),d=s(9548),u=s(7891),m=s(5309),p=s(5930),h=s(1627),f=s(9063),x=s(5912),v=s(6154),j=s(1163),g=s(6501),Z=s(8893);let N=()=>{let[e,t]=(0,r.useState)([]),[s,a]=(0,r.useState)(!1),n=(0,j.useRouter)(),[{datasetRequestState:l}]=(0,r.useContext)(m.k);return(0,r.useEffect)(()=>{(async()=>{try{let{data:s}=await (0,v.Z)({method:x.Z.POST,url:f.Z.dataplatformEndpoint,data:l});t([...e,...s.datasets]),a(!0)}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),n.push("/")),a(!0),g.Am.error("".concat(Z.Z.ToastError," fetching data platform"))}})()},[l]),{datasets:e,isLoaded:s}},E=()=>{var e,t,s;let[{datasetRequestState:v},j]=(0,r.useContext)(m.k),g=(0,h.Z)("filters",f.Z.datasetFiltersEndpoint,x.Z.POST),Z=N(),E=null==g?void 0:null===(e=g.data)||void 0===e?void 0:null===(t=e.filterCategories)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{className:"options",value:e,children:e},e)),C=null==Z?void 0:null===(s=Z.datasets)||void 0===s?void 0:s.map(e=>(0,a.jsx)(p.Z,{id:e._id,category:e.category,name:e.name,price:e.price},e._id)),T=()=>{let e=v.offset+24;j("setDatasetRequestState",{offset:e}),window.scrollTo(0,document.body.scrollHeight)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(u.Z,{condition:!(null==g?void 0:g.isLoading)&&Z.isLoaded,children:(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(l.Z,{className:"g-2 mt-4",children:[(0,a.jsx)(o.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(i.Z,{controlId:"floatingSelectGrid",label:"Select Filter Category",children:(0,a.jsx)(c.Z.Select,{defaultValue:v.selectedFilter,onChange:e=>j("setDatasetRequestState",{selectedFilter:e.target.value}),children:E})})}),(0,a.jsx)(o.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(i.Z,{controlId:"floatingSelectGrid",label:"Sort By",children:(0,a.jsxs)(c.Z.Select,{defaultValue:v.selectedSortOption,onChange:e=>j("setDatasetRequestState",{selectedSortOption:e.target.value}),children:[(0,a.jsx)("option",{className:"options",value:"-_id",children:"Dataset Freshness"},"freshness"),(0,a.jsx)("option",{className:"options",value:"name",children:"Name Ascending"},"nameAscending"),(0,a.jsx)("option",{className:"options",value:"-name",children:"Name Descending"},"nameDescending"),(0,a.jsx)("option",{className:"options",value:"price",children:"Price Ascending"},"priceAscending"),(0,a.jsx)("option",{className:"options",value:"-price",children:"Price Descending"},"priceDescending")]})})})]}),(0,a.jsx)(l.Z,{className:"mt-4 mb-4",children:C}),(0,a.jsx)(u.Z,{condition:Z.datasets.length%24==0,children:(0,a.jsx)("div",{className:"text-center",children:(0,a.jsxs)("button",{className:"btn",onClick:T,children:["Load More",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-down"})]})})})]})}),(0,a.jsx)(u.Z,{condition:g.isLoading||!Z.isLoaded,children:(0,a.jsx)(d.Z,{})})]})};var C=E},4051:function(e,t,s){"use strict";var a=s(4184),r=s.n(a),n=s(7294),l=s(6792),o=s(5893);let i=n.forwardRef(({bsPrefix:e,className:t,as:s="div",...a},n)=>{let i=(0,l.vE)(e,"row"),c=(0,l.pi)(),d=(0,l.zG)(),u=`${i}-cols`,m=[];return c.forEach(e=>{let t;let s=a[e];delete a[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s;let r=e!==d?`-${e}`:"";null!=t&&m.push(`${u}${r}-${t}`)}),(0,o.jsx)(s,{ref:n,...a,className:r()(t,i,...m)})});i.displayName="Row",t.Z=i}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6414)}),_N_E=e.O()}]);