import{r as t,j as s}from"./vendor-2324f29b.js";import{cM as u,a6 as m,aw as f,F as g,I as S,S as b,aA as F,d as x,U as A}from"./index-96298632.js";import{g as h,a as N}from"./get-method-obtaining-fields-de6a3bf9.js";import{g as v}from"./get-student-subdivisions-5a2f2c8d.js";import{g as O}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const j=[{id:0,title:"в Фонд пенсионного и социального страхования Российской Федерации (СФР)"},{id:1,title:"в Управление социальной защиты населения (УСЗН)"},{id:2,title:"в военный комиссариат"},{id:3,title:"в Многофункциональный центр (МФЦ)"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в банк"},{id:6,title:"в Федеральную службу труда и занятости"},{id:7,title:"в отдел/орган опеки и попечительства"},{id:8,title:"в социальное учреждение"},{id:9,title:"по месту требования"}],E=e=>({title:"Справка в социальные учреждения",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...h(),...v(e),...N(),{title:"Место предоставления справки",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:j},{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:u},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),w=()=>{const[e,l]=t.useState(null),[o,r]=t.useState(!1),[p,n]=t.useState(!1),[d,c]=t.useState({}),i=o??!1,{data:{dataUserApplication:a}}=m.useApplications();return t.useEffect(()=>{a&&l(E(a))},[a]),t.useEffect(()=>{e&&a&&c(O(e.data))},[e]),s.jsx(f,{isDone:i,children:!!e&&!!l&&s.jsxs(g,{children:[s.jsx(S,{...e,collapsed:i,setData:l,specialFieldsNameConfig:d}),s.jsx(b,{text:i?"Отправлено":"Отправить",action:()=>F(x.STATUS_SOBES,[e],n,r),isLoading:p,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:A(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
