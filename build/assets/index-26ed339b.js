import{r as t,j as i}from"./vendor-1714f5a3.js";import{bo as n,Q as c,R as f,F as b,I as g,S as F,V as S,k as x,q as v}from"./index-a5eecfde.js";import{g as N,a as h}from"./get-method-obtaining-fields-087d310a.js";import{g as j}from"./get-student-subdivisions-5a2f2c8d.js";import{g as q}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const A=e=>({title:"Справка-вызов",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...N(),...j(e),...h(),{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:n},{title:"Место предоставления справки",fieldName:"place_reference",value:null,editable:!0,required:!0},{title:"Период времени - с:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),B=()=>{const[e,l]=t.useState(null),[r,o]=t.useState(!1),[d,p]=t.useState(!1),[u,m]=t.useState({}),a=r??!1,{data:{dataUserApplication:s}}=c.useApplications();return t.useEffect(()=>{s&&l(A(s))},[s]),t.useEffect(()=>{e&&s&&m(q(e.data))},[e]),i.jsx(f,{isDone:a,children:!!e&&!!l&&i.jsxs(b,{children:[i.jsx(g,{...e,collapsed:a,setData:l,specialFieldsName:u}),i.jsx(F,{text:a?"Отправлено":"Отправить",action:()=>S(x.SPRVIZOV,[e],p,o),isLoading:d,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:v(e,Object.values(u)),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{B as default};
