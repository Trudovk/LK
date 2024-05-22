import{p as c,c5 as F,c6 as Ye,h as x,x as r,e as S,s as l,r as d,j as s,d as Ze,n as k,aN as Se,v as X,a2 as et,J as tt,c7 as st,c as nt}from"./vendor-c0388033.js";import{d as m,n as E,p as h,o as M,q as p,h as V,r as Y,t as _,u as U,v as R,w as ye,x as ke,y as we,z as rt,D as ot,b as at,E as it,G as j,K as T,H as ct,J as lt,L as b,N as dt,O as ut,Q as pt,M as mt,R as gt,U as ft,P as xt,V as ht,X as jt}from"./index-7b661082.js";import{j as L,e as Z,d as Ce,P as A,s as vt,a as St,b as $e,c as C,f as yt,g as ee,h as $,A as kt,i as O,k as wt,l as Ct,S as $t,m as Et,n as Pt,o as me}from"./ui-20e49edc.js";function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(n),!0).forEach(function(o){Nt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Nt(e,t,n){return t=Dt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dt(e){var t=Gt(e,"string");return typeof t=="symbol"?t:String(t)}function Gt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ee(e){var t=It(e)?{events:e}:e,{events:n,reset:o,target:a=c({name:"target",sid:"p73fff"})}=t;return F.unit(a)&&F.targetable(a)||fe("target should be a targetable unit"),o&&!F.unit(o)&&fe("reset should be a unit"),Ye(a,()=>{var i=Object.keys(n),u=Array.isArray(n)?[...i].fill(""):{},g=x(i.length,{and:{serialize:"ignore"},name:"$counter",sid:"-ahoahx"}),w=x(u,{and:{serialize:"ignore"},name:"$results",sid:"oy8iyn"});r({and:[{source:a,target:g.reinit}],or:{sid:"blex0c"}}),w.reset(a),o&&(r({and:[{source:o,target:g.reinit}],or:{sid:"bnm3fi"}}),w.reset(o));var Ke=function(K){var ue=x(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"-rf2fac"}).on(n[K],()=>!0).reset(a);o&&ue.reset(o),g.on(ue,P=>P-1),w.on(n[K],(P,Xe)=>{var pe=Array.isArray(P)?[...P]:bt({},P);return pe[K]=Xe,pe})};for(var Qe of i)Ke(Qe);var Je=r({and:[{source:w,clock:[...Object.values(n)]}],or:{name:"eventsTrriggered",sid:"-lro8bq"}});r({and:[{source:Je,filter:g.map(de=>de===0,{skipVoid:!1}),target:a}],or:{sid:"-dlkr2s"}})}),a}function It(e){return Object.keys(e).some(t=>!["events","reset","target"].includes(t)&&F.unit(e[t]))}function fe(e){throw new Error(e)}const Tt=e=>`mutation addNewComp{
      createCompetition(input: ${L(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,Pe=c(),N=S(async e=>await h(Tt(e)));r({clock:Pe,target:N});r({clock:N.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:N.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:N.doneData,target:Z.load});r({clock:N.doneData,target:E.close});const At=l.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Ot=()=>{const[e,t]=d.useState(""),n=()=>{Pe({competitionName:e})};return s.jsxs(At,{children:[s.jsx(M,{title:"Название",setValue:t,value:e}),s.jsx(p,{text:"Добавить",onClick:n})]})},Q=c(),be=c(),Ne=S(async e=>{const{employees:t}=(await Ze.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),z=x(null).on(Q,(e,t)=>t);Ce({source:r({source:z,filter:e=>e!==null}),timeout:200,target:Ne});r({source:z,filter:e=>e!==null});const Ft=x([]).on(Ne.doneData,(e,t)=>t);r({clock:be,target:z.reinit});const Mt=({onChange:e,onSearchChange:t})=>{const[n,o]=k([Ft,z]),a=i=>{i!=null&&i.id&&e(i.id)};return d.useEffect(()=>(Q(""),be),[]),d.useEffect(()=>{o&&(t==null||t(o))},[o]),s.jsxs(s.Fragment,{children:[s.jsx(V,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Y,{value:o??"",setValue:Q,hints:n.map(i=>({id:i.guid,title:i.fullName,value:i.guid})),onHintClick:a})]})},Vt=e=>`mutation addRole {
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
    `,De=c(),W=S(async e=>await h(Vt(e)));r({clock:W.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:W.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:De,target:W});const _t=e=>`mutation createTeacher{
        createTeacher(
          input: ${L(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ge=c(),D=S(async e=>{const{permission:t,...n}=e;return await h(_t(n)),e});r({clock:D.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:D.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:D.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:De});r({clock:Ge,target:D});r({clock:Ee({events:[D.doneData,W.doneData]}),target:E.close});const Ut=l.div.withConfig({componentId:"sc-1pcicfk-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;@media (max-width:800px){min-height:40vh;}"]),Rt={[A.AdminAccess]:"Админ",[A.OnlineCourseAccess]:"Доступ к ЛМС",[A.SecretaryAccess]:"Секретарь",[A.DefaultAccess]:"Преподаватель"},Lt=Object.entries(Rt).map(([e,t])=>({title:t,id:e})),zt=()=>{const[e,t]=d.useState(""),[n,o]=d.useState(""),[a,i]=d.useState(null),u=()=>{Ge({fullName:e,teacherGuid:n,permission:a==null?void 0:a.id})};return s.jsxs(Ut,{children:[s.jsx(Mt,{onChange:o,onSearchChange:t}),s.jsx(_,{title:"Доступ",items:Lt,setSelected:i,selected:a}),s.jsx(p,{text:"Добавить",onClick:u})]})},J=c(),Ie=c(),Te=S(async e=>{const{teachers:{items:t}}=await h(`
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
      }`);return t}),te=x("").on(J,(e,t)=>t);Ce({source:r({source:te,filter:e=>e!==null}),timeout:200,target:Te});const Wt=x([]).on(Te.doneData,(e,t)=>t);r({clock:Ie,target:te.reinit});const Ht=({onChange:e})=>{const[t,n]=k([Wt,te]),o=a=>{a!=null&&a.id&&e(a.id)};return d.useEffect(()=>(J(""),Ie),[]),s.jsxs(s.Fragment,{children:[s.jsx(V,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Y,{value:n,setValue:J,hints:t.map(a=>({id:a.teacherGuid,title:a.fullName,value:a.teacherGuid})),onHintClick:o})]})},qt=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${L(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Bt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${L(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,se=c(),G=S(async({groupName:e,newVisitValue:t})=>await h(Bt({groupName:e,newVisitValue:t})));r({clock:G.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:G.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:se,target:G});r({clock:G.doneData,target:E.close});const ne=c(),H=S(async({groupName:e,teacherGuid:t})=>await h(qt({groupName:e,teacherGuid:t})));r({clock:ne,target:H});r({clock:ne,target:se});r({clock:H.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:H.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:Ee({events:[H.doneData,G.doneData]}),target:E.close});const Kt=l.div.withConfig({componentId:"sc-1709s2v-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Qt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Jt=()=>{const[e,t]=d.useState(null),[n,o]=d.useState(""),[a,i]=d.useState(""),u=()=>{ne({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:a,teacherGuid:n})};return s.jsxs(Kt,{children:[s.jsx(M,{title:"Группа",setValue:i,value:a}),s.jsx(Ht,{onChange:o}),s.jsx(_,{title:"Стоимость посещения",items:Qt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:u})]})},Xt=l.div.withConfig({componentId:"sc-d9fl0b-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Yt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Zt=()=>{const[e,t]=d.useState(null),[n,o]=d.useState(""),a=()=>{se({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:n})};return s.jsxs(Xt,{children:[s.jsx(M,{title:"Группа",setValue:o,value:n}),s.jsx(_,{title:"Стоимость",items:Yt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:a})]})},es=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,Ae=c(),q=S(async e=>await h(es(e)));r({clock:Ae,target:q});r({clock:q.doneData,target:E.close});r({clock:q.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:m.evokePopUpMessage});r({clock:q.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:m.evokePopUpMessage});const ts={startNewSemester:Ae},ss=l.div.withConfig({componentId:"sc-g01kzf-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),ns=()=>{const[e,t]=d.useState(""),n=()=>{ts.startNewSemester(e)};return s.jsxs(ss,{children:[s.jsx(M,{title:"Новый семестр",setValue:t,value:e}),s.jsx(p,{text:"Начать новый семестр",onClick:n})]})},rs=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,Oe=c(),I=S(async()=>await h(rs()));r({clock:Oe,target:I});r({clock:I.doneData,target:E.close});r({clock:I.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:m.evokePopUpMessage});r({clock:I.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:m.evokePopUpMessage});I.pending;const os=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(p,{onClick:()=>Z.remove(e),text:"Удалить"})}],as=l.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),is=l.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;gap:10px;"]),cs=l.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]),ls=()=>{const[e,t]=k([Oe,vt.$competitions]),{open:n}=U(),o=()=>{n(s.jsx(zt,{}))},a=()=>{n(s.jsx(Jt,{}))},i=()=>{n(s.jsx(Zt,{}))},u=()=>{n(s.jsx(Ot,{}))},g=()=>{n(s.jsx(ns,{}))};return d.useEffect(()=>{Z.load()},[]),s.jsxs(is,{children:[s.jsxs(cs,{children:[s.jsx(p,{onClick:o,text:"Добавить нового преподавателя"}),s.jsx(p,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(p,{onClick:a,text:"Назначить куратора"}),s.jsx(p,{onClick:i,text:"Назначить стоимость посещения"}),s.jsx(p,{onClick:g,text:"Начать новый семестр"})]}),s.jsxs(as,{children:[s.jsx(V,{align:"left",size:4,children:"Соревнования"}),s.jsx(p,{onClick:u,text:"Добавить соревнование"}),s.jsx(R,{data:t.map(w=>({name:w})),columns:os,onRowClick:()=>{}})]})]})},ds=l.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var Fe=(e=>(e.Group="group.groupName",e.Course="course",e))(Fe||{});const xe=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],us=()=>{var a;const[e,t]=k([St.$filters,$e.$isExam]),[n,o]=d.useState(((a=e["group.groupName"])==null?void 0:a.value)??"");return s.jsxs(ds,{children:[s.jsx(ye,{leftIcon:s.jsx(Se,{}),placeholder:"Номер группы",value:n,setValue:o,customMask:ke.groupMask,onValueEmpty:()=>C.addFilter({name:"group.groupName",value:""}),onHintClick:i=>C.addFilter({name:"group.groupName",value:(i==null?void 0:i.id)??"",strict:!0}),request:we,size:"big"}),s.jsx(_,{items:xe,size:"big",placeholder:"Курс",selected:xe.find(i=>{var u;return i.id===((u=e.course)==null?void 0:u.value)})??null,setSelected:i=>{if(i!=null&&i.id){C.addFilter({name:"course",value:i.id});return}C.addFilter({name:"course",value:""})}}),s.jsx(rt,{title:"Зачет",state:t,action:i=>yt.setIsExam(i)})]})},re=c(),Me=c(),ps=x(0).on(re,(e,t)=>t);r({clock:Me,target:[ee.load,ot.load]});const ms=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,Ve=c(),_e=X({effect:async({currentUser:e})=>(await h(ms((e==null?void 0:e.guid)??""))).groups.items,source:at.user});r({clock:Ve,target:_e});const gs=x([]).on(_e.doneData,(e,t)=>t);function he(){const[e]=k([gs]);d.useEffect(()=>{Ve()},[]);const t=n=>{C.resetFilters(),C.addFilter({name:Fe.Group,value:n.groupName,strict:!0}),re(0)};return s.jsx(R,{onRowClick:t,data:e,columns:fs})}const fs=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],xs=(e,t)=>{let n=e;for(const o in t)n=n.replace(`:${o}`,t[o]);return n};l.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const hs=l.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],it.isNotMobile),js=({student:e})=>{const t=et(),{close:n}=U(),o=()=>{t.push(xs(lt,{studentId:e.studentGuid})),n()};return s.jsx(hs,{children:s.jsxs(j,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(j,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(T,{keyStr:"Группа",value:e.groupNumber}),s.jsx(T,{keyStr:"Баллы",value:$(e)}),s.jsx(T,{keyStr:"Курс",value:e.course}),s.jsx(T,{keyStr:"ЛМС",value:e.pointsHistory.reduce((a,i)=>a+i.points,0)})]}),s.jsx(ct,{width:"100%",margin:"0"}),s.jsxs(j,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(V,{align:"left",size:4,children:"Дата"}),s.jsx(kt,{studentGuid:e.studentGuid})]}),s.jsx(p,{onClick:o,text:"Перейти к студенту",width:"100%"})]})})},vs=l.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),Ss=l.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),ys=l(j).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),oe=l.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&b.red.main),ks=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(oe,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>$(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((n,o)=>n+o.points,0)}],ws=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(oe,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>$(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>$(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Ue=c();r({clock:Ue,target:ee.load});const je=()=>{const{open:e}=U(),{students:t,totalCount:n,page:o,search:a,loading:i,isExam:u}=k({students:O.$pEStudents,loading:O.$loading,totalCount:O.$pEStudentsTotalCount,page:O.$pEStudentsPage,search:wt.$search,isExam:$e.$isExam});return d.useEffect(()=>{Ue()},[]),s.jsx(vs,{children:s.jsxs(Ss,{children:[s.jsxs(ys,{children:[s.jsx(Y,{value:a,setValue:Ct.update,size:"big"}),s.jsx(us,{})]}),s.jsx(R,{loading:i,data:t,columns:u?ws:ks,onRowClick:g=>{e(s.jsx(js,{student:g}),g.fullName)}}),s.jsx(dt,{condition:!0,align:"right",pages:Math.floor(n/$t),currentPage:o,setCurrentPage:ee.setPage})]})})},Cs=e=>`mutation EndSemesterForStudent {
    archiveStudent (input: {studentGuid: "${e}"}){
      archivedStudentEntity {
        studentGuid
        fullName
      }
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,ae=c(),Re=c(),B=S(async({studentId:e})=>(await h(Cs(e))).archivedStudentEntity);var v=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(v||{});const y=x({}).reset(Re);r({clock:ae,source:y,fn:(e,{studentId:t})=>({...e,[t]:"loading"}),target:y});r({clock:B.doneData,source:y,fn:(e,{studentGuid:t})=>({...e,[t]:"success"}),target:y});r({clock:B.fail,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"error"}),target:y});r({clock:B.done,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"success"}),target:y});r({clock:ae,target:B});const $s={endSemester:ae,reset:Re},Le={statuses:y},ze=c(),We=c(),ie=c(),He=c(),ce=x("").on(ze,(e,t)=>t).reset(ie),le=X({source:ce,effect:async e=>{const{students:t}=await h(Et(0,Pt({"group.groupName":{value:e??"",strict:!0}}),1e3));return t}});r({source:ce,filter:Boolean,target:le});const qe=x([]).on(le.doneData,(e,t)=>t.items).reset(ie),Es=tt(le.pending,Boolean),Ps=X({source:qe,effect:async e=>{e.forEach(t=>$s.endSemester({studentId:t.studentGuid}))}});r({clock:Le.statuses,filter:e=>Object.values(e).every(t=>t!==v.LOADING),target:We});r({clock:He,target:Ps});const bs={load:We,reset:ie,selectedGroupChanged:ze,endSemesterForGroup:He},Ns={$loading:Es,$pEStudents:qe,$selectedGroup:ce},f={events:bs,stores:Ns},Ds={[v.LOADING]:"Загрузка",[v.ERROR]:"Не зачтено",[v.SUCCESS]:"Успешно"},Gs={[v.LOADING]:s.jsx(ut,{}),[v.ERROR]:s.jsx(st,{color:b.red.main}),[v.SUCCESS]:s.jsx(nt,{color:b.green.main})},Is=l.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),Ts=()=>{const[e,t]=k([Le.statuses,f.stores.$pEStudents]);return s.jsx(j,{p:"30px",d:"column",jc:"space-between",children:t.map(n=>s.jsxs(j,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(Is,{children:n.fullName}),s.jsxs(j,{gap:"8px",w:"auto",children:[s.jsx(pt,{align:"center",children:Ds[e[n.studentGuid]??v.LOADING]}),Gs[e[n.studentGuid]??v.LOADING]]})]},n.studentGuid))})},Be=c(),As=c();r({clock:Be,target:f.events.load});r({clock:As,target:f.events.reset});const Os=l.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),Fs=l.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);l(j).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const Ms=l(j).withConfig({componentId:"sc-s6hadh-3"})([""]),Vs=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(oe,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>$(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>$(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],ve=()=>{const{open:e,close:t}=U(),{students:n,loading:o,selectedGroup:a}=k({students:f.stores.$pEStudents,loading:f.stores.$loading,selectedGroup:f.stores.$selectedGroup}),i=!!(n.length&&!o&&a),u=()=>{gt.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{f.events.endSemesterForGroup(),e(s.jsx(Ts,{}))},onReject:()=>{t(),f.events.reset()}})};return d.useEffect(()=>(Be(),()=>{f.events.reset()}),[]),s.jsxs(Os,{children:[!i&&s.jsx(mt,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Fs,{children:[s.jsxs(Ms,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(ye,{leftIcon:s.jsx(Se,{}),placeholder:"Номер группы",value:a,setValue:f.events.selectedGroupChanged,customMask:ke.groupMask,onValueEmpty:()=>f.events.selectedGroupChanged(""),onHintClick:g=>g&&f.events.selectedGroupChanged(g.id),request:we,size:"big"}),i&&s.jsx(p,{text:`Завершить семестр для ${a}`,width:"210px",background:b.green.main,textColor:b.white.main,onClick:u})]}),i&&s.jsx(R,{loading:o,data:n,columns:Vs})]})]})},Ls=()=>{const[e,t]=k([jt.peTeacher,ps]);d.useEffect(()=>{Me()},[]);const n=[me.AdminAccess,me.SuperUser].some(o=>{var a;return(a=e==null?void 0:e.permissions)==null?void 0:a.includes(o)})?[{title:"Студенты",content:s.jsx(je,{})},{title:"Управление",content:s.jsx(ls,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(ve,{})}]:[{title:"Студенты",content:s.jsx(je,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(ve,{})}];return s.jsx(ft,{padding:"10px",children:s.jsx(xt,{children:s.jsxs(j,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(ht,{appearance:!1,pages:n,currentPage:t,setCurrentPage:re}),n[t].content]})})})};export{Ls as default};
