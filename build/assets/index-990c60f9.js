import{j as u}from"./vendor-2324f29b.js";import{bo as l,bV as t}from"./index-386db3e9.js";import{T as d}from"./index-0adfa9c6.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(d,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
