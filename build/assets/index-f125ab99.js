import{j as e,r as c}from"./vendor-e9654bfa.js";import{aK as g,aa as d,T as x,aE as h,aL as j,a0 as f,x as m,Q as P,Y as b,aM as k,aN as E}from"./index-5ad0a555.js";const p={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},L=r=>r?Object.values(r).reduce((a,t)=>{const n=t!=null&&t.group?g[t.group]:g.OTHER;return a[n]||(a[n]={}),a[n][t.id]=t,a},{}):{},O=({title:r,links:o,doNotShow:a,restricted:t,orientation:n,background:i,shadow:u=!0,mode:l})=>e.jsxs(d,{d:"column",children:[e.jsx(x,{size:4,align:"left",bottomGap:!0,children:r}),e.jsxs(d,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&a!==(s==null?void 0:s.id))return e.jsx(h,{background:i,orientation:n,restricted:t,mode:l,shadow:u,...s,color:s.color.length?s.color:"blue"},s.id)}),a!=="all"&&e.jsx(j,{})]})]}),T=()=>{const{visibleRoutes:r,allRoutes:o}=f.useMenu(),[a,t]=c.useState(null),[n,i]=c.useState(""),u=c.useMemo(()=>L(r),[r]);return r?e.jsx(m,{padding:"10px",children:e.jsxs(P,{children:[e.jsx(b,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:k,setResult:t,setExternalValue:i,validationCheck:!0,loadingOnType:!0}),!a&&e.jsx(d,{d:"column",gap:"24px",children:n.length===0&&Object.keys(u).sort((l,s)=>p[l]-p[s]).map(l=>{const s=u[l];return e.jsx(O,{title:l,doNotShow:"all",align:"left",links:s},l)})}),e.jsx(E,{pages:a})]})}):null};export{T as default};