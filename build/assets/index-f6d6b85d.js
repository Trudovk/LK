import{r as e,j as t}from"./vendor-e9654bfa.js";import{x as n,aR as r,G as c,T as x,M as m,f as u,S as p}from"./index-5ad0a555.js";const g=()=>{const[s,a]=e.useState(""),[l]=e.useState(!1),[i,o]=e.useState(!1);return t.jsx(n,{background:"var(--theme)",children:t.jsxs(r,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",children:[t.jsx(c,{}),t.jsx(x,{size:4,align:"left",children:"Забыли пароль ЕУЗ"}),t.jsx(m,{type:"info",title:"Восстановление доступа через ЕУЗ",children:"Данный сервис позволит сбросить пароль для единой учетной записи (ЕУЗ). Ссылка для сброса пароля будет отправлена на вашу почту. Восстановление доступа к личному кабинету возможно только в том случае, если в аккаунте был указан адрес электронной почты и вы заходили в него по ЕУЗ. В остальных случаях обращайтесь на почту help@mospolytech.ru, при этом укажите в сообщении свои ФИО полностью, дату рождения, место работы или учебную группу."}),t.jsx(u,{value:s,setValue:a,title:"E-mail, указанный в личном кабинете:",placeholder:"E-mail, указанный в личном кабинете:"}),t.jsx(p,{text:"Восстановить доступ",action:()=>null,isLoading:l,completed:i,setCompleted:o,isActive:!!s.length})]})})};export{g as default};