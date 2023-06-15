import{j as r,s as $,r as d,L as O}from"./vendor-0c76c893.js";import{e as k,a as R,s as U,W as B,b as G,F as J,T as H,M as K,l as Q,I as a,C as X,S as Y}from"./index-a7bcef13.js";import{f as C}from"./find-current-in-select-ba4611d5.js";const Z=e=>{let t,n,u,h,c;c=Math.floor(e/1e3),h=Math.floor(c/60),c=c%60,u=Math.floor(h/60),h=h%60,n=Math.floor(u/24),u=u%24,t=Math.floor(n/30),n=n%30;const o=Math.floor(t/12);return t=t%12,{year:o,month:t,day:n,hour:u,minute:h,second:c}},ee=(e,t)=>{const n=e.sex==="Мужской",u=Z(new Date().getTime()-new Date(e.bdate).getTime()).year;return{title:"Воинская служба",hint:r.jsxs(r.Fragment,{children:["При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).",r.jsx("br",{}),r.jsx("br",{}),"Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером."]}),data:[],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"armyFiles",maxFiles:10},optionalCheckbox:{fieldName:"army_doc_none",title:"Документ о воинской службе отсутствует",value:u>=66?!0:!n&&(e==null?void 0:e.army_doc_none),required:!0,visible:!n||u>=66},confirmed:t}},te=(e,t)=>({title:"Контактные данные",hint:"Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.",data:[{fieldName:"tel_mob_private",title:"Мобильный телефон (личный)",type:"tel",value:(e==null?void 0:e.tel_mob_private)??"",required:!0,mask:!0,autocomplete:!1},{fieldName:"tel_mob_staff",title:"Мобильный телефон (рабочий)",type:"tel",value:(e==null?void 0:e.tel_mob_staff)??"",mask:!0,autocomplete:!1},{fieldName:"tel_staff",title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:(e==null?void 0:e.tel_staff)??"",autocomplete:!1},{fieldName:"email_private",title:"Личный e-mail",type:"email",value:(e==null?void 0:e.email_private)??"",required:!0,autocomplete:!1},{fieldName:"email_staff",title:"Рабочий e-mail",type:"email",value:(e==null?void 0:e.email_staff)??"",autocomplete:!1}],confirmed:t}),ie=(e,t)=>({title:"Инвалидность",hint:"Необходимо приложить скан-копию справки об инвалидности",data:[],optionalCheckbox:{fieldName:"is_not_invalid",value:e==null?void 0:e.is_not_invalid,title:"Нет документа об инвалидности",required:!0},documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1},confirmed:t}),le=(e,t)=>({title:"Водительское удостоверение",hint:"При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон",data:[],optionalCheckbox:{fieldName:"dr_lic_none",title:"Водительское удостоверение отсутствует",value:e.dr_lic_none,required:!0},documents:{files:[],required:!0,fieldName:"driveLicenseFiles",maxFiles:2},confirmed:t}),re=(e,t)=>({title:"Образование",hint:"Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения",data:[{fieldName:"edu_doc",title:"Вид документа",value:e==null?void 0:e.edu_doc,width:"100%"},{fieldName:"edu_level",title:"Уровень образования",value:e.edu_level,width:"100%"},{fieldName:"edu_org",title:"Учебное заведение",value:(e==null?void 0:e.edu_org)??"",required:!0},{fieldName:"edu_spec",title:"Квалификация",value:(e==null?void 0:e.edu_spec)??"",required:!0},{fieldName:"edu_doc_num",title:"Серия и номер",value:(e==null?void 0:e.edu_doc_num)??"",required:!0},{fieldName:"edu_year",title:"Дата выдачи",value:(e==null?void 0:e.edu_year)??"",type:"date",required:!1}],documents:{files:[],required:!0,fieldName:"educationFiles",maxFiles:5},confirmed:t}),F=[{id:"mother",title:"Мать"},{id:"father",title:"Отец"},{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"sister",title:"Сестра"},{id:"brother",title:"Брат"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],se=(e,t)=>{var n;return{title:"Состав семьи",hint:"Необходимо указать актуальную информацию о ближайших родственниках",data:[...((n=e.family)==null?void 0:n.map(u=>[{fieldName:"relation",title:"Степень родства",value:C(F,u.relation),type:"select",items:F,width:"100%"},{fieldName:"fio",title:"ФИО",value:u.fio,required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:u.bdate,type:"date",required:!0,width:"30%"}]))??[]],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:F,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:e.family_none,required:!0},confirmed:t}},z=e=>{switch(e){case"Мужской":return[{id:"single",title:"Холост"},{id:"married",title:"Женат"},{id:"divorced",title:"Разведен"},{id:"widow",title:"Вдовец"}];case"Женский":return[{id:"single",title:"Не замужем"},{id:"married",title:"Замужем"},{id:"divorced",title:"Разведена"},{id:"widow",title:"Вдова"}];default:return[{id:"single",title:"Холост/Не замужем"},{id:"married",title:"Женат/Замужем"},{id:"divorced",title:"Разведен/Разведена"},{id:"widow",title:"Вдовец/Вдова"}]}},oe=(e,t)=>({title:"Семейное положение",hint:"Необходимо указать актуальную информацию",data:[{fieldName:"familyStatus",title:"",value:C(z(e.sex),e.familyStatus),type:"select",items:z(e.sex),width:"100%"}],confirmed:t}),D=[{id:"a",title:"Читаю и перевожу со словарем"},{id:"b",title:"Читаю и могу объясняться"},{id:"с",title:"Владею свободно"}],ne=(e,t)=>{var n;return{title:"Знание иностранных языков",hint:"Необходимо указать иностранные языки и степень владения ими",data:[...((n=e.languages)==null?void 0:n.map(u=>[{fieldName:"language",title:"Язык",required:!0,value:u.language},{fieldName:"level",title:"Уровень владения",value:C(D,u.level),type:"select",items:D,width:"100%"}]))??[]],default:[[{fieldName:"language",title:"Язык",required:!0,value:"Английский"},{fieldName:"level",title:"Уровень владения",value:D[0],type:"select",items:D,width:"100%"}]],addNew:!0,confirmed:t}},ue=(e,t)=>({title:"Проживание",hint:"Необходимо указать фактический адрес проживания",data:[{fieldName:"loc_addr",title:"Адрес проживания",value:(e==null?void 0:e.loc_addr)??"",required:!0},{fieldName:"loc_date",title:"Дата начала проживания",value:(e==null?void 0:e.loc_date)??"",type:"date",required:!0}],optionalCheckbox:{fieldName:"loc_match_reg",title:"Адрес проживания совпадает с адресом регистрации",value:e.loc_match_reg,required:!0},confirmed:t}),ce=(e,t)=>({title:"Паспортные данные",hint:"Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.",data:[{fieldName:"",title:"Вид документа",value:e==null?void 0:e.pass_type,width:"100%"},{fieldName:"pass_ser",title:"Серия",value:(e==null?void 0:e.pass_ser)??"",required:!0},{fieldName:"pass_num",title:"Номер",value:(e==null?void 0:e.pass_num)??"",required:!0},{fieldName:"pass_div",title:"Кем выдан",value:(e==null?void 0:e.pass_div)??"",required:!0},{fieldName:"pass_date",title:"Дата выдачи",value:(e==null?void 0:e.pass_date)??"",required:!0,type:"date"},{fieldName:"pass_div_code",title:"Код подразделения",value:(e==null?void 0:e.pass_div_code)??"",required:!0},{fieldName:"pass_citizenship",title:"Гражданство",value:(e==null?void 0:e.pass_citizenship)??"",required:!1}],documents:{files:[],required:!0,fieldName:"passportFiles",maxFiles:1},confirmed:t}),de=(e,t)=>({title:"Личные данные",hint:"Необходимо приложить скан-копию документа, подтверждающего изменения",data:[{fieldName:"fio",title:"ФИО",value:(e==null?void 0:e.fio)??"",required:!0},{fieldName:"sex",title:"Пол",value:(e==null?void 0:e.sex)??"",required:!0},{fieldName:"bdate",title:"Дата рождения",value:(e==null?void 0:e.bdate)??"",required:!0,type:"date"},{fieldName:"bplace",title:"Место рождения",value:(e==null?void 0:e.bplace)??"",required:!0}],documents:{files:[],required:!0,fieldName:"personalFiles",maxFiles:2},confirmed:t}),me=(e,t)=>({title:"Регистрация",hint:"Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.",data:[{fieldName:"reg_addr",title:"Адрес регистрации",value:(e==null?void 0:e.reg_addr)??"",required:!0},{fieldName:"reg_date",title:"Дата регистрации",value:(e==null?void 0:e.reg_date)??"",type:"date",required:!0}],documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:2},optionalCheckbox:{fieldName:"reg_none",title:"Регистрация отсутствует",value:!1},confirmed:t}),fe=(e,t)=>{t(!0);const n=e.map(o=>{if(Array.isArray(o.data[0])){const l=o.data.map(p=>Object.assign({},...p==null?void 0:p.map(s=>{var v,w;const j={};return s!=null&&s.fieldName&&(j[s==null?void 0:s.fieldName]=(v=s==null?void 0:s.value)!=null&&v.title?(w=s==null?void 0:s.value)==null?void 0:w.title:s==null?void 0:s.value),j}))),f={},m=o.title=="Состав семьи"?"family":"langs";return f[m]=JSON.stringify(l),f}else return o.data.map(l=>{const f={};return l!=null&&l.fieldName&&(f[(l==null?void 0:l.fieldName)??""]=typeof l.value!="object"?l==null?void 0:l.value:l.value.title),f})}).flat(),u=e.map(o=>{var f,m;const l={};if((f=o.documents)!=null&&f.fieldName)for(let p=0;p<o.documents.files.length;p++)l[((m=o.documents)==null?void 0:m.fieldName)+`[${p}]`]=o.documents.files[p];return l}),h=e.map(o=>{var f,m;const l={};return(f=o.optionalCheckbox)!=null&&f.fieldName&&(l[(m=o.optionalCheckbox)==null?void 0:m.fieldName]=o.optionalCheckbox.value),l}),c=Object.assign({},...n,...u,...h);try{k.postTeacherDataVerification(c),t(!1),k.changeCompleted({completed:!0})}catch(o){t(!1),R.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${o}`,type:"failure",time:3e4})}},ae=$.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    .data-verification-block {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 20px;
        border-radius: var(--brLight);
        background: var(--form);
        box-shadow: var(--schedule-shadow);
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 1000px) {
        padding: 0;
        .data-verification-block {
            box-shadow: none;
        }
    }
`,xe=()=>{const{data:e,error:t,completed:n}=U.useTeacherDataVerification(),[u,h]=d.useState(!1),[c,o]=d.useState(null),[l,f]=d.useState(null),[m,p]=d.useState(null),[s,j]=d.useState(null),[v,w]=d.useState(null),[x,S]=d.useState(null),[y,M]=d.useState(null),[g,E]=d.useState(null),[_,L]=d.useState(null),[q,T]=d.useState(null),[N,A]=d.useState(null),[b,I]=d.useState(null),i=(n||(e==null?void 0:e.validated))??!1,[P,V]=d.useState(!1);return d.useEffect(()=>{V(!1)},[!!(b!=null&&b.confirmed),!!(_!=null&&_.confirmed),!!(c!=null&&c.confirmed),!!(N!=null&&N.confirmed),!!(g!=null&&g.confirmed),!!(x!=null&&x.confirmed),!!(v!=null&&v.confirmed),!!(s!=null&&s.confirmed),!!(l!=null&&l.confirmed),!!(q!=null&&q.confirmed),!!(y!=null&&y.confirmed),!!(m!=null&&m.confirmed)]),d.useEffect(()=>{e&&(o(de(e,i)),p(te(e,i)),E(ce(e,i)),T(me(e,i)),A(ue(e,i)),f(oe(e,i)),j(se(e,i)),S(re(e,i)),M(ne(e,i)),L(le(e,i)),w(ie(e,i)),I(ee(e,i)))},[e]),r.jsx(B,{load:()=>G.getTeacherDataVerificationFx(),loading:!e,error:t,data:e,children:c&&m&&g&&q&&N&&l&&s&&x&&y&&_&&v&&b?r.jsx(ae,{children:r.jsxs(J,{children:[!i&&r.jsx(H,{size:3,align:"left",bottomGap:!0,children:"Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения"}),r.jsx(K,{type:"success",title:`Данные успешно отправлены ${Q((e==null?void 0:e.valid_date)??new Date)}`,icon:r.jsx(O,{}),visible:i}),r.jsx(a,{...c,collapsed:i,setData:o,divider:!0}),r.jsx(a,{...m,collapsed:i,setData:p,divider:!0}),r.jsx(a,{...g,collapsed:i,setData:E,divider:!0}),r.jsx(a,{...q,collapsed:i,setData:T,divider:!0}),r.jsx(a,{...N,collapsed:i,setData:A,divider:!0}),r.jsx(a,{...l,collapsed:i,setData:f,divider:!0}),r.jsx(a,{...s,collapsed:i,setData:j,divider:!0}),r.jsx(a,{...x,collapsed:i,setData:S,divider:!0}),r.jsx(a,{...y,collapsed:i,setData:M,divider:!0}),r.jsx(a,{..._,collapsed:i,setData:L,divider:!0}),r.jsx(a,{...v,collapsed:i,setData:w,divider:!0}),r.jsx(a,{...b,collapsed:i,setData:I,divider:!0}),!(e!=null&&e.validated)&&r.jsxs(r.Fragment,{children:[r.jsx(X,{checked:P||i,setChecked:V,text:"Я подтверждаю корректность указанных данных",isActive:!!b.confirmed&&!!_.confirmed&&!!c.confirmed&&!!N.confirmed&&!!g.confirmed&&!!x.confirmed}),r.jsx(Y,{text:i?"Отправлено":"Отправить",action:()=>fe([b,_,c,N,g,x,v,s,l,q,y,m],h),isLoading:u,completed:n,setCompleted:W=>k.changeCompleted({completed:W}),isDone:i,buttonSuccessText:"Отправлено",repeatable:!1,isActive:!!b.confirmed&&!!_.confirmed&&!!c.confirmed&&!!N.confirmed&&!!g.confirmed&&!!x.confirmed&&!!v.confirmed&&!!s.confirmed&&!!l.confirmed&&!!q.confirmed&&!!y.confirmed&&!!m.confirmed&&!!P,popUpFailureMessage:i?"Форму нельзя отправить повторно":"Для отправки формы необходимо, чтобы все поля были подтверждены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})]})}):null})};export{xe as default};
