import{j as t}from"./vendor-f1fdae2f.js";import{t as i}from"./index-d4f6672e.js";import{T as r}from"./index-4b9084b7.js";import{g as o}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a}from"./get-teacher-subdivisions-1b4fd80d.js";import{A as m}from"./index-c9a56a5b.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const l=[{id:0,title:"сведения о поступлении в образовательную организацию"},{id:1,title:"cведения об отчислении из образовательной организации"},{id:2,title:"cведения об уходе в академический отпуск"},{id:3,title:"cведения о выходе из академического отпуска"}],s=e=>({title:"Заверение и выдача копий внутренних документов",data:[...o(e),...a("mob"),{fieldName:"requested_docs",title:"Запрашиваемые документы",type:"select",items:l,value:null,width:"100",required:!0,editable:!0},{fieldName:"to_mil_commisariats_or_courts",title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",type:"checkbox",value:"",editable:!0},{fieldName:"commentary",title:"Комментарий",type:"textarea",value:"",editable:!0}]}),T=()=>t.jsx(r,{model:i,getForm:s,isSpecialField:!0,formId:m.CERTIFIED_COPIES_OF_MILITARY_DOCS});export{T as default};