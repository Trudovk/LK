import{r as e,j as s}from"./vendor-9cc634b6.js";import{bV as w,bW as d,_ as T,z as U,E as _,bX as k,bY as q,bZ as B,a0 as G,F as L,T as O,b_ as W,S as z,a1 as H,m as M,r as l}from"./index-c587e0f5.js";const V=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],I=t=>{const{surname:n,name:r,patronymic:u,group:o,email:c,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+u,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:V},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:w}]}},X=()=>{var x;const[t,n]=e.useState(null),[r,u]=e.useState(d.kvdCert),[o,c]=e.useState(d.fluorographyCert),[i,v]=e.useState(d.vichRwCert),[m,D]=e.useState(d.graftCert),{data:{dataUserApplication:p}}=T.useApplications(),{data:{user:f}}=U.useUser(),[F,b]=e.useState(!1),[A,j]=e.useState(!1),[S,E]=e.useState(null),[a,C]=e.useState(null),[g,h]=e.useState(null),y=F??!1,R=!!t&&!!a&&!!S&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(_,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(I(p)),E(k()),C(q()),h(B()))},[p]),!R)return null;const N=[[{dataForm:t,setDataForm:n}],[{dataForm:a,setDataForm:C}],[{dataForm:r,setDataForm:u}],[{dataForm:o,setDataForm:c}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:h}]];return s.jsx(G,{isDone:y,children:s.jsxs(L,{children:[s.jsx(O,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),s.jsx(W,{stagesConfig:N}),s.jsx(z,{text:"Отправить",action:()=>H(M.USG_GETHOSTEL_O,[t,a,S,g,r,o,i,m],j,b),isLoading:A,completed:F,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:y,isActive:l(t)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((x=a==null?void 0:a.documents)!=null&&x.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{X as default};
