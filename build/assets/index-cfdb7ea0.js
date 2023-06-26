import{r as l,j as s}from"./vendor-292fea82.js";import{a3 as p,a0 as m,a1 as c,F as f,I as x,S as y,a2 as b,n as F,t as S}from"./index-ddc703de.js";const g=e=>{const{surname:t,name:a,patronymic:i}=e;return{title:"Заявление о предоставлении отпуска",data:[{title:"ФИО",value:t+" "+a+" "+i,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:null,fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:null,fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Вид отпуска",type:"select",fieldName:"holiday_type",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Ежегодный (основной) оплачиваемый отпуск"},{id:1,title:"Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"},{id:2,title:"Отпуск без сохранения заработной платы"},{id:3,title:"Отпуск по беременности и родам (декретный отпуск)"},{id:4,title:"Отпуск по уходу за ребенком"}]},{title:"Период отпуска:",type:"date-interval",value:["",""],fieldName:"holiday_dates",editable:!0,mask:!0,required:!0,minValueInput:p(5)},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],required:!0,fieldName:"holidayFiles",maxFiles:10}}},A=()=>{var o;const[e,t]=l.useState(null),{data:{dataUserApplication:a}}=m.useApplications(),[i,u]=l.useState(!1),[d,n]=l.useState(!1),r=i??!1;return l.useEffect(()=>{a&&t(g(a))},[a]),s.jsx(c,{isDone:r,children:!!e&&!!t&&s.jsxs(f,{children:[s.jsx(x,{...e,collapsed:r,setData:t}),s.jsx(y,{text:"Отправить",action:()=>b(F.DISMISSAL,[e],n,u),isLoading:d,completed:i,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:S(e)&&(((o=e.optionalCheckbox)==null?void 0:o.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
