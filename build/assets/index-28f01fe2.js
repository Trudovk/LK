import{j as t}from"./vendor-561dac3a.js";import{T as i}from"./index-d590282b.js";import{g as r}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-2b9984db.js";import{g as l}from"./get-teacher-subdivisions-5cd556a9.js";import{t as m}from"./index-b918663b.js";import{A as s}from"./index-7cc4f467.js";import"./send-form-df07913d.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...l("buhg"),...o(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),T=()=>t.jsx(i,{model:m,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{T as default};
