import{d as R,r as o,as as S,c as G,w as t,u as T,o as i,j as I,a as l,b as v,e as p,R as d,t as u,F as c,Z as L,T as J,cd as O,h as s,_ as P}from"./index.fa3829f9.js";import{M as Y}from"./MultiLineResult.eeac4e9b.js";const Z={class:"flexTool"},q=R({__name:"index",setup(K){const y=o(50),g=o(50),$=o(5),f=o(["","","","","","","","",""]),h=["wrap","nowrap","wrap-reverse"],b=o(h[0]),j=["flex-start","flex-end","center","space-evenly","space-around","space-between"],w=o(j[0]),D=["flex-start","flex-end","center","stretch","base-line"],z=o(D[0]),F=["flex-start","flex-end","center","stretch","base-line"],C=o(F[0]),A=["row","column","row-reverse","column-reverse"],k=o(A[0]),M=S(()=>{const a=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
<body>${`
<style>
.container{
  display:flex;
  overflow:auto;
  justify-content:${w.value};
  align-items:${z.value};
  align-content:${C.value};
  flex-wrap:${b.value};
  flex-direction:${k.value};
}
.container .item{
  height:${y.value}px;
  width:${g.value}px;
  margin:${$.value}px;
  border:1px solid #000;
}
</style>
`}<div class="container">
`,_=`</div>
</body>
</html>`;let n="";for(let r=0;r<f.value.length;r++)n+=`	<div class="item"></div>
`;return a+n+_});return(m,a)=>{const _=s("a-input-number"),n=s("a-form-item"),r=s("a-select-option"),x=s("a-select"),U=s("a-button"),N=s("a-space"),V=s("a-form"),B=s("a-col"),W=s("a-row"),E=s("a-divider");return i(),G(T(O),{"max-width":1280},{one:t(()=>[I("div",Z,[l(W,{type:"flex"},{default:t(()=>[l(B,{flex:"300px"},{default:t(()=>[l(V,{"label-col":{span:12},"wrapper-col":{span:16},size:"small"},{default:t(()=>[l(n,{label:"Height:"},{default:t(()=>[l(_,{value:y.value,"onUpdate:value":a[0]||(a[0]=e=>y.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"Width:"},{default:t(()=>[l(_,{value:g.value,"onUpdate:value":a[1]||(a[1]=e=>g.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"Margin:"},{default:t(()=>[l(_,{value:$.value,"onUpdate:value":a[2]||(a[2]=e=>$.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"flex-wrap:"},{default:t(()=>[l(x,{value:b.value,"onUpdate:value":a[3]||(a[3]=e=>b.value=e),size:"small"},{default:t(()=>[(i(),v(c,null,p(h,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"justify-content:"},{default:t(()=>[l(x,{value:w.value,"onUpdate:value":a[4]||(a[4]=e=>w.value=e),size:"small"},{default:t(()=>[(i(),v(c,null,p(j,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"align-items:"},{default:t(()=>[l(x,{value:z.value,"onUpdate:value":a[5]||(a[5]=e=>z.value=e),size:"small"},{default:t(()=>[(i(),v(c,null,p(D,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"align-content:"},{default:t(()=>[l(x,{value:C.value,"onUpdate:value":a[6]||(a[6]=e=>C.value=e),size:"small"},{default:t(()=>[(i(),v(c,null,p(F,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"flex-direction:"},{default:t(()=>[l(x,{value:k.value,"onUpdate:value":a[7]||(a[7]=e=>k.value=e),size:"small"},{default:t(()=>[(i(),v(c,null,p(A,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,null,{default:t(()=>[l(N,null,{default:t(()=>[l(U,{type:"primary",size:"small",onClick:a[8]||(a[8]=e=>f.value.push(""))},{default:t(()=>[d(u(m.$t("css.add")),1)]),_:1}),l(U,{danger:"",size:"small",onClick:a[9]||(a[9]=e=>f.value.pop())},{default:t(()=>[d(u(m.$t("css.delete")),1)]),_:1}),l(U,{danger:"",size:"small",onClick:a[10]||(a[10]=e=>f.value=[])},{default:t(()=>[d(u(m.$t("css.deleteAll")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(B,{flex:"auto",class:"right-col"},{default:t(()=>[l(T(Y),{"result-desc":m.$t("css.getCodeHere"),result:T(M)},null,8,["result-desc","result"])]),_:1})]),_:1}),l(E),I("div",{class:"preview",style:L(`
        flex-wrap:${b.value};
        justify-content:${w.value};
        align-items:${z.value};
        align-content:${C.value};
        flex-direction:${k.value}`)},[l(J,{name:"list"},{default:t(()=>[(i(!0),v(c,null,p(f.value,(e,H)=>(i(),v("div",{key:H,style:L(`
            height:${y.value}px;
            width:${g.value}px;
            margin:${$.value}px;`),class:"divItem"},u(H),5))),128))]),_:1})],4)])]),_:1})}}});const ee=P(q,[["__scopeId","data-v-f04c9d6d"]]);export{ee as default};
