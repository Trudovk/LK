import{r as a,j as i}from"./vendor-831b4923.js";import{ah as n,ar as p,F as c,I as m,S as f,ax as x,d as b,N as F}from"./index-911082d8.js";const S=[{id:0,title:"по собственному желанию"},{id:1,title:"за академическую неуспеваемость"},{id:2,title:"за неоплату обучения"},{id:3,title:"в связи с переводом"},{id:4,title:"отчисление с расторжением договора"}],N=e=>({title:"Отчисление по инициативе обучающегося",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Причина отчисления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:S},{title:"Дата отчисления c:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),A=()=>{const[e,s]=a.useState(null),[r,o]=a.useState(!1),[d,u]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=n.useApplications();return a.useEffect(()=>{l&&s(N(l))},[l]),i.jsx(p,{isDone:t,children:!!e&&!!s&&i.jsxs(c,{children:[i.jsx(m,{...e,collapsed:t,setData:s}),i.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(b.CRS_EXPULSION,[e],u,o),isLoading:d,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:F(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
