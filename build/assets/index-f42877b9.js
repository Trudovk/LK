import{j as t}from"./vendor-561dac3a.js";import{t as i}from"./index-b918663b.js";import{T as r}from"./index-d590282b.js";import{g as o}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a}from"./get-teacher-subdivisions-5cd556a9.js";import{A as m}from"./index-7cc4f467.js";import"./send-form-df07913d.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const l=[{id:0,title:"сведения о поступлении в образовательную организацию"},{id:1,title:"cведения об отчислении из образовательной организации"},{id:2,title:"cведения об уходе в академический отпуск"},{id:3,title:"cведения о выходе из академического отпуска"}],s=e=>({title:"Заверение и выдача копий внутренних документов",data:[...o(e),...a("mob"),{fieldName:"requested_docs",title:"Запрашиваемые документы",type:"select",items:l,value:null,width:"100",required:!0,editable:!0},{fieldName:"to_mil_commisariats_or_courts",title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",type:"checkbox",value:"",editable:!0},{fieldName:"commentary",title:"Комментарий",type:"textarea",value:"",editable:!0}]}),b=()=>t.jsx(r,{model:i,getForm:s,isSpecialField:!0,formId:m.CERTIFIED_COPIES_OF_MILITARY_DOCS});export{b as default};
