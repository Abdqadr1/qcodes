import{i as t,J as u,ag as r,j as d,ah as o,a7 as c,a8 as l,a9 as m,c as i,X as b,ai as h}from"./EditorStyle-03e04933.js";import"./axios-1fc8c87e.js";function g(){var s;const e=window==null?void 0:window.article;return t(u,{children:t(r,{className:"mx-0 justify-content-center mt-5",children:d(o,{sm:10,className:"px-1",children:[d("div",{className:"title mb-5",children:[t("h1",{className:"title mb-5",children:(e==null?void 0:e.title)??""}),d("div",{className:"mb-3",children:["Last Modified: ",new Date(e==null?void 0:e.updated_at).toDateString()]}),d("div",{className:"border-start border-secondary d-flex p-2 border-3 justify-content-md-between align-items-md-center flex-column flex-md-row",children:[d("span",{children:["by ",t("em",{className:"text-success",children:`${e==null?void 0:e.author.first_name} ${(s=e==null?void 0:e.author)==null?void 0:s.last_name}`})]}),t("div",{className:"mt-3 mt-md-0",children:e==null?void 0:e.tags.map(n=>t("a",{href:`/tags/${n.slug}`,className:"btn btn-secondary text-light fw-bold rounded-0",children:n.name},n.id))})]})]}),t("hr",{}),t(c.CKEditor,{config:{style:l},editor:m,data:e.content??"",disabled:!0,onReady:n=>{n.editing.view.change(a=>{a.setStyle("height","auto",n.editing.view.document.getRoot())})}})]})})})}i.forwardRef(function(s,n){return t(b,{elevation:6,ref:n,variant:"filled",...s})});const f=({})=>{var s;const e=window==null?void 0:window.article;return d("div",{className:"body",children:[t("p",{className:"preview",children:"Preview"}),t(r,{className:"mx-0",children:d(o,{sm:12,className:"py-3 px-5",children:[t("div",{className:"blog-banner"}),d("div",{className:"title mb-5",children:[t("h1",{className:"title mb-5",children:(e==null?void 0:e.title)??""}),d("div",{className:"mb-3",children:["Last Modified: ",new Date(e==null?void 0:e.updated_at).toDateString()]}),d("div",{className:"border-start border-secondary d-flex p-2 border-3 justify-content-between align-items-center",children:[d("span",{children:["by ",t("em",{className:"text-success",children:`${e==null?void 0:e.author.first_name} ${(s=e==null?void 0:e.author)==null?void 0:s.last_name}`})]}),t("div",{children:e==null?void 0:e.tags.map(n=>t("a",{href:`/tags/${n.slug}`,className:"btn btn-success text-light fw-bold",children:n.name},n.id))})]})]}),t("hr",{}),t(c.CKEditor,{config:{style:l},editor:m,data:(e==null?void 0:e.content)??"",disabled:!0,onReady:n=>{n.editing.view.change(a=>{a.setStyle("height","auto",n.editing.view.document.getRoot())})}})]})})]})};document.getElementById("preview")&&h.createRoot(document.getElementById("preview")).render(t(i.StrictMode,{children:t(f,{})}));document.getElementById("view")&&h.createRoot(document.getElementById("view")).render(t(i.StrictMode,{children:t(g,{})}));