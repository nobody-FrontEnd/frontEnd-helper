import{d as u,aa as c,c as o,u as f,o as p,dm as l}from"./index.fa3829f9.js";const m=u({__name:"index",setup(i){c();const a=`function copyHandler() {
  if (!output.value) {
    return
  }
  copy(fileType.TEXT, output.value)
  message.success('Copy Success')
}`;function r(e){return e.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"	":return"\\t";case"":return"\\z";case`
`:return"\\n";case"\r":return"\\r";case"\v":return"\\v";case"\f":return"\\f";case'"':case"'":case"\\":case"%":return"\\"+n}})}function s(e){return e.value?r(e.value):""}function t(e){e.value=a}return(e,n)=>(p(),o(f(l),{onChange:s,onMounted:t}))}});export{m as default};
