import{d as v,r as p,c as f,w as i,u as c,o as h,a as o,cg as V,cd as x,j as y,R as C,h as d}from"./index.fa3829f9.js";import{M}from"./MultiLineResult.eeac4e9b.js";const b=y("p",null,"Please input count:",-1),g=C("lottery"),N=v({__name:"index",setup(k){const u=p(`peace
love
happiness
health`),s=p(1),r=p("");function m(){let t=u.value.split(`
`);t=t.filter(function(n){return n.length>0});const e=[];for(let n=0;n<s.value;n++){const a=Math.floor(Math.random()*t.length);e.push(t[a]),t.splice(a,1)}r.value=e.join(`
`)}return(t,e)=>{const n=d("a-input-number"),a=d("a-button"),_=d("a-space");return h(),f(c(x),null,{one:i(()=>[o(c(V),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value=l),title:"Please input candidates here:"},null,8,["modelValue"]),b,o(_,null,{default:i(()=>[o(n,{value:s.value,"onUpdate:value":e[1]||(e[1]=l=>s.value=l),min:"1"},null,8,["value"]),o(a,{type:"primary",onClick:e[2]||(e[2]=l=>m())},{default:i(()=>[g]),_:1})]),_:1}),o(c(M),{result:r.value,"onUpdate:result":e[3]||(e[3]=l=>r.value=l),"result-desc":"Congrats!"},null,8,["result"])]),_:1})}}});export{N as default};
