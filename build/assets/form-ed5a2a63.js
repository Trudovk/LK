import{r as i,bR as w,j as o}from"./vendor-561dac3a.js";import{f as F}from"./find-current-in-select-ba4611d5.js";import{$ as p,g as h,h as y,s as S,W as N,B as j,F as $,I as B,S as D,b as q}from"./index-7cc4f467.js";import{s as E}from"./send-form-df07913d.js";const P=e=>p.get(`?getPhoneBookData=${e}&token=${h()}`),C=e=>{const t=new FormData;t.set("token",h()),t.set("setPhoneBookData","1");for(const[a,n]of Object.entries(e))t.set(a,n);return p.post("?setPhoneBookData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},_=[{id:"0",title:"ул. Большая Семёновская, 38"},{id:"1",title:"ул. Прянишникова, 2А"},{id:"2",title:"ул. Автозаводская, 16"},{id:"3",title:"ул. Павла Корчагина, 22"},{id:"4",title:"ул. Михалковская, 7"},{id:"5",title:"ул. Садовая-Спасская, 6"},{id:"6",title:"ул. Малая Семеновская, 12"},{id:"7",title:"ул. Лефортовский вал, 26"},{id:"8",title:"ул. 1-я Дубровская, 16а"},{id:"9",title:"ул. 7-я Парковая, 9/26"},{id:"10",title:"ул. 800-летия Москвы, 28 корп. 1"},{id:"11",title:"ул. Михалковская, 7, корп. 3"},{id:"12",title:"ул. Бориса Галушкина, 9"},{id:"13",title:"ул. Павла Корчагина, 20А, корп. 3"},{id:"14",title:"Рижский проезд, 15, корп. 1"},{id:"15",title:"Рижский проезд, 15, корп. 2"},{id:"16",title:"1-й Балтийский переулок, 6/21, корп. 3"}],W=(e,t)=>({title:"Актуализируйте контактные данные",data:[{fieldName:"guid_staff",title:"Подразделение/должность",value:t.guid_staff,width:"100",required:!0,type:"text",visible:!1},{fieldName:"",title:`${t.subdivision} (${t.post})`,value:`${t.subdivision} (${t.post})`,width:"100",required:!0,type:"text-header",visible:!0},{fieldName:"site",title:"Площадка",type:"select",value:F(_,e.site),items:_,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер аудитории",value:e.aud_number,editable:!0,required:!0},{fieldName:"email_staff",title:"Рабочий email",type:"email",value:e.email_staff,required:!0},{title:"Показывать рабочий email внутри Личного кабинета",fieldName:"show_email_inner",type:"checkbox",value:e.show_email_inner??!0},{title:"Показывать рабочий email на сайте",fieldName:"show_email_outer",type:"checkbox",value:e.show_email_outer??!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Показывать мобильный телефон внутри Личного кабинета",fieldName:"show_tel_mob_staff_inner",type:"checkbox",value:e.show_tel_mob_staff_inner??!0},{title:"Показывать мобильный телефон на сайте",fieldName:"show_tel_mob_staff_outer",type:"checkbox",value:e.show_tel_mob_staff_outer??!0},{title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:e==null?void 0:e.tel_staff,fieldName:"tel_staff"},{title:"Показывать служебный телефон внутри Личного кабинета",fieldName:"show_tel_staff_inner",type:"checkbox",value:e.show_tel_staff_inner??!0},{title:"Показывать служебный телефон на сайте",fieldName:"show_tel_staff_outer",type:"checkbox",value:e.show_tel_staff_outer??!0}]}),r=y({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:P,post:C}}),R=()=>{const[e,t]=i.useState(null),[a,n]=i.useState(!1),[b,g]=i.useState(!1),{guid:m}=w(),f=a??!1,[l,c]=i.useState(m),{data:u,error:x}=r.selectors.useForm(),{data:{dataUserApplication:s}}=S.useApplications();return i.useEffect(()=>{s&&c(m||(s==null?void 0:s.subdivisions[0].guid_staff))},[s]),i.useEffect(()=>{var d;if(u&&l){const v=(d=s==null?void 0:s.subdivisions)==null?void 0:d.find(k=>k.guid_staff===l);t(W(u,v))}},[l,u]),i.useEffect(()=>()=>{r.events.clearStore()},[]),l?o.jsx(N,{load:()=>{r.effects.getFormFx(l)},data:s&&u,error:x,children:o.jsx(j,{isDone:f,children:!!e&&o.jsxs($,{children:[o.jsx(B,{...e,collapsed:f,setData:t}),o.jsx(D,{text:f?"Отправлено":"Отправить",action:()=>E(e,r.effects.postFormFx,g,r.events.changeCompleted),isLoading:b,completed:a,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:f,isActive:q(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}):null};export{R as default};
