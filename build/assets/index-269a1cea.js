import{j as t}from"./vendor-561dac3a.js";import{T as r}from"./index-5281eaa7.js";import{g as i}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-155e137c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./index-a874cb3c.js";import{A as d}from"./index-9d4b4175.js";import"./send-form-5a4a94a0.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const p=e=>({title:"Справка по форме 2-НДФЛ",data:[...i(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...a(),...m("buhg"),...o(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),T=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PERSONA_INCOME_TAX_REFERENCE});export{T as default};
