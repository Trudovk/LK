import{u as l,bR as te,bS as Ee,p as x,x as n,bT as Ne,bU as be,y as f,s as d,r as c,j as s,d as De,Z as j,aG as Te,bJ as Ae,T as Me}from"./vendor-f1fdae2f.js";import{a as p,f as v,p as h,g as T,B as m,T as A,h as L,i as M,u as R,j as q,k as Ve,m as Oe,n as Ge,o as Fe,$ as _e,q as Ue,r as S,K as E,D as Ie,P as We,t as ze,v as Le,w as Re,x as qe,y as He}from"./index-4822c931.js";import{j as V,e as H,d as ce,P as N,s as Ke,a as Be,b as le,c as y,f as Ze,g as K,h as D,A as Je,i as b,k as Qe,l as Ye,S as Xe,m as se}from"./ui-c43bfef3.js";import{S as et}from"./index-3c410008.js";function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function tt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?re(Object(r),!0).forEach(function(a){st(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function st(e,t,r){return t=rt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rt(e){var t=at(e,"string");return typeof t=="symbol"?t:String(t)}function at(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ue(e){var{events:t,reset:r,target:a=l({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return te.unit(a)||ae("target should be a unit"),r&&!te.unit(r)&&ae("reset should be a unit"),Ee(a,()=>{var i=Object.keys(t),o=Array.isArray(t)?[...i].fill(""):{},u=x(i.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),g=x(o,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});u.reset(n({and:[{source:a}],or:{sid:"-8hxq8z"}})),g.reset(a),r&&(u.reset(n({and:[{source:r}],or:{sid:"3c6u5p"}})),g.reset(r));var U=function(I){var X=x(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[I],()=>!0).reset(a);r&&X.reset(r),u.on(X,k=>k-1),g.on(t[I],(k,Pe)=>{var ee=Array.isArray(k)?[...k]:tt({},k);return ee[I]=Pe,ee})};for(var $e of i)U($e);Ne({and:[{source:n({and:[{source:g,clock:be(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:u.map(Y=>Y===0),target:a}],or:{sid:"ciyd7d"}})}),a}function ae(e){throw new Error(e)}const nt=e=>`mutation addNewComp{
      createCompetition(input: ${V(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,de=l(),w=f(async e=>await h(nt(e)));n({clock:de,target:w});n({clock:w.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:w.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:w.doneData,target:H.load});n({clock:w.doneData,target:v.close});const it=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,ot=()=>{const[e,t]=c.useState(""),r=()=>{de({competitionName:e})};return s.jsxs(it,{children:[s.jsx(T,{title:"Название",setValue:t,value:e}),s.jsx(m,{text:"Добавить",onClick:r})]})},W=l(),pe=l(),me=f(async e=>{const{employees:t}=(await De.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),O=x(null).on(W,(e,t)=>t);ce({source:n({source:O,filter:e=>e!==null}),timeout:200,target:me});n({source:O,filter:e=>e!==null});const ct=x([]).on(me.doneData,(e,t)=>t);n({clock:pe,target:O.reinit});const lt=({onChange:e,onSearchChange:t})=>{const[r,a]=j([ct,O]),i=o=>{o!=null&&o.id&&e(o.id)};return c.useEffect(()=>(W(""),pe),[]),c.useEffect(()=>{a&&(t==null||t(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(A,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(L,{value:a??"",setValue:W,hints:r.map(o=>({id:o.guid,title:o.fullName,value:o.guid})),onHintClick:i})]})},ut=e=>`mutation addRole {
      givePermissionsToTeacher(
        input: { permissions: ${e.permission}, teacherGuid: "${e.teacherGuid}"  }
      ) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ge=l(),G=f(async e=>await h(ut(e)));n({clock:G.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:G.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:ge,target:G});const dt=e=>`mutation createTeacher{
        createTeacher(
          input: ${V(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,xe=l(),C=f(async e=>{const{permission:t,...r}=e;return await h(dt(r)),e});n({clock:C.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:C.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:C.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:ge});n({clock:xe,target:C});n({clock:ue({events:[C.doneData,G.doneData]}),target:v.close});const pt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,mt={[N.AdminAccess]:"Админ",[N.OnlineCourseAccess]:"Доступ к ЛМС",[N.SecretaryAccess]:"Секретарь",[N.DefaultAccess]:"Преподаватель"},gt=Object.entries(mt).map(([e,t])=>({title:t,id:e})),xt=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(""),[i,o]=c.useState(null),u=()=>{xe({fullName:e,teacherGuid:r,permission:i==null?void 0:i.id})};return s.jsxs(pt,{children:[s.jsx(lt,{onChange:a,onSearchChange:t}),s.jsx(M,{title:"Доступ",items:gt,setSelected:o,selected:i}),s.jsx(m,{text:"Добавить",onClick:u})]})},z=l(),fe=l(),he=f(async e=>{const{teachers:{items:t}}=await h(`
    query teachers {
      teachers(
          take: 100
          order: { fullName: ASC }
          where: { fullName: { contains: "${e}" } }
        ) {
          items {
            fullName
            teacherGuid
          }
        }
      }`);return t}),B=x("").on(z,(e,t)=>t);ce({source:n({source:B,filter:e=>e!==null}),timeout:200,target:he});const ft=x([]).on(he.doneData,(e,t)=>t);n({clock:fe,target:B.reinit});const ht=({onChange:e})=>{const[t,r]=j([ft,B]),a=i=>{i!=null&&i.id&&e(i.id)};return c.useEffect(()=>(z(""),fe),[]),s.jsxs(s.Fragment,{children:[s.jsx(A,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(L,{value:r,setValue:z,hints:t.map(i=>({id:i.teacherGuid,title:i.fullName,value:i.teacherGuid})),onHintClick:a})]})},jt=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${V(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,yt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${V(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Z=l(),$=f(async({groupName:e,newVisitValue:t})=>await h(yt({groupName:e,newVisitValue:t})));n({clock:$.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:$.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:Z,target:$});n({clock:$.doneData,target:v.close});const J=l(),F=f(async({groupName:e,teacherGuid:t})=>await h(jt({groupName:e,teacherGuid:t})));n({clock:J,target:F});n({clock:J,target:Z});n({clock:F.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:F.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:ue({events:[F.doneData,$.doneData]}),target:v.close});const vt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,kt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],St=()=>{const[e,t]=c.useState(null),[r,a]=c.useState(""),[i,o]=c.useState(""),u=()=>{J({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:i,teacherGuid:r})};return s.jsxs(vt,{children:[s.jsx(T,{title:"Группа",setValue:o,value:i}),s.jsx(ht,{onChange:a}),s.jsx(M,{title:"Стоимость посещения",items:kt,selected:e,setSelected:t}),s.jsx(m,{text:"Добавить",onClick:u})]})},wt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Ct=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],$t=()=>{const[e,t]=c.useState(null),[r,a]=c.useState(""),i=()=>{Z({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(wt,{children:[s.jsx(T,{title:"Группа",setValue:a,value:r}),s.jsx(M,{title:"Стоимость",items:Ct,selected:e,setSelected:t}),s.jsx(m,{text:"Добавить",onClick:i})]})},Pt=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,je=l(),_=f(async e=>await h(Pt(e)));n({clock:je,target:_});n({clock:_.doneData,target:v.close});n({clock:_.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:_.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:p.evokePopUpMessage});const Et={startNewSemester:je},Nt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,bt=()=>{const[e,t]=c.useState(""),r=()=>{Et.startNewSemester(e)};return s.jsxs(Nt,{children:[s.jsx(T,{title:"Новый семестр",setValue:t,value:e}),s.jsx(m,{text:"Начать новый семестр",onClick:r})]})},Dt=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,ye=l(),P=f(async()=>await h(Dt()));n({clock:ye,target:P});n({clock:P.doneData,target:v.close});n({clock:P.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:P.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:p.evokePopUpMessage});P.pending;const Tt=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(m,{onClick:()=>H.remove(e),text:"Удалить"})}],At=d.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`,Mt=d.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`,Vt=d.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    gap: 10px;
`,Ot=()=>{const[e,t]=j([ye,Ke.$competitions]),{open:r}=R(),a=()=>{r(s.jsx(xt,{}))},i=()=>{r(s.jsx(St,{}))},o=()=>{r(s.jsx($t,{}))},u=()=>{r(s.jsx(ot,{}))},g=()=>{r(s.jsx(bt,{}))};return c.useEffect(()=>{H.load()},[]),s.jsxs(Mt,{children:[s.jsxs(Vt,{children:[s.jsx(m,{onClick:a,text:"Добавить нового преподавателя"}),s.jsx(m,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(m,{onClick:i,text:"Назначить куратора"}),s.jsx(m,{onClick:o,text:"Назначить стоимость посещения"}),s.jsx(m,{onClick:g,text:"Начать новый семестр"})]}),s.jsxs(At,{children:[s.jsx(A,{align:"left",size:4,children:"Соревнования"}),s.jsx(m,{onClick:u,text:"Добавить соревнование"}),s.jsx(q,{data:t.map(U=>({name:U})),columns:Tt,onRowClick:()=>{}})]})]})},Gt=d.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;var ve=(e=>(e.Group="group.groupName",e.Course="course",e))(ve||{});const ne=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Ft=()=>{var i;const[e,t]=j([Be.$filters,le.$isExam]),[r,a]=c.useState(((i=e["group.groupName"])==null?void 0:i.value)??"");return s.jsxs(Gt,{children:[s.jsx(et,{leftIcon:s.jsx(Te,{}),placeholder:"Номер группы",value:r,setValue:a,customMask:Ve.groupMask,onValueEmpty:()=>y.addFilter({name:"group.groupName",value:""}),onHintClick:o=>y.addFilter({name:"group.groupName",value:(o==null?void 0:o.id)??"",strict:!0}),request:Oe,size:"big"}),s.jsx(M,{items:ne,size:"big",placeholder:"Курс",selected:ne.find(o=>{var u;return o.id===((u=e.course)==null?void 0:u.value)})??null,setSelected:o=>{if(o!=null&&o.id){y.addFilter({name:"course",value:o.id});return}y.addFilter({name:"course",value:""})}}),s.jsx(Ge,{title:"Зачет",state:t,action:o=>Ze.setIsExam(o)})]})},Q=l(),ke=l(),_t=x(0).on(Q,(e,t)=>t);n({clock:ke,target:[K.load,Fe.load]});const Ut=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,Se=l(),we=Ae({effect:async({currentUser:e})=>(await h(Ut((e==null?void 0:e.guid)??""))).groups.items,source:_e});n({clock:Se,target:we});const It=x([]).on(we.doneData,(e,t)=>t);function ie(){const[e]=j([It]);c.useEffect(()=>{Se()},[]);const t=r=>{y.resetFilters(),y.addFilter({name:ve.Group,value:r.groupName,strict:!0}),Q(0)};return s.jsx(q,{onRowClick:t,data:e,columns:Wt})}const Wt=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],zt=(e,t)=>{let r=e;for(const a in t)r=r.replace(`:${a}`,t[a]);return r};d.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;const Lt=d.div`
    ${Ue.isNotMobile} {
        width: 500px;
    }
`,Rt=({student:e})=>{const t=Me(),{close:r}=R(),a=()=>{t.push(zt(We,{studentId:e.studentGuid})),r()};return s.jsx(Lt,{children:s.jsxs(S,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(S,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(E,{keyStr:"Группа",value:e.groupNumber}),s.jsx(E,{keyStr:"Баллы",value:D(e)}),s.jsx(E,{keyStr:"Курс",value:e.course}),s.jsx(E,{keyStr:"ЛМС",value:e.pointsHistory.reduce((i,o)=>i+o.points,0)})]}),s.jsx(Ie,{width:"100%",margin:"0"}),s.jsxs(S,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(A,{align:"left",size:4,children:"Дата"}),s.jsx(Je,{studentGuid:e.studentGuid})]}),s.jsx(m,{onClick:a,text:"Перейти к студенту",width:"100%"})]})})},qt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>D(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((r,a)=>r+a.points,0)}],Ht=[{title:"ФИО",field:"name",render:(e,t)=>t.fullName,showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>D(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>D(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Ce=l();n({clock:Ce,target:K.load});const Kt=d.div`
    display: grid;
    width: 100%;
`,Bt=d.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,Zt=d(S)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,oe=()=>{const{open:e}=R(),{students:t,totalCount:r,page:a,search:i,loading:o,isExam:u}=j({students:b.$pEStudents,loading:b.$loading,totalCount:b.$pEStudentsTotalCount,page:b.$pEStudentsPage,search:Qe.$search,isExam:le.$isExam});return c.useEffect(()=>{Ce()},[]),s.jsx(Kt,{children:s.jsxs(Bt,{children:[s.jsxs(Zt,{children:[s.jsx(L,{value:i,setValue:Ye.update,size:"big"}),s.jsx(Ft,{})]}),s.jsx(q,{loading:o,data:t,columns:u?Ht:qt,onRowClick:g=>{e(s.jsx(Rt,{student:g}),g.fullName)}}),s.jsx(ze,{condition:!0,align:"right",pages:Math.floor(r/Xe),currentPage:a,setCurrentPage:K.setPage})]})})},es=()=>{const[e,t]=j([He.peTeacher,_t]);c.useEffect(()=>{ke()},[]);const r=[se.AdminAccess,se.SuperUser].some(a=>{var i;return(i=e==null?void 0:e.permissions)==null?void 0:i.includes(a)})?[{title:"Студенты",content:s.jsx(oe,{})},{title:"Управление",content:s.jsx(Ot,{})},{title:"Мои Группы",content:s.jsx(ie,{})}]:[{title:"Студенты",content:s.jsx(oe,{})},{title:"Мои Группы",content:s.jsx(ie,{})}];return s.jsx(Le,{padding:"10px",children:s.jsx(Re,{children:s.jsxs(S,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(qe,{appearance:!1,pages:r,currentPage:t,setCurrentPage:Q}),r[t].content]})})})};export{es as default};