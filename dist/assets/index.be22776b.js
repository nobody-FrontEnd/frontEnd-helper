import{e7 as Z,d as fe,r as b,H as ve,M as Q,c as A,w as u,u as o,n as pe,o as C,j as W,R as w,t as E,a as d,b as me,e as he,F as ye,aQ as O,aR as j,cT as F,co as N,aE as B,cw as H,e8 as J,dz as ge,du as $e,dv as Ee,e4 as we,e5 as D,E as Ie,bd as be,cd as xe,h as K,_ as _e}from"./index.fa3829f9.js";import{a as te,i as Pe}from"./index.2f45a7f7.js";var R={exports:{}},G={exports:{}},Le=(e,s)=>(s=s||(()=>{}),e.then(t=>new Promise(r=>{r(s())}).then(()=>t),t=>new Promise(r=>{r(s())}).then(()=>{throw t})));const Ce=Le;class ne extends Error{constructor(s){super(s),this.name="TimeoutError"}}const re=(e,s,t)=>new Promise((r,l)=>{if(typeof s!="number"||s<0)throw new TypeError("Expected `milliseconds` to be a positive number");if(s===1/0){r(e);return}const i=setTimeout(()=>{if(typeof t=="function"){try{r(t())}catch(c){l(c)}return}const v=typeof t=="string"?t:`Promise timed out after ${s} milliseconds`,f=t instanceof Error?t:new ne(v);typeof e.cancel=="function"&&e.cancel(),l(f)},s);Ce(e.then(r,l),()=>{clearTimeout(i)})});G.exports=re;G.exports.default=re;G.exports.TimeoutError=ne;const se=G.exports,Te=Symbol.asyncIterator||"@@asyncIterator",ae=e=>{const s=e.on||e.addListener||e.addEventListener,t=e.off||e.removeListener||e.removeEventListener;if(!s||!t)throw new TypeError("Emitter is not compatible");return{addListener:s.bind(e),removeListener:t.bind(e)}},oe=e=>Array.isArray(e)?e:[e],le=(e,s,t)=>{let r;const l=new Promise((i,v)=>{if(t={rejectionEvents:["error"],multiArgs:!1,resolveImmediately:!1,...t},!(t.count>=0&&(t.count===1/0||Number.isInteger(t.count))))throw new TypeError("The `count` option should be at least 0 or more");const f=oe(s),c=[],{addListener:p,removeListener:I}=ae(e),$=(...g)=>{const _=t.multiArgs?g:g[0];t.filter&&!t.filter(_)||(c.push(_),t.count===c.length&&(r(),i(c)))},y=g=>{r(),v(g)};r=()=>{for(const g of f)I(g,$);for(const g of t.rejectionEvents)I(g,y)};for(const g of f)p(g,$);for(const g of t.rejectionEvents)p(g,y);t.resolveImmediately&&i(c)});if(l.cancel=r,typeof t.timeout=="number"){const i=se(l,t.timeout);return i.cancel=r,i}return l},ce=(e,s,t)=>{typeof t=="function"&&(t={filter:t}),t={...t,count:1,resolveImmediately:!1};const r=le(e,s,t),l=r.then(i=>i[0]);return l.cancel=r.cancel,l};R.exports=ce;R.exports.default=ce;R.exports.multiple=le;R.exports.iterator=(e,s,t)=>{typeof t=="function"&&(t={filter:t});const r=oe(s);t={rejectionEvents:["error"],resolutionEvents:[],limit:1/0,multiArgs:!1,...t};const{limit:l}=t;if(!(l>=0&&(l===1/0||Number.isInteger(l))))throw new TypeError("The `limit` option should be a non-negative integer or Infinity");if(l===0)return{[Symbol.asyncIterator](){return this},async next(){return{done:!0,value:void 0}}};const{addListener:v,removeListener:f}=ae(e);let c=!1,p,I=!1;const $=[],y=[];let g=0,_=!1;const V=(...a)=>{g++,_=g===l;const n=t.multiArgs?a:a[0];if($.length>0){const{resolve:h}=$.shift();h({done:!1,value:n}),_&&P();return}y.push(n),_&&P()},P=()=>{c=!0;for(const a of r)f(a,V);for(const a of t.rejectionEvents)f(a,k);for(const a of t.resolutionEvents)f(a,z);for(;$.length>0;){const{resolve:a}=$.shift();a({done:!0,value:void 0})}},k=(...a)=>{if(p=t.multiArgs?a:a[0],$.length>0){const{reject:n}=$.shift();n(p)}else I=!0;P()},z=(...a)=>{const n=t.multiArgs?a:a[0];if(!(t.filter&&!t.filter(n))){if($.length>0){const{resolve:h}=$.shift();h({done:!0,value:n})}else y.push(n);P()}};for(const a of r)v(a,V);for(const a of t.rejectionEvents)v(a,k);for(const a of t.resolutionEvents)v(a,z);return{[Te](){return this},async next(){if(y.length>0){const a=y.shift();return{done:c&&y.length===0&&!_,value:a}}if(I)throw I=!1,p;return c?{done:!0,value:void 0}:new Promise((a,n)=>$.push({resolve:a,reject:n}))},async return(a){return P(),{done:c,value:a}}}};R.exports.TimeoutError=se.TimeoutError;const X=async({isSecondTry:e=!1}={})=>{try{const s=new RTCPeerConnection({iceServers:[]});s.createDataChannel(""),s.createOffer(s.setLocalDescription.bind(s),()=>{});const{candidate:t}=await R.exports(s,"icecandidate",{timeout:1e4});if(s.close(),!(t&&t.candidate))return;const r=t.candidate.split(" ")[4];if(!r.endsWith(".local"))return r;if(e)return;const l=await navigator.mediaDevices.enumerateDevices(),i=new Set(l.map(({kind:c})=>c)),v={};if(i.has("audioinput"))v.audio=!0;else if(i.has("videoinput"))v.video=!0;else return;const f=await navigator.mediaDevices.getUserMedia(v);for(const c of f.getTracks())c.stop();return await X({isSecondTry:!0})}catch{}};async function Se(){const e=await X();if(te.v6(e))return e}async function Ae(){const e=await X();if(te.v4(e))return e}const Y="[a-fA-F\\d:]",T=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${Y})|(?<=${Y})(?=\\s|$))`:"",x="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",m="[a-fA-F\\d]{1,4}",M=`
(?:
(?:${m}:){7}(?:${m}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${m}:){6}(?:${x}|:${m}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${m}:){5}(?::${x}|(?::${m}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${m}:){4}(?:(?::${m}){0,1}:${x}|(?::${m}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${m}:){3}(?:(?::${m}){0,2}:${x}|(?::${m}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${m}:){2}(?:(?::${m}){0,3}:${x}|(?::${m}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${m}:){1}(?:(?::${m}){0,4}:${x}|(?::${m}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${m}){0,5}:${x}|(?::${m}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),Re=new RegExp(`(?:^${x}$)|(?:^${M}$)`),Ve=new RegExp(`^${x}$`),ze=new RegExp(`^${M}$`),U=e=>e&&e.exact?Re:new RegExp(`(?:${T(e)}${x}${T(e)})|(?:${T(e)}${M}${T(e)})`,"g");U.v4=e=>e&&e.exact?Ve:new RegExp(`${T(e)}${x}${T(e)}`,"g");U.v6=e=>e&&e.exact?ze:new RegExp(`${T(e)}${M}${T(e)}`,"g");function De(e){return U.v6({exact:!0}).test(e)}function ke(e){return U.v4({exact:!0}).test(e)}typeof Z.homedir>"u"||Z.homedir().replace(/\\/g,"/");class Oe extends Error{constructor(s){super("Could not get the public IP address",s),this.name="IpNotFoundError"}}class ie extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const ue={timeout:5e3},je={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},Fe=(e,s,t)=>{const r=new XMLHttpRequest;let l;const i=new Promise((v,f)=>{l=f,r.addEventListener("error",f,{once:!0}),r.addEventListener("timeout",f,{once:!0}),r.addEventListener("load",()=>{const c=r.responseText.trim();if(!c||!(t==="v6"?De:ke)(c)){f();return}v(c)},{once:!0}),r.open("GET",e),r.timeout=s.timeout,r.send()});return i.cancel=()=>{r.abort(),l(new ie)},i},de=(e,s)=>{let t;const r=async function(){var v;const l=[...je[e],...(v=s.fallbackUrls)!=null?v:[]];let i;for(const f of l)try{return t=Fe(f,s,e),await t}catch(c){if(i=c,c instanceof ie)throw c}throw new Oe({cause:i})}();return r.cancel=()=>{t.cancel()},r};function Ne(e){return de("v4",{...ue,...e})}function Be(e){return de("v6",{...ue,...e})}function He(e){return ee(e[0])+ee(e[1])}function ee(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}const Ge={class:"network-myip"},Me={class:"select-netCard",style:{position:"absolute",right:"20px"}},Ue=w(" DEFAULT "),qe=fe({__name:"index",props:{renderOnSearch:{type:Boolean}},setup(e){const s=e,t=b("success"),r=b("success"),l=b("success"),i=b(""),v=b(""),f=b(""),c=b(""),p=b(),I=b(""),$=b(),y=b("default");ve(async()=>{$.value=Q.getIP(),await z()});const g=function(){var n;if(y.value==="default")Ae().then(h=>{i.value=h||""}).catch(()=>{i.value="",console.error("Get local IPv4 error")});else{const{IPv4:h}=(n=Q.getIP())==null?void 0:n.filter(L=>L.name===y.value)[0];i.value=h}},_=function(){var n;if(y.value==="default")Se().then(h=>{v.value=h||""}).catch(h=>{v.value="",console.error("Get local IPv6 error",h)});else{const{IPv6:h}=(n=Q.getIP())==null?void 0:n.filter(L=>L.name===y.value)[0];i.value=h}},V=function(){t.value="loading",Ne().then(n=>{f.value=n||"",t.value="success",s.renderOnSearch||k()}).catch(n=>{f.value="",t.value="error",console.error("Get public IPv4 error",n)})},P=function(){r.value="loading",Be().then(n=>{c.value=n||"",r.value="success"}).catch(n=>{c.value="",r.value="error",console.error("Get public IPv6 error",n)})},k=function(){f.value?(l.value="loading",Pe(f.value).then(n=>{p.value=n,I.value=He(pe.exports.get(n,["country","code"],"")),l.value="success"}).catch(n=>{console.error("Get public IP details error",n),p.value=void 0,I.value="",l.value="error"})):(p.value=void 0,I.value="")},z=async function(){s.renderOnSearch||(g(),_(),P()),V()},a=async function(){var n,h;if(!!y.value){if(y.value==="default")await z();else if((n=$.value)!=null&&n.length){const{IPv4:L,IPv6:q}=(h=$.value)==null?void 0:h.filter(S=>S.name===y.value)[0];i.value=L,v.value=q}}};return(n,h)=>{const L=K("a-select-option"),q=K("a-select");return C(),A(o(xe),{"max-width":1280},{one:u(()=>[W("div",Ge,[W("div",Me,[w(E(n.$t("ip.networkCard"))+" ",1),d(q,{ref:"select",value:y.value,"onUpdate:value":h[0]||(h[0]=S=>y.value=S),size:"small",style:{width:"110px"},onChange:a},{default:u(()=>[d(L,{key:"default",value:"default"},{default:u(()=>[Ue]),_:1}),(C(!0),me(ye,null,he($.value,S=>(C(),A(L,{key:S.name,value:S.name},{default:u(()=>[w(E(S.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),O(d(o(H),{"result-desc":n.$t("ip.local.ipv4"),result:i.value,size:"large"},{title:u(()=>[d(o(F),null,{default:u(()=>[w(E(n.$t("ip.local.ipv4")),1)]),_:1}),d(o(N),{type:"text",size:"small",ghost:"",onClick:g},{icon:u(()=>[d(o(B))]),_:1})]),_:1},8,["result-desc","result"]),[[j,!e.renderOnSearch]]),O(d(o(H),{"result-desc":n.$t("ip.local.ipv6"),result:v.value,size:"large"},{title:u(()=>[d(o(F),null,{default:u(()=>[w(E(n.$t("ip.local.ipv6")),1)]),_:1}),d(o(N),{type:"text",size:"small",ghost:"",onClick:_},{icon:u(()=>[d(o(B))]),_:1})]),_:1},8,["result-desc","result"]),[[j,!e.renderOnSearch]]),d(o(H),{"result-desc":n.$t("ip.public.ipv4"),result:f.value,size:"large"},{title:u(()=>[d(o(F),null,{default:u(()=>[w(E(n.$t("ip.public.ipv4")),1)]),_:1}),d(o(N),{type:"text",size:"small",ghost:"",onClick:V},{icon:u(()=>[t.value==="loading"?(C(),A(o(J),{key:0})):(C(),A(o(B),{key:1}))]),_:1})]),_:1},8,["result-desc","result"]),O(d(o(H),{"result-desc":n.$t("ip.public.ipv6"),result:c.value,size:"large"},{title:u(()=>[d(o(F),null,{default:u(()=>[w(E(n.$t("ip.public.ipv6")),1)]),_:1}),d(o(N),{type:"text",size:"small",ghost:"",onClick:P},{icon:u(()=>[r.value==="loading"?(C(),A(o(J),{key:0})):(C(),A(o(B),{key:1}))]),_:1})]),_:1},8,["result-desc","result"]),[[j,!e.renderOnSearch]]),d(o(be),{spinning:l.value==="loading"},{default:u(()=>[O(d(o(ge),null,{default:u(()=>[d(o($e),null,{default:u(()=>[d(o(Ee),null,{title:u(()=>[p.value?(C(),A(o(we),{key:0,bordered:"",column:"1"},{default:u(()=>[d(o(D),{label:n.$t("ip.result.city"),span:3},{default:u(()=>[w(E(p.value.city),1)]),_:1},8,["label"]),d(o(D),{label:n.$t("ip.result.country"),span:3},{default:u(()=>[w(E(I.value)+" "+E(p.value.country.code+" | "+p.value.country.name),1)]),_:1},8,["label"]),d(o(D),{label:n.$t("ip.result.longitudeAndLatitude"),span:3},{default:u(()=>[w(E(p.value.latitude)+" / "+E(p.value.longitude),1)]),_:1},8,["label"]),d(o(D),{label:n.$t("ip.result.timeZone"),span:3},{default:u(()=>[w(E(p.value.country.timezone.code)+"("+E(p.value.country.timezone.offset)+") ",1)]),_:1},8,["label"]),d(o(D),{label:n.$t("ip.result.callingCode"),span:3},{default:u(()=>[w(E(p.value.country.callingCode),1)]),_:1},8,["label"])]),_:1})):Ie("",!0)]),_:1})]),_:1})]),_:1},512),[[j,!e.renderOnSearch]])]),_:1},8,["spinning"])])]),_:1})}}});const Ze=_e(qe,[["__scopeId","data-v-743a6699"]]);export{Ze as default};
