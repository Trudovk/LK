import{j as n}from"./vendor-f1fdae2f.js";import{bn as u,bV as t}from"./index-4822c931.js";import{T as c}from"./index-e27c0e39.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=u.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,d=e.semestr.endDate;return n.jsx(c,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:d})};export{S as default};