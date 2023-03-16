import{d as dt,r as D,y as ot,ai as xt,H as gt,X as yt,I as wt,o as W,b as et,j as U,R as Y,t as J,a as V,w as X,u as Q,ct as bt,F as st,Z as ut,E as nt,aQ as ht,cF as ct,au as Tt,cA as _t,an as at,b8 as kt,M as Nt,h as Z,cj as St,v as ft,aa as Rt,n as Mt,c as Ct,co as Et,db as pt,cd as jt,_ as Kt}from"./index.fa3829f9.js";import{M as vt}from"./MultiLineResult.eeac4e9b.js";const $t={class:"highlight-box"},Pt=["innerHTML"],Ht=["placeholder","onKeyup"],It=["innerHTML"],At=["placeholder"],qt=dt({__name:"HighlightInput",props:{highlightText:null,highlightTextColor:{default:"var(--default-font-color)"},highlightColor:{default:"var(--hight-background)"},modelValue:null,placeholder:{default:"\u8BF7\u8F93\u5165"},type:{default:"textarea"},maxHeight:{default:"220px"},title:{default:"Input content:"},regexModifier:{default:"g"}},emits:["update:modelValue"],setup(L,{emit:it}){const q=L;_t(v=>({"6242af7e":q.maxHeight,"812d5f8e":q.highlightColor,cfd617e8:q.highlightTextColor}));const O=D(q.modelValue),I=D(),d=D(),b=D();ot(O,()=>{it("update:modelValue",O.value)}),xt(()=>{O.value=q.modelValue.replace(/(^\s*)|(\s*$)/g,"").replace(/<br \/>|<br\/>|<br>/g,`
`)}),gt(()=>{E()});function c(v){if((!v||!q.highlightText||q.highlightText.length===0)&&q.type!=="textarea")return v;let l=g(v);if(q.highlightText.filter(x=>~v.indexOf(x)).length){let x="",y=null;q.highlightText.forEach(H=>{x=j(H),y=new RegExp(x,q.regexModifier),l=l.replace(y,`<span>${H}</span>`)})}if(q.type==="textarea"){l=l.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;");const x=d.value;x&&x.scrollHeight>q.maxHeight&&(l=l+"<br/>")}return l}const g=v=>v?v.replace(/[<">']/g,l=>({"<":"&lt;",'"':"&quot;",">":"&gt;","'":"&#39;"})[l]):"";function S(){d.value.scrollHeight>q.maxHeight&&b.value.scrollHeight!==d.value.scrollHeight&&(b.value.style.height=`${d.value.scrollHeight}px`),d.value.scrollTop!==I.value.scrollTop&&(I.value.scrollTop=d.value.scrollTop)}function E(){q.type!=="input"&&yt(()=>{a("add")})}function j(v){const l=["(",")","[","]","{","}","^","$","|","?","*","+","."];let x=v.replace(new RegExp("\\\\","g"),"\\\\");return l.forEach(function(y){let H=new RegExp("\\"+y,"g");x=x.replace(H,"\\"+y)}),x}function a(v){if(d.value){let l=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";d.value[`${v}EventListener`](l,S),d.value[`${v}EventListener`]("scroll",S)}}const T=async v=>{let l=v.type.split("/")[0];if(l==="image"||l==="video"||l==="audio"){at.warn(t("multilineInput.chooseTextFile"));return}const x=kt()?v.path:`file://${v.path}`;let y;try{y=(await Nt.getEncoding(x)).encoding}catch(H){console.error(H)}return new Promise((H,K)=>{let M=new FileReader;M.readAsText(v,y),M.onload=function(w){var i;H(y),O.value=(i=w.target)==null?void 0:i.result}})};return wt(()=>{a("remove")}),(v,l)=>{const x=Z("a-button"),y=Z("a-upload");return W(),et("div",null,[U("p",null,[Y(J(q.title)+" ",1),V(y,{class:"file-button","before-upload":T,"max-count":1},{itemRender:X(({})=>[]),default:X(()=>[V(x,{size:"small",type:"link"},{default:X(()=>[V(Q(bt)),Y(" "+J(v.$t("multilineInput.read_file")),1)]),_:1})]),_:1})]),U("div",$t,[L.type==="textarea"?(W(),et(st,{key:0},[O.value?(W(),et("div",{key:0,class:"textarea-outer",ref_key:"textareaOuter",ref:I,style:ut({height:L.maxHeight})},[U("div",{ref_key:"outerInner",ref:b,class:"outer-inner",innerHTML:c(O.value)},null,8,Pt)],4)):nt("",!0),ht(U("textarea",{ref_key:"textareaBox",ref:d,style:ut({height:L.maxHeight}),placeholder:L.placeholder,spellcheck:!1,onKeyup:Tt(S,["enter"]),"onUpdate:modelValue":l[0]||(l[0]=H=>O.value=H)},`
        `,44,Ht),[[ct,O.value]])],64)):nt("",!0),L.type==="input"?(W(),et(st,{key:1},[O.value?(W(),et("div",{key:0,class:"input-outer",innerHTML:c(O.value)},null,8,It)):nt("",!0),ht(U("input",{type:"text",placeholder:L.placeholder,"onUpdate:modelValue":l[1]||(l[1]=H=>O.value=H)},null,8,At),[[ct,O.value]])],64)):nt("",!0)])])}}});var mt={exports:{}};/*! https://wangwl.net/static/projects/visualRegex */(function(L,it){(function(q,O){L.exports=O()})(St,function(){return q={12:(I,d,b)=>{var c=b(839),g={literal:"literal",t:"^",i:"$",o:".",u:",",h:"!",v:"?",l:"=",p:"-",g:":",alt:"|",k:"(",m:")",R:"[",L:"]",M:"{",j:"}",C:"*",O:"+",T:"<",G:">"},S={q:"word",N:"non-word",P:"whitespace",H:"non-whitespace",A:"digit",F:"non-digit",I:"boundary",U:"non-boundary",quote:"quote",quoteName:"k<name>"},E={quote:S.quote,quoteName:S.quoteName,w:S.q,W:S.N,s:S.P,S:S.H,d:S.A,D:S.F,b:S.I,B:S.U},j={};c.V(g,function(T,v){j[T]=T});var a=function(){function T(l){this.source=l.source,this.Y=[],this.flags=l.flags,this.parse()}var v=T.prototype;return v.Z=function(l){var x=this;return l.split("").every(function(y){return x.flags.indexOf(y)>-1})},v.push=function(l,x,y){return this.Y.push({type:l,value:x||l,source:y})},v.slice=function(l,x){return this.source.slice(l,l+x)},v.parse=function(){for(var l,x,y=this.source,H=y.length,K=0,M=j,w=E,i=g,s=S,f=this.push.bind(this),C=this.slice.bind(this),_=0,p=!1,r="";K<H;K++){if(l=y[K],r="",p)if(w[l])f(w[l],w[l],"\\"+l);else if(l==="x"&&c.$(r=C(K+1,2))||l==="u"&&c.$(r=C(K+1,4)))f(i.literal,c._(r),"\\"+l+r),K+=r.length;else if(l==="u"&&C(K+1,1)==="{"&&this.Z("u")){_=2,x="",r="";do r+=x,x=C(K+_,1),_++;while(c.$(x));x==="}"?(f(i.literal,c._(r),"\\u{"+r+"}"),K+=r.length+2):f(i.literal,"u","\\u")}else if(l==="c"&&c.J(r=C(K+1,1)))f(i.literal,c._(c.K(r)),"\\c"+r),K+=1;else if(c.X(l)&&l!=="0"){for(r=l,_=1;K+_<=H&&c.X(x=C(K,_));)r=x,_++;K+=r.length-1,f(s.quote,r,"\\"+r)}else l==="k"?f(s.quoteName,s.quoteName,"\\k"):c.tt[l]!==void 0?f(i.literal,"\\"+l,"\\"+l):f(i.literal,l,"\\"+l);else{if(l==="\\"){p=!0;continue}f(M[l]||i.literal,l,l)}p=!1}},T}();I.exports={it:a,nt:g,et:j,rt:S,ot:E}},579:(I,d,b)=>{var c=b(599).st,g=b(505).visualCanvas,S=b(19).visualDom;I.exports=function(E){if(Object.prototype.toString.call(E)!=="[object RegExp]")throw new TypeError("visualRegex: param not a RegExp instance");var j=new c(E);return{visualCanvas:g.bind(null,j),visualDom:S.bind(null,j)}}},839:I=>{I.exports={J:function(d){return d.split("").every(function(b){return b>="a"&&b<="z"||b>="A"&&b<="Z"})},X:function(d){return d!==""&&d.split("").every(function(b){return b>="0"&&b<="9"})},$:function(d){var b=this;return d.split("").every(function(c){return b.X(c)||c>="a"&&c<="f"||c>="A"&&c<="F"})},ut:function(d){return d.split("").every(function(b){return b>=0&&b<=7})},ht:function(d){return parseInt(d,16)},at:function(d){return parseInt(d,8)},tt:{0:0,a:7,b:8,ft:9,n:10,ct:11,f:12,r:13,e:27},vt:function(d){var b,c=this.tt;if(d>32&&d<127)b=String.fromCharCode(d);else for(var g in c)if(c[g]===d){b="\\"+g;break}return b},_:function(d){var b=this.ht(d);return this.vt(b)||"\\x"+d},lt:function(d){var b=this.at(d);return this.vt(b)||"\\x"+b.toString(16)},K:function(d){return(d.toUpperCase().charCodeAt(0)-65+1).toString(16)},dt:function(d){var b=d.length;b>3&&(b=3);for(var c=1;c<b&&this.ut(d[c])&&!(this.at(d.slice(0,c))>377);c++);var g,S=[];return c>0&&(g=d.slice(0,c),S.push({literal:this.lt(g),source:"\\"+g})),c<d.length&&(S=S.concat(d.slice(c).split("").map(function(E){return{literal:E,source:E}}))),S},find:function(d,b,c){var g=d.keys().find(function(S){return b.call(c,d[S],S,d)});return d[g]},V:function(d,b,c){for(var g in d)b.call(c,d[g],g,d)}}},505:(I,d,b)=>{var c;function g(p,r){p.prototype=Object.create(r.prototype),p.prototype.constructor=p,S(p,r)}function S(p,r){return(S=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(p,r)}function E(p,r){for(var e=0;e<r.length;e++){var o=r[e];o.bt=o.bt||!1,o.gt=!0,"value"in o&&(o.writable=!0),Object.defineProperty(p,o.key,o)}}function j(p,r,e){return r&&E(p.prototype,r),e&&E(p,e),p}var a,T,v=b(599).wt;(0,b(129).kt)(function(p){T=(a=p).minWidth});var l=((c={})[v.literal]="#dae9e5",c[v.xt]="#a2e563",c[v.set]="#10807f",c[v.yt]="#7f0f7e",c[v.Rt]="#c0c0c0",c[v.o]="#8acef8",c.Lt="#ca1803",c.St="#c0c0c0",c.Mt="#6697ea",c.Bt="#6697ea",c.jt="#fd673e",c.Ct="#fd673e",c),x=Math.max.apply.bind(Math.max,Math),y=function(p,r,e,o,n,u,h,m){h===void 0&&(h=0),m===void 0&&(m=0),p.beginPath();var N=e+n,k=r+o,$=r+u,R=k-u,A=e+u,z=N-u,F=K,P=M;p.moveTo($,N),m&P.Ot?p.moveTo(r,z):p.arcTo(r,N,r,z,u),h&F.left?p.moveTo(r,A):p.lineTo(r,A),m&P.Tt?p.moveTo($,e):p.arcTo(r,e,$,e,u),h&F.top?p.moveTo(R,e):p.lineTo(R,e),m&P.Wt?p.moveTo(k,A):p.arcTo(k,e,k,A,u),h&F.right?p.moveTo(k,z):p.lineTo(k,z),m&P.Gt?p.moveTo(R,N):p.arcTo(k,N,R,N,u),h&F.bottom?p.moveTo($,N):p.lineTo($,N),p.stroke()},H=function(p,r,e,o,n){p.beginPath(),p.moveTo(r[0],r[1]),p.arcTo(e[0],e[1],o[0],o[1],n),p.stroke()},K={qt:0,left:1,top:2,right:4,bottom:8},M={qt:0,Tt:1,Wt:2,Gt:4,Ot:8,bottom:12},w=function(p,r,e,o,n,u){var h=p.createRadialGradient(r,e,0,r,e,o);return h.addColorStop(0,n),h.addColorStop(1,u),h},i=function(){function p(r,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=0),n===void 0&&(n=0),this.Nt=function(h){if(h===void 0&&(h=""),h==="")return null;var m=h.split(",");return m[1]===""?m[1]="more":m.length===1&&(m[1]=m[0]),m}(r),this.Et=e;var u=this.Pt={left:0,right:0,top:0,bottom:0};this.Nt&&(u.left=u.right=2*a.Ht,this.Nt[0]==="0"&&(u.top=a.Ht),this.Nt[1]&&this.Nt[1]!=="0"&&(u.bottom=a.Ht+a.fontSize+a.Dt)),this.width=o,this.height=n}return p.prototype.At=function(){var r=0,e=this.width+this.Pt.left+this.Pt.right;if(this.Nt&&this.Nt[1]){var o=a.measureText(this.closureText);e<o&&(r=Math.ceil((o-e)/2))}this.Ft=r},j(p,[{key:"above",get:function(){return this.Pt.top}},{key:"below",get:function(){return this.height+this.Pt.bottom}},{key:"across",get:function(){return this.width+this.Pt.left+this.Pt.right+2*this.Ft}},{key:"closureText",get:function(){return this.Nt[0]===this.Nt[1]?"repeat: "+this.Nt[0]:"repeat: "+this.Nt[0]+"-"+this.Nt[1]}}]),p}(),s=function(p){function r(e,o,n,u){var h;o===void 0&&(o=v.literal),n===void 0&&(n=""),u===void 0&&(u=!1);var m=Math.ceil(a.measureText(e))+2*a.Dt,N=a.zt;return(h=p.call(this,n,u,m,N)||this).text=e,h.bgColor=l[o],h.At(),h}return g(r,p),r}(i),f=function(p){function r(e,o,n,u){var h;o===void 0&&(o=""),n===void 0&&(n=!1),u===void 0&&(u=!1),h=p.call(this,o,n)||this;var m=e.filter(function(k){return k.length<3}),N=e.filter(function(k){return k.length>=3});return h.It=N.map(function(k){return new s(k)}),m.length>0&&h.It.unshift(new s(m.join(" "))),h.It.length===0?(h.width=a.Ut,h.height=a.zt+2*a.Dt):(h.width=x(h.It.map(function(k){return k.width}))+2*a.Dt,h.height=h.It.map(function(k){return k.height}).reduce(function(k,$){return k+$+a.Dt},0)+a.Dt),h.Vt=u,h.Vt&&(h.width=Math.max(h.width,T.Yt)),h.bgColor=l[v.set],h.At(),h}return g(r,p),j(r,[{key:"above",get:function(){var e=this.Pt.top;return this.Vt&&(e+=a.Dt+a.fontSize),e}}]),r}(i),C=function(p){function r(o){var n;(n=p.call(this,o.Nt,o.Et)||this).Zt=o.Zt,n.$t=o.$t,n._t=o._t,n.Jt=o.Jt,n.Kt=o.Kt,n.Qt=o.Qt,n.Xt=n.constructor.parse(o);var u=n.ti=n.Xt.map(function(R){return R.length===0?0:x(R.map(function(A){return A.above}))}),h=n.ii=n.Xt.map(function(R){return R.length===0?a.zt:x(R.map(function(A){return A.below}))}),m=n.ni=n.Xt.map(function(R){return R.length===0?0:R.reduce(function(A,z){return A+z.across+a.ei},0)+a.ei}),N=x(m),k=h.reduce(function(R,A){return R+A})+u.reduce(function(R,A,z){return z===0?R:R+A},0)+(n.Xt.length-1)*a.ri;n._t||(N+=2*a.oi,k+=a.oi),n.si=0;var $=n.ui();return N<$&&(n.si=Math.ceil(($-N)/2),N=$),n.hi=0,n.Xt.length>1&&(N+=4*a.ai,n.hi=a.ai),n.width=N,n.height=k,n.At(),n}g(r,p);var e=r.prototype;return e.ui=function(){return this.Jt?this.Qt?T.fi:T.ci:this.Kt?this.Qt?T.vi:T.li:this._t?0:this.$t?a.measureText(this.di()):T.pi},e.di=function(){if(this.Jt)return this.Qt?"Not Followed:":"Followed:";if(this.Kt)return this.Qt?"Not preceded:":"Preceded:";if(this._t)return 0;var o="Group #"+this.Zt;return this.$t&&(o+="<"+this.$t+">"),o},r.parse=function(o){return o.Xt.map(function(n){return n.map(function(u){return u.bi?new r(u):u.type===v.literal||u.type===v.xt||u.type===v.yt?new s(u[u.type],u.type,u.Nt,u.Et):u.type===v.Rt?new s("backRef "+u.Rt,u.type,u.Nt,u.Et):u.type===v.o?new s("any character",u.type,u.Nt,u.Et):u.type===v.set?new f(u.set,u.Nt,u.Et,u.gi):void 0})})},e.wi=function(){return new _(this).wi()},j(r,[{key:"above",get:function(){var o=this.ti[0]+this.Pt.top;return this._t||(o+=a.oi+a.fontSize),o}}]),r}(i),_=function(){function p(e){this.pi=e,this.ki=null,this.mi=0,this.xi=0}var r=p.prototype;return r.yi=function(){var e=this.pi,o=e.width+2*a.Ri,n=e.ti[0]+e.height+2*a.Ri;this.ki=a.getContext(o,n),(e.Jt||e.Kt)&&this.ki.setLineDash(a.Li),this.mi=0,this.xi=0},r.wi=function(){var e=this;this.yi();var o=this.ki,n=this.pi,u=n._t?0:a.oi,h=n.width-2*u-4*n.hi-2*n.si,m=n.ti[0]+a.Ri,N=m,k=u+n.si,$=a.Ri+k+2*n.hi;if(n.Xt.forEach(function(P,B){B>0&&(N+=n.ii[B-1]+a.ri+n.ti[B]),o.setTransform(1,0,0,1,$,N),e.mi=0,B===0?e.Si(2*-n.hi-k,0,2*n.hi+k):H(e.ki,[-n.hi,a.Mi-n.hi],[-n.hi,a.Mi],[0,a.Mi],n.hi),P.forEach(function(tt){tt instanceof s?e.Bi(tt):tt instanceof f?e.ji(tt):e.Ci(tt)}),P.length>1&&e.Oi();var G=h-e.mi;if(B===0&&(G+=2*n.hi+k),G>0&&e.Oi(G),B){var rt=e.xi+a.Mi,lt=e.mi+n.hi;H(e.ki,[e.mi,rt],[lt,rt],[lt,rt-a.Mi],n.hi)}}),o.setTransform(1,0,0,1,$,m),N!==m){var R=a.Mi+n.hi,A=N-m+a.Mi-n.hi,z=-n.hi,F=h+n.hi;o.beginPath(),o.moveTo(z-n.hi,a.Mi),o.arcTo(z,a.Mi,z,R,n.hi),o.lineTo(z,A),o.moveTo(F+n.hi,a.Mi),o.arcTo(F,a.Mi,F,R,n.hi),o.lineTo(F,A),o.stroke()}return this.ki},r.Ti=function(e){this.mi+=e},r.Si=function(e,o,n){var u=this.ki;u.beginPath();var h=e,m=o+a.Mi;u.moveTo(h,m),u.lineTo(h+n,m),u.stroke()},r.Wi=function(e){this.Si(this.mi,this.xi,e)},r.Oi=function(e){e===void 0&&(e=a.ei),this.Wi(e),this.Ti(e)},r.Gi=function(e){if(e.Nt!==null){var o=e.Pt,n=a.Ht,u=this.mi+e.Ft,h=this.xi+a.Mi,m=u+n,N=this.xi-e.above,k=this.mi+e.across-e.Ft-n,$=this.xi+e.below-o.bottom+n;this.Si(this.mi,this.xi,o.left+e.Ft),this.Si(k-n,this.xi,o.right+e.Ft);var R=this.ki;if(R.save(),e.Nt[0]==="0"){y(R,m,N,k-m,h-N,n,K.bottom,M.bottom),R.beginPath();var A=h-n;R.moveTo(u,h),R.arcTo(m,h,m,A,n),R.moveTo(k,A),R.arcTo(k,h,k+n,h,n),R.stroke()}if(e.Nt[1]&&e.Nt[1]!=="1"){e.Et&&R.setLineDash(a.Li),y(R,m,h,k-m,$-h,n,K.top);var z=$+a.Dt,F=Math.floor(this.mi+e.across/2);R.textAlign="center",R.textBaseline="top",R.fillText(e.closureText,F,z)}R.restore()}},r.Bi=function(e){this.Oi(),this.Gi(e);var o=this.mi+e.Pt.left+e.Ft,n=this.xi,u=o+a.Dt,h=n+a.Mi,m=this.ki;m.fillStyle=e.bgColor,m.fillRect(o,n,e.width,e.height),m.fillStyle="#000",m.textAlign="left",m.textBaseline="middle",m.fillText(e.text,u,h),this.Ti(e.across)},r.ji=function(e){this.Oi(),this.Gi(e);var o=this.mi+e.Pt.left+e.Ft,n=this.xi,u=this.ki;u.save(),u.fillStyle=e.bgColor,u.fillRect(o,n,e.width,e.height);var h=n+a.Dt,m=0;if(e.It.forEach(function($){u.fillStyle=$.bgColor,m=o+Math.floor((e.width-$.width)/2),u.fillRect(m,h,$.width,$.height),u.fillStyle="#000",u.textBaseline="middle",u.textAlign="left",u.fillText($.text,m+a.Dt,h+a.Mi),h+=$.height+a.Dt}),e.Vt){var N=Math.floor(o+e.width/2),k=n;u.textBaseline="bottom",u.textAlign="center",u.fillStyle=l.Lt,u.fillText("None of :",N,k)}this.Ti(e.across),u.restore()},r.Ci=function(e){this.Oi();var o=this.ki;o.save(),this.Gi(e);var n=e.Pt,u=n.left+e.Ft-a.Ri;if(!e._t){var h,m=this.mi+n.left,N=this.xi-e.above+n.top+a.fontSize,k=this.xi+e.below-n.bottom;e.width,o.textAlign="center",o.textBaseline="bottom",h=e.Jt?e.Qt?l.jt:l.Mt:e.Kt?e.Qt?l.Ct:l.Bt:l.St,o.fillStyle=o.strokeStyle=h,o.fillText(e.di(),Math.floor(m+e.width/2),N),o.setLineDash(a.Li),y(o,m,N,e.width,k-N,a.oi)}var $=e.wi().canvas,R=this.mi+u,A=this.xi-e.ti[0]-a.Ri;o.drawImage($,R,A,$.width,$.height),this.Ti(e.across),o.restore()},p}();I.exports={visualCanvas:function(p){return function(r){var e=new C(r),o=e.width+4*a.qi,n=e.ti[0]+e.height+2*a.Ri,u=e.wi().canvas,h=a.getContext(o,n);h.drawImage(u,2*a.qi-a.Ri,0,u.width,u.height);var m=a.qi,N=e.above+a.Mi+a.Ri;h.fillStyle=w(h,m,N,a.qi,"#fff","#000"),h.beginPath(),h.arc(m,N,a.qi,0,2*Math.PI,!1),h.fill();var k=m+a.qi+e.width+a.qi;return h.fillStyle=w(h,k,N,a.qi,"#fff","#000"),h.beginPath(),h.arc(k,N,a.qi,0,2*Math.PI,!1),h.fill(),h}(p.root).canvas}}},129:I=>{function d(E,j,a,T){a===void 0&&(a=10),T===void 0&&(T=10);var v=document.createElement("canvas").getContext("2d"),l=v.canvas;return l.width=a,l.height=T,l.style.width=a/j+"px",l.style.height=T/j+"px",v.font=E.fontSize+"px/"+E.fontSize+'px "Segoe UI","MicroSoft YaHei",Arial,Helvetica,Sans-Serif',v.lineWidth=E.lineWidth,v}function b(E,j){return E.measureText(j).width}function c(){var E=window.devicePixelRatio||2,j=function(x){var y={Dt:5,fontSize:16,lineWidth:2,ei:10,Ht:8,Mi:13,oi:8,ai:5,ri:10,zt:26,Ut:30,Ri:1,qi:10,Li:[5,2].map(function(K){return K*x})};for(var H in y)typeof y[H]=="number"&&(y[H]*=x);return y}(E),a=d.bind(null,j,E),T=a(),v=b.bind(null,T),l={Yt:v("None of :"),pi:v("Group #99 "),ci:v("Followed:"),fi:v("Not followed:"),li:v("Preceded:"),vi:v("Not preceded:")};return Object.assign(j,{getContext:a,measureText:v,minWidth:l})}var g=[];if("devicePixelRatio"in window&&window.matchMedia){var S="(resolution: "+window.devicePixelRatio+"dpi)";window.matchMedia(S).addEventListener("change",function(){var E=c();g.forEach(function(j){return j(E)})})}I.exports={kt:function(E){g.push(E),E(c())}}},19:(I,d,b)=>{var c=b(599).wt,g={Ni:"groupWrapper",Ei:"lookaroundWrapper",Pi:"setWrapper",Hi:"normalGroup",Di:"nonCaptureGroup",Ai:"namedGroup",Fi:"lookahead",zi:"negativeLookahead",Ii:"lookbehind",Ui:"negativeLookbehind",Vi:"either",literal:"literal",Yi:"literalBlank",xt:"specialSet",I:"boundary",set:"set",Rt:"backRef",o:"dot",Nt:"closure",Zi:"nonGreedyClosure"},S=function(){function T(){this.type=void 0,this.text=void 0,this.children=[]}var v=T.prototype;return v.$i=function(l){return this.children.push(l),l},v._i=function(l,x){var y=new T;return y.text=l,y.type=x,this.$i(y)},v.Ji=function(l,x){var y=new T;return y.text=l,y.type=x,this.children.unshift(y),y},T}();function E(T,v){var l,x;v?(x="",l=""):T._t?(l=g.Di,x=g.Ni):T.$t?(l=g.Ai,x=g.Ni):T.Jt?(l=T.Qt?g.zi:g.Fi,x=g.Ei):T.Kt?(l=T.Qt?g.Ui:g.Ii,x=g.Ei):(l=g.Hi,x=g.Ni);var y=new S;return y.type=x,T.Xt.forEach(function(H,K){K!==0&&y._i("|",g.Vi),H.forEach(function(M){M.bi?y.$i(E(M)):y.$i(function(i){var s;switch(i.type){case c.literal:s=g.literal;break;case c.xt:s=g.xt;break;case c.yt:s=g.I;break;case c.Rt:s=g.Rt;break;case c.o:s=g.o;break;case c.set:s=g.Pi}var f=new S;if(f.type=s,s===g.Pi)i.Ki.set.forEach(function(o){f._i(o,g.literal)}),f._i("]",g.set),f.Ji(i.gi?"[^":"[",g.set);else if(s!==g.literal)f.text=i.Ki[i.type];else{var C=i.Ki[i.type];if(C.includes(" ")){for(var _,p,r=/ +/g,e=0;_=r.exec(C);)(p=C.slice(e,_.index))&&f._i(p,""),_[0].split("").forEach(function(){f._i(" ",g.Yi)}),e=r.lastIndex;e<C.length&&f._i(C.slice(e),"")}else f.text=C}return f}(M));var w=function(i){if(!i.Nt)return null;var s=new S;return s.type=i.Et?g.Zi:g.Nt,s.text=i.Ki.Nt,s}(M);w&&y.$i(w)})}),v||(y.Ji("("+(T.Ki.Qi||""),l),y._i(")",l)),y}var j={};function a(T,v,l,x){l===void 0&&(l="vr_"),x===void 0&&(x="span");var y=Object.assign({},j,v);return function H(K){var M=y[K.type],w=function(i,s){var f=document.createElement(i);return f.className=s,f}(x,M?l+M:"");return K.text&&(K.type===g.Yi?w.innerHTML=K.text.replace(/ /g,"&nbsp;"):w.innerText=K.text),K.children.forEach(function(i){w.appendChild(H(i))}),w}(T)}Object.values(g).forEach(function(T){j[T]=T}),I.exports={visualDom:function(T,v){return v===void 0&&(v={}),a(E(T.root,!0),v.className,v.prefix,v.tagName)}}},599:(I,d,b)=>{var c=b(12),g=c.nt,S=c.rt,E=c.it,j=b(839),a={literal:"literal",set:"set",xt:"specialSet",Rt:"backRef",yt:"pos",o:"dot"},T={};j.V(a,function(M,w){T[M]=w});var v={Xi:function(M,w){this.Nt=M,this.Ki.Nt=w},tn:function(){this.Et=!0,this.Ki.Nt+="?"}},l=function(){function M(w,i,s,f){this.nn=!0,this.parent=w,this.literal=void 0,this.xt=void 0,this.Rt=void 0,this.yt=void 0,this.o=void 0,this.set=[],this.gi=!1,this.Nt=void 0,this.Et=!1,this.type=i,this[i]=s,this[T[i]]=s,this.Ki={literal:void 0,xt:void 0,Rt:void 0,yt:void 0,o:void 0,set:void 0,Nt:""},f===void 0?i===a.set&&(this.Ki[i]=[]):this.Ki[i]=f,Object.assign(this,v)}return M.prototype.en=function(w,i){this.set.push(w),this.Ki.set.push(i)},M}(),x=function(){function M(i){this.bi=!0,this.parent=i,this.Xt=[],this.Y=null,this._t=!1,this.Jt=!1,this.Kt=!1,this.Qt=!1,this.Nt=void 0,this.Et=!1,this.Zt=void 0,this.$t=void 0,this.rn(),this.Ki={Nt:void 0,Qi:void 0},Object.assign(this,v)}var w=M.prototype;return w.on=function(){this._t=!0,this.Ki.Qi="?:"},w.sn=function(i){this.Jt=!0,this.Qt=i,this.Ki.Qi=i?"?!":"?="},w.un=function(i){this.Kt=!0,this.Qt=i,this.Ki.Qi=i?"?<!":"?<="},w.hn=function(i,s){this.$t=i,this.Ki.Qi=s},w.rn=function(){this.Xt.push([]),this.Y=this.Xt[this.Xt.length-1]},w.push=function(i){return this.Y.push(i),i},M}();function y(M){M.Xt.forEach(function(w,i){for(var s,f,C=w.length-1,_=[];C>=0;C--)(s=w[C]).nn&&s.type===a.literal&&s.Nt===void 0?_.unshift(s):(_.length>1&&((f=w[C+1]).literal=_.map(function(p){return p.literal}).join(""),f.literal=f.literal,f.Ki.literal=_.map(function(p){return p.Ki.literal}).join(""),w.splice(C+1,_.length,f)),_.length=0),s.bi&&y(s);_.length>0&&((f=w[0]).literal=_.map(function(p){return p.literal}).join(""),f.Ki.literal=_.map(function(p){return p.Ki.literal}).join(""),w.splice(0,_.length,f))})}function H(M,w,i){for(var s=w.length,f=0,C=i;C<s;C++){if((f=M[f](w[C]))===9)return C;if(f===void 0)break}}var K=function(){function M(i){this.an=new E(i),this.fn=this.an.Y,this.root=null,this.cn=null,this.vn=0,this.ln=[],this.dn(),this.parse(),this.pn()}var w=M.prototype;return w.pn=function(){y(this.root)},w.dn=function(){if(this.root){var i=new x(this.cn);this.cn.push(i),this.cn=i}else this.root=this.cn=new x,this.root._t=!0;return this.cn},w.bn=function(){this.cn.parent&&(this.cn=this.cn.parent)},w.gn=function(i,s,f){return this.cn.push(new l(this.cn,i,s,f))},w.wn=function(){var i=this.cn.Y;return i.length===0?this.cn:i[i.length-1]},w.kn=function(i,s){return this.fn.slice(i,i+s)},w.mn=function(i){return H([function(s){var f=s.value;if(j.X(f))return 1},function(s){var f=s.value;return j.X(f)?1:f===","?2:f==="}"?9:void 0},function(s){var f=s.value;return j.X(f)?2:f==="}"?9:void 0}],this.fn,i)},w.xn=function(i){var s=g;return H([function(f){return f.type===s.T?1:void 0},function(f){return f.type===s.G?9:f.type===s.m?void 0:1}],this.fn,i)},w.parse=function(){for(var i,s,f,C,_=0,p=this.fn.length,r=g,e=S,o=a,n=this.gn.bind(this),u=this.dn.bind(this),h=this.kn.bind(this),m=this.wn.bind(this),N=!1,k=!1;_<p;_++)if(i=this.fn[_],N){if(i.type===r.L)k&&(m().en("-","-"),k=!1),N=!1;else if(i.type===e.I)m().en("\\b",i.source);else if(i.type===e.quote)j.dt(i.value).forEach(function(P){var B=P.literal,G=P.source;m().en(B,G)});else if(i.type===e.quoteName)m().en("k",i.source);else{if(i.type===r.p){k=!0;continue}m().en(i.value,i.source)}k&&([(s=m()).set,s.Ki.set].forEach(function(P){P[P.length-2]+="-"+P[P.length-1],P.length=P.length-1}),k=!1)}else if(i.type===r.o)n(o.o,".",".");else{if(i.type===r.R){N=!0,s=n(o.set,[]),h(_+1,1)[0].type===r.t&&(_+=1,s.gi=!0),h(_+1,1)[0].type===r.p&&(_+=1,s.en("-","-"));continue}if(i.type===e.q||i.type===e.N||i.type===e.P||i.type===e.H||i.type===e.A||i.type===e.F)n(o.xt,i.value,i.source);else if(i.type===e.I||i.type===e.U)n(o.yt,i.value,i.source);else if(i.type===r.t)n(o.yt,"begin",i.source);else if(i.type===r.i)n(o.yt,"end",i.source);else if(i.type===r.C)m().Xi("0,",i.source);else if(i.type===r.O)m().Xi("1,",i.source);else if(i.type===r.v)(s=m()).Nt?s.tn():s.Xi("0,1",i.source);else if(i.type===r.M)(C=this.mn(_+1))===void 0?n(o.literal,"{",i.source):(f=h(_+1,C-_-1),m().Xi(f.map(function(P){return P.value}).join(""),"{"+f.map(function(P){return P.source}).join("")+"}"),_=C);else if(i.type===r.alt)this.cn.rn();else if(i.type===r.k)if(s=u(),(f=h(_+1,3))[0].type===r.v)if(f[1].type===r.g)_+=2,s.on();else if(f[1].type===r.l)_+=2,s.sn(!1);else if(f[1].type===r.h)_+=2,s.sn(!0);else if(f[1].type===r.T&&f[2].type===r.l)_+=3,s.un(!1);else if(f[1].type===r.T&&f[2].type===r.h)_+=3,s.un(!0);else{if(f[1].type===r.T){var $=this.xn(_+2);if($){var R=this.fn.slice(_+3,$);s.hn(R.map(function(P){return P.value}).join(""),"?<"+R.map(function(P){return P.source}).join("")+">"),this.ln.push(s.$t),_=$}}this.vn++,s.Zt=this.vn}else this.vn++,s.Zt=this.vn;else if(i.type===r.m)this.bn();else if(i.type===e.quote)(C=~~i.value)>0&&C<=this.vn?n(o.Rt,"#"+C,i.source):j.dt(i.value).forEach(function(P){var B=P.literal,G=P.source;n(o.literal,B,G)});else if(i.type===e.quoteName){var A=this.xn(_+1),z=void 0,F=void 0;A&&(z=(F=this.kn(_+2,A-_-2)).map(function(P){return P.value}).join("")),z&&this.ln.includes(z)?(_=A,n(o.Rt,"<"+z+">",i.source+"<"+F.map(function(P){return P.source}).join("")+">")):n(o.literal,"k",i.source)}else n(o.literal,i.value,i.source)}},M}();I.exports={wt:a,st:K}}},O={},function I(d){var b=O[d];if(b!==void 0)return b.exports;var c=O[d]={exports:{}};return q[d](c,c.exports,I),c.exports}(579);var q,O})})(mt);const Ot=mt.exports,zt={class:"regexTool"},Vt={class:"title"},Dt=dt({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(L,{emit:it}){const q=L,O=D("1"),I=D("(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})"),d=D(["g","i"]),b=ft([{leftStr:"",rightStr:"lobal",tag:"g",value:"g"},{leftStr:"case ",rightStr:"ntensive",tag:"i",value:"i"},{leftStr:"",rightStr:"ultiline",tag:"m",value:"m"},{leftStr:"",rightStr:"ingle line(dotall)",tag:"s",value:"s"},{leftStr:"",rightStr:"nicode",tag:"u",value:"u"},{leftStr:"stick",rightStr:"ingle line(dotall)",tag:"y",value:"y"}]),c=D("He3 is a free, modern developer toolbox. Check it out: https://he3.app"),g=D(null),S=D(""),E=ft([]),{t:j}=Rt(),a=D();let T;const v=Mt.exports.debounce(()=>{try{T=new RegExp(I.value,d.value.join(""))}catch{at.error(j("jsRegexTester.wrongFormat"));return}const i=c.value.match(T);i?(S.value=i.join(`
`),E.length=0,E.push(...new Set(i))):(S.value=j("javascript.noMatch"),E.length=0,a.value.warnDisabled())},300);ot([I,d,c],()=>{v()});const l=D(!1);gt(()=>{var i;if((i=q.clipboardValue)!=null&&i.isRegExp()){d.value.length=0;const s=q.clipboardValue.getOriginData().split("/");I.value=s[1],d.value.push(...s[2].split("")),it("acceptClipboardCb")}v(),y.value=!1,l.value=!0});const x=D(0),y=D(!0),H=()=>{var f,C;if(I.value.length<=0){at.warning(j("javascript.nothing"));return}const s=Ot(T).visualCanvas();(f=g.value)!=null&&f.hasChildNodes()&&g.value.removeChild(g.value.firstChild),(C=g.value)==null||C.appendChild(s),x.value=s.width+60,y.value=!0},K=()=>{y.value=!1},M=D("he3.app"),w=D("");return ot(()=>M.value,()=>{w.value=c.value.replace(T,M.value)}),(i,s)=>{const f=Z("a-col"),C=Z("a-select"),_=Z("a-row"),p=Z("a-divider"),r=Z("a-tab-pane"),e=Z("a-tabs"),o=Z("a-modal");return W(),Ct(Q(jt),{"max-width":1280},{one:X(()=>[U("div",zt,[U("div",Vt,[Y(J(i.$t("javascript.RegularExpression"))+" ",1),V(Q(Et),{style:{float:"right"},size:"small",type:"primary",onClick:H},{default:X(()=>[Y(J(i.$t("javascript.RegexImage")),1)]),_:1})]),V(_,{class:"regex",type:"flex",gutter:16},{default:X(()=>[V(f,{flex:"auto"},{default:X(()=>[V(Q(pt),{value:I.value,"onUpdate:value":s[0]||(s[0]=n=>I.value=n),prefix:"/",size:"large",class:"reg-input","select-all-on-mount":""},null,8,["value"])]),_:1}),V(f,{flex:"300px"},{default:X(()=>[V(C,{value:d.value,"onUpdate:value":s[1]||(s[1]=n=>d.value=n),mode:"multiple",size:"large",style:{width:"100%"},"option-label-prop":"tag",options:b},{option:X(({tag:n,leftStr:u,rightStr:h})=>[Y(J(u),1),U("strong",null,J(n),1),Y(J(h),1)]),_:1},8,["value","options"])]),_:1})]),_:1}),V(p),V(Q(qt),{modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=n=>c.value=n),title:i.$t("javascript.TestString"),"highlight-text":E,"regex-modifier":d.value.join("")},null,8,["modelValue","title","highlight-text","regex-modifier"]),V(e,{activeKey:O.value,"onUpdate:activeKey":s[4]||(s[4]=n=>O.value=n),onTabClick:s[5]||(s[5]=n=>w.value=c.value.replace(Q(T),M.value))},{default:X(()=>[V(r,{key:"1",tab:i.$t("javascript.matchResult")},{default:X(()=>[V(Q(vt),{ref_key:"resultRef",ref:a,"result-desc":i.$t("jsRegexTester.result"),result:S.value},null,8,["result-desc","result"])]),_:1},8,["tab"]),V(r,{key:"2",tab:i.$t("javascript.replace")},{default:X(()=>[V(Q(pt),{value:M.value,"onUpdate:value":s[3]||(s[3]=n=>M.value=n),size:"large",class:"reg-input"},null,8,["value"]),V(Q(vt),{"result-desc":i.$t("jsRegexTester.result"),result:w.value},null,8,["result-desc","result"])]),_:1},8,["tab"])]),_:1},8,["activeKey"]),V(o,{mask:l.value,width:x.value,visible:y.value,footer:null,onCancel:K},{default:X(()=>[U("div",{ref_key:"canvasRef",ref:g,style:{"margin-top":"20px","max-height":"70vh",overflow:"scroll"}},null,512)]),_:1},8,["mask","width","visible"])])]),_:1})}}});const Lt=Kt(Dt,[["__scopeId","data-v-da8541c4"]]);export{Lt as default};