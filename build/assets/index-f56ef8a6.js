import{r as s,j as a}from"./vendor-2324f29b.js";import{a6 as d,aw as u,F as m,I as f,S,aA as h,d as x,U as F}from"./index-386db3e9.js";const g=[{id:0,title:"Являющиеся детьми-сиротами и детьми, оставшимися без попечения родителей, лицами из числа детей-сирот и детей, оставшихся без попечения родителей, лицами, потерявшими в период обучения обоих родителей или единственного родителя, детьми-инвалидами"},{id:1,title:"Являющиеся инвалидами I и II групп, инвалидами с детства"},{id:2,title:"Подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне"},{id:3,title:"Являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также студентам из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» - «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» - «в» пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ «О воинской обязанности и военной службе»"},{id:4,title:"Получившие государственную социальную помощь"}],A=e=>({title:"Оформление социальной стипендии",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Основание для получения социальной стипендии:",type:"select",fieldName:"reason",value:null,width:"100",items:g,editable:!0,required:!0}],hint:"После получения положительного решения необходимо прийти в Профком за распечатанным заявлением и принести с собой все необходимые документы",documents:{files:[],fieldName:"docs",required:!0,maxFiles:4}}),I=()=>{var p;const[e,i]=s.useState(null),[o,r]=s.useState(!1),[n,c]=s.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=d.useApplications();return s.useEffect(()=>{l&&i(A(l))},[l]),a.jsx(u,{isDone:t,children:!!e&&!!i&&a.jsxs(m,{children:[a.jsx(f,{...e,collapsed:t,setData:i}),a.jsx(S,{text:t?"Отправлено":"Отправить",action:()=>h(x.PR_SOCSTIP,[e],c,r),isLoading:n,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:F(e)&&!!((p=e==null?void 0:e.documents)!=null&&p.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
