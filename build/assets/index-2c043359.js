import{r as o,j as e,L as r,at as l}from"./vendor-2324f29b.js";import{cx as c,a as x,y as p,z as g,cy as h,B as t,cz as d,r as f,L as j,x as m,a0 as L}from"./index-386db3e9.js";const C=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>L.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(g,{topRightCornerElement:e.jsx(r,{to:h,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(d,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{C as default};
