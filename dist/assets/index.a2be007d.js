import{d as o,aa as c,c as u,u as i,o as l,dm as f}from"./index.fa3829f9.js";const m=o({__name:"index",setup(p){c();const r=`class Demo {
    public static void main(String args[]) {
        System.out.println("A Free, Modern Toolbox, Built for Developers.");
    }
}`;function a(e){return e.replace(/[\x08\x09\x1a\n\r"\\\%]/g,function(n){switch(n){case"\b":return"\\b";case"	":return"\\t";case"":return"\\z";case`
`:return"\\n";case"\r":return"\\r";case"\f":return"\\f";case'"':case"\\":case"%":return"\\"+n}})}function t(e){return e.value?a(e.value):""}function s(e){e.value=r}return(e,n)=>(l(),u(i(f),{onChange:t,onMounted:s}))}});export{m as default};
