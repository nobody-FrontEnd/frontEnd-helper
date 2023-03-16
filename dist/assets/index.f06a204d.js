import{d as S,q as N,r as h,y as B,H,ed as P,b as E,j as y,a as p,w,u as _,an as g,h as C,o as T,F as L,e as W,R as k,t as x,cc as z,bq as I,cz as $,_ as G}from"./index.fa3829f9.js";import{t as O,a as R,b as q}from"./index.93aad427.js";var A=function(b,c,s,o,t){var a,u,d;c===void 0&&(c=1),s===void 0&&(s=1),o===void 0&&(o=.5),t===void 0&&(t=.1),console.log(o);var m=b,v=m,l=document.createElement("IFRAME");l.setAttribute("id","printIframe");var n;l.setAttribute("style","position:absolute;width:0px;height:800px;padding:0px;margin:0px;"),document.body.appendChild(l);var e=document.createElement("style"),r=`
    @media print{
      header nav, footer, video, audio, object, embed {
        display: none;
      }
      body, div, img,dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, table, th, td {margin:0; padding:0;}  
      body{
        transform: scale(`.concat(+c,",").concat(+s,`);
        -ms-transform: scale(`).concat(+c,",").concat(+s,`);
        -moz-transform: scale(`).concat(+c,",").concat(+s,`);
        -webkit-transform: scale(`).concat(+c,",").concat(+s,`);
        -o-transform: scale(`).concat(+c,",").concat(+s,`);
        transform-origin: `).concat(+o*100,"% ").concat(+t*100,`%;
        -webkit-transform-origin: `).concat(+o*100,"% ").concat(+t*100,`%;
        -ms-transform-origin: `).concat(+o*100,"% ").concat(+t*100,`%;
        -moz-transform-origin: `).concat(+o*100,"% ").concat(+t*100,`%;
        -o-transform-origin: `).concat(+o*100,"% ").concat(+t*100,`%;
      }
    }
    `);e!=null&&e.styleSheet?e.styleSheet.cssText=r:e.innerHTML=r,l.contentWindow.onbeforeprint=function(){console.log("start")},l.contentWindow.onafterprint=function(){document.body.removeChild(l)},n=(a=l.contentWindow)===null||a===void 0?void 0:a.document.documentElement;var i=document.createElement("div");i.innerHTML=v==null?void 0:v.innerHTML,i.style.height="100px",n.getElementsByTagName("head")[0].appendChild(e),n.getElementsByTagName("body")[0].appendChild(i),(u=l.contentWindow)===null||u===void 0||u.focus(),(d=l.contentWindow)===null||d===void 0||d.print()};const D={class:"markdownPreview"},F={class:"header"},j={class:"content"},U=S({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(b,{emit:c}){const s=b,{t:o}=N(),t=h("## hello He3"),a=h(null),u=h("");B(t,()=>{if(a.value){const n=P.parse(t.value);u.value=n,a.value.innerHTML=n}}),H(()=>{var e,r;if(((e=s.clipboardValue)==null?void 0:e.isMarkdown())&&(t.value=(r=s.clipboardValue)==null?void 0:r.getOriginData(),c("acceptClipboardCb")),a.value){const i=P.parse(t.value);u.value=i,a.value.innerHTML=i}});const d={PNG:"png",WEBP:"webp",SVG:"svg"},m=h(d.PNG),v=()=>{if(t.value.length<=0){g.warning(o("markdownPreview.nothing"));return}({[d.PNG]:O,[d.WEBP]:R,[d.SVG]:q})[m.value](a.value,{style:{transform:"scale(1)"}}).then(e=>{const r=document.createElement("a");r.download=`markdown-image.${m.value}`,r.href=e,r.click()}).catch(e=>{g.error("oops, something went wrong!"),console.error(e)})},l=()=>{if(t.value.length<=0){g.warning(o("markdownPreview.nothing"));return}A(a.value)};return(n,e)=>{const r=C("SelectOption"),i=C("a-button");return T(),E("div",D,[y("div",F,[p(_(z),{value:m.value,"onUpdate:value":e[0]||(e[0]=f=>m.value=f),size:"small",class:"button",style:{width:"90px"}},{default:w(()=>[(T(),E(L,null,W(d,(f,V,M)=>p(r,{key:M,value:f},{default:w(()=>[k(x(V),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"]),p(i,{type:"primary",size:"small",class:"button",onClick:v},{default:w(()=>[k(x(n.$t("markdownPreview.imageExport")),1)]),_:1}),p(i,{type:"primary",size:"small",class:"button",onClick:l},{default:w(()=>[k(x(n.$t("markdownPreview.pdfExport")),1)]),_:1}),p(_(I),{"copy-content":u.value,type:"primary",title:n.$t("markdownPreview.copy"),class:"button"},null,8,["copy-content","title"])]),y("div",j,[p(_($),{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=f=>t.value=f),class:"input"},null,8,["modelValue"]),y("div",{ref_key:"outputRef",ref:a,class:"output"},null,512)])])}}});const Q=G(U,[["__scopeId","data-v-a7a27f17"]]);export{Q as default};