import{r as i,j as n,T as g,bZ as x}from"./vendor-f1fdae2f.js";import{ab as f,ai as j,aj as m,ak as E,G as P,al as L,V as T,am as h,an as k,v as M,w as S,a1 as U,ao as b}from"./index-c9a56a5b.js";const O=({title:a,blocks:t,isStaff:s})=>{const[e,o]=i.useState(null);return n.jsxs(f,{children:[n.jsx(j,{placeholder:`Поиск по ${a}`,whereToSearch:t,searchEngine:m,setResult:o,validationCheck:!0}),n.jsx(E,{blocks:e??t,isStaff:s}),(e==null?void 0:e.length)===0&&n.jsx(P,{text:"Ничего не найдено"})]})},_=(a,t)=>a.reduce((s,e)=>{const{id:o,title:c,content:u,visible:l}=e;return(l==="staff"&&t||l==="student"&&!t||l==="all")&&s.push({id:o,title:c,content:n.jsx(O,{blocks:u,isStaff:t,title:c})}),s},[]),F=()=>{var p;const{allRoutes:a}=L.useMenu(),{replace:t}=g(),s=(p=x(b))==null?void 0:p.params,{data:e}=T.useUser(),o=i.useMemo(()=>{var r;return((r=e==null?void 0:e.user)==null?void 0:r.user_status)==="staff"},[e]),c=i.useMemo(()=>_(Object.values(h),o),[h,o]),u=i.useMemo(()=>s!=null&&s.infoType?c.findIndex(({id:r})=>r===s.infoType)??0:0,[]),l=i.useCallback(r=>{var d;r&&t(`${((d=a==null?void 0:a["helpful-information"])==null?void 0:d.path)??k}/${r}`)},[a]);return n.jsx(M,{padding:"10px",children:n.jsx(S,{children:n.jsx(U,{pages:c,currentPage:u,onChangePage:l,appearance:!1})})})};export{F as default};