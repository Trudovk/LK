import{r as m,bR as D,j as g}from"./vendor-561dac3a.js";import{aK as h,aG as A,aH as w,aL as R,s as C,B as G,F as _,I as F,S as I,m as L,b as O}from"./index-9d4b4175.js";const k=async(r,o,i)=>{var c,s;i(!1);const v=o.map(f=>{if(Array.isArray(f.data[0])){const e=f.data.map(u=>Object.assign({},...u==null?void 0:u.map(t=>{var y,b;const p={};return t!=null&&t.fieldName&&(p[t==null?void 0:t.fieldName]=(y=t==null?void 0:t.value)!=null&&y.title?(b=t==null?void 0:t.value)==null?void 0:b.title:t==null?void 0:t.value),p}))),l={};return l[r]=JSON.stringify(e),l}else return f.data.map(e=>{const l={};return e!=null&&e.fieldName&&(l[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(l[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(u=>u.title))),l})}).flat(),a=Object.assign({},...v),d=await h.postApplicationFx({guid:A(w()||"{}").IndividualGuid,jobGuid:a.jobGuid,signingDate:new Date(new Date().getTime()-new Date().getTimezoneOffset()*6e4).toISOString(),dateOfDismissal:a.last_day,isSendMail:a.get_tk==="По почте",isRetirement:!!a.isRetirement,address:a.get_tk_address,reason:a.reason.charAt(0).toLowerCase()+a.reason.slice(1)});!((s=(c=d==null?void 0:d.data)==null?void 0:c.dismissalResponse)!=null&&s.isError)&&i(!0)},q=(r,o,i,v,a,d,c,s,f,e,l,u,t)=>{const{surname:p,name:y,patronymic:b}=r;return{title:"Заявление на увольнение",data:[{title:"ФИО",value:p+" "+y+" "+b,fieldName:"fio",type:"simple-text"},{title:"Должность",type:"simple-text",fieldName:"post",value:o[i].jobTitle.toString()},{title:"Подразделение",type:"simple-text",value:o[i].subDivision.toString(),fieldName:"subDivision"},{title:"",type:"simple-text",value:o[i].jobGuid.toString(),fieldName:"jobGuid"},{title:"Ставка",type:"simple-text",value:o[i].rate.toString(),fieldName:"reate"},{title:"Дата увольнения (последний рабочий день)",type:"date",value:u,fieldName:"last_day",editable:!0,mask:!0,required:!0,minValueInput:R(0),onChange:n=>{t(n)}},{title:"Причина",type:"text",value:e,fieldName:"reason",editable:!0,mask:!0,required:!0,maxValueLength:50,onChange:n=>{l(n)}},{title:"В связи с выходом на пенсию",type:"hr-checkbox",value:v,fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:n=>{a(n)}},{title:"Способ получения трудовой книжки",type:"select",fieldName:"get_tk",value:s,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Очно"},{id:1,title:"По почте"}],onChange:n=>{f(n)}},{title:"Адрес для отправки трудовой книжки",value:d,fieldName:"get_tk_address",editable:!0,mask:!0,required:(s==null?void 0:s.title)=="По почте",visible:(s==null?void 0:s.title)=="По почте",onChange:n=>{c(n)}}]}},J=()=>{var j;const[r,o]=m.useState(null),{data:{dataUserApplication:i,dataWorkerApplication:v},workerLoading:a}=C.useApplications(),[d,c]=m.useState(!1),[s,f]=m.useState(null),[e,l]=m.useState(!1),[u,t]=m.useState(null),[p,y]=m.useState("По собственному желанию"),[b,n]=m.useState(null),S=d??!1,{id:N}=D(),x=+N;return m.useEffect(()=>{i&&v&&!a&&o(q(i,v,x,s,f,u,t,e,l,p,y,b,n))},[i,x,a,s,u,e,p,b]),g.jsx(G,{isDone:S,children:!!r&&!!o&&g.jsxs(_,{children:[g.jsx(F,{...r,collapsed:S,setData:o}),g.jsx(I,{text:"Отправить",action:()=>k(L.DISMISSAL,[r],c),isLoading:a,completed:d,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:O(r)&&(((j=r.optionalCheckbox)==null?void 0:j.value)??!0),alerts:!1})]})})};export{J as default};
