import{j as t}from"./vendor-e9654bfa.js";import{T as r}from"./index-1244bdbe.js";import{g as o}from"./get-basic-fields-application-teacher-1d74d9ae.js";import{g as a,a as i}from"./get-method-obtaining-fields-431242aa.js";import{g as s}from"./get-teacher-subdivisions-500dfe3f.js";import{t as m}from"./get-default-subdivision-205744b6.js";import{A as l}from"./index-5ad0a555.js";import"./get-method-obstaing-c0726de9.js";const d=e=>({title:"Копии документов из личного дела",data:[...o(e),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0},...a(),...s(),...i()],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),x=()=>t.jsx(r,{model:m,getForm:d,isSpecialField:!0,formId:l.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE});export{x as default};