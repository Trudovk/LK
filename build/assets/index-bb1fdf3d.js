import{s as d,a7 as P,aF as u,j as e,cc as K,r as l,a2 as S,q as L,a4 as W,G as E,cd as k,w as _,L as O,M as F,ce as N,bT as A,bU as H}from"./vendor-c0388033.js";import{aV as j,L as C,aW as x,aX as z,aY as w,aZ as T,a_ as h,l as p,q as m,d as R,a$ as U,h as f,u as q,b0 as G,b1 as Q,ag as J,W as V,H as B,o as $}from"./index-7b661082.js";const X=(s,t)=>t.filter(a=>j(a.name).includes(j(s))),Y=d(P).withConfig({componentId:"sc-1319ptr-0"})(["text-decoration:none;.chat-item-content{display:flex;align-items:center;justify-content:center;width:100%;color:",";width:100%;padding:10px;border-radius:var(--brLight);background:",";overflow:hidden;position:relative;&:hover{filter:brightness(0.95);}.name-and-message{display:flex;flex-direction:column;justify-content:center;width:100%;max-width:200px;& > b{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.8em;}.last-message{width:100%;font-size:0.8em;opacity:0.7;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}.sent-time{min-height:30px;width:100%;display:flex;align-items:flex-start;justify-content:flex-end;font-size:0.8em;opacity:0.6;font-weight:500;}}"],({isChosen:s})=>s?"#fff":"var(--text)",({isChosen:s})=>s?C.blue.main:"var(--block)"),Z=({avatar:s,name:t,lastMessage:a,chatId:n,loading:i,amountOfUnreadMessages:r,isOpen:o})=>{var g;const c=(g=u(x))==null?void 0:g.params;return i?e.jsx(se,{}):e.jsx(Y,{to:z+`/${n}`,isChosen:(c==null?void 0:c.chatId)===n,isOpen:o,children:e.jsxs("div",{className:"chat-item-content",children:[o?e.jsx(w,{name:t,avatar:s,width:"40px",height:"40px",marginRight:"7px",notifications:r}):e.jsx(w,{name:t,avatar:s,width:"45px",height:"45px",marginRight:"0",notifications:r}),o&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"name-and-message",children:[e.jsx("b",{children:t}),e.jsx("div",{className:"last-message",children:a.message})]}),e.jsx("div",{className:"sent-time",children:a.sentTime})]})]})})},ee=d.div.withConfig({componentId:"sc-1nhr3r-0"})(["display:flex;align-items:center;padding:10px;.name-and-message{display:flex;flex-direction:column;justify-content:center;}"]),se=()=>e.jsxs(ee,{children:[e.jsx(T,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0 7px 0 0"}),e.jsxs("div",{className:"name-and-message",children:[e.jsx(T,{shape:"rect",size:{width:"150px",height:"12px"},margin:"2px 0"}),e.jsx(T,{shape:"rect",size:{width:"70px",height:"10px"},margin:"0"})]})]}),te=d.div.withConfig({componentId:"sc-1wk8wcw-0"})(["display:flex;align-items:flex-end;padding:",";position:static;.message-avatar{width:32px;height:32px;position:sticky;bottom:0px;top:0px;}.name-and-message{display:flex;flex-direction:column;background:",";color:",";padding:7px;border-radius:",";box-shadow:var(--block-shadow);margin-left:10px;max-width:40%;.name-and-time{b{color:",";font-size:0.8em;margin-bottom:5px;margin-right:10px;}span{font-size:0.7em;opacity:0.8;}}.message{font-size:1em;}}@media (max-width:1000px){.name-and-message{max-width:70%;}}"],({isLast:s})=>s?"2px 0 10px 0":"2px 0",({isYourMessage:s})=>s?C.blue.main:"var(--block)",({isYourMessage:s})=>s?"#fff":"var(--text)",({isLast:s})=>s?"10px 10px 10px 0":"10px",({isYourMessage:s})=>s?"#fff":"var(--text)"),ae=({name:s,message:t,isLast:a})=>e.jsx(te,{isYourMessage:s==="Kostya Doloz",isLast:a,onContextMenu:n=>{h.open({e:n,content:e.jsx(ne,{message:t}),height:70})},children:e.jsxs("div",{className:"name-and-message",children:[e.jsxs("div",{className:"name-and-time",children:[e.jsx("b",{children:s}),e.jsx("span",{children:p(t.sentTime)})]}),e.jsx("span",{className:"message",children:t.message})]})}),ne=({message:s})=>e.jsx(e.Fragment,{children:e.jsx(m,{text:"Копировать",icon:e.jsx(K,{}),width:"100%",align:"left",background:"transparent",onClick:()=>{navigator.clipboard.writeText(s.message??""),h.close(),R.evokePopUpMessage({message:"Сообщение скопировано",type:"info"})}})}),ie=d.div.withConfig({componentId:"sc-1eual6l-0"})(["overflow-y:auto;max-height:",";"],({height:s})=>s-170+"px"),oe=({chats:s,isOpen:t})=>{const{height:a}=U();return e.jsxs(ie,{height:a,children:[!s.length&&e.jsx(f,{size:3,children:"Нет чатов"}),s.map(n=>l.createElement(Z,{...n,key:n.name,loading:!1,isOpen:t}))]})},re=d.div.withConfig({componentId:"sc-n06mxd-0"})(["width:100%;height:50px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;background:var(--block);box-shadow:5px 0 5px #00000036;position:relative;"]),de=({avatar:s,name:t,loading:a})=>{const[,n]=l.useState(!1),i=l.useRef(null),[r,o]=l.useState(!1),{open:c}=q(),g=S();G(i,()=>n(!1));const I=()=>{r?o(y=>!y):g.push(z)};return e.jsxs(re,{ref:i,children:[e.jsx(m,{icon:e.jsx(L,{}),onClick:I,background:"var(--block)"}),r?e.jsx(J,{whereToSearch:[],searchEngine:()=>[],setResult:()=>null,placeholder:"Поиск сообщений"}):e.jsx(Q,{type:"staff",avatar:s,name:t,loading:a}),e.jsx(m,{icon:e.jsx(W,{}),onClick:y=>h.open({e:y,height:80,content:e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:e.jsx(E,{}),text:"Поиск",onClick:()=>{o(D=>!D),h.close()},width:"100%",align:"left",background:"transparent"}),e.jsx(m,{icon:e.jsx(k,{}),text:"Вложения",onClick:()=>{h.close(),c(e.jsx(ye,{}))},width:"100%",align:"left",background:"transparent"})]})}),background:"var(--block)"})]})},v=s=>{s!=null&&s.current&&s.current.scrollTo({top:s.current.scrollHeight,behavior:"auto"})},ce=d.div.withConfig({componentId:"sc-1pr0rlx-0"})(["width:100%;height:100%;position:relative;overflow-y:auto;button{position:fixed;right:40px;bottom:70px;min-width:35px;height:35px;border-radius:100%;padding:0px;background:var(--settings);transition:0.2s visibility,0.2s opacity,0.2s transform;visibility:",";opacity:",";transform:scale(",");svg{width:22px;height:22px;}}@media (max-width:1000px){button{position:fixed;right:20px;bottom:70px;border-radius:100%;}}"],({buttonVisible:s})=>s?"visible":"hidden",({buttonVisible:s})=>s?"1":"0",({buttonVisible:s})=>s?"1":"0.9"),le=({loading:s})=>{const t=[{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"TestTestTestTestTestTest",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 9, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 9, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 10, 2022 21:12"}],a=l.useRef(null),[n,i]=l.useState(!1);l.useEffect(()=>{v(a)},[t.length]);const r=()=>{var o;if(a.current){const c=a.current.scrollHeight-a.current.offsetHeight-((o=a.current)==null?void 0:o.scrollTop)>350;i(c)}};return e.jsxs(ce,{ref:a,buttonVisible:n,onScroll:r,children:[e.jsx(V,{loading:s,load:()=>null,error:null,data:!s,children:e.jsx(ue,{messages:t})}),e.jsx(m,{icon:e.jsx(_,{}),onClick:()=>v(a)})]})},me={"Peter Parker":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Andrew_Garfield_Spider-Man.jpg/220px-Andrew_Garfield_Spider-Man.jpg","Kostya Doloz":"https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg"},b=s=>{const t={};let a=0,n="";return s.forEach((i,r,o)=>{var c;(((c=o[r-1])==null?void 0:c.sender)!==i.sender||p(o[r-1].sentTime)!==p(i.sentTime)||!o[r-1])&&a++,t[a]?t[a].messages.push(i):(t[a]={messages:[i],avatar:me[i.sender],date:p(i.sentTime)!==n?p(i.sentTime):null},n=p(i.sentTime))}),t},pe=d.div.withConfig({componentId:"sc-14w8ekg-0"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--text);font-weight:600;font-size:0.8em;span{padding:10px 20px;border-radius:var(--brSemi);background:var(--almostTransparentOpposite);}"]),M=({message:s="Выберите чат"})=>e.jsx(pe,{children:e.jsx("span",{children:s})}),he=d.div.withConfig({componentId:"sc-1qy6g0w-0"})(["margin:5px 0 10px 0;color:var(--text);position:sticky;top:10px;z-index:10;h5{background:var(--search);padding:6px 12px;border-radius:var(--brSemi);display:inline-block;}"]),xe=({date:s})=>s?e.jsx(he,{children:e.jsx(f,{size:5,children:s})}):null,ge=d.div.withConfig({componentId:"sc-90i0cx-0"})(["padding:20px 5px;min-height:100%;.messages-section{position:relative;display:flex;align-items:flex-end;width:100%;.messages{width:100%;}}.message-avatar{width:32px;height:32px;position:sticky;bottom:7px;margin-bottom:10px;}@media (max-width:1000px){padding:10px 0px;}"]),ue=({messages:s})=>e.jsxs(ge,{children:[Object.values(b(s)).length===0&&e.jsx(M,{message:"Нет сообщений"}),Object.values(b(s)).map((t,a)=>e.jsxs(e.Fragment,{children:[e.jsx(xe,{date:t.date}),e.jsxs("div",{className:"messages-section",children:[e.jsx("div",{className:"message-avatar",children:e.jsx(w,{name:t.messages[0].sender,avatar:t.avatar,width:"32px",height:"32px",marginRight:"0"})}),e.jsx("div",{className:"messages",children:t.messages.map((n,i)=>e.jsx(ae,{name:n.sender,message:n,isLast:i===t.messages.length-1},i))})]},a)]}))]}),fe=d.div.withConfig({componentId:"sc-93e00n-0"})(["@media (min-width:1001px){width:500px;height:500px;}"]),ye=()=>e.jsx(fe,{children:e.jsx(f,{size:2,align:"left",children:"Вложения"})}),Te=d.div.withConfig({componentId:"sc-csffye-0"})(["padding:14px;min-width:",";width:",";transition:0.2s width,0.2s min-width,0.2s padding,0.2s opacity;height:100%;background:var(--block);color:var(--text);box-shadow:1px 0 5px #00000036;.chat-list-top-section{display:flex;align-items:center;margin-bottom:10px;button{min-width:30px;height:30px;padding:2px;background:transparent;svg{width:17px;height:17px;}}}@media (max-width:1000px){width:",";min-width:",";padding:",";opacity:",";.chat-list-top-section{button{display:none;}}}"],({isOpen:s})=>s?"350px":"115px",({isOpen:s})=>s?"350px":"115px",({chatId:s})=>s?"0":"100%",({chatId:s})=>s?"0":"100%",({chatId:s})=>s?"0":"14px",({chatId:s})=>s?"0":"1"),we=()=>{var o;const[s,t]=l.useState(null),[a,n]=l.useState(!0),i=(o=u(x))==null?void 0:o.params,r=[{avatar:void 0,name:"Стелла",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"1",amountOfUnreadMessages:10},{avatar:"https://upload.wikimedia.org/wikipedia/ru/thumb/d/df/Andrew_Garfield_as_Spider-Man.jpg/280px-Andrew_Garfield_as_Spider-Man.jpg",name:"Питер Паркер",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"2",amountOfUnreadMessages:0},{avatar:void 0,name:"Рафаэль",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"3",amountOfUnreadMessages:0},{avatar:void 0,name:"Леонардо",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"4",amountOfUnreadMessages:0},{avatar:void 0,name:"Бред Питт",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"5",amountOfUnreadMessages:0}];return e.jsxs(Te,{isOpen:a,chatId:i==null?void 0:i.chatId,children:[e.jsxs("div",{className:"chat-list-top-section",children:[e.jsx(f,{size:3,align:"left",children:"Чаты"}),e.jsx(m,{onClick:()=>n(c=>!c),icon:a?e.jsx(O,{}):e.jsx(F,{})})]}),e.jsx(J,{whereToSearch:r,searchEngine:X,setResult:t,placeholder:"Поиск чатов"}),e.jsx(B,{margin:"10px auto"}),e.jsx(oe,{chats:s??r,isOpen:a})]})},je=d.div.withConfig({componentId:"sc-1wrnb99-0"})(["display:flex;align-items:center;background:var(--block);padding:5px 10px;box-shadow:3px -2px 3px #00000029;input{background:var(--block);}"]),ve=()=>{const[s,t]=l.useState("");return e.jsxs(je,{children:[e.jsx(m,{icon:e.jsx(k,{}),onClick:()=>null,background:"transparent"}),e.jsx($,{value:s,setValue:t,placeholder:"Введите сообщение..."}),e.jsx(m,{icon:e.jsx(N,{}),onClick:()=>null,background:"transparent"})]})},be=d.div.withConfig({componentId:"sc-1xn0ric-0"})(["width:100%;height:100%;display:flex;flex-direction:column;position:relative;& > img{position:absolute;width:200px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.4;}"]),ke=()=>{var n;const s=(n=u(x))==null?void 0:n.params,[t,a]=l.useState(!0);return l.useEffect(()=>{a(!0),setTimeout(()=>{a(!1)},1e3)},[s.chatId]),e.jsxs(be,{children:[e.jsx(de,{name:"Леонаро ДиК априо",loading:t}),e.jsx(le,{loading:t}),e.jsx(ve,{})]})},Ce=d.div.withConfig({componentId:"sc-182b33p-0"})(["display:flex;width:100%;height:100%;"]),Me=()=>{var t;const s=(t=u(x))==null?void 0:t.params;return e.jsxs(Ce,{children:[e.jsx(we,{}),!(s!=null&&s.chatId)&&e.jsx(M,{}),e.jsx(A,{children:e.jsx(H,{path:x,children:e.jsx(ke,{})})})]})};export{Me as default};
