import{u as a,y as m,x as s,p as i,bU as _,bM as q,bX as Ae,bW as Ee,m as O,r as J,Z as xe,b_ as he,b$ as we,j as N}from"./vendor-cbee1f3c.js";import{r as G,k as c,t as l,a1 as Re,N as Fe,u as Ve,v as Ce,n as L,U as Z}from"./index-1f9cdbd4.js";var R=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(R||{}),be=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(be||{});const Ue=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,Ie=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,ee=a(),te=a(),f=m(async e=>(await l(Ue(e)),e)),S=m(async({id:e})=>(await l(Ie(e)),e)),Te=S.pending,Me=f.pending;s({clock:ee,target:f});s({clock:f.doneData,target:G.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:te,target:S});s({clock:S.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:S.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});const Ne={addVisit:ee,removeVisit:te},F={addVisitFx:f,removeVisitFx:S},_e={pendingRemoveVisit:Te,pendingAddVisit:Me},se=a(),je=i("").on(se,(e,t)=>t),qe={update:se},Oe={$search:je},ne=a(),z=a(),oe=i({}).on(Oe.$search,(e,t)=>({...e,fullName:{value:t}})).on(ne,(e,{name:t,value:n,strict:o})=>{const r={...e};return n?{...r,[t]:{value:n,strict:o}}:(delete r[t],r)});s({clock:z,target:oe.reinit});s({clock:z,fn:()=>"",target:qe.update});const y={$filters:oe},it={addFilter:ne,resetFilters:z},ae=a(),Ge=i(!1).on(ae,(e,t)=>t),ct={$isExam:Ge},dt={setIsExam:ae};function re(e){var{source:t,timeout:n,target:o}=e;if(!_.unit(t))throw new TypeError("source must be unit from effector");if(_.domain(t,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=ze(n),d=a({name:"saveTimeoutId",sid:"vsg63k"}),p=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(d,(g,u)=>u),v=a({name:"saveReject",sid:"qddkx3"}),E=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(v,(g,u)=>u),$=o??a({name:"tick",sid:"a51tok"}),x=m(g=>{var{timeout:u,timeoutId:h,rejectPromise:w}=g;return h&&clearTimeout(h),w&&w(),new Promise((Pe,De)=>{v(De),d(setTimeout(Pe,u))})},{name:"timerBaseFx",sid:"-6dos97"}),k=q({and:{source:{timeoutId:p,rejectPromise:E},mapParams:(g,u)=>{var{timeoutId:h,rejectPromise:w}=u;return{timeout:g,timeoutId:h,rejectPromise:w}},effect:x},or:{name:"timerFx",sid:"ca9mop"}});E.reset(k.done),p.reset(k.done);var Se=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(t,(g,u)=>[u]),W=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),M=a({name:"triggerTick",sid:"31ed0l"});W.on(M,()=>!1).on([$,r,k],()=>!0);var ye=Ae([t,r],{name:"requestTick",sid:"7xoh8q"});return Ee({and:[{clock:ye,filter:W,target:M}],or:{sid:"-1mcdjn"}}),s({and:[{source:r,clock:M,target:k}],or:{sid:"-1j1lzh"}}),s({and:[{source:Se,clock:k.done,fn:g=>{var[u]=g;return u},target:$}],or:{sid:"-1475yq"}}),$}function ze(e){if(_.store(e,{sid:"-mlqvq"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return i(e,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const ie=e=>{const t=[];for(const[n,{value:o,strict:r}]of Object.entries(e))if(n.includes(".")){const[d,p]=n.split(".");typeof o=="number"?t.push({[d]:{[p]:{eq:o}}}):t.push({[d]:{[p]:{[r?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?t.push({[n]:{eq:o}}):t.push({[n]:{contains:`${o}`}});return{and:t}},V=(e,t=[])=>{let n=JSON.stringify(e);return t.forEach(o=>{const r=new RegExp(`"${String(o)}":"([^"]+)"`,"g");n=n.replace(r,`${String(o)}: $1`)}),n.replace(/"([^"]+)":/g,"$1:")},K=40,Be=(e,t=null,n=K)=>{const o=V(t,["course"]);return`query {
      students (take:${K}, skip: ${n*e}, where: ${o}, order: [{fullName:ASC}]){
        items {
            fullName
            groupNumber
            studentGuid
            visits
            additionalPoints
            pointsForStandards
            group {
                visitValue
            }
            hasDebtFromPreviousSemester
            archivedVisitValue
            course
            department
            pointsHistory(where: {workType: {eq: ONLINE_WORK}}) {
              points
            }
        }
        totalCount
      }
    }`},He=e=>`{
    student(guid: "${e}") {
        fullName
        groupNumber
        studentGuid
        hasDebtFromPreviousSemester
        archivedVisitValue
        visits
        additionalPoints
        pointsForStandards
        course
        department
        standardsHistory {
          id
          points
          standardType
          date
          comment
          teacherGuid
          teacher {
            fullName
          }
        }
        group {
          visitValue
        }
        visitsHistory {
          id
          date
          teacherGuid
          teacher {
            fullName
          }
        }
        pointsHistory{
          id
          workType
          comment
          date
          points
          teacherGuid
          teacher{
            fullName
          }
        }
      }
}`,Qe=(e=null)=>`{
      students(where: ${V(e,["course"])}) {
        totalCount
      }
    }`,C=a(),ce=a(),B=i(0).on(ce,(e,t)=>t).on(y.$filters,()=>0),H=q({source:{page:B,filters:y.$filters},effect:async({filters:e,page:t})=>{const{students:n}=await l(Be(t,ie(e)));return n}});re({source:O(B,y.$filters),timeout:200,target:C});const b=q({source:{filters:y.$filters},effect:async({filters:e})=>{const{students:t}=await l(Qe(ie(e)));return t.totalCount}});re({source:y.$filters,timeout:200,target:b});s({clock:C,target:H});s({clock:C,target:b});const j=i([]).on(H.doneData,(e,t)=>t.items),We=i(0).on(b.doneData,(e,t)=>t),Je=O(b.pending,H.pending,Boolean);s({clock:F.addVisitFx.doneData,source:j,filter:(e,{studentGuid:t})=>e.some(n=>n.studentGuid===t),fn:(e,t)=>{const n=JSON.parse(JSON.stringify(e)),o=n.find(r=>r.studentGuid===t.studentGuid);return++o.visits,n},target:j});const ut={load:C,setPage:ce},lt={$loading:Je,$pEStudents:j,$pEStudentsPage:B,$pEStudentsTotalCount:We},Le=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${V(e,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ze=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,de=a(),ue=a(),P=m(async({id:e})=>{await l(Ze(e))});s({clock:ue,target:P});const Ke=P.pending,D=m(async e=>(await l(Le(e)),e));s({clock:de,target:D});s({clock:D.doneData,target:G.close});s({clock:D.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:D.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:P.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});const mt={addAdditionPoints:de,removeAdditionPoints:ue},X={addAdditionPointsFx:D,removeAdditionPointsFx:P},gt={pendingRemoveAdditionPoints:Ke},Xe=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${V(e,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ye=e=>`mutation RemoveStudentRegulationPoints {
      deleteStandardPoints(input: { historyId: ${e} }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,le=a(),me=a(),A=m(async({id:e})=>{await l(Ye(e))});s({clock:me,target:A});const et=A.pending,U=m(async e=>(await l(Xe(e)),e));s({clock:le,target:U});s({clock:U.doneData,target:G.close});s({clock:U.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:A.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:A.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:c.evokePopUpMessage});const pt={addRegulationPoints:le,removeRegulationPoints:me},Y={addRegulationPointsFx:U,removeRegulationPointsFx:A},ft={pendingRemoveRegulationPoints:et},ge=a(),pe=a(),fe=a(),I=m(async e=>{const{student:t}=await l(He(e));return t});s({clock:ge,target:I});const Q=i(null).reset(pe),tt=O(F.addVisitFx.pending,I.pending,Boolean);s({clock:[F.addVisitFx.doneData,F.removeVisitFx.doneData,X.addAdditionPointsFx.doneData,X.removeAdditionPointsFx.doneData,Y.addRegulationPointsFx.doneData,Y.removeRegulationPointsFx.doneData],target:fe});s({clock:fe,source:Q,filter:e=>!!e,fn:e=>e.studentGuid,target:I});s({clock:I.doneData,target:Q});const vt={$selectedStudent:Q,$loading:tt},$t={setCurrentStudentId:ge,resetStudentId:pe},st=()=>`query loadComp {
        competitions
      }`,nt=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ve=a(),$e=a(),ke=m(async()=>{const{competitions:e}=await l(st());return e}),T=m(async e=>(await l(nt(e)),e));s({clock:$e,target:T});s({clock:T.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:T.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:ve,target:ke});const ot=i([]).on(ke.doneData,(e,t)=>t).on(T.doneData,(e,t)=>e.filter(n=>n!==t)),kt={load:ve,remove:$e},St={$competitions:ot},yt=({hasDebtFromPreviousSemester:e,archivedVisitValue:t,group:n,visits:o,additionalPoints:r,pointsForStandards:d})=>Math.round(e?t*o+r+d:n.visitValue*o+r+d),Pt=({studentGuid:e})=>{const[t,n]=J.useState(new Date().toISOString()),[o,r]=xe([_e.pendingAddVisit,Re.peTeacher]),d=new Date(t),p=[R.AdminAccess,R.SuperUser,R.SecretaryAccess].some($=>{var x;return(x=r==null?void 0:r.permissions)==null?void 0:x.includes($)}),v=(he(d,{start:we(new Date,1),end:new Date})||p)&&d.getDay()!==0&&d.getDay()!==1;J.useEffect(()=>{n(new Date().toISOString())},[e]);const E=()=>{Ne.addVisit({studentGuid:e,date:L(t,"numeric")})};return N.jsxs(Fe,{gap:"4px",ai:"flex-start",children:[N.jsx(Ve,{alertMessage:v?"":"Не допустимая дата",type:"date",setValue:n,value:t,hideCross:!0}),N.jsx(Ce,{isActive:v&&!o,text:`Добавить посещение ${L(t,"numeric")}`,onClick:E,width:"100%",background:Z.blue.main,textColor:Z.white.main})]})};export{Pt as A,be as P,K as S,y as a,ct as b,it as c,re as d,kt as e,dt as f,ut as g,yt as h,lt as i,V as j,Oe as k,qe as l,Be as m,ie as n,R as o,Ne as p,_e as q,vt as r,St as s,mt as t,gt as u,pt as v,ft as w,$t as x};