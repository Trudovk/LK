import{j as t}from"./vendor-cbee1f3c.js";import{T as r}from"./index-7e743858.js";import{g as o}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as i,a}from"./get-method-obtaining-fields-687f3d58.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{t as s}from"./index-9e9413dc.js";import{A as l}from"./index-1f9cdbd4.js";import"./send-form-1105d155.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const d=e=>({title:"Копии документов из личного дела",data:[...o(e),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0},...i(),...m(),...a()],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),T=()=>t.jsx(r,{model:s,getForm:d,isSpecialField:!0,formId:l.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE});export{T as default};