import{r as b,s as j,j as e,R as P,L as y,at as M,b_ as C,aO as U}from"./vendor-561dac3a.js";import{H as B,K as D,Q as w,a6 as I,U as S,b7 as T,bH as _,bI as F,bJ as H,bK as f,bL as N,bb as z,bM as $,bN as K,bj as G,V as Q,bO as V,bP as q,q as m,L as x,bQ as v,bR as J,bS as Y,R as Z,aa as X,az as ee,Z as te,W as se,bT as ae}from"./index-9d4b4175.js";const re=t=>t==="Male"?"Мужской":"Женский",k=b.memo(ie),ne=j.div`
    width: 100%;
`;function ie({user:t}){const{status:s,sex:r,birthday:o,code:n,faculty:h,course:u,group:c,specialty:p,specialization:g,degreeLength:L,educationForm:R,finance:W,degreeLevel:A,enterYear:O,subdivisions:i,authorIDs:l}=t,E=[{key:"Статус",value:s},{key:"Пол",value:re(r)},{key:"Дата рождения",value:o},{key:"Код студента",value:n},{key:"Факультет",value:h},{key:"Курс",value:u},{key:"Группа",value:c},{key:"Направление",value:p},{key:"Специализация",value:g},{key:"Срок обучения",value:L},{key:"Форма обучения",value:R},{key:"Вид финансирования",value:W},{key:"Сведения о трудоустройстве",value:!!(i!=null&&i.length)&&(i==null?void 0:i.map((a,d)=>e.jsxs(P.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[a.subdivision&&e.jsxs("div",{children:["Подразделение: ",a.subdivision]}),a.post&&e.jsxs("div",{children:["Должность: ",a.post]}),a.wage&&a.jobType&&e.jsxs("div",{children:["Ставка: ",a.wage,"; ",a.jobType]})]}),d<i.length-1&&e.jsx(B,{margin:"16px 0",width:"100%"})]},d)))},{key:"Уровень образования",value:A},{key:"Год набора",value:O},{key:"Авторские идентификаторы",value:!!l&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[l.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",l.wosReasearcher]}),l.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",l.scopus]}),l.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",l.eLibrary]})]})}];return e.jsx(ne,{children:E.map(({key:a,value:d})=>!!d&&e.jsx(D,{keyStr:a,value:d,direction:typeof d=="object"?"vertical":"horizontal"},a))})}const le=j.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,oe=j.div``,ce=({orders:t})=>e.jsxs(le,{children:[!(t!=null&&t.length)&&e.jsx(w,{children:"Нет приказов"}),t==null?void 0:t.map(s=>e.jsx(oe,{children:s},s))]}),de=b.memo(ce),xe=({pages:t,currentPage:s})=>{const{data:{user:r}}=I.useUser();return r?e.jsx(S,{children:e.jsx(T,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:t[s]})}):null},he=({pages:t,user:s,currentPage:r,setCurrentPage:o})=>{const{fullName:n,avatar:h,user_status:u,degreeLevel:c}=s,p=u==="stud"?"Студент":"Сотрудник",g=()=>{Z.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:X.logout})};return e.jsxs(_,{children:[e.jsx(F,{fullName:n,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(H,{children:[e.jsxs(f,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(N,{children:e.jsx(z,{name:n,avatar:h,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs($,{children:[e.jsxs(K,{children:[e.jsx("b",{children:n}),e.jsx(w,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(G,{words:[p,c??""]})})]}),e.jsx(Q,{sliderWidth:"100%",pages:t,currentPage:r,setCurrentPage:o,appearance:!1})]})]}),e.jsx(f,{maxWidth:"250px",height:"fit-content",children:e.jsxs(V,{children:[e.jsx(y,{to:q,children:e.jsx(m,{background:x.white.transparent2,icon:e.jsx(v,{width:"30px",background:x.grey.main,children:e.jsx(M,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(J,{type:"v-button"}),e.jsx(y,{to:Y,children:e.jsx(m,{background:x.white.transparent2,icon:e.jsx(v,{width:"30px",background:x.purple.main,children:e.jsx(C,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(m,{background:x.white.transparent2,icon:e.jsx(v,{width:"30px",background:x.red.main,children:e.jsx(U,{})}),text:"Выйти",height:"73px",onClick:g,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},ue=j.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`,ge=()=>{const{data:{user:t},error:s}=I.useUser(),{allRoutes:r}=ee.useMenu(),[o,n]=b.useState(0);if(!t||!r)return null;if(s)return e.jsx(te,{text:s});const h=[{title:"Учетная карточка",content:e.jsx(k,{user:t})},{title:"Приказы",content:e.jsx(de,{orders:t.orders})}],u=[{title:"Учетная карточка",content:e.jsx(k,{user:t})}],c=t.user_status==="stud"?h:u;return e.jsx(se,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(ue,{children:[e.jsx(he,{user:t,currentPage:o,setCurrentPage:n,pages:c}),e.jsx(S,{children:e.jsx(T,{height:"100%",maxWidth:"750px",children:e.jsx(ae,{})})}),e.jsx(xe,{currentPage:o,pages:c.map(p=>p.content)})]})})};export{ge as default};
