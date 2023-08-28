import{s as c,r as o,j as s,T as P,l as O,o as R}from"./vendor-e9654bfa.js";import{O as k,D as C,l as S,R as F,a6 as I,S as L,a7 as h,a8 as W,a as A,a9 as B,aa as U,E as _,W as J,Q as M,f as V,g as $,n as z}from"./index-5ad0a555.js";const H=(t,e,n)=>{const i={};let r=[];const a=l=>{if("document"in l){const{viewed:u,name:f}=l,m=(f==null?void 0:f.includes(t))||!t.length;return e==="all"&&m?!0:!u&&e!=="all"&&m}const{viewed:p,post:x,event:d}=l,g=(d==null?void 0:d.includes(t))||(x==null?void 0:x.includes(t))||!t.length;return e==="all"&&g?!0:!p&&e!=="all"&&g};return Object.entries(n).map(([l,p])=>{r=[],p.map(x=>{a(x)&&r.push(x)}),i[l]=r}),i},v=(t,e,n)=>{switch(t){case"Female":return n;default:return e}},G=c.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    row-gap: 20px;
    min-height: 70px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,Q=c.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,q=c.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`,K=c.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,X=({data:t})=>{const{data:{user:e}}=k.useUser(),[n,i]=o.useState(!1),[r,a]=o.useState(!1);return s.jsxs(G,{children:[s.jsxs(Q,{children:[s.jsx(K,{children:t.event||t.post}),t.startDate&&s.jsxs(C,{children:["Период: ",S(t.startDate,"numeric")," - ",S(t.endDate,"numeric")]})]}),s.jsxs(q,{children:[t.file&&s.jsx(F,{href:t.file,onClick:()=>null,text:"Скачать",width:"150px",icon:s.jsx(P,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),s.jsx(L,{text:t.viewed?v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{i(!0),h.viewPersonalNotificationsFx(t.id),i(!1),a(!0)},height:"35px",width:"150px",buttonSuccessText:v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},Y=c.div`
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    row-gap: 20px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,Z=c.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,ee=c.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`,te=c.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,se=({data:t})=>{const{data:{user:e}}=k.useUser(),[n,i]=o.useState(!1),[r,a]=o.useState(!1),l=()=>{try{i(!0),h.viewPersonalNotificationsFx(t.id),W.clearById({id:`studdoc-${t.id}`,pageId:"doclist"}),i(!1),a(!0)}catch{A.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return s.jsxs(Y,{children:[s.jsxs(Z,{children:[s.jsx(te,{children:t.name}),t.date&&s.jsxs(C,{children:["Дата: ",S(t.date,"numeric")]})]}),s.jsxs(ee,{children:[t.link&&s.jsx(F,{href:t.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:s.jsx(O,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),s.jsx(L,{text:t.viewed?v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:l,height:"35px",width:"100%",buttonSuccessText:v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},N=({listNotification:t})=>{const e=B.useType();return s.jsx(U,{d:"column",gap:"8px",children:t.length?t.map(n=>e==="notifications"?s.jsx(X,{data:n},n.id):s.jsx(se,{data:n},n.id)):s.jsx(_,{text:"По заданным параметрам документ не найден"})})},ie=c.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,ne=c.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,ae=[{id:"all",title:"Все"},{id:"current",title:"Актуальные"}],oe=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],de=({docsType:t})=>{const{data:e,error:n}=B.usePersonalNotifications(),[i,r]=o.useState(),[a,l]=o.useState("docs"),[p,x]=o.useState(""),[d,g]=o.useState({id:"all",title:"Все"}),[u,f]=o.useState({id:"all",title:"Все"});o.useEffect(()=>{r(JSON.parse(JSON.stringify(e)))},[e]),o.useEffect(()=>{e&&r(H(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(e))))},[d,p]),o.useEffect(()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},[a]);const m=w=>{l(w)},T=o.useMemo(()=>{const w=(e==null?void 0:e.vacation)||[],b=(e==null?void 0:e.businesstrip)||[],D=(e==null?void 0:e.fire)||[];switch(u==null?void 0:u.id){case"all":return[...w,...b,...D].sort((j,y)=>{const E=j.notificationType==="docs"?new Date(j.date):new Date(j.startDate||"");return(y.notificationType==="docs"?new Date(y.date):new Date(y.startDate||"")).getTime()<E.getTime()?1:-1});case"vacation":return w;case"fire":return D;case"businesstrip":return b;default:return[]}},[e,u]);return s.jsx(J,{load:()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},error:n,data:i,children:s.jsx(ne,{children:s.jsxs(M,{children:[s.jsxs(ie,{children:[s.jsx(V,{value:p,setValue:x,placeholder:"Поиск",leftIcon:s.jsx(R,{})}),s.jsx($,{items:a==="notifications"?oe:ae,selected:a==="notifications"?u:d,setSelected:a==="notifications"?f:g})]}),t&&(i!=null&&i.docs)?s.jsx(N,{listNotification:i==null?void 0:i.docs}):s.jsx(z,{onChangePage:m,pages:[{id:"docs",title:"Приказы",content:(i==null?void 0:i.docs)&&s.jsx(N,{listNotification:i==null?void 0:i.docs})},{id:"notifications",title:"Кадровые уведомления",content:T.length?s.jsx(N,{listNotification:T}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{de as N};