import{r as i,j as n,ag as h,b6 as x}from"./vendor-e9654bfa.js";import{J as f,Y as j,Z as E,_ as m,E as P,a0 as L,O as M,a1 as g,a2 as O,x as S,Q as T,n as U,a3 as _}from"./index-5ad0a555.js";const k=({title:t,blocks:a,isStaff:s})=>{const[e,o]=i.useState(null);return n.jsxs(f,{children:[n.jsx(j,{placeholder:`Поиск по ${t}`,whereToSearch:a,searchEngine:E,setResult:o,validationCheck:!0}),n.jsx(m,{blocks:e??a,isStaff:s}),(e==null?void 0:e.length)===0&&n.jsx(P,{text:"Ничего не найдено"})]})},b=(t,a)=>t.reduce((s,e)=>{const{id:o,title:c,content:u,visible:l}=e;return(l==="staff"&&a||l==="student"&&!a||l==="all")&&s.push({id:o,title:c,content:n.jsx(k,{blocks:u,isStaff:a,title:c})}),s},[]),R=()=>{var p;const{allRoutes:t}=L.useMenu(),{replace:a}=h(),s=(p=x(_))==null?void 0:p.params,{data:e}=M.useUser(),o=i.useMemo(()=>{var r;return((r=e==null?void 0:e.user)==null?void 0:r.user_status)==="staff"},[e]),c=i.useMemo(()=>b(Object.values(g),o),[g,o]),u=i.useMemo(()=>s!=null&&s.infoType?c.findIndex(({id:r})=>r===s.infoType)??0:0,[]),l=i.useCallback(r=>{var d;r&&a(`${((d=t==null?void 0:t["helpful-information"])==null?void 0:d.path)??O}/${r}`)},[t]);return n.jsx(S,{padding:"10px",children:n.jsx(T,{children:n.jsx(U,{pages:c,currentPage:u,onChangePage:l,appearance:!1})})})};export{R as default};