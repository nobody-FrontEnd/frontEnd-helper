import{d as M,aa as N,H as T,r as i,cO as y,as as d,c as p,w as o,u as l,z as b,cP as A,o as c,a as v,cQ as j,cR as F,cS as O,cT as C,R as I,t as h,E as f,b as P,bq as q,F as D,cU as L,cd as U}from"./index.fa3829f9.js";import{A as S}from"./ipv4.7b623bf1.js";import{A as w}from"./ipv6.a83e9e03.js";const G=M({__name:"index",props:{clipboardValue:null,searchValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(B,{emit:_}){const m=B,{t:n}=N();T(()=>{var e,r;(e=m.clipboardValue)!=null&&e.isCidr()&&(u.value.cidr=(r=m.clipboardValue)==null?void 0:r.getOriginData(),_("acceptClipboardCb"),k())});const u=i({cidr:""}),x={cidr:[{required:!0,message:n("cidrCalculator.inputErrorCidrMsg"),whitespace:!0,validator:(e,r)=>{try{return new y(r),Promise.resolve()}catch(t){return Promise.reject(t)}},trigger:"change"}]},g=i(),s=i(),k=function(){var e;(e=g.value)==null||e.validate().then(()=>{s.value=new y(u.value.cidr)}).catch(()=>{})},V=[{title:"Label",dataIndex:"label",key:"label",width:"30%"},{title:"Value",dataIndex:"value",key:"value",width:"55%"},{title:"Action",key:"action",width:"15%"}],E=i([{label:n("cidrCalculator.cidrAddress"),value:d(()=>{var e;return(e=s.value)==null?void 0:e.address.address})},{label:n("cidrCalculator.netmask"),value:d(()=>{var r;const e=b((r=s.value)==null?void 0:r.address);return e?e.v4?R(e.subnetMask):$(e.subnetMask):""})},{label:n("cidrCalculator.ipRange"),value:d(()=>{var t,a;const e=(t=s.value)==null?void 0:t.addressStart.address,r=(a=s.value)==null?void 0:a.addressEnd.address;return!e||!r?"":`[${e}, ${r}]`})},{label:n("cidrCalculator.network"),value:d(()=>{var e;return(e=s.value)==null?void 0:e.addressStart.address})},{label:n("cidrCalculator.broadcast"),value:d(()=>{var e;return(e=s.value)==null?void 0:e.addressEnd.address})},{label:n("cidrCalculator.firstAddress"),value:d(()=>{var t;const e=b((t=s.value)==null?void 0:t.addressStart);if(!e)return"";const r=e.bigInteger().add(new A.exports.BigInteger("1"));if(e.v4){const a=S.fromBigInteger(r);return a.isInSubnet(e)?a.address:""}else{const a=w.fromBigInteger(r);return a.isInSubnet(e)?a.address:""}})},{label:n("cidrCalculator.lastAddress"),value:d(()=>{var t;const e=b((t=s.value)==null?void 0:t.addressEnd);if(!e)return"";const r=e.bigInteger().subtract(new A.exports.BigInteger("1"));if(e.v4){const a=S.fromBigInteger(r);return a.isInSubnet(e)?a.address:""}else{const a=w.fromBigInteger(r);return a.isInSubnet(e)?a.address:""}})}]),R=function(e){const r="1".repeat(e)+"0".repeat(32-e),t=[];for(let a=0;a<4;a++)t.push(parseInt(r.slice(a*8,a*8+8),2));return t.join(".")},$=function(e){const r="1".repeat(e)+"0".repeat(128-e),t=[];for(let a=0;a<8;a++)t.push(parseInt(r.slice(a*16,a*16+16),2).toString(16));return t.join(":")};return(e,r)=>(c(),p(l(U),null,{one:o(()=>[v(l(O),{ref_key:"formRef",ref:g,model:u.value,rules:x},{default:o(()=>[v(l(j),{name:"cidr",label:e.$t("cidrCalculator.cidrAddress")},{default:o(()=>[v(l(F),{value:u.value.cidr,"onUpdate:value":r[0]||(r[0]=t=>u.value.cidr=t),"enter-button":e.$t("common.calculate"),onSearch:k},null,8,["value","enter-button"])]),_:1},8,["label"])]),_:1},8,["model"]),v(l(L),{columns:V,"data-source":E.value,"show-header":!1,pagination:!1},{bodyCell:o(({column:t,record:a})=>[t.key==="label"?(c(),p(l(C),{key:0,strong:""},{default:o(()=>[I(h(`${a.label}:`),1)]),_:2},1024)):f("",!0),t.key==="value"?(c(),p(l(C),{key:1},{default:o(()=>[I(h(a.value),1)]),_:2},1024)):f("",!0),t.key==="action"?(c(),P(D,{key:2},[a.value?(c(),p(l(q),{key:0,type:"link","copy-content":a.value},null,8,["copy-content"])):f("",!0)],64)):f("",!0)]),_:1},8,["data-source"])]),_:1}))}});export{G as default};
