import{F as Xe,a as ji,b as Ct,c as un,H as Xn,d as Lt,y as L,u as k,p as V,e as q,x as P,S as ze,m as hn,r as l,s as u,j as t,f as Qe,I as Lp,g as zp,h as Mp,i as Fp,k as bs,A as gn,l as A,n as Bp,o as ge,q as Yt,t as Hn,v as Hp,w as Up,R as le,z as Ot,B as Pi,C as Ze,L as ee,D as ki,E as Wp,G as Vp,J as fn,K as Zt,M as Gp,N as qp,O as mt,P as Ve,Q as aa,T as et,U as ra,V as vs,W as ht,X as la,Y as ca,Z as tt,_ as da,$ as pa,a0 as Yp,a1 as Kp,a2 as Jp,a3 as Xp,a4 as ua,a5 as bt,a6 as xn,a7 as Qp,a8 as Ke,a9 as Kt,aa as Zp,ab as eu,ac as tu,ad as iu,ae as nu,af as su,ag as Q,ah as ou,ai as ha,aj as ga,ak as au,al as ru,am as Ki,an as ys,ao as fa,ap as lu,aq as cu,ar as du,as as xa,at as pu,au as mn,av as uu,aw as ma,ax as ba,ay as va,az as ya,aA as hu,aB as gu,aC as _a,aD as wa,aE as en,aF as fu,aG as xu,aH as gi,aI as ja,aJ as ka,aK as ie,aL as Qs,aM as Sa,aN as mu,aO as bu,aP as vu,aQ as yu,aR as Ji,aS as _u,aT as wu,aU as ju,aV as ku,aW as Su,aX as Tu,aY as Eu,aZ as $u,a_ as Pu,a$ as Cu,b0 as Ou,b1 as Au,b2 as Du,b3 as Nu,b4 as Iu,b5 as Ru,b6 as Lu,b7 as zu,b8 as Mu,b9 as Fu,ba as Bu,bb as Hu,bc as Ta,bd as Uu,be as Wu,bf as Vu,bg as Gu,bh as qu,bi as Yu,bj as Ku,bk as _s,bl as Ju,bm as Xu,bn as Qu,bo as Zu,bp as eh,bq as th,br as ih,bs as nh,bt as sh,bu as Ea,bv as oh,bw as Qn,bx as ah,by as rh,bz as lh,bA as Zs,bB as ch,bC as dh,bD as ph,bE as uh,bF as $a,bG as eo,bH as hh,bI as gh,bJ as fh,bK as xh,bL as mh,bM as bh,bN as Pa,bO as Ca,bP as vh,bQ as yh,bR as _h,bS as wh}from"./vendor-cbee1f3c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const jh="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",kh=3,bn=["home","settings","all"],Oa=["home","settings","download-agreements","all"],Aa="https://lk.eseur.ru/signup",Sh="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Wt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},JE={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},XE={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",Th="2023-10-03T10:43:43",At={info:{icon:Xe,color:"blue",title:"Информация"},alert:{icon:ji,color:"orange",title:"Внимание!"},failure:{icon:Ct,color:"red",title:"Ошибка"},success:{icon:un,color:"green",title:"Успешно"},tip:{icon:Xn,color:"grey",title:"Подсказка"},hint:{icon:Xn,color:"white",title:"Подсказка"},hrFailure:{icon:Ct,color:"red",title:"Ошибка"}},Eh={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},$h=["image/jpeg","image/jpg","image/png","application/pdf"],Ph=10,Da="(max-width: 766px)",Ch="(min-width: 767px)",Na="(max-width: 1000px)",Ia="(max-width: 1380px)",Ra="(min-width: 1381px)",X={isMobile:`@media ${Da}`,isNotMobile:`@media ${Ch}`,isTablet:`@media ${Na}`,isSmallTesktop:`@media ${Ia}`,isMiddleTesktop:`@media ${Ra}`},Oh=[{query:Da,title:"isMobile",value:"mobile"},{query:Na,title:"isTablet",value:"tablet"},{query:Ia,title:"isSmallDesktop",value:"smallDesktop"},{query:Ra,title:"isMiddleDesktop",value:"middleDesktop"}],ws={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},O=!window.location.port||window.location.port==="80"||window.location.port==="4001"||window.location.port==="4002";console.log("Running on production",O);var M=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(M||{});const it=()=>localStorage.getItem(M.JWT)||sessionStorage.getItem(M.JWT),ei=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Ah=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Zn=e=>async i=>{var s,o,a,r,c,d,p;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((p=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:p.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Rt.logout();else{n._retry=!0;const h=localStorage.getItem(M.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await zh(h??"");return Ah()?(localStorage.setItem(M.JWT,f),localStorage.setItem(M.JWTRefresh,g)):(sessionStorage.setItem(M.JWT,f),sessionStorage.setItem(M.JWTRefresh,g)),e(n)}catch{Rt.logout()}}return Promise.reject(i)},La=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${it()}`,e),Dh=`${R}/lk_api.php`,Nh="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=Lt.create({baseURL:Dh,withCredentials:!0}),fe=Lt.create({baseURL:Nh});fe.interceptors.request.use(La);!O&&fe.interceptors.response.use(e=>e,Zn(fe));function js(e){return e.isAxiosError}function B(){return localStorage.getItem(M.Token)??sessionStorage.getItem(M.Token)??""}const Ih=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Rh=e=>F.get(`?getUser&token=${e}`),Lh=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),QE=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",B()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ZE=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${B()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},e$=async e=>{const i=new FormData;return i.set("email",e),i.set("token",B()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},t$=async e=>{const i=new FormData;return Object.entries(e).forEach(([n,s])=>{i.set(n,s)}),i.set("token",B()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},i$=async e=>{var n,s;const i=new FormData;return i.set("token",B()),i.set("phone",e.phone_staff||""),i.set("allow_mobphone_in",((n=e.allow_mobphone_in)==null?void 0:n.toString())??"false"),i.set("allow_mobphone_out",((s=e.allow_mobphone_out)==null?void 0:s.toString())??"false"),F.post("?changeStaffPhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},n$=async e=>{const i=new FormData;return i.set("token",B()),i.set("guid",e.guid_staff),i.set("room",e.room),i.set("address",e.address),F.post("?changeStaffAddress=1",i,{headers:{"Content-Type":"multipart/form-data"}})},zh=async e=>{const{data:i}=await Lt.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Mh=e=>F.get(`?getSchedule&group=${e}&token=${B()}`),Fh=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${B()}`),Bh=()=>F.get(`?getSchedule&session=1&token=${B()}`),Hh=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${B()}`),Uh=()=>F.get(`?getPayments&token=${B()}`),Wh=e=>F.get(`?signAgreement=${e}&token=${B()}`),Vh=e=>F.get(`?signContract=${e}&token=${B()}`),Gh=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${B()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},qh=e=>F.get(`?getMessages&token=${B()}&id=${e}`),Yh=async()=>(await F.get(`?getPEPStatus&token=${B()}`)).data,Kh=async()=>(await F.get(`?setPEPAccept&token=${B()}`)).data,Jh=()=>F.get(`?getContactData&token=${B()}`),Xh=e=>{const i=new FormData;i.set("token",B()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Qh=()=>F.get(`?getRequestHighComfort&token=${B()}`),s$=e=>{const i=new FormData;i.set("token",B()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Zh=()=>F.get(`?getAppRequests&token=${B()}`),za=()=>F.get(`?getAppData&token=${B()}`),eg=async()=>await fe.get(`/Dismissal.GetAllHistory?employeeGuid=${ei(it()??"").IndividualGuid}`),tg=async()=>{const{data:e}=await fe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},ig=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",B()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},ng=()=>fe.get(`?getAppRequests&token=${B()}`),sg=()=>fe.get(`?getAppData&token=${B()}`),og=e=>fe.post("Dismissal.Post",e),ag=async()=>(await F.get(`?getAdminLinks&token=${B()}`)).data,rg=async e=>(await F.get(`?PDinfo&token=${B()}`)).data,lg=()=>F.get(`?getPhoneBookDivisions&token=${B()}`),Ma=()=>F.get(`?getNotification&token=${B()}`),cg=e=>F.get(`?viewNotification=${e}&token=${B()}`),dg=Object.freeze(Object.defineProperty({__proto__:null,get:Ma,view:cg},Symbol.toStringTag,{value:"Module"})),Fa=()=>F.get(`?getDocList&token=${B()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),pg=e=>F.get(`?viewDoc=${e}&token=${B()}`),ug=Object.freeze(Object.defineProperty({__proto__:null,get:Fa,view:pg},Symbol.toStringTag,{value:"Module"})),Ba=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${B()}`),ks=e=>F.get(`?getDivs=${e}&page=1&token=${B()}`),hg=()=>F.get(`?getCheckData&token=${B()}`),gg=e=>{const i=new FormData;i.set("token",B()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},fg=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${B()}`),xg=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${B()}`),mg=async()=>(await F.get(`?getAlerts&token=${B()}`)).data,bg=()=>F.get(`?getNotifications&token=${B()}`),vg=e=>F.get(`?clearNotificationById=${e}&token=${B()}`),yg=()=>F.get(`?clearAllNotifications&token=${B()}`);function _g({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const to={data:null,preparedData:null,loading:!1,error:null},vn=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>jh})=>{const o=e??to,a=()=>({data:q(p).data,preparedData:q(p).preparedData,loading:q(r.pending),error:q(p).error}),r=L(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=L(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),p=V(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...to}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function wg(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const jg=vn({api:{get:Gh},prepareData:wg}),Je=vn({api:{get:ag}}),kg=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Sg=vn({api:{get:mg},prepareData:kg}),io={message:"",type:"success",isOpen:!1,time:2e3},Ha=k(),Ua=k(),Wa=k();V(io).on(Ha,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ua,(e,{isOpen:i})=>({...e,isOpen:i})).on(Wa,()=>({...io}));const vt={evokePopUpMessage:Ha,openPopUpMessage:Ua,clearStore:Wa},no={listApplication:null,error:null,dataUserApplication:null},fi=L(async()=>{const e=await ng();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Xi=L(async()=>{const e=await sg();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),yn=L(async e=>await og(e));P({clock:yn.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:vt.evokePopUpMessage});P({clock:yn.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:vt.evokePopUpMessage});const Tg=k();ze({from:yn.doneData,to:fi});V(no).on(Xi,e=>({...e,error:null})).on(Xi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Xi.failData,(e,i)=>({...e,error:i.message})).on(fi,e=>({...e,error:null})).on(fi.doneData,(e,i)=>({...e,listApplication:i})).on(fi.failData,(e,i)=>({...e,error:i.message})).on(Tg,()=>({...no}));const Eg={getApplicationsFx:fi,getUserDataApplicationsFx:Xi,postApplicationFx:yn},so={message:"",type:"success",isOpen:!1,time:2e3},$g=()=>q(Pg),Va=k(),Ga=k(),qa=k(),Pg=V(so).on(Va,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ga,(e,{isOpen:i})=>({...e,isOpen:i})).on(qa,()=>({...so})),Ya={usePopUpMessage:$g},U={evokePopUpMessage:Va,openPopUpMessage:Ga,clearStore:qa},Cg=Object.freeze(Object.defineProperty({__proto__:null,events:U,selectors:Ya},Symbol.toStringTag,{value:"Module"})),oo={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},tn=L(async()=>{const e=await eg();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),xi=L(async()=>{const e=await Zh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),mi=L(async()=>{const e=await za();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Ss=L(async e=>{const i=await ig(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Og=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Ag);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(mi.pending),workerLoading:q(hn(tn.pending,Eg.postApplicationFx.pending,(o,a)=>o||a)),error:s}},Ka=k();ze({from:Ss.doneData,to:xi});P({clock:Ss.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:U.evokePopUpMessage});const Ag=V(oo).on(mi,e=>({...e,error:null})).on(mi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(mi.failData,(e,i)=>({...e,error:i.message})).on(xi,e=>({...e,error:null})).on(xi.doneData,(e,i)=>({...e,listApplication:i})).on(xi.failData,(e,i)=>({...e,error:i.message})).on(tn,e=>({...e,error:null})).on(tn.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Ka,()=>({...oo})),ye={useApplications:Og},Le={getApplicationsFx:xi,getUserDataApplicationsFx:mi,postApplicationFx:Ss,getWorkerPosts:tn},Dg={clearStore:Ka},Ng=Object.freeze(Object.defineProperty({__proto__:null,effects:Le,events:Dg,selectors:ye},Symbol.toStringTag,{value:"Module"})),ao={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Ig=()=>q(Rg),Ja=k(),Xa=k(),Qa=k(),Rg=V(ao).on(Ja,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Xa,e=>({...e,isOpen:!1})).on(Qa,()=>({...ao})),Za={useConfirm:Ig},ct={evokeConfirm:Ja,closeConfirm:Xa,clearStore:Qa},Lg=Object.freeze(Object.defineProperty({__proto__:null,events:ct,selectors:Za},Symbol.toStringTag,{value:"Module"})),zg=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=L(async p=>{const h=await i.post(p);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});P({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:U.evokePopUpMessage}),P({clock:a.failData,fn:p=>({message:`${p.message}`,type:"failure"}),target:U.evokePopUpMessage}),P({clock:a.doneData,target:Le.getApplicationsFx});const r=L(async p=>{if(i.get)try{return{...(await i.get(p)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=V(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(o,(p,h)=>({...p,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Mg,events:Fg,selectors:Bg}=zg({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Jh,post:Xh}}),Hg=Object.freeze(Object.defineProperty({__proto__:null,effects:Mg,events:Fg,selectors:Bg},Symbol.toStringTag,{value:"Module"})),er=k(),tr=k(),ir=k(),nr=k(),Ci=L(async()=>{const i=(await Kh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});P({clock:Ci.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Ci.doneData,fn:()=>!0,target:ir});P({clock:Ci.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:U.evokePopUpMessage});const Si=L(async()=>{try{return(await Yh())[0]}catch(e){throw new Error(e)}});P({clock:tr,target:Ci});P({clock:er,target:Si});const sr=k(),Ug=Si.pending,Wg=Ci.pending,Vg=V(!1).on(nr,(e,i)=>i),Gg=V(!1).on(ir,(e,i)=>i),qg=V(null).on(Si,()=>null).on(Si.failData,(e,i)=>i.message),Yg=V(null).on(Si.doneData,(e,i)=>i).on(sr,()=>null),or={$error:qg,$electronicInteractionStore:Yg,$completed:Vg,$done:Gg,$loading:Ug,$workerLoading:Wg},es={getElectronicInteraction:er,postElectronicInteraction:tr,changeCompleted:nr,clearStore:sr},Kg=Object.freeze(Object.defineProperty({__proto__:null,events:es,stores:or},Symbol.toStringTag,{value:"Module"})),Jg="Sep 07 2023 12:00:00 GMT+0300",ar="Sep 08 2023 12:00:00 GMT+0300",o$=e=>{const i=new Date;return i<new Date(Jg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(ar)?"Подача заявок закрыта":""},oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},ro=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},lt=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:ro(-30*11),maxValueInput:ro(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Ui={kvdCert:lt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:lt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:lt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:lt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},he=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var c,d,p;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const h=new Date(((c=a.value)==null?void 0:c.toString())??0);if(a.minValueInput){const f=new Date(a.minValueInput);if(h<f)return!0}if(a.maxValueInput){const f=new Date(a.maxValueInput);if(h>f)return!0}}const r=(p=(d=a.value)==null?void 0:d.toString())==null?void 0:p.length;return a.minValueLength&&r&&r<a.minValueLength?!0:i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(h=>!!h.files.length)})&&n&&s},Xg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Qg=()=>Object.keys(Be).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),rr=(e="")=>({[e]:{...Qg(),[Be["settings-appearance"]]:{id:Be["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Be["settings-home-page"]]:{id:Be["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Be["settings-customize-menu"]]:{id:Be["settings-customize-menu"],property:{pages:bn}},[Be["settings-notifications"]]:{id:Be["settings-notifications"],property:Xg}}});var Be=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Be||{});const ts={settings:rr(),error:null,completed:!1};let De;const Zg=()=>({settings:q(Qi).settings[De],error:q(Qi).error,completed:q(Qi).completed}),ef=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},lr=L(e=>{De=e;const i=JSON.parse(localStorage.getItem(M.NewSettings)??"{}")[De];return ef(i,rr(e)[e])}),cr=k(),dr=k(),pr=k(),Qi=V(ts).on(dr,(e,i)=>({...e,completed:i.completed})).on(lr.doneData,(e,i)=>({...e,settings:{[De]:i}})).on(cr,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[De]:{...e.settings[De],[i]:{...e.settings[De][i],property:{...e.settings[De][i].property,[n]:s}}}}})).on(pr,()=>({...ts}));Qi.watch(e=>{if(e!==ts&&De){const i=JSON.parse(localStorage.getItem(M.NewSettings)??JSON.stringify({}));i[De]=e.settings[De],localStorage.setItem(M.NewSettings,JSON.stringify(i))}});const ti={useSettings:Zg},Oi={updateSetting:cr,changeCompleted:dr,clearStore:pr},tf={getLocalSettingsFx:lr},yt=()=>{var a,r;const{settings:e}=ti.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,p=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?p?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),Oi.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},nf=u.button`
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

    ${X.isTablet} {
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:p,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:x,direction:m="horizontal",isActive:v=!0,height:b,notActiveClickMessage:S,flipped:D,...j}=e,T=N=>{v?s==null||s(N):S&&U.evokePopUpMessage({type:"failure",message:S,time:1e4})};return t.jsxs(nf,{text:!!n,onClick:T,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:p,direction:m,isActive:v,fixedInMobile:x,height:b,flipped:D,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const is=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},lo=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},sf=u.div`
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
`,of=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],_n=u.div.withConfig({shouldForwardProp:e=>!of.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?lo(n):is(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?is(i):lo(n)};
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
`,af=u.div`
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
`;function J({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(af,{pulse:s,size:i,shape:e,margin:n})}const rf=u(_n)`
    height: 100%;
`,lf=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(rf,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(J,{...o,key:a}))}),kt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function cf({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:kt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:kt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:kt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:kt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:kt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:kt(n),children:i});default:return t.jsx("h1",{className:"title",style:kt(n),children:i})}}const df=u.div`
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
`,pf=u.span`
    color: var(--red);
    margin-right: 5px;
`,uf=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:p=!0}=e;return p?t.jsxs(df,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(cf,{size:o,width:r,children:[a&&t.jsx(pf,{children:"*"}),t.jsx(uf,{width:r,children:s})]})]}):null}const hf=(e,i,n)=>n?"#fff":e?w[At[i].color].dark3:w[At[i].color].light3,gf=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>hf(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[At[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[At[e].color][i?"main":"light2"]};
    }
`,ff=()=>t.jsx(lf,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function te({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f=!1,align:g="left",visible:x=!0,loading:m=!1}){if(!x)return null;const{theme:v}=yt();return t.jsxs(gf,{isLightTheme:v==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f,children:[t.jsx(W,{size:4,align:g,icon:n===null?null:n??At[e].icon({}),children:a??At[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Qe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),m&&t.jsx(ff,{})]})}u.div`
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
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?w.green.main:w.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?w.blue.transparent3:e?w.green.transparent3:w.grey.transparent3};
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
`;const xf=u.div`
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
        background: ${({reached:e})=>e?w.green.main:"none"};
    }
`,mf=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(xf,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ve=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,bf="/assets/sad-emoji-0c60bf90.gif",ne=u.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
    word-wrap: break-word;
    overflow-wrap: normal;
`,vf=u.div`
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
`;function ue({text:e,image:i,size:n,children:s}){return t.jsxs(vf,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||bf,alt:"груфтим("}):i}),t.jsx(ne,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const yf="/assets/loading-c8041cd3.gif",_f=u.img`
    width: 40px;
`;function Ge(e){return t.jsx(_f,{...e,src:yf,alt:"loading",className:"loading-circle"})}const wf="/assets/logo-4d9aa449.png",jf="/assets/mospolytech-logo-white-b1e4f630.png",kf=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function wn({width:e,className:i,short:n=!1}){return t.jsx(kf,{width:e,className:i??"logo",children:t.jsx("img",{src:n?jf:wf,alt:"Logo"})})}const Sf=u.img``;function Ts({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(J,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Sf,{src:i,alt:o,height:n,width:s})}const Tf=u.div`
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
`;function ur({size:e,color:i}){return t.jsx(Tf,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Ef=u.div`
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
`;function $f(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Ef,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Pf=u.button`
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
`,gt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:p,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:x=!1,repeatable:m=!0,alerts:v=!0})=>{l.useEffect(()=>{x&&v&&(U.evokePopUpMessage({message:c,type:"success"}),m&&setTimeout(()=>{o(!1)},2e3))},[x,o]);const b=()=>{if(f&&!h&&!g)return i();v&&U.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Pf,{isLoading:g,background:a,className:"submit-button",completed:x,isActive:f&&!h&&!x,onClick:b,isDone:h,width:n,height:s,repeatable:m,tabIndex:f&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:x?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Lp,{})," ",r]}):g?t.jsx(Ge,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},nn={small:"32px",middle:"36px",big:"44px"},He=e=>({size:i})=>e[i],Cf=(e,i)=>(i==null?void 0:i.length)===0?null:e.find(n=>n.title===i)??null,me=[{id:"0",title:"ул. Большая Семёновская, 38"},{id:"1",title:"ул. Прянишникова, 2А"},{id:"2",title:"ул. Автозаводская, 16"},{id:"3",title:"ул. Павла Корчагина, 22"},{id:"4",title:"ул. Михалковская, 7"},{id:"5",title:"ул. Садовая-Спасская, 6"},{id:"6",title:"ул. Малая Семеновская, 12"},{id:"7",title:"ул. Лефортовский вал, 26"},{id:"8",title:"ул. 1-я Дубровская, 16а"},{id:"9",title:"ул. 7-я Парковая, 9/26"},{id:"10",title:"ул. 800-летия Москвы, 28 корп. 1"},{id:"11",title:"ул. Михалковская, 7, корп. 3"},{id:"12",title:"ул. Бориса Галушкина, 9"},{id:"13",title:"ул. Павла Корчагина, 20А, корп. 3"},{id:"14",title:"Рижский проезд, 15, корп. 1"},{id:"15",title:"Рижский проезд, 15, корп. 2"},{id:"16",title:"1-й Балтийский переулок, 6/21, корп. 3"}],a$=(e,i)=>({title:"Актуализируйте контактные данные",data:[{fieldName:"guid_staff",title:"Подразделение/должность",value:i.guid_staff,width:"100",required:!0,type:"text",visible:!1},{fieldName:"",title:`${i.subdivision} (${i.post})`,value:`${i.subdivision} (${i.post})`,width:"100",required:!0,type:"text-header",visible:!0},{fieldName:"site",title:"Адрес рабочего места",type:"select",value:Cf(me,e.site),items:me,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер кабинета",type:"cabinet",mask:!0,value:e.aud_number,editable:!0,required:!0},{fieldName:"email_staff",title:"Корпоративная электронная почта",type:"email",value:e.email_staff,required:!0},{title:"Показывать рабочий email внутри Личного кабинета",fieldName:"show_email_inner",type:"checkbox",value:e.show_email_inner??!0},{title:"Показывать рабочий email на сайте",fieldName:"show_email_outer",type:"checkbox",value:e.show_email_outer??!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Показывать служебный мобильный телефон внутри Личного кабинета",fieldName:"show_tel_mob_staff_inner",type:"checkbox",value:e.show_tel_mob_staff_inner??!0},{title:"Показывать служебный мобильный телефон на сайте",fieldName:"show_tel_mob_staff_outer",type:"checkbox",value:e.show_tel_mob_staff_outer??!0},{title:"Внутренний телефон",type:"innerPhone",value:e==null?void 0:e.tel_staff,mask:!0,fieldName:"tel_staff",minValueLength:4},{title:"Показывать внутренний телефон внутри Личного кабинета",fieldName:"show_tel_staff_inner",type:"checkbox",value:e.show_tel_staff_inner??!0},{title:"Показывать внутренний телефон на сайте",fieldName:"show_tel_staff_outer",type:"checkbox",value:e.show_tel_staff_outer??!0}]}),Of={БС:"БС",ПР:"ПР",АВ:"АВ",ПК:"ПК",МИХ:"МИХ",СС:"СС",РП:"РП",БАЛТ:"БАЛТ",Д:"Д",ПАРК:"ПАРК",ВЛМ:"ВЛМ",БГ:"БГ",МС:"МС","":""},Af=e=>{const i=()=>e===me[0].title,n=()=>e===me[1].title,s=()=>e===me[2].title,o=()=>e===me[3].title||e===me[13].title,a=()=>e===me[4].title,r=()=>e===me[5].title,c=()=>e===me[16].title,d=()=>e===me[14].title||e===me[15].title,p=()=>e===me[8].title,h=()=>e===me[9].title,f=()=>e===me[10].title,g=()=>e===me[12].title,x=()=>e===me[6].title;return i()?"БС":n()?"ПР":s()?"АВ":o()?"ПК":a()?"МИХ":r()?"СС":d()?"РП":c()?"БАЛТ":p()?"Д":h()?"ПАРК":f()?"ВЛМ":g()?"БГ":x()?"МС":""},r$=e=>{const i=Af(e);return i?i+" ":""},Df=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Nf=e=>{const i=e.target.selectionStart;let n=e.target.value.replace(/\D/g,""),s="";return n.length?e.target.value.length!==i?/\D/g.test(e.nativeEvent.data??"")?n:e.target.value:(n[0]==="9"&&(n="7"+n),s="+7"+" ",n.length&&(s+="("+n.substring(1,4)),n.length>=5&&(s+=") "+n.substring(4,7)),n.length>=8&&(s+="-"+n.substring(7,9)),n.length>=10&&(s+="-"+n.substring(9,11)),s):""},co=(e,i,n,s,o,a=4)=>{var r,c;return i+=n.substring(0,a),!s||!((c=(r=s[0])==null?void 0:r.toLowerCase())!=null&&c.match(/[а-я]/))?i:(i+=s[0].toLowerCase(),i.substring(0,o.length+a+2))},If=(e,i)=>{var a,r,c,d;const n=e.replace(/\D/g,""),s=e.match(new RegExp("(?<=\\d)[а-яА-Я]"));let o=i+" ";switch(i){case"БС":const p=e.substring(3).match(/^[а-яА-Я]{1,2}/);return!p||!((r=(a=p[0])==null?void 0:a.toUpperCase())!=null&&r.match(/^[А-Я]{1,2}$/))?o:(o+=p[0].toUpperCase(),(p[0].length===1?e[3]&&!e[5]&&e[4]===" ":e[4]&&!e[6]&&e[5]===" ")?o+" ":(n.length>0&&(o+=" "),o+=n.substring(0,3),!s||!((d=(c=s[0])==null?void 0:c.toLowerCase())!=null&&d.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,10))));case"ПК":return co(e,o,n,s,i,3);case"АВ":case"ПР":case"СС":case"МИХ":return co(e,o,n,s,i);case"":return e;default:return o+e.substring(i.length+1)}},Rf=e=>e.replace(/\D/g,"").substring(0,4),Un={groupMask:Df,phoneMask:Nf,cabinetMask:If,innerPhoneMask:Rf},Lf=(e,i,n,s,o,a,r,c)=>{const[d,p]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const g=l.useCallback(b=>b.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:b=>{b.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(b=>b==="password"?"text":"password"),handleOnChange:b=>{if(c)if(r)i(r(b.target.value,e));else if(n==="tel")i(Un.phoneMask(b));else if(n==="email")i(g(b.target.value));else if(n==="cabinet"){const D=Object.keys(Of).find(j=>b.target.value.startsWith(j));i(Un.cabinetMask(b.target.value,D||""))}else i(n==="innerPhone"?Un.innerPhoneMask(b.target.value):b.target.value);else i(b.target.value);if(n==="date"&&(o||a)){const S=new Date(b.target.value);let D=!1;if(o){const j=new Date(o);D=S<j}if(a&&!D){const j=new Date(a);D=S>j}f(D)}}}},zf=u.div`
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
        height: ${He(nn)};
        max-height: ${He(nn)};
        border: ${({danger:e})=>e&&`2px solid ${w.red.main}`};

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
`,ft=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:p,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:x,alertMessage:m,loading:v=!1,isActive:b=!0,inputAppearance:S=!0,mask:D=!1,autocomplete:j=!1,minValue:T=void 0,maxValue:N=void 0,minLength:z=void 0,maxLength:I=void 0,hideCross:se=!1,stepSize:H=.1,size:Y="middle"}=i,{inputType:ce,buttonOnClick:Ce,danger:Ee,handleOnChange:Ye,phoneMaskKeyDown:$e}=Lf(s,o,g,x,T,N,h,D),xe=s&&g==="date"?zp(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(zf,{leftIcon:!!a,isActive:b,inputAppearance:S,width:d,danger:Ee,minWidth:p,size:Y,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(te,{type:"alert",visible:!!m,icon:t.jsx(Mp,{}),title:m??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:T,max:N,minLength:z,maxLength:I,step:H??void 0,type:ce,placeholder:f,value:xe,autoComplete:j?"on":"off",onKeyDown:Bt=>g==="tel"&&$e(Bt),onChange:Ye,required:c,readOnly:!b,ref:n}),g!=="password"?!!(s!=null&&s.length)&&S&&(v?t.jsx(Ge,{}):!se&&t.jsx(_,{icon:t.jsx(Qe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ce==="password"?t.jsx(Fp,{}):t.jsx(bs,{}),tabIndex:-1,onClick:Ce})]})}),Mf=u.div`
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
`,Ff="/assets/thinking-emoji-f3c10f79.gif",Bf=["loading"],Hf=u.div.withConfig({shouldForwardProp:e=>!Bf.includes(e)})`
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
`,Me=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Hf,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ue,{text:n,image:a&&Ff,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(gn,{})})})}):t.jsx(Ge,{})}),t.jsx("div",{className:"content",children:e})]})),Uf=u.a`
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
`,Wf=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:p,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(Uf,{text:!!i,onClick:x=>f&&n&&n(x),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Ai=l.memo(Wf),jn=u.div`
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

    // TODO: delete this line but all applications pages must be with 'hiddenTitle'
    // attribute (or another hidden title solution)
    padding-top: ${({noHeader:e})=>e?"20px":"80px"};

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Vf=u.a`
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
`,Gf=({title:e,link:i,type:n})=>t.jsxs(Vf,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(A,{}):t.jsx(Bp,{})}),t.jsx("div",{className:"title",children:e})]}),qf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Yf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Kf=()=>ge(Jf),hr=k(),gr=k(),fr=k(),Jf=V(Yf).on(hr,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:qf(n,220,s),open:!0,content:i,type:o})).on(gr,e=>({...e,open:!1})).on(fr,(e,{position:i})=>({...e,position:i})),Re={open:hr,close:gr,changePosition:fr},Xf={useContextMenu:Kf},Qf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},Wn=new Set,xr=(e,i)=>{l.useEffect(()=>{const n=o=>{Wn.add(o.which),!e.slice(0,e.length-1).find(r=>!Wn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{Wn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},nt=u.div`
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

    ${X.isMobile} {
        flex-direction: column;
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,$=u.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({$wrap:e})=>e&&"wrap"};
    padding: ${({p:e})=>e};
    margin: ${({m:e})=>e};
`,ke=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},mr=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"Х","]":"ъ","}":"Ъ","'":"э",";":"ж",",":"б",".":"ю","<":"Б",">":"Ю",":":"Ж",'"':"Э"};let n="";for(let s=0;s<e.length;s++){const o=ke(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},br=e=>/[A-Za-z]/.test(e),Zf=u.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${w.blue.transparent2};
    }

    &:focus-visible {
        background: ${w.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,vr=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!br(e))return null;const s=mr(e),o=()=>i(s);return t.jsxs(ne,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Zf,{tabIndex:10,children:s})]})};function ii(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function xt(e,i,n=0){return e>i?n:e<n?i:e}const ex=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,tx=u(nt)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,ix=u.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?w.blue.main:"transparent"};
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
        background: ${({selected:e})=>e?w.blue.main:"var(--theme-1)"};
    }
`,Di=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:p,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[x,m]=l.useState(0),[v,b]=l.useState(!1),S=l.useRef(null),D=l.useRef(null),j=l.useRef(null);ii(S,()=>b(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var I;return(I=j.current)==null?void 0:I.focus()},50)},[c]);const T=I=>{var se,H;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),I.key==="ArrowDown"?((se=D.current)==null||se.scrollIntoView({block:"start",behavior:"smooth"}),typeof x=="number"&&m(xt(x+1,((a==null?void 0:a.length)??1)-1,0))):I.key==="ArrowUp"?((H=D.current)==null||H.scrollIntoView({block:"end",behavior:"smooth"}),typeof x=="number"&&m(xt(x-1,((a==null?void 0:a.length)??1)-1,0))):I.key==="Enter"?(a!=null&&a[x??0].title&&d(a==null?void 0:a[x??0].title),b(!1),h==null||h(a==null?void 0:a[x??0])):m(0)},N=I=>()=>{m(I),d((a==null?void 0:a[I].title)??""),b(!1),h==null||h(a==null?void 0:a[I])},z=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(ex,{width:i,onKeyDown:T,onMouseDown:z,ref:S,children:[t.jsx(ft,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Yt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:p,ref:j}),t.jsx(vr,{setValue:d,value:e,visible:f}),v&&t.jsx(tx,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:T,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:I,icon:se},H)=>{const Y=x===H;return t.jsxs(ix,{onClick:N(H),ref:Y?D:null,selected:Y,children:[se&&t.jsx("div",{className:"icon",children:se}),t.jsx("span",{children:I})]},I+H)})})]})},kn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},po={small:"30px",middle:"44px",big:"68px"},yr={small:"8px",middle:"10px",big:"16px"},nx={small:"0.8rem",middle:"0.9rem",big:"1rem"},sx={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},ox=u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${He(po)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${He(yr)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${He(po)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${X.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,ax=u.div`
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
        font-size: ${He(nx)};
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

    ${X.isMobile} {
        & > b {
            font-size: ${He(sx)};
        }
    }
`,rx=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(ax,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),lx=l.memo(rx),cx=u.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${He(yr)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,dx=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(cx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},px=l.memo(dx),ux=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:p}=kn();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??p;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[p,d.current]),t.jsx(ox,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(px,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(lx,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},Es=l.memo(ux),hx=300,Sn=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=hx})=>{const[c,d]=l.useState(e??""),[p,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const x=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(x)}else p.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const x=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(x)}},[...a]),[c,d,f]},Dt=u.span`
    color: #fff;
    background: ${({color:e})=>w[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${w[e??"red"].main}`};
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
        background: ${({color:e})=>w[e??"red"].light1};
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
`,gx=u.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>w[e]?w[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: 100%;
        height: 100%;
        scale: 0.5;
    }
`,_t=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(gx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Dt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},_r=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:p=!1})=>{const h=b=>{n(i(b,e))},f=()=>{n(null)},[g,x,m]=Sn({onDebounce:h,onClear:f}),v=b=>{x(b),o&&o(b)};return t.jsx(Di,{value:g??"",setValue:v,inputAppearance:s,placeholder:d,validationCheck:p,loading:c?m:!1,hints:a,width:r})},fx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Mf,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),wr=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,xx=u(wr)`
    background: var(--almostTransparentOpposite);
`,mx=u(wr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,jr=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Te,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(xx,{},a)),t.jsx(mx,{color:n,current:i})]}),bx=u.label`
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
`,vx=u.div`
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
`,Ue=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(bx,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(vx,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(un,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},kr=e=>e.split("/")[1],yx=e=>e*1024*1024,_x=(e,i)=>(i??$h).indexOf(e.type)!==-1,uo=(e,i,n,s,o=Ph)=>{if(n&&i.length+e.length>n)return U.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return _x(e[a],s)?e[a].size>yx(o)?(U.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),U.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>kr(r))}`,type:"failure",time:5e3}),i)},wx=u.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${w.blue.main}`:`2px dashed ${w.grey.main}`};
    background: ${({showPulse:e})=>e?w.blue.transparent3:""};
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
`,Ie=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},jx=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),p=m=>{const v=m.target.files;v!=null&&v.length&&n(uo(v,e,i,o,a))},h=m=>{m.preventDefault()},f=m=>{m.preventDefault(),d(!1);const v=m.dataTransfer.files;v.length&&n(uo(v,e,i,o,a))},g=m=>{m.preventDefault(),d(!0)},x=m=>{m.preventDefault(),d(!1)};return t.jsxs(wx,{isActive:s,showPulse:c,onDragOver:m=>s&&h(m),onDragEnter:m=>s&&g(m),onDragLeave:m=>s&&x(m),onDrop:m=>s&&f(m),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(Hn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(Hn,{className:"icon-1"}),t.jsx(Hn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ne,{align:"center",children:t.jsx(Ie,{words:[`Форматы: ${o?o.map(m=>kr(m)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},kx=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Sx=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Tx=u.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${w.grey.transparent3};
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
`,Ex=({file:e,files:i,setFiles:n})=>{const{open:s}=Z(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(Ts,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>ct.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Sx(r,e.name,i))});return t.jsxs(Tx,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Hp,{}):t.jsx(Up,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ne,{fontSize:"0.7em",children:kx(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Qe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},$x=({files:e,setFiles:i})=>t.jsx(Te,{title:"Список файлов",visible:!!e.length,onDelete:()=>ct.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Ex,{file:n,files:e,setFiles:i},n.name))}),Sr=e=>t.jsxs(Te,{gap:12,children:[t.jsx(jx,{...e}),t.jsx($x,{files:e.files,setFiles:e.setFiles})]}),Px=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Cx=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Px,{children:[t.jsx(Ue,{...e}),n&&t.jsx(Sr,{...i})]}),Ox=u.div`
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
`,Tr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),p=new Date(d);p.setDate(d.getDate()+r),n[1]=oe(p,"extraWeird")}return t.jsxs(Ox,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(te,{title:"Внимание",type:"alert",icon:t.jsx(ji,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(ft,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(ft,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Ax=(e,i)=>{var v,b,S;const{width:n}=kn(),s=l.useRef(null),[o,a]=l.useState(!1),[r,c]=l.useState(!1),[d,p]=l.useState(0),[h,f]=l.useState(0),g=((v=s.current)==null?void 0:v.clientWidth)??1,x=Math.ceil((((b=s.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{s.current&&(s.current.scrollLeft=d,s.current.clientWidth<s.current.scrollWidth?(a(!0),c(!0)):(c(!1),a(!1)))},[d,(S=s.current)==null?void 0:S.clientWidth,n,i]),{listRef:s,leftArrow:o,rightArrow:r,setScrollLeft:p,pageOffset:g,amountOfPages:x,currentPage:h,setCurrentPage:f,handleScroll:D=>{f(Math.ceil(D.currentTarget.scrollLeft/(g+(e??0))))}}},Dx=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:p,onWatchMore:h,onDelete:f,showPages:g,innerPadding:x,minWidth:m,wrapOnMobile:v,position:b,direction:S="vertical",verticalAlign:D="top",horizontalAlign:j="left",scroll:T=!0,visible:N=!0,...z}=e;if(!N)return null;const{listRef:I,leftArrow:se,rightArrow:H,handleScroll:Y,setScrollLeft:ce,pageOffset:Ce,amountOfPages:Ee,currentPage:Ye}=Ax(s,n);return t.jsxs(sf,{padding:r,position:b,width:o,minWidth:m,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(_,{icon:t.jsx(Ot,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(_n,{verticalAlign:D,horizontalAlign:j,direction:S,ref:I,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:x,scroll:T,wrapOnMobile:v,onScroll:Y,...z,children:n}),(H||se)&&t.jsxs("div",{className:"bottom-wrapper",children:[se&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Pi,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce($e=>{var xe;return xt($e-Ce-(s??0),((xe=I.current)==null?void 0:xe.scrollWidth)??0)})}}),g&&t.jsx(jr,{direction:"horizontal",current:Ye,amount:Ee}),H&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Ze,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce($e=>{var xe;return xt($e+Ce+(s??0),((xe=I.current)==null?void 0:xe.scrollWidth)??0)})}})]})]})},Te=le.memo(Dx),Nx=()=>t.jsx("div",{className:"left",children:t.jsxs(Te,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(wn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Te,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(ee,{to:Us,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ki,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:pc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Wp,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:dc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ji,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:uc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ji,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ve,{}),t.jsx(ee,{to:cc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Vp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Ai,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(fn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),Tn=()=>{const{search:e}=Zt();return le.useMemo(()=>new URLSearchParams(e),[e])},Ix=()=>{const e=Tn(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),p=!!a&&!!s,h=Rt.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=v=>{d(v.getModifierState("CapsLock")),v.key==="Enter"&&h({login:s,password:a})},x=v=>{Rt.changeSavePassword({savePassword:v})},m=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:x,handleKeyPress:g,handleLogin:m,setPassword:r,setLogin:o}},Rx=()=>{const{loading:e,error:i,data:n}=be.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:p,handleLogin:h,setPassword:f,setLogin:g}=Ix();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Te,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(wn,{width:"50px",short:!0,className:"logo second"}),t.jsx($,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(te,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Te,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(ne,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(te,{type:"failure",visible:!!i,children:i}),t.jsx(te,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(ft,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(ft,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Ue,{text:"Оставаться в системе",checked:n.savePassword,setChecked:p})]}),t.jsx(gt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Lx=u(nt)`
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
`,zx=()=>{const{data:{isAuthenticated:e}}=be.useUser();return t.jsxs(Lx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Nx,{}),t.jsx(Rx,{})]})},Mx=u.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${X.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,Fx=()=>t.jsx(Mx,{children:t.jsx(zx,{})}),we=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ue,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(fn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Bx="modulepreload",Hx=function(e){return"/"+e},ho={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Hx(a),a in ho)return;ho[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Bx,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,f)=>{p.addEventListener("load",h),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Ux=l.lazy(()=>y(()=>import("./index-d46a3bf6.js"),["assets/index-d46a3bf6.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),Wx=l.lazy(()=>y(()=>import("./index-7b166d6b.js"),["assets/index-7b166d6b.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),go=l.lazy(()=>y(()=>import("./index-daf701b4.js"),["assets/index-daf701b4.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js"])),Vx=l.lazy(()=>y(()=>import("./index-23bd9627.js"),["assets/index-23bd9627.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Gx=l.lazy(()=>y(()=>import("./index-c62eebe4.js"),["assets/index-c62eebe4.js","assets/vendor-cbee1f3c.js","assets/index-fcaefa6b.js","assets/form-fb524094.js","assets/send-form-1105d155.js"])),qx=l.lazy(()=>y(()=>import("./form-fb524094.js"),["assets/form-fb524094.js","assets/vendor-cbee1f3c.js","assets/send-form-1105d155.js"])),Er=l.lazy(()=>y(()=>import("./index-aec7e04b.js"),["assets/index-aec7e04b.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>jv),void 0));const Yx=l.lazy(()=>y(()=>import("./index-b46b07e4.js"),["assets/index-b46b07e4.js","assets/vendor-cbee1f3c.js","assets/index-b9cdb29e.js"])),Kx=l.lazy(()=>y(()=>import("./index-42bc3572.js"),["assets/index-42bc3572.js","assets/vendor-cbee1f3c.js","assets/index-a3130013.js"])),Jx=l.lazy(()=>y(()=>import("./index-6c7b74f2.js"),["assets/index-6c7b74f2.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Xx=l.lazy(()=>y(()=>import("./index-4fbb202c.js"),["assets/index-4fbb202c.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Qx=l.lazy(()=>y(()=>import("./index-ae954763.js"),["assets/index-ae954763.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),Zx=l.lazy(()=>y(()=>import("./index-570e2df9.js"),["assets/index-570e2df9.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-9e9413dc.js"])),em=l.lazy(()=>y(()=>import("./index-b4125be8.js"),["assets/index-b4125be8.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),tm=l.lazy(()=>y(()=>import("./index-ee459cbd.js"),["assets/index-ee459cbd.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-9e9413dc.js"])),im=l.lazy(()=>y(()=>import("./index-83bf46b7.js"),["assets/index-83bf46b7.js","assets/vendor-cbee1f3c.js","assets/ui-06fe5e77.js"])),nm=l.lazy(()=>y(()=>import("./index-2447b0c3.js"),["assets/index-2447b0c3.js","assets/vendor-cbee1f3c.js","assets/ui-06fe5e77.js"])),sm=l.lazy(()=>y(()=>import("./index-95d59ca5.js"),["assets/index-95d59ca5.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-9e9413dc.js"])),om=l.lazy(()=>y(()=>import("./index-dbb8efa2.js"),["assets/index-dbb8efa2.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),am=l.lazy(()=>y(()=>import("./index-25815940.js"),["assets/index-25815940.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-9e9413dc.js"])),rm=l.lazy(()=>y(()=>import("./index-48803f3c.js"),["assets/index-48803f3c.js","assets/vendor-cbee1f3c.js"])),lm=l.lazy(()=>y(()=>import("./index-a0d3bd46.js"),["assets/index-a0d3bd46.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),cm=l.lazy(()=>y(()=>import("./index-5ec4e380.js"),["assets/index-5ec4e380.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),dm=l.lazy(()=>y(()=>import("./index-b4589176.js"),["assets/index-b4589176.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-9e9413dc.js"])),pm=l.lazy(()=>y(()=>import("./index-56b7c193.js"),["assets/index-56b7c193.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-9e9413dc.js"])),um=l.lazy(()=>y(()=>import("./index-6a30099d.js"),["assets/index-6a30099d.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),hm=l.lazy(()=>y(()=>import("./index-cb78fd1c.js"),["assets/index-cb78fd1c.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-9e9413dc.js"])),gm=l.lazy(()=>y(()=>import("./index-80c8fcc3.js"),["assets/index-80c8fcc3.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),fm=l.lazy(()=>y(()=>import("./index-ec495378.js"),["assets/index-ec495378.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-9e9413dc.js"])),xm=l.lazy(()=>y(()=>import("./index-b019d196.js"),["assets/index-b019d196.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-9e9413dc.js"])),mm=l.lazy(()=>y(()=>import("./index-71c5e372.js"),["assets/index-71c5e372.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-9e9413dc.js"])),bm=l.lazy(()=>y(()=>import("./index-7864f4e0.js"),["assets/index-7864f4e0.js","assets/vendor-cbee1f3c.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-9e9413dc.js"])),vm=l.lazy(()=>y(()=>import("./index-f00ba5dd.js"),["assets/index-f00ba5dd.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),ym=l.lazy(()=>y(()=>import("./index-a7891910.js"),["assets/index-a7891910.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),_m=l.lazy(()=>y(()=>import("./index-73409db0.js"),["assets/index-73409db0.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),wm=l.lazy(()=>y(()=>import("./index-58481369.js"),["assets/index-58481369.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),jm=l.lazy(()=>y(()=>import("./index-86a4dd34.js"),["assets/index-86a4dd34.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),km=l.lazy(()=>y(()=>import("./index-9fa3777b.js"),["assets/index-9fa3777b.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Sm=l.lazy(()=>y(()=>import("./index-cd965041.js"),["assets/index-cd965041.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Tm=l.lazy(()=>y(()=>import("./index-d0114ff6.js"),["assets/index-d0114ff6.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Em=l.lazy(()=>y(()=>import("./index-9ec4ba6d.js"),["assets/index-9ec4ba6d.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),$m=l.lazy(()=>y(()=>import("./index-3f925d8b.js"),["assets/index-3f925d8b.js","assets/vendor-cbee1f3c.js","assets/index-9e9413dc.js","assets/index-7e743858.js","assets/send-form-1105d155.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Pm=l.lazy(()=>y(()=>import("./index-1b56314c.js"),["assets/index-1b56314c.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>yl),void 0));const $s=l.lazy(()=>y(()=>import("./index-cd470f3e.js"),["assets/index-cd470f3e.js","assets/vendor-cbee1f3c.js"])),Cm=l.lazy(()=>y(()=>import("./index-58052330.js"),["assets/index-58052330.js","assets/vendor-cbee1f3c.js"])),Om=l.lazy(()=>y(()=>import("./index-abb7bf0e.js"),["assets/index-abb7bf0e.js","assets/vendor-cbee1f3c.js"])),Am=l.lazy(()=>y(()=>import("./index-fb355648.js"),["assets/index-fb355648.js","assets/vendor-cbee1f3c.js"])),Dm=l.lazy(()=>y(()=>import("./index-e1021da6.js"),["assets/index-e1021da6.js","assets/vendor-cbee1f3c.js"])),Nm=l.lazy(()=>y(()=>import("./index-83b3e062.js"),["assets/index-83b3e062.js","assets/vendor-cbee1f3c.js"])),Im=l.lazy(()=>y(()=>import("./index-62db4f2a.js"),["assets/index-62db4f2a.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Rm=l.lazy(()=>y(()=>import("./index-0fb1acc2.js"),["assets/index-0fb1acc2.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Lm=l.lazy(()=>y(()=>import("./index-fba73ac4.js"),["assets/index-fba73ac4.js","assets/vendor-cbee1f3c.js"])),zm=l.lazy(()=>y(()=>import("./index-346057bf.js"),["assets/index-346057bf.js","assets/vendor-cbee1f3c.js","assets/send-hr-form-work-transfer-a54d0482.js"])),Mm=l.lazy(()=>y(()=>import("./index-485453c9.js"),["assets/index-485453c9.js","assets/vendor-cbee1f3c.js","assets/send-hr-form-work-transfer-a54d0482.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>ob),void 0));l.lazy(()=>y(()=>import("./index-775e991d.js"),["assets/index-775e991d.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js","assets/help-links-a4c7a075.js"]));const Fm=l.lazy(()=>y(()=>import("./index-3c884cd7.js"),["assets/index-3c884cd7.js","assets/vendor-cbee1f3c.js"])),$r=l.lazy(()=>y(()=>import("./index-74fac773.js"),["assets/index-74fac773.js","assets/vendor-cbee1f3c.js"])),Bm=l.lazy(()=>y(()=>Promise.resolve().then(()=>yl),void 0));l.lazy(()=>y(()=>Promise.resolve().then(()=>Ry),void 0));const Hm=l.lazy(()=>y(()=>import("./index-15fb4e34.js"),["assets/index-15fb4e34.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>import("./index-a2bdf31b.js"),["assets/index-a2bdf31b.js","assets/vendor-cbee1f3c.js","assets/index.esm-d8961b68.js"]));const Um=l.lazy(()=>y(()=>import("./index-481065b2.js"),["assets/index-481065b2.js","assets/vendor-cbee1f3c.js"])),Pr=l.lazy(()=>y(()=>import("./index-34382b9b.js"),["assets/index-34382b9b.js","assets/vendor-cbee1f3c.js","assets/help-links-a4c7a075.js"])),Wm=l.lazy(()=>y(()=>import("./index-7d6a30cc.js"),["assets/index-7d6a30cc.js","assets/vendor-cbee1f3c.js"])),Vm=l.lazy(()=>y(()=>import("./index-c6680613.js"),["assets/index-c6680613.js","assets/vendor-cbee1f3c.js","assets/alert-item-18dfa022.js","assets/is-valid-url-08a91344.js"])),Gm=l.lazy(()=>y(()=>import("./index-e42f32c6.js"),["assets/index-e42f32c6.js","assets/vendor-cbee1f3c.js","assets/index-23a49f7f.js","assets/alert-item-18dfa022.js","assets/is-valid-url-08a91344.js"])),qm=l.lazy(()=>y(()=>import("./index-66f1da15.js"),["assets/index-66f1da15.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>ly),void 0));const Ym=l.lazy(()=>y(()=>import("./index-d91486be.js"),["assets/index-d91486be.js","assets/vendor-cbee1f3c.js","assets/index-fcaefa6b.js"])),Cr=l.lazy(()=>y(()=>import("./index-ddbbf7e1.js"),["assets/index-ddbbf7e1.js","assets/vendor-cbee1f3c.js","assets/index-23a49f7f.js"])),Km=l.lazy(()=>y(()=>import("./index-05227ebc.js"),["assets/index-05227ebc.js","assets/vendor-cbee1f3c.js","assets/index-3c353c15.js"])),Jm=l.lazy(()=>y(()=>import("./index-f367042f.js"),["assets/index-f367042f.js","assets/vendor-cbee1f3c.js","assets/index-3c353c15.js"])),Xm=l.lazy(()=>y(()=>import("./index-e0acf992.js"),["assets/index-e0acf992.js","assets/vendor-cbee1f3c.js","assets/index-3c353c15.js"])),Qm=l.lazy(()=>y(()=>import("./index-f0c8af49.js"),["assets/index-f0c8af49.js","assets/vendor-cbee1f3c.js"])),Zm=l.lazy(()=>y(()=>import("./index-5adacae4.js"),["assets/index-5adacae4.js","assets/vendor-cbee1f3c.js","assets/index.esm-d8961b68.js","assets/index-fcaefa6b.js"])),e0=l.lazy(()=>y(()=>import("./index-bcd503fa.js"),["assets/index-bcd503fa.js","assets/vendor-cbee1f3c.js"])),t0=l.lazy(()=>y(()=>import("./index-d23d1d50.js"),["assets/index-d23d1d50.js","assets/vendor-cbee1f3c.js"])),i0=l.lazy(()=>y(()=>import("./index-6833a3a6.js"),["assets/index-6833a3a6.js","assets/vendor-cbee1f3c.js"])),n0=l.lazy(()=>y(()=>import("./index-b33a133c.js"),["assets/index-b33a133c.js","assets/vendor-cbee1f3c.js","assets/index-b9cdb29e.js"])),s0=l.lazy(()=>y(()=>import("./index-b68363f3.js"),["assets/index-b68363f3.js","assets/vendor-cbee1f3c.js"])),o0=l.lazy(()=>y(()=>import("./index-96b437e0.js"),["assets/index-96b437e0.js","assets/vendor-cbee1f3c.js","assets/help-links-a4c7a075.js"])),a0=l.lazy(()=>y(()=>import("./index-522fe9eb.js"),["assets/index-522fe9eb.js","assets/vendor-cbee1f3c.js","assets/help-links-a4c7a075.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>cT),void 0));const r0=l.lazy(()=>y(()=>import("./index-775e991d.js"),["assets/index-775e991d.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js","assets/help-links-a4c7a075.js"])),l0=l.lazy(()=>y(()=>import("./index-6b053e7e.js"),["assets/index-6b053e7e.js","assets/vendor-cbee1f3c.js"])),c0=u.div`
    width: 100%;
`,d0=()=>t.jsxs(c0,{children:[t.jsx(J,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(J,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),qe=e=>{const{children:i,skeleton:n=t.jsx(d0,{}),loading:s=!1,...o}=e;return t.jsx(nt,{...o,className:"block",children:s?n:i})},p0=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Vn=u.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??w.blue.transparent3};
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
`,u0=u.div`
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
`,h0=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:p,setRemoveAll:h,setRemoveOne:f}=p0(c,r);return c.length?t.jsxs(u0,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(Vn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Ot,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(Vn,{background:g.background,remove:p===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Qe,{})})]},g.id)}),c.length&&!!n&&t.jsx(Vn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Jt=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},g0=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,f0=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[p,h]=l.useState(e),f=l.useCallback(x=>{var m,v;o(b=>(b&&b[x]&&delete b[x],{...b})),x===((m=i==null?void 0:i.column)==null?void 0:m.field)&&n(null),x===((v=a==null?void 0:a.column)==null?void 0:v.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(x=>{const m=Object.values(s)[0].column;return x={[(m==null?void 0:m.field)??""]:{id:(m==null?void 0:m.field)??"",title:"Фильтр: "+(m==null?void 0:m.title)}},{...x}});else{const x=Object.values(s).find(m=>{var v;return!c[((v=m.column)==null?void 0:v.field)??""]});x&&d(m=>{var S,D;const v=((S=x.column)==null?void 0:S.field)??"",b="Фильтр: "+((D=x.column)==null?void 0:D.title);return m&&(m[v]={id:v,title:b}),{...m}})}i&&d(x=>{var b;const m=((b=i.column)==null?void 0:b.field)??"",v="Поиск";return x?x[m]={id:m,title:v}:x={[m]:{id:m,title:v}},{...x}}),a&&d(x=>{var b;const m=((b=a.column)==null?void 0:b.field)??"",v="Сортировка";return x?x[m]={id:m,title:v}:x={[m]:{id:m,title:v}},{...x}})},[i,s,a]),l.useEffect(()=>{var v;const x=i==null?void 0:i.column,m=(v=i==null?void 0:i.column)==null?void 0:v.field;if(i&&m){const b=e==null?void 0:e.filter(S=>ke(Jt(S[m],x==null?void 0:x.type)).includes(ke(Jt(i.value,x==null?void 0:x.type))));h(b)}else h(e)},[i]),l.useEffect(()=>{if(s){const x=e==null?void 0:e.filter(m=>!Object.values(s).find(v=>{var b;return m[((b=v.column)==null?void 0:b.field)??""]!==v.value.title}));h(x)}else d(x=>({...x})),h(e)},[s]),l.useEffect(()=>{var m;const x=((m=a==null?void 0:a.column)==null?void 0:m.field)??"";a?h(v=>{const b=[...v??[]];return b==null||b.sort((S,D)=>D[x]<S[x]?a.value==="asc"?1:-1:D[x]>S[x]?a.value==="asc"?-1:1:0),b}):(d(v=>{const b=g0(v,"Сортировка");return v&&b&&delete v[b],{...v}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},ns=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),ns(n.children,i)):n?n.children:e},x0=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[x,m]=l.useState(i),[v,b]=l.useState("");l.useEffect(()=>{m(i)});const S=l.useCallback(()=>{d(T=>!T)},[d]),D=l.useCallback(T=>{if(T.children)f.push(T.id.toString()),m(ns(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(N=>N.id===T.id)){const N=o.filter(z=>z.id!==T.id);N.length?n(N):n(null)}else n([...o,T]);else n([T]);else n(T);!r&&S(),b(f.join("/"))}s==null||s(T)},[n,f]),j=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?m(i):m(ns(i,f)??[])},[f,m]);return ii(p,()=>{c&&S()}),{handleOpen:S,refElement:p,isOpen:c,multiple:r,handleSelect:D,selectedRoute:v,currentItems:x,route:f,goBack:j,refItems:h,appearance:a}},m0=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${He(nn)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,b0=u.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${He(nn)};

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
`,v0=u.header`
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
        background: ${w.blue.transparent2};
        color: ${w.blue.main};
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
`,y0=u.ul`
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
        display: none;
        top: 36px;
    }
`,fo=u.li`
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
`,_0=["isOpen"],w0=u(Gp).withConfig({shouldForwardProp:e=>!_0.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,j0=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:p,refItems:h,appearance:f}=x0(e),{isActive:g,width:x,title:m,required:v,selected:b,placeholder:S,size:D="middle"}=e;return t.jsxs(b0,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:x,size:D,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!m,required:v,children:m}),t.jsxs(m0,{multiple:o,appearance:f,size:D,children:[t.jsx(v0,{appearance:f,children:o?b?b.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):t.jsx("div",{className:"single-header",children:b?t.jsxs(t.Fragment,{children:[!!b.icon&&t.jsx("span",{className:"icon",children:b.icon}),t.jsx("span",{className:"header-title",children:b.title})]}):t.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),t.jsx(w0,{isOpen:s})]}),t.jsxs(y0,{width:x,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:m,children:[!!d.length&&t.jsx(fo,{isSelected:!1,onClick:j=>{j.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(Pi,{}),"Назад"]})},-1),c.map(({id:j,icon:T,title:N,children:z,data:I})=>t.jsxs(fo,{onClick:se=>{se.stopPropagation(),a({id:j,icon:T,title:N,children:z,data:I})},isSelected:!o&&!!b&&b.title.includes(N),leadingToSelected:r.includes(j.toString()),children:[!!T&&t.jsx("span",{className:"icon",children:T}),t.jsx("span",{className:"select-item-title",children:N}),!!z&&t.jsx("span",{className:"right-icon",children:t.jsx(Ze,{})}),o&&!!b&&!!b.find(se=>se.title.includes(N))&&t.jsx("span",{className:"right-icon",children:t.jsx(un,{})})]},N))]})]})},Or=l.memo(j0),k0=e=>{switch(e){case"desc":return U.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return U.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return U.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},S0=u.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({even:e})=>e?`${w.blue.transparent3}`:"var(--theme)"};

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
`,Ar=u.div`
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
`,T0=u.div`
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
`,E0=u.div`
    display: flex;
    align-items: center;
`,$0=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return k0(h),h?{column:d,value:h}:null})};return t.jsx(T0,{children:e.map(d=>{var p,h,f,g;return t.jsxs(Ar,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((p=d.priority)==null?void 0:p.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Yt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(qp,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(E0,{children:t.jsx(Or,{appearance:!1,items:d.catalogs??[],setSelected:x=>o(m=>(x&&(m={...m,[d.field]:{column:d,value:x}}),m)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},P0=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs($,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(Pi,{}),onClick:()=>r(xt(n-1,e).toString())}),t.jsxs($,{w:"fit-content",gap:"6px",children:[t.jsx(ft,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(ne,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(Ze,{}),onClick:()=>r(xt(n+1,e).toString())})]}):null},C0=u.div`
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
`,St=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(C0,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,O0=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,A0=({obj:e,columns:i})=>t.jsx(O0,{children:i.map(n=>t.jsx(St,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Jt(e[n.field],n.type)},n.title))}),Dr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=Z(),r=()=>a(t.jsx(A0,{obj:n,columns:i||e}),"Информация");return t.jsx(S0,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(Ar,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:p=>{c.onClick&&(p.stopPropagation(),c.onClick(n))},children:c.render?c.render(Jt(n[c.field],c.type),n):Jt(n[c.field],c.type)},c.field)})})})},D0=u.div`
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
`,N0=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,I0=u.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,R0=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),p=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(N0,{children:t.jsx(Ge,{})}):t.jsxs(D0,{children:[h==null?void 0:h.map((f,g)=>t.jsx(Dr,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(ue,{text:"Нет данных"}),p>0&&t.jsx(ve,{margin:"0",width:"100%"}),t.jsx(I0,{children:t.jsx(P0,{pages:p,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},L0=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,z0=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},M0=({search:e,setSearch:i})=>{var n,s;return t.jsx(L0,{closed:!(e!=null&&e.column),children:t.jsx(ft,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:z0((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Yt,{}),minWidth:"auto"})})},F0=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function B0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const H0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(F0(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ve,{}),t.jsx(Dr,{onRowClick:()=>null,columns:B0(s),el:s,index:1})]})},U0=u.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,st=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:p,setSearch:h,resultData:f,filter:g,setFilter:x,filterList:m,setFilterList:v,onRemoveOne:b,onRemoveAll:S}=f0(n);return t.jsxs(U0,{children:[t.jsx(h0,{setList:v,padding:"0 10px",list:m,onRemoveOne:b,onRemoveAll:S}),t.jsx(M0,{search:p,setSearch:h}),t.jsx($0,{sort:c,setSort:d,columns:e,search:p,setSearch:h,filter:g,setFilter:x}),t.jsx(R0,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(H0,{footer:a,data:n,columns:e})]})},l$={ready:"Готово",pending:"В работе",rejected:"Отклонено"},En={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},Ps={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},c$=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],d$=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],W0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(En).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Ps).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],V0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(G0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(q0,{columns:W0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},G0=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,q0=u(st)`
    width: 100%;
`,Y0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${it()}`},s=await Lt({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},K0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(En).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(Ps).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{Y0(i.applicationGuid)}})}}],J0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Q0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>{d(p=>!p)},background:"transparent"})]}),t.jsxs(X0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(eb,{children:[a&&t.jsx(ee,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(Z0,{columns:K0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(p=>!p)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},X0=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Q0=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Z0=u(st)`
    width: 100%;
`,eb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,tb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(ib,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(J0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(V0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},ib=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,$n=u.div`
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
`,Pn=()=>t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),Nr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Me,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(nb,{children:t.jsxs($n,{maxWidth:"1500px",children:[t.jsxs(sb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(Pn,{})]}),t.jsx(tb,{})]})})})},nb=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,sb=u.div`
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
`,ob=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"})),Ir=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(En).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Rr=k(),Lr=k(),zr=L(async()=>{const{data:e}=await fe.get(`Weekend.GetAllHistory?PersonalGuid=${ei(it()??"").IndividualGuid}`);return e.orders});P({clock:Rr,target:zr});const Ni=L(async e=>(await fe.post("Weekend.AddWeekend",e)).data);P({clock:Lr,target:Ni});const Mr=V([]),ab=Ni.pending;P({clock:zr.doneData,target:Mr});P({clock:Ni.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:vt.evokePopUpMessage});P({clock:Ni.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:vt.evokePopUpMessage});const rb={loadBufferHolidayWork:Rr,sendBufferHolidayWork:Lr},p$={sendBufferHolidayWorkFx:Ni},lb={useBufferHolidayWork:()=>({data:ge(Mr),loading:ge(ab)})},cb=()=>{const[e,i]=l.useState(!1);l.useEffect(rb.loadBufferHolidayWork,[]);const{data:n}=lb.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(db,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(pb,{columns:Ir(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},db=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,pb=u(st)`
    width: 100%;
`,ub=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(gb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(hb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(fb,{children:t.jsx(ee,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},hb=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,gb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,fb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,xb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(mb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(ub,{info:s,index:o})),t.jsx(cb,{})]}):null},mb=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,bb=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Me,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(vb,{children:t.jsxs($n,{maxWidth:"1500px",children:[t.jsxs(yb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(Pn,{})]}),t.jsx(xb,{})]})})})},vb=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,yb=u.div`
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
`,Fr=k(),Br=k(),Ii=L(async()=>{const{data:e}=await fe.get(`Vacation.GetAllHistory?personalGuid=${ei(it()??"").IndividualGuid}`);return e});P({clock:Fr,target:Ii});const zt=L(async e=>(await fe.post("Vacation.AddVacation",e)).data);P({clock:Br,target:zt});const sn=V(null);P({clock:Ii.doneData,fn:({employeeVacations:e})=>e,target:sn});P({clock:zt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:U.evokePopUpMessage});P({clock:zt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:U.evokePopUpMessage});P({clock:zt.doneData,source:sn,fn:(e,{employeeVacations:i})=>[...e,...i],target:sn});P({clock:Ii.failData,fn:e=>{var n;return{message:js(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:U.evokePopUpMessage});P({clock:zt.doneData,target:Ii});const _b={loadBufferHolidayPlanning:Fr,sendBufferHolidayPlanning:Br},u$={sendBufferHolidayPlanningFx:zt},wb={useBufferHolidayPlanning:()=>({data:ge(sn),loading:ge(zt.pending),getDataLoading:ge(Ii.pending)})},Cn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${it()}`},o=await Lt({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var Hr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(Hr||{});const Cs=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(te,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>Hr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Cn(i.documentGuid,"0")}}):"-"}}],jb=()=>[...Cs(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${oe((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${oe((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Cn(i.documentGuid,"1")}}):"-"}}],kb=()=>{const{data:e,getDataLoading:i}=wb.useBufferHolidayPlanning(),n=()=>_b.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>aa(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(Me,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(Sb,{children:"История заявлений на отпуск:"}),t.jsx(ee,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ot,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ge,{})}):t.jsx(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(st,{columns:Cs(),columnsExtended:jb(),data:s,maxOnPage:10})})]})})},Sb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Gn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Ur=()=>{const e=et(),{allRoutes:i}=We.useMenu(),n=i??{},[s,o]=l.useState(Gn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Gn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Gn(a.pathname,n))}),[e,n]),s},Tb={small:"600px",middle:"700px",big:"963px",large:"100%"},Wr=e=>Tb[(e==null?void 0:e.pageSize)??"middle"],Eb=u(nt)`
    position: relative;

    ${X.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${X.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,$b=u.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${X.isMobile} {
        top: -4px;
        right: 7px;
    }
`,Pb=u.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${X.isMobile} {
        top: 40px;
    }
`,wt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Ur(),r=Wr(a);return t.jsx(Ys,{padding:"0 0 10px 0",children:t.jsxs(Eb,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx($b,{children:i}),n&&t.jsx(Pb,{children:n}),e]})})});wt.displayName="PageBlock";const Cb=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications(),n=et();return t.jsx(Me,{load:Le.getWorkerPosts,error:i,data:e,children:t.jsxs(wt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(ra,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(kb,{})]})})},Ob=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(En).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Ps).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Vr=k(),Gr=k(),Os=L(async()=>{const{data:e}=await fe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${ei(it()??"").IndividualGuid}`);return e});P({clock:Vr,target:Os});const ni=L(async e=>(await fe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);P({clock:Gr,target:ni});const on=V([]);P({clock:Os.doneData,fn:({employeeVacations:e})=>e,target:on});P({clock:ni.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:vt.evokePopUpMessage});P({clock:ni.doneData,source:on,fn:(e,{employeeVacations:i})=>[...e,...i],target:on});P({clock:Os.failData,fn:e=>{var n;return{message:js(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:U.evokePopUpMessage});P({clock:ni.failData,fn:e=>{var n;return{message:js(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:vt.evokePopUpMessage});const xo={loadBufferHolidayTransfer:Vr,sendBufferHolidayTransfer:Gr},h$={sendBufferHolidayTransferFx:ni},As={useBufferHolidayTransfer:()=>({data:ge(on),loading:ge(ni.pending)})},Ab=()=>{const[e,i]=l.useState(!1),{data:n}=As.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Db,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Nb,{columns:Ob(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Db=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Nb=u(st)`
    width: 100%;
`,Ib=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Lb,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(Rb,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Mb,{children:[t.jsx(ee,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,p)=>{if(d.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(zb,{columns:Cs(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Rb=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Lb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,zb=u(st)`
    width: 100%;
`,Mb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Fb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=As.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(Bb,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Ib,{info:o,index:a,data:i})),t.jsx(Ab,{})]})},Bb=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Hb=()=>{const{data:e,loading:i}=As.useBufferHolidayTransfer();return l.useEffect(()=>{xo.loadBufferHolidayTransfer()},[]),t.jsx(Me,{load:xo.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(Ub,{children:t.jsxs($n,{maxWidth:"1500px",children:[t.jsxs(Wb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(Pn,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(Fb,{})]})})})},Ub=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Wb=u.div`
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
`,Vb=e=>localStorage.setItem("age",e.toString()),g$=e=>localStorage.getItem(e),Gb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),qb={listMedicalExamination:null,error:null},Vt=L(async()=>{const e=await fe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${ei(it()??"").IndividualGuid}`);try{return Vb(e.data.age),Gb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Ri=L(async e=>{try{const i=await fe.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),Yb=()=>{const{listMedicalExamination:e,error:i}=ge(Kb);return{data:e,loading:ge(Ri.pending),getDataLoading:ge(Vt.pending),error:i}};k();ze({from:Ri.doneData,to:Vt});P({clock:Ri.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Ri.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:U.evokePopUpMessage});const Kb=V(qb).on(Vt,e=>({...e,error:null})).on(Vt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Vt.failData,(e,i)=>({...e,error:i.message})),Jb={loadBufferMedicalExaminationFx:Vt,sendBufferMedicalExaminationFx:Ri},Xb={useBufferMedicalExamination:Yb},qr=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${oe(i==null?void 0:i.startDate,"numeric")} - ${oe(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Cn(i==null?void 0:i.documentGuid,"0")}}):"-"}],Qb=()=>[...qr(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Cn(i==null?void 0:i.documentGuid,"1")}}):"-"}],Zb=()=>{const{data:e,getDataLoading:i}=Xb.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ye.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>aa(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(Me,{load:Jb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(ev,{children:"История заявлений на диспансеризацию:"}),t.jsx(ee,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ot,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ge,{})}):t.jsx(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(st,{columns:qr(),columnsExtended:Qb(),data:s,maxOnPage:10})})]})},ev=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,tv=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications();return t.jsx(Me,{load:Le.getWorkerPosts,error:i,data:e,children:t.jsxs(wt,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(Zb,{})]})})},Yr=k(),Kr=k(),Jr=L(async()=>{const{data:e}=await fe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${ei(it()??"").IndividualGuid}`);return e.employeeHistories});P({clock:Yr,target:Jr});const Li=L(async e=>(await fe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);P({clock:Kr,target:Li});const Xr=V([]),iv=Li.pending;P({clock:Jr.doneData,target:Xr});P({clock:Li.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:vt.evokePopUpMessage});P({clock:Li.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:vt.evokePopUpMessage});const nv={loadBufferWorkTransfer:Yr,sendBufferWorkTransfer:Kr},f$={sendBufferWorkTransferFx:Li},sv={useBufferWorkTransfer:()=>({data:ge(Xr),loading:ge(iv)})},ov=()=>{const[e,i]=l.useState(!1);l.useEffect(nv.loadBufferWorkTransfer,[]);const{data:n}=sv.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(av,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(rv,{columns:Ir(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},av=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,rv=u(st)`
    width: 100%;
`,lv=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(qe,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(dv,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(mt,{}):t.jsx(Ve,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(cv,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(pv,{children:[t.jsx(ee,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(ee,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},cv=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,dv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,pv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,uv=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(hv,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(lv,{info:s,index:o})),t.jsx(ov,{})]}):null},hv=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,gv=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Me,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(fv,{children:t.jsxs($n,{maxWidth:"1500px",children:[t.jsxs(xv,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(Pn,{})]}),t.jsx(uv,{})]})})})},fv=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,xv=u.div`
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
`,mv=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},bv=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,On=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Je.selectors.useData();return r?t.jsxs(bv,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Tr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(te,{type:"info",title:mv(n)??"",icon:t.jsx(Xe,{})}),i==null?void 0:i.map((c,d)=>{const p=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:c.title}),t.jsx(Ai,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(vs,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(ve,{})]},c.title)})]})]}):null},vv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(On,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},yv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(On,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},_v=()=>{const{data:e}=Je.selectors.useData();return t.jsx(On,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},wv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(On,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Qr=()=>{var i;const{data:e}=Je.selectors.useData();return t.jsx(Ys,{padding:"10px",children:t.jsx(wt,{children:t.jsx(Ws,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(_v,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(vv,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(yv,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(wv,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(we,{oldVersionUrl:u1}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},jv=Object.freeze(Object.defineProperty({__proto__:null,default:Qr},Symbol.toStringTag,{value:"Module"})),kv=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Zr=k(),el=k(),tl=k(),Xt=L(async()=>{const e=await Uh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),Ds=L(async e=>{try{return await Vh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),zi=L(async e=>{const i=await Wh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});P({clock:zi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:U.evokePopUpMessage});P({clock:zi.doneData,fn:()=>!0,target:el});P({clock:zi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:U.evokePopUpMessage});P({clock:Zr,target:zi});const il=k(),nl=k(),Sv=hn(zi.pending,Xt.pending,Boolean),Tv=V(!1).on(tl,(e,i)=>i),Ev=V(!1).on(el,(e,i)=>i),$v=V(null).on(Xt,()=>null).on(Xt.failData,(e,i)=>i.message).on(Ds.failData,(e,i)=>i.message),Pv=V(null).on(Xt.doneData,(e,i)=>i).on(Ds.doneData,(e,i)=>kv(e,i,!1)).on(il,()=>null),dt={$loading:Sv,$completed:Tv,$done:Ev,$error:$v,$paymentsStore:Pv};ze({from:nl,to:Xt});const Ns={getPaymentsFx:Xt,signContractFx:Ds},ss={signAgreement:Zr,setCompleted:tl,clearStore:il,getPayments:nl},Cv=Object.freeze(Object.defineProperty({__proto__:null,effects:Ns,events:ss,stores:dt},Symbol.toStringTag,{value:"Module"})),Ov=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Av=u.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${w.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,Dv=({date:e,value:i})=>t.jsxs(Av,{children:[t.jsxs($,{gap:"16px",children:[t.jsx(_t,{color:"grey",size:33,children:t.jsx(ht,{})}),t.jsxs($,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(ne,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ht,{})," "]})]}),Nv=u.div`
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
`,sl=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Nv,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ht,{})]})},Iv=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Rv=u.div`
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
`,Lv=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Iv(s.value),0).toFixed(1);return t.jsxs(Rv,{children:[t.jsxs($,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(la,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(ne,{fontSize:"1rem",width:"fit-content",children:t.jsx(sl,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ue,{size:"50px",text:"Нет платежей",image:t.jsx(ca,{})}),e.map((n,s)=>l.createElement(Dv,{...n,key:s}))]})]})},ol=()=>t.jsx(te,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),zv=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Mv=u.div`
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
`,Fv=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:p}=e,{open:h}=Z(),[f,g]=l.useState(!1),[x,m]=l.useState(!1),[v,b]=l.useState(!1),S=tt(dt.$error),D=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Подписан",info:oe(p)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:zv(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(m(!0),Ns.signContractFx(e.id),m(!1),b(!0))},N=()=>{h(t.jsx(ol,{}),"Не получается подписать")};return t.jsxs(Mv,{children:[t.jsx("div",{className:"contract-info",children:D.map(({info:z,text:I})=>t.jsx(St,{keyStr:I,value:z},z))}),r&&t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(gt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:x,completed:v,repeatable:!1,popUpFailureMessage:S??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:N,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs($,{gap:"8px",children:[t.jsx(gt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Ai,{onClick:()=>null,href:c??"",icon:t.jsx(vs,{}),width:"45px"})]})]})},Bv=u.div`
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
`,Hv=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Bv,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(da,{style:{color:"var(--green)"}}):t.jsx(pa,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(Ve,{}),onClick:()=>null,background:"transparent"})]}),Uv=u.div`
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
`,Wv=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Uv,{height:s,open:r,children:[t.jsx(Hv,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Vv=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Gv=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,p]=tt([dt.$done,dt.$completed,dt.$loading]),h=s||c?140:100,f=()=>ss.signAgreement(n),g=ss.setCompleted;return t.jsxs(Wv,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Vv,{children:[t.jsxs($,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:o}),t.jsx(ne,{children:oe(r)})]}),t.jsxs($,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Ai,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(vs,{}),isActive:!!e.file}),!(s||c)&&t.jsx(gt,{text:s||c?"Подписано":"Подписать",action:f,isLoading:p,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(te,{type:"success",title:"Подписано",icon:t.jsx(un,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(ne,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},qv=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Te,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(Yp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(ol,{}),t.jsx(te,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Gv,{data:s,isContractSigned:n},o))]}),Yv=u.div`
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
`,Wi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(Yv,{children:t.jsx(Ts,{loading:i,width:"300px",height:"300px",src:e??""})})},Kv=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,Jv=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Wi,{qrCode:e}):n===1?t.jsx(Wi,{qrCode:i}):t.jsx(Kv,{children:t.jsx(Ws,{pages:[{title:"Текущая задолженность",content:t.jsx(Wi,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(Wi,{qrCode:i})}],appearance:!1,currentPage:n})}),Xv=({type:e="horizontal",...i})=>{const{open:n}=Z(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(Jv,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(Kp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},Qv=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(sl,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},qn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),jt=()=>{const e=Oh.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(qn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(qn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(qn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},Zv=u.div`
    width: 100%;
`,ey=u.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,ty=u.div`
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
`,iy=u.div`
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
`,ny=u.div`
    position: relative;
`,sy=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:p}=jt(),{open:h}=Z(),[f,g]=l.useState(0),x=f===0?+n:+s,m=x>0,v=m?f===0?"Долг по договору":"Остаток по договору":x<0?"Переплата по договору":"У вас нет долга",b=f===0?`На ${oe(new Date)}`:`До ${oe(o)}`,S=()=>{h(t.jsx(Fv,{contract:i}),"Реквизиты договора")};return t.jsxs(Zv,{children:[t.jsx(W,{icon:t.jsx(Jp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(ey,{children:[t.jsx(Es,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(ty,{children:[t.jsxs($,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(Qv,{debt:x}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:v}),t.jsx(ne,{children:b})]})]}),m?t.jsx(Xv,{currentPage:f,type:p?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(ur,{color:"green",size:"40px"})]}),t.jsxs(iy,{children:[r&&t.jsx(Ai,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(ny,{children:[t.jsx(_,{onClick:S,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Dt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},al=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,oy=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Jt(String(o),"rub")})`},ay=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return al(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:oy}],ry=({paygraph:e})=>t.jsxs($,{d:"column",children:[t.jsx(W,{icon:t.jsx(Xp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(st,{columns:ay(),data:e??[],maxOnPage:3})]}),Vi=({contracts:e})=>e?t.jsx(Ov,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,p=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx($,{gap:"8px",children:t.jsx($,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор № ",o," от ",oe(d,"numeric")]})})}),t.jsx(sy,{data:i}),t.jsx(Lv,{payments:c??[]}),t.jsx(ry,{paygraph:r}),t.jsx(qv,{isDormitory:p,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(ve,{margin:"0",width:"100%"})]},o)})}):null,Is=()=>{const[e,i,n]=tt([dt.$error,dt.$loading,dt.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{U.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Me,{loading:i,load:Ns.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(wt,{children:[t.jsx(te,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ue,{text:"Нет данных"}),s==="both"&&t.jsx(Ws,{pages:[{title:"Общежитие",content:t.jsx(Vi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Vi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Vi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Vi,{contracts:n==null?void 0:n.education})]})})},ly=Object.freeze(Object.defineProperty({__proto__:null,default:Is},Symbol.toStringTag,{value:"Module"})),cy=u.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,x$=u.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,m$=u.div`
    width: 100%;
`,dy=u.div`
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 100px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`,py=u.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.2s;
    opacity: ${({$loading:e})=>e?1:0};
    visibility: ${({$loading:e})=>e?"visible":"hidden"};
    transform: scale(${({$loading:e})=>e?"1":"0.98"});
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    img {
        width: 40px;
    }
`,uy=u.div`
    transition: 0.2s;
    height: 100%;
`,hy=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`,gy=({children:e,load:i,loading:n,error:s,data:o,deps:a=[],couldBeReloaded:r})=>(l.useEffect(()=>{!o&&!n&&i()},a),t.jsx(dy,{children:o?!s&&t.jsx(uy,{children:e}):t.jsx(py,{$loading:!!s||!o,children:s?t.jsx(hy,{children:t.jsx(ue,{text:s,children:r&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(gn,{})})})}):t.jsx(Ge,{})})})),rl=k(),ll=k(),Ti=L(async()=>{const{data:e}=await lg();if(!(e!=null&&e.map))throw new Error("Не удалось загрузить подразделения");return e});P({clock:ll,target:Ti});const fy=Ti.pending,xy=k(),my=V(null).on(rl,(e,i)=>i),by=V(null).on(Ti.doneData,(e,i)=>i),vy=V(null).on(Ti.failData,(e,i)=>i.message).on(Ti,()=>null),Rs={setSubdivisionPath:rl,getSubdivisions:ll,clearSubdivisionData:xy},Qt={subdivisionPath:my,subdivisions:by,error:vy,pedningGetSubdividions:fy},cl=({item:e,parents:i})=>{var p;const n=et(),o=Tn().get("fio")||"",a=e.subdivs,r=tt(Qt.subdivisionPath),[c,d]=l.useState(!1);return l.useEffect(()=>{d(!!(r&&r.some(h=>h.name===e.name)))},[r]),t.jsxs($,{p:`5px 0 5px ${i.length*15}px`,d:"column",children:[t.jsx(yy,{$chosen:!!(r&&((p=r[0])==null?void 0:p.name)===e.name),onClick:()=>{Rs.setSubdivisionPath([e,...i]),n.push({search:new URLSearchParams({subdivision:e.name,fio:o}).toString()})},children:t.jsxs($,{ai:"center",jc:"space-between",w:"100%",gap:"5px",children:[e.name,a.length>0&&t.jsx(_,{icon:c?t.jsx(ua,{size:20}):t.jsx(Ze,{size:20}),width:"20px",height:"20px",background:"transparent",onClick:h=>{h.stopPropagation(),d(f=>!f)}})]})}),c&&a.map(h=>t.jsx(cl,{item:h,parents:[e,...i]},h.name))]})},yy=u.div`
    background-color: ${({$chosen:e})=>e?"var(--theme-1t)":"transparent"};
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,_y=u.div`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    min-height: 110px;
    width: 100%;
    padding-left: ${({isEmployee:e})=>e?"125px":"20px"};

    ${X.isNotMobile} {
        padding-left: ${({isEmployee:e})=>e?"180px":"0"};
    }

    @media (max-width: 800px) {
        padding-bottom: 0;
    }
`,wy=u.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`,jy=u.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${X.isNotMobile} {
        padding: 35px 20px 10px ${({isEmployee:e})=>e?"180px":"0"};
    }
`,ky=u.h3`
    font-size: 1.17rem;
    line-height: 28px;
`,Sy=u.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`,Ty=u.div`
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
`,Ey=u.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${X.isMobile} {
        top: 95px;
        left: 10px;
    }
`,os=u($)`
    overflow-x: hidden;
    padding-right: 10px;
    ${X.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${X.isTablet} {
        height: calc(100vh - 300px);
    }
`,$y=()=>{const{subdivisions:e}=tt({subdivisions:Qt.subdivisions});return e?t.jsx(os,{d:"column",children:e.map(i=>t.jsx(cl,{item:i,parents:[]},i.name))}):null},as=e=>e.split(" ").map(i=>i[0]),Ne=(e,i)=>{const n=as(e),s=w[Eh[n[0]]];return s==null?void 0:s[i??"main"]},Py=u.div`
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
`,Cy=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Mt({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:p,icon:h,avatarModal:f,onClick:g,borderRadius:x,background:m}){const[v,b]=l.useState(!0),S=as(i)[0]+(as(i)[1]??""),{open:D}=Z(),j=T=>{f?D(t.jsx(Mt,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(T)};return t.jsxs(Py,{selected:e,width:s,height:o,marginRight:a,background:m??Ne(i),boxShadow:d,border:p,onClick:j,borderRadius:x,children:[n&&v?t.jsx(Cy,{loading:"lazy",round:!0,onLoadedData:()=>b(!0),onError:()=>b(!1),src:n}):t.jsx("div",{className:"name",children:S}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Ue,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Dt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const an=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Gi=({title:e,items:i,action:n})=>t.jsxs($,{d:"column",ai:"flex-start",gap:"7px",children:[t.jsx(ne,{children:e}),i.length>0?i.map(s=>t.jsxs(Oy,{onClick:()=>n("fio"in s?s:null),children:["fio"in s&&t.jsx(Mt,{name:s.fio,avatar:s.avatar,width:an("horizontal","middle"),height:an("horizontal","middle"),marginRight:"7px"}),"fio"in s?s.fio:s.name]},"fio"in s?s.fio+s.post:s.name)):t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(bs,{})})]}),Oy=u.button`
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    text-align: left;
    width: 100%;
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,Ay=({title:e,children:i})=>i?t.jsxs($,{d:"column",ai:"flex-start",jc:"flex-start",gap:"10px",children:[t.jsx(ne,{fontSize:"0.9rem",children:e}),t.jsx(Dy,{children:i})]}):null,Dy=u.p`
    padding-left: 14px;
`,Ny=u.div`
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
`,dl=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Ny,{width:i,height:n,color:Ne(e,"dark1"),color2:Ne(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"light2")})})]})}),Mi=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),qi=({title:e,info:i,isEmployee:n,avatar:s})=>{const{close:o}=Z(),{isMobile:a}=jt();return t.jsxs($,{d:"column",children:[t.jsxs(_y,{isEmployee:!!n,children:[t.jsx(dl,{fullName:e,height:"200px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),n&&t.jsx(Ey,{children:t.jsx(Mt,{avatarModal:!0,border:!0,name:e,avatar:s,width:a?"110px":"150px",height:a?"110px":"150px",marginRight:"0"})}),t.jsx(ky,{children:e})]}),t.jsx(wy,{children:t.jsx(Te,{minWidth:"100%",direction:"horizontal",showPages:!0,gap:20,children:i.map(({subtitle:r,attributes:c})=>{const d=c.find(p=>p.id==="jobType");return t.jsxs(jy,{isEmployee:!!n,children:[r&&t.jsx(Sy,{children:r}),c.map(({title:p,text:h,id:f})=>t.jsx(Ay,{title:p,children:h?f==="email"?t.jsx("a",{href:`mailto:${h}`,children:h}):f==="innerPhone"?h.split("; ").map((g,x,m)=>t.jsx("a",{href:`tel:+7(495) 223-05-23,${g}`,children:x===m.length-1?g:`${g}; `},g)):f==="mobile"?t.jsx("a",{href:`tel:${h}`,children:h}):t.jsx(t.Fragment,{children:h}):"-"},p))]},r?e+r+(d==null?void 0:d.text):e)})},e)}),n&&t.jsxs(Ty,{children:[t.jsx(ee,{to:Mi(si,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(bt,{}),text:"Расписание",onClick:()=>{o()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(xn,{}),text:"Написать",onClick:()=>o(),width:"100%",background:"var(--theme-4)",isActive:!1})]})]})},pl=(e,i)=>{if(e.length===0)return[];const n=[];return e.forEach(s=>{var a,r;(r=(a=s.head)==null?void 0:a.fio)!=null&&r.toLowerCase().includes(i)&&n.push(s.head),s.staff.forEach(c=>{c.fio.toLowerCase().includes(i)&&n.push(c)});const o=pl(s.subdivs,i);n.push(...o)}),n.filter((s,o,a)=>o===a.findIndex(r=>r.fio===s.fio))},Yn=e=>e.job.map(i=>({subtitle:i.subdivision+" • "+i.post,attributes:[{id:"jobType",title:"Тип работы",text:i.jobType},{id:"email",title:"Корпоративная электронная почта",text:i.email},{id:"innerPhone",title:"Внутренний телефон",text:i.phone_inner},{id:"mobile",title:"Служебный мобильный телефон",text:i.phone_mobile},{title:"Адрес рабочего места",text:i.address},{title:"Номер кабинета",text:i.room}]})),Iy=()=>{var d;const e=Tn(),i=e.get("fio")||"",n=e.get("subdivision")||"",{subdivisionPath:s,subdivisions:o}=tt({subdivisionPath:Qt.subdivisionPath,subdivisions:Qt.subdivisions}),a=s==null?void 0:s[0],{open:r}=Z(),c=l.useMemo(()=>i&&o?pl(a?[a]:o,i.toLowerCase()):[],[i,n,o]);return i&&o?t.jsx(os,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:t.jsx(Gi,{title:"Сотрудники",items:c,action:p=>{r(t.jsx(qi,{title:p.fio,info:Yn(p),avatar:p.avatar,isEmployee:!0}))}})}):a?t.jsxs(os,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:[t.jsx(Gi,{title:"Информация",items:[a],action:()=>{r(t.jsx(qi,{title:a.name,info:[{attributes:[{title:"Руководитель",text:a.head.fio},{title:"Корпоративная электронная почта подразделения",text:a.email},{id:"innerPhone",title:"Внутренний телефон",text:a.phone_inner},{id:"mobile",title:"Прямой телефон",text:a.phone_direct},{title:"Адрес рабочего места",text:a.address},{title:"Номер кабинета",text:a.room}]}]}))}}),((d=a==null?void 0:a.head)==null?void 0:d.fio)&&t.jsx(Gi,{title:"Руководитель",items:[a.head],action:p=>{r(t.jsx(qi,{title:p.fio,info:Yn(p),avatar:p.avatar,isEmployee:!0}))}}),a.staff.filter(p=>p.fio!==a.head.fio).length>0&&t.jsx(Gi,{title:"Сотрудники",items:a.staff,action:p=>{r(t.jsx(qi,{title:p.fio,info:Yn(p),avatar:p.avatar,isEmployee:!0}))}})]}):null},mo=u.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    row-gap: ${({rowGap:e})=>e};
    column-gap: ${({columnGap:e})=>e};
    padding: ${({padding:e})=>e};
`,ul=({value:e,placeholder:i,loading:n,hintIcon:s,leftIcon:o,focusOn:a,width:r,transformRequest:c,setValue:d,request:p,onValueEmpty:h,customMask:f,onHintClick:g,size:x})=>{const[m,v]=l.useState([]),[b,S]=l.useState(!1);return l.useEffect(()=>{e.length>0?(S(!0),p(e).then(D=>{v(D.data.items.map(j=>{const T=c?c(j):j;return{id:T,title:T,value:T,icon:s}})),S(!1)}).catch(()=>{S(!1),v([])})):(S(!1),v([]),h==null||h())},[e]),t.jsx(Di,{value:e,setValue:d,placeholder:i,hints:m,width:r??"180px",focusOn:a,leftIcon:o,loading:b&&n,onHintClick:g,customMask:f,size:x})},hl=(e,i)=>{if(i==="")return null;const n=[],s=e.find(o=>o.name===i);if(s)n.push(s);else{for(const o of e){const a=hl(o.subdivs,i);a&&a.length>0&&n.push(...a,o)}return n}return n},bo=(e,i)=>{const n=hl(e,i)||null;Rs.setSubdivisionPath(n)},gl=()=>{const e=Tn(),i=e.get("subdivision")||"",n=e.get("fio")||"",s=et(),[o,a]=tt([Qt.subdivisions,Qt.error]);l.useEffect(()=>{i&&(o!=null&&o.find)&&r({id:i,value:i,title:i})},[o]);const r=m=>{o&&bo(o,(m==null?void 0:m.value)??"")},{isMobile:c}=jt(),[d,p]=l.useState(""),h=m=>{s.push({search:new URLSearchParams({subdivision:i,fio:m}).toString()})},[f,g,x]=Sn({onDebounce:h,delay:400,defaultValue:n,triggerDelay:200,triggerOn:m=>(p(m),d!==m),onClear:h});return c&&s.push(`${Nn}/${i}`),t.jsx(cy,{children:t.jsx(wt,{children:t.jsxs($,{d:"column",gap:"15px",children:[t.jsxs(mo,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(ul,{width:"100%",value:i,setValue:m=>{s.push({search:new URLSearchParams({subdivision:m,fio:n}).toString()}),m===""&&o&&bo(o,m)},onHintClick:r,placeholder:"Структура",request:ks}),!c&&t.jsx(Di,{value:f,setValue:g,loading:x,placeholder:"Сотрудник"})]}),t.jsx(gy,{data:o,error:a,load:()=>{Rs.getSubdivisions()},couldBeReloaded:!0,children:t.jsxs(mo,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx($y,{}),!c&&t.jsx(Iy,{})]})})]})})})},Ry=Object.freeze(Object.defineProperty({__proto__:null,default:gl},Symbol.toStringTag,{value:"Module"})),Ly=50;function zy(e){const{getFx:i,limit:n=Ly,reset:s=[]}=e,o=k(),a=k(),r=V(null),c=V(null);c.on(i.doneData,(g,x)=>[...g||[],...x.results||[]]),c.reset([o,...s]);const d=V(1);d.on(i.doneData,g=>++g),d.reset([o,...s]);const p=i.pending,h=V(!1);h.reset([o,...s]);const f=hn(c,h,(g,x)=>!!(g!=null&&g.length)&&!x);return P({clock:o,fn:g=>({...g,limit:g.limit||n,page:g.page??1}),target:[i,r]}),P({clock:a,source:{lastArgs:r,page:d},fn:({lastArgs:g={},page:x})=>({...g,limit:n,page:x}),target:i}),P({clock:i.doneData,source:r,fn:(g,x)=>!!g&&(x.results||[]).length<g.limit,target:h}),{$items:c,$isPending:p,$hasNext:f,next:a,load:o}}const My=L(async e=>{const{search:i,page:n,limit:s,filter:o}=e,a=(o==null?void 0:o.title)==="Все"?"":(o==null?void 0:o.title)??"",{data:r}=await Ba(i??"",a,n,s);return{results:r.items}}),vo=zy({getFx:My,limit:50}),Fy=({setExternalValue:e,inputAppearance:i,placeholder:n,validationCheck:s,searchApi:o,triggerSearchOn:a,hints:r})=>{const c=async g=>{await o(g)},[d,p,h]=Sn({onDebounce:c,onClear:c,delay:1e3,triggerDelay:0,deps:a}),f=g=>{p(g),e&&e(g)};return t.jsx(Di,{value:d??"",setValue:f,inputAppearance:i,placeholder:n,validationCheck:s,loading:h,hints:r})},By=u.div`
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
`,Hy=50;function Uy({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Hy}){const{data:{user:p}}=be.useUser();let h="";const f=l.useCallback(g=>{const x=g.currentTarget.clientHeight,m=g.currentTarget.scrollHeight,v=g.currentTarget.scrollTop;m-d<v+x&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ue,{text:"Нет результатов",children:c}):t.jsxs(By,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,x)=>{var v,b;const m=r?h!==((v=g.fio)==null?void 0:v.charAt(0)):!1;return m&&(h=((b=g.fio)==null?void 0:b.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[m&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(ve,{})]}),i(g,(p==null?void 0:p.id.toString())===g.id,x)]})})}),n&&s&&t.jsx(Ge,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}const yo=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},fl=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},Wy=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Vy=u.div`
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
`,Gy=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:p,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",x=fl(h,n,s,o);return t.jsxs(Vy,{children:[t.jsx(dl,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Mt,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ne,{fontSize:"0.9rem",children:t.jsx(Ie,{words:x})}),t.jsx(St,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(St,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(St,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(St,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(St,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},qy=u.div`
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

    ${X.isMobile} {
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
`,xl=e=>{const{children:i}=e;return t.jsxs(qy,{children:[t.jsx(Gy,{...e}),t.jsx("div",{className:"buttons",children:i})]})},Yy=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,Ky=()=>t.jsxs(Yy,{children:[t.jsx(J,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(J,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(J,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),ml=k(),bl=k(),Jy=V(!1).on(bl,()=>!0).on(ml,()=>!1),_o={close:ml,open:bl},Xy={$isModalOpen:Jy},Ls=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Qy=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=tt(Xy.$isModalOpen),d=a.length>1,p=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((v,b)=>{v&&(i?(r(()=>[...a,v]),o(()=>[...s,b??""])):(r(()=>[v]),o(b?[b]:[])),n(()=>!0),_o.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),_o.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),x=l.useMemo(()=>s[s.length-1],[s]),m=l.useCallback(v=>{v&&r([...a,v])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Ls.Provider,{value:{back:p,open:h,close:f,isOpen:i,canBack:d,component:g,title:x,setComponent:m},children:e})},Z=()=>{const{open:e,isOpen:i,...n}=l.useContext(Ls);return{open:e,isOpen:i,...n}},Zy=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Ls);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},e1=u.div`
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
`,An=u.div`
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
`,t1=u.div`
    padding-top: 30px;
`,i1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Zy(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return xr([27],o),ii(r,()=>{o()}),t.jsx(An,{isOpen:c,children:t.jsxs(e1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(Pi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Qe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(t1,{children:i})]})})},n1=le.memo(i1),vl=e=>{if(e)return()=>{ct.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(M.Token,e),location.reload()}})}},s1=e=>{const{close:i}=Z(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Ne(s,"main")}, ${Ne(s,"dark1")})`;return t.jsxs(xl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(ee,{to:Mi(si,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(bt,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(xn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:vl(n)})]})},o1=e=>{const{close:i}=Z(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Ne(s,"dark1")}, ${Ne(s,"main")})`;return t.jsxs(xl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(ee,{to:Mi(si,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(bt,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(xn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:vl(n)})]})},a1=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?Wy(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${w.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>yo(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${yo(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Dn=e=>{const{open:i}=Z(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:p,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:x="middle"}=e,m=fl(h,n,d,p);if(f)return t.jsx(Ky,{});const v=b=>{r?r(b):h||(Re.close(),i(n==="staff"?t.jsx(o1,{...e}):t.jsx(s1,{...e})))};return t.jsxs(a1,{orientation:g,size:x,onClick:v,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Mt,{name:o,avatar:s,width:an(g,x),height:an(g,x),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ie,{words:m})})]})]})},r1=({filter:e,paginationList:i,noResultContent:n})=>{const{$items:s,$isPending:o,$hasNext:a,next:r,load:c}=i,d=ge(o),p=ge(a),h=()=>{r({filter:e})},f=()=>{c({filter:e})};return t.jsx(Uy,{items:s.getState(),renderItem:l1,handleNext:h,isPending:d,hasNext:p,filter:e,handleReload:f,showAlphabetLetters:!0,noResultContent:n})};function l1(e,i,n){return t.jsx(Dn,{name:e.fio,type:e.division?"staff":"stud",avatar:e.avatar,faculty:e.faculty,group:e.group,isMe:i,division:e.division,indexNumber:(n??0)+1},n)}const c1=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`,d1=({title:e,searchPlaceholder:i,paginationList:n,defaultFilter:s,noResultContent:o,filterPlaceholder:a,filterRequest:r,underSearchText:c,customMask:d,search:p=!0})=>{const{load:h}=n,[f,g]=l.useState(s),[x,m]=l.useState({id:f,value:f,title:f}),v=c==null?void 0:c(x),b=async j=>{await h({filter:x,search:j})},S=j=>{m(j??null)},D=()=>{m(null)};return t.jsxs(c1,{children:[e&&t.jsx(W,{size:2,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"search-and-filter",children:[p&&t.jsx(Fy,{triggerSearchOn:[(x==null?void 0:x.id)??""],placeholder:i??"Поиск",searchApi:b,validationCheck:!0}),r&&t.jsx(ul,{value:f,setValue:g,onHintClick:S,onValueEmpty:D,customMask:d,placeholder:a??"Поиск",request:r})]}),t.jsx(ne,{visible:!!v,children:v}),t.jsx(r1,{paginationList:n,noResultContent:o,filter:x})]})},p1=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,zs=()=>{var f;const{data:{user:e}}=be.useUser(),{$isPending:i,$items:n}=vo,s=Qp(),o=et(),a=ge(i),r=ge(n),c=s.params.filter??((f=e==null?void 0:e.subdivisions)==null?void 0:f[0].subdivision)??"",d=g=>g!=null&&g.title?`Кафедра: ${g==null?void 0:g.title} • Всего: ${(r==null?void 0:r.length)??0}`:null,{isMobile:p}=jt(),h=(e==null?void 0:e.user_status)==="staff";return!p&&h&&o.push(`${wl}?subdivision=${c}`),t.jsx(Me,{load:function(){},loading:a,error:null,data:r,children:t.jsx(p1,{children:t.jsx(wt,{children:t.jsx(d1,{searchPlaceholder:"Поиск сотрудников",paginationList:vo,filterRequest:ks,defaultFilter:c,filterPlaceholder:"Подразделения",underSearchText:d})})})})},yl=Object.freeze(Object.defineProperty({__proto__:null,default:zs},Symbol.toStringTag,{value:"Module"})),E="/applications",re="/hr-applications",wo="/staff_orders",jo="/staff_blanks",u1="/ad_logins",Ms="/doclist",ko="/pps_vote2020",h1="/children",_l="/pps_contest",g1="/electronic-statements",_e="/onboarding",f1="/structure-of-the-university",x1="/addresses-and-contacts",m1="/brandbook",b1="/wifi-at-the-university",v1="/health-care",y1="/psychological-help",_1="/social-environment",w1="/vacation",li="/kpi_pps",ci="/kpi_admin",So="/sc_news",To="/oop",Eo="/centers",j1="/helpful-information",k1="/download-agreements",$o="/physical-education/main",wl="/all-staff",S1="/physical-education/student/:studentId",jl=E+"/contact-info-actualization",kl=E+"/contact-info-actualization-test",Sl=E+"/data-verification",Tl=E+"/issuance-of-licenses",El=E+"/getting-computer-equipment",$l=E+"/connecting-computer",Pl=E+"/printer-maintenance",Cl=E+"/question-sed",Ol=E+"/question-personal-account",Al=E+"/other-it-services",Dl=E+"/certificate-from-the-place-of-work",Nl=E+"/visa-certificate",Il=E+"/certificate-of-work-experience",Rl=E+"/number-of-unused-vacation-days",Po=E+"/contact-details",T1=E+"/contact-details/:guid",Ll=E+"/edit-phonebook-subdivision",zl=E+"/edit-phonebook-inner-phone",Ml=E+"/edit-phonebook-email",Fl=E+"/copy-of-the-employment-record",Bl=E+"/copies-of-documents-from-the-personal-file",Hl=E+"/work-on-the-terms-of-external-concurrency",Ul=E+"/certificate-time-parental-leave",Wl=E+"/arbitrary-request",Vl=E+"/courier",Gl=E+"/persona-income-tax-reference",ql=E+"/payment-of-child-birth-allowance",Yl=E+"/payment-for-child-care",Kl=re+"/part-time-employment/",E1=re+"/dismissal/:id",$1=re+"/work-transfer/:id",P1=re+"/extra-holiday-coll",C1=re+"/holiday-planning",O1=re+"/holiday-transfer/:id",A1=re+"/holiday-work/:id",D1=re+"/work-transfer-change-rate/:id",N1=re+"/medical-examination",rs=re+"/buffer-dismissal",ls=re+"/buffer-holiday-planning",cs=re+"/buffer-holiday-transfer",ds=re+"/buffer-holiday-work",ps=re+"/buffer-medical-examination",Zi=re+"/buffer-work-transfer",Jl=E+"/living-in-residential-premises",Xl=E+"/guests-accomodation-on-campus",Ql=E+"/guests-passage-to-campus",Zl=E+"/relocation",ec=E+"/termination-of-agreement",tc=E+"/issuance-of-pass",ic=E+"/guest-pass",nc=E+"/certification-and-issuance-of-docs",sc=E+"/deferment-from-conscription",oc=E+"/certified-copies-of-military-docs",K=()=>we({oldVersionUrl:"/sprav"}),Co=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(Q,{}),path:_e,Component:r0,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...bc,"contact-details":{id:"contact-details",title:"Контактные данные",icon:t.jsx(A,{}),color:"blue",path:Po,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Gx,isTemplate:!1,group:"GENERAL",show:!O},"contact-details-form":{id:"contact-details-form",title:"Контактные данные",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:T1,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):qx,isTemplate:!1,group:"GENERAL",isSubPage:!0,show:!1,backButtonText:"Назад",fallbackPrevPage:Po},"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(la,{}),path:k1,Component:Qr,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(ou,{}),path:h1,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!O},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(Q,{}),path:g1,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(ha,{}),path:hc,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ht,{}),path:rn,Component:Is,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(Q,{}),path:_l,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(ga,{}),path:li,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${li==null?void 0:li.slice(1,li.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(au,{}),path:ci,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ci==null?void 0:ci.slice(1,ci.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(ru,{}),path:So,isOldLkPage:!0,Component:()=>we({oldVersionUrl:So}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(A,{}),path:wo,isOldLkPage:!0,Component:()=>we({oldVersionUrl:wo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Kt,{}),path:jo,isOldLkPage:!0,Component:()=>we({oldVersionUrl:jo}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:Ms,Component:Yx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(ra,{}),path:w1,Component:Pm,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:$o,pageSize:"big",Component:im,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(A,{}),color:"pink",show:!1,path:S1,Component:nm,isTemplate:!1,fallbackPrevPage:$o,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(ki,{}),path:To,isOldLkPage:!0,Component:()=>we({oldVersionUrl:To}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(ki,{}),path:Eo,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Eo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(A,{}),path:j1,Component:$s,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Ki,{}),path:ko,isOldLkPage:!0,Component:()=>we({oldVersionUrl:ko}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:E,Component:Kx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(A,{}),path:re,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Cm,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:Sl,Component:Er,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Ki,{}),path:Nn,Component:zs,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],show:!1},"all-staff":{id:"all-staff",title:"Сотрудники",icon:t.jsx(Ki,{}),path:wl,Component:gl,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],pageSize:"big"}}),Oo=()=>({...vc,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Tl,icon:t.jsx(A,{}),color:"blue",Component:O?K:om,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:rs,icon:t.jsx(A,{}),color:"blue",Component:O?K:Nr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:ds,icon:t.jsx(A,{}),color:"blue",Component:O?K:bb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:ps,icon:t.jsx(A,{}),color:"blue",Component:O?K:tv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:ls,icon:t.jsx(A,{}),color:"blue",Component:O?K:Cb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:cs,icon:t.jsx(A,{}),color:"blue",Component:O?K:Hb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Zi,icon:t.jsx(A,{}),color:"blue",Component:O?K:gv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:Kl,icon:t.jsx(A,{}),color:"blue",Component:O?K:Om,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:A1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Nm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ds},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:N1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Im,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ps},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:C1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:ls},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:O1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:cs},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:$1,icon:t.jsx(A,{}),color:"blue",Component:O?K:zm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Zi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:D1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Mm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Zi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:P1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Dm,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:E1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Am,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:rs},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(A,{}),color:"blue",path:El,Component:sm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(A,{}),color:"blue",path:$l,Component:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(A,{}),color:"blue",path:Pl,Component:gm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(A,{}),color:"blue",path:Cl,Component:xm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(A,{}),color:"blue",path:Ol,Component:fm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(A,{}),color:"blue",path:Al,Component:dm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(A,{}),color:"blue",path:Dl,Component:Ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(A,{}),color:"blue",path:Nl,Component:mm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(A,{}),color:"blue",path:Il,Component:O?K:Xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(A,{}),color:"blue",path:Rl,Component:am,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-subdivision":{id:"edit-phonebook-subdivision",title:"Внесение изменений данных подразделения в телефонном справочнике",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:Ll,Component:rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,keywords:["изменение данных подразделения в телефонном справочнике"]},"edit-phonebook-inner-phone":{id:"edit-phonebook-inner-phone",hiddenTitle:!0,title:"Запрос на изменение внутреннего телефона",icon:t.jsx(A,{}),color:"blue",path:zl,Component:lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-email":{id:"edit-phonebook-email",hiddenTitle:!0,title:"Запрос на изменение корпоративной электронной почты",icon:t.jsx(A,{}),color:"blue",path:Ml,Component:cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(A,{}),color:"blue",path:Fl,Component:O?K:em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(A,{}),color:"blue",path:Bl,Component:O?K:Wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(A,{}),color:"blue",path:Hl,Component:O?K:bm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(A,{}),color:"blue",path:Ul,Component:O?K:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(A,{}),color:"blue",path:Wl,Component:O?K:Jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},courier:{id:"courier",title:"Курьер",icon:t.jsx(A,{}),color:"blue",path:Vl,Component:O?K:tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(A,{}),color:"blue",path:Gl,Component:O?K:hm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(A,{}),color:"blue",path:ql,Component:O?K:um,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(A,{}),color:"blue",path:Yl,Component:O?K:pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(A,{}),color:"blue",path:jl,Component:go,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,show:!1,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(A,{}),color:"blue",path:kl,Component:O?go:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,show:!1},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:Sl,Component:Er,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(A,{}),color:"blue",path:Jl,Component:O?K:vm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(A,{}),color:"blue",path:Xl,Component:O?K:ym,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(A,{}),color:"blue",path:Ql,Component:O?K:_m,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(A,{}),color:"blue",path:Zl,Component:O?K:wm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(A,{}),color:"blue",path:ec,Component:O?K:jm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(A,{}),color:"blue",path:tc,Component:O?K:km,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(A,{}),color:"blue",path:ic,Component:O?K:Sm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(A,{}),color:"blue",path:nc,Component:O?K:Tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(A,{}),color:"blue",path:sc,Component:O?K:Em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(A,{}),color:"blue",path:oc,Component:O?K:$m,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ke,{to:_e})),icon:t.jsx(Kt,{}),isTemplate:!1,path:_1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ke,{to:_e})),icon:t.jsx(Zp,{}),isTemplate:!1,path:y1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ke,{to:_e})),icon:t.jsx(eu,{}),isTemplate:!1,path:v1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ke,{to:_e})),icon:t.jsx(tu,{}),isTemplate:!1,path:b1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ke,{to:_e})),icon:t.jsx(iu,{}),isTemplate:!1,path:m1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(nu,{}),path:x1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ke,{to:_e})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(su,{}),path:f1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ke,{to:_e})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0}}),ac="/login",I1="/forgot-password",R1="/medical-certificate",L1="/vaccination",bi="/all",Fs="/home",Bs="/profile",Hs="/chat",z1="/messages",b$=Hs+"/:chatId",rc="/electronic-interaction-agreement",rn="/payments",Ft="/schedule",lc="/all-students",M1="/all-students/:filter",Nn="/all-teachers",F1="/all-teachers/:filter",Us="/feedback",cc="/cant-access",dc="/memo-freshmen",pc="/get-your-login",uc="/memo-teacher",je="/settings",v$=je+"/:id",B1=je+"/appearance",H1=je+"/personal",U1=je+"/security",W1=je+"/home-page",V1=je+"/customize-menu",G1=je+"/notifications",q1="/instructions",hc="/project-activity",Y1="/softskills",gc="/alerts",fc="/lk-notifications",xc="/helpful-information",si=Ft+"/:page/:filter",mc=Ft+"/current",K1=Ft+"/semestr",J1=Ft+"/session",X1=Ft+"/retake",Q1=xc+"/:infoType";var Z1=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(Z1||{});const e_=[{id:0,title:"",icon:"",path:ac,Component:Fx},{id:1,title:"",icon:"",path:I1,Component:Wm},{id:2,title:"Обратная связь",icon:t.jsx(ki,{}),path:Us,Component:Pr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Ct,{}),path:cc,Component:Hm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:pc,Component:s0},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:dc,Component:o0},{id:6,title:"Вниманию сотрудников!",icon:"",path:uc,Component:a0}],bc={all:{id:"all",title:"Все разделы",icon:t.jsx(uu,{}),path:bi,Component:Fm,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(ma,{}),path:je,Component:Zm,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:Ms,Component:n0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(ba,{}),path:gc,Component:Vm,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(xa,{}),path:Fs,Component:Gm,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(va,{}),path:Bs,Component:Ym,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(mn,{}),path:fc,Component:l0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(ya,{}),path:rc,Component:Um,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(hu,{}),path:Hs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:z1}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(bt,{}),path:Ft,menuPath:mc,Component:Cr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Kt,{}),path:lc,Component:$r,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(ki,{}),path:Us,Component:Pr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(gu,{}),path:q1,Component:qm,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(_a,{}),path:L1,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!O}},t_={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(bt,{}),path:mc,Component:Km,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(ys,{}),path:K1,Component:Jm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(fa,{}),path:J1,Component:Xm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(gn,{}),path:X1,Component:Qm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},vc={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(bt,{}),path:si,Component:Cr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...t_,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Kt,{}),path:M1,Component:$r,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Kt,{}),path:F1,Component:Bm,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(lu,{}),path:B1,Component:t0,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(cu,{}),path:H1,Component:e0,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(du,{}),path:U1,Component:i0,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(xa,{}),path:W1,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(pu,{}),path:V1,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(mn,{}),path:G1,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:je,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:Q1,Component:$s,color:"grey",isTemplate:!0,show:!1}},yc=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else U.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},_c=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},i_=(e,i,n,s)=>{if(i){const o=s.length+kh;if(n<o){U.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??bn;Oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else U.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},n_=(e,i,n)=>{if(i)if(n.includes(e))U.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{U.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},s_=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,o_=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,a_=e=>{var x,m,v;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=ti.useSettings(),{data:r}=be.useUser(),c=We.useMenu(),d=(x=a["settings-home-page"].property.pages)==null?void 0:x.find(b=>b===i),p=(m=a["settings-customize-menu"].property.pages)==null?void 0:m.find(b=>b===i),h=((v=r.user)==null?void 0:v.user_status)==="staff"?Oa:bn,f=()=>{yc(i,a),Re.close()},g=()=>{i_(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Re.close()};return t.jsxs(s_,{children:[t.jsxs("div",{className:"top",children:[t.jsx(_t,{color:o,size:22,children:n}),t.jsx(o_,{children:s})]}),t.jsx(ve,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(Ct,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{_c(i,a),Re.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(Ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),p?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(Ct,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>n_(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(Ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},wc=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Re.open({e:o,height:105,content:t.jsx(a_,{...e})})};return t.jsx(_,{icon:t.jsx(wa,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},jc=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},kc=u(nt)`
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
        background: ${w.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
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
        position: static;
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
                    box-shadow: 0 20px 110px 60px ${({color:e})=>w[e].main};
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
`,r_=u.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,Ao=e=>{var b;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:p,id:h,background:f,orientation:g="vertical"}=e,x=g==="vertical",{settings:m}=ti.useSettings(),v=!!((b=m["settings-home-page"].property.pages)!=null&&b.find(S=>S===h));return t.jsxs(kc,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&x&&t.jsxs(r_,{children:[d&&t.jsx(fn,{title:"Раздел в старом ЛК"}),c&&t.jsx(en,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(_t,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(fu,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",jc(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),p==="use"&&t.jsx(wc,{route:e}),p==="add"?v?t.jsx(_,{icon:t.jsx(Qe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>_c(h,m)}):t.jsx(_,{icon:t.jsx(Ot,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>yc(h,m)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},l_=u(kc)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,y$=()=>t.jsx(ee,{to:bi,onClick:()=>{ot.changeOpen({isOpen:!1,currentPage:bi.slice(1,bi.length)})},children:t.jsx(l_,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(_t,{color:"blue",children:t.jsx(xu,{})}),t.jsx("b",{children:"Все разделы"})]})})}),c_=u(ee)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,d_=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,p_=e=>{const{close:i}=Z(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(d_,{width:o==="vertical"?c:"100%",children:t.jsx(Ao,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),ot.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(c_,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(Ao,{...e,maxWordLength:r,mode:a})})},u_=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,h_=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ue,{text:"Ничего не было найдено"}):t.jsx(u_,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(p_,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),g_=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(ke(s.title).includes(ke(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>ke(a).includes(ke(e))))&&(n[s.id]=s),n},{}),f_=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,x_=u(ee)`
    width: 100%;
`,m_=({division:e})=>{const{close:i}=Z();return t.jsxs(f_,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(_t,{size:120,color:"purple",children:t.jsx(gi,{})}),t.jsx(ne,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(x_,{to:`${Nn}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(ja,{}),width:"100%",text:"Список"})})]})},b_=u.div`
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
`,v_=({division:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(m_,{division:e}),"Подразделение")};return t.jsx(b_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",children:[t.jsx(gi,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(Ze,{})]})})},y_=({divisions:e})=>!e||e.length===0?null:t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(v_,{division:i},i))}),__=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Do=u(ee)`
    width: 100%;
`,Sc=({group:e})=>{const{close:i}=Z();return t.jsxs(__,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(_t,{size:120,color:"lightBlue",children:t.jsx(ka,{})}),t.jsx(ne,{fontSize:"1.2rem",children:e})]}),t.jsxs($,{gap:"8px",onClick:i,children:[t.jsx(Do,{to:Mi(si,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(bt,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(Do,{to:`${lc}/${e}`,children:t.jsx(_,{icon:t.jsx(ja,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},w_=u.div`
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
`,j_=({group:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(Sc,{group:e}),"Группа")};return t.jsx(w_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",h:"50px",children:[t.jsx(ka,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(Ze,{})]})})},k_=({groups:e})=>e?t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(j_,{group:i},i))}):null,Kn=[{title:"Инструкции",links:[{link:R+"/storage/files/instruction_business_trip_docs.docx",title:"Инструкция для командируемых работников",icon:""},{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var Pe=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Pe||{});const Ut={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},S_=[{id:Pe.information,title:Ut[Pe.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Воинский учёт",visible:"student",links:[{title:"Военнообязанным и призывникам",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/"},{title:"Единый пункт призыва",visible:"student",href:"https://www.mos.ru/city/projects/prizyv/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Pe.security,title:Ut[Pe.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Pe.instructions,title:Ut[Pe.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Kn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.regulations,title:Ut[Pe.regulations],visible:"staff",content:[{title:"Положения",links:[...Kn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.orders,title:Ut[Pe.orders],visible:"staff",content:[{title:"Приказы",links:[...Kn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.courses,title:Ut[Pe.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],T_=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ke(a.title).includes(ke(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),E_=u.div`
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
`,$_=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s,visible:o},a)=>o==="staff"&&!i||o==="student"&&i?null:t.jsxs(E_,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Te,{gap:16,children:s.map(({title:r,href:c,visible:d},p)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:c,target:"_blank",rel:"noreferrer",children:r},r+p))})]},n+a))}):null;function us(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const P_=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,C_=u.div``,O_=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Tc=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(P_,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(C_,{children:e}),t.jsx(O_,{isOpen:o,children:i})]})},A_="2.3.0",Ec=()=>t.jsx(te,{icon:null,type:"info",title:A_,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ae=({color:e,children:i})=>t.jsx(_t,{color:e,children:i}),D_=()=>({info:t.jsx(Ae,{color:"grey",children:t.jsx(Xe,{})}),message:t.jsx(Ae,{color:"red",children:t.jsx(xn,{})}),alert:t.jsx(Ae,{color:"purple",children:t.jsx(ba,{})}),"payment-dorm":t.jsx(Ae,{color:"green",children:t.jsx(ht,{})}),"payment-ed":t.jsx(Ae,{color:"green",children:t.jsx(ht,{})}),"digital-services":t.jsx(Ae,{color:"red",children:t.jsx(A,{})}),"doc-for-review":t.jsx(Ae,{color:"blue",children:t.jsx(A,{})}),"hr-applications":t.jsx(Ae,{color:"green",children:t.jsx(A,{})}),"kpi-pps":t.jsx(Ae,{color:"pink",children:t.jsx(ga,{})}),schedule:t.jsx(Ae,{color:"pink",children:t.jsx(bt,{})}),"version-update":t.jsx(Ec,{}),"electronic-interaction":t.jsx(Ae,{color:"blue",children:t.jsx(ya,{})})}),N_=u(ee)`
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
`,I_=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,R_={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},L_={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},z_={small:"0px",middle:"1px",large:"2px",big:"3px"},$c=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:p,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:x=!0,fullText:m=!0,maxLetters:v=200,size:b="middle"})=>{const S=oe(o,"short"),{close:D}=Z(),[j,T]=l.useState(!1),N=I=>{I.stopPropagation(),I.preventDefault(),f?(T(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},z=()=>{a==null||a(),x&&It.clearById({id:e,pageId:c}),D()};return t.jsx(Tc,{forceState:!j,bottomMargin:h,children:t.jsxs(N_,{to:d??"",onClick:z,children:[t.jsx("span",{className:"left-icon",children:D_()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ne,{fontSize:"0.7rem",children:t.jsx(Ie,{words:[S??"",s??""]})}),t.jsxs($,{d:"column",gap:z_[b],ai:"flex-start",children:[t.jsx(I_,{fontSize:R_[b],children:m?i:us(i,v)}),t.jsx(ne,{fontSize:L_[b],children:m?n:us(n,v)})]})]}),p&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(Qe,{}),background:"var(--theme-2)",onClick:N,style:{borderRadius:"20px"}})]})})},Pc=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{It.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx($,{d:"column",children:e.map((o,a)=>l.createElement($c,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},ln=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,No=({people:e,type:i})=>!e||e.length===0?null:t.jsx($,{d:"column",children:e.map(n=>l.createElement(Dn,{name:n.fio,type:i,...n,key:n.id}))}),M_=()=>{const{allRoutes:e}=We.useMenu(),{notifications:i,removeNotificationLoading:n}=at.useLkNotifications(),{data:{user:s}}=be.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>S_.flatMap(({visible:z,content:I})=>z==="staff"&&o||z==="student"&&!o||z==="all"?I:[]),[o]),[r,c]=l.useState(null),[d,p]=l.useState(null),[h,f]=l.useState(null),[g,x]=l.useState(null),[m,v]=l.useState(null),[b,S]=l.useState(null),[D,j]=l.useState(null),T=[{title:"Разделы",content:t.jsx(h_,{pages:m,showNotFound:!1}),clear:()=>{v(null)},search:z=>{if(e){const I=g_(z,e);v(I)}},data:m},{title:"Студенты",content:t.jsx(No,{people:g,type:"stud"}),data:g,clear:()=>{x(null)},search:async z=>{const{data:I}=await fg(z,"",1,20);x(I.items)}},{title:"Сотрудники",content:t.jsx(No,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async z=>{const{data:I}=await Ba(z,"",1,20);f(I.items)}},{title:"Группы",content:t.jsx(k_,{groups:r}),data:r,clear:()=>{c(null)},search:async z=>{const{data:I}=await xg(z);c(I.items)}},{title:"Подразделения",content:t.jsx(y_,{divisions:d}),data:d,clear:()=>{p(null)},search:async z=>{const{data:I}=await ks(z);p(I.items)}},{title:"Уведомления",content:t.jsx(Pc,{notifications:b,loadingRemove:n}),clear:()=>{S(null)},search:z=>{const I=i.filter(se=>ke(se.title).includes(z));S(I)},data:b},{title:"Полезная информация",content:t.jsx($_,{blocks:D,isStaff:o}),clear:()=>{j(null)},search:z=>{const I=T_(z,a);j(I)},data:D}];return[(()=>{const{content:z,clear:I,data:se}=T.reduce((H,Y)=>(ln(Y.data)&&(H.data.push(Y.data),H.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:Y.title}),Y.content,t.jsx(ve,{})]}))),H.clear.push(Y.clear),H),{content:[],clear:[],data:[]});return{title:"Все",content:z,clear:()=>I.map(H=>H()),search:async H=>{H.length<=8&&/\d|[-]/g.test(H)?await T[3].search(H):(T[0].search(H),T[5].search(H),T[6].search(H),ln(T[0].data)===0&&(await T[1].search(H),await T[2].search(H),await T[4].search(H)))},data:se}})(),...T]},F_=()=>JSON.parse(localStorage.getItem(M.SearchHistory)??"[]"),B_=()=>{const e=M_(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>F_(),[]),r=async g=>{e[i].clear();const x=br(g)?mr(g):g;await e[i].search(x),x.length>0&&!a.includes(x)&&(a.unshift(x),a.length>8&&a.pop(),localStorage.setItem(M.SearchHistory,JSON.stringify(a)))},[c,d,p]=Sn({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!p&&!c.length,f=!!c.length&&!p&&!!ln(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},H_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Qs,{})})):e?n.filter(s=>ke(s).includes(ke(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Qs,{})})):[],U_=()=>t.jsxs($,{gap:"8px",ai:"flex-start",children:[t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),W_=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,V_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=B_(),p=H_(r,n,d),{isOpen:h}=Z();return t.jsx(W_,{children:t.jsxs($,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Di,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(Es,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(vr,{value:n,setValue:s}),e&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Yt,{})})}),!r&&n.length!==0&&!e&&!ln(c[o].data)&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(bs,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(U_,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},G_=u(nt)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${X.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,q_=u.div`
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
`,Y_=u($)`
    @media (max-width: 1000px) {
        display: none;
    }
`,K_=()=>{const e=Qf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(Sa,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Cc=({size:e="large"})=>{const i=K_(),{open:n}=Z(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(V_,{}),"Глобальный поиск");return xr(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Yt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(G_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ne,{align:"left",fontSize:"0.9rem",children:t.jsxs($,{gap:"8px",children:[t.jsx(Yt,{}),"Поиск"]})}),t.jsx(Y_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(q_,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},_$=u.header`
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
`;u.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const w$=u.div`
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
`,J_=u.div`
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
`,j$=u.div`
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
`,k$=u.div`
    margin-top: 50px;
    width: 100%;
`,S$=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,T$=u(nt)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,E$=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,X_=u.div`
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
            /* white-space: nowrap; */
        }
    }

    &:hover {
        background: var(--theme-1);
    }
`,Q_=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(X_,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(fx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},Z_=u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,ew=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(Z_,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(Q_,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Oc=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=yt(),{settings:o}=ti.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(mu,{}):t.jsx(bu,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:m=>s(m)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:m=>s(m)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const x=()=>{s(r),c(m=>!m),i==null||i()};return e==="toggle"?t.jsx(ew,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:x}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(J_,{width:"30px",background:w.green.main,children:d}),onClick:x,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},tw=({quantity:e=1,avatarShape:i="circle"})=>t.jsx($,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs($,{gap:"16px",ai:"center",children:[t.jsx(J,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),iw=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,nw=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=at.useLkNotifications();return l.useEffect(()=>{o&&U.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{It.clearAllVisible()},[]),t.jsxs(iw,{children:[s.length===0&&!n&&t.jsx(Ys,{height:"100%",children:t.jsx(ue,{text:i??"Нет новых уведомлений",image:i?t.jsx(Ct,{}):t.jsx(vu,{}),size:"70px"})}),t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(te,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Pc,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(tw,{quantity:10})]})},sw=u.div`
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
`,Ac=()=>{const{close:e}=Z(),{notifications:i}=at.useLkNotifications(),n=3;return t.jsxs($,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(nw,{maxNotificationsVisible:n}),t.jsxs(ne,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",jc(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(ee,{to:fc,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},ow=()=>{const{notifications:e}=at.useLkNotifications(),{open:i}=Z(),n=()=>{i(t.jsx(Ac,{}),"Уведомления")};return t.jsxs(sw,{onClick:n,children:[t.jsx(Dt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(mn,{})]})},aw=u.div`
    position: relative;
`,Dc=()=>{const{open:e}=Z(),{notifications:i}=at.useLkNotifications(),n=()=>Re.close(),s=()=>{ct.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Rt.logout}),n()},o=()=>{Re.close(),e(t.jsx(ad,{}),"Что нового")},a=()=>{e(t.jsx(Ac,{}),"Уведомления"),Re.close()};return t.jsxs(t.Fragment,{children:[t.jsx(ck,{padding:"8px",size:"small"}),t.jsx(ve,{}),t.jsx(Oc,{type:"h-button"}),t.jsx(ve,{}),t.jsx(ee,{to:Bs,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(va,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(aw,{children:[t.jsx(_,{onClick:a,icon:t.jsx(mn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Dt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(ee,{to:je,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(ma,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(fn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(ve,{}),t.jsx(_,{align:"left",icon:t.jsx(yu,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(ve,{}),t.jsx(_,{align:"left",icon:t.jsx(Ec,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},rw=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,lw=({showSearch:e=!1})=>{const{data:{user:i}}=be.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Re.open({e:s,height:143,content:t.jsx(Dc,{})})};return t.jsxs(rw,{children:[e&&t.jsx(Cc,{size:"icon"}),t.jsx(ow,{}),t.jsx(Mt,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},cw=u.header`
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
    ${X.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${X.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,dw=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,pw=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,uw=u.div`
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
    will-change: transform;

    @media (max-width: 1232px) {
        max-width: ${dw};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${X.isTablet} {
        max-width: ${pw};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${X.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,hw=()=>{const{pathname:e}=Zt(),[i,n]=l.useState([e]),{action:s}=et();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},gw=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=et();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Ji,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},fw=({headerVisible:e,currentPage:i})=>{const n=et(),s=hw(),o=e||!!(i!=null&&i.planeHeader),a=Wr(i),r=(p=bi)=>()=>{ot.changeOpen({isOpen:!1,currentPage:p.slice(1,p.length)}),n.push(p)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(gw,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Ji,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Ji,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Ji,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},xw=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=jt(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=fw({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(cw,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(uw,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs($,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(lw,{showSearch:!0})]})]})},mw=le.memo(xw),bw=u(ee)`
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
`,vw=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Re.open({e:c,height:143,content:t.jsx(Dc,{})})};return t.jsxs(bw,{to:Bs,children:[t.jsx(_,{icon:t.jsx(wa,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Mt,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]})},yw=le.memo(vw),_w=["isCurrent","color"],ww=u(ee).withConfig({shouldForwardProp:e=>!_w.includes(e)})`
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
    color: ${({color:e,isCurrent:i})=>e&&i?w[e].main:"var(--text)"};

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
        background: ${({color:e})=>e?w[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    ${X.isTablet} {
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
`,jw=u.div`
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
`,kw=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,Sw=u.button`
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
`,Tw=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(ww,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Dt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Dt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(wc,{route:e})]})},Nc=le.memo(Tw),Ew=()=>{const{isOpen:e}=We.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Qe,{}),onClick:()=>ot.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},$w=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(Sw,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo($w);u.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;u.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const Pw=()=>{const{leftsideBarRoutes:e}=We.useMenu(),i=Zt();return e?t.jsx(kw,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Nc,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs($,{d:"column",children:[t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},Cw=le.memo(Pw),Ow=()=>{const{isOpen:e}=We.useMenu(),{width:i,height:n}=kn(),{data:{user:s}}=be.useUser(),{visibleRoutes:o}=We.useMenu(),a=Zt();return t.jsxs(jw,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(ee,{to:Fs,children:t.jsx(wn,{width:"165px"})}),t.jsx(yw,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Cc,{size:"small"}),t.jsx(Cw,{})]}),t.jsx(Oc,{type:"toggle"}),i<1e3&&t.jsx(Ew,{})]})},Aw=u.div`
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
`,Dw=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Ya.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{U.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),U.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Aw,{isOpen:e,isClickable:!!o,color:At[n].color,onClick:a,children:t.jsx(te,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>U.openPopUpMessage({isOpen:!1}),children:i})})};u.div`
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
`;const Nw=u.div`
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
`,Iw=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Za.useConfirm(),o=l.useRef(null);ii(o,()=>ct.closeConfirm());const a=()=>{n(),ct.closeConfirm()},r=()=>{ct.closeConfirm()};return t.jsx(An,{isOpen:e,children:t.jsxs(Nw,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Te,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},Rw=u.div`
    display: flex;
    align-items: ${({align:e})=>is(e)};
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
`,Lw=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[p,h]=l.useState(i),{width:f}=kn(),g=l.useRef(null),x=()=>{var v,b;g!=null&&g.current&&h(Math.round(((v=g.current)==null?void 0:v.scrollLeft)/((b=g.current)==null?void 0:b.clientWidth)))},m=v=>{var b;h(v),r==null||r((b=e[v])==null?void 0:b.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*v)};return l.useEffect(()=>{m(p)},[i,f]),t.jsxs(Rw,{width:n,align:c,maxWidth:o,children:[t.jsx(Es,{pages:e.map(({title:v,condition:b})=>({title:v,condition:b})),currentPage:p,setCurrentPage:m,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:x,children:e.map(v=>v.condition!==void 0&&v.condition||v.condition===void 0?t.jsx("div",{className:"slider-page",children:v.content},v.title):t.jsx("div",{className:"slider-page",children:t.jsx(ue,{text:"Нет данных"})},v.title))})]})},Ws=Lw,cn=e=>{const i=ke(e),s=[{keys:["распознаван"],icon:t.jsx(wu,{})},{keys:["принт"],icon:t.jsx(ju,{})},{keys:["химич"],icon:t.jsx(ku,{})},{keys:["сервер"],icon:t.jsx(Su,{})},{keys:["игр"],icon:t.jsx(Tu,{})},{keys:["жизнед"],icon:t.jsx(Eu,{})},{keys:["web","веб"],icon:t.jsx($u,{})},{keys:["истор"],icon:t.jsx(Pu,{})},{keys:["информат"],icon:t.jsx(Cu,{})},{keys:["информации"],icon:t.jsx(Xe,{})},{keys:["мобильн"],icon:t.jsx(Ou,{})},{keys:["безопасн"],icon:t.jsx(Au,{})},{keys:["автоматиз"],icon:t.jsx(Du,{})},{keys:["линейн"],icon:t.jsx(Nu,{})},{keys:["обработ"],icon:t.jsx(Iu,{})},{keys:["презентац"],icon:t.jsx(Ru,{})},{keys:["операционн"],icon:t.jsx(Sa,{})},{keys:["эконом"],icon:t.jsx(ht,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Lu,{})},{keys:["анализ"],icon:t.jsx(zu,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Mu,{})},{keys:["сети","сетей"],icon:t.jsx(Fu,{})},{keys:["матем"],icon:t.jsx(Bu,{})},{keys:["вероятн"],icon:t.jsx(Hu,{})},{keys:["философ"],icon:t.jsx(Ta,{})},{keys:["данны"],icon:t.jsx(Uu,{})},{keys:["язык"],icon:t.jsx(Wu,{})},{keys:["спорт","физичес"],icon:t.jsx(Vu,{})},{keys:["проектная"],icon:t.jsx(Xn,{})},{keys:["интеллект"],icon:t.jsx(Gu,{})},{keys:["научн"],icon:t.jsx(qu,{})},{keys:["предприним"],icon:t.jsx(Yu,{})},{keys:["коммуникац"],icon:t.jsx(Ku,{})},{keys:["управлени"],icon:t.jsx(_s,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(fa,{})},{keys:["переработ"],icon:t.jsx(Ju,{})},{keys:["машин","инжен"],icon:t.jsx(Xu,{})},{keys:["проектир","расчет"],icon:t.jsx(Qu,{})},{keys:["производ"],icon:t.jsx(ca,{})},{keys:["эколог"],icon:t.jsx(Zu,{})},{keys:["защит"],icon:t.jsx(eh,{})},{keys:["патент"],icon:t.jsx(th,{})},{keys:["материал"],icon:t.jsx(ih,{})},{keys:["физик"],icon:t.jsx(nh,{})},{keys:["тайм"],icon:t.jsx(sh,{})},{keys:["практика"],icon:t.jsx(Ea,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(_u,{})},hs={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},Ic=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},zw=u.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,In=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},Mw=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=In(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Rc=(e,i,n)=>Mw(e)===In(i.startTime)&&n,Ei=e=>e<=9?"0"+e:e,Fw=e=>`${Ei(Math.floor(e/60))}:${Ei(e%60)}`,Io=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},Bw=u.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${X.isMobile} {
        width: calc(100% + 40px);
    }
`,Hw=u.div`
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
`,Uw=u($)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${X.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,Ro=u.div`
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

    ${X.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,Ww=u(ne)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,Vw=u.div`
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
        background: ${w.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${w.red.main};
    }
`,Gw=u.div`
    color: ${w.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${X.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,qw=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(Io(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(Io(new Date,s[0]*60,s[1]*60))},ws.minute),()=>clearInterval(c.current)),[e]),t.jsx(Vw,{currentTime:(a-i)*n,children:o&&t.jsx(Gw,{children:Fw(a)})})},Lc=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Oe=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(Uw,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(Ro,{shortInfo:o,children:e}),t.jsx(Ww,{width:"100%",className:"text",children:i}),t.jsx(Ro,{shortInfo:o,children:s})]}),Yw=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,Kw=u(ee)`
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
`,Jw=({groups:e})=>{const{close:i}=Z();return t.jsx(Yw,{children:e.map(n=>t.jsxs(Kw,{to:Mi(si,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Kt,{}),n]}),t.jsx(Ze,{})]},n))})},Xw=({icon:e,background:i,noPadding:n=!1})=>t.jsx(Bw,{background:i,noPadding:n,children:t.jsxs(Hw,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),Qw=u.div`
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
`,Zw=({subjectName:e,color:i,noPadding:n})=>{const s=cn(e),{theme:o}=yt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(Qw,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(Xw,{noPadding:n,icon:s,background:r}),t.jsx(_t,{color:i.main,size:70,borderRadius:"19px",children:s})]})},ej=oh`
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
		display: flex;
		height: 100%;
		max-height: 100%;
	}

	body {
		-webkit-overflow-scrolling: touch;
		scrollbar-gutter: stable;
		position: relative;
		height: 100vh;
    	height: 100svh;
   		height: 100dvh;

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
}`,ij=u.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${tj}
`,nj=u.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,sj=u.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${X.isMobile} {
        font-size: 0.7rem;
    }
`,zc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=yt(),o=s==="light"?i.main:i.light2;return t.jsxs(nj,{children:[t.jsx(ij,{start:n,color:o}),e&&t.jsx(sj,{children:e})]})},oj=u.div`
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
`,aj=u($)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,rj=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:p,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:x=!1}=e,m=(d==null?void 0:d.split(","))??[],{open:v}=Z(),b=()=>{m.length===1?v(t.jsx(Sc,{group:m[0]})):v(t.jsx(Jw,{groups:m}),"Группы")},S=()=>{v(t.jsx(cj,{place:s,link:r,name:n}))},D=Lc(n);return t.jsxs(oj,{children:[t.jsx(Zw,{subjectName:n,color:p,noPadding:x}),t.jsxs(aj,{noPadding:x,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs($,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs($,{gap:"8px",children:[t.jsx(zc,{isCurrentEvent:g,color:p,timeInterval:i}),t.jsx(Mc,{timeLeft:In(i.split(" - ")[0],"minutes"),isNext:f,color:p,isCurrentEvent:g})]}),t.jsx(W,{size:3,align:"left",width:"fit-content",children:D.name})]}),t.jsx(ve,{margin:"0",width:"100%"}),t.jsx(Oe,{icon:t.jsx(ys,{}),text:t.jsx(Ie,{words:[h??"",a]})}),((r==null?void 0:r.length)||D.link)&&t.jsx("a",{href:r??D.link,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{icon:t.jsx(en,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Oe,{icon:t.jsx(Ea,{}),text:s}),!!c.length&&t.jsx(Oe,{icon:t.jsx(Qn,{}),text:t.jsx(Ie,{words:c})}),!!m.length&&t.jsx(Oe,{onClick:b,icon:t.jsx(_s,{}),text:t.jsx(Ie,{words:m}),rightIcon:t.jsx(Ze,{})}),t.jsx($,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(Dn,{type:"staff",name:j},j))]})}),!r&&t.jsx(ve,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:S})]})]})};u.span`
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
`;const lj=u.a`
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
        background: ${w.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,Yi=({title:e,link:i,image:n})=>i?t.jsxs(lj,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(W,{size:3,children:e})]}):null,Lo=u.div`
    ${X.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,cj=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(Lo,{children:t.jsx($,{jc:"center",children:t.jsx(Ge,{})})}):t.jsx(Lo,{children:e==="Webex"?t.jsx(Yi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Yi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Yi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Yi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},zo=u.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Mc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=yt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(zo,{background:c,color:r,children:"Сейчас"}):t.jsxs(zo,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},dj=u.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,$$=()=>t.jsxs(dj,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(J,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(J,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),Fc="/assets/sleep-54d590c1.gif";var Bc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Bc||{});const pj=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],P$=[...pj,{title:"Месяц",condition:!0}],Pt=Object.keys(Wt).reduce((e,i)=>(e[i]=[],e),{}),uj={schedule:{today:[],week:{...Pt},semestr:{data:{...Pt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...Pt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},hj=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},$i=e=>{const[i,n]=e.split(":");return+i*60+ +n};var dn=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(dn||{});const Hc=e=>{const[i,n]=e.split(" "),s=dn[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Uc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=dn[o],r=dn[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},hi=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:p,groups:h})=>{const[f,g]=r.split(" - "),x=$i(g)-$i(f),[m,v]=d.split("-").map(D=>D.trim()),b=Hc(m),S=Uc(v,m);return{title:o,people:a,startTime:f,duration:x,startDate:b,endDate:S,placeIcon:t.jsx(ah,{}),dateInterval:d,color:hs[r],place:s,link:c,groups:h,weekday:i,rooms:p,icon:cn(o)}}):[],gj=e=>new Date(e.setHours(0,0,0,0)),Mo=(e,i)=>(e??[]).filter(n=>{const s=gj(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=Hc(o),c=Uc(a,o);return s>=r&&s<=(c??r)}),Wc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),gs=e=>e instanceof Date&&isFinite(+e),fj=e=>{const i={...Pt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!gs(n)||!gs(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Wc(a);if(r==="sunday")continue;i[r]=[...i[r],...hi(e[o].lessons,Wt[r].short)]}return{schedule:i,startDate:n,endDate:s}},Vc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Gc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return U.evokePopUpMessage({message:f,type:"failure",time:ws.ten_seconds}),{schedule:uj.schedule,errorInData:f}}const o=new Date;let a=hj(o);o.getDay()===0&&(a=Vc(o,1));const r={...Pt},c={...Pt};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),m=e[f];"lessons"in m?(r[g]=hi(Mo(m.lessons,a),Wt[g].short),c[g]=hi(m.lessons,Wt[g].short)):(r[g]=hi(Mo(m,a),Wt[g].short),c[g]=hi(m,Wt[g].short)),n=new Date(Math.min(...c[g].map(v=>v.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(v=>(v.endDate??v.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),p=r[d],h=fj(i);return{schedule:{today:p,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},qc=async e=>{const i=await Mh(e),n=await Bh();return Gc(i.data,n.data)},Yc=async e=>{const i=await Fh(e),n=await Hh(e);return Gc(i.data,n.data)},Fo={data:{schedule:null,externalSchedule:null,view:Bc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},xj=()=>q(de),Nt=L(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Yc(n);if(i&&s==="stud")return await qc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),oi=L(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await qc(e)}catch(i){throw new Error(i.message)}}),ai=L(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Yc(e)}catch(i){throw new Error(i.message)}}),mj=k(),Kc=k(),Jc=k(),Xc=k(),Qc=k(),Zc=k(),ed=k(),de=V(Fo).on(Nt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Nt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(Kc,(e,i)=>({...e,data:{...e.data,view:i}})).on(Jc,(e,i)=>({...e,currentChosenDay:i.day})).on(Xc,()=>({...Fo}));P({clock:Nt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(Pt)}}),target:de});P({clock:Qc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});P({clock:Zc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});P({clock:ai.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:oi.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:[oi,ai,Nt],source:de,fn:e=>({...e,loading:!0}),target:de});P({clock:[oi,ai],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});P({clock:[oi.doneData,ai.doneData,Nt.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});P({clock:[oi.failData,ai.failData,Nt.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});P({clock:ed,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Vs={useSchedule:xj},bj={changeCurrentModule:mj,changeView:Kc,changeCurrentChosenDay:Jc,clearStore:Xc,resetExternalSchedule:ed,setSearchValue:Zc,setFilter:Qc},vj={getScheduleFx:Nt,getGroupScheduleFx:oi,getTeacherScheduleFx:ai},yj=Object.freeze(Object.defineProperty({__proto__:null,effects:vj,events:bj,selectors:Vs},Symbol.toStringTag,{value:"Module"})),_j=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${Ei(Math.floor(o/60))}:${Ei(o%60)}`},td=(e,i)=>e?`${e} - ${_j(e,i)}`:"9:00",fs=e=>!e||!gs(e)?0:e.getHours()*60+e.getMinutes(),Gs=(e,i)=>$i(e.startTime)<=fs(new Date)&&fs(new Date)<=$i(e.startTime)+e.duration&&i,id=()=>{const{open:e}=Z();return n=>{const s=td(n.startTime,n.duration);e(t.jsx(rj,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:Gs(n,!0),noPadding:!0,...n}))}},Bo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},wj=()=>{const{currentDevice:e}=jt(),[i,n]=l.useState(Bo[e]);return l.useEffect(()=>{n(Bo[e])},[e]),i},jj=u.div`
    --time-width: 55px;

    ${X.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${X.isMobile} {
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
`,kj=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=wj(),o=id(),a=[9,22];return e!=null&&e.length?t.jsx(jj,{children:t.jsx(od,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ue,{text:"В этот день пар нет",image:Fc})},nd=()=>{const{data:{schedule:e}}=Vs.useSchedule(),{open:i}=Z(),n=Vc(new Date,1),s=al(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Wc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(kj,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},Sj=u.div`
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
`,C$=({errorInData:e})=>t.jsxs(Sj,{children:[t.jsx("img",{src:Fc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(nd,{})]});u.div`
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
`;const Tj=(e,i,n)=>i?e?1:.8:n?1:0,Ej=e=>e?1:.9;u.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>Tj(e,i,n)};
    transform: scale(${({isVisible:e})=>Ej(e)});
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
`;const $j=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,O$=()=>t.jsxs($j,{children:[t.jsx(ur,{size:"38px"}),t.jsx(W,{size:4,children:"Учебный день завершился"}),t.jsx(nd,{})]});u.div`
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
`;u.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;u(ee)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`;u.div`
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
`;u.div`
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
`;const Pj=e=>{const[i,n]=e.split(":");return+i*60+ +n},sd=(e,i,n)=>e?(Pj(e)-i)*n:0,Cj=u.div`
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

    ${X.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;u.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${X.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const Oj=u($)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${X.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Aj=u.span`
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

    ${X.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,Dj=u.div`
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
`,Nj=u($)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Ij=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:p,onClick:h,link:f,rooms:g,dateInterval:x,leftShift:m,quantity:v,groups:b,isCurrentEvent:S=!1,nameInOneRow:D=!0,isNextEvent:j=!1,listView:T=!1,shortInfo:N=!1}=e,{theme:z}=yt(),{isMobile:I}=jt(),se=z==="light"?d.dark3:d.light3,H=z==="light"?d.transparent1:d.transparent2,Y=()=>h(e),ce=(I||v>1)&&N,Ce=I&&v>=2&&N,Ee=r==null?void 0:r.map(ri=>{var Bi,Hi;const Fe=ri.split(" ");return`${Fe[0]??""} ${((Bi=Fe[1])==null?void 0:Bi[0])??""}.${((Hi=Fe[2])==null?void 0:Hi[0])??""}.`}),Ye=sd(o,c,p),$e=Lc(i),xe=Ce?i.split(" ").map(ri=>ri[0].toUpperCase()):us($e.name,N?ce?43:35:D?300:64),Bt=(b==null?void 0:b.split(","))??[];return t.jsxs(Cj,{background:H,textColor:se,listView:T,leftShift:100*m,quantity:100/v,duration:n,scale:p,top:Ye,onClick:Y,shortInfo:N,children:[t.jsx(Dj,{children:s}),t.jsx($,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Oj,{scale:p,d:"column",ai:"flex-start",shortInfo:N,children:[t.jsxs($,{d:"column",gap:"2px",children:[!N&&t.jsxs($,{gap:"8px",children:[t.jsx(zc,{timeInterval:td(o,n),color:d,isCurrentEvent:S}),t.jsx(Mc,{timeLeft:In(o,"minutes"),isNext:j,color:d,isCurrentEvent:S}),!!(g!=null&&g.length)&&t.jsx(Oe,{shortInfo:N,icon:I&&v>1?void 0:t.jsx(Qn,{}),text:t.jsx(Ie,{words:g})}),(!!f||$e.link)&&t.jsx("a",{href:f??$e.link,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(en,{}),text:f?a:"Cсылка"})}),!!Bt.length&&t.jsx(Oe,{icon:t.jsx(_s,{}),text:t.jsx(Ie,{words:Bt})})]}),t.jsx(Aj,{listView:T,nameInOneRow:D,scale:p,shortInfo:N,children:xe})]}),!!r.length&&!ce&&t.jsx(Oe,{shortInfo:N,text:t.jsx(Ie,{words:N?[Ee[0]]:Ee}),icon:t.jsx(rh,{})}),!!(g!=null&&g.length)&&N&&!ce&&t.jsx(Oe,{shortInfo:N,icon:t.jsx(Qn,{}),text:t.jsx(Ie,{words:g})}),!!f&&N&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(en,{}),text:a})}),!!x&&!ce&&t.jsx($,{gap:"5px",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(ys,{}),text:x})})]})})]})},Rj=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},Lj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:p})=>{const h=Rj(e),f=p??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(Nj,{h:"100%",d:"column",children:[f&&t.jsx(qw,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((x,m)=>h[x].map((v,b)=>l.createElement(Ij,{leftShift:b,quantity:h[x].length,scale:n,isCurrentEvent:Gs(v,f),isNextEvent:Rc(e,v,f),...v,onClick:c,shift:i,key:v.startTime+v.title+m+b,shortInfo:s})))]})},zj=u($)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,Mj=u.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Fj=u.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,Bj=u(ne)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${X.isMobile} {
        font-size: 0.65rem;
    }
`,Hj=Array(24).fill(0).map((e,i)=>`${Ei(i)}:00`),Uj=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Hj.slice(e[0],e[1]+1);return t.jsx(zj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(Mj,{children:[t.jsx(Bj,{children:o}),t.jsx(Fj,{})]},o))})},od=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Ic({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var p;return sd((p=i==null?void 0:i[0])==null?void 0:p.startTime,o,n)}});return t.jsxs(zw,{className:"calendar-wrapper",ref:d,children:[t.jsx(Uj,{interval:e,scale:n}),t.jsx(Lj,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},Wj=u.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?w[e].main:"var(--text)"};
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
        color: ${({color:e})=>e?w[e].main:"var(--text)"};
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
`,Vj=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=Z();return o?t.jsxs(Wj,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(ee,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},Gj=u.div`
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
`,qj=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Yj=u(ne)`
    margin-bottom: 20px;
`,Kj=({image:e,list:i,text:n})=>{const{isMobile:s}=jt();return t.jsxs(Gj,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Yj,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(qj,{children:i==null?void 0:i.map(o=>l.createElement(Vj,{...o,key:o.title}))})]})},Jj=u.div`
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
`,Xj=u.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Qj=()=>t.jsx(Xj,{children:t.jsx(od,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:hs["16:10 - 17:40"],icon:cn("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:hs["17:50 - 19:20"],icon:cn("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),ad=()=>{const[e,i]=l.useState(0),{close:n}=Z(),s=[t.jsx(Kj,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Qj,{})}},"schedule")];return t.jsxs(Jj,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(jr,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>xt(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>xt(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},Zj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return $i(i.startTime)+i.duration<fs(new Date)}},ek=()=>{var p,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Vs.useSchedule(),o=id(),a=((p=e==null?void 0:e.today)==null?void 0:p.length)===0||!(e!=null&&e.today),r=Zj(e==null?void 0:e.today),c=Ic({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,x;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((x=e==null?void 0:e.today)==null?void 0:x.findIndex(m=>Gs(m,!0)||Rc(e.today,m,!0)))??0)}}),d=()=>U.evokePopUpMessage({message:n??"",type:"failure",time:ws.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},Ho=u(_n)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    will-change: transform;
    transform: translateZ(0);
    display: flex;
    height: var(--mobile-bottom-menu-height);

    width: 100%;
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;

    display: none;

    ${X.isTablet} {
        display: flex;
    }
`,di=()=>t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(J,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),tk=()=>{const{allRoutes:e}=We.useMenu(),{data:{user:i}}=be.useUser(),{hasNoSchedule:n,loading:s}=ek(),o=Zt();if(!e||!i||s)return t.jsxs(Ho,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(di,{}),t.jsx(di,{}),t.jsx(di,{}),t.jsx(di,{}),t.jsx(di,{})]});const a=(i==null?void 0:i.user_status)==="stud"?xT:n?bT:mT;return t.jsx(Ho,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Nc,{...e[r],isCurrent:c},r)})})},ik=(e,i,n)=>({isOpen:i,message:e,position:n}),Uo={hints:[]},nk=()=>q(sk),rd=k(),ld=k(),cd=k(),sk=V(Uo).on(rd,(e,{message:i,position:n})=>({hints:[...e.hints,ik(i,e.hints.length===0,n)]})).on(ld,e=>({hints:e.hints.splice(1,e.hints.length)})).on(cd,()=>({...Uo})),ok={useHint:nk},ak={evoke:rd,close:ld,clearStore:cd},rk=u.div`
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
    box-shadow: 0 0 30px ${w.blue.transparent3};
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
`,lk=()=>{const{hints:e}=ok.useHint(),i=e[0];return i?t.jsx(rk,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(te,{type:"hint",title:i.message,onClose:()=>ak.close(),width:"100%",icon:null})}):null};u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const ck=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=be.useUser();return Z(),t.jsxs(Te,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ne,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Dn,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function dk(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const A$=u.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>dk(e)};
        opacity: 1;
    }
`,D$=u.div`
    pointer-events: none;
    padding: 6px 10px;
    border-radius: var(--brLight);
    background: #000000b9;
    color: #fff;
    font-weight: bold;
    position: absolute;
    transform: translate(0, 0);
    transition: 0.2s;
    opacity: 0;
    font-size: 0.8em;
    text-align: center;
    max-width: ${({width:e})=>e??"fit-content"};
`,dd=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ke(a.title).includes(ke(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),pk=()=>{const e=O?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Sd,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Gd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Td,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Ed,title:"Справка-вызов"},{link:Md,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Vd,title:"Запрос на изменение персональных данных"},{link:zd,title:"Запрос на восстановление магнитного пропуска"},{link:_d,title:"Уточнение паспортных данных"},{link:qd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Yd,title:"Предоставление каникул в связи с окончанием университета"},{link:Kd,title:"Предоставление академического отпуска"},{link:Jd,title:"Выход из академического отпуска"},{link:Xd,title:"Отчисление по инициативе обучающегося"},{link:Qd,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:$d,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Pd,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Cd,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Ad,title:"Предоставление права проживания льготной категории граждан"},{link:Od,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Dd,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Id,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Rd,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Nd,title:"Расторжение договора найма"},{link:Ld,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:Aa,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Hd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Ud,title:"Заявка на материальную помощь"},{link:kd,title:"Оформить социальную стипендию"},{link:Wd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:O,links:[{link:Fd,title:"Отправить документы воинского учета"},{link:Bd,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:O,links:[{link:xs,title:"Оформить дополнительное соглашение к договору об обучении"},{link:xs,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Sh,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:wd,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:O,links:[{link:jd,title:"Трудоустройство студентов"}]}]},uk=e=>[{title:"Цифровые сервисы",links:[{link:Dl,title:"Справка с места работы"},{link:Nl,title:"Справка с места работы для предоставления в визовый центр"},{link:Rl,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Телефонный справочник",links:[...fk(e),{link:zl,title:"Запрос на изменение внутреннего телефона"},{link:Ml,title:"Запрос на изменение корпоративной электронной почты"}]},...hk()],hk=()=>[{title:"Цифровые сервисы (в разработке)",disabled:O,links:[{link:Il,title:"Справка о стаже работы"},{link:Fl,title:"Копия трудовой книжки"},{link:Bl,title:"Копии документов из личного дела"},{link:Hl,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:O,title:"Общее",links:[{link:jl,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:O,links:[{link:kl,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",links:[{link:El,title:"Получение нового компьютерного оборудования"},{link:$l,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Pl,title:"Обслуживание принтеров, МФУ"},{link:Cl,title:"Вопрос по СЭД Directum и 1С"},{link:Ol,title:"Вопрос по Личному кабинету"},{link:Al,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:O,links:[{link:Gl,title:"Справка по форме 2-НДФЛ"},{link:ql,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Ul,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Yl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:O,links:[{link:Jl,title:"Предоставление права проживания в жилом помещении"},{link:Xl,title:"Временное размещение гостей в студгородке"},{link:Ql,title:"Проход гостей на территорию студенческого городка"},{link:Zl,title:"Переселение"},{link:ec,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:O,links:[{link:tc,title:"Выдача пропуска (повторная)"},{link:ic,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:O,links:[{link:nc,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:O,links:[{link:Tl,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:O,links:[{link:Vl,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:O,links:[{link:sc,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:oc,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:O,links:[{link:Wl,title:"Произвольный запрос"},{link:Aa,title:"Вступить в Профсоюз",isExternalLink:!0}]}],gk=()=>[{title:"",links:[{link:Kl,title:"Заявление на трудоустройство по совместительству"},{link:rs,title:"Заявление на увольнение"},{link:ds,title:"Заявление о привлечении к работе в выходной день"},{link:ls,title:"Заявление о предоставлении отпуска"},{link:cs,title:"Заявление о переносе отпуска"},{link:ps,title:"Заявление о диспансеризации"},{link:Zi,title:"Заявление на перевод"}]}],fk=e=>e.head_div&&e.head_div.length>0?[{link:Ll,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],xk=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),mk=u.div`
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
`,N$=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=Z(),{data:{user:s}}=be.useUser(),o=e&&s?uk(s):pk(),[a,r]=l.useState(""),[c,d]=l.useState(o);return t.jsxs(mk,{children:[t.jsx(_r,{whereToSearch:o,searchEngine:dd,setResult:d,placeholder:"Поиск заявок",setExternalValue:r}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(c??o).map(p=>{if(!p.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:p.title}),t.jsx("div",{className:"links",children:p.links.map((h,f)=>{if(!(h.disabled||!xk(i,h.exceptionalFormEducationList)))return h.isExternalLink?t.jsx("a",{href:h.link,target:h.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:h.title},h.link+f):t.jsx(ee,{to:h.link,onClick:n,children:h.title},h.link+f)})})]},p.title)}),!(c!=null&&c.length)&&!!a.length&&t.jsx(ue,{text:`По запросу ${a} ничего не найдено`})]})})]})},bk=u.div`
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
`,vk=u.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,I$=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=Z(),s=gk(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Me,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(wt,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(bk,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(_r,{whereToSearch:s,searchEngine:dd,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(vk,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(ee,{to:p.link,onClick:n,children:p.title},p.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ue,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},yk=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let p=0;p<d.files.length;p++)c[(d==null?void 0:d.fieldName)+`[${p}]`]=d.files[p];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),Wo={isOpen:!1,pages:[],currentPage:0},_k=()=>q(wk),pd=k(),ud=k(),hd=k(),gd=k(),wk=V(Wo).on(pd,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(ud,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(hd,(e,{value:i})=>({...e,currentPage:i})).on(gd,()=>({...Wo})),qs={useStory:_k},Tt={open:pd,close:ud,clearStore:gd,changeCurrentPage:hd};u(nt)`
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
`;u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const jk=u.div`
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
`,Ys=jk,kk=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,p]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,x]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(T=>!T.value&&T.required))&&!n.find(j=>!!j.find(T=>{var N;return T.value.id==="not-chosen"&&!!((N=T.items)!=null&&N.length)}))?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var T;return j.value===null&&!!((T=j.items)!=null&&T.length)})?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},v=()=>{s(j=>{const T=j.default[0].map(N=>({fieldName:N.fieldName??"",title:N.title,value:N.type==="select"&&(N!=null&&N.items)?null:"",type:N.type,items:N.items,width:N.width,required:N.required}));return{...j,data:[...j.data,T]}})},b=j=>{s(T=>{const N=T.data.filter((z,I)=>j!==I);return{...T,data:N}})},S=j=>{s(T=>(T.documents&&(T.documents.files=[...j]),{...T}))},D=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:x,setChangeInputArea:p,handleRemove:b,handleAddNew:v,handleLoadFiles:S,handleConfirm:m,handleCheckbox:D}},Sk=u.div`
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
`,Tk=u.div``,Ek=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Tk,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:p},h)=>t.jsx(Cx,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),$k=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Te,{children:[!a&&t.jsx(Ue,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Ue,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Pk=u.div`
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
`,Ck=({title:e,value:i,visible:n})=>n?t.jsxs(Pk,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Ok=u.div`
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
`,Ak=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Ok,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(lh,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Ta,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,Dk=u.div`
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
`,Nk=({title:e,visible:i})=>i?t.jsx(Dk,{children:t.jsx("span",{className:"title",children:e})}):null,Ik=u.div`
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
        border: ${({danger:e})=>e&&`2px solid ${w.red.main}`};

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
`,Rk=u.ul`
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
`,Lk=u.li`
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
`,zk=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:p=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,x]=l.useState([]),[m,v]=l.useState(!0);return l.useEffect(()=>{if(e){const b=f.filter(S=>S.toLowerCase().includes(e.toLowerCase()));x(b)}else x([])},[e,f]),t.jsxs(Ik,{leftIcon:!!n,isActive:p,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:b=>{i(b.target.value),v(!0)},placeholder:c}),g.length>0&&t.jsx(Rk,{width:"100%",isOpen:m,className:m?"open":"close",itemsAmount:g.length,title:s,children:g.map((b,S)=>t.jsx(Lk,{isSelected:!1,onClick:()=>{i(b),x([]),v(!1)},children:b},S))})]})]})},Mk=u.div`
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
`,Fk=({title:e,visible:i})=>i?t.jsx(Mk,{children:t.jsx("span",{className:"title",children:e})}):null,Vo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:p,documents:h,changeInputArea:f,setData:g,mask:x,editable:m,placeholder:v,autocomplete:b,isSpecificRadio:S,specialType:D,specialFieldsNameConfig:j,minValueInput:T,maxValueInput:N,minValueLength:z,maxValueLength:I,diff:se,visible:H=!0,onChange:Y,onKeyPress:ce,onBlur:Ce,onKeyDown:Ee,onKeyUp:Ye,onFocus:$e}=e,xe=m??(f&&!h),[Bt,ri]=l.useState(!0),Fe=(G,pe,Ht)=>{Y==null||Y(G),g(Se=>(Array.isArray(Se.data[0])?Se.data[pe][Ht??0].value=G:Se.data[pe].type==="checkbox-docs"?Se.data[pe].items[Ht??0].value=!!G:Se.data[pe].value=G,{...Se}))},Xs=(G,pe,Ht)=>{Y==null||Y(G),g(Se=>(Array.isArray(Se.data[0])?Se.data[pe][Ht??0].value=G:Se.data[pe].value=G,{...Se}))},Bi=(G,pe,Ht)=>{g(Se=>(Se.data[pe].items[Ht??0].files=G,{...Se}))},Hi=G=>{Y==null||Y(G),g(pe=>(pe.data[o].value=G,{...pe}))},Rp=G=>{Y==null||Y(G),ce==null||ce(G),Ce==null||Ce(G),Ee==null||Ee(G),Ye==null||Ye(G),$e==null||$e(G),g(pe=>(pe.data[o].value=G,{...pe}))};return j&&D&&!Object.values(j).includes(D)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Ue,{text:p,isActive:xe,checked:i,setChecked:G=>Fe(G,o,a)}):r==="hr-checkbox"?t.jsx(Ak,{text:p,isActive:xe,checked:i,setChecked:G=>Fe(G,o,a)}):r==="auto-complete-input"?t.jsx(zk,{title:p,suggestions:c??[],required:n,value:i,placeholder:v??p,setValue:G=>Fe(G,o,a)}):r==="textarea"?t.jsx($f,{value:i,title:p,setValue:G=>Fe(G,o,a),isActive:xe,textAreaAppearance:xe,placeholder:v??p,required:n,width:s}):r==="checkbox-docs"?t.jsx(Ek,{title:p,items:d,setChecked:(G,pe)=>Fe(!G,o,pe),setFiles:(G,pe)=>Bi(G,o,pe)}):r==="date-interval"?H?t.jsx(Tr,{title:p,required:n,dates:i,setDates:G=>Rp(G),valid:Bt,setValid:ri,minValue:T,diff:se}):null:r==="simple-text"?t.jsx(Ck,{title:p,value:i,visible:H}):r==="text-warning"?t.jsx(Fk,{title:p,visible:H}):r==="text-header"?t.jsx(Nk,{title:p,visible:H}):r==="radio"?t.jsx($k,{buttons:d,title:p,required:n,current:i,setCurrent:Hi,isSpecificRadio:S}):H?t.jsx(ft,{value:i,title:p,minValue:T,maxValue:N,minLength:z,maxLength:I,setValue:G=>Fe(G,o,a),type:r,isActive:xe,inputAppearance:xe,placeholder:v??p,required:n,mask:x,width:s,autocomplete:b}):null:H?t.jsx(Or,{items:d,setSelected:G=>Xs(G,o,a),selected:i,isActive:xe,title:p,width:s,multiple:r==="multiselect",required:n}):null},Bk=u.div`
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
`,Hk=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Bk,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(da,{}):t.jsx(pa,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Ue,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(Ve,{}),onClick:()=>null,background:"transparent",flipped:c})]}),Uk=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Zs,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(ch,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Ct,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(dh,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Zs,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),Wk=e=>e.confirmed===void 0?null:t.jsx(Te,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Uk,{...e,confirmed:e.confirmed})}),Et=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:p=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:x,defaultOpenArea:m=!0})=>{const{openArea:v,changeInputArea:b,included:S,setOpenArea:D,setIncluded:j,setChangeInputArea:T,handleRemove:N,handleAddNew:z,handleLoadFiles:I,handleConfirm:se,handleCheckbox:H}=kk({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:m});return t.jsxs(t.Fragment,{children:[t.jsxs(Sk,{openArea:v,children:[t.jsx(Hk,{title:e,included:S,optional:d,confirmed:c,setOpenArea:D,setIncluded:j,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(te,{type:"alert",visible:!!n,icon:t.jsx(ji,{}),children:n}),t.jsx(te,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Xe,{}),children:i}),Array.isArray(s[0])?s.map((Y,ce)=>t.jsxs("div",{className:"data-line",children:[Y.map((Ce,Ee)=>t.jsx(Vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:Ee,specialFieldsNameConfig:x,...Ce},Ee)),b&&p&&t.jsx(_,{icon:t.jsx(ph,{}),textColor:w.red.main,onClick:()=>N(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((Y,ce)=>t.jsx(Vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:x,...Y},ce)),p&&b&&t.jsx(_,{icon:t.jsx(uh,{}),text:"Добавить",onClick:z,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Sr,{files:a.files,setFiles:Y=>I(Y),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(Y=>l.createElement(Gf,{...Y,key:Y.title})),t.jsx(Ue,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:H}),t.jsx(Wk,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:T,handleConfirm:se})]})]}),h&&t.jsx(ve,{})]})},Vk=u.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?w.green.main:w.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?w.blue.transparent1:e?w.green.transparent3:w.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,Gk=u.div`
    display: flex;
    margin-bottom: -20px;
`,qk=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,fd=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:he(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Gk,{children:e.map((r,c)=>t.jsxs(qk,{lastElement:c===e.length-1,children:[t.jsx(Vk,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(mf,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Et,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Yk=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Kk=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Jk=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Rn=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return yk(p);if(Array.isArray(p.data[0])){const h=p.data.map(g=>Object.assign({},...g==null?void 0:g.map(x=>Go(x)))),f={};return f[e]=JSON.stringify(h),f}else return p.data.map(h=>Go(h))}).flat(),r=i.map(p=>{var f,g;const h={};if((f=p.documents)!=null&&f.fieldName)for(let x=0;x<p.documents.files.length;x++)h[((g=p.documents)==null?void 0:g.fieldName)+`[${x}]`]=p.documents.files[x];return h}),c=i.map(p=>{var f,g;const h={};return(f=p.optionalCheckbox)!=null&&f.fieldName&&(h[(g=p.optionalCheckbox)==null?void 0:g.fieldName]=p.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Le.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},Go=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Xk(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Xk=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Ln=u.div`
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
`;var Fi=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Fi||{}),Qk=(e=>(e.EDIT_PHONEBOOK_SUBDIVISION="edit-phonebook-subdivision",e.EDIT_PHONEBOOK_INNER_PHONE="edit-phonebook-inner-phone",e.EDIT_PHONEBOOK_EMAIL="edit-phonebook-email",e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(Qk||{});const Zk=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],eS=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],tS=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:eS},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Zk}]}},iS=()=>{var H;const[e,i]=l.useState(null),[n,s]=l.useState(Ui.kvdCert),[o,a]=l.useState(Ui.fluorographyCert),[r,c]=l.useState(Ui.vichRwCert),[d,p]=l.useState(Ui.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:f}}=be.useUser(),[g,x]=l.useState(!1),[m,v]=l.useState(!1),[b,S]=l.useState(null),[D,j]=l.useState(null),[T,N]=l.useState(null),z=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(ue,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const I=!!e&&!!D&&!!b&&!!T;if(l.useEffect(()=>{h&&(i(tS(h)),S(Kk()),j(Jk()),N(Yk()))},[h]),!I)return null;const se=[[{dataForm:e,setDataForm:i}],[{dataForm:D,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}]];return t.jsx(Ln,{isDone:z,children:t.jsxs(jn,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(fd,{stagesConfig:se}),t.jsx(gt,{text:"Отправить",action:()=>Rn(Fi.USG_GETHOSTEL_OOZ,[e,D,b,T,n,o,r,d],v,x),isLoading:m,completed:g,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:z,isActive:(((H=e.optionalCheckbox)==null?void 0:H.value)??!0)&&he(e)&&he(o)&&he(r)&&he(d)&&he(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},nS=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],sS=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],oS=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],aS=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],rS=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],lS=[{id:0,title:"1"},{id:1,title:"2"}],cS=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],dS=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],pS=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],uS=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),hS=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:nS,width:"100%",editable:!0,required:!0}]}),gS=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:sS,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),fS=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:oS,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:aS,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:rS,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:lS,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:cS,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),xS=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:dS,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),qo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:pS,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},xd=()=>{var N;const[e,i]=l.useState(null),[n,s]=l.useState(hS()),[o,a]=l.useState(gS()),[r,c]=l.useState(fS()),[d,p]=l.useState(xS()),[h,f]=l.useState(qo(null)),[g,x]=l.useState(!1),[m,v]=l.useState(!1),[b,S]=l.useState(!1),{data:{dataUserApplication:D}}=ye.useApplications();l.useEffect(()=>{D&&i(uS(D))},[D]);const j=l.useMemo(()=>{var z,I;return((I=(z=h==null?void 0:h.data[0])==null?void 0:z.value)==null?void 0:I.id)!==0},[(N=h==null?void 0:h.data[0])==null?void 0:N.value]);if(l.useEffect(()=>{h&&f(qo(h.data))},[j]),!e)return null;const T=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}],[{dataForm:h,setDataForm:f}]];return t.jsx(Ln,{isDone:!1,children:t.jsxs(jn,{children:[t.jsx(W,{size:3,align:"left",children:"Воинский учет"}),t.jsx(fd,{stagesConfig:T}),t.jsx(Ue,{checked:g,setChecked:x,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(gt,{text:m?"Отправлено":"Отправить",action:()=>Rn(Fi.MIL_REG,[e,n,o,r,d,h],S,v),isLoading:b,completed:m,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&he(e)&&he(n)&&he(r)&&he(d)&&he(h)&&he(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},mS=Object.freeze(Object.defineProperty({__proto__:null,default:xd},Symbol.toStringTag,{value:"Module"})),bS=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],vS=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:bS},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),yS=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},md=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:p}}=ye.useApplications();return l.useEffect(()=>{p&&i(vS(p))},[p]),l.useEffect(()=>{e&&p&&c(yS(e.data))},[e]),t.jsx(Ln,{isDone:d,children:!!e&&!!i&&t.jsxs(jn,{children:[t.jsx(Et,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(gt,{text:d?"Отправлено":"Отправить",action:()=>Rn(Fi.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:he(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},_S=Object.freeze(Object.defineProperty({__proto__:null,default:md},Symbol.toStringTag,{value:"Module"})),wS=l.lazy(()=>y(()=>import("./index-e7285ce5.js"),["assets/index-e7285ce5.js","assets/vendor-cbee1f3c.js"])),jS=l.lazy(()=>y(()=>import("./index-892dc39e.js"),["assets/index-892dc39e.js","assets/vendor-cbee1f3c.js"])),kS=l.lazy(()=>y(()=>import("./index-ac1bcbef.js"),["assets/index-ac1bcbef.js","assets/vendor-cbee1f3c.js"])),SS=l.lazy(()=>y(()=>import("./index-2e7d0898.js"),["assets/index-2e7d0898.js","assets/vendor-cbee1f3c.js"])),TS=l.lazy(()=>y(()=>import("./index-9919d42a.js"),["assets/index-9919d42a.js","assets/vendor-cbee1f3c.js"])),ES=l.lazy(()=>y(()=>import("./index-2447b0c3.js"),["assets/index-2447b0c3.js","assets/vendor-cbee1f3c.js","assets/ui-06fe5e77.js"])),$S=l.lazy(()=>y(()=>import("./index-6047ccb8.js"),["assets/index-6047ccb8.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),PS=l.lazy(()=>y(()=>import("./index-0b35df9f.js"),["assets/index-0b35df9f.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),CS=l.lazy(()=>y(()=>import("./index-cd30e155.js"),["assets/index-cd30e155.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),OS=l.lazy(()=>y(()=>import("./index-e3d0abf7.js"),["assets/index-e3d0abf7.js","assets/vendor-cbee1f3c.js"])),AS=l.lazy(()=>y(()=>import("./index-5937687a.js"),["assets/index-5937687a.js","assets/vendor-cbee1f3c.js","assets/index-a3130013.js"])),DS=l.lazy(()=>y(()=>import("./index-aa44c01d.js"),["assets/index-aa44c01d.js","assets/vendor-cbee1f3c.js","assets/is-valid-url-08a91344.js"])),NS=l.lazy(()=>y(()=>import("./index-c866b3e7.js"),["assets/index-c866b3e7.js","assets/vendor-cbee1f3c.js"])),IS=l.lazy(()=>y(()=>import("./index-c20ab728.js"),["assets/index-c20ab728.js","assets/vendor-cbee1f3c.js"])),RS=l.lazy(()=>y(()=>import("./index-d327bba9.js"),["assets/index-d327bba9.js","assets/vendor-cbee1f3c.js"])),LS=l.lazy(()=>y(()=>import("./index-49d43730.js"),["assets/index-49d43730.js","assets/vendor-cbee1f3c.js"])),zS=l.lazy(()=>y(()=>import("./index-7558ba95.js"),["assets/index-7558ba95.js","assets/vendor-cbee1f3c.js"])),MS=l.lazy(()=>y(()=>import("./index-76b1262e.js"),["assets/index-76b1262e.js","assets/vendor-cbee1f3c.js"])),FS=l.lazy(()=>y(()=>import("./index-30509d29.js"),["assets/index-30509d29.js","assets/vendor-cbee1f3c.js"])),BS=l.lazy(()=>y(()=>import("./index-a6c2243e.js"),["assets/index-a6c2243e.js","assets/vendor-cbee1f3c.js"])),HS=l.lazy(()=>y(()=>import("./index-a27aa79c.js"),["assets/index-a27aa79c.js","assets/vendor-cbee1f3c.js"])),US=l.lazy(()=>y(()=>import("./index-34cf8663.js"),["assets/index-34cf8663.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js"])),WS=l.lazy(()=>y(()=>import("./index-914d4286.js"),["assets/index-914d4286.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>mS),void 0));const VS=l.lazy(()=>y(()=>import("./index-8261ecf4.js"),["assets/index-8261ecf4.js","assets/vendor-cbee1f3c.js"])),GS=l.lazy(()=>y(()=>import("./index-818b7913.js"),["assets/index-818b7913.js","assets/vendor-cbee1f3c.js"])),qS=l.lazy(()=>y(()=>import("./index-0a7c0f00.js"),["assets/index-0a7c0f00.js","assets/vendor-cbee1f3c.js"])),YS=l.lazy(()=>y(()=>import("./index-6e9ed03b.js"),["assets/index-6e9ed03b.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),KS=l.lazy(()=>y(()=>import("./index-26ef51e6.js"),["assets/index-26ef51e6.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-687f3d58.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),JS=l.lazy(()=>y(()=>import("./index-ec214653.js"),["assets/index-ec214653.js","assets/vendor-cbee1f3c.js"])),XS=l.lazy(()=>y(()=>import("./index-0c140160.js"),["assets/index-0c140160.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>_S),void 0));const QS=l.lazy(()=>y(()=>import("./index-305cf2fd.js"),["assets/index-305cf2fd.js","assets/vendor-cbee1f3c.js"])),ZS=l.lazy(()=>y(()=>import("./index-0cc074dd.js"),["assets/index-0cc074dd.js","assets/vendor-cbee1f3c.js"])),eT=l.lazy(()=>y(()=>import("./index-23f610ee.js"),["assets/index-23f610ee.js","assets/vendor-cbee1f3c.js"])),tT=l.lazy(()=>y(()=>import("./index-d573f996.js"),["assets/index-d573f996.js","assets/vendor-cbee1f3c.js"])),iT=l.lazy(()=>y(()=>import("./index-45880147.js"),["assets/index-45880147.js","assets/vendor-cbee1f3c.js"])),nT=l.lazy(()=>y(()=>import("./index-0f866ee2.js"),["assets/index-0f866ee2.js","assets/vendor-cbee1f3c.js","assets/get-divisions-96cfa1b1.js"])),sT=l.lazy(()=>y(()=>import("./index-7e094eea.js"),["assets/index-7e094eea.js","assets/vendor-cbee1f3c.js"])),oT=()=>F.get(`?getRequestMedicalCertificate&token=${B()}`),bd=k(),vd=L(async()=>(await oT()).data);P({clock:bd,target:vd});$a(vd,null);const aT={load:bd},rT=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],lT=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:rT,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},yd=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,p]=l.useState(!1),[h,f]=l.useState(null),[g,x]=l.useState(!1),[m,v]=l.useState(!1),b=g??!1,{data:{dataUserApplication:S}}=ye.useApplications();return l.useEffect(()=>{S&&i(lT(S))},[S]),l.useEffect(()=>{aT.load(),s(lt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(lt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(lt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),f(lt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(Ln,{isDone:!1,children:t.jsxs(jn,{children:[e&&i&&t.jsx(Et,{...e,setData:i}),n&&s&&t.jsx(Et,{...n,setData:s}),o&&a&&t.jsx(Et,{...o,setData:a}),r&&c&&t.jsx(Et,{...r,setData:c}),h&&f&&t.jsx(Et,{...h,setData:f}),t.jsx(Ue,{checked:d,setChecked:p,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(gt,{text:b?"Отправлено":"Отправить",action:()=>{Rn(Fi.MEDICAL_CERT,[e,n,o,r,h],v,x)},isLoading:m,completed:g,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&he(e)&&he(o)&&he(r)&&he(h)&&he(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},cT=Object.freeze(Object.defineProperty({__proto__:null,default:yd},Symbol.toStringTag,{value:"Module"})),C="/applications",dT="/application-for-superior-room",pT="/acad-performance",uT="/dormitory",_d=C+"/clarification-of-passport-data",wd=C+"/arbitrary-request",jd=C+"/student-employment",kd=C+"/social-scollarship",Sd=C+"/certificate-of-attendance",Td=C+"/social-agencies",Ed=C+"/paper-call",$d=C+"/regular-accommodation",Pd=C+"/full-time-part-time-form",Cd=C+"/accommodation-correspondence-form",Od=C+"/academic-leave-accommodation",Ad=C+"/preferential-accommodation",Dd=C+"/family-room",Nd=C+"/termination-of-employment-contract",Id=C+"/relocation-inside-hostel",Rd=C+"/relocation-to-another-hostel",Ld=C+"/accommodation-for-graduates",xs=C+"/payment-recipient",zd=C+"/restoring-the-magnetic-pass",Md=C+"/retake-for-diploma",Fd=C+"/military-registration-documents",Bd=C+"/military-registration",Hd=C+"/financial-support",Ud=C+"/financial-assistance",Wd=C+"/increased-state-academic-scholarship",Vd=C+"/changing-personal-data",Gd=C+"/student-status",qd=C+"/state-accreditation",hT=C+"/military-registration-card",Yd=C+"/holidays-after-training",Kd=C+"/provision-academic-leave",Jd=C+"/exit-academic-leave",Xd=C+"/independently-deducted",Qd=C+"/extension-attestation",gT="/physical-education/student",rt=()=>we({oldVersionUrl:"/sprav"}),pi=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:C,Component:AS,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...bc,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(_a,{}),path:R1,Component:yd,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ht,{}),path:rn,Component:Is,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(eo,{}),path:uT,Component:kS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},softskills:{id:"softskills",title:"Паспорт компетенций",icon:t.jsx(hh,{}),path:Y1,Component:()=>(le.useEffect(()=>{window.location.replace("https://softskills.rsv.ru/")},[]),null),color:"orange",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",isExternalPage:!0,keywords:["рсв","россия страна возможностей","софтскиллс","навыки"],isNew:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(gh,{}),path:pT,Component:jS,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:gT,pageSize:"big",Component:ES,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(ha,{}),path:hc,Component:DS,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(fh,{}),path:xc,Component:$s,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(eo,{}),path:dT,Component:wS,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(ar))},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Ki,{}),path:Nn,Component:zs,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]}}),Yo=e=>{var i,n,s;return{...vc,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(gi,{}),path:_d,Component:SS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(gi,{}),path:wd,Component:nT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(gi,{}),path:jd,Component:O?rt:sT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(Q,{}),path:kd,Component:O?rt:TS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(Q,{}),path:Sd,Component:$S,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(Q,{}),path:Td,Component:PS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(Q,{}),path:Ed,Component:CS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(Q,{}),path:$d,Component:OS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(Q,{}),path:Pd,Component:iS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(Q,{}),path:Cd,Component:tT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(Q,{}),path:Od,Component:NS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(Q,{}),path:Ad,Component:IS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(Q,{}),path:Dd,Component:iT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(Q,{}),path:Nd,Component:RS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(Q,{}),path:Id,Component:LS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(Q,{}),path:Rd,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):MS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:Q,path:Ld,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?zS:()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(Q,{}),path:xs,Component:FS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(Q,{}),path:zd,Component:BS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(Q,{}),path:Fd,Component:O?rt:WS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(xh,{}),path:Bd,Component:O?rt:xd,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:C},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(Q,{}),path:Md,Component:US,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(Q,{}),path:Wd,Component:O?rt:HS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(Q,{}),path:Hd,Component:O?rt:VS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(Q,{}),path:Ud,Component:O?rt:GS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(Q,{}),path:Vd,Component:qS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(Q,{}),path:Gd,Component:YS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(Q,{}),path:qd,Component:KS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(Q,{}),path:Yd,Component:JS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(Q,{}),path:Kd,Component:XS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(Q,{}),path:Jd,Component:md,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(Q,{}),path:Xd,Component:QS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(Q,{}),path:Qd,Component:ZS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(Q,{}),path:hT,Component:O?rt:eT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C}}},Ko=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),fT=["settings","profile","chat","schedule","payments","project-activity","all-students"],xT=["home","schedule","acad-performance","all","profile"],mT=["home","schedule","alerts","all","profile"],bT=["home","doclist","alerts","all","profile"],vT=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(M.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??bn,s=Oa.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},Jo={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},yT=()=>q(wT),Zd=k(),ep=k(),tp=k(),ip=k(),_T=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ui=e=>{if(!e)return Co();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(Co()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},wT=V(Jo).on(Zd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(ep,()=>({...Jo})).on(tp,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ui(n)[window.location.hash.slice(2,window.location.hash.length)]:pi()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ui(n),...Oo()}:{...pi(),...Yo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ui(n):pi(),leftsideBarRoutes:Ko(vT(i),(i==null?void 0:i.user_status)==="staff"?ui(n):pi()),homeRoutes:Ko(s??JSON.parse(localStorage.getItem(M.HomeRoutes)??JSON.stringify(fT)),(i==null?void 0:i.user_status)==="staff"?{...ui(n),...Oo()}:{...pi(),...Yo(i)})})).on(ip,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:_T(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),We={useMenu:yT},ot={changeOpen:Zd,clearStore:ep,defineMenu:tp,changeNotifications:ip},np=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:gc,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ft,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:rn,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:rn,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Hs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:_l,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Ms,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:C,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:rc,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},jT={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},sp=(e,i)=>i.filter(({type:n})=>e[jT[n]]),kT={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},zn=L(async({settings:e})=>{try{const{data:i}=await bg();return sp(e,i).map(({id:n,type:s,title:o,text:a})=>np(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),ST=L(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&ot.changeNotifications({page:i,notifications:1})})}),TT=L(({notifications:e})=>{const{pageId:i}=e[0];i&&ot.changeNotifications({page:i,notifications:1})}),Mn=L(async({id:e,pageId:i})=>{try{return await vg(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Fn=L(async()=>{try{await yg()}catch{throw new Error("Не удалось скрыть все уведомления")}}),ET=e=>{e&&ot.changeNotifications({page:e,notifications:0})},op=k(),ap=k(),rp=k(),lp=k(),cp=k(),dp=k(),pp=k(),ae=V(kT).reset(pp);ze({from:ap,to:zn});P({clock:zn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});P({clock:zn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});P({clock:zn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,ST]});P({clock:op,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,TT]});ze({from:lp,to:Mn});P({clock:Mn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(ET(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});P({clock:Mn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});P({clock:Mn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});ze({from:cp,to:Fn});P({clock:Fn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});P({clock:Fn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});P({clock:Fn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});P({clock:rp,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});P({clock:dp,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const $T=()=>ge(ae),It={initialize:ap,add:op,clearById:lp,clearVisibleById:rp,clearAll:cp,clearAllVisible:dp,clearStore:pp},at={useLkNotifications:$T},PT=Object.freeze(Object.defineProperty({__proto__:null,events:It,selectors:at},Symbol.toStringTag,{value:"Module"})),Xo={messages:null,error:null},CT=()=>({data:q(Qo).messages,loading:q(vi.pending),error:q(Qo).error}),vi=L(async()=>{try{return(await qh("1")).data}catch(e){throw new Error(e)}}),up=k(),Qo=V(Xo).on(vi,e=>({...e,error:null})).on(vi.doneData,(e,i)=>({...e,messages:i})).on(vi.failData,(e,i)=>({...e,error:i.message})).on(up,()=>({...Xo})),OT={useMessages:CT},AT={getMessagesFx:vi},DT={clearStore:up},NT=Object.freeze(Object.defineProperty({__proto__:null,effects:AT,events:DT,selectors:OT},Symbol.toStringTag,{value:"Module"})),Zo={type:null,personalNotifications:null,error:null,completed:!1},IT=()=>({data:q(qt).personalNotifications,loading:q(Gt.pending),error:q(qt).error,completed:q(qt).completed}),RT=()=>q(qt).type,hp=k(),gp=L(e=>e),Gt=L(async()=>{const{type:e}=qt.getState();if(e==="notifications")try{return(await Ma()).data}catch(i){throw new Error(i)}try{return{docs:(await Fa()).data}}catch(i){throw new Error(i)}}),pn=L(async e=>{const{type:i}=qt.getState(),n=i==="notifications"?dg:ug;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),fp=k(),qt=V(Zo).on(gp,(e,i)=>({...e,type:i})).on(Gt,e=>({...e,error:null})).on(Gt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Gt.failData,(e,i)=>({...e,error:i.message})).on(pn.doneData,e=>({...e})).on(pn.failData,(e,i)=>({...e,error:i.message})).on(hp,(e,i)=>({...e,completed:i.completed})).on(fp,()=>({...Zo}));pn.doneData.watch(()=>Gt());const LT={usePersonalNotifications:IT,useType:RT},zT={setNotificationsType:gp,getPersonalNotificationsFx:Gt,viewPersonalNotificationsFx:pn},MT={changeCompleted:hp,clearStore:fp},FT=Object.freeze(Object.defineProperty({__proto__:null,effects:zT,events:MT,selectors:LT},Symbol.toStringTag,{value:"Module"})),BT=vn({api:{get:rg}}),ea={superiorRoom:null,error:null},HT=()=>({data:q(ta).superiorRoom,loading:q(yi.pending),error:q(ta).error}),xp=k(),UT=L(async e=>{});ze({from:xp,to:UT});const yi=L(async()=>{try{return(await Qh()).data}catch{throw new Error("Не удалось загрузить раздел")}}),mp=k(),ta=V(ea).on(yi,e=>({...e,error:null})).on(yi.doneData,(e,i)=>({...e,superiorRoom:i})).on(yi.failData,(e,i)=>({...e,error:i.message})).on(mp,()=>({...ea})),WT={useSuperiorRoom:HT},VT={getSuperiorRoomFx:yi},GT={postSuperiorRoom:xp,clearStore:mp},qT=Object.freeze(Object.defineProperty({__proto__:null,effects:VT,events:GT,selectors:WT},Symbol.toStringTag,{value:"Module"})),ia={teacherDataVerification:null,error:null,completed:!1},YT=()=>({data:q(Jn).teacherDataVerification,loading:q(_i.pending),error:q(Jn).error,completed:q(Jn).completed}),bp=k(),vp=k(),KT=L(async e=>{try{return(await gg(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});ze({from:bp,to:KT});const _i=L(async()=>{try{return(await hg()).data}catch{throw new Error("Не удалось войти")}}),yp=k(),Jn=V(ia).on(_i,e=>({...e,error:null})).on(_i.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(_i.failData,(e,i)=>({...e,error:i.message})).on(vp,(e,i)=>({...e,completed:i.completed})).on(yp,()=>({...ia})),JT={useTeacherDataVerification:YT},XT={getTeacherDataVerificationFx:_i},QT={postTeacherDataVerification:bp,changeCompleted:vp,clearStore:yp},ZT=Object.freeze(Object.defineProperty({__proto__:null,effects:XT,events:QT,selectors:JT},Symbol.toStringTag,{value:"Module"})),eE=[jg,Je,Ng,Lg,Kg,NT,FT,Cv,Cg,BT,yj,qT,ZT,Hg,Sg,PT],tE=()=>{eE.forEach(e=>{e.events.clearStore()})},iE=()=>{localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh),sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)},pt=localStorage.getItem(M.Token)??"",ut=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Bn=L(async e=>{try{const{data:i}=await Ih(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Lt.post("/old",n)}catch{}return iE(),ut()?(localStorage.setItem(M.Token,i.token),localStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(M.Token,i.token),sessionStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),$t=L(async e=>{try{const[i,n]=await Promise.all([Rh(e.token),za()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:_g({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:ut()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),ms=L(async e=>{try{return(await Lh(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),_p=L(()=>{ut()?(localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)):(sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),sessionStorage.removeItem(M.JWTRefresh)),tE()}),wp=e=>{const i=localStorage.getItem(M.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(M.SavePassword,n.toString()),n},jp=k(),Ks=k(),kp=k(),Sp=k(),Tp=k();ze({from:jp,to:Bn});P({clock:Bn.doneData,target:$t});ze({from:Ks,to:_p});pt&&ut()?$t({token:pt,jwt:localStorage.getItem(M.JWT)}):_p();const nE={currentUser:null,error:null,isAuthenticated:!!(pt!=null&&pt.length),savePassword:ut(),loginEuz:""};wp();const Ep=V(nE).on($t,e=>({...e,error:null})).on($t.doneData,(e,i)=>i).on($t.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(pt!=null&&pt.length),savePassword:ut()})).on(Bn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:ut()})).on(Ks,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:ut()})).on(Tp,(e,{savePassword:i})=>({...e,savePassword:wp(i)})).on(ms,e=>({...e,error:null})).on(ms.doneData,(e,i)=>({...e,loginEuz:i})).on($t.failData,(e,i)=>({...e,error:i.message})).on(Sp,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(kp,e=>({...e,currentUser:null})),be={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Ep);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(Bn.pending),error:i}}},Rt={login:jp,logout:Ks,changeSavePassword:Tp,clear:kp,update:Sp},sE={getUserFx:$t,getLoginEuzFx:ms},oE=()=>{const e="0.0.1";localStorage.getItem(M.Version)!==e&&(localStorage.clear(),localStorage.setItem(M.Version,e),Rt.logout())},aE=u.div`
    max-height: 400px;
    overflow-y: auto;
`,rE=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ue,{text:e.message,image:t.jsx(mh,{}),children:t.jsxs($,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(ve,{}),t.jsx(Tc,{title:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:t.jsxs($,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(ua,{})]})}),children:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(aE,{children:e.stack})})})]})})}),lE=/Cannot access 'get' before initialization/,cE=/Failed to fetch dynamically imported module/,dE=2,na="reloadCount";class $p extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n);const s=Number(sessionStorage.getItem("reloadCount"))??0;s<dE&&(i!=null&&i.message)&&(cE.test(i.message)||lE.test(i.message))&&(sessionStorage.setItem(na,`${s+1}`),window.location.reload())}render(){return this.state.hasError?t.jsx(rE,{error:this.state.error}):(sessionStorage.setItem(na,"0"),this.props.children)}}const pE=O?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",wi=Lt.create({baseURL:pE}),uE={headers:{"Content-Type":"application/json"}};wi.interceptors.request.use(La);wi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await Zn(wi)(e):e},Zn(wi));const hE=async e=>{var n;const i=await wi.post("",{query:e},uE);if(Pp(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Pp(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Pp(e[i]))return!0}return!1}const gE=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Cp=k(),Js=bh({effect:async({currentUser:e})=>({...(await hE(gE((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Ep}),fE=$a(Js,null);P({clock:Cp,target:Js});const xE=Js.pending,mE={load:Cp},R$={peTeacher:fE,isLoading:xE},Op=k(),Ap=L(tg);P({clock:Op,target:Ap});const Dp=V([]),L$=hn(Dp,e=>e.map(i=>i.divisionName));P({clock:Ap.doneData,target:Dp});function Np(e){const{pathname:i}=Zt();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const bE=()=>{const{allRoutes:e}=We.useMenu();return e?t.jsxs(Pa,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(Ca,{path:i,component:n,exact:!s},i)),t.jsx(Ke,{exact:!0,to:Fs})]}):null},vE=le.memo(bE),yE=u.div`
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
`,_E=()=>{const{open:e,content:i,position:n}=Xf.useContextMenu(),s=l.useRef(null);return ii(s,()=>Re.close()),t.jsx(An,{isOpen:e,children:t.jsx(yE,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Ip=200,wE=5e3,jE=()=>{const{visibleNotifications:e}=at.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{It.clearVisibleById(a)},Ip)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??wE))},[e]),{handleClose:o,closing:i}},kE=u.div`
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
`,SE=u.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Ip/1e3}s forwards;

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
`;u.div`
    height: 4px;
    border-radius: 3px;
    background: ${w.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const TE=()=>{const{visibleNotifications:e}=at.useLkNotifications(),{closing:i,handleClose:n}=jE();return t.jsx(kE,{children:e.map(s=>t.jsx(SE,{onClick:n(s.id),open:i!==s.id,children:t.jsx($c,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},sa=u.div`
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
`,EE=({loading:e})=>{const{data:{user:i},error:n}=be.useUser(),s=i?Ne(i==null?void 0:i.fullName):w.blue.main,o=()=>sE.getUserFx(JSON.parse(localStorage.getItem(M.Token)??"")),a=()=>Rt.logout();return n?t.jsx(sa,{$loading:!0,color:s,children:t.jsx(ue,{text:n,children:t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(gn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(sa,{color:s,$loading:e,children:[t.jsx(wn,{short:!0,width:"100px"}),e&&t.jsx(Ge,{})]})},$E=u.div`
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
`,PE=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=qs.useStory();return t.jsx($E,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():Tt.changeCurrentPage({value:o+1})})})},CE=u(_n)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,OE=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=qs.useStory();return t.jsxs(CE,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(PE,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(yh,{}):t.jsx(vh,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Qe,{}),onClick:n})]})},AE=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,DE=u(nt)`
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
`,NE=u.div`
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
    transform: ${({align:e})=>AE(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,IE=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=et();return t.jsxs(DE,{imageAlign:p,onClick:()=>c(x=>!x),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Ts,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(NE,{imageAlign:p,onClick:()=>c(x=>!x),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:f,children:o}),t.jsx(ne,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),Tt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},RE=u.div`
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
`,oa=u.div`
    position: absolute;
    top: 50px;
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"auto"};
    height: calc(100% - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
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
`,LE=()=>{const{pages:e,isOpen:i,currentPage:n}=qs.useStory(),s=l.useRef(null);ii(s,()=>Tt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(An,{isOpen:i,children:t.jsx(RE,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(OE,{pages:e.length,onClose:()=>Tt.close(),playing:o}),t.jsx(oa,{left:"15px",onClick:()=>{n!==0&&Tt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(Pi,{})}),t.jsx(IE,{setPlaying:a,currentPage:n,...r}),t.jsx(oa,{right:"15px",onClick:()=>{n!==e.length-1?Tt.changeCurrentPage({value:n+1}):Tt.close(),a(!0)},children:t.jsx(Ze,{})})]})})})},zE=()=>{const{data:{user:e}}=be.useUser(),{notifications:i,loading:n,loaded:s}=at.useLkNotifications(),{settings:o}=ti.useSettings(),[a]=tt([or.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{es.getElectronicInteraction(),a&&!a.status&&It.add(np("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||es.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(sp(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,It.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{ot.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},ME=()=>{const{data:{user:e}}=be.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Th);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},FE=()=>{const e=Ur(),{open:i}=Z(),n=ME();return zE(),yt(),l.useEffect(()=>{n&&n&&i(t.jsx(ad,{}),"Что нового")},[n]),{currentPage:e}},BE=u.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,HE=u.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    flex: 1;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,UE=u.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-gutter: stable;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    flex: 1;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
    }
`,WE=()=>{const{data:{user:e}}=be.useUser(),i=l.useRef(null),{allRoutes:n}=We.useMenu(),{currentPage:s}=FE(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return Np(i.current),t.jsxs(BE,{children:[t.jsx(EE,{loading:!e||!n}),t.jsx(LE,{}),t.jsx(Ow,{}),t.jsxs(HE,{children:[t.jsx(mw,{headerVisible:(s==null?void 0:s.hiddenTitle)||o,currentPage:s}),t.jsx(UE,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx($p,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(vE,{})})})}),t.jsx(tk,{})]}),t.jsx(n1,{}),t.jsx(Dw,{}),t.jsx(Iw,{}),t.jsx(_E,{}),t.jsx(lk,{}),t.jsx(TE,{})]})},VE=le.memo(WE),GE=()=>{const{data:{isAuthenticated:e,user:i}}=be.useUser(),{data:n}=Je.selectors.useData(),{settings:s}=ti.useSettings();return Np(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Le.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Je.effects.getFx(),Le.getWorkerPosts(),Op()),mE.load())},[e,i]),l.useEffect(()=>{i&&(s?ot.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):tf.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(VE,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Pa,{children:[e_.map(({path:o,Component:a},r)=>t.jsx(Ca,{path:o,component:a,exact:!0},r)),t.jsx(Ke,{exact:!0,to:ac})]})})},qE=u.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;oE();const YE=()=>(yt(),t.jsx(Qy,{children:t.jsx(_h,{basename:"/",children:t.jsx(qE,{children:t.jsx($p,{children:t.jsx(GE,{})})})})}));wh.render(t.jsxs(le.StrictMode,{children:[t.jsx(ej,{}),t.jsx(YE,{})]}),document.getElementById("root"));export{F as $,Qk as A,Ln as B,Po as C,ul as D,Un as E,jn as F,xg as G,Q_ as H,Et as I,mE as J,Ep as K,X as L,te as M,$ as N,St as O,wt as P,ve as Q,S1 as R,gt as S,W as T,w as U,P0 as V,Me as W,Ge as X,ne as Y,ct as Z,Ys as _,Bg as a,sv as a$,Es as a0,R$ as a1,$f as a2,ue as a3,x$ as a4,m$ as a5,me as a6,r$ as a7,be as a8,Rn as a9,nt as aA,us as aB,jc as aC,_r as aD,T_ as aE,$_ as aF,We as aG,S_ as aH,xc as aI,Q1 as aJ,I$ as aK,vt as aL,fe as aM,ei as aN,it as aO,p$ as aP,L$ as aQ,Eg as aR,ro as aS,lb as aT,Jb as aU,g$ as aV,Xb as aW,u$ as aX,wb as aY,h$ as aZ,As as a_,gw as aa,yk as ab,d$ as ac,Te as ad,ur as ae,ZE as af,Ws as ag,Af as ah,Oi as ai,ti as aj,Be as ak,Gy as al,Sr as am,QE as an,Rt as ao,h0 as ap,Ei as aq,Ai as ar,zT as as,It as at,LT as au,A$ as av,D$ as aw,l$ as ax,N$ as ay,vn as az,he as b,Ml as b$,Dp as b0,f$ as b1,p_ as b2,Sk as b3,Hk as b4,re as b5,wd as b6,rn as b7,Z1 as b8,y$ as b9,Ij as bA,Rc as bB,Gs as bC,O$ as bD,jt as bE,gc as bF,tw as bG,Ne as bH,Vs as bI,ss as bJ,vj as bK,Cc as bL,lw as bM,R as bN,Kn as bO,_$ as bP,dl as bQ,S$ as bR,T$ as bS,E$ as bT,k$ as bU,j$ as bV,w$ as bW,je as bX,J_ as bY,Oc as bZ,H1 as b_,g_ as ba,h_ as bb,zy as bc,fg as bd,d1 as be,qe as bf,ke as bg,b$ as bh,Hs as bi,Mt as bj,J as bk,Re as bl,kn as bm,ii as bn,Dn as bo,or as bp,es as bq,Sg as br,Ie as bs,_t as bt,dt as bu,Qv as bv,Xv as bw,ek as bx,C$ as by,$$ as bz,Hg as c,Gf as c$,zl as c0,i$ as c1,n$ as c2,Tn as c3,ck as c4,Ba as c5,t_ as c6,X1 as c7,J1 as c8,K1 as c9,Ao as cA,Oa as cB,bn as cC,n_ as cD,i_ as cE,e$ as cF,_c as cG,yc as cH,t$ as cI,v$ as cJ,_n as cK,ew as cL,sE as cM,at as cN,G1 as cO,nw as cP,s$ as cQ,WT as cR,VT as cS,o$ as cT,wg as cU,XE as cV,JE as cW,cn as cX,Zw as cY,Ts as cZ,jg as c_,Bc as ca,bj as cb,Mi as cc,si as cd,ws as ce,P$ as cf,pj as cg,mc as ch,uj as ci,hj as cj,Vc as ck,Wt as cl,wj as cm,id as cn,_j as co,od as cp,rj as cq,zw as cr,Uj as cs,Lj as ct,yt as cu,zc as cv,Wc as cw,al as cx,kj as cy,kc as cz,Le as d,c$ as d0,Zk as d1,Ui as d2,Kk as d3,Jk as d4,Yk as d5,fd as d6,BT as d7,Mg as e,zg as f,B as g,a$ as h,Cf as i,QT as j,U as k,JT as l,XT as m,oe as n,Ue as o,Fi as p,O as q,_o as r,ye as s,hE as t,ft as u,_ as v,Di as w,Or as x,Z as y,st as z};