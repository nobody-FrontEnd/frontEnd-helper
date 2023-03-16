import{d as h,aa as b,r as C,h as o,o as l,c,w as t,a as e,u,di as S,dj as B,E as m,cm as R,bq as P,cn as w,b as I,j as A,dk as L,cd as V,dl as z,cz as Y,R as f,t as K,_ as M,cg as U,cw as H,dm as O,v as G}from"./index.fa3829f9.js";import{C as v}from"./CodeResult.b2a47f5c.js";import{L as q}from"./layout1.419e9510.js";import{L as N}from"./layout3.7094ea6f.js";import{L as $}from"./layout4.50af5d66.js";import{L as j}from"./layout6.1a679aa9.js";import{C as W}from"./index.be35ea33.js";import{K as Z}from"./KVInput.c1d6798d.js";import{I as J}from"./ImagePicker.155b2969.js";import{_ as Q}from"./Base64ImagePreview.vue_vue_type_script_setup_true_lang.4d656c26.js";import{K as X}from"./KVResult.b778bb44.js";import{M as ee}from"./MultiLineResult.eeac4e9b.js";import{_ as te}from"./QuestionTooltip.vue_vue_type_script_setup_true_lang.208501ee.js";import"./utils.ffc8936d.js";import"./Icon.87d3d941.js";import"./getBase64.b1142636.js";const ue=`
<template>
  <ContentSaverButton :saveText="textInput" :url="urlInput" />
</template>

<script setup lang="ts">
import { ContentSaverButton } from '@/hui';

const textInput = ref('')
const urlInput = ref('')
<\/script>

`,ae=`
<template>
  <TextCopyButton :copyContent="textInput" />
  <!-- \u53EA\u6709\u56FE\u6807 -->
  <TextCopyButton size="small" type="link" title=" " :copyContent="textInput">
    <CopyOutlined />
  </TextCopyButton>
</template>

<script setup lang="ts">
import { TextCopyButton } from '@/hui';

const textInput = ref('')
<\/script>

`,oe=`
<template>
  <FileUploaderButton :handle-file-selected="logFile" />
</template>

<script setup lang="ts">
import { FileUploaderButton } from '@/hui'

const logFile = (file: any) => {
  console.log(file)
}
<\/script>
`,ne=h({__name:"upload",setup(g){const{t:n}=b(),p=C(!1),i=()=>{p.value=!p.value},r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"title",description:"\u6309\u94AE\u6587\u672C",type:"string",default:n("btnWithFun.select")},{key:"2",param:"type",description:"\u6309\u94AE\u989C\u8272",type:"primary | ghost | dashed | link | text | default",default:"primary"},{key:"3",param:"size",description:"\u6309\u94AE\u5927\u5C0F",type:"large | small",default:"normal"},{key:"4",param:"accept",description:"\u9650\u5B9A\u6587\u4EF6\u683C\u5F0F",type:"string",default:""},{key:"5",param:"handleFileSelected",description:"\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6file\u5BF9\u8C61\uFF0C\u82E5\u8FD4\u56DE false \u6216promise.reject()\u5219\u505C\u6B62\u4E0A\u4F20",type:"(file:UploadFile)=>boolean | Promise",default:""}],k=F=>{};return(F,a)=>{const _=o("a-divider"),s=o("a-space"),y=o("a-card"),E=o("a-table");return l(),c(s,{direction:"vertical",size:30},{default:t(()=>[e(y,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(s,{direction:"vertical",size:10},{default:t(()=>[e(u(S),{"handle-file-selected":k}),e(_),e(u(B),{onClick:i}),p.value?(l(),c(u(v),{key:0,code:u(oe),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1})]),_:1}),e(E,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),le=h({__name:"save",setup(g){const{t:n}=b(),p=C(!1),i=()=>{p.value=!p.value},r=C(""),d=C(""),k=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],F=[{key:"1",param:"title",description:"\u6309\u94AE\u6587\u672C",type:"string",default:n("btnWithFun.saveAsFile")},{key:"2",param:"type",description:"\u6309\u94AE\u989C\u8272",type:"primary | ghost | dashed | link | text | default",default:"primary"},{key:"3",param:"size",description:"\u6309\u94AE\u5927\u5C0F",type:"large | small",default:"normal"},{key:"4",param:"saveText",description:"\u9700\u8981\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u5982\u6587\u672C\u56FE\u7247",type:"string",default:""},{key:"5",param:"url",description:"\u6587\u4EF6\u7684url",type:"string",default:""}];return(a,_)=>{const s=o("a-input"),y=o("a-divider"),E=o("a-space"),x=o("a-card"),D=o("a-table");return l(),c(E,{direction:"vertical",size:30},{default:t(()=>[e(x,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(E,{direction:"vertical",size:10},{default:t(()=>[e(s,{value:r.value,"onUpdate:value":_[0]||(_[0]=T=>r.value=T),placeholder:"\u8F93\u5165\u6587\u672C\u5BFC\u51FA\u6587\u4EF6"},null,8,["value"]),e(s,{value:d.value,"onUpdate:value":_[1]||(_[1]=T=>d.value=T),placeholder:"\u8F93\u5165\u6587\u4EF6\u8DEF\u5F84\u5BFC\u51FA\u6587\u4EF6"},null,8,["value"]),e(u(R),{"save-text":r.value,url:d.value},null,8,["save-text","url"]),e(y),e(u(B),{onClick:i}),p.value?(l(),c(u(v),{key:0,code:u(ue),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1})]),_:1}),e(D,{columns:k,"data-source":F,pagination:!1})]),_:1})}}}),ie=h({__name:"textCopy",setup(g){const{t:n}=b(),p=C(""),i=C(!1),r=()=>{i.value=!i.value},d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"title",description:"\u6309\u94AE\u6587\u672C",type:"string",default:n("btnWithFun.copy")},{key:"2",param:"type",description:"\u6309\u94AE\u989C\u8272",type:"primary | ghost | dashed | link | text | default",default:"primary"},{key:"3",param:"size",description:"\u6309\u94AE\u5927\u5C0F",type:"large | small",default:"normal"},{key:"4",param:"copyContent",description:"\u9700\u8981\u590D\u5236\u7684\u5185\u5BB9",type:"string",default:""},{key:"5",param:"successText",description:"\u590D\u5236\u6210\u529F\u7684\u6587\u672C\u4FE1\u606F",type:"string",default:n("common.copySuccess")},{key:"6",param:"@afterCopy",description:"\u590D\u5236\u6210\u529F\u540E\u6267\u884C\u7684\u4E8B\u4EF6",type:"Function",default:""},{key:"7",param:"\u56FE\u6807\u63D2\u69FD",description:"\u4F20\u5165\u9700\u8981\u7684\u56FE\u6807\uFF0C\u5982\u679C\u53EA\u9700\u8981\u5355\u56FE\u6807\uFF0Ctitle\u8F93\u5165\u5355\u7A7A\u683C\u5373\u53EF",type:"slot",default:""}];return(F,a)=>{const _=o("a-input"),s=o("a-divider"),y=o("a-space"),E=o("a-card"),x=o("a-table");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(E,{title:"\u57FA\u672C\u529F\u80FD",placeholder:"\u8F93\u5165\u8981\u590D\u5236\u7684\u6587\u5B57"},{default:t(()=>[e(y,{direction:"vertical",size:10},{default:t(()=>[e(_,{value:p.value,"onUpdate:value":a[0]||(a[0]=D=>p.value=D)},null,8,["value"]),e(u(P),{"copy-content":p.value},null,8,["copy-content"]),e(u(P),{size:"small",type:"link",title:" ","copy-content":p.value},{default:t(()=>[e(u(w))]),_:1},8,["copy-content"]),e(s),e(u(B),{onClick:r}),i.value?(l(),c(u(v),{key:0,code:u(ae),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1})]),_:1}),e(x,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),se=`
<template>
  <Layout1>
    <template #one>
      <div>
        one
      </div>
    </template>
    <template #two>
      <div>two</div>
    </template>
  </Layout1>
</template>

<script lang="ts" setup>
import { Layout1 } from '@/hui'
<\/script>
`,re=`
<template>
  <Layout2>
    <template #one>
      <div>
        one
      </div>
    </template>
    <template #two>
      <div>
        two
      </div>
    </template>
  </Layout2>
</template>

<script lang="ts" setup>
import { Layout2 } from '@/hui'
<\/script >
`,de=`
<template>
  <Layout3 :leftWidth="300">
    <template #one>
      <div>
        one
      </div>
    </template>
    <template #two>
      <div>
        two
      </div>
    </template>
  </Layout3>
</template>

<script lang="ts" setup>
import { Layout3 } from '@/hui'
<\/script>
`,ce=`
<template>
  <Layout4 :rightWidth="300">
    <template #one>
      <div>
        one
      </div>
    </template>
    <template #two>
      <div>
        two
      </div>
    </template>
  </Layout4>
</template>

<script lang="ts" setup>
import { Layout4 } from '@/hui'
<\/script>
`,pe=`
<template>
  <Layout5 :maxWidth="300">
    <template #one>
      <div>
        one
      </div>
    </template>
  </Layout5>
</template>

<script lang="ts" setup>
import { Layout5 } from '@/hui'
<\/script>
`,_e=`
<template>
  <Layout6 :maxWidth="300">
    <template #one>
      <div>
        one
      </div>
    </template>
  </Layout6>
</template>

<script lang="ts" setup>
import { Layout6 } from '@/hui'
<\/script>
`,me=`
<template>
  <Layout7>
    <template #left>
      <div>
        one
      </div>
    </template>
    <template #right>
      <div>
        two
      </div>
    </template>
  </Layout7>
</template>

<script lang="ts" setup>
import { Layout7 } from '@/hui'
<\/script>
`,ye={style:{width:"85vw"}},Fe=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),Ce=A("div",{style:{"background-color":"rgba(16, 142, 233, 1)",height:"400px"}},null,-1),fe=h({__name:"layout1",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",ye,[e(i,{title:"\u5DE6\u53F3\u540450%"},{default:t(()=>[e(u(q),null,{one:t(()=>[Fe]),two:t(()=>[Ce]),_:1})]),_:1}),e(u(v),{code:u(se)},null,8,["code"])])}}}),Ee={style:{width:"85vw"}},ke=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),ge=A("div",{style:{"background-color":"rgba(16, 142, 233, 1)",height:"400px"}},null,-1),ve=h({__name:"layout2",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",Ee,[e(i,{title:"\u4E0A\u9762\u9AD8\u5EA6\u4EFB\u610F\uFF0C\u4E0B\u9762\u5360\u6EE1\u7A7A\u95F4"},{default:t(()=>[e(u(L),null,{one:t(()=>[ke]),two:t(()=>[ge]),_:1})]),_:1}),e(u(v),{code:u(re)},null,8,["code"])])}}}),he={style:{width:"85vw"}},Be=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),Ae=A("div",{style:{"background-color":"rgba(16, 142, 233, 1)",height:"400px"}},null,-1),xe=h({__name:"layout3",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",he,[e(i,{title:"\u5DE6\u4FA7\u56FA\u5B9A\u53F3\u4FA7\u4EFB\u610F\u53CC\u680F\u5E03\u5C40\uFF08\u9ED8\u8BA4300px\uFF09"},{default:t(()=>[e(u(N),null,{one:t(()=>[Be]),two:t(()=>[Ae]),_:1})]),_:1}),e(u(v),{code:u(de)},null,8,["code"])])}}}),Ie={style:{width:"85vw"}},De=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),be=A("div",{style:{"background-color":"rgba(16, 142, 233, 1)",height:"400px"}},null,-1),Te=h({__name:"layout4",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",Ie,[e(i,{title:"\u53F3\u4FA7\u56FA\u5B9A\u5DE6\u4FA7\u4EFB\u610F\u53CC\u680F\u5E03\u5C40\uFF08\u9ED8\u8BA4300px\uFF09"},{default:t(()=>[e(u($),null,{one:t(()=>[De]),two:t(()=>[be]),_:1})]),_:1}),e(u(v),{code:u(ce)},null,8,["code"])])}}}),Pe={style:{width:"85vw"}},Se=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),Re=h({__name:"layout5",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",Pe,[e(i,{title:"\u5C45\u4E2D\u5355\u680F\u5E03\u5C40\uFF08\u9ED8\u8BA4600px\uFF09"},{default:t(()=>[e(u(V),null,{one:t(()=>[Se]),_:1})]),_:1}),e(u(v),{code:u(pe)},null,8,["code"])])}}}),we={style:{width:"85vw"}},Le=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),Ve=h({__name:"layout6",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",we,[e(i,{title:"\u5C45\u5DE6\u5355\u680F\u5E03\u5C40\uFF08\u9ED8\u8BA4600px\uFF09"},{default:t(()=>[e(u(j),null,{one:t(()=>[Le]),_:1})]),_:1}),e(u(v),{code:u(_e)},null,8,["code"])])}}}),ze={style:{width:"85vw"}},Ye=A("div",{style:{"background-color":"#7dbcea",height:"400px"}},null,-1),Ke=A("div",{style:{"background-color":"rgba(16, 142, 233, 1)",height:"400px"}},null,-1),Me=h({__name:"layout7",setup(g){return(n,p)=>{const i=o("a-card");return l(),I("div",ze,[e(i,{title:"\u5DE6\u53F350%\uFF0C\u4E2D\u95F4\u680F\u53EF\u8C03\u8282"},{default:t(()=>[e(u(z),null,{left:t(()=>[Ye]),right:t(()=>[Ke]),_:1})]),_:1}),e(u(v),{code:u(me)},null,8,["code"])])}}}),Ue=`
<CodeEditor
  v-model="textInput"
  current-language="TYPESCRIPT"
  lang="TYPESCRIPT"
  theme="GITHUB_LIGHT"
  class="editor" 
/>

<script setup lang="ts">
import { CodeEditor } from '@/hui'
<\/script>

`,He=`
<template>
  <ColorPicker
    v-model:pure-color="color"
    close-btn-corner="TOP_RIGHT"
  />
</template>

<script setup lang="ts">
import { ColorPicker } from '@/hui'
const color = ref('rgba(0, 0, 0, 1)')
<\/script>
`,Oe=`
<template>
  <KVInput v-model="payload" @change="handleChange" />
</template>

<script setup lang="ts">
import { KVInput } from '@/hui'

const payload = ref('')
function handleChange(obj: Record<string, string>[]) {
  const mergeResult = obj.reduce((total, cur) => {
    if (!cur.key) return total
    return Object.assign(total, { [cur.key]: cur.value })
  }, {})
  payload.value = JSON.stringify(mergeResult, null, 4)
}
<\/script>
`,Ge=`
<template>
  <MultiLineInput v-model="text" autofocus title="\u6807\u9898" />
</template>

<script setup lang="ts">
import { MultiLineInput } from '@/hui'

const text = ref('\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C')
<\/script>
`,qe=`
<template>
  <ImagePicker
    :pick-hook="onPick"
    :on-load-hook="onLoad"
    :reset-hook="onReset"
  />
</template>

<script setup lang="ts">
import { ImagePicker } from '@/hui'

const onPick = async (file: File) => {
  console.log(file)
}

const onLoad = (img: HTMLImageElement) => {
  console.log(img)
}

const onReset = () => {}
<\/script>
`,Ne=h({__name:"codeEditor",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C(""),r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"modelValue",description:"\uFF08v-model\u4F7F\u7528\u5373\u53EF\uFF09\u4EE3\u7801\u7F16\u8F91\u5668\u5185\u5BB9",type:"string",default:""},{key:"2",param:"lang",description:"\u7F16\u7A0B\u8BED\u8A00",type:"CodeEditorLanguagesUnion",default:"JAVASCRIPT"},{key:"3",param:"theme",description:"\u7A97\u53E3\u4E3B\u9898\u8272",type:"CodeEditorThemesUnion",default:""},{key:"4",param:"placeholder",description:"\u8F93\u5165\u7A7A\u65F6\u66FF\u4EE3\u6587\u672C",type:"string",default:""},{key:"5",param:"autofocus",description:"\u81EA\u52A8\u805A\u7126",type:"boolean",default:"true"},{key:"6",param:"disabled",description:"\u662F\u5426\u7981\u7528",type:"boolean",default:"false"},{key:"7",param:"copyable",description:"\u662F\u5426\u53EF\u4EE5\u590D\u5236",type:"boolean",default:"true"},{key:"8",param:"copyBtnPosition",description:"\u590D\u5236\u6309\u94AE\u5B9A\u4F4D",type:`{
      top?: CSSProperties['top']
      right?: CSSProperties['right']
      bottom?: CSSProperties['bottom']
      left?: CSSProperties['left']
    }`,default:""},{key:"9",param:"hiddenGutter",description:"\u8BF4\u660E\u9690\u85CF",type:"boolean",default:"false"}];return(k,F)=>{const a=o("a-divider"),_=o("a-card"),s=o("a-table"),y=o("a-space");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(_,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(Y),{modelValue:i.value,"onUpdate:modelValue":F[0]||(F[0]=E=>i.value=E),"current-language":"TYPESCRIPT",lang:"TYPESCRIPT",theme:"GITHUB_LIGHT",class:"editor"},null,8,["modelValue"]),e(a),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(Ue),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(s,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),$e={style:{width:"20px"}},je=h({__name:"colorPicker",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C("rgba(0, 0, 0, 1)");C("0");const r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"v-model:pureColor",description:"\u9700\u53CC\u5411\u7ED1\u5B9A\u7684\u989C\u8272\u4EE3\u7801\u5B57\u7B26\u4E32",type:"string",default:""},{key:"2",param:"v-model:gradientColor",description:"\u9700\u53CC\u5411\u7ED1\u5B9A\u7684\u6E10\u53D8\u5EA6\u4EE3\u7801\u5B57\u7B26\u4E32",type:"string",default:""},{key:"3",param:"activeKey",description:"\u7ED1\u5B9A\u989C\u8272\u8272\u4EE3\u7801or\u6E10\u53D8\u4EE3\u7801",type:"string",default:"pure"},{key:"4",param:"pickerType",description:"\u9009\u62E9\u53D6\u8272\u677F\u7684\u6A21\u5F0F\uFF0C\u5E73\u6ED1\u79FB\u52A8\u6216\u8005\u5355\u4E2A\u9009\u53D6\uFF0CFK or Chrome",type:"fk | chrome",default:"fk"},{key:"5",param:"useType",description:"\u4F7F\u7528\u6A21\u5F0F",type:"pure | gradient | both",default:"pure"},{key:"6",param:"disableHistory",description:"\u662F\u5426\u7981\u7528\u989C\u8272\u9009\u62E9\u5386\u53F2\u8BB0\u5F55",type:"boolean",default:"false"},{key:"7",param:"roundHistory",description:"\u73AF\u7ED5\u8BB0\u5F55",type:"boolean",default:"false"},{key:"8",param:"disableAlpha",description:"\u662F\u5426\u7981\u7528Alpha\u503C",type:"boolean",default:"false"},{key:"8",param:"closeBtnCorner",description:"\u662F\u5426\u7981\u7528Alpha\u503C",type:"TOP_LEFT | TOP_RIGHT | BOTTOM_LEFT | BOTTOM_RIGHT",default:"TOP_RIGHT"},{key:"10",param:"closeBtnCorner",description:"\u5173\u95ED\u6309\u94AE\u4F4D\u7F6E",type:`{
      top?: CSSProperties['top']
      right?: CSSProperties['right']
      bottom?: CSSProperties['bottom']
      left?: CSSProperties['left']
    }`,default:""}];return(k,F)=>{const a=o("a-divider"),_=o("a-card"),s=o("a-table"),y=o("a-space");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(_,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[A("div",$e,[e(u(W),{"pure-color":i.value,"onUpdate:pure-color":F[0]||(F[0]=E=>i.value=E),"is-widget":!0},null,8,["pure-color"])]),f(" "+K(i.value)+" ",1),e(a),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(He),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(s,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),We=h({__name:"KVInput",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C("");function r(F){const a=F.reduce((_,s)=>s.key?Object.assign(_,{[s.key]:s.value}):_,{});i.value=JSON.stringify(a,null,4)}const d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"@change",description:"\u4E8B\u4EF6\uFF0C\u5F53\u8F93\u5165\u6846\u5185\u5BB9\u6539\u53D8\u65F6\u6267\u884C",type:"(obj:Object) => Object",default:""}];return(F,a)=>{const _=o("a-divider"),s=o("a-card"),y=o("a-table"),E=o("a-space");return l(),c(E,{direction:"vertical",size:30},{default:t(()=>[e(s,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(Z),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=x=>i.value=x),onChange:r},null,8,["modelValue"]),e(_),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(Oe),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(y,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),Ze={},Je=f(" \u8BE5\u7EC4\u4EF6\u7528\u4E8EJSON\u8F6Cyaml\u4E0Eyaml\u8F6CJSON\u7684\u5408\u5E76\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u79FB\u6B65\u81F3\u76F8\u5173\u6E90\u7801\u53C2\u9605 ");function Qe(g,n){const p=o("a-card"),i=o("a-space");return l(),c(i,{direction:"vertical",size:30},{default:t(()=>[e(p,{title:""},{default:t(()=>[Je]),_:1})]),_:1})}const Xe=M(Ze,[["render",Qe]]),et=h({__name:"multilineInput",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C(""),r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"title",description:"\u6807\u9898",type:"string",default:"Input content:"},{key:"2",param:"code",description:"\u662F\u5426\u4EE3\u7801\u7F16\u8F91\u5668\u6A21\u5F0F",type:"boolean",default:""},{key:"3",param:"lang",description:"\u7F16\u7A0B\u8BED\u8A00",type:"CodeEditorLanguagesUnion",default:""},{key:"4",param:"modelValue",description:"\uFF08v-model\u4F7F\u7528\u5373\u53EF\uFF09\u53CC\u5411\u7ED1\u5B9A\u7684\u6587\u672C\u5185\u5BB9",type:"string",default:""},{key:"5",param:"autoFocus",description:"\u81EA\u52A8\u805A\u7126",type:"boolean",default:"false"},{key:"6",param:"placeholder",description:"\u7A7A\u5360\u4F4D\u6587\u5B57",type:"string",default:""},{key:"7",param:"select",description:"\u81EA\u52A8\u5168\u9009",type:"boolean",default:"false"}];return(k,F)=>{const a=o("a-divider"),_=o("a-card"),s=o("a-table"),y=o("a-space");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(_,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(U),{modelValue:i.value,"onUpdate:modelValue":F[0]||(F[0]=E=>i.value=E),autofocus:"",title:"\u6807\u9898",placeholder:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C"},null,8,["modelValue"]),e(a),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(Ge),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(s,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),tt=h({__name:"imagePicker",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=async a=>{},r=a=>{},d=()=>{},k=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],F=[{key:"1",param:"width",description:"\u5BB9\u5668\u5BB9\u5668\u5BBD\u5EA6",type:"string",default:"100%"},{key:"2",param:"height",description:"\u5BB9\u5668\u9AD8\u5EA6",type:"string",default:"100%"},{key:"3",param:"imageHeight",description:"\u56FE\u7247\u663E\u793A\u9AD8\u5EA6\uFF08\u8FD9\u91CC\u5982\u679C\u9700\u8981\u7F29\u653E\u529F\u80FD\u6700\u597D\u7528vh\u505A\u5355\u4F4D\uFF09",type:"string",default:"78vh"},{key:"4",param:"pickHook",description:"\u9009\u62E9\u56FE\u7247\u65F6\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6\u5BF9\u8C61\uFF0C\u4E3B\u65B9\u6CD5\u662F\u8C03\u7528antd\u7684beforeUpload",type:"(file: FileType) => void",default:"() => {}"},{key:"5",param:"onLoadHook",description:"\u56FE\u7247\u6302\u8F7D\u5B8C\u6BD5\u65F6\u7684\u94A9\u5B50\uFF0C\u8FD9\u91CC\u7684\u4E00\u4E2A\u53C2\u6570\u4E3A\u56FE\u7247\u7684dom\u5C5E\u6027",type:"(imgEle: HTMLImageElement) => void",default:"() => {}"},{key:"6",param:"resetHook",description:"\u91CD\u7F6E\u56FE\u7247\u65F6\u7684\u94A9\u5B50",type:"() => void",default:"() => {}"}];return(a,_)=>{const s=o("a-divider"),y=o("a-card"),E=o("a-table"),x=o("a-space");return l(),c(x,{direction:"vertical",size:30},{default:t(()=>[e(y,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(J),{"pick-hook":i,"on-load-hook":r,"reset-hook":d}),e(s),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(qe),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(E,{columns:k,"data-source":F,pagination:!1})]),_:1})}}}),ut=`
<template>
  <Base64ImagePreview :data="inputText" :mime="mime" />
</template>

<script setup lang="ts">
import { Base64ImagePreview } from "@/hui";

const inputText = ref('')
const mime = ref('')
<\/script>
`,at=`

<template>
  <CodeResult :code="textInput" lang="TYPESCRIPT" />
</template>

<script setup lang="ts">
import { CodeResult } from '@/hui'

const textInput = ref('\u8FD9\u662F\u4E00\u6BB5\u53EF\u4EE5\u590D\u5236\u7684\u4EE3\u7801\u7247\u6BB5')
<\/script>
`,ot=`
<template>
  <KVResult :result="outputValue" :model-switch="true" />
</template>

<script setup lang="ts">
import { KVResult } from '@/hui'

const outputValue = ref({})
<\/script>
`,nt=`
<template>
  <MultiLineResult :result="multiText" result-desc="" />
</template>

<script setup lang="ts">
import { MultiLineResult } from '@/hui'

const multiText = ref('')
<\/script>
`,lt=`
<template>
  <QuestionTooltip tooltip="\u63D0\u793A\u4FE1\u606F" placement="left" />
</template>

<script setup lang="ts">
import { QuestionTooltip } from '@/hui'
<\/script>
`,it=`
<template>
  <SingleLineResult :result="text" result-desc="" />
</template>

<script setup lang="ts">
import { SingleLineResult } from '@/hui'

const text = ref('')
<\/script>
`,st=`
<template>
  <Transform @change="handleChange" @mounted="handleMounted" />
</template>

<script setup lang="ts">
import { Transform } from '@/hui'
import { Ref } from 'vue';

const handleChange = (inputValue: Ref<string>) => {
  // do something
  return ''
}

const handleMounted = (inputValue: Ref<string>) => {
  // Mounted hook
}
<\/script>
`,rt="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",dt=h({__name:"codeResult",setup(g){const{t:n}=b(),p=C("\u8FD9\u662F\u4E00\u6BB5\u53EF\u4EE5\u590D\u5236\u7684\u4EE3\u7801\u7247\u6BB5"),i=C(!1),r=()=>{i.value=!i.value},d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"title",description:"\u5C55\u793A\u4E00\u6BB5\u6587\u672C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u590D\u5236icon\u590D\u5236",type:"string",default:n("btnWithFun.copy")}];return(F,a)=>{const _=o("a-divider"),s=o("a-card"),y=o("a-table"),E=o("a-space");return l(),c(E,{direction:"vertical",size:30},{default:t(()=>[e(s,{title:"\u57FA\u672C\u529F\u80FD",placeholder:"\u8F93\u5165\u8981\u590D\u5236\u7684\u6587\u5B57"},{default:t(()=>[e(u(v),{code:p.value,lang:"TYPESCRIPT"},null,8,["code"]),e(_),e(u(B),{onClick:r}),i.value?(l(),c(u(v),{key:0,code:u(at),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(y,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),ct=h({__name:"base64ImagePreview",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C(rt),r=C("image/png"),d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"data",description:"\u56FE\u7247base64\u6570\u636E\uFF08\u975Eurl\uFF09\uFF0C\u4F20\u5165[data:image/png;base64,]\u540E\u90E8\u5206",type:"string",default:""},{key:"2",param:"mine",description:"\u56FE\u7247\u683C\u5F0F\u6821\u9A8C\uFF0C\u9009\u62E9\u9700\u4F20\u5165\u56FE\u7247\u65F6\u52A8\u6001\u4FEE\u6539\u8BE5\u53C2\u6570",type:"string",default:""}];return(F,a)=>{const _=o("a-input"),s=o("a-divider"),y=o("a-card"),E=o("a-table"),x=o("a-space");return l(),c(x,{direction:"vertical",size:30},{default:t(()=>[e(y,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(_,{value:i.value,"onUpdate:value":a[0]||(a[0]=D=>i.value=D),style:{"margin-bottom":"10px"}},null,8,["value"]),e(u(Q),{data:i.value,mime:r.value},null,8,["data","mime"]),e(s),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(ut),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(E,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),pt=h({__name:"KVresult",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C({key:"value"}),r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"result",description:"\u4F20\u5165\u9700\u8981\u5C55\u793A\u7684\u952E\u503C\u5BF9",type:"Object",default:"{}"},{key:"2",param:"width",description:"List \u6A21\u5F0F\u4E0B\u5355\u4E2A\u8F93\u51FA\u6846\u6700\u5C0F\u503C",type:"String",default:"300"},{key:"3",param:"model",description:"\u9ED8\u8BA4\u5C55\u793A\u5F62\u5F0F",type:"'list' | 'json'",default:"'list'"},{key:"4",param:"modelSwitch",description:"\u5207\u6362\u6309\u94AE\u662F\u5426\u5C55\u793A",type:"Boolean",default:"false"}];return(k,F)=>{const a=o("a-divider"),_=o("a-card"),s=o("a-table"),y=o("a-space");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(_,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(X),{result:i.value,"model-switch":!0},null,8,["result"]),e(a),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(ot),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(s,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),_t=h({__name:"multilineResult",setup(g){const n=C(!1),p=()=>{n.value=!n.value},r=C(`\u591A\u884C\u6587\u672C
\u591A\u884C\u6587\u672C`),d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"result",description:"\u5185\u5BB9",type:"string",default:""},{key:"2",param:"resultDesc",description:"\u63CF\u8FF0\u5185\u5BB9",type:"string",default:""}];return(F,a)=>{const _=o("a-divider"),s=o("a-card"),y=o("a-table"),E=o("a-space");return l(),c(E,{direction:"vertical",size:30},{default:t(()=>[e(s,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(ee),{result:r.value,"result-desc":"\u63CF\u8FF0\u5185\u5BB9"},null,8,["result"]),e(_),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(nt),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(y,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),mt={style:{width:"20px"}},yt=h({__name:"questionToolTips",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],r=[{key:"1",param:"tooltip",description:"\u9700\u8981\u63D0\u793A\u7684\u5185\u5BB9",type:"string",default:""},{key:"2",param:"placement",description:"\u63D0\u793A\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E",type:"TooltipProps['placement']",default:""}];return(d,k)=>{const F=o("a-divider"),a=o("a-card"),_=o("a-table"),s=o("a-space");return l(),c(s,{direction:"vertical",size:30},{default:t(()=>[e(a,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[A("div",mt,[e(u(te),{tooltip:"\u63D0\u793A\u4FE1\u606F",placement:"right"})]),e(F),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(lt),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(_,{columns:i,"data-source":r,pagination:!1})]),_:1})}}}),Ft=h({__name:"singlelineResult",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=C("\u5355\u884C\u6587\u672C"),r=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],d=[{key:"1",param:"result",description:"\u5185\u5BB9",type:"string",default:""},{key:"2",param:"resultDesc",description:"\u63CF\u8FF0\u5185\u5BB9",type:"string",default:""}];return(k,F)=>{const a=o("a-divider"),_=o("a-card"),s=o("a-table"),y=o("a-space");return l(),c(y,{direction:"vertical",size:30},{default:t(()=>[e(_,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(H),{result:i.value,"result-desc":"\u5355\u884C\u6587\u672C\u63CF\u8FF0"},null,8,["result"]),e(a),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(it),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(s,{columns:r,"data-source":d,pagination:!1})]),_:1})}}}),Ct=h({__name:"transform",setup(g){const n=C(!1),p=()=>{n.value=!n.value},i=F=>"",r=F=>{},d=[{title:"\u53C2\u6570",dataIndex:"param",key:"param"},{title:"\u8BF4\u660E",dataIndex:"description",key:"description"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default",dataIndex:"default"}],k=[{key:"1",param:"leftConfiger",description:"\u5DE6\u4FA7\u914D\u7F6E",type:"Configer",default:`{
      placeholder: '',
      leftTitle: 'Input',
      isTitleShow: true,
    }`},{key:"2",param:"rightConfiger",description:"\u53F3\u4FA7\u914D\u7F6E",type:"Configer",default:`{
      placeholder: '',
      rightTitle: 'Output',
      isTitleShow: true,
    }`},{key:"3",param:"canChooseFile",description:"\u662F\u5426\u652F\u6301\u6587\u4EF6\u9009\u62E9",type:"boolean",default:"true"},{key:"4",param:"@onChange",description:"\u8F6C\u6362\u7684\u65B9\u6CD5\uFF0C\u5F53\u6587\u672C\u53D8\u5316\u65F6\u5C06\u5DE6\u8FB9\u7684\u6587\u672C\u81EA\u52A8\u8F6C\u6362\u5C55\u793A\u5728\u53F3\u8FB9\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A\u5F53\u524D\u6587\u672C\u5185\u5BB9\uFF0C\u5904\u7406\u540E\u8FD4\u56DE",type:"(inputValue: Ref<string>) => string",default:""},{key:"3",param:"@onMounted",description:"\u9875\u9762\u6302\u8F7D\u65F6\u6267\u884C\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u5DE6\u53F3\u4E24\u8FB9\u5C55\u793A\u7684\u5185\u5BB9",type:"(inputValue: Ref<string>, outputValue: Ref<string>) => void",default:""}];return(F,a)=>{const _=o("a-divider"),s=o("a-card"),y=o("a-table"),E=o("a-space");return l(),c(E,{direction:"vertical",size:30},{default:t(()=>[e(s,{title:"\u57FA\u672C\u529F\u80FD"},{default:t(()=>[e(u(O),{onChange:i,onMounted:r}),e(_),e(u(B),{onClick:p}),n.value?(l(),c(u(v),{key:0,code:u(st),lang:"TYPESCRIPT"},null,8,["code"])):m("",!0)]),_:1}),e(y,{columns:d,"data-source":k,pagination:!1})]),_:1})}}}),ft={class:"index",style:{padding:"20px"}},Et=f("\u5E03\u5C40"),kt=f("\u5E03\u5C401"),gt=f("\u5E03\u5C402"),vt=f("\u5E03\u5C403"),ht=f("\u5E03\u5C404"),Bt=f("\u5E03\u5C405"),At=f("\u5E03\u5C406"),xt=f("\u5E03\u5C407"),It=f("\u6309\u94AE"),Dt=f("\u4E0A\u4F20\u6587\u4EF6"),bt=f("\u4FDD\u5B58\u6587\u4EF6"),Tt=f("\u590D\u5236\u6587\u672C"),Pt=f("\u6570\u636E\u8F93\u5165"),St=f("\u4EE3\u7801\u7F16\u8F91\u5668"),Rt=f("\u989C\u8272\u63D0\u53D6\u5668"),wt=f("\u952E\u503C\u5BF9\u7F16\u8F91\u5668"),Lt=f("\u5408\u5E76\u7F16\u8F91\u5668"),Vt=f("\u591A\u884C\u8F93\u5165\u6846"),zt=f("\u56FE\u7247\u9009\u62E9\u6846"),Yt=f("\u6570\u636E\u5C55\u793A"),Kt=f("\u53EF\u590D\u5236\u4EE3\u7801\u7A97"),Mt=f("base64\u56FE\u7247\u9884\u89C8"),Ut=f("\u952E\u503C\u5BF9\u7ED3\u679C\u8F93\u51FA"),Ht=f("\u591A\u884C\u6587\u672C"),Ot=f("\u95EE\u53F7hover\u63D0\u793A"),Gt=f("\u5355\u884C\u6587\u672C"),qt=f("\u683C\u5F0F\u8F6C\u6362\u7A97"),su=h({__name:"index",setup(g){let n="";const p={uploadButton:"\u4E0A\u4F20\u6587\u4EF6",saveButton:"\u4FDD\u5B58\u6587\u4EF6",textCopy:"\u590D\u5236\u6587\u672C",layout1:"\u5E03\u5C401",layout2:"\u5E03\u5C402",layout3:"\u5E03\u5C403",layout4:"\u5E03\u5C404",layout5:"\u5E03\u5C405",layout6:"\u5E03\u5C406",layout7:"\u5E03\u5C407",codeEditor:"\u4EE3\u7801\u7F16\u8F91\u5668",colorPicker:"\u989C\u8272\u63D0\u53D6\u5668",KVInput:"\u952E\u503C\u5BF9\u7F16\u8F91\u5668",mergeInput:"\u5408\u5E76\u7F16\u8F91\u5668",multilineInput:"\u591A\u884C\u8F93\u5165\u6846",imagePicker:"\u56FE\u7247\u9009\u62E9\u6846",codeResult:"\u53EF\u590D\u5236\u4EE3\u7801\u7A97",base64ImagePreview:"base64\u56FE\u7247\u9884\u89C8",KVresult:"\u952E\u503C\u5BF9\u7ED3\u679C\u8F93\u51FA",multilineResult:"\u591A\u884C\u6587\u672C",questionToolTips:"\u95EE\u53F7hover\u63D0\u793A",singleLineResult:"\u5355\u884C\u6587\u672C",transform:"\u683C\u5F0F\u8F6C\u6362\u7A97"},i=C(!1),r=G({saveButton:!1,uploadButton:!1,textCopy:!1,layout1:!1,layout2:!1,layout3:!1,layout4:!1,layout5:!1,layout6:!1,layout7:!1,codeEditor:!1,colorPicker:!1,KVInput:!1,mergeInput:!1,multilineInput:!1,imagePicker:!1,codeResult:!1,base64ImagePreview:!1,KVresult:!1,multilineResult:!1,questionToolTips:!1,singleLineResult:!1,transform:!1}),d=F=>{n=F,i.value=!0,r[F]=!0},k=()=>{i.value=!1,r[n]=!1};return(F,a)=>{const _=o("a-divider"),s=o("a-button"),y=o("a-space"),E=o("a-modal");return l(),I("div",ft,[e(_,null,{default:t(()=>[Et]),_:1}),e(y,null,{default:t(()=>[e(s,{onClick:a[0]||(a[0]=()=>d("layout1"))},{default:t(()=>[kt]),_:1}),e(s,{onClick:a[1]||(a[1]=()=>d("layout2"))},{default:t(()=>[gt]),_:1}),e(s,{onClick:a[2]||(a[2]=()=>d("layout3"))},{default:t(()=>[vt]),_:1}),e(s,{onClick:a[3]||(a[3]=()=>d("layout4"))},{default:t(()=>[ht]),_:1}),e(s,{onClick:a[4]||(a[4]=()=>d("layout5"))},{default:t(()=>[Bt]),_:1}),e(s,{onClick:a[5]||(a[5]=()=>d("layout6"))},{default:t(()=>[At]),_:1}),e(s,{onClick:a[6]||(a[6]=()=>d("layout7"))},{default:t(()=>[xt]),_:1})]),_:1}),e(_,null,{default:t(()=>[It]),_:1}),e(y,null,{default:t(()=>[e(s,{onClick:a[7]||(a[7]=()=>d("uploadButton"))},{default:t(()=>[Dt]),_:1}),e(s,{onClick:a[8]||(a[8]=()=>d("saveButton"))},{default:t(()=>[bt]),_:1}),e(s,{onClick:a[9]||(a[9]=()=>d("textCopy"))},{default:t(()=>[Tt]),_:1})]),_:1}),e(_,null,{default:t(()=>[Pt]),_:1}),e(y,null,{default:t(()=>[e(s,{onClick:a[10]||(a[10]=()=>d("codeEditor"))},{default:t(()=>[St]),_:1}),e(s,{onClick:a[11]||(a[11]=()=>d("colorPicker"))},{default:t(()=>[Rt]),_:1}),e(s,{onClick:a[12]||(a[12]=()=>d("KVInput"))},{default:t(()=>[wt]),_:1}),e(s,{onClick:a[13]||(a[13]=()=>d("mergeInput"))},{default:t(()=>[Lt]),_:1}),e(s,{onClick:a[14]||(a[14]=()=>d("multilineInput"))},{default:t(()=>[Vt]),_:1}),e(s,{onClick:a[15]||(a[15]=()=>d("imagePicker"))},{default:t(()=>[zt]),_:1})]),_:1}),e(_,null,{default:t(()=>[Yt]),_:1}),e(y,null,{default:t(()=>[e(s,{onClick:a[16]||(a[16]=()=>d("codeResult"))},{default:t(()=>[Kt]),_:1}),e(s,{onClick:a[17]||(a[17]=()=>d("base64ImagePreview"))},{default:t(()=>[Mt]),_:1}),e(s,{onClick:a[18]||(a[18]=()=>d("KVresult"))},{default:t(()=>[Ut]),_:1}),e(s,{onClick:a[19]||(a[19]=()=>d("multilineResult"))},{default:t(()=>[Ht]),_:1}),e(s,{onClick:a[20]||(a[20]=()=>d("questionToolTips"))},{default:t(()=>[Ot]),_:1}),e(s,{onClick:a[21]||(a[21]=()=>d("singleLineResult"))},{default:t(()=>[Gt]),_:1}),e(s,{onClick:a[22]||(a[22]=()=>d("transform"))},{default:t(()=>[qt]),_:1})]),_:1}),e(E,{visible:i.value,"onUpdate:visible":a[23]||(a[23]=x=>i.value=x),title:p[u(n)],width:"auto",centered:!0,footer:null,onCancel:k},{default:t(()=>[r.layout1?(l(),c(fe,{key:0})):m("",!0),r.layout2?(l(),c(ve,{key:1})):m("",!0),r.layout3?(l(),c(xe,{key:2})):m("",!0),r.layout4?(l(),c(Te,{key:3})):m("",!0),r.layout5?(l(),c(Re,{key:4})):m("",!0),r.layout6?(l(),c(Ve,{key:5})):m("",!0),r.layout7?(l(),c(Me,{key:6})):m("",!0),r.uploadButton?(l(),c(ne,{key:7})):m("",!0),r.saveButton?(l(),c(le,{key:8})):m("",!0),r.textCopy?(l(),c(ie,{key:9})):m("",!0),r.codeEditor?(l(),c(Ne,{key:10})):m("",!0),r.colorPicker?(l(),c(je,{key:11})):m("",!0),r.KVInput?(l(),c(We,{key:12})):m("",!0),r.mergeInput?(l(),c(Xe,{key:13})):m("",!0),r.multilineInput?(l(),c(et,{key:14})):m("",!0),r.imagePicker?(l(),c(tt,{key:15})):m("",!0),r.codeResult?(l(),c(dt,{key:16})):m("",!0),r.base64ImagePreview?(l(),c(ct,{key:17})):m("",!0),r.KVresult?(l(),c(pt,{key:18})):m("",!0),r.multilineResult?(l(),c(_t,{key:19})):m("",!0),r.questionToolTips?(l(),c(yt,{key:20})):m("",!0),r.singleLineResult?(l(),c(Ft,{key:21})):m("",!0),r.transform?(l(),c(Ct,{key:22})):m("",!0)]),_:1},8,["visible","title"])])}}});export{su as default};
