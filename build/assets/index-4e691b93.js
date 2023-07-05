import{j as a,s as x,r as n,F as v}from"./vendor-9cc634b6.js";import{p as y,bM as b,a as g,bN as F,z as S,E as m,W as j,bO as k,F as w,I as N,M as D,S as z,r as M}from"./index-c587e0f5.js";const f=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],R=[{id:0,title:"ул. Михалковская, д. 7, корп. 3"},{id:1,title:"ул. Малая Семеновская, д. 12"}],A=t=>{const{fio:o,phone:e,email:i}=t;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:o,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:e,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:i,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:f,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:f,width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:R,width:"100%",editable:!0,required:!0},{title:"Дополнительная информация",value:"",fieldName:"info",type:"textarea",editable:!0,placeholder:"Желание проживать с другом и т.д."}],alert:a.jsx(a.Fragment,{children:"Подача заявок открыта с 12:00 29 августа до 12:00 31 августа!"}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"}]}},E=(t,o,e)=>{o(!0);const i=y(t);try{b(i),o(!1),e(!0)}catch(s){o(!1),g.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${s}`,type:"failure",time:3e4})}},q=t=>{const o="Mon Aug 29 2022 00:52:00 GMT+0300",e="Wed Aug 31 2022 12:00:00 GMT+0300",i=new Date;return t.enterYear!=="2022/2023"?"Форма доступна только для студентов 1 курса":i<new Date(o)?"Подача заявок открыта с 12:00 29 августа до 12:00 31 августа!":i>new Date(e)?"Подача заявок закрыта":""},T=x.div`
    display: flex;
    align-items: ${({isDone:t})=>t?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:t})=>t&&"100%"};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        padding: 0;
    }
`,U=()=>{var p,c;const[t,o]=n.useState(null),{data:e,error:i}=F.useSuperiorRoom(),[s,u]=n.useState(!1),[_,h]=n.useState(!1),r=(s||!(e!=null&&e.is_avaliable))??!1,{data:{user:l}}=S.useUser();if((l==null?void 0:l.educationForm)!=="Очная")return a.jsx(m,{text:"Данный раздел недоступен для вашей формы обучения"});const d=q(l);return d?a.jsx(m,{text:d}):(n.useEffect(()=>{e&&o(A(e))},[e]),a.jsx(j,{load:()=>k.getSuperiorRoomFx(),loading:!e,error:i,data:e,children:a.jsx(T,{isDone:r,children:!!t&&!!o&&a.jsxs(w,{children:[a.jsx(N,{...t,collapsed:r,setData:o}),a.jsxs(D,{title:"Информация по заявке",type:"info",icon:a.jsx(v,{}),visible:r,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам в срок до 2 сентября 2022 года на указанную в заявке почту:"," ",((p=t.data)==null?void 0:p[2]).value]}),a.jsx(z,{text:e!=null&&e.is_avaliable?"Отправить":"Отправлено",action:()=>E(t,h,u),isLoading:_,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:M(t)&&(((c=t.optionalCheckbox)==null?void 0:c.value)??!0),popUpFailureMessage:r?(e==null?void 0:e.error_text)??"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{U as default};
