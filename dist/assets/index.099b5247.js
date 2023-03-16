import{o as y,b as m,j as S,d as z,r as $,H as F,y as R,bA as q,c as j,w as u,u as v,F as L,e as A,E as B,df as G,a as l,db as X,d9 as D,da as U,R as O,t as E,ad as N,cn as Z,Z as H,cd as W,aQ as P,M as Q,h as V,aR as I,_ as J}from"./index.fa3829f9.js";import{C as K}from"./index.be35ea33.js";import{c as k,C as x}from"./utils.ffc8936d.js";import"./Icon.87d3d941.js";const Y=({hex:e,shades:h})=>{const a=ee(e),s={};return h=h.forEach(({name:o,lightness:r})=>{const{h:c,s:i}=a,_=te({h:c,s:i,l:r});s[o]=_}),s},ee=e=>{const h=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);try{let d=parseInt(h[1],16),_=parseInt(h[2],16),t=parseInt(h[3],16);d/=255,_/=255,t/=255;var a=Math.max(d,_,t),s=Math.min(d,_,t),o,r,c=(a+s)/2;if(a==s)o=r=0;else{var i=a-s;switch(r=c>.5?i/(2-a-s):i/(a+s),a){case d:o=(_-t)/i+(_<t?6:0);break;case _:o=(t-d)/i+2;break;case t:o=(d-_)/i+4;break}o/=6}const n=new Object;return n.h=Math.round(o*360),n.s=Math.round(r*100),n.l=Math.round(c*100),n}catch{return console.log(e),{h:0,s:0,l:0}}},te=({h:e,s:h,l:a})=>{a/=100;const s=h*Math.min(a,1-a)/100,o=r=>{const c=(r+e/30)%12,i=a-s*Math.max(Math.min(c-3,9-c,1),-1);return Math.round(255*i).toString(16).padStart(2,"0")};return`#${o(0)}${o(8)}${o(4)}`},ae=e=>{const h=[],a=["primary","secondary","tertiary","quaternary","quinary","senary","septenary","octonary","nonary","denary"],s=[{name:"50",lightness:98},{name:"100",lightness:95},{name:"200",lightness:90},{name:"300",lightness:82},{name:"400",lightness:64},{name:"500",lightness:46},{name:"600",lightness:33},{name:"700",lightness:24},{name:"800",lightness:14},{name:"900",lightness:7},{name:"950",lightness:4}];typeof e=="string"&&(e={colors:[e],names:a,shades:s}),typeof e=="object"&&Array.isArray(e)&&(e={colors:e,names:a,shades:s}),typeof e=="object"&&!Array.isArray(e)&&(e=Object.assign({colors:h,names:a,shades:s},e));const o={};return e.colors.forEach((r,c)=>{const i=e.names[c],d=Y({hex:r,shades:s});o[i]=d}),o};var oe=ae;const se=oe,ne={width:"1.3em",height:"1.3em",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg"},re=S("path",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 158.133c0 .097.01.191.03.283 1.54 6.87 60.082-1.176 130.755-17.988 70.685-16.765 126.718-35.942 125.184-42.788-1.043-4.659-28.357-2.448-67.894 4.701-1.072.193-3.145 2.66-5.117 5.006-1.727 2.055-3.377 4.018-4.206 4.276-10.495 3.272-21.2 5.809-36.832 9.513a4670.577 4670.577 0 0 0-13.908 3.312c-14.151 3.397-23.081 4.911-31.404 6.322-5.626.953-10.974 1.86-17.469 3.269-1.4.309-3.741-.812-5.96-1.874-2.049-.98-3.993-1.911-4.995-1.62C27.546 142.293 0 153.137 0 158.133Z"},null,-1),le=S("path",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd",d:"M196.437 134.038a10.571 10.571 0 0 1 1.153-3.53l1.026-1.426a1566.02 1566.02 0 0 1-27.745 7.517c-1.45 7.324-4.556 14.191-9.064 20.046-4.508 5.854-10.292 10.531-16.882 13.65l5.443 26.362 2.836 13.074c-.384-7.912.961-13.228 4.037-15.95.29-.276.6-.528.928-.755 10.676-5.723 19.78-14.128 26.469-24.439s10.747-22.193 11.799-34.549Zm-65.765 67.07-5.484-26.528a44.955 44.955 0 0 1-20.1-4.953c-6.25-3.198-11.713-7.818-15.977-13.512a1574.668 1574.668 0 0 1-29.538 6.169 19.42 19.42 0 0 1 3.944 3.768c.536.836 1.146 1.62 1.822 2.341 6.544 10.141 15.421 18.456 25.84 24.203 10.418 5.748 22.054 8.749 33.871 8.738 1.891 0 3.765-.075 5.622-.226ZM98.141 59.788l-2.797-13.513c.373 7.912-.972 13.227-4.036 15.944-.317.28-.576.523-.784.731-10.66 6.03-19.653 14.759-26.131 25.365-6.478 10.606-10.226 22.738-10.892 35.252v.16c-1.588 11.503-14.02 16.682-21.596 19.837-3.559 1.483-6.046 2.519-5.832 3.554.358 1.884 5.345 4.19 12.685 6.977 12.402-3.673 27.019-7.726 43.163-11.886a48.813 48.813 0 0 1 .78-32.375c3.935-10.364 11.28-18.972 20.75-24.319l-5.31-25.726Zm64.213 4.823c-11.241-7.05-24.147-10.774-37.304-10.765a70.85 70.85 0 0 0-7.49.398l5.282 25.554c.922-.083 1.845-.083 2.779-.083 11.212-.008 22.043 4.197 30.463 11.828 8.42 7.632 13.852 18.166 15.277 29.629 13.734-2.906 26.333-5.396 37.288-7.381 3.834-6.097 6.042-10.352 5.668-12.171-.212-1.023-1.975-.728-4.556-.296-5.637.943-15.177 2.54-20.987-7.513-6.039-12.048-15.18-22.15-26.42-29.2Z"},null,-1),ce=[re,le];function ie(e,h){return y(),m("svg",ne,ce)}const de={render:ie},ue={class:"color-palette-generator-wrapper"},fe={style:{textTransform:"uppercase"}},he={key:0},pe={key:1,style:{padding:"5px 20px"}},ye={key:0,class:"render-on-search"},_e={style:{textTransform:"uppercase"}},ve={key:0},me=z({__name:"index",props:{clipboardValue:null,searchValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(e,{emit:h}){const a=e,s="#620fad",o=$(k(s,x.RGB)),r=$(s);F(()=>{var t;(t=a.clipboardValue)!=null&&t.isColor()?(r.value=a.clipboardValue.getOriginData(),h("acceptClipboardCb")):i(s)});const c=$();R([o,r],([t,n],[g,M])=>{if(t!==g&&n===M){const p=k(t,x.HEX),b=k(n,x.HEX);p&&p!==b&&(r.value=p,i(p))}if(n!==M&&t===g){if(!G(n))return;const p=k(n,x.RGB),b=k(t,x.RGB);p&&p!==b&&(o.value=p,i(p))}});function i(t){if(!q(t))return;const n=k(t,x.HEX);c.value=se(n)}const d=$(null),_=(t,n)=>{d.value=t,Q.writeTextToClipboard(n),setTimeout(()=>{d.value=null},300)};return(t,n)=>{var b;const g=V("a-row"),M=V("a-typography-paragraph"),p=V("a-card");return e.renderOnSearch?(y(),m("div",pe,[(b=c.value)!=null&&b.primary?(y(),m("div",ye,[(y(!0),m(L,null,A(c.value.primary,(C,f,w)=>P((y(),m("div",{key:w,class:"palette-color"},[l(M,{style:{fontWeight:"bold",color:"inherit"}},{default:u(()=>[O(E(f),1)]),_:2},1024),l(p,{style:H({backgroundColor:C,height:"40px",color:Number(f)<500?"#000000":"#ffffff"}),hoverable:"",size:"small",onClick:T=>_(w,C)},{default:u(()=>[l(g,{justify:"center"},{default:u(()=>[S("span",_e,E(C),1),l(N,{name:"slide-fade"},{default:u(()=>[d.value===w?(y(),m("div",ve,[l(v(Z))])):B("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["style","onClick"])])),[[I,f!=="200"&&f!=="800"&&f!=="500"]])),128))])):B("",!0)])):(y(),j(v(W),{key:0,"max-width":1280},{one:u(()=>{var C;return[S("div",ue,[l(g,{justify:"center"},{default:u(()=>[l(v(X),{"select-all-on-mount":"",value:r.value,"onUpdate:value":n[1]||(n[1]=f=>r.value=f),size:"large",placeholder:t.$t("colorPaletteGenerator.input.placeholder"),"allow-clear":"",style:{width:"60%"}},{addonBefore:u(()=>[v(G)(r.value)?(y(),j(v(D),{key:0,style:{color:"green",fontSize:"20px"}})):(y(),j(v(U),{key:1,style:{color:"red",fontSize:"20px"}}))]),addonAfter:u(()=>[l(g,null,{default:u(()=>[l(v(K),{"pure-color":o.value,"onUpdate:pure-color":n[0]||(n[0]=f=>o.value=f),position:{top:"10px",left:"-270px"},"close-btn-corner":"TOP_LEFT","disable-alpha":""},null,8,["pure-color"])]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),(C=c.value)!=null&&C.primary?(y(),j(p,{key:0,style:{"margin-top":"10px"}},{default:u(()=>[(y(!0),m(L,null,A(c.value.primary,(f,w,T)=>(y(),m("div",{key:T,class:"palette-color"},[l(M,{style:{fontWeight:"bold",color:"inherit"}},{default:u(()=>[O(E(w),1)]),_:2},1024),l(p,{style:H({backgroundColor:f,height:"80px",color:Number(w)<500?"#000000":"#ffffff"}),hoverable:"",onClick:ge=>_(T,f)},{default:u(()=>[l(g,{justify:"center"},{default:u(()=>[S("span",fe,E(f),1),l(N,{name:"slide-fade"},{default:u(()=>[d.value===T?(y(),m("div",he,[l(v(Z))])):B("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["style","onClick"]),l(g,{justify:"center",style:H({color:f})},{default:u(()=>[l(v(de),{height:"80px",width:"80px"})]),_:2},1032,["style"])]))),128))]),_:1})):B("",!0)])]}),_:1}))}}});const xe=J(me,[["__scopeId","data-v-f91507aa"]]);export{xe as default};