import{j as a,r as p,Z as j}from"./vendor-561dac3a.js";import{b2 as x,H as g,T as f,aY as b,b3 as m,az as P,a7 as k,V as O,P as T,aw as E,b4 as L,b5 as R,Y as S}from"./index-7cc4f467.js";const h={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},v=(r,o)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&o?e(o):!0).reduce((e,t)=>{const n=t!=null&&t.group?x[t.group]:x.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},w=({title:r,links:o,doNotShow:l,restricted:e,orientation:t,background:n,shadow:c=!0,mode:i})=>a.jsxs(g,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&l!==(s==null?void 0:s.id))return a.jsx(b,{background:n,orientation:t,restricted:e,mode:i,shadow:c,...s,color:s.color.length?s.color:"blue"},s.id)}),l!=="all"&&a.jsx(m,{})]})]}),y=()=>{const{visibleRoutes:r,allRoutes:o}=P.useMenu(),[l,e]=p.useState(null),[t,n]=p.useState(""),c=j(S.peTeacher),i=p.useMemo(()=>v(r,c),[r,c]),{data:{user:s}}=k.useUser();return r?a.jsx(O,{padding:"10px",children:a.jsxs(T,{children:[a.jsx(E,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:L,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!l&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(i).sort((u,d)=>h[u]-h[d]).map(u=>{const d=i[u];return a.jsx(w,{title:u==="Кадровая среда"&&(s==null?void 0:s.user_status)==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:d},u)})}),a.jsx(R,{pages:l})]})}):null};export{y as default};
