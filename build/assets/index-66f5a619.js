import{j as e,r as a}from"./vendor-561dac3a.js";import{s as u,B as c,F as d,I as m,S as x,aM as b,n as f,b as j}from"./index-7cc4f467.js";const g=t=>({title:"Запрос на восстановление магнитного пропуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Прошу восстановить мой магнитный пропуск в связи с:",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0}],alert:e.jsxs(e.Fragment,{children:["1. Заполнить это заявление.",e.jsx("br",{}),"2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.",e.jsx("br",{}),"3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.",e.jsx("br",{}),"4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).",e.jsx("br",{}),"5. Получить готовый пропуск в бюро пропусков (Центральная проходная).",e.jsx("br",{}),e.jsx("br",{}),"Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления."]})}),h=()=>{const[t,r]=a.useState(null),[o,i]=a.useState(!1),[n,p]=a.useState(!1),s=o??!1,{data:{dataUserApplication:l}}=u.useApplications();return a.useEffect(()=>{l&&r(g(l))},[l]),e.jsx(c,{isDone:s,children:!!t&&!!r&&e.jsxs(d,{children:[e.jsx(m,{...t,collapsed:s,setData:r}),e.jsx(x,{text:s?"Отправлено":"Отправить",action:()=>b(f.PROPUSK_RESTORE,[t],p,i),isLoading:n,completed:o,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:j(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{h as default};
