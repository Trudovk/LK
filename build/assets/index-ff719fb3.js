import{r,j as W}from"./vendor-831b4923.js";import{h as b}from"./index-911082d8.js";const z=({value:t,placeholder:o,loading:h,hintIcon:f,leftIcon:d,focusOn:x,width:S,transformRequest:a,setValue:g,request:H,onValueEmpty:i,customMask:j,onHintClick:l,size:p})=>{const[m,e]=r.useState([]),[w,s]=r.useState(!1);return r.useEffect(()=>{t.length>0?(s(!0),H(t).then(L=>{e(L.data.items.map(c=>{const n=a?a(c):c;return{id:n,title:n,value:n,icon:f}})),s(!1)}).catch(()=>{s(!1),e([])})):(s(!1),e([]),i==null||i())},[t]),W.jsx(b,{value:t,setValue:g,placeholder:o,hints:m,width:S??"180px",focusOn:x,leftIcon:d,loading:w&&h,onHintClick:l,customMask:j,size:p})};export{z as S};
