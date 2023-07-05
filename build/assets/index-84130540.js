import{j as i,o as p,F as d}from"./vendor-9cc634b6.js";import{a9 as n,M as a,aa as o,f as u,_ as x,ab as f,W as h,ac as m,P as g,x as w,ad as j}from"./index-c587e0f5.js";const y=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,width:"320px"},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(n).map((t,e)=>({id:e.toString(),title:t}))??[]],render:t=>{const e=C(t);return i.jsx(a,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"},{title:"Файлы",align:"center",field:"files_output",priority:"five",width:"150px",render:t=>!!t.length&&i.jsx(o,{onClick:()=>F(t),text:"Скачать",background:"transparent",textColor:u.green.main,width:"100%"})}],C=t=>{switch(t){case"На рассмотрении":return n.pending;case"Принято в работу":return n.pending;case"Получено":return n.ready;default:return t}},F=t=>{t.map(e=>{const r=document.createElement("a");r.href=e.url,r.download=e.name,r.target="_blank",r.click(),r.remove()})},A=({isTeachers:t})=>{const{data:{listApplication:e,dataUserApplication:r},error:s}=x.useApplications(),{open:l}=f(),c=()=>{l(i.jsx(j,{isTeachers:t,currentFormEducation:r==null?void 0:r.educationForm}),"Создать заявку")};return i.jsx(h,{load:()=>m.getApplicationsFx(),loading:!e,error:s,data:e,children:i.jsxs(g,{topRightCornerElement:i.jsx(o,{onClick:c,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:i.jsx(p,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[i.jsx(a,{type:"info",title:"Информация",icon:i.jsx(d,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),i.jsx(w,{loading:!e,columns:y(),data:e,maxOnPage:7})]})})};export{A as T};
