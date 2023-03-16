import{d as R,r as o,y as V,H as z,aL as g,c as j,w as n,u as T,o as p,a as s,cw as A,E as y,b as S,j as t,R as v,t as c,cd as P,h as l,_ as F}from"./index.fa3829f9.js";const G={key:1,class:"mail-list"},J={class:"mail-list-header container"},K={class:"mail-list-header-from container-first"},O={class:"mail-list-header-subject container-second"},Q={class:"mail-list-item container"},U={class:"mail-list-item-from container-first"},W=["onClick"],X={class:"mail-list-item-subject container-second"},Y=["onClick"],Z={key:2,class:"detail"},ee={class:"detail-header container"},te=["innerHTML"],ae=R({__name:"index",setup(se){const f="/v1/temp-emails",d=o("list"),k=o(""),u=o("fetching"),b=o([]),_=o(!1),L=o(-1);V(()=>L.value,async e=>{if(!e||e<0)return;i.value={from:"",date:""},h.value=!0;const a=await N(e),r=new Date(a.date);i.value={from:a.from.text,subject:a.subject,date:r.toLocaleDateString()+" "+r.toLocaleTimeString(),html:a.html},h.value=!1});const i=o({}),h=o(!1);z(async()=>{try{u.value="fetching",k.value=await B(),u.value="success"}catch(e){u.value="error",console.error(e)}try{_.value=!0,b.value=await D(),_.value=!1}catch(e){_.value=!1,console.error(e)}});function x(){d.value="list"}function w(e){L.value=e,d.value="detail"}async function B(){const e=f+"/addresses",{address:a}=await g.get(e);return a}async function D(){const e=f+"/mails";return await g.get(e)}async function N(e){const a=f+"/contents/"+e;return await g.get(a)}return(e,a)=>{const r=l("a-alert"),E=l("a-typography-title"),H=l("a-list"),C=l("a-spin"),M=l("a-page-header"),$=l("a-typography"),q=l("a-card");return p(),j(T(P),{"max-width":800},{one:n(()=>[s(T(A),{"result-desc":e.$t("tempEmail.address"),result:k.value},null,8,["result-desc","result"]),u.value==="error"?(p(),j(r,{key:0,class:"address-error",message:e.$t("tempEmail.addressError"),type:"error"},null,8,["message"])):y("",!0),d.value==="list"?(p(),S("div",G,[t("div",J,[t("div",K,[s(E,{level:3},{default:n(()=>[v(c(e.$t("tempEmail.from")),1)]),_:1})]),t("div",O,[s(E,{level:3},{default:n(()=>[v(c(e.$t("tempEmail.subject")),1)]),_:1})])]),s(C,{spinning:_.value},{default:n(()=>[s(H,{"item-layout":"horizontal","data-source":b.value},{renderItem:n(({item:m})=>[t("div",Q,[t("div",U,[t("a",{onClick:I=>w(m.seqno)},c(m.from),9,W)]),t("div",X,[t("a",{onClick:I=>w(m.segno)},c(m.subject),9,Y)])])]),_:1},8,["data-source"])]),_:1},8,["spinning"])])):y("",!0),d.value==="detail"?(p(),S("div",Z,[t("div",ee,[s(M,{title:e.$t("tempEmail.back"),onBack:x},null,8,["title"])]),s(C,{spinning:h.value},{default:n(()=>[t("div",null,[s(q,{title:i.value.subject,bordered:!1},{default:n(()=>[s($,null,{default:n(()=>[v(c(e.$t("tempEmail.date")+": "+i.value.date),1)]),_:1}),s($,null,{default:n(()=>[v(c(e.$t("tempEmail.from")+": "+i.value.from),1)]),_:1})]),_:1},8,["title"])]),t("div",{innerHTML:i.value.html},null,8,te)]),_:1},8,["spinning"])])):y("",!0)]),_:1})}}});const oe=F(ae,[["__scopeId","data-v-fe835ba8"]]);export{oe as default};
