import{F as Ce,a as li,b as st,c as Xi,H as wn,d as gi,y as L,u as S,p as X,e as V,x as $,S as Ve,m as Rn,r as l,s as p,j as t,f as Qe,I as Cd,g as Pd,h as Od,i as vo,A as Ln,k as I,l as Ad,n as $e,o as It,q as xn,t as Dd,v as Nd,R as de,w as ci,z as xi,B as dt,L as Z,C as di,D as Id,E as Rd,G as zn,J as fi,K as mi,M as bi,N as Mn,O as jo,P as ot,Q as wo,T as Et,U as _o,V as Ld,W as Fn,X as zd,Y as Md,Z as Pe,_ as we,$ as Bn,a0 as ko,a1 as So,a2 as To,a3 as Eo,a4 as Fd,a5 as Bd,a6 as Hd,a7 as Ud,a8 as Ye,a9 as Rt,aa as Wd,ab as Vd,ac as Gd,ad as qd,ae as Yd,af as Jd,ag as K,ah as $o,ai as Xd,aj as Kd,ak as Qd,al as Co,am as Hn,an as Po,ao as Zd,ap as ep,aq as tp,ar as Oo,as as ip,at as Ki,au as np,av as Ao,aw as sp,ax as op,ay as ap,az as Do,aA as rp,aB as lp,aC as Fi,aD as No,aE as Io,aF as ne,aG as bs,aH as Ro,aI as cp,aJ as dp,aK as pp,aL as Li,aM as up,aN as hp,aO as gp,aP as xp,aQ as fp,aR as mp,aS as bp,aT as yp,aU as vp,aV as jp,aW as wp,aX as _p,aY as kp,aZ as Sp,a_ as Tp,a$ as Ep,b0 as $p,b1 as Cp,b2 as Pp,b3 as Op,b4 as Ap,b5 as Dp,b6 as Lo,b7 as Np,b8 as Ip,b9 as Rp,ba as Lp,bb as zp,bc as Mp,bd as Fp,be as zo,bf as Bp,bg as Hp,bh as Up,bi as Wp,bj as Vp,bk as Gp,bl as qp,bm as Yp,bn as Jp,bo as Mo,bp as Xp,bq as _n,br as kn,bs as Kp,bt as Qp,bu as Zp,bv as eu,bw as tu,bx as iu,by as nu,bz as su,bA as ys,bB as ou,bC as au,bD as ru,bE as Fo,bF as Bo,bG as lu,bH as cu,bI as du,bJ as pu,bK as uu,bL as hu}from"./vendor-831b4923.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const gu="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",xu=3,Qi=["home","settings","all"],Ho=["home","settings","download-agreements","all"],Uo="https://lk.eseur.ru/signup",fu="https://old.mospolytech.ru/index.php?id=3428",_={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},At={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},ES={Зачтено:_.green,"Не зачтено":_.red,Отлично:_.green,Хорошо:_.blue,Удовлетворительно:_.orange,Неудовлетворительно:_.red,"Не явился":_.red,default:_.red},$S={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},D="https://e.mospolytech.ru/old",mu="2023-10-03T10:43:43",_t={info:{icon:Ce,color:"blue",title:"Информация"},alert:{icon:li,color:"orange",title:"Внимание!"},failure:{icon:st,color:"red",title:"Ошибка"},success:{icon:Xi,color:"green",title:"Успешно"},tip:{icon:wn,color:"grey",title:"Подсказка"},hint:{icon:wn,color:"white",title:"Подсказка"},hrFailure:{icon:st,color:"red",title:"Ошибка"}},bu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},yu=["image/jpeg","image/jpg","image/png","application/pdf"],vu=10,Wo="(max-width: 766px)",ju="(min-width: 767px)",Vo="(max-width: 1000px)",Go="(max-width: 1380px)",qo="(min-width: 1381px)",ee={isMobile:`@media ${Wo}`,isNotMobile:`@media ${ju}`,isTablet:`@media ${Vo}`,isSmallTesktop:`@media ${Go}`,isMiddleTesktop:`@media ${qo}`},wu=[{query:Wo,title:"isMobile",value:"mobile"},{query:Vo,title:"isTablet",value:"tablet"},{query:Go,title:"isSmallDesktop",value:"smallDesktop"},{query:qo,title:"isMiddleDesktop",value:"middleDesktop"}],Un={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},R=!window.location.port||window.location.port==="80";console.log("Running on production",R);var Y=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(Y||{});const pt=()=>localStorage.getItem(Y.JWT),$t=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},CS=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===403||i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Tt.logout();else{n._retry=!0;const h=localStorage.getItem(Y.JWTRefresh);try{const{accessToken:g,refreshToken:x}=await Cu(h??"");return localStorage.setItem(Y.JWT,g),localStorage.setItem(Y.JWTRefresh,x),e(n)}catch{Tt.logout()}}return Promise.reject(i)},_u=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${pt()}`,e),ku=`${D}/lk_api.php`,Su="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=gi.create({baseURL:ku,withCredentials:!0}),he=gi.create({baseURL:Su});he.interceptors.request.use(_u);function Zi(e){return e.isAxiosError}function B(){return localStorage.getItem(Y.Token)??sessionStorage.getItem(Y.Token)??""}const Tu=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Eu=e=>F.get(`?getUser&token=${e}`),$u=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),PS=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",B()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},OS=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${B()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},AS=async e=>{const i=new FormData;return i.set("email",e),i.set("token",B()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},DS=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",B()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Cu=async e=>{const{data:i}=await gi.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Pu=e=>F.get(`?getSchedule&group=${e}&token=${B()}`),Ou=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${B()}`),Au=()=>F.get(`?getSchedule&session=1&token=${B()}`),Du=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${B()}`),Nu=()=>F.get(`?getPayments&token=${B()}`),Iu=e=>F.get(`?signAgreement=${e}&token=${B()}`),Ru=e=>F.get(`?signContract=${e}&token=${B()}`),Lu=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${B()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},zu=e=>F.get(`?getMessages&token=${B()}&id=${e}`),Mu=async()=>(await F.get(`?getPEPStatus&token=${B()}`)).data,Fu=async()=>(await F.get(`?setPEPAccept&token=${B()}`)).data,Bu=()=>F.get(`?getContactData&token=${B()}`),Hu=e=>{const i=new FormData;i.set("token",B()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Uu=()=>F.get(`?getRequestHighComfort&token=${B()}`),NS=e=>{const i=new FormData;i.set("token",B()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Wu=()=>F.get(`?getAppRequests&token=${B()}`),Vu=()=>F.get(`?getAppData&token=${B()}`),Gu=async()=>await he.get(`/Dismissal.GetAllHistory?employeeGuid=${$t(pt()??"").IndividualGuid}`,{timeout:3e4}),qu=async()=>{const{data:e}=await he.get("/AnotherPlaceWork.GetDivisions");return e.divisions},Yu=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",B()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},Ju=()=>he.get(`?getAppRequests&token=${B()}`),Xu=()=>he.get(`?getAppData&token=${B()}`),Ku=e=>he.post("Dismissal.Post",e),Qu=async()=>(await F.get(`?getAdminLinks&token=${B()}`)).data,Zu=async e=>(await F.get(`?PDinfo&token=${B()}`)).data,Yo=()=>F.get(`?getNotification&token=${B()}`),eh=e=>F.get(`?viewNotification=${e}&token=${B()}`),th=Object.freeze(Object.defineProperty({__proto__:null,get:Yo,view:eh},Symbol.toStringTag,{value:"Module"})),Jo=()=>F.get(`?getDocList&token=${B()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),ih=e=>F.get(`?viewDoc=${e}&token=${B()}`),nh=Object.freeze(Object.defineProperty({__proto__:null,get:Jo,view:ih},Symbol.toStringTag,{value:"Module"})),sh=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${B()}`),oh=e=>F.get(`?getDivs=${e}&page=1&token=${B()}`),ah=()=>F.get(`?getCheckData&token=${B()}`),rh=e=>{const i=new FormData;i.set("token",B()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},lh=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${B()}`),ch=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${B()}`),dh=async()=>(await F.get(`?getAlerts&token=${B()}`)).data,ph=()=>F.get(`?getNotifications&token=${B()}`),uh=e=>F.get(`?clearNotificationById=${e}&token=${B()}`),hh=()=>F.get(`?clearAllNotifications&token=${B()}`);function gh({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const vs={data:null,preparedData:null,loading:!1,error:null},en=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>gu})=>{const o=e??vs,a=()=>({data:V(u).data,preparedData:V(u).preparedData,loading:V(r.pending),error:V(u).error}),r=L(async h=>{try{const g=await i.get(h);return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),c=L(async h=>{var g;try{const x=await((g=i.post)==null?void 0:g.call(i,h));return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),d=S(),u=X(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:g})=>({...h,error:g,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:g,preparedData:x})=>({...h,data:g,preparedData:x})).on(r.failData,(h,g)=>({...h,error:g.message})).on(d,()=>({...vs}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function xh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const fh=en({api:{get:Lu},prepareData:xh}),at=en({api:{get:Qu}}),mh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),bh=en({api:{get:dh},prepareData:mh}),js={message:"",type:"success",isOpen:!1,time:2e3},Xo=S(),Ko=S(),Qo=S();X(js).on(Xo,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ko,(e,{isOpen:i})=>({...e,isOpen:i})).on(Qo,()=>({...js}));const Oe={evokePopUpMessage:Xo,openPopUpMessage:Ko,clearStore:Qo},ws={listApplication:null,error:null,dataUserApplication:null},ei=L(async()=>{const e=await Ju();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),zi=L(async()=>{const e=await Xu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),tn=L(async e=>await Ku(e));$({clock:tn.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});$({clock:tn.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const yh=S();Ve({from:tn.doneData,to:ei});X(ws).on(zi,e=>({...e,error:null})).on(zi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(zi.failData,(e,i)=>({...e,error:i.message})).on(ei,e=>({...e,error:null})).on(ei.doneData,(e,i)=>({...e,listApplication:i})).on(ei.failData,(e,i)=>({...e,error:i.message})).on(yh,()=>({...ws}));const vh={getApplicationsFx:ei,getUserDataApplicationsFx:zi,postApplicationFx:tn},_s={message:"",type:"success",isOpen:!1,time:2e3},jh=()=>V(wh),Zo=S(),ea=S(),ta=S(),wh=X(_s).on(Zo,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ea,(e,{isOpen:i})=>({...e,isOpen:i})).on(ta,()=>({..._s})),ia={usePopUpMessage:jh},W={evokePopUpMessage:Zo,openPopUpMessage:ea,clearStore:ta},_h=Object.freeze(Object.defineProperty({__proto__:null,events:W,selectors:ia},Symbol.toStringTag,{value:"Module"})),ks={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},ti=L(async()=>{const e=await Gu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ii=L(async()=>{const e=await Wu();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ni=L(async()=>{const e=await Vu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Wn=L(async e=>{const i=await Yu(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),kh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=V(Sh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:V(ni.pending),workerLoading:V(Rn(ti.pending,vh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},na=S();Ve({from:Wn.doneData,to:ii});$({clock:Wn.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:W.evokePopUpMessage});const Sh=X(ks).on(ni,e=>({...e,error:null})).on(ni.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ni.failData,(e,i)=>({...e,error:i.message})).on(ii,e=>({...e,error:null})).on(ii.doneData,(e,i)=>({...e,listApplication:i})).on(ii.failData,(e,i)=>({...e,error:i.message})).on(ti,e=>({...e,error:null})).on(ti.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ti.failData,(e,i)=>({...e,error:i.message})).on(na,()=>({...ks})),_e={useApplications:kh},Xe={getApplicationsFx:ii,getUserDataApplicationsFx:ni,postApplicationFx:Wn,getWorkerPosts:ti},Th={clearStore:na},Eh=Object.freeze(Object.defineProperty({__proto__:null,effects:Xe,events:Th,selectors:_e},Symbol.toStringTag,{value:"Module"})),Ss={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},$h=()=>V(Ch),sa=S(),oa=S(),aa=S(),Ch=X(Ss).on(sa,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(oa,e=>({...e,isOpen:!1})).on(aa,()=>({...Ss})),ra={useConfirm:$h},Je={evokeConfirm:sa,closeConfirm:oa,clearStore:aa},Ph=Object.freeze(Object.defineProperty({__proto__:null,events:Je,selectors:ra},Symbol.toStringTag,{value:"Module"})),Oh=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:V(d).data,loading:V(r.pending),error:V(d).error,completed:V(d).completed}),o=S(),a=L(async u=>{try{return(await i.post(u)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=L(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(u){throw new Error(u)}return n.data}),c=S(),d=X(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Ah,events:Dh,selectors:Nh}=Oh({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Bu,post:Hu}}),Ih=Object.freeze(Object.defineProperty({__proto__:null,effects:Ah,events:Dh,selectors:Nh},Symbol.toStringTag,{value:"Module"})),la=S(),ca=S(),da=S(),pa=S(),yi=L(async()=>{const i=(await Fu())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});$({clock:yi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:W.evokePopUpMessage});$({clock:yi.doneData,fn:()=>!0,target:da});$({clock:yi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:W.evokePopUpMessage});const pi=L(async()=>{try{return(await Mu())[0]}catch(e){throw new Error(e)}});$({clock:ca,target:yi});$({clock:la,target:pi});const ua=S(),Rh=pi.pending,Lh=yi.pending,zh=X(!1).on(pa,(e,i)=>i),Mh=X(!1).on(da,(e,i)=>i),Fh=X(null).on(pi,()=>null).on(pi.failData,(e,i)=>i.message),Bh=X(null).on(pi.doneData,(e,i)=>i).on(ua,()=>null),ha={$error:Fh,$electronicInteractionStore:Bh,$completed:zh,$done:Mh,$loading:Rh,$workerLoading:Lh},Sn={getElectronicInteraction:la,postElectronicInteraction:ca,changeCompleted:pa,clearStore:ua},Hh=Object.freeze(Object.defineProperty({__proto__:null,events:Sn,stores:ha},Symbol.toStringTag,{value:"Module"})),re=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Ts=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),re(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),re(n,"extraWeird")}},Ai=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Ts(-30*11),maxValueInput:Ts(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Di={kvdCert:Ai({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Ai({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Ai({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Ai({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Ee=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},Uh={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Wh=()=>Object.keys(Be).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),ga=(e="")=>({[e]:{...Wh(),[Be["settings-appearance"]]:{id:Be["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Be["settings-home-page"]]:{id:Be["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Be["settings-customize-menu"]]:{id:Be["settings-customize-menu"],property:{pages:Qi}},[Be["settings-notifications"]]:{id:Be["settings-notifications"],property:Uh}}});var Be=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Be||{});const Tn={settings:ga(),error:null,completed:!1};let Le;const Vh=()=>({settings:V(Mi).settings[Le],error:V(Mi).error,completed:V(Mi).completed}),Gh=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},xa=L(e=>{Le=e;const i=JSON.parse(localStorage.getItem(Y.NewSettings)??"{}")[Le];return Gh(i,ga(e)[e])}),fa=S(),ma=S(),ba=S(),Mi=X(Tn).on(ma,(e,i)=>({...e,completed:i.completed})).on(xa.doneData,(e,i)=>({...e,settings:{[Le]:i}})).on(fa,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Le]:{...e.settings[Le],[i]:{...e.settings[Le][i],property:{...e.settings[Le][i].property,[n]:s}}}}})).on(ba,()=>({...Tn}));Mi.watch(e=>{if(e!==Tn&&Le){const i=JSON.parse(localStorage.getItem(Y.NewSettings)??JSON.stringify({}));i[Le]=e.settings[Le],localStorage.setItem(Y.NewSettings,JSON.stringify(i))}});const Ft={useSettings:Vh},vi={updateSetting:fa,changeCompleted:ma,clearStore:ba},qh={getLocalSettingsFx:xa},ut=()=>{var a,r;const{settings:e}=Ft.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),vi.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},Yh=p.button`
    display: flex;
    align-items: center;
    justify-content: ${({align:e="center"})=>e};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--reallyBlue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    min-width: ${({minWidth:e})=>e&&e};
    text-decoration: none;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    opacity: ${({isActive:e})=>e?1:.5};
    height: ${({height:e="40px"})=>e};
    ${({flipped:e})=>e&&"transform: rotate(180deg);"};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({hoverBackground:e,isChosen:i,background:n})=>e??(i?"var(--blue)":n??"var(--search)")};
        filter: brightness(0.97);
    }

    .text {
        margin-top: ${({direction:e,text:i})=>e==="vertical"&&i&&"6px"};
    }

    .icon {
        margin-right: ${({text:e,direction:i})=>e&&i==="horizontal"?"7px":"0"};
        width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        min-width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        height: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"15px"};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 100%;
            height: 100%;
            max-width: 18px;
            max-height: 18px;
            margin-right: 0 !important;
        }
    }

    ${ee.isTablet} {
        font-size: 12px;
        height: ${({height:e="36px"})=>e};
        position: ${({fixedInMobile:e})=>e&&"absolute"};
        z-index: ${({fixedInMobile:e})=>e&&"5"};
        bottom: 10px;
        right: 10px;

        .text {
            margin-top: ${({direction:e,shrinkTextInMobile:i})=>e==="vertical"&&!i?"4px":"0px"};
        }

        .icon {
            width: ${({direction:e})=>e==="vertical"?"30px":"15px"};
            min-width: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            margin-right: ${({shrinkTextInMobile:e,text:i,direction:n})=>e||n==="vertical"||!i?"0px":"7px"};
            height: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            svg {
                max-width: 23px;
                /* max-height: 23px; */
            }
        }

        span {
            display: ${({shrinkTextInMobile:e})=>e?"none":"flex"};
        }
    }
`;function v(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:g,shrinkTextInMobile:x,fixedInMobile:m,direction:f="horizontal",isActive:b=!0,height:y,notActiveClickMessage:C,flipped:j,...T}=e,k=U=>{b?s==null||s(U):C&&W.evokePopUpMessage({type:"failure",message:C,time:1e4})};return t.jsxs(Yh,{text:!!n,onClick:k,isChosen:h,width:o,minWidth:a,background:r,padding:g,textColor:c,shrinkTextInMobile:x,hoverBackground:d,align:u,direction:f,isActive:b,fixedInMobile:m,height:y,flipped:j,...T,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const En=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Es=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Jh=p.div`
    padding: ${({padding:e})=>e??"0"};
    position: ${({position:e})=>e??"relative"};
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"fit-content"};
    min-width: ${({minWidth:e})=>e};

    .bottom-wrapper {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`,Xh=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],nn=p.div.withConfig({shouldForwardProp:e=>!Xh.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Es(n):En(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?En(i):Es(n)};
    gap: ${({gap:e})=>(e??5)+"px"};
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    color: var(--text);
    font-size: ${({fontSize:e})=>e??"1em"};
    overflow-x: ${({scroll:e})=>e&&"auto"};
    flex-wrap: ${({wrap:e})=>e&&"wrap"};
    padding: ${({innerPadding:e})=>e??"0"};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: ${({direction:e})=>e==="horizontal"&&"none"};
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({wrapOnMobile:e})=>e?"wrap":"nowrap"};
        overflow-x: auto;
    }
`,Kh=p.div`
    width: ${({size:e})=>e?e.width:"100px"};
    min-width: ${({size:e})=>e?e.width:"100px"};
    height: ${({size:e,shape:i})=>e?i==="circle"?e.width:e.height:"20px"};
    border-radius: ${({shape:e})=>e==="circle"?"100%":"10px"};
    background: var(--almostTransparent);
    margin: ${({margin:e})=>e};
    animation: ${({pulse:e})=>e&&"skeleton 1s infinite"};

    @keyframes skeleton {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`;function q({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Kh,{pulse:s,size:i,shape:e,margin:n})}const Qh=p(nn)`
    height: 100%;
`,Zh=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(Qh,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(q,{...o,key:a}))}),mt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function eg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:mt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:mt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:mt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:mt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:mt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:mt(n),children:i});default:return t.jsx("h1",{className:"title",style:mt(n),children:i})}}const tg=p.div`
    width: 100%;
    text-align: ${({align:e})=>e};
    margin-bottom: ${({bottomGap:e})=>typeof e=="string"?e:e?"10px":"0"};
    display: inline-flex;
    align-items: center;
    justify-content: ${({align:e})=>e?e==="left"?"flex-start":e==="right"?"flex-end":e:"center"};

    svg {
        min-width: ${({size:e})=>`${58-e*10}px`};
        height: ${({size:e})=>`${58-e*10}px`};
        margin-right: 8px;
        color: ${({iconColor:e})=>e};
    }
`,ig=p.span`
    color: var(--red);
    margin-right: 5px;
`,ng=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function M(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(tg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(eg,{size:o,width:r,children:[a&&t.jsx(ig,{children:"*"}),t.jsx(ng,{width:r,children:s})]})]}):null}const sg=(e,i,n)=>n?"#fff":e?_[_t[i].color].dark3:_[_t[i].color].light3,og=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>sg(i,e,n)};
    background: ${({type:e,solidBackground:i})=>_[_t[e].color][i?"main":"transparent3"]};
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    justify-content: flex-end;
    line-height: ${({lineHeight:e})=>e};
    align-items: ${({align:e})=>e==="left"?"flex-start":e==="center"?"center":"flex-end"};

    .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({gap:e})=>e??0};
    }

    a {
        text-decoration: underline;
        color: ${({type:e,isLightTheme:i})=>_[_t[e].color][i?"main":"light2"]};
    }
`,ag=()=>t.jsx(Zh,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function J({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:g=!1,align:x="left",visible:m=!0,loading:f=!1}){if(!m)return null;const{theme:b}=ut();return t.jsxs(og,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:x,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:g,children:[t.jsx(M,{size:4,align:x,icon:n===null?null:n??_t[e].icon({}),children:a??_t[e].title}),r&&t.jsx(v,{onClick:r,icon:t.jsx(Qe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),f&&t.jsx(ag,{})]})}p.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .message {
        position: absolute;
        right: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        left: ${({direction:e})=>"auto"};
        top: ${({direction:e})=>e==="vertical"?"0%":"auto"};
        bottom: ${({direction:e})=>e==="vertical"?"auto":"calc(100% + 10px)"};
    }

    .circle + .message {
        top: ${({direction:e})=>e==="vertical"?"0%":"calc(100% + 10px)"};
        left: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        right: ${({direction:e})=>e==="vertical"?"100%":"auto"};
        bottom: auto;
    }

    .circle {
        min-width: ${({type:e})=>e==="big"?"30px":"20px"};
        min-height: ${({type:e})=>e==="big"?"30px":"20px"};
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?_.green.main:_.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?_.blue.transparent3:e?_.green.transparent3:_.grey.transparent3};
        margin: 6px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8em;
        font-weight: bold;
        cursor: pointer;
    }
`;const rg=p.div`
    min-width: ${({direction:e,distance:i})=>e==="vertical"?"5px":(i??100)+"px"};
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    height: ${({direction:e,distance:i})=>e==="vertical"?(i??100)+"px":"5px"};
    overflow: hidden;
    width: 100%;

    .inside-line {
        height: ${({direction:e,filled:i})=>e==="vertical"?(i??100)+"%":"5px"};
        border-radius: 10px;
        width: ${({direction:e,filled:i})=>e==="vertical"?"100%":(i??100)+"%"};
        background: ${({reached:e})=>e?_.green.main:"none"};
    }
`,lg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(rg,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ue=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,cg="/assets/sad-emoji-0c60bf90.gif",se=p.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,dg=p.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    line-height: 1.7rem;

    span {
        font-weight: 500;
    }

    .image {
        margin-bottom: 10px;
        img,
        & > svg {
            min-width: ${({size:e})=>e??"100px"};
            height: ${({size:e})=>e??"100px"};
        }

        & > svg {
            margin: 20px 0;
            opacity: 0.6;
        }
    }

    .error-content {
        margin-top: 20px;
    }
`;function pe({text:e,image:i,size:n,children:s}){return t.jsxs(dg,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||cg,alt:"груфтим("}):i}),t.jsx(se,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const pg="/assets/loading-c8041cd3.gif",ug=p.img`
    width: 40px;
`;function ht(e){return t.jsx(ug,{...e,src:pg,alt:"loading",className:"loading-circle"})}const hg="/assets/logo-4d9aa449.png",gg="/assets/mospolytech-logo-white-b1e4f630.png",xg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function sn({width:e,className:i,short:n=!1}){return t.jsx(xg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?gg:hg,alt:"Logo"})})}const fg=p.img``;function Vn({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(q,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(fg,{src:i,alt:o,height:n,width:s})}const mg=p.div`
    .wrapper {
        position: relative;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
    }
    .circle-blue {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        background: ${({color:e})=>e??"var(--blue)"};
        animation: expand 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-blue-shadow {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        opacity: 1;
    }

    .circle-white {
        position: absolute;
        top: 3px;
        left: 3px;
        width: ${({size:e})=>`calc(${e} - 6px)`};
        height: ${({size:e})=>`calc(${e} - 6px)`};
        transform: scale(0);
        border-radius: 50%;
        background: var(--block);
        animation: expand 0.4s 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    @keyframes expand {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .check-svg {
        position: absolute;
        width: ${({size:e})=>`calc(${e} + 10px)`};
        height: ${({size:e})=>`calc(${e} + 10px)`};
        top: -18px;
        left: -20px;
        width: 50px;
        height: 50px;
        top: -13px;
        left: -14px;
        transform-origin: center;
        animation: 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both scaleCheck;
    }

    .check-poly {
        fill: transparent;
        stroke-width: 3;
        stroke-dasharray: 36px 36px;
        stroke: ${({color:e})=>e??"var(--blue)"};
        animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both drawCheck;
    }

    @keyframes scaleCheck {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
        }
    }

    @keyframes drawCheck {
        0% {
            stroke-dashoffset: 36px;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
`;function ya({size:e,color:i}){return t.jsx(mg,{size:e,color:i?_[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const bg=p.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    textarea {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({textAreaAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({textAreaAppearance:e})=>e?"10px":"0"};
        padding-right: 35px;
        min-height: 36px;
        height: fit-content;
        max-height: 120px;
        overflow-x: hidden;
        resize: none;

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;function yg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(bg,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(M,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const vg=p.button`
    position: relative;
    width: ${({width:e})=>e??"100%"};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${e=>e.isLoading?.5:1};
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({height:e})=>e??"40px"};
    min-height: ${({height:e})=>e??"40px"};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    background: ${({isDone:e,background:i,isActive:n})=>e?n?"var(--green)":"var(--greenTransparent)":i??(n?"var(--blue)":"var(--blueTransparent)")};
    animation: ${({pulsing:e})=>e&&"1s pulsing infinite"};

    @keyframes pulsing {
        0% {
            outline: 0px solid var(--blue);
        }
        100% {
            outline: 10px solid transparent;
        }
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @keyframes button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes short-button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes button-animation-out {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .inner-button {
        z-index: 1;

        .inner-button-success {
            animation: ${({repeatable:e})=>e?"button-animation-in 2s forwards":"short-button-animation-in 2s forwards"};
        }

        .inner-button-text {
            animation: button-animation-out 0.5s forwards;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--green);
        width: ${e=>e.completed?"2000px":"0"};
        height: ${e=>e.completed?"2000px":"0"};
        border-radius: 100%;
        transition: 0.6s;
        z-index: 0;
    }

    .loading-circle {
        position: relative;
        transform: none;
        left: auto;
        top: auto;
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 0.8em;
        height: 36px;
    }
`,Lt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:g=!0,isLoading:x=!1,completed:m=!1,repeatable:f=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(W.evokePopUpMessage({message:c,type:"success"}),f&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const y=()=>{if(g&&!h&&!x)return i();b&&W.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(vg,{isLoading:x,background:a,className:"submit-button",completed:m,isActive:g&&!h&&!m,onClick:y,isDone:h,width:n,height:s,repeatable:f,tabIndex:g&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Cd,{})," ",r]}):x?t.jsx(ht,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Bi={small:"32px",middle:"36px",big:"44px"},He=e=>({size:i})=>e[i],jg=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,wg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},_g={groupMask:jg,phoneMask:wg},kg=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,g]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const x=l.useCallback(y=>y.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:y=>{y.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(y=>y==="password"?"text":"password"),handleOnChange:y=>{if(i(c?r?r(y.target.value,e):n==="tel"?_g.phoneMask(y):n==="email"?x(y.target.value):y.target.value:y.target.value),n==="date"&&(o||a)){const C=new Date(y.target.value);let j=!1;if(o){const T=new Date(o);j=C<T}if(a&&!j){const T=new Date(a);j=C>T}g(j)}}}},Sg=p.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({inputAppearance:e})=>e?"var(--theme-1)":"transparent"};
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        height: ${He(Bi)};
        max-height: ${He(Bi)};
        border: ${({danger:e})=>e&&`2px solid ${_.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({inputAppearance:e})=>e&&"4px solid var(--almostTransparentOpposite)"};
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    .loading-circle {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`,rt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:g="Введите сюда",type:x="text",danger:m,alertMessage:f,loading:b=!1,isActive:y=!0,inputAppearance:C=!0,mask:j=!1,autocomplete:T=!1,minValue:k=void 0,maxValue:U=void 0,maxLength:N=void 0,hideCross:A=!1,stepSize:Q=.1,size:O="middle"}=i,{inputType:te,buttonOnClick:Te,danger:ye,handleOnChange:qe,phoneMaskKeyDown:De}=kg(s,o,x,m,k,U,h,j);return t.jsxs(Sg,{leftIcon:!!a,isActive:y,inputAppearance:C,width:d,danger:ye,minWidth:u,size:O,children:[t.jsx(M,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(J,{type:"alert",visible:!!f,icon:t.jsx(Pd,{}),title:f??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:g,min:k,max:U,maxLength:N,step:Q??void 0,type:te,placeholder:g,value:s??"",autoComplete:T?"on":"off",onKeyDown:ge=>x==="tel"&&De(ge),onChange:qe,required:c,readOnly:!y,ref:n}),x!=="password"?!!(s!=null&&s.length)&&C&&(b?t.jsx(ht,{}):!A&&t.jsx(v,{icon:t.jsx(Qe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(v,{icon:te==="password"?t.jsx(Od,{}):t.jsx(vo,{}),tabIndex:-1,onClick:Te})]})}),Tg=p.div`
    user-select: none;
    min-width: 56px;
    height: 30px;

    .checkbox {
        display: none;
    }

    .toggle-body {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        background: var(--theme-2);
        cursor: pointer;
        border-radius: 50px;
        padding: 4px;
        transition: 0.2s background;
    }

    .toggle-circle {
        height: 100%;
        background: #fff;
        width: 22px;
        display: block;
        border-radius: 100%;
        transition: 0.2s;
    }

    .checkbox:checked + .toggle-body .toggle-circle {
        margin-left: calc(100% - 22px);
    }

    .checkbox:checked + .toggle-body {
        background: #6290e4;
    }

    .checkbox:active + .toggle-body .toggle-circle {
        transform: scale(0.9);
    }
`,Eg="/assets/thinking-emoji-f3c10f79.gif",$g=["loading"],Cg=p.div.withConfig({shouldForwardProp:e=>!$g.includes(e)})`
    width: 100%;
    padding: 10px;
    height: 100%;

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        opacity: ${({loading:e})=>e?1:0};
        visibility: ${({loading:e})=>e?"visible":"hidden"};
        transform: scale(${({loading:e})=>e?"1":"0.98"});
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;

        img {
            width: 40px;
        }
    }

    .content {
        transition: 0.2s;
        opacity: ${({loading:e})=>e?0:1};
        visibility: ${({loading:e})=>e?"hidden":"visible"};
        /* transform: scale(${({loading:e})=>e?"0.98":"1"}); */
        height: 100%;
    }

    .reload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);

        & > * + * {
            margin-top: 10px;
        }
    }

    @media (max-width: 550px) {
        padding: 10px;
    }
`,gt=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Cg,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(pe,{text:n,image:a&&Eg,children:!a&&t.jsx(v,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Ln,{})})})}):t.jsx(ht,{})}),t.jsx("div",{className:"content",children:e})]})),Pg=p.a`
    display: flex;
    align-items: center;
    justify-content: ${({align:e})=>e??"center"};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--blue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    text-decoration: none;
    font-size: 0.8em;
    height: ${({height:e="40px"})=>e};
    min-height: ${({minHeight:e="40px"})=>e};
    opacity: ${({isActive:e})=>e?1:.5};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    button {
        outline: none;
    }

    &:focus-visible {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        margin-right: ${({text:e})=>e?"7px":"0"};
        width: 15px;
        height: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,Og=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:g=!0,isChosen:x=!1})=>t.jsxs(Pg,{text:!!i,onClick:m=>g&&n&&n(m),isChosen:x,width:s,background:o,textColor:a,href:c,align:r,isActive:g,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),ji=l.memo(Og),va=p.div`
    width: 100%;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"700px"};
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--block-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 80px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Bt=p.div`
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"600px"};
    padding: 20px;
    border-radius: var(--brSemi);
    background: transparent;
    box-shadow: var(--block-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Ag=p.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    text-decoration: none;
    color: var(--text);
    padding: 5px;
    border-radius: var(--brLight);

    .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.8em;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 28px;
        width: 28px;
        height: 28px;

        svg {
            width: 21px;
            height: 21px;
        }
    }
`,Dg=({title:e,link:i,type:n})=>t.jsxs(Ag,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(I,{}):t.jsx(Ad,{})}),t.jsx("div",{className:"title",children:e})]}),Ng=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Ig={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Rg=()=>$e(Lg),ja=S(),wa=S(),_a=S(),Lg=X(Ig).on(ja,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Ng(n,220,s),open:!0,content:i,type:o})).on(wa,e=>({...e,open:!1})).on(_a,(e,{position:i})=>({...e,position:i})),Me={open:ja,close:wa,changePosition:_a},zg={useContextMenu:Rg},Mg=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},fn=new Set,ka=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{fn.add(n.key),!e.slice(0,e.length-1).find(o=>!fn.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{fn.delete(n.key)})},[])},Ze=p.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: ${({justifyContent:e})=>e??"space-between"};
    background: ${({background:e})=>e??"var(--block)"};
    line-height: ${({lineHeight:e})=>e};
    border-radius: var(--brLight);
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    box-shadow: ${({shadow:e})=>(e??!0)&&"var(--very-mild-shadow)"};
    padding: ${({padding:e})=>e??"20px"};
    height: ${({height:e})=>e??"330px"};
    max-width: ${({maxWidth:e})=>e??"800px"};
    width: ${({width:e})=>e??"100%"};
    color: var(--text);
    gap: ${({gap:e})=>e??"0"};
    max-height: ${({maxHeight:e})=>e};
    min-height: ${({minHeight:e})=>e};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    ${ee.isMobile} {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,P=p.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({$wrap:e})=>e&&"wrap"};
`,me=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Sa=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=me(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Ta=e=>/[A-Za-z]/.test(e),Fg=p.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${_.blue.transparent2};
    }

    &:focus-visible {
        background: ${_.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,Ea=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Ta(e))return null;const s=Sa(e),o=()=>i(s);return t.jsxs(se,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Fg,{tabIndex:10,children:s})]})};function Ht(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function lt(e,i,n=0){return e>i?n:e<n?i:e}const Bg=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Hg=p(Ze)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Ug=p.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?_.blue.main:"transparent"};
    font-size: 0.85rem;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 16px;
            height: 16px;
        }
    }

    &:hover {
        background: ${({selected:e})=>e?_.blue.main:"var(--theme-1)"};
    }
`,$a=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:g=!1,size:x="middle"})=>{const[m,f]=l.useState(0),[b,y]=l.useState(!1),C=l.useRef(null),j=l.useRef(null),T=l.useRef(null);Ht(C,()=>y(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var A;return(A=T.current)==null?void 0:A.focus()},50)},[c]);const k=A=>{var Q,O;(((a==null?void 0:a.length)??0)>0||o)&&y(!0),A.key==="ArrowDown"?((Q=j.current)==null||Q.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&f(lt(m+1,((a==null?void 0:a.length)??1)-1,0))):A.key==="ArrowUp"?((O=j.current)==null||O.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&f(lt(m-1,((a==null?void 0:a.length)??1)-1,0))):A.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),y(!1),h==null||h(a==null?void 0:a[m??0])):f(0)},U=A=>()=>{f(A),d((a==null?void 0:a[A].title)??""),y(!1),h==null||h(a==null?void 0:a[A])},N=()=>{a!=null&&a.length&&y(!0)};return t.jsxs(Bg,{width:i,onKeyDown:k,onMouseDown:N,ref:C,children:[t.jsx(rt,{size:x,value:e,placeholder:n,leftIcon:r??t.jsx(It,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:T}),t.jsx(Ea,{setValue:d,value:e,visible:g}),b&&t.jsx(Hg,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:k,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:A,icon:Q},O)=>{const te=m===O;return t.jsxs(Ug,{onClick:U(O),ref:te?j:null,selected:te,children:[Q&&t.jsx("div",{className:"icon",children:Q}),t.jsx("span",{children:A})]},A+O)})})]})},on=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},$s={small:"30px",middle:"44px",big:"68px"},Ca={small:"8px",middle:"10px",big:"16px"},Wg={small:"0.8rem",middle:"0.9rem",big:"1rem"},Vg={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},Gg=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${He($s)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${He(Ca)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${He($s)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${ee.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,qg=p.div`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({elementsVisible:e})=>e});
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: ${({condition:e})=>e?.7:.3};
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    & > b {
        word-break: normal;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: ${He(Wg)};
    }

    &:hover {
        filter: ${({condition:e})=>e&&"brightness(0.8)"};
    }

    &.active {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }

    ${ee.isMobile} {
        & > b {
            font-size: ${He(Vg)};
        }
    }
`,Yg=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(qg,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),Jg=l.memo(Yg),Xg=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${He(Ca)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Kg=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(Xg,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},Qg=l.memo(Kg),Zg=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=on();return l.useEffect(()=>{var g;const h=((g=d==null?void 0:d.current)==null?void 0:g.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(Gg,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Qg,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,g)=>t.jsx(Jg,{size:a,id:g,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},g))]})})},Gn=l.memo(Zg),ex=300,Pa=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=ex})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[g,x]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){x(!0);const m=setTimeout(async()=>{await i(c),h(c),x(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),x(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){x(!0);const m=setTimeout(async()=>{await i(c),x(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,g]},kt=p.span`
    color: #fff;
    background: ${({color:e})=>_[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${_[e??"red"].main}`};
    top: ${({top:e})=>e??"50%"};
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"50%"};
    outline: ${({outline:e})=>e};
    font-size: 0.6em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 0 5px;
    min-width: 16px;
    font-weight: bold;
    height: 16px;
    display: ${({visible:e})=>!e&&"none"};

    &::before {
        content: '';
        background: ${({color:e})=>_[e??"red"].light1};
        display: block;
        width: 100%;
        height: 16px;
        border-radius: 10px;
        position: absolute;
        inset: 0;
        top: 0px;
        z-index: -1;
        animation: ${({pulsing:e})=>e?"pulse-animation 1s infinite linear":"none"};
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        90% {
            transform: scale(2);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`,tx=p.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>_[e]?_[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: 100%;
        height: 100%;
        scale: 0.5;
    }
`,xt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(tx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(kt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Oa=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=y=>{n(i(y,e))},g=()=>{n(null)},[x,m,f]=Pa({onDebounce:h,onClear:g}),b=y=>{m(y),o&&o(y)};return t.jsx($a,{value:x??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?f:!1,hints:a,width:r})},ix=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Tg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Aa=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,nx=p(Aa)`
    background: var(--almostTransparentOpposite);
`,sx=p(Aa)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>_[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Da=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Se,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(nx,{},a)),t.jsx(sx,{color:n,current:i})]}),ox=p.label`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};
    cursor: pointer;

    input[type='checkbox'] {
        display: none;
    }

    .checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: ${({fontSize:e})=>e??"1rem"};
        margin-left: 8px;
    }

    &:hover > .checkbox-square {
        box-shadow: 0 0 1px 5px var(--theme-3);
    }
`,ax=p.div`
    min-width: 16px;
    width: 16px;
    height: 16px;
    border: 2px solid var(--grey);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s box-shadow;

    .checkbox:checked + & {
        background: var(--reallyBlue);
        border: 2px solid var(--reallyBlue);
    }

    svg {
        color: #fff;
        width: 13px;
        height: 13px;
    }

    &:focus-visible {
        outline: 4px solid var(--theme-4);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,Ke=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(ox,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(ax,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(Xi,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},Na=e=>e.split("/")[1],rx=e=>e*1024*1024,lx=(e,i)=>(i??yu).indexOf(e.type)!==-1,Cs=(e,i,n,s,o=vu)=>{if(n&&i.length+e.length>n)return W.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return lx(e[a],s)?e[a].size>rx(o)?(W.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),W.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Na(r))}`,type:"failure",time:5e3}),i)},cx=p.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${_.blue.main}`:`2px dashed ${_.grey.main}`};
    background: ${({showPulse:e})=>e?_.blue.transparent3:""};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({isActive:e})=>e&&"pointer"};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.4};
    position: relative;

    .info {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 4px;
        border-radius: var(--brLight);
        background: red;
        pointer-events: none;
        width: calc(100% + 6px);

        .info-item {
            padding: 5px 10px;
            background: var(--block);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: var(--text);
        pointer-events: none;

        b {
            font-weight: 600;
            margin-bottom: 4px;
        }

        .front-icon {
            z-index: 2;
        }

        .icons-behind {
            z-index: 1;
            position: absolute;
            filter: grayscale(1);
            opacity: 0.7;
            transform: scale(0.8);

            & .icon-1 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-1 0.5s forwards":""};
            }
            & .icon-2 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-2 0.5s forwards":""};
            }

            @keyframes behind-1 {
                0% {
                    opacity: 0;
                    transform: translate(10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(-3px, -15px) rotate(-10deg);
                }
            }
            @keyframes behind-2 {
                0% {
                    opacity: 0;
                    transform: translate(-10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(3px, -15px) rotate(10deg);
                }
            }
        }

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.2s;
            animation: ${({showPulse:e})=>e?"jumping 1s forwards":""};

            @keyframes jumping {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(-5%) scale(1.1);
                }
            }
        }
    }
`,Ue=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},dx=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=f=>{const b=f.target.files;b!=null&&b.length&&n(Cs(b,e,i,o,a))},h=f=>{f.preventDefault()},g=f=>{f.preventDefault(),d(!1);const b=f.dataTransfer.files;b.length&&n(Cs(b,e,i,o,a))},x=f=>{f.preventDefault(),d(!0)},m=f=>{f.preventDefault(),d(!1)};return t.jsxs(cx,{isActive:s,showPulse:c,onDragOver:f=>s&&h(f),onDragEnter:f=>s&&x(f),onDragLeave:f=>s&&m(f),onDrop:f=>s&&g(f),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(xn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(xn,{className:"icon-1"}),t.jsx(xn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(se,{align:"center",children:t.jsx(Ue,{words:[`Форматы: ${o?o.map(f=>Na(f)).join(", "):"jpg, png, pdf"}`,`Макс. файлов: ${i}`]})})]})]})},px=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},ux=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),hx=p.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${_.grey.transparent3};
    border-radius: var(--brLight);

    .file-body {
        display: flex;
        gap: 8px;
        align-items: center;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
            }
        }

        .image-container {
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--theme);
            border-radius: var(--brLight);

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`,gx=({file:e,files:i,setFiles:n})=>{const{open:s}=ie(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(Vn,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>Je.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(ux(r,e.name,i))});return t.jsxs(hx,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Dd,{}):t.jsx(Nd,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(se,{fontSize:"0.7em",children:px(e.size)})]})]}),t.jsx(v,{icon:t.jsx(Qe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},xx=({files:e,setFiles:i})=>t.jsx(Se,{title:"Список файлов",visible:!!e.length,onDelete:()=>Je.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(gx,{file:n,files:e,setFiles:i},n.name))}),Ia=e=>t.jsxs(Se,{gap:12,children:[t.jsx(dx,{...e}),t.jsx(xx,{files:e.files,setFiles:e.setFiles})]}),fx=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,mx=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(fx,{children:[t.jsx(Ke,{...e}),n&&t.jsx(Ia,{...i})]}),bx=p.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;

    .date-interval-inputs {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Ra=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=re(u,"extraWeird")}return t.jsxs(bx,{children:[t.jsx(M,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(J,{title:"Внимание",type:"alert",icon:t.jsx(li,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(rt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(rt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},yx=e=>{var f,b,y;const{width:i}=on(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),g=((f=n.current)==null?void 0:f.clientWidth)??1,x=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(y=n.current)==null?void 0:y.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:g,amountOfPages:x,currentPage:u,setCurrentPage:h,handleScroll:C=>{h(Math.ceil(C.currentTarget.scrollLeft/(g+(e??0))))}}},vx=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:g,showPages:x,innerPadding:m,minWidth:f,wrapOnMobile:b,position:y,direction:C="vertical",verticalAlign:j="top",horizontalAlign:T="left",scroll:k=!0,visible:U=!0,...N}=e;if(!U)return null;const{listRef:A,leftArrow:Q,rightArrow:O,handleScroll:te,setScrollLeft:Te,pageOffset:ye,amountOfPages:qe,currentPage:De}=yx(s);return t.jsxs(Jh,{padding:r,position:y,width:o,minWidth:f,height:a,children:[t.jsxs(M,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(v,{icon:t.jsx(ci,{}),width:"35px",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(v,{width:"50px",height:"15px",background:_.blue.transparent2,textColor:_.blue.light1,onClick:h,text:"Ещё"}),g&&t.jsx(v,{width:"fit-content",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:g,text:"Удалить"})]}),t.jsx(nn,{verticalAlign:j,horizontalAlign:T,direction:C,ref:A,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:k,wrapOnMobile:b,onScroll:te,...N,children:n}),(O||Q)&&t.jsxs("div",{className:"bottom-wrapper",children:[Q&&t.jsx(v,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(xi,{}),className:"left-button",textColor:_.grey.main,onClick:()=>{Te(ge=>{var Ne;return lt(ge-ye-(s??0),((Ne=A.current)==null?void 0:Ne.scrollWidth)??0)})}}),x&&t.jsx(Da,{direction:"horizontal",current:De,amount:qe}),O&&t.jsx(v,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(dt,{}),className:"right-button",textColor:_.grey.main,onClick:()=>{Te(ge=>{var Ne;return lt(ge+ye+(s??0),((Ne=A.current)==null?void 0:Ne.scrollWidth)??0)})}})]})]})},Se=de.memo(vx),jx=()=>t.jsx("div",{className:"left",children:t.jsxs(Se,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(sn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Se,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:ds,tabIndex:-1,children:t.jsx(v,{padding:"0",icon:t.jsx(di,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:cl,tabIndex:-1,children:t.jsx(v,{padding:"0",icon:t.jsx(Id,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:ll,tabIndex:-1,children:t.jsx(v,{padding:"0",icon:t.jsx(li,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:dl,tabIndex:-1,children:t.jsx(v,{padding:"0",icon:t.jsx(li,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ue,{}),t.jsx(Z,{to:rl,tabIndex:-1,children:t.jsx(v,{padding:"0",icon:t.jsx(Rd,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(ji,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(zn,{}),align:"left",padding:"0",width:"100%",href:`${D}/index.php`})]})}),wx=()=>{const{search:e}=fi();return de.useMemo(()=>new URLSearchParams(e),[e])},_x=()=>{const e=wx(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=Tt.login,g=new Date().getMonth()>=6&&new Date().getMonth()<=8,x=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{Tt.changeSavePassword({savePassword:b})},f=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:g,handleSavePassword:m,handleKeyPress:x,handleLogin:f,setPassword:r,setLogin:o}},kx=()=>{const{loading:e,error:i,data:n}=be.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:g,setLogin:x}=_x();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Se,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(sn,{width:"50px",short:!0,className:"logo second"}),t.jsx(P,{jc:"space-between",children:t.jsx(M,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsxs(J,{type:"info",title:"Уважаемые абитуриенты!",children:["Личный кабинет абитуриента находится по ссылке",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:" lk.mospolytech.ru"})})]}),t.jsxs(Se,{gap:16,scroll:!1,children:[t.jsx(M,{size:4,align:"left",children:"Вход"}),t.jsx(se,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(J,{type:"failure",visible:!!i,children:i}),t.jsx(J,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(rt,{value:r,setValue:x,title:"Логин",placeholder:"Введите логин"}),t.jsx(rt,{value:o,setValue:g,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Ke,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(Lt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Sx=p(Ze)`
    overflow: hidden;
    box-shadow: ${({isAuthenticated:e})=>e?"none":"0 0 1px var(--theme-mild-opposite)"};
    min-height: 480px;
    transition: 0.2s box-shadow;
    position: relative;
    background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--block)"};

    .left,
    .right {
        height: 100%;
        padding: 22px;
    }

    .right {
        min-width: 350px;
        width: 350px;
        opacity: ${({isAuthenticated:e})=>+!e};
    }

    .left {
        min-width: 320px;
        width: 320px;
        transition: 0.2s background, 0.2s opacity;
        background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--theme-1t)"};
        padding-top: ${({isAuthenticated:e})=>e?"60px":"22px"};

        & > * > * > *:not(.logo) {
            opacity: ${({isAuthenticated:e})=>+!e};
        }
    }

    .logo {
        transform-origin: left;
    }

    .logo.first {
        z-index: 100;
        animation: ${({isAuthenticated:e})=>e&&"logoMove 0.8s forwards ease-in-out"};

        @keyframes logoMove {
            0% {
                position: absolute;
                top: 22px;
                left: 22px;
                transform: scale(1) translateY(0%) translateX(0%);
            }
            100% {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: scale(2) translateY(-25%) translateX(-50%);
            }
        }
    }

    .logo.second {
        display: none;
    }

    @media (max-width: 675px) {
        max-width: 400px;
        max-height: 90%;
        flex-direction: column-reverse;
        overflow-y: auto;
        justify-content: flex-start;

        .right {
            opacity: 1;

            & > * > * > *:not(.logo):not(button) {
                opacity: ${({isAuthenticated:e})=>+!e};
            }

            button {
                opacity: ${({isAuthenticated:e})=>e&&"0"};
            }
        }

        .left {
            padding-top: 22px;
        }

        .logo.first {
            display: none;
        }

        .logo.second {
            display: block;
            z-index: 100;
            animation: ${({isAuthenticated:e})=>e&&"logoMoveMobile 0.8s forwards ease-in-out"};

            @keyframes logoMoveMobile {
                0% {
                    position: absolute;
                    top: 22px;
                    left: 50%;
                    transform: scale(1) translateY(0%) translateX(-50%);
                }
                100% {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: scale(2) translateY(-25%) translateX(-50%);
                }
            }
        }

        .left,
        .right {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        box-shadow: none;
        border-radius: 0px;
        height: 100%;
        max-height: 100%;
    }
`,Tx=()=>{const{data:{isAuthenticated:e}}=be.useUser();return t.jsxs(Sx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(jx,{}),t.jsx(kx,{})]})},Ex=p.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${ee.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,$x=()=>t.jsx(Ex,{children:t.jsx(Tx,{})}),je=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(pe,{text:i,children:o&&t.jsx("a",{href:`${D}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(v,{text:n,icon:t.jsx(zn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Cx="modulepreload",Px=function(e){return"/"+e},Ps={},w=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Px(a),a in Ps)return;Ps[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":Cx,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Ox=l.lazy(()=>w(()=>import("./index-dbe27465.js"),["assets/index-dbe27465.js","assets/vendor-831b4923.js","assets/get-default-subdivision-cdec3421.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js"])),Ax=l.lazy(()=>w(()=>import("./index-592ff90d.js"),["assets/index-592ff90d.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Dx=l.lazy(()=>w(()=>import("./index-2960a23d.js"),["assets/index-2960a23d.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js"])),Nx=l.lazy(()=>w(()=>import("./index-88e0d499.js"),["assets/index-88e0d499.js","assets/vendor-831b4923.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Eb),void 0));const Ix=l.lazy(()=>w(()=>import("./index-27ca3458.js"),["assets/index-27ca3458.js","assets/vendor-831b4923.js","assets/index-290389e1.js"])),Rx=l.lazy(()=>w(()=>import("./index-e3bfed5a.js"),["assets/index-e3bfed5a.js","assets/vendor-831b4923.js","assets/index-e9e7f458.js"])),Lx=l.lazy(()=>w(()=>import("./index-0821d5ff.js"),["assets/index-0821d5ff.js","assets/vendor-831b4923.js","assets/get-default-subdivision-cdec3421.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js"])),zx=l.lazy(()=>w(()=>import("./index-0e9e2544.js"),["assets/index-0e9e2544.js","assets/vendor-831b4923.js","assets/get-default-subdivision-cdec3421.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Mx=l.lazy(()=>w(()=>import("./index-62edb68a.js"),["assets/index-62edb68a.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Fx=l.lazy(()=>w(()=>import("./index-83e4fda5.js"),["assets/index-83e4fda5.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),Bx=l.lazy(()=>w(()=>import("./index-05fa99ec.js"),["assets/index-05fa99ec.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Hx=l.lazy(()=>w(()=>import("./index-588c06ef.js"),["assets/index-588c06ef.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),Ux=l.lazy(()=>w(()=>import("./index-3c342f9c.js"),["assets/index-3c342f9c.js","assets/vendor-831b4923.js","assets/ui-82845660.js","assets/index-ff719fb3.js"])),Wx=l.lazy(()=>w(()=>import("./index-1124be82.js"),["assets/index-1124be82.js","assets/vendor-831b4923.js","assets/ui-82845660.js"])),Vx=l.lazy(()=>w(()=>import("./index-7d556ac5.js"),["assets/index-7d556ac5.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),Gx=l.lazy(()=>w(()=>import("./index-bb90bc4e.js"),["assets/index-bb90bc4e.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),qx=l.lazy(()=>w(()=>import("./index-9b457c3a.js"),["assets/index-9b457c3a.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-cdec3421.js"])),Yx=l.lazy(()=>w(()=>import("./index-22ccfad4.js"),["assets/index-22ccfad4.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),Jx=l.lazy(()=>w(()=>import("./index-21813718.js"),["assets/index-21813718.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Xx=l.lazy(()=>w(()=>import("./index-1c0e846b.js"),["assets/index-1c0e846b.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Kx=l.lazy(()=>w(()=>import("./index-c1b34b59.js"),["assets/index-c1b34b59.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Qx=l.lazy(()=>w(()=>import("./index-2bcc9c65.js"),["assets/index-2bcc9c65.js","assets/vendor-831b4923.js","assets/get-default-subdivision-cdec3421.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js"])),Zx=l.lazy(()=>w(()=>import("./index-fc3e3be1.js"),["assets/index-fc3e3be1.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),ef=l.lazy(()=>w(()=>import("./index-e661f3eb.js"),["assets/index-e661f3eb.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js"])),tf=l.lazy(()=>w(()=>import("./index-28f2a4f0.js"),["assets/index-28f2a4f0.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-cdec3421.js"])),nf=l.lazy(()=>w(()=>import("./index-d1c63621.js"),["assets/index-d1c63621.js","assets/vendor-831b4923.js","assets/index-779ddd63.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-81908eb0.js","assets/get-default-subdivision-cdec3421.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-teacher-subdivisions-500dfe3f.js"])),sf=l.lazy(()=>w(()=>import("./index-3af72213.js"),["assets/index-3af72213.js","assets/vendor-831b4923.js"]));l.lazy(()=>w(()=>import("./index-c2ce30c0.js"),["assets/index-c2ce30c0.js","assets/vendor-831b4923.js","assets/index-ab737ecd.js","assets/index-ff719fb3.js"]));const qn=l.lazy(()=>w(()=>import("./index-10557f64.js"),["assets/index-10557f64.js","assets/vendor-831b4923.js"])),of=l.lazy(()=>w(()=>import("./index-5a656089.js"),["assets/index-5a656089.js","assets/vendor-831b4923.js"])),af=l.lazy(()=>w(()=>import("./index-ec3b46d4.js"),["assets/index-ec3b46d4.js","assets/vendor-831b4923.js","assets/send-hr-form-holiday-work-f15807f8.js"])),rf=l.lazy(()=>w(()=>import("./index-9ede648e.js"),["assets/index-9ede648e.js","assets/vendor-831b4923.js"])),lf=l.lazy(()=>w(()=>import("./index-bfb5e903.js"),["assets/index-bfb5e903.js","assets/vendor-831b4923.js"])),cf=l.lazy(()=>w(()=>import("./index-eff0fabc.js"),["assets/index-eff0fabc.js","assets/vendor-831b4923.js","assets/send-hr-form-holiday-work-f15807f8.js"])),df=l.lazy(()=>w(()=>import("./index-a582a0b3.js"),["assets/index-a582a0b3.js","assets/vendor-831b4923.js"])),pf=l.lazy(()=>w(()=>import("./index-6701a868.js"),["assets/index-6701a868.js","assets/vendor-831b4923.js"])),uf=l.lazy(()=>w(()=>import("./index-92036987.js"),["assets/index-92036987.js","assets/vendor-831b4923.js"])),hf=l.lazy(()=>w(()=>import("./index-2dd28b38.js"),["assets/index-2dd28b38.js","assets/vendor-831b4923.js","assets/send-hr-form-work-transfer-d06d9e3e.js"])),gf=l.lazy(()=>w(()=>import("./index-7b044987.js"),["assets/index-7b044987.js","assets/vendor-831b4923.js","assets/send-hr-form-work-transfer-d06d9e3e.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Zm),void 0));l.lazy(()=>w(()=>import("./index-bf789312.js"),["assets/index-bf789312.js","assets/vendor-831b4923.js","assets/help-links-82933cb0.js"]));const xf=l.lazy(()=>w(()=>import("./index-fd4df8b4.js"),["assets/index-fd4df8b4.js","assets/vendor-831b4923.js"])),La=l.lazy(()=>w(()=>import("./index-0c25faae.js"),["assets/index-0c25faae.js","assets/vendor-831b4923.js","assets/index-ab737ecd.js","assets/index-ff719fb3.js"])),za=l.lazy(()=>w(()=>import("./index-c2ce30c0.js"),["assets/index-c2ce30c0.js","assets/vendor-831b4923.js","assets/index-ab737ecd.js","assets/index-ff719fb3.js"])),ff=l.lazy(()=>w(()=>import("./index-55807ca9.js"),["assets/index-55807ca9.js","assets/vendor-831b4923.js"]));l.lazy(()=>w(()=>import("./index-c60933d2.js"),["assets/index-c60933d2.js","assets/vendor-831b4923.js","assets/index.esm-29d01972.js"]));const mf=l.lazy(()=>w(()=>import("./index-66bbca0a.js"),["assets/index-66bbca0a.js","assets/vendor-831b4923.js"])),Ma=l.lazy(()=>w(()=>import("./index-65e58ccb.js"),["assets/index-65e58ccb.js","assets/vendor-831b4923.js","assets/help-links-82933cb0.js"])),bf=l.lazy(()=>w(()=>import("./index-b1a4bb87.js"),["assets/index-b1a4bb87.js","assets/vendor-831b4923.js"])),yf=l.lazy(()=>w(()=>import("./index-752e55e8.js"),["assets/index-752e55e8.js","assets/vendor-831b4923.js","assets/alert-item-807354ed.js","assets/is-valid-url-08a91344.js"])),vf=l.lazy(()=>w(()=>import("./index-c0da716d.js"),["assets/index-c0da716d.js","assets/vendor-831b4923.js","assets/index-7a6c957b.js","assets/alert-item-807354ed.js","assets/is-valid-url-08a91344.js"])),jf=l.lazy(()=>w(()=>import("./index-82fbf5ea.js"),["assets/index-82fbf5ea.js","assets/vendor-831b4923.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>uy),void 0));const wf=l.lazy(()=>w(()=>import("./index-ba3afdda.js"),["assets/index-ba3afdda.js","assets/vendor-831b4923.js"])),Fa=l.lazy(()=>w(()=>import("./index-8f076ae2.js"),["assets/index-8f076ae2.js","assets/vendor-831b4923.js","assets/index-7a6c957b.js","assets/index-ff719fb3.js"])),_f=l.lazy(()=>w(()=>import("./index-49f02d54.js"),["assets/index-49f02d54.js","assets/vendor-831b4923.js","assets/index-d894e004.js"])),kf=l.lazy(()=>w(()=>import("./index-b7215396.js"),["assets/index-b7215396.js","assets/vendor-831b4923.js","assets/index-d894e004.js"])),Sf=l.lazy(()=>w(()=>import("./index-fbbafca6.js"),["assets/index-fbbafca6.js","assets/vendor-831b4923.js","assets/index-d894e004.js"])),Tf=l.lazy(()=>w(()=>import("./index-cd8892c1.js"),["assets/index-cd8892c1.js","assets/vendor-831b4923.js"])),Ef=l.lazy(()=>w(()=>import("./index-ea78af8d.js"),["assets/index-ea78af8d.js","assets/vendor-831b4923.js","assets/index.esm-29d01972.js"])),$f=l.lazy(()=>w(()=>import("./index-da6d2b16.js"),["assets/index-da6d2b16.js","assets/vendor-831b4923.js"])),Cf=l.lazy(()=>w(()=>import("./index-668a226a.js"),["assets/index-668a226a.js","assets/vendor-831b4923.js"])),Pf=l.lazy(()=>w(()=>import("./index-62f290a5.js"),["assets/index-62f290a5.js","assets/vendor-831b4923.js"])),Of=l.lazy(()=>w(()=>import("./index-2863dc2c.js"),["assets/index-2863dc2c.js","assets/vendor-831b4923.js","assets/index-290389e1.js"])),Af=l.lazy(()=>w(()=>import("./index-5ab35ca8.js"),["assets/index-5ab35ca8.js","assets/vendor-831b4923.js"])),Df=l.lazy(()=>w(()=>import("./index-d41ff27b.js"),["assets/index-d41ff27b.js","assets/vendor-831b4923.js","assets/help-links-82933cb0.js"])),Nf=l.lazy(()=>w(()=>import("./index-783ced21.js"),["assets/index-783ced21.js","assets/vendor-831b4923.js","assets/help-links-82933cb0.js"])),If=l.lazy(()=>w(()=>import("./index-00fc5813.js"),["assets/index-00fc5813.js","assets/vendor-831b4923.js"])),Rf=l.lazy(()=>w(()=>import("./index-bf789312.js"),["assets/index-bf789312.js","assets/vendor-831b4923.js","assets/help-links-82933cb0.js"])),mn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Ba=()=>{const e=mi(),{allRoutes:i}=We.useMenu(),n=i??{},[s,o]=l.useState(mn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(mn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(mn(a.pathname,n))}),[e,n]),s},Lf={small:"600px",middle:"700px",big:"963px",large:"100%"},Ha=e=>Lf[(e==null?void 0:e.pageSize)??"middle"],zf=p(Ze)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,Mf=p.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: -4px;
        right: 7px;
    }
`,Ff=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,wi=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Ba(),r=Ha(a);return t.jsx(dn,{padding:"0 0 10px 0",children:t.jsxs(zf,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(Mf,{children:i}),n&&t.jsx(Ff,{children:n}),e]})})});wi.displayName="PageBlock";const Bf=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(P,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(P,{gap:"16px",ai:"center",children:[t.jsx(q,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(q,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))});function Hi(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Hf=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Uf=p.div``,Wf=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Ua=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Hf,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Uf,{children:e}),t.jsx(Wf,{isOpen:o,children:i})]})},Wa=S(),Va=S(),Vf=X(!1).on(Va,()=>!0).on(Wa,()=>!1),Os={close:Wa,open:Va},Gf={$isModalOpen:Vf},Yn=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),qf=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=bi(Gf.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,y)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,y??""])):(r(()=>[b]),o(y?[y]:[])),n(()=>!0),Os.open())},[r,n,a,i]),g=l.useCallback(()=>{n(()=>!1),Os.close()},[r,n]),x=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),f=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Yn.Provider,{value:{back:u,open:h,close:g,isOpen:i,canBack:d,component:x,title:m,setComponent:f},children:e})},ie=()=>{const{open:e,isOpen:i,...n}=l.useContext(Yn);return{open:e,isOpen:i,...n}},Yf="2.3.0",Ga=()=>t.jsx(J,{icon:null,type:"info",title:Yf,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ie=({color:e,children:i})=>t.jsx(xt,{color:e,children:i}),Jf=()=>({info:t.jsx(Ie,{color:"grey",children:t.jsx(Ce,{})}),message:t.jsx(Ie,{color:"red",children:t.jsx(Mn,{})}),alert:t.jsx(Ie,{color:"purple",children:t.jsx(jo,{})}),"payment-dorm":t.jsx(Ie,{color:"green",children:t.jsx(ot,{})}),"payment-ed":t.jsx(Ie,{color:"green",children:t.jsx(ot,{})}),"digital-services":t.jsx(Ie,{color:"red",children:t.jsx(I,{})}),"doc-for-review":t.jsx(Ie,{color:"blue",children:t.jsx(I,{})}),"hr-applications":t.jsx(Ie,{color:"green",children:t.jsx(I,{})}),"kpi-pps":t.jsx(Ie,{color:"pink",children:t.jsx(wo,{})}),schedule:t.jsx(Ie,{color:"pink",children:t.jsx(Et,{})}),"version-update":t.jsx(Ga,{}),"electronic-interaction":t.jsx(Ie,{color:"blue",children:t.jsx(_o,{})})}),Xf=p(Z)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;

    .left-icon {
        width: fit-content;
        margin-right: 12px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .top-content {
            width: 100%;
            margin-top: 2px;
            display: flex;
            align-items: center;
        }
    }

    &:hover {
        background: var(--theme-1t);
    }
`,Kf=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Qf={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Zf={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},em={small:"0px",middle:"1px",large:"2px",big:"3px"},qa=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:g=!0,loadingRemove:x=!1,canClose:m=!0,fullText:f=!0,maxLetters:b=200,size:y="middle"})=>{const C=re(o,"short"),{close:j}=ie(),[T,k]=l.useState(!1),U=A=>{A.stopPropagation(),A.preventDefault(),g?(k(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},N=()=>{a==null||a(),m&&ct.clearById({id:e,pageId:c}),j()};return t.jsx(Ua,{forceState:!T,bottomMargin:h,children:t.jsxs(Xf,{to:d??"",onClick:N,children:[t.jsx("span",{className:"left-icon",children:Jf()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(se,{fontSize:"0.7rem",children:t.jsx(Ue,{words:[C??"",s??""]})}),t.jsxs(P,{d:"column",gap:em[y],ai:"flex-start",children:[t.jsx(Kf,{fontSize:Qf[y],children:f?i:Hi(i,b)}),t.jsx(se,{fontSize:Zf[y],children:f?n:Hi(n,b)})]})]}),u&&t.jsx(v,{isActive:!(x&&T),icon:t.jsx(Qe,{}),background:"var(--theme-2)",onClick:U,style:{borderRadius:"20px"}})]})})},Ya=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{ct.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(P,{d:"column",children:e.map((o,a)=>l.createElement(qa,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},tm=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,Ja=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=Ge.useLkNotifications();return l.useEffect(()=>{o&&W.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{ct.clearAllVisible()},[]),t.jsxs(tm,{children:[s.length===0&&!n&&t.jsx(dn,{height:"100%",children:t.jsx(pe,{text:i??"Нет новых уведомлений",image:i?t.jsx(st,{}):t.jsx(Ld,{}),size:"70px"})}),t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(J,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Ya,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(Bf,{quantity:10})]})},im=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=Ge.useLkNotifications(),s=()=>{Je.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>ct.clearAll()})};return l.useEffect(()=>{i&&W.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(dn,{padding:"10px",children:t.jsxs(wi,{topRightCornerElement:t.jsx(Z,{to:pl,children:t.jsx(v,{icon:t.jsx(Fn,{}),height:"35px",width:"35px"})}),children:[t.jsx(Ja,{}),e.length>0?n?t.jsx(P,{jc:"center",children:t.jsx(ht,{width:"40px",height:"40px"})}):t.jsx(v,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},nm=p.div`
    width: 100%;
`,sm=()=>t.jsxs(nm,{children:[t.jsx(q,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(q,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ae=e=>{const{children:i,skeleton:n=t.jsx(sm,{}),loading:s=!1,...o}=e;return t.jsx(Ze,{...o,className:"block",children:s?n:i})},om=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},bn=p.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??_.blue.transparent3};
    font-size: 0.7em;
    font-weight: 600;
    color: ${({color:e})=>e??"var(--reallyBlue)"};
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 26px;
    user-select: none;
    cursor: pointer;

    animation: ${({remove:e})=>e?"element-removed 0.2s forwards normal":"element-added 0.2s forwards normal"};

    .element-text {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .remove {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 15px;
        height: 15px;
        background: var(--theme);
        color: var(--blue);
        border-radius: 100%;

        svg {
            width: 10px;
            height: 10px;
        }
    }

    @keyframes element-added {
        0% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
        100% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
    }

    @keyframes element-removed {
        0% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
        100% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
    }
`,am=p.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    transition: 0.2s;
    padding: ${({padding:e})=>e??"10px"};
    opacity: ${({removeAll:e})=>e?"0":"1"};
    min-height: ${({removeAll:e,height:i})=>e?"0px":i||"46px"};
    visibility: ${({removeAll:e})=>e?"hidden":"visible"};
    transform: scale(${({removeAll:e})=>e?"0.95":"1"})
        translate(${({removeAll:e})=>e?"-30px, 20px":"0, 0"});
`,rm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:g}=om(c,r);return c.length?t.jsxs(am,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(bn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(ci,{}),"Добавить"]}),Object.values(e??{}).map(x=>{if(x!=null&&x.id)return t.jsxs(bn,{background:x.background,remove:u===x.id,children:[t.jsx("div",{className:"element-text",children:x.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(g(x.id),s(x.id))},children:t.jsx(Qe,{})})]},x.id)}),c.length&&!!n&&t.jsx(bn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},zt=(e,i)=>{switch(i){case"date":return re(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},lm=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,cm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),g=l.useCallback(m=>{var f,b;o(y=>(y&&y[m]&&delete y[m],{...y})),m===((f=i==null?void 0:i.column)==null?void 0:f.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const f=Object.values(s)[0].column;return m={[(f==null?void 0:f.field)??""]:{id:(f==null?void 0:f.field)??"",title:"Фильтр: "+(f==null?void 0:f.title)}},{...m}});else{const m=Object.values(s).find(f=>{var b;return!c[((b=f.column)==null?void 0:b.field)??""]});m&&d(f=>{var C,j;const b=((C=m.column)==null?void 0:C.field)??"",y="Фильтр: "+((j=m.column)==null?void 0:j.title);return f&&(f[b]={id:b,title:y}),{...f}})}i&&d(m=>{var y;const f=((y=i.column)==null?void 0:y.field)??"",b="Поиск";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}}),a&&d(m=>{var y;const f=((y=a.column)==null?void 0:y.field)??"",b="Сортировка";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,f=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&f){const y=e==null?void 0:e.filter(C=>me(zt(C[f],m==null?void 0:m.type)).includes(me(zt(i.value,m==null?void 0:m.type))));h(y)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(f=>!Object.values(s).find(b=>{var y;return f[((y=b.column)==null?void 0:y.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var f;const m=((f=a==null?void 0:a.column)==null?void 0:f.field)??"";a?h(b=>{const y=[...b??[]];return y==null||y.sort((C,j)=>j[m]<C[m]?a.value==="asc"?1:-1:j[m]>C[m]?a.value==="asc"?-1:1:0),y}):(d(b=>{const y=lm(b,"Сортировка");return b&&y&&delete b[y],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:g,onRemoveAll:x}},$n=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),$n(n.children,i)):n?n.children:e},dm=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[g,x]=l.useState([]),[m,f]=l.useState(i),[b,y]=l.useState("");l.useEffect(()=>{f(i)});const C=l.useCallback(()=>{d(k=>!k)},[d]),j=l.useCallback(k=>{if(k.children)g.push(k.id.toString()),f($n(i,[...g])??[]),x([...g]);else{if(r)if(o)if(o.find(U=>U.id===k.id)){const U=o.filter(N=>N.id!==k.id);U.length?n(U):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&C(),y(g.join("/"))}s==null||s(k)},[n,g]),T=l.useCallback(()=>{g.pop(),x([...g]),g.length===0?f(i):f($n(i,g)??[])},[g,f]);return Ht(u,()=>{c&&C()}),{handleOpen:C,refElement:u,isOpen:c,multiple:r,handleSelect:j,selectedRoute:b,currentItems:m,route:g,goBack:T,refItems:h,appearance:a}},pm=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${He(Bi)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,um=p.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${He(Bi)};

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: ${({appearance:e})=>e&&"0.9em"};
    z-index: ${({isOpen:e})=>e?5:2};
    opacity: ${({isActive:e})=>!e&&.7};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
    &:active {
        transform: translateY(3px);
    }
`,hm=p.header`
    display: flex;
    align-items: center;
    width: calc(100% - 15px);
    column-gap: 5px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    .single-header,
    .header-item {
        display: flex;
        align-items: center;
    }

    .header-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }

    .not-chosen {
        font-size: ${({appearance:e})=>e&&"0.9em"};
        opacity: ${({appearance:e})=>e&&"0.6"};

        &.multi {
            margin-left: 5px;
        }
    }

    .header-item {
        background: ${_.blue.transparent2};
        color: ${_.blue.main};
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 0.85em;
        min-width: fit-content;
    }

    .icon {
        float: left;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }
`,gm=p.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--very-mild-shadow);
    border-radius: 6px;
    background: var(--block-content);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({title:e})=>e?"60px":"46px"};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`,As=p.li`
    list-style-type: none;
    background: var(${({isSelected:e})=>e?"--reallyBlue":""});
    color: ${({isSelected:e})=>e?"#fff":""};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({leadingToSelected:e})=>e?"5px":"0px"};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`,xm=["isOpen"],fm=p(zd).withConfig({shouldForwardProp:e=>!xm.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,mm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:g}=dm(e),{isActive:x,width:m,title:f,required:b,selected:y,placeholder:C,size:j="middle"}=e;return t.jsxs(um,{onClick:i,appearance:g,ref:n,isOpen:s,isActive:x??!0,width:m,size:j,children:[t.jsx(M,{size:4,align:"left",bottomGap:"5px",visible:!!f,required:b,children:f}),t.jsxs(pm,{multiple:o,appearance:g,size:j,children:[t.jsx(hm,{appearance:g,children:o?y?y.map(T=>t.jsxs("div",{className:"header-item",children:[!!T.icon&&t.jsx("span",{className:"icon",children:T.icon}),t.jsx("span",{className:"header-title",children:T.title})]},T.id)):t.jsx("span",{className:"not-chosen multi",children:C??"Не выбрано"}):t.jsx("div",{className:"single-header",children:y?t.jsxs(t.Fragment,{children:[!!y.icon&&t.jsx("span",{className:"icon",children:y.icon}),t.jsx("span",{className:"header-title",children:y.title})]}):t.jsx("span",{className:"not-chosen",children:C??"Не выбрано"})})}),t.jsx(fm,{isOpen:s})]}),t.jsxs(gm,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:f,children:[!!d.length&&t.jsx(As,{isSelected:!1,onClick:T=>{T.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(xi,{}),"Назад"]})},-1),c.map(({id:T,icon:k,title:U,children:N,data:A})=>t.jsxs(As,{onClick:Q=>{Q.stopPropagation(),a({id:T,icon:k,title:U,children:N,data:A})},isSelected:!o&&!!y&&y.title.includes(U),leadingToSelected:r.includes(T.toString()),children:[!!k&&t.jsx("span",{className:"icon",children:k}),t.jsx("span",{className:"select-item-title",children:U}),!!N&&t.jsx("span",{className:"right-icon",children:t.jsx(dt,{})}),o&&!!y&&!!y.find(Q=>Q.title.includes(U))&&t.jsx("span",{className:"right-icon",children:t.jsx(Xi,{})})]},U))]})]})},Xa=l.memo(mm),bm=e=>{switch(e){case"desc":return W.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return W.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return W.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},ym=p.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({even:e})=>e?`${_.blue.transparent3}`:"var(--theme)"};

    &:hover {
        filter: brightness(0.98);
    }

    .five {
        display: none;
    }

    @media (max-width: 650px) {
        font-size: 0.9em;

        .four {
            display: none;
        }
    }

    @media (max-width: 550px) {
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,Ka=p.div`
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e??"auto"};
    padding: ${({padding:e})=>e??"20px"};
    height: 100%;
    text-align: ${({align:e})=>e&&e};
    cursor: ${({clickable:e})=>e&&"pointer"};
    overflow: ${({overflow:e})=>e??"hidden"};
    display: block;
    white-space: ${({showFull:e})=>e?"wrap":"nowrap"};
    text-overflow: ${({showFull:e})=>e?"clip":"ellipsis"};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({clickable:e})=>!e&&"10px"};
    }
`,vm=p.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
    }

    .five {
        display: none;
    }

    @media (max-width: 500px) {
        .four {
            display: none;
        }
    }

    @media (max-width: 400px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,jm=p.div`
    display: flex;
    align-items: center;
`,wm=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return bm(h),h?{column:d,value:h}:null})};return t.jsx(vm,{children:e.map(d=>{var u,h,g,x;return t.jsxs(Ka,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(It,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(Md,{className:"icon",style:{color:d.field===((g=a==null?void 0:a.column)==null?void 0:g.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(jm,{children:t.jsx(Xa,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(f=>(m&&(f={...f,[d.field]:{column:d,value:m}}),f)),selected:(x=s==null?void 0:s[d.field])==null?void 0:x.value,placeholder:d.title})})]},d.title)})})},_m=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(P,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(v,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(xi,{}),onClick:()=>r(lt(n-1,e).toString())}),t.jsxs(P,{w:"fit-content",gap:"6px",children:[t.jsx(rt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(se,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(v,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(dt,{}),onClick:()=>r(lt(n+1,e).toString())})]}):null},km=p.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    justify-content: flex-start;
    align-items: ${({direction:e})=>e==="vertical"?"flex-start":"center"};
    width: 100%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
    font-size: ${({fontSize:e})=>e};
    color: var(--text);

    .value {
        width: ${({direction:e})=>e==="vertical"?"100%":"fit-content"};
        line-height: 1.4rem;
    }

    strong {
        font-weight: 600;
    }
`,yt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(km,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,Sm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Tm=({obj:e,columns:i})=>t.jsx(Sm,{children:i.map(n=>t.jsx(yt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):zt(e[n.field],n.type)},n.title))}),Qa=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=ie(),a=()=>o(t.jsx(Tm,{obj:i,columns:e}),"Информация");return t.jsx(ym,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var c;return t.jsx(t.Fragment,{children:t.jsx(Ka,{showFull:r.showFull,width:r.width,className:((c=r.priority)==null?void 0:c.toString())??"one",align:r.align,children:r.render?r.render(zt(i[r.field],r.type),i):zt(i[r.field],r.type)},r.field)})})})},Em=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--theme-1);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`,$m=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Cm=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Pm=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,c]=l.useState(0),d=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,u=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{c(0)},[a]),i?t.jsx($m,{children:t.jsx(ht,{})}):t.jsxs(Em,{children:[u==null?void 0:u.map((h,g)=>t.jsx(Qa,{onRowClick:o,columns:n,el:h,index:g},g)),!(u!=null&&u.length)&&t.jsx(pe,{text:"Нет данных"}),d>0&&t.jsx(ue,{margin:"0",width:"100%"}),t.jsx(Cm,{children:t.jsx(_m,{pages:d,condition:!!s&&!!(u!=null&&u.length),currentPage:r,setCurrentPage:c})})]})},Om=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Am=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Dm=({search:e,setSearch:i})=>{var n,s;return t.jsx(Om,{closed:!(e!=null&&e.column),children:t.jsx(rt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Am((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(It,{}),minWidth:"auto"})})},Nm=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Im(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Rm=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Nm(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ue,{}),t.jsx(Qa,{onRowClick:()=>null,columns:Im(s),el:s,index:1})]})},Lm=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,Fe=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:c,search:d,setSearch:u,resultData:h,filter:g,setFilter:x,filterList:m,setFilterList:f,onRemoveOne:b,onRemoveAll:y}=cm(i);return t.jsxs(Lm,{children:[t.jsx(rm,{setList:f,padding:"0 10px",list:m,onRemoveOne:b,onRemoveAll:y}),t.jsx(Dm,{search:d,setSearch:u}),t.jsx(wm,{sort:r,setSort:c,columns:e,search:d,setSearch:u,filter:g,setFilter:x}),t.jsx(Pm,{loading:a,onRowClick:s,filter:g,columns:e,data:h,maxOnPage:n}),t.jsx(Rm,{footer:o,data:i,columns:e})]})},IS={ready:"Готово",pending:"В работе",rejected:"Отклонено"},an={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},Jn={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},RS=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],LS=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],zm=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(an).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Jn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Mm=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Fm,{children:["История должностей:",t.jsx(v,{icon:n?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(Bm,{columns:zm(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(v,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Fm=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Bm=p(Fe)`
    width: 100%;
`,Hm=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${pt()}`},s=await gi({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},Um=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(an).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>re(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(Jn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(v,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{Hm(i.applicationGuid)}})}}],Wm=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Gm,{children:[t.jsx("span",{children:n}),t.jsx(v,{icon:c?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(Vm,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(Ym,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(v,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(qm,{columns:Um(),data:r,maxOnPage:10})]}),t.jsx(v,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},Vm=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Gm=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,qm=p(Fe)`
    width: 100%;
`,Ym=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Jm=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Xm,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Wm,{jobTitleInfo:s,index:o})),t.jsx(Mm,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},Xm=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Za=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(gt,{load:()=>Xe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Km,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs(Qm,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(Jm,{})]})})})},Km=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Qm=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,Zm=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"})),Xn=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(an).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>re(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],er=S(),tr=S(),ir=L(async()=>{const{data:e}=await he.get(`Weekend.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);return e.orders});$({clock:er,target:ir});const _i=L(async e=>(await he.post("Weekend.AddWeekend",e)).data);$({clock:tr,target:_i});const nr=X([]),e0=_i.pending;$({clock:ir.doneData,target:nr});$({clock:_i.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});$({clock:_i.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const t0={loadBufferHolidayWork:er,sendBufferHolidayWork:tr},zS={sendBufferHolidayWorkFx:_i},i0={useBufferHolidayWork:()=>({data:$e(nr),loading:$e(e0)})},n0=()=>{const[e,i]=l.useState(!1);l.useEffect(t0.loadBufferHolidayWork,[]);const{data:n}=i0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(s0,{children:["История заявлений на выход в выходной день:",t.jsx(v,{icon:e?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(o0,{columns:Xn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(v,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},s0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,o0=p(Fe)`
    width: 100%;
`,a0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(l0,{children:[t.jsx("span",{children:n}),t.jsx(v,{icon:a?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(r0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(c0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(v,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(v,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},r0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,l0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,c0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,d0=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(p0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(a0,{info:s,index:o})),t.jsx(n0,{})]}):null},p0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,u0=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(gt,{load:()=>Xe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(h0,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs(g0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(d0,{})]})})})},h0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,g0=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,sr=S(),or=S(),Kn=L(async()=>{const{data:e}=await he.get(`Vacation.GetAllHistory?personalGuid=${$t(pt()??"").IndividualGuid}`);return e});$({clock:sr,target:Kn});const Ut=L(async e=>(await he.post("Vacation.AddVacation",e)).data);$({clock:or,target:Ut});const Ui=X([]),x0=Ut.pending;$({clock:Kn.doneData,fn:({employeeVacations:e})=>e,target:Ui});$({clock:Ut.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Oe.evokePopUpMessage});$({clock:Ut.doneData,source:Ui,fn:(e,{employeeVacations:i})=>[...e,...i],target:Ui});$({clock:Kn.failData,fn:e=>{var n;return{message:Zi(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:W.evokePopUpMessage});$({clock:Ut.failData,fn:e=>{var n;return{message:Zi(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Oe.evokePopUpMessage});const Ds={loadBufferHolidayPlanning:sr,sendBufferHolidayPlanning:or},MS={sendBufferHolidayPlanningFx:Ut},Qn={useBufferHolidayPlanning:()=>({data:$e(Ui),loading:$e(x0)})},f0=()=>{const[e,i]=l.useState(!1),{data:n}=Qn.useBufferHolidayPlanning(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(m0,{children:["История заявлений на отпуск:",t.jsx(v,{icon:e?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(b0,{columns:Xn(),data:[],maxOnPage:10},a)),t.jsx(v,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},m0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,b0=p(Fe)`
    width: 100%;
`,ar=()=>[{title:"Статус заявления",field:"vacation",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"vacation",align:"center",render:e=>{var i,n;return`${re((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${re((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],y0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(j0,{children:[t.jsx("span",{children:s}),t.jsx(v,{icon:r?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(v0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a]}),r&&t.jsxs(_0,{children:[t.jsx(Z,{to:`/hr-applications/holiday-planning/${i}`,children:t.jsx(v,{text:"Отпуск по этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(w0,{columns:ar(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(v,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},v0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,j0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,w0=p(Fe)`
    width: 100%;
`,_0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,k0=()=>{const{data:e}=Qn.useBufferHolidayPlanning(),{data:{dataWorkerApplication:i}}=_e.useApplications(),[n,s]=l.useState(!0);return i?t.jsxs(S0,{children:[i.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(y0,{info:o,index:a,data:e})),t.jsx(f0,{})]}):null},S0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,T0=()=>{const{data:e,loading:i}=Qn.useBufferHolidayPlanning();return l.useEffect(()=>{Ds.loadBufferHolidayPlanning()},[]),t.jsx(gt,{load:Ds.loadBufferHolidayPlanning,loading:i,error:null,data:e,children:t.jsx(E0,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs($0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на отпуск"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(k0,{})]})})})},E0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,$0=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,C0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(an).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Jn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],rr=S(),lr=S(),Zn=L(async()=>{const{data:e}=await he.get(`CarryForwardVacation.GetAllHistory?personalGuid=${$t(pt()??"").IndividualGuid}`);return e});$({clock:rr,target:Zn});const Wt=L(async e=>(await he.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);$({clock:lr,target:Wt});const Wi=X([]),P0=Wt.pending;$({clock:Zn.doneData,fn:({employeeVacations:e})=>e,target:Wi});$({clock:Wt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Oe.evokePopUpMessage});$({clock:Wt.doneData,source:Wi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Wi});$({clock:Zn.failData,fn:e=>{var n;return{message:Zi(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:W.evokePopUpMessage});$({clock:Wt.failData,fn:e=>{var n;return{message:Zi(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Oe.evokePopUpMessage});const Ns={loadBufferHolidayTransfer:rr,sendBufferHolidayTransfer:lr},FS={sendBufferHolidayTransferFx:Wt},es={useBufferHolidayTransfer:()=>({data:$e(Wi),loading:$e(P0)})},O0=()=>{const[e,i]=l.useState(!1),{data:n}=es.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(A0,{children:["История заявлений отпуск:",t.jsx(v,{icon:e?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(D0,{columns:C0(),data:[],maxOnPage:10},a)),t.jsx(v,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},A0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,D0=p(Fe)`
    width: 100%;
`,N0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(R0,{children:[t.jsx("span",{children:s}),t.jsx(v,{icon:r?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(I0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(z0,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(v,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(L0,{columns:ar(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(v,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},I0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,R0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,L0=p(Fe)`
    width: 100%;
`,z0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,M0=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),{data:i}=es.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(F0,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(N0,{info:o,index:a,data:i})),t.jsx(O0,{})]})},F0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,B0=()=>{const{data:e,loading:i}=es.useBufferHolidayTransfer();return l.useEffect(()=>{Ns.loadBufferHolidayTransfer()},[]),t.jsx(gt,{load:Ns.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(H0,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs(U0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(M0,{})]})})})},H0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,U0=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,cr=()=>[{title:"Статус заявления",field:"medicalExamination",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"medicalExamination",align:"center",render:e=>{var i,n;return`${re((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${re((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],W0=e=>localStorage.setItem("age",e.toString()),BS=e=>localStorage.getItem(e),V0=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),dr=S(),pr=S(),ur=L(async()=>{const{data:e}=await he.get(`MedicalExamination.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);return W0(e.age),V0(e.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.employeeMedicalExaminations});$({clock:dr,target:ur});const ki=L(async e=>(await he.post("MedicalExamination.AddMedicalExamination",e)).data);$({clock:pr,target:ki});const hr=X([]),G0=ki.pending;$({clock:ur.doneData,target:hr});$({clock:ki.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});$({clock:ki.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const q0={loadBufferMedicalExamination:dr,sendBufferMedicalExamination:pr},HS={sendBufferMedicalExaminationFx:ki},ts={useBufferMedicalExamination:()=>({data:$e(hr),loading:$e(G0)})},Y0=()=>{const[e,i]=l.useState(!1);l.useEffect(q0.loadBufferMedicalExamination,[]);const{data:n}=ts.useBufferMedicalExamination(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(J0,{children:["История заявлений на диспансеризацию:",t.jsx(v,{icon:e?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(X0,{columns:cr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(v,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},J0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,X0=p(Fe)`
    width: 100%;
`,K0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,{data:a}=ts.useBufferMedicalExamination(),[r,c]=l.useState(!1);return a.length==0?null:t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Z0,{children:[t.jsx("span",{children:n}),t.jsx(v,{icon:r?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(Q0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),r&&t.jsxs(tb,{children:[t.jsx(Z,{to:`/hr-applications/medical-examination/${i}`,children:t.jsx(v,{text:"Оформить заявление",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),a.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=a[u].notTaken.filter(g=>{if(g.medicalExamination.status.orderStatus!="false"&&g.medicalExamination.status.orderStatus!="")return g.medicalExamination.status.orderStatus});return t.jsx(eb,{columns:cr(),data:h,maxOnPage:10},d.orderNumber)}})]}),t.jsx(v,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},Q0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Z0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,eb=p(Fe)`
    width: 100%;
`,tb=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,ib=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0),{data:s}=ts.useBufferMedicalExamination();return e?t.jsxs(nb,{children:[e.map((o,a)=>o.isDismissal?(i&&n(!1),null):t.jsx(K0,{info:o,index:a,data:s})),t.jsx(Y0,{})]}):null},nb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,sb=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(gt,{load:()=>Xe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(ob,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs(ab,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на диспансеризацию"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(ib,{})]})})})},ob=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,ab=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,gr=S(),xr=S(),fr=L(async()=>{const{data:e}=await he.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);return e.employeeHistories});$({clock:gr,target:fr});const Si=L(async e=>(await he.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);$({clock:xr,target:Si});const mr=X([]),rb=Si.pending;$({clock:fr.doneData,target:mr});$({clock:Si.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});$({clock:Si.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const lb={loadBufferWorkTransfer:gr,sendBufferWorkTransfer:xr},US={sendBufferWorkTransferFx:Si},cb={useBufferWorkTransfer:()=>({data:$e(mr),loading:$e(rb)})},db=()=>{const[e,i]=l.useState(!1);l.useEffect(lb.loadBufferWorkTransfer,[]);const{data:n}=cb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(pb,{children:["История заявлений на перевод:",t.jsx(v,{icon:e?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(ub,{columns:Xn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(v,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},pb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,ub=p(Fe)`
    width: 100%;
`,hb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(xb,{children:[t.jsx("span",{children:n}),t.jsx(v,{icon:a?t.jsx(Pe,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(gb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(fb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(v,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(v,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(v,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},gb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,xb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,fb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,mb=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(bb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(hb,{info:s,index:o})),t.jsx(db,{})]}):null},bb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,yb=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(gt,{load:()=>Xe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(vb,{children:t.jsxs(Bt,{maxWidth:"1500px",children:[t.jsxs(jb,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(mb,{})]})})})},vb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,jb=p.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,wb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${re(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${re(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${re(e[0])} по ${re(e[1])}`},_b=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,is=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=at.selectors.useData();return r?t.jsxs(_b,{children:[t.jsx(M,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Ra,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(J,{type:"info",title:wb(n)??"",icon:t.jsx(Ce,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(de.Fragment,{children:[t.jsxs("section",{children:[t.jsx(M,{size:4,align:"left",children:c.title}),t.jsx(ji,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Bn,{}),width:"170px",background:_.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(ue,{})]},c.title)})]})]}):null},kb=()=>{const{data:e}=at.selectors.useData();return t.jsx(is,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Sb=()=>{const{data:e}=at.selectors.useData();return t.jsx(is,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Tb=()=>{const{data:e}=at.selectors.useData();return t.jsx(is,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},br=()=>{var i;const{data:e}=at.selectors.useData();return t.jsx(dn,{padding:"10px",children:t.jsx(wi,{children:t.jsx(ps,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Tb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(kb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Sb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(je,{oldVersionUrl:hy}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Eb=Object.freeze(Object.defineProperty({__proto__:null,default:br},Symbol.toStringTag,{value:"Module"})),$b=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},yr=S(),vr=S(),jr=S(),Mt=L(async()=>{const e=await Nu();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),ns=L(async e=>{try{return await Ru(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Ti=L(async e=>{const i=await Iu(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});$({clock:Ti.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:W.evokePopUpMessage});$({clock:Ti.doneData,fn:()=>!0,target:vr});$({clock:Ti.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:W.evokePopUpMessage});$({clock:yr,target:Ti});const wr=S(),_r=S(),Cb=Rn(Ti.pending,Mt.pending,Boolean),Pb=X(!1).on(jr,(e,i)=>i),Ob=X(!1).on(vr,(e,i)=>i),Ab=X(null).on(Mt,()=>null).on(Mt.failData,(e,i)=>i.message).on(ns.failData,(e,i)=>i.message),Db=X(null).on(Mt.doneData,(e,i)=>i).on(ns.doneData,(e,i)=>$b(e,i,!1)).on(wr,()=>null),tt={$loading:Cb,$completed:Pb,$done:Ob,$error:Ab,$paymentsStore:Db};Ve({from:_r,to:Mt});const ss={getPaymentsFx:Mt,signContractFx:ns},Cn={signAgreement:yr,setCompleted:jr,clearStore:wr,getPayments:_r},Nb=Object.freeze(Object.defineProperty({__proto__:null,effects:ss,events:Cn,stores:tt},Symbol.toStringTag,{value:"Module"})),Ib=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Rb=p.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${_.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,Lb=({date:e,value:i})=>t.jsxs(Rb,{children:[t.jsxs(P,{gap:"16px",children:[t.jsx(xt,{color:"grey",size:33,children:t.jsx(ot,{})}),t.jsxs(P,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(se,{children:re(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ot,{})," "]})]}),zb=p.div`
    display: flex;
    align-items: center;
    font-size: ${({fontSize:e})=>e};
    font-weight: ${({fontWeight:e})=>e};
    color: ${({color:e})=>e};

    svg {
        width: ${({iconSize:e})=>e};
        max-width: ${({iconSize:e})=>e};
        height: ${({iconSize:e})=>e};
        min-width: ${({iconSize:e})=>e};
        margin: 0;
        stroke-width: 0.2;
    }
`,kr=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(zb,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ot,{})]})},Mb=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Fb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        min-height: 195px;
        height: 195px;
        padding-right: 5px;
        background: var(--block-content);
        box-shadow: var(--block-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`,Bb=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Mb(s.value),0).toFixed(1);return t.jsxs(Fb,{children:[t.jsxs(P,{jc:"space-between",children:[t.jsx(M,{icon:t.jsx(ko,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(se,{fontSize:"1rem",width:"fit-content",children:t.jsx(kr,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(pe,{size:"50px",text:"Нет платежей",image:t.jsx(So,{})}),e.map((n,s)=>l.createElement(Lb,{...n,key:s}))]})]})},Sr=()=>t.jsx(J,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Hb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Ub=p.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`,Wb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d}=e,{open:u}=ie(),[h,g]=l.useState(!1),[x,m]=l.useState(!1),[f,b]=l.useState(!1),y=bi(tt.$error),C=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:re(n)},{text:"Действует до",info:re(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Hb(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(m(!0),ss.signContractFx(e.id),m(!1),b(!0))},k=()=>{u(t.jsx(Sr,{}),"Не получается подписать")};return t.jsxs(Ub,{children:[t.jsx("div",{className:"contract-info",children:C.map(({info:U,text:N})=>t.jsx(yt,{keyStr:N,value:U},U))}),r&&t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(Lt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:x,completed:f,repeatable:!1,popUpFailureMessage:y??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(v,{onClick:k,text:"Не получается подписать?",background:"transparent",textColor:_.grey.main})]}),!r&&t.jsxs(P,{gap:"8px",children:[t.jsx(Lt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:h,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(ji,{onClick:()=>null,href:c??"",icon:t.jsx(Bn,{}),width:"45px"})]})]})},Vb=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--block);
    z-index: 3;
    width: 100%;
    /* border-radius: var(--brLight) var(--brLight) 0 0; */

    .title-and-icon {
        display: flex;
        align-items: center;
        width: calc(100% - 30px);

        b {
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
        }

        svg {
            min-width: 19px;
            height: 19px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }
`,Gb=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Vb,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(To,{style:{color:"var(--green)"}}):t.jsx(Eo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(v,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent"})]}),qb=p.div`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;

    .inputs {
        padding: ${({open:e})=>e?"15px 0":"0"};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({height:e,open:i})=>i?e+"px":"0"};
        opacity: ${({open:e})=>e?"1":"0"};
        visibility: ${({open:e})=>e?"visible":"hidden"};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({height:e,open:i})=>i?e+63+"px":"0"};
        }
    }
`,Yb=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(qb,{height:s,open:r,children:[t.jsx(Gb,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Jb=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Xb=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=bi([tt.$done,tt.$completed,tt.$loading]),h=s||c?140:100,g=()=>Cn.signAgreement(n),x=Cn.setCompleted;return t.jsxs(Yb,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Jb,{children:[t.jsxs(P,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(M,{size:5,align:"left",children:o}),t.jsx(se,{children:re(r)})]}),t.jsxs(P,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(ji,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Bn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(Lt,{text:s||c?"Подписано":"Подписать",action:g,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:x,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(J,{type:"success",title:"Подписано",icon:t.jsx(Xi,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(se,{children:["Дата подписания: ",re(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Kb=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Se,{width:"100%",children:[t.jsx(M,{size:4,align:"left",icon:t.jsx(Fd,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Sr,{}),t.jsx(J,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Xb,{data:s,isContractSigned:n},o))]}),Qb=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 4px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        min-width: 100%;
    }
`,Ni=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(Qb,{children:t.jsx(Vn,{loading:i,width:"300px",height:"300px",src:e??""})})},Zb=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,ey=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Ni,{qrCode:e}):n===1?t.jsx(Ni,{qrCode:i}):t.jsx(Zb,{children:t.jsx(ps,{pages:[{title:"Текущая залолженность",content:t.jsx(Ni,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(Ni,{qrCode:i})}],appearance:!1,currentPage:n})}),ty=({type:e="horizontal",...i})=>{const{open:n}=ie(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${_.green.main}, ${_.green.dark1})`,a=()=>{n(t.jsx(ey,{...i}),s)};return e==="vertical"?t.jsx(v,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(Bd,{}),textColor:"#fff",background:o}):t.jsx(v,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},iy=({debt:e,size:i="big"})=>{const n=e>0?_.red.main:_.green.main;return t.jsx(kr,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},yn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ei=()=>{const e=wu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(yn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(yn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(yn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},ny=p.div`
    width: 100%;
`,sy=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,oy=p.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`,ay=p.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`,ry=p.div`
    position: relative;
`,ly=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Ei(),{open:h}=ie(),[g,x]=l.useState(0),m=g===0?+n:+s,f=m>0,b=f?g===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",y=g===0?`На ${re(new Date)}`:`До ${re(o)}`,C=()=>{h(t.jsx(Wb,{contract:i}),"Реквизиты договора")};return t.jsxs(ny,{children:[t.jsx(M,{icon:t.jsx(Hd,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(sy,{children:[t.jsx(Gn,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:g,setCurrentPage:x,appearance:!1}),t.jsxs(oy,{children:[t.jsxs(P,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(iy,{debt:m}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(M,{size:3,align:"left",children:b}),t.jsx(se,{children:y})]})]}),f?t.jsx(ty,{currentPage:g,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(ya,{color:"green",size:"40px"})]}),t.jsxs(ay,{children:[r&&t.jsx(ji,{text:"Квитанция на оплату",background:"transparent",textColor:_.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(ry,{children:[t.jsx(v,{onClick:C,text:"Реквизиты договора",background:"transparent",textColor:_.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(kt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Tr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,cy=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${zt(String(o),"rub")})`},dy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Tr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:cy}],py=({paygraph:e})=>t.jsxs(P,{d:"column",children:[t.jsx(M,{icon:t.jsx(Ud,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(Fe,{columns:dy(),data:e??[],maxOnPage:3})]}),Ii=({contracts:e})=>e?t.jsx(Ib,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user:d}=i,u=a==="Общежитие",h=!0,g=s.filter(x=>new Date(x==null?void 0:x.date)>new Date("2022-02-1"));return t.jsxs(de.Fragment,{children:[e.length!==1&&t.jsxs(P,{gap:"8px",children:[t.jsx(P,{w:"fit-content",children:t.jsxs(M,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(se,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(ly,{data:i}),t.jsx(Bb,{payments:c??[]}),t.jsx(py,{paygraph:r}),t.jsx(Kb,{isDormitory:u,isContractSigned:h,electronicAgreements:g}),n!==e.length-1&&t.jsx(ue,{margin:"0",width:"100%"})]},o)})}):null,os=()=>{const[e,i,n]=bi([tt.$error,tt.$loading,tt.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{W.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(gt,{loading:i,load:ss.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(wi,{children:[t.jsx(J,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(pe,{text:"Нет данных"}),s==="both"&&t.jsx(ps,{pages:[{title:"Общежитие",content:t.jsx(Ii,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Ii,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Ii,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Ii,{contracts:n==null?void 0:n.education})]})})},uy=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"})),z="/applications",ae="/hr-applications",Is="/staff_orders",Rs="/staff_blanks",hy="/ad_logins",as="/doclist",Ls="/pps_vote2020",Er="/pps_contest",gy="/electronic-statements",xe="/onboarding",xy="/structure-of-the-university",fy="/addresses-and-contacts",my="/brandbook",by="/wifi-at-the-university",yy="/health-care",vy="/psychological-help",jy="/social-environment",wy="/vacation",Yt="/kpi_pps",Jt="/kpi_admin",zs="/sc_news",Ms="/oop",Fs="/centers",_y="/helpful-information",ky="/download-agreements",Bs="/physical-education/main",Sy="/physical-education/student/:studentId",$r=z+"/contact-info-actualization",Cr=z+"/data-verification",Pr=z+"/issuance-of-licenses",Or=z+"/getting-computer-equipment",Ar=z+"/connecting-computer",Dr=z+"/printer-maintenance",Nr=z+"/question-sed",Ir=z+"/question-personal-account",Rr=z+"/other-it-services",Lr=z+"/certificate-from-the-place-of-work",zr=z+"/visa-certificate",Mr=z+"/certificate-of-work-experience",Fr=z+"/number-of-unused-vacation-days",Br=z+"/copy-of-the-employment-record",Hr=z+"/copies-of-documents-from-the-personal-file",Ur=z+"/work-on-the-terms-of-external-concurrency",Wr=z+"/certificate-time-parental-leave",Vr=z+"/arbitrary-request",Gr=z+"/courier",qr=z+"/persona-income-tax-reference",Yr=z+"/payment-of-child-birth-allowance",Jr=z+"/payment-for-child-care",Xr=ae+"/part-time-employment/",Ty=ae+"/dismissal/:id",Ey=ae+"/work-transfer/:id",$y=ae+"/extra-holiday-coll",Cy=ae+"/holiday-planning/:id",Py=ae+"/holiday-transfer/:id",Oy=ae+"/holiday-work/:id",Ay=ae+"/work-transfer-change-rate/:id",Dy=ae+"/medical-examination/:id",Kr=ae+"/buffer-dismissal",Qr=ae+"/buffer-holiday-planning",Zr=ae+"/buffer-holiday-transfer",el=ae+"/buffer-holiday-work",tl=ae+"/buffer-medical-examination",il=ae+"/buffer-work-transfer",G=()=>je({oldVersionUrl:"/sprav"}),Hs=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(K,{}),path:xe,Component:Rf,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...ml,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(ko,{}),path:ky,Component:br,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(K,{}),path:gy,Component:()=>(de.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx($o,{}),path:ul,Component:()=>(de.useEffect(()=>{window.location.replace(`${D}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ot,{}),path:Vi,Component:os,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(K,{}),path:Er,Component:()=>(de.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(wo,{}),path:Yt,Component:()=>(de.useEffect(()=>{window.location.replace(`${D}/?p=${Yt==null?void 0:Yt.slice(1,Yt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(Xd,{}),path:Jt,Component:()=>(de.useEffect(()=>{window.location.replace(`${D}/?p=${Jt==null?void 0:Jt.slice(1,Jt.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(Kd,{}),path:zs,Component:()=>je({oldVersionUrl:zs}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(I,{}),path:Is,Component:()=>je({oldVersionUrl:Is}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Rt,{}),path:Rs,Component:()=>je({oldVersionUrl:Rs}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(I,{}),path:as,Component:Ix,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Qd,{}),path:wy,Component:sf,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(I,{}),color:"lightGreen",path:Bs,pageSize:"big",Component:Ux,isTemplate:!1,group:"OTHER"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(I,{}),color:"pink",show:!1,path:Sy,Component:Wx,isTemplate:!1,fallbackPrevPage:Bs,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(di,{}),path:Ms,Component:()=>je({oldVersionUrl:Ms}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(di,{}),path:Fs,Component:()=>je({oldVersionUrl:Fs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(I,{}),path:_y,Component:qn,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Co,{}),path:Ls,Component:()=>je({oldVersionUrl:Ls}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:z,Component:R?G:Rx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(I,{}),path:ae,Component:R?()=>je({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):of,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),Us=()=>({...bl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Pr,icon:t.jsx(I,{}),color:"blue",Component:R?G:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Kr,icon:t.jsx(I,{}),color:"blue",Component:R?G:Za,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-work":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:el,icon:t.jsx(I,{}),color:"blue",Component:R?G:u0,isTemplate:!1,group:"OTHER"},"medical-examination":{id:"part-time-employment",title:"Заявление о диспансеризации",path:tl,icon:t.jsx(I,{}),color:"blue",Component:R?G:sb,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Qr,icon:t.jsx(I,{}),color:"blue",Component:R?G:T0,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Zr,icon:t.jsx(I,{}),color:"blue",Component:R?G:B0,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:il,icon:t.jsx(I,{}),color:"blue",Component:R?G:yb,isTemplate:!1,group:"OTHER"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:Xr,icon:t.jsx(I,{}),color:"blue",Component:R?G:af,isTemplate:!1,group:"OTHER"},"holiday-work-form":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Oy,icon:t.jsx(I,{}),color:"blue",Component:R?G:cf,isTemplate:!1,group:"OTHER"},"medical-examination-form":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Dy,icon:t.jsx(I,{}),color:"blue",Component:R?G:df,isTemplate:!1,group:"OTHER"},"holiday-planning-form":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Cy,icon:t.jsx(I,{}),color:"blue",Component:R?G:pf,isTemplate:!1,group:"OTHER"},"holiday-transfer-form":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Py,icon:t.jsx(I,{}),color:"blue",Component:R?G:uf,isTemplate:!1,group:"OTHER"},"work-transfer-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Ey,icon:t.jsx(I,{}),color:"blue",Component:R?G:hf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"work-transfer-change-rate-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Ay,icon:t.jsx(I,{}),color:"blue",Component:R?G:gf,isTemplate:!1,group:"OTHER"},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:$y,icon:t.jsx(I,{}),color:"blue",Component:R?G:lf,isTemplate:!1,group:"OTHER"},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:Ty,icon:t.jsx(I,{}),color:"blue",Component:R?G:rf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(I,{}),color:"blue",path:Or,Component:R?G:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(I,{}),color:"blue",path:Ar,Component:R?G:Fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(I,{}),color:"blue",path:Dr,Component:R?G:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(I,{}),color:"blue",path:Nr,Component:R?G:ef,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(I,{}),color:"blue",path:Ir,Component:R?G:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(I,{}),color:"blue",path:Rr,Component:R?G:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(I,{}),color:"blue",path:Lr,Component:R?G:Ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(I,{}),color:"blue",path:zr,Component:R?G:tf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(I,{}),color:"blue",path:Mr,Component:R?G:zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(I,{}),color:"blue",path:Fr,Component:R?G:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(I,{}),color:"blue",path:Br,Component:R?G:Bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(I,{}),color:"blue",path:Hr,Component:R?G:Ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(I,{}),color:"blue",path:Ur,Component:R?G:nf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(I,{}),color:"blue",path:Wr,Component:R?G:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(I,{}),color:"blue",path:Vr,Component:R?G:Lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},courier:{id:"courier",title:"Курьер",icon:t.jsx(I,{}),color:"blue",path:Gr,Component:R?G:Hx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(I,{}),color:"blue",path:qr,Component:R?G:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(I,{}),color:"blue",path:Yr,Component:R?G:Xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(I,{}),color:"blue",path:Jr,Component:R?G:Jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(I,{}),color:"blue",path:$r,Component:Dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(I,{}),color:"blue",path:Cr,Component:Nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ye,{to:xe})),icon:t.jsx(Rt,{}),isTemplate:!1,path:jy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ye,{to:xe})),icon:t.jsx(Wd,{}),isTemplate:!1,path:vy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ye,{to:xe})),icon:t.jsx(Vd,{}),isTemplate:!1,path:yy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ye,{to:xe})),icon:t.jsx(Gd,{}),isTemplate:!1,path:by,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ye,{to:xe})),icon:t.jsx(qd,{}),isTemplate:!1,path:my,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(Yd,{}),path:fy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ye,{to:xe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(Jd,{}),path:xy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ye,{to:xe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe}}),nl="/login",Ny="/forgot-password",Iy="/medical-certificate",si="/all",rs="/home",ls="/profile",cs="/chat",Ry="/messages",WS=cs+"/:chatId",sl="/electronic-interaction-agreement",Vi="/payments",Ct="/schedule",ol="/all-students",Ly="/all-students/:filter",zy="/all-teachers/:filter",al="/all-teachers",ds="/feedback",rl="/cant-access",ll="/memo-freshmen",cl="/get-your-login",dl="/memo-teacher",fe="/settings",VS=fe+"/:id",My=fe+"/appearance",Fy=fe+"/personal",By=fe+"/security",Hy=fe+"/home-page",Uy=fe+"/customize-menu",pl=fe+"/notifications",Wy="/instructions",ul="/project-activity",hl="/alerts",gl="/lk-notifications",xl="/helpful-information",$i=Ct+"/:page/:filter",fl=Ct+"/current",Vy=Ct+"/semestr",Gy=Ct+"/session",qy=Ct+"/retake",Yy=xl+"/:infoType";var Jy=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(Jy||{});const Xy=[{id:0,title:"",icon:"",path:nl,Component:$x},{id:1,title:"",icon:"",path:Ny,Component:bf},{id:2,title:"Обратная связь",icon:t.jsx(di,{}),path:ds,Component:Ma},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(st,{}),path:rl,Component:ff},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:cl,Component:Af},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:ll,Component:Df},{id:6,title:"Вниманию сотрудников!",icon:"",path:dl,Component:Nf}],ml={all:{id:"all",title:"Все разделы",icon:t.jsx(np,{}),path:si,Component:xf,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Fn,{}),path:fe,Component:Ef,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(I,{}),path:as,Component:()=>t.jsx(Of,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(jo,{}),path:hl,Component:yf,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Oo,{}),path:rs,Component:vf,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Ao,{}),path:ls,Component:wf,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(Ki,{}),path:gl,Component:im,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(_o,{}),path:sl,Component:mf,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(sp,{}),path:cs,Component:()=>je({oldVersionUrl:Ry}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Et,{}),path:Ct,menuPath:fl,Component:Fa,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Rt,{}),path:ol,Component:La,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Co,{}),path:al,Component:za,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(di,{}),path:ds,Component:Ma,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(op,{}),path:Wy,Component:jf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(ap,{}),path:Iy,Component:If,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"}},Ky={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Et,{}),path:fl,Component:_f,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(Hn,{}),path:Vy,Component:kf,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Po,{}),path:Gy,Component:Sf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Ln,{}),path:qy,Component:Tf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},bl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Et,{}),path:$i,Component:Fa,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...Ky,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Rt,{}),path:Ly,Component:La,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Rt,{}),path:zy,Component:za,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Zd,{}),path:My,Component:Cf,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:fe,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(ep,{}),path:Fy,Component:$f,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:fe,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(tp,{}),path:By,Component:Pf,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:fe,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Oo,{}),path:Hy,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:fe,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(ip,{}),path:Uy,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:fe,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(Ki,{}),path:pl,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:fe,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:Yy,Component:qn,color:"grey",isTemplate:!0,show:!1}},yl=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;vi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else W.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},vl=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;vi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},Qy=(e,i,n,s)=>{if(i){const o=s.length+xu;if(n<o){W.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??Qi;vi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else W.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},Zy=(e,i,n)=>{if(i)if(n.includes(e))W.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{W.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;vi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},ev=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,tv=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,iv=e=>{var m,f,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Ft.useSettings(),{data:r}=be.useUser(),c=We.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(y=>y===i),u=(f=a["settings-customize-menu"].property.pages)==null?void 0:f.find(y=>y===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?Ho:Qi,g=()=>{yl(i,a),Me.close()},x=()=>{Qy(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Me.close()};return t.jsxs(ev,{children:[t.jsxs("div",{className:"top",children:[t.jsx(xt,{color:o,size:22,children:n}),t.jsx(tv,{children:s})]}),t.jsx(ue,{}),d?t.jsx(v,{text:"Убрать с главной",icon:t.jsx(st,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{vl(i,a),Me.close()}}):t.jsx(v,{text:"Добавить на главную",icon:t.jsx(ci,{}),width:"100%",align:"left",background:"var(--block)",onClick:g}),u?t.jsx(v,{text:"Убрать из меню",icon:t.jsx(st,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>Zy(i,a,h)}):t.jsx(v,{text:"Добавить в меню",icon:t.jsx(ci,{}),width:"100%",align:"left",background:"var(--block)",onClick:x})]})},jl=({route:e})=>{var s;const i=_[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Me.open({e:o,height:105,content:t.jsx(iv,{...e})})};return t.jsx(v,{icon:t.jsx(Do,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},wl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},_l=p(Ze)`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);
    background: var(--block-content);

    .new {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"18px"};
        right: ${({isVertical:e})=>e?"-5px":"50px"};
        border-radius: ${({isVertical:e})=>e?"var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)":"var(--brLight)"};
        background: ${_.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${_.red.light2}; */
    }

    .more-button {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"50%"};
        left: ${({isVertical:e})=>e?"5px":"auto"};
        right: ${({isVertical:e})=>!e&&"10px"};
        transform: ${({isVertical:e})=>!e&&"translateY(-50%)"};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    .outside {
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({isVertical:e})=>e?"column":"row"};
        border-radius: var(--brLight);
        align-items: center;
        justify-content: ${({isVertical:e})=>e?"center":"flex-start"};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: var(--text);
            right: ${({isVertical:e})=>!e&&"50px"};
        }

        @media (min-width: 1001px) {
            &:hover {
                .more-button {
                    opacity: 1;
                    visibility: visible;
                }
                .notification-circle {
                    opacity: 0;
                }

                .icon {
                    box-shadow: 0 20px 110px 60px ${({color:e})=>_[e].main};
                    transform: ${({isVertical:e})=>e&&"scale(1.1) translateY(20px)"};
                }

                b {
                    opacity: ${({hasNotifications:e,isVertical:i})=>i&&e&&0};
                    transform: ${({isVertical:e})=>e&&"scale(0.95) translateY(40%)"};
                    color: ${({isVertical:e})=>e?"#fff":"var(--text)"};
                }

                .notifications-title {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: ${({isVertical:e})=>e?"center":"left"};
            color: var(--text);
            transition: 0.2s;
            font-weight: 600;
            height: 30px;
        }
    }
`,Ws=e=>{var C;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:c,mode:d,id:u,background:h,orientation:g="vertical"}=e,x=g==="vertical",{settings:m}=Ft.useSettings(),f=!!((C=m["settings-home-page"].property.pages)!=null&&C.find(j=>j===u)),b=11,y=l.useMemo(()=>(j,T)=>{const k=j.split(" ")[0];return k.length>T&&k.length!==T+1&&x?`${j.substr(0,T)}-${j.substr(T,j.length)}`:j},[]);return t.jsxs(_l,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:h,children:[t.jsxs("div",{className:"outside",children:[t.jsx(xt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:c??t.jsx(rp,{})}),t.jsx("b",{children:Hi(y(a,b),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",wl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),d==="use"&&t.jsx(jl,{route:e}),d==="add"?f?t.jsx(v,{icon:t.jsx(Qe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>vl(u,m)}):t.jsx(v,{icon:t.jsx(ci,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>yl(u,m)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},nv=p(_l)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,GS=()=>t.jsx(Z,{to:si,onClick:()=>{et.changeOpen({isOpen:!1,currentPage:si.slice(1,si.length)})},children:t.jsx(nv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(xt,{color:"blue",children:t.jsx(lp,{})}),t.jsx("b",{children:"Все разделы"})]})})}),sv=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,ov=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,av=e=>{const{close:i}=ie(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(ov,{width:o==="vertical"?c:"100%",children:t.jsx(Ws,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),et.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(sv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(Ws,{...e,maxWordLength:r,mode:a})})},rv=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,lv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(pe,{text:"Ничего не было найдено"}):t.jsx(rv,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(av,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),cv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(me(s.title).includes(me(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>me(a).includes(me(e))))&&(n[s.id]=s),n},{}),dv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,pv=p(Z)`
    width: 100%;
`,uv=({division:e})=>{const{close:i}=ie();return t.jsxs(dv,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"purple",children:t.jsx(Fi,{})}),t.jsx(se,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(pv,{to:`${al}/${e}`,onClick:i,children:t.jsx(v,{icon:t.jsx(No,{}),width:"100%",text:"Список"})})]})},hv=p.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,gv=({division:e})=>{const{open:i}=ie(),n=()=>{i(t.jsx(uv,{division:e}),"Подразделение")};return t.jsx(hv,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(Fi,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(dt,{})]})})},xv=({divisions:e})=>!e||e.length===0?null:t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(gv,{division:i},i))}),rn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),fv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Vs=p(Z)`
    width: 100%;
`,kl=({group:e})=>{const{close:i}=ie();return t.jsxs(fv,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"lightBlue",children:t.jsx(Io,{})}),t.jsx(se,{fontSize:"1.2rem",children:e})]}),t.jsxs(P,{gap:"8px",onClick:i,children:[t.jsx(Vs,{to:rn($i,{page:"current",filter:e}),children:t.jsx(v,{icon:t.jsx(Et,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(Vs,{to:`${ol}/${e}`,children:t.jsx(v,{icon:t.jsx(No,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},mv=p.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,bv=({group:e})=>{const{open:i}=ie(),n=()=>{i(t.jsx(kl,{group:e}),"Группа")};return t.jsx(mv,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",h:"50px",children:[t.jsx(Io,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(dt,{})]})})},yv=({groups:e})=>e?t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(bv,{group:i},i))}):null,vn=[{title:"Инструкции",links:[{link:D+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:D+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:D+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:D+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:D+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:D+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:D+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:D+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:D+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:D+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:D+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:D+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:D+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:D+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:D+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:D+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:D+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:D+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ne},{link:D+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:D+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne}]},{title:"Положения",links:[{link:D+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ne},{link:D+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ne},{link:D+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ne},{link:D+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ne},{link:D+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ne},{link:D+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ne},{link:D+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ne},{link:D+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ne},{link:D+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ne},{link:D+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ne},{link:D+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ne},{link:D+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ne},{link:D+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ne},{link:D+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ne},{link:D+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ne}]}];var ke=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(ke||{});const Ot={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},vv=[{id:ke.information,title:Ot[ke.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:ke.security,title:Ot[ke.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:ke.instructions,title:Ot[ke.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...vn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.regulations,title:Ot[ke.regulations],visible:"staff",content:[{title:"Положения",links:[...vn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.orders,title:Ot[ke.orders],visible:"staff",content:[{title:"Приказы",links:[...vn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.courses,title:Ot[ke.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],jv=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),wv=p.div`
    width: calc(100% - 2px);
    padding: 16px;
    margin: 1px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    padding: 16px;
    a {
        font-size: 0.95rem;
    }
`,_v=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(wv,{children:[t.jsx(M,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Se,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null,Gi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,Gs=({people:e,type:i})=>!e||e.length===0?null:t.jsx(P,{d:"column",children:e.map(n=>l.createElement(us,{name:n.fio,type:i,...n,key:n.id}))}),kv=()=>{const{allRoutes:e}=We.useMenu(),{notifications:i,removeNotificationLoading:n}=Ge.useLkNotifications(),{data:{user:s}}=be.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>vv.flatMap(({visible:N,content:A})=>N==="staff"&&o||N==="student"&&!o||N==="all"?A:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,g]=l.useState(null),[x,m]=l.useState(null),[f,b]=l.useState(null),[y,C]=l.useState(null),[j,T]=l.useState(null),k=[{title:"Разделы",content:t.jsx(lv,{pages:f,showNotFound:!1}),clear:()=>{b(null)},search:N=>{if(e){const A=cv(N,e);b(A)}},data:f},{title:"Студенты",content:t.jsx(Gs,{people:x,type:"stud"}),data:x,clear:()=>{m(null)},search:async N=>{const{data:A}=await lh(N,"",1,20);m(A.items)}},{title:"Сотрудники",content:t.jsx(Gs,{people:h,type:"staff"}),data:h,clear:()=>{g(null)},search:async N=>{const{data:A}=await sh(N,"",1,20);g(A.items)}},{title:"Группы",content:t.jsx(yv,{groups:r}),data:r,clear:()=>{c(null)},search:async N=>{const{data:A}=await ch(N);c(A.items)}},{title:"Подразделения",content:t.jsx(xv,{divisions:d}),data:d,clear:()=>{u(null)},search:async N=>{const{data:A}=await oh(N);u(A.items)}},{title:"Уведомления",content:t.jsx(Ya,{notifications:y,loadingRemove:n}),clear:()=>{C(null)},search:N=>{const A=i.filter(Q=>me(Q.title).includes(N));C(A)},data:y},{title:"Полезная информация",content:t.jsx(_v,{blocks:j,isStaff:o}),clear:()=>{T(null)},search:N=>{const A=jv(N,a);T(A)},data:j}];return[(()=>{const{content:N,clear:A,data:Q}=k.reduce((O,te)=>(Gi(te.data)&&(O.data.push(te.data),O.content.push(t.jsxs(t.Fragment,{children:[t.jsx(M,{size:4,align:"left",children:te.title}),te.content,t.jsx(ue,{})]}))),O.clear.push(te.clear),O),{content:[],clear:[],data:[]});return{title:"Все",content:N,clear:()=>A.map(O=>O()),search:async O=>{O.length<=8&&/\d|[-]/g.test(O)?await k[3].search(O):(k[0].search(O),k[5].search(O),k[6].search(O),Gi(k[0].data)===0&&(await k[1].search(O),await k[2].search(O),await k[4].search(O)))},data:Q}})(),...k]},Sv=()=>JSON.parse(localStorage.getItem(Y.SearchHistory)??"[]"),Tv=()=>{const e=kv(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>Sv(),[]),r=async x=>{e[i].clear();const m=Ta(x)?Sa(x):x;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(Y.SearchHistory,JSON.stringify(a)))},[c,d,u]=Pa({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:x=>(o(x),x.length>0&&(s!==x||!e[i].data))}),h=!u&&!c.length,g=!!c.length&&!u&&!!Gi(e[i].data);return{showMessage:h,showSearchResult:g,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},Ev=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(bs,{})})):e?n.filter(s=>me(s).includes(me(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(bs,{})})):[],$v=()=>t.jsxs(P,{gap:"8px",ai:"flex-start",children:[t.jsx(q,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(q,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),Cv=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,Pv=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=Tv(),u=Ev(r,n,d),{isOpen:h}=ie();return t.jsx(Cv,{children:t.jsxs(P,{d:"column",gap:"8px",h:"100%",children:[t.jsx($a,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(Gn,{pages:c.map(({title:g})=>({title:g})),currentPage:o,setCurrentPage:a}),t.jsx(Ea,{value:n,setValue:s}),e&&t.jsx(P,{h:"100%",children:t.jsx(pe,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(It,{})})}),!r&&n.length!==0&&!e&&!Gi(c[o].data)&&t.jsx(P,{h:"100%",children:t.jsx(pe,{size:"60px",text:"Ничего не было найдено",image:t.jsx(vo,{})})}),r&&Array(10).fill(0).map((g,x)=>t.jsx($v,{},x)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},Ov=p(Ze)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,Av=p.div`
    background-color: var(--theme-1);
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.73rem;
    font-weight: 500;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 4px;
    color: var(--theme-mild-opposite);
`,Dv=p(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,Nv=()=>{const e=Mg();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Ro,{})},{key:"k"}]}[e]},Sl=({size:e="large"})=>{const i=Nv(),{open:n}=ie(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(Pv,{}),"Глобальный поиск");return ka(i.map(({key:r})=>r),a),e==="icon"?t.jsx(v,{direction:"vertical",icon:t.jsx(It,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(Ov,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(se,{align:"left",fontSize:"0.9rem",children:t.jsxs(P,{gap:"8px",children:[t.jsx(It,{}),"Поиск"]})}),t.jsx(Dv,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(Av,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},Pn=e=>e.split(" ").map(i=>i[0]),ze=(e,i)=>{const n=Pn(e),s=_[bu[n[0]]];return s==null?void 0:s[i??"main"]},Iv=p.div`
    border-radius: ${({borderRadius:e})=>e?`${e}px`:"50%"};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background:e})=>e??"var(--almostTransparent)"};
    color: var(--text);
    border: ${({selected:e,border:i})=>(e||i)&&"5px solid var(--theme)"};
    outline: ${({selected:e})=>e&&"4px solid var(--reallyBlue)"};
    position: relative;

    width: ${({width:e})=>e??"160px"};
    min-width: ${({width:e})=>e??"160px"};
    height: ${({height:e})=>e??"160px"};

    margin-right: ${({marginRight:e})=>e??"32px"};
    box-shadow: ${({boxShadow:e})=>e??"0"};

    .icon {
        position: absolute;
        bottom: -2px;
        right: -5px;
        background: var(--theme);
        color: var(--text);
        padding: 2px;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 12px;
            height: 12px;
        }
    }

    .checkbox {
        position: absolute;
        bottom: -9px;
        right: -9px;
    }

    .name {
        display: flex;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: ${({width:e})=>e?parseInt(e)/50+"em":"3em"};
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        width: ${({width:e})=>e??"75px"};
        min-width: ${({width:e})=>e??"75px"};
        height: ${({height:e})=>e??"75px"};
        margin-right: ${({marginRight:e})=>e??"15px"};

        .name {
            font-size: ${({width:e})=>e?parseInt(e)/50+"em":"1.5em"};
        }
    }
`,Rv=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ci({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:g,onClick:x,borderRadius:m,background:f}){const[b,y]=l.useState(!0),C=Pn(i)[0]+(Pn(i)[1]??""),{open:j}=ie(),T=k=>{g?j(t.jsx(Ci,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):x==null||x(k)};return t.jsxs(Iv,{selected:e,width:s,height:o,marginRight:a,background:f??ze(i),boxShadow:d,border:u,onClick:T,borderRadius:m,children:[n&&b?t.jsx(Rv,{loading:"lazy",round:!0,onLoadedData:()=>y(!0),onError:()=>y(!1),src:n}):t.jsx("div",{className:"name",children:C}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Ke,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(kt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const qS=p.header`
    width: 100%;
    /* max-width: 750px; */
    padding-top: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);

    svg {
        min-width: 30px;
    }

    @media (max-width: 1000px) {
        padding: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .info {
            display: none;
        }
    }
`;p.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const YS=p.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
        width: calc(50% - 5px);
    }

    button {
        font-size: 0.7rem;

        span {
            margin-top: 8px;
            margin-bottom: -8px;
        }
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;

        button {
            height: 42px;
        }
    }
`,Lv=p.div`
    min-width: ${({width:e})=>e??"35px"};
    height: ${({width:e})=>e??"35px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({background:e})=>e??"var(--almostTransparent)"};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({background:e})=>e??"var(--almostTransparent)"}; */
    }
`,JS=p.div`
    margin-bottom: 15px;
    height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    b {
        font-size: 1.2rem;
    }

    span {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        & > .info {
            display: none;
        }
    }
`,XS=p.div`
    margin-top: 50px;
    width: 100%;
`,KS=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,QS=p(Ze)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,ZS=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,zv=p.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);
    opacity: ${({disabled:e})=>e?"0.5":"1"};
    pointer-events: ${({disabled:e})=>e?"none":"all"};

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    & > label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        user-select: none;
        cursor: pointer;
        min-width: fit-content;
        gap: 8px;

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
            white-space: nowrap;
        }
    }

    &:hover {
        background: var(--theme-1);
    }
`,Mv=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(zv,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(ix,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},Fv=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,Bv=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(Fv,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(Mv,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Tl=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=ut(),{settings:o}=Ft.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(cp,{}):t.jsx(dp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[g,x]=l.useState([{title:"Темная тема",state:n!=="light",action:f=>s(f)}]);l.useEffect(()=>{x([{title:"Темная тема",state:n!=="light",action:f=>s(f)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(f=>!f),i==null||i()};return e==="toggle"?t.jsx(Bv,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:g,setToggles:x}):e==="h-button"?t.jsx(v,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(v,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:_.white.transparent2,icon:t.jsx(Lv,{width:"30px",background:_.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},Hv=p.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-1t);
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`,El=()=>{const{close:e}=ie(),{notifications:i}=Ge.useLkNotifications(),n=3;return t.jsxs(P,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(Ja,{maxNotificationsVisible:n}),t.jsxs(se,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",wl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:gl,style:{width:"100%"},children:t.jsx(v,{width:"100%",text:"Показать все",onClick:e})})]})},Uv=()=>{const{notifications:e}=Ge.useLkNotifications(),{open:i}=ie(),n=()=>{i(t.jsx(El,{}),"Уведомления")};return t.jsxs(Hv,{onClick:n,children:[t.jsx(kt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(Ki,{})]})},Wv=p.div`
    position: relative;
`,$l=()=>{const{open:e}=ie(),{notifications:i}=Ge.useLkNotifications(),n=()=>Me.close(),s=()=>{Je.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Tt.logout}),n()},o=()=>{Me.close(),e(t.jsx(sc,{}),"Что нового")},a=()=>{e(t.jsx(El,{}),"Уведомления"),Me.close()};return t.jsxs(t.Fragment,{children:[t.jsx(dw,{padding:"8px",size:"small"}),t.jsx(ue,{}),t.jsx(Tl,{type:"h-button"}),t.jsx(ue,{}),t.jsx(Z,{to:ls,children:t.jsx(v,{text:"Профиль",background:"var(--block)",icon:t.jsx(Ao,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(Wv,{children:[t.jsx(v,{onClick:a,icon:t.jsx(Ki,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(kt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:fe,children:t.jsx(v,{text:"Настройки",background:"var(--block)",icon:t.jsx(Fn,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${D}/index.php`,children:t.jsx(v,{text:"Старый дизайн",icon:t.jsx(zn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(ue,{}),t.jsx(v,{align:"left",icon:t.jsx(pp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(ue,{}),t.jsx(v,{align:"left",icon:t.jsx(Ga,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},Vv=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,Gv=({showSearch:e=!1})=>{const{data:{user:i}}=be.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Me.open({e:s,height:143,content:t.jsx($l,{})})};return t.jsxs(Vv,{children:[e&&t.jsx(Sl,{size:"icon"}),t.jsx(Uv,{}),t.jsx(Ci,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},qv=p.header`
    width: calc(100% - 15px);
    height: var(--header-height);
    box-shadow: ${({headerVisible:e})=>e?"var(--very-mild-shadow)":"none"};
    background: ${({headerVisible:e})=>e?"var(--theme)":"transparent"};
    z-index: 12;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    padding: 0 15px;
    transition: 0.1s background;
    color: var(--text);
    display: ${({hidden:e=!1})=>e?"none":"flex"};

    & .back-button-wrapper button {
        transform: translateX(${({headerVisible:e})=>e?"-35px":"0"});
    }
    ${ee.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${ee.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,Yv=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,Jv=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,Xv=p.div`
    max-width: ${({maxWidth:e})=>`calc(${e} - ${e==="100%"?"55":"40"}px)`};
    width: 100%;
    font-size: ${({headerVisible:e})=>e?"1.1rem":"1.4rem"};
    font-weight: 600;
    transition: 0.2s transform, 0.2s font-size;
    position: absolute;
    white-space: ${({headerVisible:e})=>e?"nowrap":"normal"};
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;

    @media (max-width: 1232px) {
        max-width: ${Yv};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${Jv};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,Kv=()=>{const{pathname:e}=fi(),[i,n]=l.useState([e]),{action:s}=mi();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},Qv=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=mi();return t.jsx(v,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Li,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},Zv=({headerVisible:e,currentPage:i})=>{const n=mi(),s=Kv(),o=e||!!(i!=null&&i.planeHeader),a=Ha(i),r=(u=si)=>()=>{et.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=de.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:de.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(Qv,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(v,{direction:"vertical",icon:t.jsx(Li,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(v,{direction:"vertical",icon:t.jsx(Li,{}),onClick:r(),background:"transparent"}):t.jsx(v,{icon:t.jsx(Li,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},e1=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Ei(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=Zv({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(qv,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(Xv,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(P,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(Gv,{showSearch:!0})]})]})},t1=de.memo(e1),i1=p(Z)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    color: var(--text);
    position: relative;

    .more-button {
        top: 0;
        right: 0;
        position: absolute;
    }
    &:hover {
        background: var(--theme-1);
    }
`,n1=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(q,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Me.open({e:c,height:143,content:t.jsx($l,{})})};return t.jsxs(i1,{to:ls,children:[t.jsx(v,{icon:t.jsx(Do,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ci,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(M,{size:5,children:e})]})},s1=de.memo(n1),o1=["isCurrent","color"],a1=p(Z).withConfig({shouldForwardProp:e=>!o1.includes(e)})`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 3px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({color:e,isCurrent:i})=>e&&i?_[e].main:"var(--text)"};

    & > button {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    .title {
        opacity: ${({isCurrent:e})=>e?1:.8};
        width: 100%;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({isCurrent:e})=>e?1:.8};
        min-width: 22px;
        width: 22px;
        height: 22px;
        margin-right: 12px;
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:hover > button {
        opacity: 1;
    }

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: ${({color:e})=>e?_[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    ${ee.isTablet} {
        margin: 0;
        height: 100%;
        font-weight: ${({isCurrent:e})=>e?800:600};

        & > button {
            display: none;
        }
        /* span {
            width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } */
        justify-content: center;

        svg {
            margin-right: 0px;
            transform: translateY(-5px);
        }

        &::before {
            display: none;
            top: -2px;
            left: 50%;
            transform: translateX(-50%);
        }

        .notification {
            top: 10px;
            right: 0px;
        }

        .title {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: 8px;
            font-size: 0.65em;
            width: 100%;
            text-align: center;
        }
    }
`,r1=p.div`
    min-width: 235px;
    width: 235px;
    height: ${({height:e})=>e+"px"};
    box-shadow: var(--very-mild-shadow);
    border-radius: 0 var(--brSemi) var(--brSemi) 0;
    background: var(--block);
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px;
    transition: 0.2s transform, width 0.3s, 0.2s left, 0.2 opacity;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    .top-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        align-items: center;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        transition: 0.2s left, 0.2s opacity;
        position: absolute;
        left: ${({isOpen:e})=>e?"0":"-100%"};
        opacity: ${({isOpen:e})=>e?"1":"0"};
        width: 100%;
        font-size: 0.9em;

        .top-wrapper {
            max-height: calc(100% - 60px);

            img {
                width: 200px;
            }
        }
    }
`,l1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,c1=p.button`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border: none;
    background: transparent;
    color: var(--text);

    svg {
        width: 22px;
        height: 22px;
        margin-right: 7px;
    }

    &::before {
        content: '';
        height: 20px;
        width: 0;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: var(--blue);
        border-radius: 10px;
        transition: 0.2s width;
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,d1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(a1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(kt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(kt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(jl,{route:e})]})},Cl=de.memo(d1),p1=()=>{const{isOpen:e}=We.useMenu();return t.jsx(t.Fragment,{children:t.jsx(v,{icon:t.jsx(Qe,{}),onClick:()=>et.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},u1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(c1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};de.memo(u1);p.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;p.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const h1=()=>{const{leftsideBarRoutes:e}=We.useMenu(),i=fi();return e?t.jsx(l1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Cl,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(P,{d:"column",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},g1=de.memo(h1),x1=()=>{const{isOpen:e}=We.useMenu(),{width:i,height:n}=on(),{data:{user:s}}=be.useUser(),{visibleRoutes:o}=We.useMenu(),a=fi();return t.jsxs(r1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:rs,children:t.jsx(sn,{width:"165px"})}),t.jsx(s1,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Sl,{size:"small"}),t.jsx(g1,{})]}),t.jsx(Tl,{type:"toggle"}),i<1e3&&t.jsx(p1,{})]})},f1=p.div`
    width: 300px;
    position: absolute;
    top: calc(var(--header-height) + 10px);
    right: 20px;
    background: var(--theme);
    border-radius: var(--brLight);
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(${({isOpen:e})=>e?"0px":"-20px"});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    font-weight: 600;
    cursor: ${({isClickable:e})=>e?"pointer":"normal"};

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({isOpen:e})=>e?"-50%, 0px":"-50%, -20px"});
        font-size: 0.8em;
    }
`,m1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=ia.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{W.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),W.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(f1,{isOpen:e,isClickable:!!o,color:_t[n].color,onClick:a,children:t.jsx(J,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>W.openPopUpMessage({isOpen:!1}),children:i})})},ln=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${({isOpen:e})=>e?"wrapperOpened 0.2s forwards":"wrapperClosed 0.2s forwards"};

    @keyframes wrapperOpened {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes wrapperClosed {
        0% {
            opacity: 1;
            visibility: visible;
        }
        100% {
            opacity: 0;
            visibility: hidden;
        }
    }

    @media (max-width: 800px) {
        padding: 8px;
        align-items: flex-end;
    }
`;p.div`
    display: block;
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    white-space: pre-line;
    padding: 15px;
    transition: 0.2s;
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transform: translateY(${({isOpen:e})=>e?"50%":"51%"}) translateX(-50%)
        scale(${({isOpen:e})=>e?"1":"0.95"});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({isOpen:e})=>e?"1":"0.95"});
    }
`;const b1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Yn);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},y1=p.div`
    background: var(--block);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brLight);
    transition: 0.2s opacity, 0.2s transform;
    overflow: auto;

    & > .title-wrapper {
        margin-left: ${({hasBack:e})=>e?"15px":"0px"};
        padding-right: 50px;
        white-space: break-spaces;
        max-width: 600px;
        hyphens: auto;
    }

    .close-button,
    .back-button {
        position: absolute;
        top: 14px;
    }

    .back-button {
        left: ${({hasTitle:e})=>e?"4px":"12px"};
    }

    .close-button {
        right: 20px;
        z-index: 100;
        padding: 8px;
        border-radius: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        padding-top: 15px;

        /* Swipe bar on top */
        /* 
        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 5px;
            background: var(--almostTransparentOpposite);
            width: 30px;
            height: 4px;
            border-radius: 10px;
        } */
    }

    @media (min-width: 801px) {
        transform: scale(${({isOpen:e})=>e?1:.95});
    }

    @media (max-width: 800px) {
        padding: 15px;
        width: 100%;
        max-height: 80%;
        height: fit-content;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        animation: ${({isOpen:e})=>e?"openAnimation 0.2s forwards":"closeAnimation 0.2s forwards"};
        border-radius: var(--brLight);

        @keyframes openAnimation {
            0% {
                transform: scale(1) translateY(150px);
            }
            100% {
                transform: scale(1) translateY(0px);
            }
        }

        @keyframes closeAnimation {
            0% {
                transform: scale(1) translateY(0px);
            }
            100% {
                transform: scale(1) translateY(150px);
            }
        }

        .close-button {
            right: 15px;
        }

        h3 {
            margin-top: 7px;
        }
    }
`,v1=p.div`
    padding-top: 30px;
`,j1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=b1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return ka(["Escape"],o),Ht(r,()=>{o()}),t.jsx(ln,{isOpen:c,children:t.jsxs(y1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(v,{onClick:s,icon:t.jsx(xi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(M,{size:3,align:"left",children:a}),t.jsx(v,{onClick:o,icon:t.jsx(Qe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(v1,{children:i})]})})},w1=de.memo(j1),_1=p.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    padding: 20px;
    transition: 0.2s;
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transform: translateY(${({isOpen:e})=>e?"50%":"51%"}) translateX(-50%)
        scale(${({isOpen:e})=>e?"1":"0.95"});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({isOpen:e})=>e?"1":"0.95"});
    }
`,k1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=ra.useConfirm(),o=l.useRef(null);Ht(o,()=>Je.closeConfirm());const a=()=>{n(),Je.closeConfirm()},r=()=>{Je.closeConfirm()};return t.jsx(ln,{isOpen:e,children:t.jsxs(_1,{isOpen:e,ref:o,children:[t.jsx(M,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Se,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(v,{text:"Да",onClick:a,width:"90px",textColor:_.red.main,background:"transparent",hoverBackground:_.red.transparent3}),t.jsx(v,{text:"Нет",onClick:s??r,width:"90px",textColor:_.blue.main,background:"transparent",hoverBackground:_.blue.transparent3})]})]})})},S1=p.div`
    display: flex;
    align-items: ${({align:e})=>En(e)};
    flex-direction: column;
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"100%"};
    height: 100%;

    & > .slider-content {
        display: flex;
        width: 100%;
        max-width: ${({maxWidth:e})=>e??"100%"};
        overflow-x: auto;
        margin-top: 10px;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            height: 100%;
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`,T1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:g}=on(),x=l.useRef(null),m=()=>{var b;x!=null&&x.current&&h(Math.round(((b=x.current)==null?void 0:b.scrollLeft)/g))},f=b=>{var y;h(b),r==null||r((y=e[b])==null?void 0:y.id),x!=null&&x.current&&(x.current.scrollLeft=x.current.clientWidth*b)};return l.useEffect(()=>{f(u)},[i,g]),t.jsxs(S1,{width:n,align:c,maxWidth:o,children:[t.jsx(Gn,{pages:e.map(({title:b,condition:y})=>({title:b,condition:y})),currentPage:u,setCurrentPage:f,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:x,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(pe,{text:"Нет данных"})},b.title))})]})},ps=T1,qs=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},Ys=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Pl=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},E1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},$1=p.div`
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"100px"};
    position: absolute;
    background: ${({color:e})=>e};
    z-index: -1;
    overflow: hidden;
    top: -16px;
    left: -16px;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(50%);
        filter: drop-shadow(0 0 34px #00000054);
    }

    & svg:nth-child(1) {
        z-index: -3;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e*2})`};
    }

    & svg:nth-child(2) {
        z-index: -2;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e})`};
    }

    & svg:nth-child(3) {
        z-index: -1;
        transform: ${({baseScale:e})=>`scale(${e})`};
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #00000024, transparent);
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`,C1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx($1,{width:i,height:n,color:ze(e,"dark1"),color2:ze(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"light2")})})]})}),P1=p.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: 20px;
        width: 100%;

        b {
            margin-bottom: 15px;
            color: #fff;
            display: flex;
            align-items: flex-end;
            height: 42px;
        }
    }
`,O1=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:g=!1})=>{const x=g?"140px":"110px",m=Pl(h,n,s,o);return t.jsxs(P1,{children:[t.jsx(C1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ci,{avatarModal:!0,border:!0,name:i,avatar:e,width:x,height:x,marginRight:"0"}),!g&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(se,{fontSize:"0.9rem",children:t.jsx(Ue,{words:m})}),t.jsx(yt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(yt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(yt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(yt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(yt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},A1=p.div`
    @media (min-width: 1001px) {
        width: 330px;
        height: fit-content;
        min-height: 120px;
    }

    display: flex;
    align-items: center;
    height: inherit;
    min-height: inherit;
    flex-direction: column;

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;

        a {
            width: 100%;
        }
        button {
            width: 100%;
        }
    }

    ${ee.isMobile} {
        .user {
            .info b {
                width: 90%;
                height: 35px;
            }
            &::before {
                height: 110px;
            }
        }
    }
`,Ol=e=>{const{children:i}=e;return t.jsxs(A1,{children:[t.jsx(O1,{...e}),t.jsx("div",{className:"buttons",children:i})]})},D1=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,N1=()=>t.jsxs(D1,{children:[t.jsx(q,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(q,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(q,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Al=e=>{if(e)return()=>{Je.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(Y.Token,e),location.reload()}})}},I1=e=>{const{close:i}=ie(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${ze(s,"main")}, ${ze(s,"dark1")})`;return t.jsxs(Ol,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:rn($i,{page:"current",filter:o}),children:t.jsx(v,{icon:t.jsx(Et,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(v,{icon:t.jsx(Mn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(v,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Al(n)})]})},R1=e=>{const{close:i}=ie(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${ze(s,"dark1")}, ${ze(s,"main")})`;return t.jsxs(Ol,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:rn($i,{page:"current",filter:s}),children:t.jsx(v,{icon:t.jsx(Et,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(v,{icon:t.jsx(Mn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(v,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Al(n)})]})},L1=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?E1(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${_.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>qs(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${qs(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,us=e=>{const{open:i}=ie(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:g=!1,orientation:x="horizontal",size:m="middle"}=e,f=Pl(h,n,d,u);if(g)return t.jsx(N1,{});const b=y=>{r?r(y):h||(Me.close(),i(n==="staff"?t.jsx(R1,{...e}):t.jsx(I1,{...e})))};return t.jsxs(L1,{orientation:x,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ci,{name:o,avatar:s,width:Ys(x,m),height:Ys(x,m),marginRight:x==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ue,{words:f})})]})]})},qi=e=>{const i=me(e),s=[{keys:["распознаван"],icon:t.jsx(hp,{})},{keys:["принт"],icon:t.jsx(gp,{})},{keys:["химич"],icon:t.jsx(xp,{})},{keys:["сервер"],icon:t.jsx(fp,{})},{keys:["игр"],icon:t.jsx(mp,{})},{keys:["жизнед"],icon:t.jsx(bp,{})},{keys:["web","веб"],icon:t.jsx(yp,{})},{keys:["истор"],icon:t.jsx(vp,{})},{keys:["информат"],icon:t.jsx(jp,{})},{keys:["информации"],icon:t.jsx(Ce,{})},{keys:["мобильн"],icon:t.jsx(wp,{})},{keys:["безопасн"],icon:t.jsx(_p,{})},{keys:["автоматиз"],icon:t.jsx(kp,{})},{keys:["линейн"],icon:t.jsx(Sp,{})},{keys:["обработ"],icon:t.jsx(Tp,{})},{keys:["презентац"],icon:t.jsx(Ep,{})},{keys:["операционн"],icon:t.jsx(Ro,{})},{keys:["эконом"],icon:t.jsx(ot,{})},{keys:["информацион","программир","сайт"],icon:t.jsx($p,{})},{keys:["анализ"],icon:t.jsx(Cp,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Pp,{})},{keys:["сети","сетей"],icon:t.jsx(Op,{})},{keys:["матем"],icon:t.jsx(Ap,{})},{keys:["вероятн"],icon:t.jsx(Dp,{})},{keys:["философ"],icon:t.jsx(Lo,{})},{keys:["данны"],icon:t.jsx(Np,{})},{keys:["язык"],icon:t.jsx(Ip,{})},{keys:["спорт","физичес"],icon:t.jsx(Rp,{})},{keys:["проектная"],icon:t.jsx(wn,{})},{keys:["интеллект"],icon:t.jsx(Lp,{})},{keys:["научн"],icon:t.jsx(zp,{})},{keys:["предприним"],icon:t.jsx(Mp,{})},{keys:["коммуникац"],icon:t.jsx(Fp,{})},{keys:["управлени"],icon:t.jsx(zo,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Po,{})},{keys:["переработ"],icon:t.jsx(Bp,{})},{keys:["машин","инжен"],icon:t.jsx(Hp,{})},{keys:["проектир","расчет"],icon:t.jsx(Up,{})},{keys:["производ"],icon:t.jsx(So,{})},{keys:["эколог"],icon:t.jsx(Wp,{})},{keys:["защит"],icon:t.jsx(Vp,{})},{keys:["патент"],icon:t.jsx(Gp,{})},{keys:["материал"],icon:t.jsx(qp,{})},{keys:["физик"],icon:t.jsx(Yp,{})},{keys:["тайм"],icon:t.jsx(Jp,{})},{keys:["практика"],icon:t.jsx(Mo,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(up,{})},On={"9:00 - 10:30":_.green,"10:40 - 12:10":_.lightGreen,"12:20 - 13:50":_.blue,"14:30 - 16:00":_.purple,"16:10 - 17:40":_.pink,"17:50 - 19:20":_.red,"18:20 - 19:40":_.orange,"19:30 - 21:00":_.orange,"19:50 - 21:10":_.orange},Dl=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},z1=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,cn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},M1=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=cn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Nl=(e,i,n)=>M1(e)===cn(i.startTime)&&n,ui=e=>e<=9?"0"+e:e,F1=e=>`${ui(Math.floor(e/60))}:${ui(e%60)}`,Js=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},B1=p.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${ee.isMobile} {
        width: calc(100% + 40px);
    }
`,H1=p.div`
    position: absolute;
    right: 0;
    width: 70%;
    top: 0;
    height: 100%;
    z-index: 1;

    & > div {
        top: 50%;
        left: 50%;
        position: inherit;
    }

    & > div:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04;
        svg {
            width: 170px;
            height: 170px;
        }
    }
    & > div:nth-child(2) {
        opacity: 0.03;
        transform: translate(100px, -90px);
        svg {
            width: 100px;
            height: 100px;
        }
    }

    & > div:nth-child(3) {
        opacity: 0.02;
        transform: translate(-175px, 0px);
        svg {
            width: 70px;
            height: 70px;
        }
    }

    & > div:nth-child(4) {
        opacity: 0.01;
        transform: translate(90px, 10px);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`,U1=p(P)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,Xs=p.div`
    opacity: 0.7;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${({shortInfo:e})=>e?16:18}px;
        height: ${({shortInfo:e})=>e?16:18}px;
    }

    ${ee.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,W1=p(se)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,V1=p.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2px;
    z-index: -2;
    top: ${({currentTime:e})=>`${e}px`};

    &::before {
        display: block;
        content: '';
        min-width: 10px;
        height: 10px;
        border-radius: 12px;
        background: ${_.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${_.red.main};
    }
`,G1=p.div`
    color: ${_.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${ee.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,q1=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(Js(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(Js(new Date,s[0]*60,s[1]*60))},Un.minute),()=>clearInterval(c.current)),[e]),t.jsx(V1,{currentTime:(a-i)*n,children:o&&t.jsx(G1,{children:F1(a)})})},Il=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Re=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(U1,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(Xs,{shortInfo:o,children:e}),t.jsx(W1,{width:"100%",className:"text",children:i}),t.jsx(Xs,{shortInfo:o,children:s})]}),Y1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,J1=p(Z)`
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: var(--brLight);

    .start {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    &:hover {
        background: var(--theme-1t);
    }
`,X1=({groups:e})=>{const{close:i}=ie();return t.jsx(Y1,{children:e.map(n=>t.jsxs(J1,{to:rn($i,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Rt,{}),n]}),t.jsx(dt,{})]},n))})},K1=({icon:e,background:i,noPadding:n=!1})=>t.jsx(B1,{background:i,noPadding:n,children:t.jsxs(H1,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),Q1=p.div`
    width: 100%;
    height: 110px;
    position: relative;
    color: var(--text);
    margin-bottom: ${({noPadding:e})=>e?"0px":"40px"};

    .icon {
        position: absolute;
        bottom: ${({noPadding:e})=>e?"-5px":"-50px"};
        left: ${({noPadding:e})=>e?"-5px":"16px"};
        background: ${({iconBackground:e})=>e};
        transition: 0s;

        svg {
            color: ${({textColor:e})=>e};
        }
        border: 5px solid var(--block-content);
    }
`,Z1=({subjectName:e,color:i,noPadding:n})=>{const s=qi(e),{theme:o}=ut(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(Q1,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(K1,{noPadding:n,icon:s,background:r}),t.jsx(xt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},ej=Xp`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		line-height: 130%;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
	}

	#root {
		height: 100vh;
	}

	body {
		overflow: hidden;
	}

	@media (min-width: 1001px) {
		::-webkit-scrollbar {
			width: 14px;
		}
	
		::-webkit-scrollbar-track {
			background-color: transparent;
		}
	
		::-webkit-scrollbar-thumb {
			border-radius: 100px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: var(--theme-mild-opposite);
		}

		::-webkit-scrollbar-thumb:hover {
			border: 3px solid transparent;
		}
	}



	h1 {
		color: var(--text-color);
	}

	:root {
		--light-box-shadow: 0 0 3px rgba(0, 0, 0, 0.342);
		--header-box-shadow: 3px 0 3px rgba(0, 0, 0, 0.342);
		--grey: #808080;
		--brLight: 9px;
		--brSemi: 19px;
		--brBold: 30px;
		--strong-shadow: 0 0 50px #000;
		--very-mild-shadow: 0 0 32px rgb(0 0 0 / 8%);
		--desktop-page-padding: 40px;
		--mobile-page-padding: 5px;
        --header-height: 55px;
        --mobile-bottom-menu-height: 60px;
		--theme: #fff;
		--block-content-shadow: 0 0 1px #3b3b3bab;
	}

	html[data-theme=dark] {
		--blue: #6d86e3;
		--theme-4: #494949;
		--theme-3: #3b3b3b;
		--theme-3-shadow: 5px 5px 10px rgba(0,0,0,0.377);
		--theme-2: rgb(34, 34, 34);
		--theme-1t: #0000001f;
		--theme-1: #363636;
		--theme-t: #0000005e;
		--theme: #3a3a3a;
		--search2: #313131;
		--search: #313131;
		--text: #f0f0f0;
		--invert-text: #272727;
		--invert: 0;
		--double-invert: 1;
		--theme-mild-opposite: #d2d2d2;
		--settings: #292929;
		--blue: #90b3e7;
		--blueTransparent: #90b3e7b0;
		--green: #94f0b9;
		--greenTransparent: #94f0b9b0;
		--red: #e27992;
		--reallyBlue: #567dff;
		--almostTransparent: rgba(0,0,0,0.281);
		--almostTransparentOpposite: hsla(0,0%,100%,0.103);
		--block: #2e2e2e;
		--block-shadow: 0;
		--block-shadow-1: 0 0 2px #ffffff8f;
		--block-content: #252525;
	}

	html[data-theme=light] {
		--blue: #6d86e3;
		--blueTransparent: #6d86e3b0;
		--theme-4: #f1f1f1;
		--theme-3: #f1f1f1;
		--theme-3-shadow: 5px 5px 10px hsla(0,0%,40.8%,0.24);
		--theme-2: rgb(243, 243, 243);
		--theme-1t: #00000005;
		--theme-1: #f5f5f5;
		--theme-t: #ffffff8f;
		--theme: #fff;
		--text: #272727;
		--invert-text: #f0f0f0;
		--invert: 1;
		--double-invert: 0;
		--theme-mild-opposite: #565656;
		--search2: #eee;
		--search: #f5f5f5;
		--settings: #dadada;
		--green: #62c087;
		--greenTransparent: #62c087b0;
		--red: #e27992;
		--reallyBlue: #567dff;
		--almostTransparent: hsla(0,0%,87.8%,0.486);
		--almostTransparentOpposite: rgba(53,53,53,0.151);
		--block: #fff;
		--block-shadow: 0 0 2px rgb(0 0 0 / 24%);
		--block-shadow-1: 0 0 2px rgb(0 0 0 / 24%);
		--block-content: #fff;
	}

	a {
		text-decoration: none;
		color: var(--blue);
		
		&:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    	}

		&:focus:not(:focus-visible) {
			outline: none;
		}
	}

	@keyframes defaultFadeIn {
		0%{
			transform: translateY(20px);
			opacity: 0;
		}
		100%{
			transform: translateY(0px);
			opacity: 1;
		}
	}
`,tj=({color:e,start:i})=>`
&::before {
    content: '';
    background: ${e};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: absolute;
    inset: 0;
    animation: ${i?"pulse-animation 1s infinite linear":"none"};
}

@keyframes pulse-animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform:  scale(2.5);
        opacity: 0;
    }
}`,ij=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${tj}
`,nj=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,sj=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,Rl=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=ut(),o=s==="light"?i.main:i.light2;return t.jsxs(nj,{children:[t.jsx(ij,{start:n,color:o}),e&&t.jsx(sj,{children:e})]})},oj=p.div`
    position: relative;
    height: 100%;
    max-width: 400px;

    @media (min-width: 1001px) {
        min-width: 320px;
        width: 100%;
    }

    .date-interval {
        opacity: 0.6;
        font-size: 0.7em;
        font-weight: 600;
    }

    .time-and-next {
        display: flex;
        align-items: center;
        font-size: 0.7em;
        font-weight: bold;
        margin: 10px 0 5px 0;
        column-gap: 3px;
    }

    .teachers {
        & > * + * {
            margin-top: 5px;
        }
    }
`,aj=p(P)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,rj=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:g,isCurrentEvent:x,noPadding:m=!1}=e,f=(d==null?void 0:d.split(","))??[],{open:b}=ie(),y=()=>{f.length===1?b(t.jsx(kl,{group:f[0]})):b(t.jsx(X1,{groups:f}),"Группы")},C=()=>{b(t.jsx(cj,{place:s,link:r,name:n}))},j=Il(n);return t.jsxs(oj,{children:[t.jsx(Z1,{subjectName:n,color:u,noPadding:m}),t.jsxs(aj,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(P,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(Rl,{isCurrentEvent:x,color:u,timeInterval:i}),t.jsx(Ll,{timeLeft:cn(i.split(" - ")[0],"minutes"),isNext:g,color:u,isCurrentEvent:x})]}),t.jsx(M,{size:3,align:"left",width:"fit-content",children:j.name})]}),t.jsx(ue,{margin:"0",width:"100%"}),t.jsx(Re,{icon:t.jsx(Hn,{}),text:t.jsx(Ue,{words:[h??"",a]})}),((r==null?void 0:r.length)||j.link)&&t.jsx("a",{href:r??j.link,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{icon:t.jsx(_n,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Re,{icon:t.jsx(Mo,{}),text:s}),!!c.length&&t.jsx(Re,{icon:t.jsx(kn,{}),text:t.jsx(Ue,{words:c})}),!!f.length&&t.jsx(Re,{onClick:y,icon:t.jsx(zo,{}),text:t.jsx(Ue,{words:f}),rightIcon:t.jsx(dt,{})}),t.jsx(P,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(M,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(T=>t.jsx(us,{type:"staff",name:T},T))]})}),!r&&t.jsx(ue,{margin:"0",width:"100%"}),!r&&t.jsx(v,{text:"Посмотреть на карте",width:"100%",onClick:C})]})]})};p.span`
    padding: 3px 10px;
    height: 21px;
    display: flex;
    align-items: center;
    background: var(--search);
    background: ${({isCurrent:e,darkColor:i,color2:n})=>e?i:n};
    border-radius: 100px;
    /* box-shadow: ${({transparent:e})=>`0 0 30px ${e}`}; */
    color: #fff;
    white-space: nowrap;
`;const lj=p.a`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: blur(3px);
        transform: scale(1.2);
    }

    h3 {
        bottom: 15px;
        left: 15px;
        position: absolute;
        background: ${_.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,Ri=({title:e,link:i,image:n})=>i?t.jsxs(lj,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(M,{size:3,children:e})]}):null,Ks=p.div`
    ${ee.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,cj=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(Ks,{children:t.jsx(P,{jc:"center",children:t.jsx(ht,{})})}):t.jsx(Ks,{children:e==="Webex"?t.jsx(Ri,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Ri,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Ri,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Ri,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},Qs=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Ll=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=ut(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(Qs,{background:c,color:r,children:"Сейчас"}):t.jsxs(Qs,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},dj=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,eT=()=>t.jsxs(dj,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(q,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(q,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(q,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(q,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),zl="/assets/sleep-54d590c1.gif";var Ml=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Ml||{});const pj=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],tT=[...pj,{title:"Месяц",condition:!0}],wt=Object.keys(At).reduce((e,i)=>(e[i]=[],e),{}),uj={schedule:{today:[],week:{...wt},semestr:{data:{...wt},startDate:new Date,endDate:new Date},session:{data:{...wt},startDate:new Date,endDate:new Date}},teachers:[]},hj=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},hi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Yi=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Yi||{});const Fl=e=>{const[i,n]=e.split(" "),s=Yi[n],o=new Date().getMonth()>s?new Date().getFullYear()+1:new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Bl=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Yi[o],r=Yi[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},Zt=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[g,x]=r.split(" - "),m=hi(x)-hi(g),[f,b]=d.split("-").map(j=>j.trim()),y=Fl(f),C=Bl(b,f);return{title:o,people:a,startTime:g,duration:m,startDate:y,endDate:C,placeIcon:t.jsx(Kp,{}),dateInterval:d,color:On[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:qi(o)}}):[],Zs=(e,i)=>(e??[]).filter(n=>{const[s,o]=n.dateInterval.split("-").map(c=>c.trim()),a=Fl(s),r=Bl(o,s);return i>=a&&i<=(r??a)}),Hl=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),An=e=>e instanceof Date&&isFinite(+e),gj=e=>{const i={...wt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!An(n)||!An(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Hl(a);if(r==="sunday")continue;i[r]=Zt(e[o].lessons,At[r].short)}return{schedule:i,startDate:n,endDate:s}},Ul=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Wl=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const g=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return W.evokePopUpMessage({message:g,type:"failure",time:Un.ten_seconds}),{schedule:uj.schedule,errorInData:g}}const o=new Date;let a=hj(o);o.getDay()===0&&(a=Ul(o,1));const r={...wt},c={...wt};for(const g in e)if(g!=="Sunday"){const x=g.toLocaleLowerCase(),f=e[g];"lessons"in f?(r[x]=Zt(Zs(f.lessons,a),At[x].short),c[x]=Zt(f.lessons,At[x].short)):(r[x]=Zt(Zs(f,a),At[x].short),c[x]=Zt(f,At[x].short)),n=new Date(Math.min(...c[x].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[x].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=gj(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},Vl=async e=>{const i=await Pu(e),n=await Au();return Wl(i.data,n.data)},Gl=async e=>{const i=await Ou(e),n=await Du(e);return Wl(i.data,n.data)},eo={data:{schedule:null,externalSchedule:null,view:Ml.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},xj=()=>V(le),St=L(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Gl(n);if(i&&s==="stud")return await Vl(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Vt=L(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await Vl(e)}catch(i){throw new Error(i.message)}}),Gt=L(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Gl(e)}catch(i){throw new Error(i.message)}}),fj=S(),ql=S(),Yl=S(),Jl=S(),Xl=S(),Kl=S(),Ql=S(),le=X(eo).on(St,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(St.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(ql,(e,i)=>({...e,data:{...e.data,view:i}})).on(Yl,(e,i)=>({...e,currentChosenDay:i.day})).on(Jl,()=>({...eo}));$({clock:St.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(wt)}}),target:le});$({clock:Xl,source:le,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:le});$({clock:Kl,source:le,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:le});$({clock:Gt.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:le});$({clock:Vt.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:le});$({clock:[Vt,Gt,St],source:le,fn:e=>({...e,loading:!0}),target:le});$({clock:[Vt,Gt],source:le,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:le});$({clock:[Vt.doneData,Gt.doneData,St.doneData],source:le,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:le});$({clock:[Vt.failData,Gt.failData,St.failData],source:le,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:le});$({clock:Ql,source:le,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:le});const hs={useSchedule:xj},mj={changeCurrentModule:fj,changeView:ql,changeCurrentChosenDay:Yl,clearStore:Jl,resetExternalSchedule:Ql,setSearchValue:Kl,setFilter:Xl},bj={getScheduleFx:St,getGroupScheduleFx:Vt,getTeacherScheduleFx:Gt},yj=Object.freeze(Object.defineProperty({__proto__:null,effects:bj,events:mj,selectors:hs},Symbol.toStringTag,{value:"Module"})),vj=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${ui(Math.floor(o/60))}:${ui(o%60)}`},Zl=(e,i)=>e?`${e} - ${vj(e,i)}`:"9:00",Dn=e=>!e||!An(e)?0:e.getHours()*60+e.getMinutes(),gs=(e,i)=>hi(e.startTime)<=Dn(new Date)&&Dn(new Date)<=hi(e.startTime)+e.duration&&i,ec=()=>{const{open:e}=ie();return n=>{const s=Zl(n.startTime,n.duration);e(t.jsx(rj,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:gs(n,!0),noPadding:!0,...n}))}},to={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},jj=()=>{const{currentDevice:e}=Ei(),[i,n]=l.useState(to[e]);return l.useEffect(()=>{n(to[e])},[e]),i},wj=p.div`
    --time-width: 55px;

    ${ee.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${ee.isMobile} {
        --time-width: 35px;
        height: 400px;
    }

    position: relative;

    & {
        .calendar-wrapper {
            scroll-snap-align: center;
            min-width: 100%;
        }
    }
`,_j=({dayEvents:e,day:i})=>{const n=jj(),s=ec(),o=[9,22];return e!=null&&e.length?t.jsx(wj,{children:t.jsx(nc,{events:e,interval:o,scale:n,weekday:0,currentDay:0,shift:o[0]*60,onEventClick:s})},i):t.jsx(pe,{text:"В этот день пар нет",image:zl})},tc=()=>{const{data:{schedule:e}}=hs.useSchedule(),{open:i}=ie(),n=Ul(new Date,1),s=Tr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Hl(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(_j,{dayEvents:a,day:s}),s);return t.jsx(v,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},kj=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    font-weight: 500;
    text-align: center;

    img {
        width: 60px;
        height: 60px;
    }
`,iT=({errorInData:e})=>t.jsxs(kj,{children:[t.jsx("img",{src:zl,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(tc,{})]});p.div`
    border-radius: 15px;
    overflow: hidden;
    padding: 6px;
    background: var(--theme-2);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    height: 100%;
    max-height: ${({height:e})=>`calc(${e}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({height:e,isTeacherSchedule:i})=>`calc(${e}px - ${i?340:280}px)`};
    }
`;const Sj=(e,i,n)=>i?e?1:.8:n?1:0,Tj=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>Sj(e,i,n)};
    transform: scale(${({isVisible:e})=>Tj(e)});
    overflow-y: auto;

    .day-title {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: calc(100% - 20px);
        justify-content: space-between;

        h4 {
            color: ${({isCurrent:e})=>e?"var(--blue)":"var(--text)"};
        }

        span {
            font-weight: 500;
            opacity: 0.7;
            font-size: 0.9em;
            width: 90px;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        transition: 0.5s opacity;
        opacity: ${({isVisible:e})=>e?"1":"0"};
        width: 100%;
        min-width: 100%;
        scroll-snap-align: start;
        transform: scale(1);
    }
`;const Ej=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,nT=()=>t.jsxs(Ej,{children:[t.jsx(ya,{size:"38px"}),t.jsx(M,{size:4,children:"Учебный день завершился"}),t.jsx(tc,{})]});p.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 4px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:i})=>`linear-gradient(90deg, transparent, ${e?i:"var(--block)"})`};
    }

    .room {
        width: fit-content;
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--theme-2)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`;p.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;p(Z)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`;p.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0.7em;
    font-weight: 600;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 5px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:i})=>`linear-gradient(90deg, transparent, ${e?i:"var(--block)"})`};
    }

    span {
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--theme-2)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`;p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--theme-1);
    border-radius: 10px;
    min-width: 80px;
    overflow: hidden;

    button {
        border-radius: 0;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;const $j=e=>{const[i,n]=e.split(":");return+i*60+ +n},ic=(e,i,n)=>e?($j(e)-i)*n:0,Cj=p.div`
    background: ${({background:e})=>e};
    width: ${({quantity:e,listView:i})=>i?"100%":`calc(${e}% - 2.5px)`};
    height: ${({duration:e,scale:i})=>`${e*i}px`};
    border-radius: 5px;
    padding: ${({shortInfo:e,scale:i})=>e?"8px":`${i*8}px`};
    display: flex;
    overflow: hidden;
    color: ${({textColor:e})=>e};
    cursor: pointer;
    position: ${({listView:e})=>e?"static":"absolute"};
    transform: translateX(${({leftShift:e})=>`calc(${e}% + ${1*(e/100)}px)`});
    left: 2px;
    top: ${({top:e})=>`${e}px`};
    /* box-shadow: 0 0 1px ${({color:e})=>e}; */

    a {
        color: ${({textColor:e})=>e};
        text-decoration: underline;
    }

    &:hover {
        filter: brightness(0.98);
    }

    ${ee.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;p.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${ee.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const Pj=p(P)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Oj=p.span`
    font-weight: 500;
    font-size: ${({shortInfo:e})=>e?"0.85rem":"0.93rem"};
    padding-top: 2px;
    white-space: ${({shortInfo:e,nameInOneRow:i})=>!e&&i&&"nowrap"};
    text-overflow: ${({shortInfo:e})=>!e&&"ellipsis"};
    overflow: ${({shortInfo:e})=>!e&&"hidden"};
    hyphens: auto;
    width: 100%;
    margin-bottom: 2px;
    margin-top: ${({listView:e})=>e?"2px":"0"};

    ${ee.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,Aj=p.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 100%;
    justify-content: center;
    align-items: center;

    svg {
        width: 40%;
        height: auto;
    }
`,Dj=p(P)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Nj=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:g,rooms:x,dateInterval:m,leftShift:f,quantity:b,isCurrentEvent:y=!1,nameInOneRow:C=!0,isNextEvent:j=!1,listView:T=!1,shortInfo:k=!1}=e,{theme:U}=ut(),{isMobile:N}=Ei(),A=U==="light"?d.dark3:d.light3,Q=U==="light"?d.transparent1:d.transparent2,O=()=>h(e),te=(N||b>1)&&k,Te=N&&b>=2&&k,ye=r==null?void 0:r.map(Ne=>{var Pi,Oi;const qt=Ne.split(" ");return`${qt[0]??""} ${((Pi=qt[1])==null?void 0:Pi[0])??""}.${((Oi=qt[2])==null?void 0:Oi[0])??""}.`}),qe=ic(o,c,u),De=Il(i),ge=Te?i.split(" ").map(Ne=>Ne[0].toUpperCase()):Hi(De.name,k?te?43:35:C?300:64);return t.jsxs(Cj,{background:Q,textColor:A,listView:T,leftShift:100*f,quantity:100/b,duration:n,scale:u,top:qe,onClick:O,shortInfo:k,children:[t.jsx(Aj,{children:s}),t.jsx(P,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Pj,{scale:u,d:"column",ai:"flex-start",shortInfo:k,children:[t.jsxs(P,{d:"column",gap:"2px",children:[!k&&t.jsxs(P,{gap:"8px",children:[t.jsx(Rl,{timeInterval:Zl(o,n),color:d,isCurrentEvent:y}),t.jsx(Ll,{timeLeft:cn(o,"minutes"),isNext:j,color:d,isCurrentEvent:y}),!!(x!=null&&x.length)&&t.jsx(Re,{shortInfo:k,icon:N&&b>1?void 0:t.jsx(kn,{}),text:t.jsx(Ue,{words:x})}),(!!g||De.link)&&t.jsx("a",{href:g??De.link,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(_n,{}),text:g?a:"Cсылка"})})]}),t.jsx(Oj,{listView:T,nameInOneRow:C,scale:u,shortInfo:k,children:ge})]}),!!r.length&&!te&&t.jsx(Re,{shortInfo:k,text:t.jsx(Ue,{words:k?[ye[0]]:ye}),icon:t.jsx(Qp,{})}),!!(x!=null&&x.length)&&k&&!te&&t.jsx(Re,{shortInfo:k,icon:t.jsx(kn,{}),text:t.jsx(Ue,{words:x})}),!!g&&k&&!te&&t.jsx("a",{href:g,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(_n,{}),text:a})}),!!m&&!te&&t.jsx(P,{gap:"5px",d:"column",ai:"flex-start",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(Hn,{}),text:m})})]})})]})},Ij=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):i[s.startTime].push(s)}return i},Rj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d})=>{const u=Ij(e),h=new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(Dj,{h:"100%",d:"column",children:[h&&t.jsx(q1,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(u).map((x,m)=>u[x].map((f,b)=>l.createElement(Nj,{leftShift:b,quantity:u[x].length,scale:n,isCurrentEvent:gs(f,h),isNextEvent:Nl(e,f,h),...f,onClick:c,shift:i,key:f.startTime+f.title+m+b,shortInfo:s})))]})},Lj=p(P)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,zj=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Mj=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,Fj=p(se)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,Bj=Array(24).fill(0).map((e,i)=>`${ui(i)}:00`),Hj=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Bj.slice(e[0],e[1]+1);return t.jsx(Lj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(zj,{children:[t.jsx(Fj,{children:o}),t.jsx(Mj,{})]},o))})},nc=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r})=>{const c=Dl({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var d;return ic((d=i==null?void 0:i[0])==null?void 0:d.startTime,o,n)}});return t.jsxs(z1,{className:"calendar-wrapper",ref:c,children:[t.jsx(Hj,{interval:e,scale:n}),t.jsx(Rj,{currentDay:r,weekDay:s,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},Uj=p.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?_[e].main:"var(--text)"};
    border-radius: var(--brLight);

    .title {
        height: 40px;
        font-weight: 700;
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
        width: 100%;
    }

    .icon {
        color: ${({color:e})=>e?_[e].main:"var(--text)"};
        width: 45px;
        height: 45px;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--almostTransparent);

        svg {
            width: 20px;
            height: 20px;
        }
    }
`,Wj=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=ie();return o?t.jsxs(Uj,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(v,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},Vj=p.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .image {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 1000px) {
        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
`,Gj=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,qj=p(se)`
    margin-bottom: 20px;
`,Yj=({image:e,list:i,text:n})=>{const{isMobile:s}=Ei();return t.jsxs(Vj,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(M,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(qj,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Gj,{children:i==null?void 0:i.map(o=>l.createElement(Wj,{...o,key:o.title}))})]})},Jj=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`,Xj=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Kj=()=>t.jsx(Xj,{children:t.jsx(nc,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:On["16:10 - 17:40"],icon:qi("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:On["17:50 - 19:20"],icon:qi("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),sc=()=>{const[e,i]=l.useState(0),{close:n}=ie(),s=[t.jsx(Yj,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Kj,{})}},"schedule")];return t.jsxs(Jj,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Da,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(v,{onClick:()=>i(o=>lt(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(v,{onClick:n,text:"Готово",width:"100%",background:_.blue.light1,textColor:"#fff"}):t.jsx(v,{onClick:()=>i(o=>lt(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},Qj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return hi(i.startTime)+i.duration<Dn(new Date)}},Zj=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=hs.useSchedule(),o=ec(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=Qj(e==null?void 0:e.today),c=Dl({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:g=>{var x,m;return g.clientHeight*(r?((x=e==null?void 0:e.today)==null?void 0:x.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(f=>gs(f,!0)||Nl(e.today,f,!0)))??0)}}),d=()=>W.evokePopUpMessage({message:n??"",type:"failure",time:Un.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},io=p(nn)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;
    display: none;

    ${ee.isTablet} {
        display: flex;
    }
`,Xt=()=>t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(q,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),ew=()=>{const{allRoutes:e}=We.useMenu(),{data:{user:i}}=be.useUser(),{hasNoSchedule:n,loading:s}=Zj(),o=fi();if(!e||!i||s)return t.jsxs(io,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(Xt,{}),t.jsx(Xt,{}),t.jsx(Xt,{}),t.jsx(Xt,{}),t.jsx(Xt,{})]});const a=(i==null?void 0:i.user_status)==="stud"?sk:n?ak:ok;return t.jsx(io,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Cl,{...e[r],isCurrent:c},r)})})},tw=(e,i,n)=>({isOpen:i,message:e,position:n}),no={hints:[]},iw=()=>V(nw),oc=S(),ac=S(),rc=S(),nw=X(no).on(oc,(e,{message:i,position:n})=>({hints:[...e.hints,tw(i,e.hints.length===0,n)]})).on(ac,e=>({hints:e.hints.splice(1,e.hints.length)})).on(rc,()=>({...no})),sw={useHint:iw},ow={evoke:oc,close:ac,clearStore:rc},aw=p.div`
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    /* padding: 10px; */
    background: var(--reallyBlue);
    color: #fff;
    border-radius: var(--brLight);
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0 0 30px ${_.blue.transparent3};
    transition: 0.2s;
    opacity: ${({open:e})=>e?1:0};
    visibility: ${({open:e})=>e?"visible":"hidden"};
    transform: ${({open:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    z-index: 5;
    min-width: 150px;

    .message {
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            transform: rotate(45deg);
            background: var(--reallyBlue);
            position: absolute;
            top: 15px;
            left: -5px;
            border-radius: 3px;
            z-index: -1;
        }
    }
`,rw=()=>{const{hints:e}=sw.useHint(),i=e[0];return i?t.jsx(aw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(J,{type:"hint",title:i.message,onClose:()=>ow.close(),width:"100%",icon:null})}):null},lw=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;

    .scrolable-content {
        width: 100%;
    }

    .alpabet-letter {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .title-wrapper {
            width: fit-content;
            color: var(--theme-mild-opposite);
        }
    }
`,cw=50;function sT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=cw}){const{data:{user:u}}=be.useUser();let h="";const g=l.useCallback(x=>{const m=x.currentTarget.clientHeight,f=x.currentTarget.scrollHeight,b=x.currentTarget.scrollTop;f-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(pe,{text:"Нет результатов",children:c}):t.jsxs(lw,{onScroll:g,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((x,m)=>{var b,y;const f=r?h!==((b=x.fio)==null?void 0:b.charAt(0)):!1;return f&&(h=((y=x.fio)==null?void 0:y.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[f&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(M,{size:4,align:"left",children:h}),t.jsx(ue,{})]}),i(x,(u==null?void 0:u.id.toString())===x.id,m)]})})}),n&&s&&t.jsx(ht,{width:"40px",height:"40px"}),n&&!s&&t.jsx(v,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const dw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=be.useUser();return ie(),t.jsxs(Se,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(se,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(us,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},lc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),pw=()=>{const e=R?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:jc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Hc,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:wc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:_c,title:"Справка-вызов"},{link:Ic,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Bc,title:"Запрос на изменение персональных данных"},{link:Nc,title:"Запрос на восстановление магнитного пропуска"},{link:bc,title:"Уточнение паспортных данных"},{link:Uc,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Wc,title:"Предоставление каникул в связи с окончанием университета"},{link:Vc,title:"Предоставление академического отпуска"},{link:Gc,title:"Отчисление по инициативе обучающегося"},{link:qc,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:kc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Sc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Tc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:$c,title:"Предоставление права проживания льготной категории граждан"},{link:Ec,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Cc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Oc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Ac,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Pc,title:"Расторжение договора найма"},{link:Dc,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:Uo,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:zc,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Mc,title:"Заявка на материальную помощь"},{link:vc,title:"Оформить социальную стипендию"},{link:Fc,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:R,links:[{link:Rc,title:"Отправить документы воинского учета"},{link:Lc,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:R,links:[{link:Nn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Nn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:fu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:yc,title:" Произвольный запрос"}]}]},uw=()=>[{title:"Цифровые сервисы",links:[{link:$r,title:"Актуализация контактных данных"},{link:Cr,title:"Анкета для сверки данных"},{link:Pr,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Or,title:"Получение нового компьютерного оборудования"},{link:Ar,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Dr,title:"Обслуживание принтеров, МФУ"},{link:Nr,title:"Вопрос по СЭД Directum и 1С"},{link:Ir,title:"Вопрос по Личному кабинету"},{link:Rr,title:"Прочее ИТ-обслуживание"},{link:Lr,title:"Справка с места работы"},{link:zr,title:"Справка на визу"},{link:Mr,title:"Справка о стаже работы"},{link:Fr,title:"Справка о количестве неиспользованных дней отпуска"},{link:Br,title:"Копия трудовой книжки"},{link:Hr,title:"Копии документов из личного дела"},{link:Ur,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Wr,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:qr,title:"Справка по форме 2-НДФЛ"},{link:Yr,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Jr,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:Vr,title:"Произвольный запрос"},{link:Uo,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Gr,title:"Курьер"}]}],hw=()=>[{title:"",links:[{link:Xr,title:"Заявление на трудоустройство по совместительству"},{link:Kr,title:"Заявление на увольнение"},{link:el,title:"Заявление о привлечении к работе в выходной день"},{link:Qr,title:"Заявление о предоставлении отпуска"},{link:Zr,title:"Заявление о переносе отпуска"},{link:tl,title:"Заявление о диспансеризации"},{link:il,title:"Заявление на перевод"}]}],gw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),xw=p.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        max-height: 600px;
    }

    display: flex;
    flex-direction: column;
    height: 70vh;

    .list {
        padding: 5px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: calc(50% - 5px);
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,oT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=ie(),s=e?uw():pw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(xw,{children:[t.jsx(Oa,{whereToSearch:s,searchEngine:lc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>t.jsxs("div",{className:"link-list",children:[t.jsx(M,{size:4,align:"left",bottomGap:!0,children:d.title}),!d.disabled&&t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!gw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(pe,{text:`По запросу ${o} ничего не найдено`})]})})]})},fw=p.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .list {
        margin-top: 10px;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (min-width: 1001px) {
        .list {
            .links-wrapper {
                .link-list {
                    padding: 5px;
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,mw=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,aT=({})=>{const{data:{listApplication:e},error:i}=_e.useApplications(),{close:n}=ie(),s=hw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(gt,{load:()=>Xe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(wi,{children:[t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ce,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(fw,{children:[t.jsx(M,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Oa,{whereToSearch:s,searchEngine:lc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(mw,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(pe,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},bw=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),so={isOpen:!1,pages:[],currentPage:0},yw=()=>V(vw),cc=S(),dc=S(),pc=S(),uc=S(),vw=X(so).on(cc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(dc,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(pc,(e,{value:i})=>({...e,currentPage:i})).on(uc,()=>({...so})),xs={useStory:yw},vt={open:cc,close:dc,clearStore:uc,changeCurrentPage:pc};p(Ze)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e??"var(--block)"};
    cursor: pointer;
    border-radius: var(--brLight);
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};

    .title {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({color:e})=>e??"var(--text)"};
    }
`;p.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const jw=p.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: center;
    height: ${({height:e})=>e??"auto"};
    min-height: ${({minHeight:e})=>e};
    color: var(--text);
    background: ${({background:e})=>e};
    padding: ${({padding:e})=>e};
    width: 100%;

    /* @media (min-width: 550px) and (max-width: 1000px) {
        margin-top: 25px;
    } */
`,dn=jw,ww=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[c,d]=l.useState(r===void 0),[u,h]=l.useState(!a),[g,x]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return W.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!c&&!n.find(j=>!!j.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(T=>!T.value&&T.required))&&!n.find(j=>!!j.find(T=>{var k;return T.value.id==="not-chosen"&&!!((k=T.items)!=null&&k.length)}))?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!c&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var T;return j.value===null&&!!((T=j.items)!=null&&T.length)})?(s(j=>(j.confirmed=!0,{...j})),d(!1),h(!1)):W.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},f=()=>{s(j=>{const T=j.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{...j,data:[...j.data,T]}})},b=j=>{s(T=>{const k=T.data.filter((U,N)=>j!==N);return{...T,data:k}})},y=j=>{s(T=>(T.documents&&(T.documents.files=[...j]),{...T}))},C=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{h(!g&&o?!1:!a)},[g,a]),{openArea:u,changeInputArea:c,included:g,setOpenArea:h,setIncluded:x,setChangeInputArea:d,handleRemove:b,handleAddNew:f,handleLoadFiles:y,handleConfirm:m,handleCheckbox:C}},_w=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({openArea:e})=>e?"15px":"0"};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({openArea:e})=>e?"auto":"0"};
        opacity: ${({openArea:e})=>e?"1":"0"};
        visibility: ${({openArea:e})=>e?"visible":"hidden"};

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }
`,kw=p.div``,Sw=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(kw,{children:[t.jsx(M,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(mx,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:g=>s(g,h)},docVisible:d==="straight"?o:!o},a))]}),Tw=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(M,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Se,{children:[!a&&t.jsx(Ke,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Ke,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Ew=p.div`
    width: 100%;
    text-align: start;
    margin-top: -10px;
    margin-bottom: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
    }
    .value {
        font-size: 0.83em;
        padding-left: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,$w=({title:e,value:i,visible:n})=>n?t.jsxs(Ew,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Cw=p.div`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};
    .hr-checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: 0.75em;
    }

    svg {
        color: var(--reallyBlue);
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`,Pw=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Cw,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(v,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Zp,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Lo,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,Ow=p.div`
    width: 100%;
    text-align: start;
    margin-top: 5px;
    margin-bottom: 15px;
    .title {
        font-size: 1em;
        font-weight: bold;
    }
    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Aw=({title:e,visible:i})=>i?t.jsx(Ow,{children:t.jsx("span",{className:"title",children:e})}):null,Dw=p.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({inputAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        max-height: 36px;
        border: ${({danger:e})=>e&&`2px solid ${_.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({inputAppearance:e})=>e&&"4px solid var(--almostTransparentOpposite)"};
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`,Nw=p.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    z-index: 5;
    cursor: pointer;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--block);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({title:e})=>e?"60px":"46px"};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`,Iw=p.li`
    list-style-type: none;
    background: var(${({isSelected:e})=>e?"--reallyBlue":""});
    color: ${({isSelected:e})=>e?"#fff":""};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({leadingToSelected:e})=>e?"5px":"0px"};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`,Rw=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:g})=>{const[x,m]=l.useState([]),[f,b]=l.useState(!0);return l.useEffect(()=>{if(e){const y=g.filter(C=>C.toLowerCase().includes(e.toLowerCase()));m(y)}else m([])},[e,g]),t.jsxs(Dw,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(M,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:y=>{i(y.target.value),b(!0)},placeholder:c}),x.length>0&&t.jsx(Nw,{width:"100%",isOpen:f,className:f?"open":"close",itemsAmount:x.length,title:s,children:x.map((y,C)=>t.jsx(Iw,{isSelected:!1,onClick:()=>{i(y),m([]),b(!1)},children:y},C))})]})]})},Lw=p.div`
    width: 100%;
    text-align: start;
    margin-top: -20px;
    margin-bottom: -10px;
    padding: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
        color: #e27992;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,zw=({title:e,visible:i})=>i?t.jsx(Lw,{children:t.jsx("span",{className:"title",children:e})}):null,oo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:g,setData:x,mask:m,editable:f,placeholder:b,autocomplete:y,isSpecificRadio:C,specialType:j,specialFieldsNameConfig:T,minValueInput:k,maxValueInput:U,maxValueLength:N,diff:A,visible:Q=!0,onChange:O,onKeyPress:te,onBlur:Te,onKeyDown:ye,onKeyUp:qe,onFocus:De}=e,ge=f??(g&&!h),[Ne,qt]=l.useState(!0),ft=(H,ce,Pt)=>{O==null||O(H),x(ve=>(Array.isArray(ve.data[0])?ve.data[ce][Pt??0].value=H:ve.data[ce].type==="checkbox-docs"?ve.data[ce].items[Pt??0].value=!!H:ve.data[ce].value=H,{...ve}))},Pi=(H,ce,Pt)=>{O==null||O(H),x(ve=>(Array.isArray(ve.data[0])?ve.data[ce][Pt??0].value=H:ve.data[ce].value=H,{...ve}))},Oi=(H,ce,Pt)=>{x(ve=>(ve.data[ce].items[Pt??0].files=H,{...ve}))},Ed=H=>{O==null||O(H),x(ce=>(ce.data[o].value=H,{...ce}))},$d=H=>{O==null||O(H),te==null||te(H),Te==null||Te(H),ye==null||ye(H),qe==null||qe(H),De==null||De(H),x(ce=>(ce.data[o].value=H,{...ce}))};return T&&j&&!Object.values(T).includes(j)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Ke,{text:u,isActive:ge,checked:i,setChecked:H=>ft(H,o,a)}):r==="hr-checkbox"?t.jsx(Pw,{text:u,isActive:ge,checked:i,setChecked:H=>ft(H,o,a)}):r==="auto-complete-input"?t.jsx(Rw,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:H=>ft(H,o,a)}):r==="textarea"?t.jsx(yg,{value:i,title:u,setValue:H=>ft(H,o,a),isActive:ge,textAreaAppearance:ge,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(Sw,{title:u,items:d,setChecked:(H,ce)=>ft(!H,o,ce),setFiles:(H,ce)=>Oi(H,o,ce)}):r==="date-interval"?Q?t.jsx(Ra,{title:u,required:n,dates:i,setDates:H=>$d(H),valid:Ne,setValid:qt,minValue:k,diff:A}):null:r==="simple-text"?t.jsx($w,{title:u,value:i,visible:Q}):r==="text-warning"?t.jsx(zw,{title:u,visible:Q}):r==="text-header"?t.jsx(Aw,{title:u,visible:Q}):r==="radio"?t.jsx(Tw,{buttons:d,title:u,required:n,current:i,setCurrent:Ed,isSpecificRadio:C}):Q?t.jsx(rt,{value:i,title:u,minValue:k,maxValue:U,maxLength:N,setValue:H=>ft(H,o,a),type:r,isActive:ge,inputAppearance:ge,placeholder:b??u,required:n,mask:m,width:s,autocomplete:y}):null:Q?t.jsx(Xa,{items:d,setSelected:H=>Pi(H,o,a),selected:i,isActive:ge,title:u,width:s,multiple:r==="multiselect",required:n}):null},Mw=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--block);
    z-index: 3;
    width: 100%;

    .title-and-icon {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1000px) {
        background: transparent;
        position: relative;
    }
`,Fw=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Mw,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(M,{size:3,align:"left",icon:s!==void 0?s?t.jsx(To,{}):t.jsx(Eo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Ke,{checked:i,setChecked:a})]}),t.jsx(v,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent",flipped:c})]}),Bw=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(v,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(st,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(v,{onClick:o,text:"Сохранить",icon:t.jsx(eu,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(v,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(st,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(v,{onClick:o,text:"Подтвердить",icon:t.jsx(tu,{}),textColor:_.green.main,hoverBackground:_.green.transparent3,background:"transparent",width:"130px"}),t.jsx(v,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(iu,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"})]}),Hw=e=>e.confirmed===void 0?null:t.jsx(Se,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Bw,{...e,confirmed:e.confirmed})}),Uw=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:g,links:x,specialFieldsNameConfig:m})=>{const{openArea:f,changeInputArea:b,included:y,setOpenArea:C,setIncluded:j,setChangeInputArea:T,handleRemove:k,handleAddNew:U,handleLoadFiles:N,handleConfirm:A,handleCheckbox:Q}=ww({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:g,confirmed:c});return t.jsxs(t.Fragment,{children:[t.jsxs(_w,{openArea:f,children:[t.jsx(Fw,{title:e,included:y,optional:d,confirmed:c,setOpenArea:C,setIncluded:j,collapsed:g}),t.jsxs("div",{className:"inputs",children:[t.jsx(J,{type:"alert",visible:!!n,icon:t.jsx(li,{}),children:n}),t.jsx(J,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Ce,{}),children:i}),Array.isArray(s[0])?s.map((O,te)=>t.jsxs("div",{className:"data-line",children:[O.map((Te,ye)=>t.jsx(oo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:te,indexJ:ye,specialFieldsNameConfig:m,...Te},ye)),b&&u&&t.jsx(v,{icon:t.jsx(nu,{}),textColor:_.red.main,onClick:()=>k(te),background:"transparent",isActive:!(o!=null&&o.value)})]},te)):s.map((O,te)=>t.jsx(oo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:te,specialFieldsNameConfig:m,...O},te)),u&&b&&t.jsx(v,{icon:t.jsx(su,{}),text:"Добавить",onClick:U,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Ia,{files:a.files,setFiles:O=>N(O),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(x==null?void 0:x.length)&&x.map(O=>l.createElement(Dg,{...O,key:O.title})),t.jsx(Ke,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:Q}),t.jsx(Hw,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:T,handleConfirm:A})]})]}),h&&t.jsx(ue,{})]})},Ww=p.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?_.green.main:_.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?_.blue.transparent1:e?_.green.transparent3:_.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,Vw=p.div`
    display: flex;
    margin-bottom: -20px;
`,Gw=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,hc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:Ee(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Vw,{children:e.map((r,c)=>t.jsxs(Gw,{lastElement:c===e.length-1,children:[t.jsx(Ww,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(lg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Uw,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},qw=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Yw=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Jw=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),gc=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return bw(u);if(Array.isArray(u.data[0])){const h=u.data.map(x=>Object.assign({},...x==null?void 0:x.map(m=>ao(m)))),g={};return g[e]=JSON.stringify(h),g}else return u.data.map(h=>ao(h))}).flat(),r=i.map(u=>{var g,x;const h={};if((g=u.documents)!=null&&g.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((x=u.documents)==null?void 0:x.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var g,x;const h={};return(g=u.optionalCheckbox)!=null&&g.fieldName&&(h[(x=u.optionalCheckbox)==null?void 0:x.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Xe.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},ao=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Xw(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Xw=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,xc=p.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    max-height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        margin-top: 35px;
    }
`;var fs=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(fs||{}),Kw=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(Kw||{});const Qw=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Zw=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],e_=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Zw},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Qw}]}},t_=()=>{var O;const[e,i]=l.useState(null),[n,s]=l.useState(Di.kvdCert),[o,a]=l.useState(Di.fluorographyCert),[r,c]=l.useState(Di.vichRwCert),[d,u]=l.useState(Di.graftCert),{data:{dataUserApplication:h}}=_e.useApplications(),{data:{user:g}}=be.useUser(),[x,m]=l.useState(!1),[f,b]=l.useState(!1),[y,C]=l.useState(null),[j,T]=l.useState(null),[k,U]=l.useState(null),N=x??!1;if((g==null?void 0:g.educationForm)!=="Недоступен")return t.jsx(pe,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const A=!!e&&!!j&&!!y&&!!k;if(l.useEffect(()=>{h&&(i(e_(h)),C(Yw()),T(Jw()),U(qw()))},[h]),!A)return null;const Q=[[{dataForm:e,setDataForm:i}],[{dataForm:j,setDataForm:T}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx(xc,{isDone:N,children:t.jsxs(va,{children:[t.jsx(M,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(hc,{stagesConfig:Q}),t.jsx(Lt,{text:"Отправить",action:()=>gc(fs.USG_GETHOSTEL_OOZ,[e,j,y,k,n,o,r,d],b,m),isLoading:f,completed:x,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:N,isActive:(((O=e.optionalCheckbox)==null?void 0:O.value)??!0)&&Ee(e)&&Ee(o)&&Ee(r)&&Ee(d)&&Ee(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},i_=l.lazy(()=>w(()=>import("./index-85bbc41b.js"),["assets/index-85bbc41b.js","assets/vendor-831b4923.js"])),n_=l.lazy(()=>w(()=>import("./index-3f04ab8d.js"),["assets/index-3f04ab8d.js","assets/vendor-831b4923.js"])),s_=l.lazy(()=>w(()=>import("./index-95f40321.js"),["assets/index-95f40321.js","assets/vendor-831b4923.js"])),o_=l.lazy(()=>w(()=>import("./index-af65d1be.js"),["assets/index-af65d1be.js","assets/vendor-831b4923.js"])),a_=l.lazy(()=>w(()=>import("./index-596eea5e.js"),["assets/index-596eea5e.js","assets/vendor-831b4923.js"])),r_=l.lazy(()=>w(()=>import("./index-6936fd79.js"),["assets/index-6936fd79.js","assets/vendor-831b4923.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),l_=l.lazy(()=>w(()=>import("./index-6d500cd1.js"),["assets/index-6d500cd1.js","assets/vendor-831b4923.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),c_=l.lazy(()=>w(()=>import("./index-acf64174.js"),["assets/index-acf64174.js","assets/vendor-831b4923.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),d_=l.lazy(()=>w(()=>import("./index-56b17139.js"),["assets/index-56b17139.js","assets/vendor-831b4923.js"])),p_=l.lazy(()=>w(()=>import("./index-22468229.js"),["assets/index-22468229.js","assets/vendor-831b4923.js","assets/index-e9e7f458.js"])),u_=l.lazy(()=>w(()=>import("./index-57f8473d.js"),["assets/index-57f8473d.js","assets/vendor-831b4923.js","assets/is-valid-url-08a91344.js"])),h_=l.lazy(()=>w(()=>import("./index-ccab89cd.js"),["assets/index-ccab89cd.js","assets/vendor-831b4923.js"])),g_=l.lazy(()=>w(()=>import("./index-134366a2.js"),["assets/index-134366a2.js","assets/vendor-831b4923.js"])),x_=l.lazy(()=>w(()=>import("./index-32b51ce0.js"),["assets/index-32b51ce0.js","assets/vendor-831b4923.js"])),f_=l.lazy(()=>w(()=>import("./index-2adad05e.js"),["assets/index-2adad05e.js","assets/vendor-831b4923.js"])),m_=l.lazy(()=>w(()=>import("./index-ca47aa29.js"),["assets/index-ca47aa29.js","assets/vendor-831b4923.js"])),b_=l.lazy(()=>w(()=>import("./index-6b4ddfeb.js"),["assets/index-6b4ddfeb.js","assets/vendor-831b4923.js"])),y_=l.lazy(()=>w(()=>import("./index-8db45c09.js"),["assets/index-8db45c09.js","assets/vendor-831b4923.js"])),v_=l.lazy(()=>w(()=>import("./index-0a05a260.js"),["assets/index-0a05a260.js","assets/vendor-831b4923.js"])),j_=l.lazy(()=>w(()=>import("./index-94404231.js"),["assets/index-94404231.js","assets/vendor-831b4923.js"])),w_=l.lazy(()=>w(()=>import("./index-7e161064.js"),["assets/index-7e161064.js","assets/vendor-831b4923.js"])),__=l.lazy(()=>w(()=>import("./index-990a83e1.js"),["assets/index-990a83e1.js","assets/vendor-831b4923.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Q_),void 0));const k_=l.lazy(()=>w(()=>import("./index-156ebf89.js"),["assets/index-156ebf89.js","assets/vendor-831b4923.js"])),S_=l.lazy(()=>w(()=>import("./index-1b11b766.js"),["assets/index-1b11b766.js","assets/vendor-831b4923.js"])),T_=l.lazy(()=>w(()=>import("./index-151a5c45.js"),["assets/index-151a5c45.js","assets/vendor-831b4923.js"])),E_=l.lazy(()=>w(()=>import("./index-8eac5862.js"),["assets/index-8eac5862.js","assets/vendor-831b4923.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),$_=l.lazy(()=>w(()=>import("./index-71e97ce5.js"),["assets/index-71e97ce5.js","assets/vendor-831b4923.js","assets/get-method-obtaining-fields-cb6697c0.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),C_=l.lazy(()=>w(()=>import("./index-cc94dade.js"),["assets/index-cc94dade.js","assets/vendor-831b4923.js"])),P_=l.lazy(()=>w(()=>import("./index-5c776892.js"),["assets/index-5c776892.js","assets/vendor-831b4923.js"])),O_=l.lazy(()=>w(()=>import("./index-8ce26a7e.js"),["assets/index-8ce26a7e.js","assets/vendor-831b4923.js"])),A_=l.lazy(()=>w(()=>import("./index-f1665c9e.js"),["assets/index-f1665c9e.js","assets/vendor-831b4923.js"])),D_=l.lazy(()=>w(()=>import("./index-133b319d.js"),["assets/index-133b319d.js","assets/vendor-831b4923.js"])),N_=l.lazy(()=>w(()=>import("./index-b092c9ee.js"),["assets/index-b092c9ee.js","assets/vendor-831b4923.js"])),I_=l.lazy(()=>w(()=>import("./index-7b5317d1.js"),["assets/index-7b5317d1.js","assets/vendor-831b4923.js"])),R_=l.lazy(()=>w(()=>import("./index-da35d690.js"),["assets/index-da35d690.js","assets/vendor-831b4923.js","assets/get-divisions-96cfa1b1.js"])),L_="Sep 07 2023 12:00:00 GMT+0300",fc="Sep 08 2023 12:00:00 GMT+0300",rT=e=>{const i=new Date;return i<new Date(L_)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(fc)?"Подача заявок закрыта":""},z_=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],M_=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],F_=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],B_=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],H_=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],U_=[{id:0,title:"1"},{id:1,title:"2"}],W_=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],V_=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],G_=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],q_=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Y_=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:z_,width:"100%",editable:!0,required:!0}]}),J_=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:M_,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),X_=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:F_,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:B_,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:H_,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:U_,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:W_,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),K_=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:V_,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ro=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:G_,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},mc=()=>{var U;const[e,i]=l.useState(null),[n,s]=l.useState(Y_()),[o,a]=l.useState(J_()),[r,c]=l.useState(X_()),[d,u]=l.useState(K_()),[h,g]=l.useState(ro(null)),[x,m]=l.useState(!1),[f,b]=l.useState(!1),[y,C]=l.useState(!1),{data:{dataUserApplication:j}}=_e.useApplications();l.useEffect(()=>{j&&i(q_(j))},[j]);const T=l.useMemo(()=>{var N,A;return((A=(N=h==null?void 0:h.data[0])==null?void 0:N.value)==null?void 0:A.id)!==0},[(U=h==null?void 0:h.data[0])==null?void 0:U.value]);if(l.useEffect(()=>{h&&g(ro(h.data))},[T]),!e)return null;const k=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:g}]];return t.jsx(xc,{isDone:!1,children:t.jsxs(va,{children:[t.jsx(M,{size:3,align:"left",children:"Воинский учет"}),t.jsx(hc,{stagesConfig:k}),t.jsx(Ke,{checked:x,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(Lt,{text:f?"Отправлено":"Отправить",action:()=>gc(fs.MIL_REG,[e,n,o,r,d,h],C,b),isLoading:y,completed:f,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:f,isActive:!!x&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&Ee(e)&&Ee(n)&&Ee(r)&&Ee(d)&&Ee(h)&&Ee(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Q_=Object.freeze(Object.defineProperty({__proto__:null,default:mc},Symbol.toStringTag,{value:"Module"})),E="/applications",Z_="/application-for-superior-room",ek="/acad-performance",tk="/dormitory",bc=E+"/clarification-of-passport-data",yc=E+"/arbitrary-request",vc=E+"/social-scollarship",jc=E+"/certificate-of-attendance",wc=E+"/social-agencies",_c=E+"/paper-call",kc=E+"/regular-accommodation",Sc=E+"/full-time-part-time-form",Tc=E+"/accommodation-correspondence-form",Ec=E+"/academic-leave-accommodation",$c=E+"/preferential-accommodation",Cc=E+"/family-room",Pc=E+"/termination-of-employment-contract",Oc=E+"/relocation-inside-hostel",Ac=E+"/relocation-to-another-hostel",Dc=E+"/accommodation-for-graduates",Nn=E+"/payment-recipient",Nc=E+"/restoring-the-magnetic-pass",Ic=E+"/retake-for-diploma",Rc=E+"/military-registration-documents",Lc=E+"/military-registration",zc=E+"/financial-support",Mc=E+"/financial-assistance",Fc=E+"/increased-state-academic-scholarship",Bc=E+"/changing-personal-data",Hc=E+"/student-status",Uc=E+"/state-accreditation",ik=E+"/military-registration-card",Wc=E+"/holidays-after-training",Vc=E+"/provision-academic-leave",Gc=E+"/independently-deducted",qc=E+"/extension-attestation",bt=()=>je({oldVersionUrl:"/sprav"}),Kt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:E,Component:p_,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...ml,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ot,{}),path:Vi,Component:os,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(ys,{}),path:tk,Component:s_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(ou,{}),path:ek,Component:n_,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx($o,{}),path:ul,Component:u_,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(au,{}),path:xl,Component:qn,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(ys,{}),path:Z_,Component:i_,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(fc))}}),lo=e=>{var i,n,s;return{...bl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(Fi,{}),path:bc,Component:o_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(Fi,{}),path:yc,Component:R_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(K,{}),path:vc,Component:R?bt:a_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(K,{}),path:jc,Component:r_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(K,{}),path:wc,Component:l_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(K,{}),path:_c,Component:c_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(K,{}),path:kc,Component:d_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(K,{}),path:Sc,Component:t_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(K,{}),path:Tc,Component:N_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(K,{}),path:Ec,Component:h_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(K,{}),path:$c,Component:g_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(K,{}),path:Cc,Component:I_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(K,{}),path:Pc,Component:x_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(K,{}),path:Oc,Component:R?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):f_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(K,{}),path:Ac,Component:R?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):b_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:K,path:Dc,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?m_:()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(K,{}),path:Nn,Component:y_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(K,{}),path:Nc,Component:v_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(K,{}),path:Rc,Component:R?bt:__,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(ru,{}),path:Lc,Component:R?bt:mc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:E},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(K,{}),path:Ic,Component:w_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(K,{}),path:Fc,Component:R?bt:j_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(K,{}),path:zc,Component:R?bt:k_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(K,{}),path:Mc,Component:R?bt:S_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(K,{}),path:Bc,Component:T_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(K,{}),path:Hc,Component:E_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(K,{}),path:Uc,Component:$_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(K,{}),path:Wc,Component:C_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(K,{}),path:Vc,Component:P_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(K,{}),path:Gc,Component:O_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(K,{}),path:qc,Component:A_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(K,{}),path:ik,Component:R?bt:D_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E}}},co=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),nk=["settings","profile","chat","schedule","payments","project-activity","all-students"],sk=["home","schedule","acad-performance","all","profile"],ok=["home","schedule","alerts","all","profile"],ak=["home","doclist","alerts","all","profile"],rk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(Y.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??Qi,s=Ho.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},po={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},lk=()=>V(dk),Yc=S(),Jc=S(),Xc=S(),Kc=S(),ck=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},Qt=e=>{if(!e)return Hs();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(Hs()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},dk=X(po).on(Yc,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Jc,()=>({...po})).on(Xc,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?Qt(n)[window.location.hash.slice(2,window.location.hash.length)]:Kt()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...Qt(n),...Us()}:{...Kt(),...lo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?Qt(n):Kt(),leftsideBarRoutes:co(rk(i),(i==null?void 0:i.user_status)==="staff"?Qt(n):Kt()),homeRoutes:co(s??JSON.parse(localStorage.getItem(Y.HomeRoutes)??JSON.stringify(nk)),(i==null?void 0:i.user_status)==="staff"?{...Qt(n),...Us()}:{...Kt(),...lo(i)})})).on(Kc,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:ck(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),We={useMenu:lk},et={changeOpen:Yc,clearStore:Jc,defineMenu:Xc,changeNotifications:Kc},Qc=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:hl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ct,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Vi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Vi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:cs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:ae,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Er,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:as,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:E,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:sl,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},pk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},Zc=(e,i)=>i.filter(({type:n})=>e[pk[n]]),uk={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},pn=L(async({settings:e})=>{try{const{data:i}=await ph();return Zc(e,i).map(({id:n,type:s,title:o,text:a})=>Qc(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),hk=L(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&et.changeNotifications({page:i,notifications:1})})}),gk=L(({notifications:e})=>{const{pageId:i}=e[0];i&&et.changeNotifications({page:i,notifications:1})}),un=L(async({id:e,pageId:i})=>{try{return await uh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),hn=L(async()=>{try{await hh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),xk=e=>{e&&et.changeNotifications({page:e,notifications:0})},ed=S(),td=S(),id=S(),nd=S(),sd=S(),od=S(),ad=S(),oe=X(uk).reset(ad);Ve({from:td,to:pn});$({clock:pn.pending,source:oe,fn:(e,i)=>({...e,loading:i}),target:oe});$({clock:pn.failData,source:oe,fn:(e,i)=>({...e,error:i.message}),target:oe});$({clock:pn.doneData,source:oe,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[oe,hk]});$({clock:ed,source:oe,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[oe,gk]});Ve({from:nd,to:un});$({clock:un.doneData,source:oe,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(xk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:oe});$({clock:un.failData,source:oe,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:oe});$({clock:un.pending,source:oe,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:oe});Ve({from:sd,to:hn});$({clock:hn.pending,source:oe,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:oe});$({clock:hn.failData,source:oe,fn:(e,i)=>({...e,clearAllError:i.message}),target:oe});$({clock:hn.doneData,source:oe,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:oe});$({clock:id,source:oe,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:oe});$({clock:od,source:oe,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:oe});const fk=()=>$e(oe),ct={initialize:td,add:ed,clearById:nd,clearVisibleById:id,clearAll:sd,clearAllVisible:od,clearStore:ad},Ge={useLkNotifications:fk},mk=Object.freeze(Object.defineProperty({__proto__:null,events:ct,selectors:Ge},Symbol.toStringTag,{value:"Module"})),uo={messages:null,error:null},bk=()=>({data:V(ho).messages,loading:V(oi.pending),error:V(ho).error}),oi=L(async()=>{try{return(await zu("1")).data}catch(e){throw new Error(e)}}),rd=S(),ho=X(uo).on(oi,e=>({...e,error:null})).on(oi.doneData,(e,i)=>({...e,messages:i})).on(oi.failData,(e,i)=>({...e,error:i.message})).on(rd,()=>({...uo})),yk={useMessages:bk},vk={getMessagesFx:oi},jk={clearStore:rd},wk=Object.freeze(Object.defineProperty({__proto__:null,effects:vk,events:jk,selectors:yk},Symbol.toStringTag,{value:"Module"})),go={type:null,personalNotifications:null,error:null,completed:!1},_k=()=>({data:V(Nt).personalNotifications,loading:V(Dt.pending),error:V(Nt).error,completed:V(Nt).completed}),kk=()=>V(Nt).type,ld=S(),cd=L(e=>e),Dt=L(async()=>{const{type:e}=Nt.getState();if(e==="notifications")try{return(await Yo()).data}catch(i){throw new Error(i)}try{return{docs:(await Jo()).data}}catch(i){throw new Error(i)}}),Ji=L(async e=>{const{type:i}=Nt.getState(),n=i==="notifications"?th:nh;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),dd=S(),Nt=X(go).on(cd,(e,i)=>({...e,type:i})).on(Dt,e=>({...e,error:null})).on(Dt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Dt.failData,(e,i)=>({...e,error:i.message})).on(Ji.doneData,e=>({...e})).on(Ji.failData,(e,i)=>({...e,error:i.message})).on(ld,(e,i)=>({...e,completed:i.completed})).on(dd,()=>({...go}));Ji.doneData.watch(()=>Dt());const Sk={usePersonalNotifications:_k,useType:kk},Tk={setNotificationsType:cd,getPersonalNotificationsFx:Dt,viewPersonalNotificationsFx:Ji},Ek={changeCompleted:ld,clearStore:dd},$k=Object.freeze(Object.defineProperty({__proto__:null,effects:Tk,events:Ek,selectors:Sk},Symbol.toStringTag,{value:"Module"})),Ck=en({api:{get:Zu}}),xo={superiorRoom:null,error:null},Pk=()=>({data:V(fo).superiorRoom,loading:V(ai.pending),error:V(fo).error}),pd=S(),Ok=L(async e=>{});Ve({from:pd,to:Ok});const ai=L(async()=>{try{return(await Uu()).data}catch{throw new Error("Не удалось загрузить раздел")}}),ud=S(),fo=X(xo).on(ai,e=>({...e,error:null})).on(ai.doneData,(e,i)=>({...e,superiorRoom:i})).on(ai.failData,(e,i)=>({...e,error:i.message})).on(ud,()=>({...xo})),Ak={useSuperiorRoom:Pk},Dk={getSuperiorRoomFx:ai},Nk={postSuperiorRoom:pd,clearStore:ud},Ik=Object.freeze(Object.defineProperty({__proto__:null,effects:Dk,events:Nk,selectors:Ak},Symbol.toStringTag,{value:"Module"})),mo={teacherDataVerification:null,error:null,completed:!1},Rk=()=>({data:V(jn).teacherDataVerification,loading:V(ri.pending),error:V(jn).error,completed:V(jn).completed}),hd=S(),gd=S(),Lk=L(async e=>{try{return(await rh(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Ve({from:hd,to:Lk});const ri=L(async()=>{try{return(await ah()).data}catch{throw new Error("Не удалось войти")}}),xd=S(),jn=X(mo).on(ri,e=>({...e,error:null})).on(ri.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(ri.failData,(e,i)=>({...e,error:i.message})).on(gd,(e,i)=>({...e,completed:i.completed})).on(xd,()=>({...mo})),zk={useTeacherDataVerification:Rk},Mk={getTeacherDataVerificationFx:ri},Fk={postTeacherDataVerification:hd,changeCompleted:gd,clearStore:xd},Bk=Object.freeze(Object.defineProperty({__proto__:null,effects:Mk,events:Fk,selectors:zk},Symbol.toStringTag,{value:"Module"})),Hk=[fh,at,Eh,Ph,Hh,wk,$k,Nb,_h,Ck,yj,Ik,Bk,Ih,bh,mk],Uk=()=>{Hk.forEach(e=>{e.events.clearStore()})},it=localStorage.getItem(Y.Token)??"",nt=()=>JSON.parse(localStorage.getItem(Y.SavePassword)??"true"),gn=L(async e=>{try{const{data:i}=await Tu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await gi.post("/old",n)}catch{}return nt()?(localStorage.setItem(Y.Token,i.token),localStorage.setItem(Y.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(Y.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(Y.Token,i.token),sessionStorage.setItem(Y.JWT,(i==null?void 0:i.jwt)??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),jt=L(async e=>{try{const n=(await Eu(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,guid:e.jwt?$t(e.jwt).IndividualGuid:"",fullName:gh({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:nt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),In=L(async e=>{try{return(await $u(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),fd=L(()=>{nt()?(localStorage.removeItem(Y.Token),localStorage.removeItem(Y.JWT),localStorage.removeItem(Y.JWTRefresh)):(sessionStorage.removeItem(Y.Token),sessionStorage.removeItem(Y.JWT),sessionStorage.removeItem(Y.JWTRefresh)),Uk()}),md=e=>{const i=localStorage.getItem(Y.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(Y.SavePassword,n.toString()),n},bd=S(),ms=S(),yd=S(),vd=S(),jd=S();Ve({from:bd,to:gn});$({clock:gn.doneData,target:jt});Ve({from:ms,to:fd});it&&nt()?jt({token:it,jwt:localStorage.getItem(Y.JWT)}):fd();const Wk={currentUser:null,error:null,isAuthenticated:!!(it!=null&&it.length),savePassword:nt(),loginEuz:""};md();const Vk=X(Wk).on(jt,e=>({...e,error:null})).on(jt.doneData,(e,i)=>i).on(jt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(it!=null&&it.length),savePassword:nt()})).on(gn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:nt()})).on(ms,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:nt()})).on(jd,(e,{savePassword:i})=>({...e,savePassword:md(i)})).on(In,e=>({...e,error:null})).on(In.doneData,(e,i)=>({...e,loginEuz:i})).on(jt.failData,(e,i)=>({...e,error:i.message})).on(vd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(yd,e=>({...e,currentUser:null})),be={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=V(Vk);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:V(gn.pending),error:i}}},Tt={login:bd,logout:ms,changeSavePassword:jd,clear:yd,update:vd},Gk={getUserFx:jt,getLoginEuzFx:In},qk=()=>{const e="0.0.1";localStorage.getItem(Y.Version)!==e&&(localStorage.clear(),localStorage.setItem(Y.Version,e),Tt.logout())},wd=S(),_d=L(qu);$({clock:wd,target:_d});const kd=X([]),lT=Rn(kd,e=>e.map(i=>i.divisionName));$({clock:_d.doneData,target:kd});const Yk=()=>{const{allRoutes:e}=We.useMenu();return e?t.jsxs(Fo,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(Bo,{path:i,component:n,exact:!s},i)),t.jsx(Ye,{exact:!0,to:rs})]}):null},Jk=de.memo(Yk),Xk=p.div`
    height: fit-content;
    opacity: ${({isVisible:e})=>e?1:0};
    visibility: ${({isVisible:e})=>e?"visible":"hidden"};
    transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    width: 220px;
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    background: var(--block);
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    z-index: 4;
    padding: 8px;
    color: var(--text);

    @media (max-width: 500px) {
        width: calc(100vw - 20px);
        left: 50%;
        transform: ${({isVisible:e})=>e?"translateY(0) translateX(-50%)":"translateY(20px) translateX(-50%)"};
        bottom: 10px;
        top: auto;
        padding: 16px;
    }
`,Kk=()=>{const{open:e,content:i,position:n}=zg.useContextMenu(),s=l.useRef(null);return Ht(s,()=>Me.close()),t.jsx(ln,{isOpen:e,children:t.jsx(Xk,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Sd=200,Qk=5e3,Zk=()=>{const{visibleNotifications:e}=Ge.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{ct.clearVisibleById(a)},Sd)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??Qk))},[e]),{handleClose:o,closing:i}},eS=p.div`
    position: absolute;
    width: 320px;
    max-width: 500px;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    padding-top: 0;

    @media (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        left: 50%;
        transform: translateX(-50%);
        top: 10px;
        bottom: auto;
    }
`,tS=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Sd/1e3}s forwards;

    @keyframes open {
        0% {
            padding: 0px;
            height: 0px;
            margin-top: 0px;
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            padding: 8px;
            height: 65px;
            margin-top: 8px;
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes close {
        0% {
            height: 65px;
            padding: 8px;
            opacity: 1;
            margin-top: 8px;
            transform: scale(1);
        }
        100% {
            height: 0px;
            opacity: 0;
            padding: 0px;
            margin-top: 0px;
            transform: scale(0.9);
        }
    }
`;p.div`
    height: 4px;
    border-radius: 3px;
    background: ${_.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const iS=()=>{const{visibleNotifications:e}=Ge.useLkNotifications(),{closing:i,handleClose:n}=Zk();return t.jsx(eS,{children:e.map(s=>t.jsx(tS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(qa,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},bo=p.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({color:e})=>`linear-gradient(360deg, ${e} 50%, var(--theme))`};
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({$loading:e})=>!e&&"load_finished 1.2s forwards ease-in-out reverse"};
    animation-delay: 0.8s;
    background-size: 100% 10000%;
    flex-direction: column;

    .loading-circle {
        width: 40px;
        height: 40px;
        bottom: 40px;
        position: absolute;
        opacity: 0.7;
    }

    @keyframes logo {
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        30% {
            transform: translateY(5px);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    @keyframes load_finished {
        0% {
            background-size: 10% 100%;
            opacity: 0;
            visibility: hidden;
        }
        50% {
            background-size: 10% 1000%;
            opacity: 1;
            visibility: visible;
        }
        100% {
            background-size: 100% 10000%;
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        animation: ${({$loading:e})=>!e&&"logo 0.7s forwards ease-in-out"};
        animation-delay: ${({$loading:e})=>e?"0s":"1s"};
        width: 100px;
    }
`,nS=({loading:e})=>{const{data:{user:i},error:n}=be.useUser(),s=i?ze(i==null?void 0:i.fullName):_.blue.main,o=()=>Gk.getUserFx(JSON.parse(localStorage.getItem(Y.Token)??"")),a=()=>Tt.logout();return n?t.jsx(bo,{$loading:!0,color:s,children:t.jsx(pe,{text:n,children:t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(v,{onClick:o,text:"Попробовать снова",icon:t.jsx(Ln,{}),width:"200px"}),t.jsx(v,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(bo,{color:s,$loading:e,children:[t.jsx(sn,{short:!0,width:"100px"}),e&&t.jsx(ht,{})]})},sS=p.div`
    width: 100%;
    height: 5px;
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    overflow: hidden;

    .inner-line {
        height: 5px;
        transition: 0.2s;
        width: ${({filled:e})=>e??"0%"};
        background: var(--reallyBlue);
        animation: ${({playing:e})=>e!==null&&"10s filling linear forwards"};
        animation-play-state: ${({playing:e})=>e?"running":"paused"};

        @keyframes filling {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
    }
`,oS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=xs.useStory();return t.jsx(sS,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():vt.changeCurrentPage({value:o+1})})})},aS=p(nn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,rS=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=xs.useStory();return t.jsxs(aS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(oS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(cu,{}):t.jsx(lu,{}),t.jsx(v,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Qe,{}),onClick:n})]})},lS=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,cS=p(Ze)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e};
    display: flex;
    justify-content: ${({imageAlign:e})=>(e==null?void 0:e.horizontal)==="left"?"flex-start":(e==null?void 0:e.horizontal)==="right"?"flex-end":"center"};
    align-items: center;
    user-select: none;

    @media (max-width: 700px) {
        border-radius: 0px;
    }
`,dS=p.div`
    width: 80%;
    height: fit-content;
    position: absolute;
    left: ${({align:e})=>e.horizontal==="left"?"30px":e.horizontal==="center"?"50%":"auto"};
    right: ${({align:e})=>e.horizontal==="right"?"30px":e.horizontal==="center"?"50%":"auto"};
    bottom: ${({align:e})=>e.vertical==="bottom"?"30px":e.vertical==="center"?"50%":"auto"};
    top: ${({align:e})=>e.vertical==="top"?"30px":e.vertical==="center"?"50%":"auto"};
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: ${({color:e})=>e??"var(--text)"};
    transform: ${({align:e})=>lS(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,pS=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:g="left"})=>{const x=mi();return t.jsxs(cS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Vn,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(dS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(M,{size:2,align:g,children:o}),t.jsx(se,{fontSize:"1.1em",align:g,children:a}),!!(d!=null&&d.text)&&t.jsx(v,{onClick:()=>{x.push(d.to),vt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},uS=p.div`
    padding: 15px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 750px;
    transition: 0.2s;
    transform: scale(${({isOpen:e})=>e?1:.95});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    position: relative;
    display: flex;

    @media (max-width: 700px) {
        padding: 0;
    }
`,yo=p.div`
    position: absolute;
    top: 50px;
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"auto"};
    height: calc(100% - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    /* background: red; */
    z-index: 3;
    opacity: 0;

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        background: var(--almostTransparentOpposite);
        border-radius: var(--brLight);
    }

    @media (min-width: 1001px) {
        &:hover {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }

    @media (max-width: 1000px) {
        left: ${({left:e})=>`calc(${e} - 15px)`??"auto"};
        right: ${({right:e})=>`calc(${e} - 15px)`??"auto"};
        &:active {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }
`,hS=()=>{const{pages:e,isOpen:i,currentPage:n}=xs.useStory(),s=l.useRef(null);Ht(s,()=>vt.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(ln,{isOpen:i,children:t.jsx(uS,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(rS,{pages:e.length,onClose:()=>vt.close(),playing:o}),t.jsx(yo,{left:"15px",onClick:()=>{n!==0&&vt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(xi,{})}),t.jsx(pS,{setPlaying:a,currentPage:n,...r}),t.jsx(yo,{right:"15px",onClick:()=>{n!==e.length-1?vt.changeCurrentPage({value:n+1}):vt.close(),a(!0)},children:t.jsx(dt,{})})]})})})},gS=()=>{const{data:{user:e}}=be.useUser(),{notifications:i,loading:n,loaded:s}=Ge.useLkNotifications(),{settings:o}=Ft.useSettings(),[a]=bi([ha.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Sn.getElectronicInteraction(),a&&!a.status&&ct.add(Qc("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Sn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(Zc(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,ct.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{et.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},xS=()=>{const{data:{user:e}}=be.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(mu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},fS=()=>{const e=Ba(),{open:i}=ie(),n=xS();return gS(),ut(),l.useEffect(()=>{n&&n&&i(t.jsx(sc,{}),"Что нового")},[n]),{currentPage:e}},mS=p.div`
    display: flex;
    background: var(--theme);
    height: 100vh;

    ${ee.isTablet} {
        height: 100dvh;
    }
`,bS=p.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,yS=p.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: calc(100% - var(--mobile-bottom-menu-height));
    }
`,vS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,jS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(pe,{text:e.message,image:t.jsx(du,{}),children:t.jsxs(P,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(ue,{}),t.jsx(Ua,{title:t.jsx(J,{type:"failure",fontSize:"0.95rem",title:t.jsxs(P,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(pu,{})]})}),children:t.jsx(J,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(vS,{children:e.stack})})})]})})});class Td extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(jS,{error:this.state.error}):this.props.children}}const wS=()=>{const{data:{user:e}}=be.useUser(),{allRoutes:i}=We.useMenu(),{currentPage:n}=fS(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs(mS,{children:[t.jsx(nS,{loading:!e||!i}),t.jsx(hS,{}),t.jsx(x1,{}),t.jsxs(bS,{children:[t.jsx(t1,{headerVisible:s,currentPage:n}),t.jsx(yS,{ref:a,onScroll:r,withHeader:!(n!=null&&n.withoutHeader),children:t.jsx(Td,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(Jk,{})})})}),t.jsx(ew,{})]}),t.jsx(w1,{}),t.jsx(m1,{}),t.jsx(k1,{}),t.jsx(Kk,{}),t.jsx(rw,{}),t.jsx(iS,{})]})},_S=()=>{const{data:{isAuthenticated:e,user:i}}=be.useUser(),{data:n}=at.selectors.useData(),{settings:s}=Ft.useSettings();return l.useEffect(()=>{e&&(Xe.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(at.effects.getFx(),Xe.getWorkerPosts(),wd()))},[e,i]),l.useEffect(()=>{i&&(s?et.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):qh.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(wS,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Fo,{children:[Xy.map(({path:o,Component:a},r)=>t.jsx(Bo,{path:o,component:a,exact:!0},r)),t.jsx(Ye,{exact:!0,to:nl})]})})},kS=p.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`;qk();const SS=()=>(ut(),t.jsx(qf,{children:t.jsx(uu,{basename:"/",children:t.jsx(kS,{children:t.jsx(Td,{children:t.jsx(_S,{})})})})}));hu.render(t.jsxs(de.StrictMode,{children:[t.jsx(ej,{}),t.jsx(SS,{})]}),document.getElementById("root"));export{Vk as $,Kw as A,v as B,Ke as C,ue as D,F as E,va as F,B as G,Oh as H,Uw as I,bw as J,yt as K,ht as L,J as M,Ee as N,pe as O,Sy as P,Qv as Q,en as R,Lt as S,M as T,Ze as U,se as V,gt as W,Hi as X,Se as Y,wl as Z,be as _,W as a,Ht as a$,ji as a0,sh as a1,oh as a2,Oa as a3,jv as a4,_v as a5,We as a6,vv as a7,xl as a8,ps as a9,BS as aA,ts as aB,MS as aC,Qn as aD,FS as aE,es as aF,cb as aG,kd as aH,US as aI,av as aJ,_w as aK,Fw as aL,yc as aM,Vi as aN,Jy as aO,GS as aP,cv as aQ,lv as aR,lh as aS,Ae as aT,me as aU,WS as aV,cs as aW,Ci as aX,q as aY,Me as aZ,on as a_,Yy as aa,aT as ab,LS as ac,Tk as ad,ct as ae,Sk as af,IS as ag,_e as ah,Xe as ai,oT as aj,Pa as ak,sT as al,us as am,Oe as an,he as ao,$t as ap,pt as aq,xc as ar,lT as as,zS as at,vh as au,Ts as av,ae as aw,gc as ax,i0 as ay,HS as az,Mk as b,z1 as b$,ha as b0,Sn as b1,bh as b2,Ue as b3,xt as b4,tt as b5,iy as b6,ty as b7,Zj as b8,iT as b9,Lv as bA,Tl as bB,Fy as bC,Je as bD,Tt as bE,dw as bF,Ky as bG,qy as bH,Gy as bI,Vy as bJ,Ml as bK,mj as bL,rn as bM,$i as bN,Un as bO,tT as bP,pj as bQ,fl as bR,uj as bS,hj as bT,Ul as bU,At as bV,jj as bW,ec as bX,vj as bY,nc as bZ,rj as b_,eT as ba,Nj as bb,Nl as bc,gs as bd,nT as be,Ft as bf,Ei as bg,hl as bh,Bf as bi,ze as bj,hs as bk,Cn as bl,bj as bm,Sl as bn,Gv as bo,D as bp,vn as bq,qS as br,C1 as bs,KS as bt,QS as bu,ZS as bv,XS as bw,JS as bx,YS as by,fe as bz,Ih as c,Hj as c0,Rj as c1,ut as c2,Rl as c3,Hl as c4,Tr as c5,ui as c6,_j as c7,_l as c8,Ws as c9,ES as cA,qi as cB,Z1 as cC,Vn as cD,fh as cE,Dg as cF,RS as cG,Qw as cH,Di as cI,Yw as cJ,Jw as cK,qw as cL,hc as cM,Ck as cN,Ho as ca,Qi as cb,Zy as cc,Qy as cd,DS as ce,AS as cf,vl as cg,yl as ch,vi as ci,O1 as cj,Ia as ck,PS as cl,rm as cm,ya as cn,OS as co,VS as cp,nn as cq,Bv as cr,Gk as cs,Ai as ct,NS as cu,Ak as cv,Dk as cw,rT as cx,xh as cy,$S as cz,fs as d,Fk as e,Os as f,rt as g,$a as h,Xa as i,Fe as j,_g as k,re as l,ch as m,Mv as n,ee as o,P as p,_m as q,dn as r,zk as s,wi as t,ie as u,Gn as v,yg as w,_ as x,_u as y,CS as z};
