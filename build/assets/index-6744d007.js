import{r,j as y}from"./vendor-f1fdae2f.js";import{aB as j,aC as N,ay as _,a5 as h,aD as A,w as k,av as C,F as E,I as O,S as F,d as I,Q as T}from"./index-c9a56a5b.js";import{g as B,a as w}from"./get-default-subdivision-17957fb0.js";const R=async(a,i,s)=>{s(!1);const b=i.map(f=>{if(Array.isArray(f.data[0])){const e=f.data.map(u=>Object.assign({},...u==null?void 0:u.map(t=>{var x,d;const c={};return t!=null&&t.fieldName&&(c[t==null?void 0:t.fieldName]=(x=t==null?void 0:t.value)!=null&&x.title?(d=t==null?void 0:t.value)==null?void 0:d.title:t==null?void 0:t.value),c}))),n={};return n[a]=JSON.stringify(e),n}else return f.data.map(e=>{const n={};return e!=null&&e.fieldName&&(n[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(n[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(u=>u.title))),n})}).flat(),o=Object.assign({},...b),p=await j.sendBufferMedicalExaminationFx({employeeGuid:o.jobGuid,start:o.extra_examination_date,end:o.isRetirement?o.extra_examination_date_2:o.extra_examination_date});p!=null&&p.isError&&s(!0)},G=a=>{const i=a.find(s=>s.fieldName==="isRetirement");return i!=null&&i.value&&i!=null&&i.value?{reason:"Compensation2"}:{reason:null}},W=(a,i,s,b,o,p,f,e,n,u)=>{const{surname:t,name:c,patronymic:x,subdivisions:d}=a,l=s?new Date(s):new Date,D=n||"",v=f||B(d),g=new Date(l.getTime()+24*60*60*1e3);return N(D)==="true"&&l.getDay()===5?g.setDate(l.getDate()+1):(l.getDay()===5||l.getDay()===6||l.getDay()===0)&&g.setDate(l.getDate()+(8-l.getDay())%7),{title:"Заявление о диспансеризации",data:[{title:"ФИО",value:t+" "+c+" "+x,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделение/должность",value:v,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:w(d),isSpecificSelect:!0,onChange:m=>{e(m),u(m.id)}},{title:"Дата прохождения диспансеризации",type:"date",value:s,fieldName:"extra_examination_date",editable:!0,onChange:m=>{b(m)},mask:!0,required:!0,maxValueLength:1,minValueInput:_(0)},{title:"Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого",type:"hr-checkbox",value:o||"",fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:m=>{p(m)}},{title:"Второй день отдыха",type:"date",value:g.toISOString().substr(0,10),fieldName:"extra_examination_date_2",editable:!1,mask:!0,required:!1,specialType:"Compensation2",maxValueLength:1},{title:"",type:"simple-text",value:D,fieldName:"jobGuid",visible:!1}]}},M=()=>{var m;const[a,i]=r.useState(null),[s,b]=r.useState(null),[o]=r.useState(null),[p,f]=r.useState(null),[e,n]=r.useState(null),[u,t]=r.useState(null),{data:{dataUserApplication:c,dataWorkerApplication:x}}=h.useApplications(),{loading:d}=A.useBufferMedicalExamination(),[l,D]=r.useState({}),[v,g]=r.useState(!1),S=v??!1;return r.useEffect(()=>{c&&x&&!d&&i(W(c,x,s,b,u,t,e,n,p,f))},[c,d,s,o,u]),r.useEffect(()=>{a&&c&&D(G(a.data))},[a]),y.jsx(k,{children:y.jsx(C,{isDone:S,children:!!a&&!!i&&y.jsxs(E,{children:[y.jsx(O,{...a,collapsed:S,setData:i,specialFieldsNameConfig:l}),y.jsx(F,{text:"Отправить",action:()=>R(I.HOLIDAY_WORK,[a],g),isLoading:d,completed:v,setCompleted:g,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:T(a)&&(((m=a.optionalCheckbox)==null?void 0:m.value)??!0),alerts:!1})]})})})};export{M as default};