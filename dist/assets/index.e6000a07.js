var ee=Object.defineProperty;var te=(y,f,p)=>f in y?ee(y,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):y[f]=p;var I=(y,f,p)=>(te(y,typeof f!="symbol"?f+"":f,p),p);import{d as ae,aa as ne,H as re,cO as R,r as h,as as S,c as A,w as s,u as a,cP as k,o as U,cS as F,a as r,hc as V,dt as w,cv as b,cT as g,cQ as _,co as x,R as o,t as v,E as z,fv as j,dw as B,aQ as se,aR as le,du as ue,dv as oe,dz as ie,cd as de}from"./index.fa3829f9.js";import{A as pe}from"./ipv4.7b623bf1.js";const ce=function(y,f){try{const p=URL.createObjectURL(y),d=document.createElement("a");return d.href=p,d.download=f,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(p),Promise.resolve()}catch(p){return Promise.reject(p)}},ve=o("."),fe=o("."),me=o("."),ge=o("/"),be=o("."),ye=o("."),Ce=o("."),$e=o("/"),Re=ae({__name:"index",props:{clipboardValue:null,searchValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(y,{emit:f}){const p=y,{t:d}=ne();re(()=>{var n,t;if((n=p.clipboardValue)!=null&&n.isCidr())try{const e=new R((t=p.clipboardValue)==null?void 0:t.getOriginData());e&&e.address.v4&&(l.value.ip1=parseInt(e.address.parsedAddress[0]),l.value.ip2=parseInt(e.address.parsedAddress[1]),l.value.ip3=parseInt(e.address.parsedAddress[2]),l.value.ip4=parseInt(e.address.parsedAddress[3]),l.value.prefix=e.address.subnetMask,f("acceptClipboardCb"))}catch{return}});const L=function(n,t){if(n===null||t===null)return!1;const e={type:"bigInteger"},i=n.start(e),m=n.end(e),c=t.start(e),$=t.end(e);return!(c.compareTo(i)>=0&&$.compareTo(m)<=0)},M=function(n,t){if(n===null||t===null)return!1;const e={type:"bigInteger"},i=n.start(e),m=n.end(e),c=t.start(e),$=t.end(e);return c.compareTo(i)>=0&&c.compareTo(m)<=0||$.compareTo(i)>=0&&$.compareTo(m)<=0},N={cidr:[{validator:(n,t)=>{try{return new R(l.value.address()),Promise.resolve()}catch(e){return Promise.reject(e)}},message:d("vpcPlanner.inputErrorCidrMsg"),trigger:"change"}]},Q={cidr:[{validator:(n,t)=>{try{return new R(u.value.address()),Promise.resolve()}catch(e){return Promise.reject(e)}},message:d("vpcPlanner.inputErrorSubnetCidrMsg"),trigger:"change"},{validator:(n,t)=>{const e=u.value.getCIDR();return L(l.value.getCIDR(),e)?Promise.reject(d("vpcPlanner.inputErrorSubnetCidrOutsideMsg")):C.value.some(c=>M(c.getCIDR(),e))?Promise.reject(d("vpcPlanner.inputErrorSubnetCidrOverlapMsg")):Promise.resolve()},trigger:"change"}]};class P{constructor(t,e,i,m,c){I(this,"name");I(this,"ip1",0);I(this,"ip2",0);I(this,"ip3",0);I(this,"ip4",0);I(this,"prefix",0);this.ip1=t===void 0?192:t,this.ip2=e===void 0?168:e,this.ip3=i===void 0?0:i,this.ip4=m===void 0?0:m,this.prefix=c===void 0?16:c}address(){return`${this.ip1}.${this.ip2}.${this.ip3}.${this.ip4}/${this.prefix}`}isValid(){return R.isValidCIDR(this.address())}getCIDR(){return this.isValid()?new R(this.address()):null}availableIps(){const t=this.getCIDR();return(t==null?void 0:t.toArray())||[]}size(){const t=this.getCIDR();return(t==null?void 0:t.size)||new k.exports.BigInteger("0")}}const l=h(new P),u=h(new P),C=h([]),H={hideOnSinglePage:!0,size:"small",pageSize:4,showTotal:n=>`${d("vpcPlanner.total")} ${n} ${d("vpcPlanner.subnets")}`},q=S(()=>{let n=new k.exports.BigInteger("0");return C.value.forEach(t=>{n=n.add(t.size())}),n}),G=S(()=>l.value.size().subtract(q.value)),O=function(){u.value=new P,C.value=[]},D=h(!1),T=h(),J=function(){var n;(n=T.value)==null||n.validate().then(()=>{D.value=!0,l.value.isValid()&&(O(),u.value=new P(l.value.ip1,l.value.ip2,l.value.ip3,l.value.ip4,28))}).catch(()=>{})},K=function(){O(),D.value=!1},E=h(),W=function(){var n;(n=E.value)==null||n.validate().then(()=>{C.value.push(u.value);const e=pe.fromBigInteger(u.value.getCIDR().end({type:"bigInteger"}).add(new k.exports.BigInteger("1"))).toArray();u.value=new P(e[0],e[1],e[2],e[3],u.value.prefix)}).catch(()=>{})},X=function(n,t){C.value.splice(t,1)},Y=S(()=>C.value.length===0),Z=function(){const n=l.value.address(),t=C.value.map(c=>{const $=c.getCIDR();return $?`${c.address()} [${$.start()}, ${$.end()}] ${d("vpcPlanner.ipCount")}: ${$.size}`:null}),e=[`${d("vpcPlanner.vpcCidrAddress")}: `,n,`
`,`${d("vpcPlanner.subnetCidrAddress")}: 
`,t.join(`
`)],i=`vpc-${n}-${Date.now()}.txt`,m=new File(e,i,{type:"text/plain"});ce(m,i)};return(n,t)=>(U(),A(a(de),null,{one:s(()=>[D.value?z("",!0):(U(),A(a(F),{key:0,ref_key:"cidrFormRef",ref:T,model:l.value,rules:N},{default:s(()=>[r(a(_),{label:n.$t("vpcPlanner.cidrAddress"),name:"cidr"},{default:s(()=>[r(a(V),null,{default:s(()=>[r(a(w),null,{default:s(()=>[r(a(b),{value:l.value.ip1,"onUpdate:value":t[0]||(t[0]=e=>l.value.ip1=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[ve]),_:1}),r(a(b),{value:l.value.ip2,"onUpdate:value":t[1]||(t[1]=e=>l.value.ip2=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[fe]),_:1}),r(a(b),{value:l.value.ip3,"onUpdate:value":t[2]||(t[2]=e=>l.value.ip3=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[me]),_:1}),r(a(b),{value:l.value.ip4,"onUpdate:value":t[3]||(t[3]=e=>l.value.ip4=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[ge]),_:1}),r(a(b),{value:l.value.prefix,"onUpdate:value":t[4]||(t[4]=e=>l.value.prefix=e),min:0,max:32,precision:0,controls:!1},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["label"]),r(a(_),null,{default:s(()=>[r(a(w),null,{default:s(()=>[r(a(x),{type:"primary","html-type":"submit",onClick:J},{default:s(()=>[o(v(n.$t("vpcPlanner.startDesign")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),D.value?(U(),A(a(F),{key:1,ref_key:"subnetFormRef",ref:E,model:u.value,rules:Q},{default:s(()=>[r(a(_),null,{extra:s(()=>[r(a(j),{type:"secondary"},{default:s(()=>{var e,i;return[o(v(`${n.$t("vpcPlanner.ipRange")}: ${((e=l.value.getCIDR())==null?void 0:e.start())||""} ~ ${((i=l.value.getCIDR())==null?void 0:i.end())||""}`),1)]}),_:1}),r(a(j),{type:"secondary"},{default:s(()=>[o(v(`${n.$t("vpcPlanner.availableIps")}: ${a(G)} / ${l.value.size()}`),1)]),_:1})]),default:s(()=>[r(a(B),{level:4},{default:s(()=>[o(v(l.value.address()),1)]),_:1})]),_:1}),r(a(_),{label:n.$t("vpcPlanner.subnetCidrAddress"),name:"cidr"},{extra:s(()=>[r(a(g),{type:"secondary"},{default:s(()=>{var e,i;return[o(v(`${n.$t("vpcPlanner.ipRange")}: ${((e=u.value.getCIDR())==null?void 0:e.start())||""} ~ ${((i=u.value.getCIDR())==null?void 0:i.end())||""}`),1)]}),_:1})]),default:s(()=>[r(a(V),null,{default:s(()=>[r(a(w),null,{default:s(()=>[r(a(b),{value:u.value.ip1,"onUpdate:value":t[5]||(t[5]=e=>u.value.ip1=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[be]),_:1}),r(a(b),{value:u.value.ip2,"onUpdate:value":t[6]||(t[6]=e=>u.value.ip2=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[ye]),_:1}),r(a(b),{value:u.value.ip3,"onUpdate:value":t[7]||(t[7]=e=>u.value.ip3=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[Ce]),_:1}),r(a(b),{value:u.value.ip4,"onUpdate:value":t[8]||(t[8]=e=>u.value.ip4=e),min:0,max:255,precision:0,controls:!1},null,8,["value"]),r(a(g),{strong:""},{default:s(()=>[$e]),_:1}),r(a(b),{value:u.value.prefix,"onUpdate:value":t[9]||(t[9]=e=>u.value.prefix=e),min:0,max:32,precision:0,controls:!1},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["label"]),r(a(_),null,{default:s(()=>[r(a(w),null,{default:s(()=>[r(a(x),{type:"primary","html-type":"submit",onClick:W},{default:s(()=>[o(v(n.$t("vpcPlanner.addSubnet")),1)]),_:1}),r(a(x),{type:"primary",disabled:a(Y),onClick:Z},{default:s(()=>[o(v(n.$t("vpcPlanner.export")),1)]),_:1},8,["disabled"]),r(a(x),{type:"primary",danger:"",onClick:K},{default:s(()=>[o(v(n.$t("vpcPlanner.restartDesign")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):z("",!0),se(r(a(ie),{"data-source":C.value,pagination:H},{renderItem:s(({item:e,index:i})=>[r(a(ue),null,{actions:s(()=>[r(a(x),{type:"text",danger:"",onClick:m=>X(e,i)},{default:s(()=>[o(v(n.$t("common.remove")),1)]),_:2},1032,["onClick"])]),default:s(()=>[r(a(oe),null,{title:s(()=>[r(a(B),{level:4},{default:s(()=>[o(v(e.address()),1)]),_:2},1024)]),description:s(()=>[r(a(g),null,{default:s(()=>[o(v(`${n.$t("vpcPlanner.ipRange")}: ${e.getCIDR().start()} ~ ${e.getCIDR().end()}`),1)]),_:2},1024)]),_:2},1024),r(a(g),{type:"secondary"},{default:s(()=>[o(v(`${e.size()} ${n.$t("vpcPlanner.ipAddress")}`),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"]),[[le,C.value.length>0]])]),_:1}))}});export{Re as default};