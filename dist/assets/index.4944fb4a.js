import{i as q}from"./index.2f45a7f7.js";import{d as B,aa as M,H as R,r as c,M as b,bH as P,bV as A,as as N,c as _,w as o,u as t,n as l,o as g,j,a as s,cQ as S,e3 as z,E as I,cR as E,cS as F,e4 as T,e5 as m,R as f,t as i,b as U,bd as H,cd as O}from"./index.fa3829f9.js";import{u as Q}from"./index.62b13fa1.js";const Z={class:"ip-location-wrapper"},G=["src"],X=B({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(V,{emit:w}){const v=V,{t:C}=M();R(()=>{var e,a,u;(((e=v.clipboardValue)==null?void 0:e.isIPv4())||((a=v.clipboardValue)==null?void 0:a.isUrl())||((u=v.clipboardValue)==null?void 0:u.isDomain()))&&(d.value.address=y(v.clipboardValue.getOriginData()),w("acceptClipboardCb"))});const x=c(),L=c();function y(e){return e=e.trim(),b.isIP(e)==4||P(e)&&(e=Q(e).hostname),e}const d=c({address:""}),$={address:[{required:!0,whitespace:!0,transform:y,validator:(e,a)=>a===""||b.isIP(a)!==4&&!P(a)&&!A(a)?Promise.reject():Promise.resolve(),message:C("ipLocation.validInputError")}]},r=c(),k=N(()=>{const e=l.exports.get(r.value,"latitude",0),a=l.exports.get(r.value,"longitude",0);return e===0||a===0?"":`https://maps.google.com/maps?hl=en;z=14&q=${e},${a}&output=embed`}),h=c(!1),p=c("");async function D(){var u;try{await((u=x.value)==null?void 0:u.validateFields())}catch{return}const e=y(d.value.address);let a="";if(p.value="",b.isIP(e)==4)a=e;else try{a=(await b.domainLookup(e,{family:4})).address}catch(n){p.value=(n==null?void 0:n.toString())||""}h.value=!0,q(a).then(n=>{r.value=n}).catch(n=>{p.value=n.toString()||""}).finally(()=>{h.value=!1})}return(e,a)=>(g(),_(t(O),{"max-width":1280},{one:o(()=>[j("div",Z,[s(t(F),{ref_key:"formRef",ref:x,rules:$,model:d.value,"hide-required-mark":""},{default:o(()=>[p.value!==""?(g(),_(t(S),{key:0},{default:o(()=>[s(t(z),{message:p.value,type:"error",banner:""},null,8,["message"])]),_:1})):I("",!0),s(t(S),{label:"IP/Domain",name:"address"},{default:o(()=>[s(t(E),{value:d.value.address,"onUpdate:value":a[0]||(a[0]=u=>d.value.address=u),"enter-button":e.$t("common.query"),"allow-clear":"",autofocus:"",onSearch:D},null,8,["value","enter-button"])]),_:1})]),_:1},8,["model"]),s(t(H),{spinning:h.value},{default:o(()=>[r.value?(g(),_(t(T),{key:0,bordered:"",column:1},{default:o(()=>[s(t(m),{label:e.$t("ip.result.city")},{default:o(()=>[f(i(t(l.exports.get)(r.value,"city")),1)]),_:1},8,["label"]),s(t(m),{label:e.$t("ip.result.country")},{default:o(()=>[f(i(t(l.exports.get)(r.value,["country","code"],"")+" | "+t(l.exports.get)(r.value,["country","name"],"")),1)]),_:1},8,["label"]),s(t(m),{label:e.$t("ip.result.longitudeAndLatitude")},{default:o(()=>[f(i(t(l.exports.get)(r.value,["latitude"]))+" , "+i(t(l.exports.get)(r.value,["longitude"])),1)]),_:1},8,["label"]),s(t(m),{label:e.$t("ip.result.timeZone")},{default:o(()=>[f(i(t(l.exports.get)(r.value,["country","timezone","code"]))+"("+i(t(l.exports.get)(r.value,["country","timezone","offset"]))+") ",1)]),_:1},8,["label"]),s(t(m),{label:e.$t("ip.result.callingCode")},{default:o(()=>[f(i(t(l.exports.get)(r.value,["country","callingCode"])),1)]),_:1},8,["label"])]),_:1})):I("",!0),t(k)!==""?(g(),U("iframe",{key:1,ref_key:"ipLocationMapIframe",ref:L,src:t(k),style:{height:"237px",width:"100%"}},null,8,G)):I("",!0)]),_:1},8,["spinning"])])]),_:1}))}});export{X as default};