import{aI as h,r as o,j as l}from"./vendor-0c76c893.js";import{az as n,bc as c}from"./index-a7bcef13.js";import{T as i}from"./index-ea76b884.js";import"./week-schedule-ef3d4f66.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";import"./index-b819e842.js";import"./index-80d7ddc5.js";import"./student-api-8e666bb3.js";import"./page-link-content-72e3200e.js";import"./page-link-a3eaaa07.js";import"./found-pages-1cc530a7.js";const d=e=>((e==null?void 0:e.length)===7||(e==null?void 0:e.length)===8)&&e[3]==="-",k=()=>{const e=h(),{data:p}=n.useSchedule(),t=d(e.params.filter),[a,s]=o.useState(null);return o.useEffect(()=>{var r;const m=t?c("",e.params.filter):c(((r=e==null?void 0:e.params)==null?void 0:r.filter)??"");s(null),e.params.filter&&m.then(u=>s(u))},[e.params.filter]),l.jsx(i,{teacherName:t?void 0:e.params.filter,group:t?e.params.filter:void 0,data:{...p,schedule:a},loading:!a,error:null})};export{k as default};
