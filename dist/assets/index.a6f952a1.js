import{d as c,c as o,u as f,o as l,dm as i}from"./index.fa3829f9.js";import{u as m}from"./index.f99293d4.js";const h=c({__name:"index",setup(p){const r='{"Hello, He3"}';function a(e){return e.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"	":return"\\t";case"":return"\\z";case`
`:return"\\n";case"\r":return"\\r";case"\v":return"\\v";case"\f":return"\\f";case'"':case"'":case"\\":case"%":return"\\"+n}})}function t(e){return e.value?a(e.value):""}function s(e){return e.value?m(e.value):""}function u(e){e.value=r}return(e,n)=>(l(),o(f(i),{onChange:t,onMounted:u,onResultChange:s}))}});export{h as default};