import{r as n,j as p}from"./vendor-9cc634b6.js";import{a as v,_ as b,a0 as N,F as k,I as x,S as h,r as j}from"./index-c587e0f5.js";import{e as S}from"./index-476a301e.js";const g=async(a,s,i,u)=>{i(!0);const m=s.map(l=>{if(Array.isArray(l.data[0])){const e=l.data.map(o=>Object.assign({},...o==null?void 0:o.map(t=>{var f,y;const c={};return t!=null&&t.fieldName&&(c[t==null?void 0:t.fieldName]=(f=t==null?void 0:t.value)!=null&&f.title?(y=t==null?void 0:t.value)==null?void 0:y.title:t==null?void 0:t.value),c}))),r={};return r[a]=JSON.stringify(e),r}else return l.data.map(e=>{const r={};return e!=null&&e.fieldName&&(r[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(r[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(o=>o.title))),r})}).flat(),d=Object.assign({},...m);try{const l={Title:d.reason,Employee:a,WorkDays:[{DateOfEmployment:d.holiday_work_date,DayOfRest:d.extra_holiday_date}]};await S.postApplicationFx(l),i(!1),u(!0)}catch{i(!1),v.evokePopUpMessage({message:"Форма отправлена успешно",type:"success",time:3e4})}},_=a=>{const s=a.find(u=>u.fieldName==="compensation");let i=null;return s!=null&&s.value&&(s==null?void 0:s.value).title==="Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"&&(i="Compensation"),{compensation:i}},q=a=>{const{surname:s,name:i,patronymic:u}=a;return{title:"Заявление о привлечении к работе в выходной день",data:[{title:"ФИО",value:s+" "+i+" "+u,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:"Лаборант",fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:"Кафедра информационных систем и технологий",fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Дата привлечения к работе",type:"date",value:null,fieldName:"holiday_work_date",editable:!0,mask:!0,required:!0},{title:"Количество часов",type:"number",value:null,fieldName:"holiday_work_hours",editable:!0,mask:!0,required:!0,minValueInput:1,maxValueInput:8},{title:"Причина",value:"Служебная необходимость",fieldName:"reason",editable:!0,mask:!0,required:!0},{title:"Компенсация",type:"select",fieldName:"compensation",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Оплатить работу в выходной день в двойном размере"},{id:1,title:"Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"}]},{title:"Дата дополнительного дня отдыха",type:"date",value:"",fieldName:"extra_holiday_date",editable:!0,mask:!0,required:!1,specialType:"Compensation"},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}]}},O=()=>{var t;const[a,s]=n.useState(null),{data:{dataUserApplication:i}}=b.useApplications(),[u,m]=n.useState(!1),[d,l]=n.useState(!1),[e,r]=n.useState({}),o=u??!1;return n.useEffect(()=>{i&&s(q(i))},[i]),n.useEffect(()=>{a&&i&&r(_(a.data))},[a]),p.jsx(N,{isDone:o,children:!!a&&!!s&&p.jsxs(k,{children:[p.jsx(x,{...a,collapsed:o,setData:s,specialFieldsName:e}),p.jsx(h,{text:"Отправить",action:()=>g("1b131564-041c-11e2-92bb-18f46ae63d1e",[a],l,m),isLoading:d,completed:u,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:j(a)&&(((t=a.optionalCheckbox)==null?void 0:t.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{O as default};
