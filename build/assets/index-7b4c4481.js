import{r as o,j as e,L as r,at as l}from"./vendor-f1fdae2f.js";import{cv as c,a as x,v as p,w as g,cw as h,B as t,cx as d,r as f,N as j,bE as m,_ as k}from"./index-4e411d46.js";const v=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(g,{topRightCornerElement:e.jsx(r,{to:h,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(d,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{v as default};
