import{aI as h,r as o,j as l}from"./vendor-1714f5a3.js";import{az as n,bc as c}from"./index-a5eecfde.js";import{T as i}from"./index-bb162ee8.js";import"./week-schedule-5e2734c9.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";import"./index-8aa3d1de.js";import"./index-167f2659.js";import"./student-api-f38ccc74.js";import"./page-link-content-10aa0ec7.js";import"./page-link-1120fecf.js";import"./found-pages-df4c83c4.js";const d=e=>((e==null?void 0:e.length)===7||(e==null?void 0:e.length)===8)&&e[3]==="-",k=()=>{const e=h(),{data:p}=n.useSchedule(),t=d(e.params.filter),[a,s]=o.useState(null);return o.useEffect(()=>{var r;const m=t?c("",e.params.filter):c(((r=e==null?void 0:e.params)==null?void 0:r.filter)??"");s(null),e.params.filter&&m.then(u=>s(u))},[e.params.filter]),l.jsx(i,{teacherName:t?void 0:e.params.filter,group:t?e.params.filter:void 0,data:{...p,schedule:a},loading:!a,error:null})};export{k as default};
