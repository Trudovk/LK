import{r as a,n as P,c4 as y,j as g}from"./vendor-c0388033.js";import{av as q,s as W,aE as A,B as E,F as R,I as B,S as O,k as I,c as U,at as $,aF as G}from"./index-7b661082.js";import{s as H}from"./send-hr-form-work-transfer-ddb8d092.js";const L=(s,e,l,t,o,r,n,d,c,f,u,h,p,N,m,S)=>{const{surname:v,name:x,patronymic:b}=s;return{title:"Заявление на перевод",data:[{title:"ФИО",value:v+" "+x+" "+b,fieldName:"fio",type:"simple-text",visible:!0},{title:"",type:"simple-text",value:e[l].jobGuid.toString(),fieldName:"jobGuid",visible:!1},{title:"Текущее место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:e[l].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:e[l].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Cтавка",type:"simple-text",value:e[l].rate.toString(),fieldName:"currentRate",visible:!0},{title:"Новое место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Подразделение",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:d,width:"100%",suggestions:S,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения",onChange:i=>{c(i)}},{title:"Должность",value:r,fieldName:"newPost",editable:!0,mask:!0,required:!0,onChange:i=>{n(i)}},{title:"Тип занятости",type:"select",fieldName:"employment",value:t,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное место работы"},{id:1,title:"По совместительству"}],onChange:i=>{o(i),i.title=="По совместительству"&&f.title=="1"&&u(null)}},{title:"Ставка",type:"select",fieldName:"newRate",value:f,editable:!0,required:!0,width:"100%",items:(t==null?void 0:t.title)=="По совместительству"?[{id:1,title:"0.5"},{id:2,title:"0.25"}]:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}],onChange:i=>{u(i)}},{title:"При устройстве по совместительству ставка не может превышать 0.5",type:"text-warning",fieldName:"PartTime",value:null,visible:(t==null?void 0:t.title)=="По совместительству",required:!1,width:"100%"},{title:"Тип совместительства",type:"select",fieldName:"parttime_type",value:N,editable:!0,required:(t==null?void 0:t.title)=="По совместительству",specialType:"PartTime",width:"100%",items:[{id:0,title:"Внутреннее"},{id:1,title:"Внешнее"}],onChange:i=>{m(i)}},{title:"Дата перевода",type:"date",value:h,fieldName:"transferDate",editable:!0,mask:!0,required:!0,minValueInput:q(0),onChange:i=>{p(i)}}]}},M=s=>{const e=s.find(l=>l.fieldName==="employment");return e!=null&&e.value&&(e==null?void 0:e.value).title==="По совместительству"?{reason:"PartTime"}:{reason:null}},Y=()=>{var D;const[s,e]=a.useState(null),l=P($),{data:{dataUserApplication:t,dataWorkerApplication:o}}=W.useApplications(),{loading:r}=A.useBufferWorkTransfer(),[n,d]=a.useState(!1),[c,f]=a.useState(null),[u,h]=a.useState(null),[p,N]=a.useState(null),[m,S]=a.useState(null),[v,x]=a.useState(null),[b,i]=a.useState(null),[k,C]=a.useState({}),F=P(G),T=n??!1,{id:j}=y(),w=+j;return a.useEffect(()=>{s&&t&&C(M(s.data))},[s]),a.useEffect(()=>{t&&o&&!r&&e(L(t,o,w,u,h,p,N,m,S,v,x,b,i,c,f,l))},[t,w,r,u,p,m,v,b,c]),g.jsx(E,{isDone:T,children:!!s&&!!e&&g.jsxs(R,{children:[g.jsx(B,{...s,collapsed:T,setData:e,specialFieldsNameConfig:k}),g.jsx(O,{text:"Отправить",action:()=>H(I.HOLIDAY_WORK,[s],d,F),isLoading:r,completed:n,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:T,isActive:U(s)&&(((D=s.optionalCheckbox)==null?void 0:D.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
