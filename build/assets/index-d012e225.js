import{r as s,j as t}from"./vendor-f1fdae2f.js";import{a5 as l,av as p,F as u,M as m,S as d,Q as f}from"./index-4822c931.js";const x=()=>({title:"Оформить дополнительное соглашение к договору об обучении",data:[]}),g=()=>{const[a,o]=s.useState(null),[i,c]=s.useState(!1),[n]=s.useState(!1),e=i??!1,{data:{dataUserApplication:r}}=l.useApplications();return s.useEffect(()=>{r&&o(x())},[r]),t.jsx(p,{isDone:e,children:!!a&&!!o&&t.jsxs(u,{children:[t.jsx(m,{title:"Информация по заявке",type:"info",visible:!e,children:"Данный вид услуги доступен только для студентов, обучающихся на платной договорной основе."}),t.jsx(d,{text:e?"Отправлено":"Отправить",action:()=>null,isLoading:n,completed:i,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:e,isActive:f(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{g as default};