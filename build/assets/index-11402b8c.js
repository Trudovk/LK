import{r,j as m}from"./vendor-e9654bfa.js";import{i as p}from"./index-5ad0a555.js";const R=({value:s,setValue:c,placeholder:n,onValueEmpty:e,request:o,loading:f,onHintClick:d,hintIcon:h,customMask:x,leftIcon:S,focusOn:g})=>{const[H,i]=r.useState([]),[j,t]=r.useState(!1);return r.useEffect(()=>{s.length>0?(t(!0),o(s).then(l=>{i(l.data.items.map(a=>({id:a,title:a,value:a,icon:h}))),t(!1)}).catch(()=>{t(!1),i([])})):(t(!1),i([]),e==null||e())},[s]),m.jsx(p,{value:s,setValue:c,placeholder:n,hints:H,width:"180px",focusOn:g,leftIcon:S,loading:j&&f,onHintClick:d,customMask:x})};export{R as S};