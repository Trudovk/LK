import{r as a,j as s}from"./vendor-831b4923.js";import{ah as d,ar as n,F as c,I as m,S as f,ax as x,d as A,N as F}from"./index-911082d8.js";const S=e=>({title:"Предоставление каникул в связи с окончанием университета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Срок предоставления каникул c",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[e,i]=a.useState(null),[r,o]=a.useState(!1),[p,u]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=d.useApplications();return a.useEffect(()=>{l&&i(S(l))},[l]),s.jsx(n,{isDone:t,children:!!e&&!!i&&s.jsxs(c,{children:[s.jsx(m,{...e,collapsed:t,setData:i}),s.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(A.CRS_VACATIONS,[e],u,o),isLoading:p,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:F(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
