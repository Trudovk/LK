import{r as u,j as o,a3 as f,aQ as g}from"./vendor-292fea82.js";import{x,Q as E,R as j,U as m,E as P,V as L,H as U,X as d,Y as M,P as S,i as T,Z as k}from"./index-ddc703de.js";const O=({title:t,blocks:a,isStaff:s})=>{const[e,r]=u.useState(null);return o.jsxs(x,{children:[o.jsx(E,{placeholder:`Поиск по ${t}`,whereToSearch:a,searchEngine:j,setResult:r,validationCheck:!0}),o.jsx(m,{blocks:e??a,isStaff:s}),(e==null?void 0:e.length)===0&&o.jsx(P,{text:"Ничего не найдено"})]})},_=(t,a)=>t.reduce((s,e)=>{const{id:r,title:c,content:i,visible:l}=e;return(l==="staff"&&a||l==="student"&&!a||l==="all")&&s.push({id:r,title:c,content:o.jsx(O,{blocks:i,isStaff:a,title:c})}),s},[]),C=()=>{var h;const{allRoutes:t}=L.useMenu(),{replace:a}=f(),s=(h=g(k))==null?void 0:h.params,{data:e}=U.useUser(),r=u.useMemo(()=>{var n;return((n=e==null?void 0:e.user)==null?void 0:n.user_status)==="staff"},[e]),c=u.useMemo(()=>_(Object.values(d),r),[d,r]),i=u.useMemo(()=>s!=null&&s.infoType?c.findIndex(({id:n})=>n===s.infoType)??0:0,[]),l=u.useCallback(n=>{var p;n&&a(`${((p=t==null?void 0:t["helpful-information"])==null?void 0:p.path)??M}/${n}`)},[t]);return o.jsx(S,{children:o.jsx(T,{pages:c,currentPage:i,onChangePage:l,appearance:!1})})};export{C as default};
