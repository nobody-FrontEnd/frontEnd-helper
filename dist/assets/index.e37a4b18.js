import{L as K}from"./layout1.419e9510.js";import{d as W,q as X,ah as Y,v as H,r as M,H as S,y as D,as as ee,c as ae,w as a,u as m,bA as B,n as te,cE as oe,o as le,j as I,a as e,R as u,t as F,Z as O,b1 as re,h as p,_ as ne}from"./index.fa3829f9.js";import{C as Q}from"./index.be35ea33.js";import{c as N,C as T}from"./utils.ffc8936d.js";import{C as Z}from"./CodeResult.b2a47f5c.js";import"./Icon.87d3d941.js";var se=.2126,ue=.7152,de=.0722,E=1/12.92;function P(d){return Math.pow((d+.055)/1.055,2.4)}function J(d){var s=d[0]/255,j=d[1]/255,o=d[2]/255,x=s<=.03928?s*E:P(s),n=j<=.03928?j*E:P(j),U=o<=.03928?o*E:P(o);return x*se+n*ue+U*de}function ce(d,s){return(Math.max(d,s)+.05)/(Math.min(d,s)+.05)}function _e(d,s){return ce(J(d),J(s))}function ie(d){return d>=7?"AAA":d>=4.5?"AA":d>=3?"AA Large":"Fail"}const pe={class:"foreground-wrap"},fe=u(" R "),ve=u(" G "),ge=u(" B "),Ae=u(" A "),me={class:"background-wrap"},be=u(" R "),ye=u(" G "),Ce=u(" B "),he=u(" A "),ke={class:"two-wrap"},xe={class:"preview"},we=u(" \u2764\uFE0F by https://he3.app/ "),Be=u("AA"),Ue=u("AA Large"),Re=u("AAA"),Ge=W({__name:"index",setup(d){const{t:s}=X(),j=Y(),o=H({r:0,g:0,b:0,a:1}),x=M("rgba(0,0,0,1)");S(()=>{j.dark&&(o.r=76,o.g=48,o.b=160,o.a=1,x.value="rgba(76,48,160,1)")}),D([()=>o.r,()=>o.g,()=>o.b,()=>o.a,x],([l,t,y,C,h],[v,g,A,L,w])=>{const _=G({r:l,g:t,b:y,a:C}),b=G({r:v,g,b:A,a:L}),f=N(h,T.RGBA).replaceAll(" ",""),k=N(w,T.RGBA).replaceAll(" ","");if(!(!B(_)||!B(b)||!B(f)||!B(w))&&(_!==b&&_!==k&&f===k&&(x.value=_),f!==k&&f!==b&&_===b)){const{r:$,g:z,b:r,a:R}=q(h);o.r=$,o.g=z,o.b=r,o.a=R!=null?R:1}});const n=H({r:255,g:255,b:255,a:1}),U=M("rgba(255, 255, 255, 1)");D([()=>n.r,()=>n.g,()=>n.b,()=>n.a,U],([l,t,y,C,h],[v,g,A,L,w])=>{const _=G({r:l,g:t,b:y,a:C}),b=G({r:v,g,b:A,a:L}),f=N(h,T.RGBA).replaceAll(" ",""),k=N(w,T.RGBA).replaceAll(" ","");if(!(!B(_)||!B(b)||!B(f)||!B(w))&&(_!==b&&_!==k&&f===k&&(U.value=_),f!==k&&f!==b&&_===b)){const{r:$,g:z,b:r,a:R}=q(h);n.r=$,n.g=z,n.b=r,n.a=R!=null?R:1}});const i=M(1),c=M({AA:!1,AAA:!1,"AA Large":!1,Fail:!1}),V=ee(()=>{switch(!0){case(i.value>=1&&i.value<3):return{bgColor:"#fbd0da",color:"#5f071c",remark:s("colorContrastChecker.rate.veryPoor")};case(i.value>=3&&i.value<4.5):return{bgColor:"#fbd0da",color:"#5f071c",remark:s("colorContrastChecker.rate.poor")};case(i.value>=4.5&&i.value<7):return{bgColor:"#fbf5d0",color:"#5f5207",remark:s("colorContrastChecker.rate.good")};case(i.value>=7&&i.value<=12):return{bgColor:"#d2fbd0",color:"#0d5f07",remark:s("colorContrastChecker.rate.veryGood")};case(i.value>12&&i.value<=21):return{bgColor:"#d2fbd0",color:"#0d5f07",remark:s("colorContrastChecker.rate.super")};default:return{bgColor:"#fbd0da",color:"#5f071c",remark:s("colorContrastChecker.rate.unexpected")}}});D([o,n],([l,t])=>{switch(i.value=te.exports.round(_e([l.r,l.g,l.b],[t.r,t.g,t.b]),2),ie(i.value)){case"Fail":c.value.AA=!1,c.value["AA Large"]=!1,c.value.AAA=!1;break;case"AA":c.value.AA=!0,c.value["AA Large"]=!1,c.value.AAA=!1;break;case"AA Large":c.value.AA=!0,c.value["AA Large"]=!0,c.value.AAA=!1;case"AAA":c.value.AA=!0,c.value["AA Large"]=!0,c.value.AAA=!0;break}},{immediate:!0});function G(l){return l.r>255||l.r<0||l.g>255||l.g<0||l.b>255||l.b<0||l.a>1||l.a<0?"":`rgba(${l.r},${l.g},${l.b},${l.a})`}function q(l){const t=new oe(l);return{r:t.RGBAObject.r,g:t.RGBAObject.g,b:t.RGBAObject.b,a:t.RGBAObject.a}}return(l,t)=>{const y=p("a-typography-title"),C=p("a-col"),h=p("a-row"),v=p("a-typography"),g=p("a-input-number"),A=p("a-form-item"),L=p("a-form"),w=p("a-typography-paragraph"),_=p("a-card"),b=p("a-rate"),f=p("a-avatar"),k=p("a-space"),$=p("a-button"),z=p("a-tooltip");return le(),ae(m(K),{class:"layout"},{one:a(()=>[I("div",pe,[e(h,{type:"flex",align:"middle",gutter:16,class:"title"},{default:a(()=>[e(C,null,{default:a(()=>[e(y,{level:5,style:{margin:"0"}},{default:a(()=>[u(F(m(s)("colorContrastChecker.foreground"))+": ",1)]),_:1})]),_:1}),e(C,null,{default:a(()=>[e(m(Q),{"pure-color":x.value,"onUpdate:pure-color":t[0]||(t[0]=r=>x.value=r),position:{top:"12px",left:"15px"},class:"color-picker"},null,8,["pure-color"])]),_:1})]),_:1}),e(L,{layout:"inline"},{default:a(()=>[e(A,null,{default:a(()=>[e(g,{value:o.r,"onUpdate:value":t[1]||(t[1]=r=>o.r=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[fe]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:o.g,"onUpdate:value":t[2]||(t[2]=r=>o.g=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[ve]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:o.b,"onUpdate:value":t[3]||(t[3]=r=>o.b=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[ge]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:o.a,"onUpdate:value":t[4]||(t[4]=r=>o.a=r),placeholder:"Username",min:0,max:1,step:.1},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[Ae]),_:1})]),_:1},8,["value","step"])]),_:1})]),_:1}),e(m(Z),{code:G(o)},null,8,["code"])]),I("div",me,[e(h,{type:"flex",align:"middle",gutter:16,class:"title"},{default:a(()=>[e(C,null,{default:a(()=>[e(y,{level:5,style:{margin:"0"}},{default:a(()=>[u(F(m(s)("colorContrastChecker.background"))+": ",1)]),_:1})]),_:1}),e(C,null,{default:a(()=>[e(m(Q),{"pure-color":U.value,"onUpdate:pure-color":t[5]||(t[5]=r=>U.value=r),position:{top:"12px",left:"15px"},class:"color-picker"},null,8,["pure-color"])]),_:1})]),_:1}),e(L,{layout:"inline"},{default:a(()=>[e(A,null,{default:a(()=>[e(g,{value:n.r,"onUpdate:value":t[6]||(t[6]=r=>n.r=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[be]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:n.g,"onUpdate:value":t[7]||(t[7]=r=>n.g=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[ye]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:n.b,"onUpdate:value":t[8]||(t[8]=r=>n.b=r),placeholder:"Username",min:0,max:255},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[Ce]),_:1})]),_:1},8,["value"])]),_:1}),e(A,null,{default:a(()=>[e(g,{value:n.a,"onUpdate:value":t[9]||(t[9]=r=>n.a=r),placeholder:"Username",min:0,max:1,step:.1},{addonBefore:a(()=>[e(v,{style:{width:"40px"}},{default:a(()=>[he]),_:1})]),_:1},8,["value","step"])]),_:1})]),_:1}),e(m(Z),{code:G(n)},null,8,["code"])])]),two:a(()=>[I("div",ke,[e(_,{style:O({backgroundColor:U.value,color:x.value})},{default:a(()=>[I("div",xe,[e(y,{level:4,style:{color:"inherit"}},{default:a(()=>[u(F(l.$t("colorContrastChecker.loremIpsum.title")),1)]),_:1}),e(w,{style:{color:"inherit"}},{default:a(()=>[u(F(l.$t("colorContrastChecker.loremIpsum.content")),1)]),_:1}),e(w,{style:{"font-weight":"600",color:"inherit"}},{default:a(()=>[we]),_:1})])]),_:1},8,["style"]),e(_,{style:O({backgroundColor:m(V).bgColor,color:m(V).color})},{default:a(()=>[e(h,null,{default:a(()=>[e(C,{span:12},{default:a(()=>[e(y,{level:1,style:{"font-size":"50px",color:"inherit",margin:"0"}},{default:a(()=>[u(F(i.value),1)]),_:1})]),_:1}),e(C,{span:12},{default:a(()=>[e(y,{level:5,style:{color:"inherit","text-align":"center"}},{default:a(()=>[u(F(m(V).remark),1)]),_:1}),e(b,{count:5,value:i.value,disabled:"",style:{color:"inherit"}},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["style"]),e(_,null,{default:a(()=>[e(h,{type:"flex",justify:"center"},{default:a(()=>[e(k,null,{default:a(()=>[e(f,{size:80,style:O({backgroundColor:c.value.AA?"#52c41a":"#f5222d"})},{default:a(()=>[Be]),_:1},8,["style"]),e(f,{size:80,style:O({backgroundColor:c.value["AA Large"]?"#52c41a":"#f5222d"})},{default:a(()=>[Ue]),_:1},8,["style"]),e(f,{size:80,style:O({backgroundColor:c.value.AAA?"#52c41a":"#f5222d"})},{default:a(()=>[Re]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})]),e(z,{title:m(s)("colorContrastChecker.desc"),class:"desc"},{default:a(()=>[e($,{shape:"circle"},{default:a(()=>[e(m(re))]),_:1})]),_:1},8,["title"])]),_:1})}}});const Me=ne(Ge,[["__scopeId","data-v-20ba0b09"]]);export{Me as default};
