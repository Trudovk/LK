import{r as t,j as l}from"./vendor-9cc634b6.js";import{_ as x,a0 as k,F as v,I as o,S,a1 as N,m as q,r as P}from"./index-c587e0f5.js";const g=e=>{const{surname:a,name:i,patronymic:r}=e;return{title:"Заявление на перевод",data:[{title:"ФИО",value:a+" "+i+" "+r,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:null,fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:null,fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Место работы после перевода",type:"select",fieldName:"employment",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное"},{id:1,title:"По совместительству"}]},{title:'Тип совместительства (если в предыдущем пункте выбрано "по совместительству")',type:"select",fieldName:"parttime_type",value:null,editable:!0,required:!1,width:"100%",items:[{id:0,title:"Внутреннее"},{id:1,title:"Внешнее"}]}]}},w=()=>({title:"Новое",data:[{title:"Подразделение",value:null,fieldName:"newPlaceOfWork",editable:!0,mask:!0,required:!0},{title:"Должность",value:null,fieldName:"newPost",editable:!0,mask:!0,required:!0},{title:"Ставка",type:"select",fieldName:"newRate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"0.25"},{id:1,title:"0.5"},{id:2,title:"1"}]}]}),F=()=>({title:"Старое:",data:[{title:"Подразделение",value:null,fieldName:"exPlaceOfWork",editable:!0,mask:!0,required:!0},{title:"Должность",value:null,fieldName:"exPost",editable:!0,mask:!0,required:!0},{title:"Ставка",type:"select",fieldName:"exRate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"0.25"},{id:1,title:"0.5"},{id:2,title:"1"}]}]}),A=()=>{var p;const[e,a]=t.useState(null),{data:{dataUserApplication:i}}=x.useApplications(),[r,n]=t.useState(!1),[f,b]=t.useState(!1),[u,m]=t.useState(null),[d,c]=t.useState(null),s=r??!1;return t.useEffect(()=>{i&&(a(g(i)),m(F()),c(w()))},[i]),l.jsx(k,{isDone:s,children:!!e&&!!a&&!!u&&!!d&&l.jsxs(v,{children:[l.jsx(o,{...e,collapsed:s,setData:a}),u&&l.jsx(o,{...u,collapsed:s,setData:m}),d&&l.jsx(o,{...d,collapsed:s,setData:c}),l.jsx(S,{text:"Отправить",action:()=>N(q.DISMISSAL,[e,u,d],b,n),isLoading:f,completed:r,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:P(e)&&(((p=e.optionalCheckbox)==null?void 0:p.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
