import{d as T,q as b,r as c,c as F,w as a,u as r,o as w,j as p,a as t,t as s,cc as B,R as l,cd as N,an as y,h as k,_ as P}from"./index.fa3829f9.js";import{C as n}from"./index.43fb823d.js";import{C as S,a as D}from"./index.b38161f7.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./MultiLineResult.eeac4e9b.js";import"./base64.25d9ff21.js";const E={class:"tripleDes"},O={class:"option"},R=T({__name:"index",setup(A){const{t:v}=b(),h="A Free, Modern Toolbox, Built for Developers.",d=c("key"),_=c("CBC"),C=c("Pkcs7"),g=c(),m=()=>{g.value.handleEncrypt()},x=f=>{if(f.length<=0)return y.warning("Please enter the plain text"),"";if(d.value.length<=0)return y.warning("Please enter the key"),"";let e={mode:n.mode.CBC,padding:n.pad.Pkcs7};switch(_.value){case"ECB":e.mode=n.mode.ECB;break;case"CFB":e.mode=n.mode.CFB;break;case"CTR":e.mode=n.mode.CTR;break;case"OFB":e.mode=n.mode.OFB;break}switch(C.value){case"Zero":e.padding=n.pad.ZeroPadding;break;case"Iso10126":e.padding=n.pad.Iso10126;break;case"None":e.padding=n.pad.NoPadding;break;case"Ansix923":e.padding=n.pad.AnsiX923;break}try{return n.TripleDES.encrypt(f,d.value,e).toString()}catch(i){return y.error(i.message),""}};return(f,e)=>{const i=k("a-input-password"),o=k("SelectOption");return w(),F(r(N),{"max-width":1280},{one:a(()=>[p("div",E,[t(D,{ref_key:"cryptRef",ref:g,encrypt:x,type:r(S).ENC,sample:h},{option:a(()=>[p("p",O,[p("span",null,s(r(v)("tripleDes.key")),1),t(i,{value:d.value,"onUpdate:value":e[0]||(e[0]=u=>d.value=u),class:"passphrase opt",onChange:m},null,8,["value"]),p("span",null,s(r(v)("tripleDes.mode")),1),p("span",null,[t(r(B),{value:_.value,"onUpdate:value":e[1]||(e[1]=u=>_.value=u),class:"opt",onChange:m},{default:a(()=>[t(o,{value:"CBC"},{default:a(()=>[l(s("CBC"),1)]),_:1},8,["value"]),t(o,{value:"ECB"},{default:a(()=>[l(s("ECB"),1)]),_:1},8,["value"]),t(o,{value:"CFB"},{default:a(()=>[l(s("CFB"),1)]),_:1},8,["value"]),t(o,{value:"CTR"},{default:a(()=>[l(s("CTR"),1)]),_:1},8,["value"]),t(o,{value:"OFB"},{default:a(()=>[l(s("OFB"),1)]),_:1},8,["value"])]),_:1},8,["value"])]),p("span",null,s(r(v)("tripleDes.padding")),1),p("span",null,[t(r(B),{value:C.value,"onUpdate:value":e[2]||(e[2]=u=>C.value=u),class:"opt padding-select",onChange:m},{default:a(()=>[t(o,{value:"Pkcs7"},{default:a(()=>[l(s("Pkcs7"),1)]),_:1},8,["value"]),t(o,{value:"Zero"},{default:a(()=>[l(s("Zero"),1)]),_:1},8,["value"]),t(o,{value:"Iso10126"},{default:a(()=>[l(s("Iso10126"),1)]),_:1},8,["value"]),t(o,{value:"None"},{default:a(()=>[l(s("None"),1)]),_:1},8,["value"]),t(o,{value:"Ansix923"},{default:a(()=>[l(s("Ansix923"),1)]),_:1},8,["value"])]),_:1},8,["value"])])])]),_:1},8,["type"])])]),_:1})}}});const q=P(R,[["__scopeId","data-v-1012c863"]]);export{q as default};