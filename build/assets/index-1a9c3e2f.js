import{b6 as h,r as o,j as l}from"./vendor-e9654bfa.js";import{b6 as n,b$ as c}from"./index-5ad0a555.js";import{T as d}from"./index-57eade7d.js";import"./week-schedule-60862079.js";import"./index-11402b8c.js";const i=e=>((e==null?void 0:e.length)===7||(e==null?void 0:e.length)===8)&&e[3]==="-",b=()=>{const e=h(),{data:u}=n.useSchedule(),s=i(e.params.filter),[a,t]=o.useState(null);return o.useEffect(()=>{var r;const p=s?c("",e.params.filter):c(((r=e==null?void 0:e.params)==null?void 0:r.filter)??"");t(null),e.params.filter&&p.then(m=>t(m))},[e.params.filter]),l.jsx(d,{teacherName:s?void 0:e.params.filter,group:s?e.params.filter:void 0,data:{...u,schedule:a},loading:!a,error:null})};export{b as default};