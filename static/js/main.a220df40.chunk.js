(this["webpackJsonptodolist-reactjs"]=this["webpackJsonptodolist-reactjs"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(16),s=n.n(l),i=n(8),r=n(6),o=n(3),d=n(2),j=n(34),b=n(12),m=n.n(b),h=n(1);function u(e){return Object(h.jsx)("div",{className:"col-xs-5 col-sm-5 col-md-5 col-lg-5",children:e.toggle?Object(h.jsx)("button",{type:"button",className:"btn btn-dark btn-block marginB11",onClick:e.showToggle,children:"Close Form"}):Object(h.jsx)("button",{type:"button",className:"btn btn-info btn-block marginB11",onClick:e.showToggle,children:"Add Item"})})}var O=[{id:Object(j.a)(),Taskname:"T\xecm th\u1ea5y m\u1ea3nh v\u1ee1 m\xe1y bay r\u01a1i \u1edf Iran l\xe0m 66 ng\u01b0\u1eddi ch\u1ebft",level:"2"},{id:Object(j.a)(),Taskname:"Kh\xf4ng c\xf2n tranh c\u01b0\u1edbp l\u1ed9c hoa tre \u1edf l\u1ec5 h\u1ed9i \u0111\u1ec1n Gi\xf3ng 2018",level:"0"},{id:Object(j.a)(),Taskname:"H\u01a1n 37.000 ng\u01b0\u1eddi nh\u1eadp vi\u1ec7n v\xec tai n\u1ea1n giao th\xf4ng, \u0111\u1ed1t ph\xe1o",level:"1"},{id:Object(j.a)(),Taskname:"G\u1ea7n 200 ng\u01b0\u1eddi ch\u1ebft v\xec tai n\u1ea1n giao th\xf4ng 7 ng\xe0y ngh\u1ec9 T\u1ebft",level:"1"},{id:Object(j.a)(),Taskname:"VFF gi\u1ea3i ng\xe2n 15 t\u1ef7 \u0111\u1ed3ng, ti\u1ec1n th\u01b0\u1edfng t\u1edbi tay U23 VN tr\u01b0\u1edbc T\u1ebft",level:"2"},{id:Object(j.a)(),Taskname:"F1 mu\u1ed1n t\u1ed5 ch\u1ee9c gi\u1ea3i \u0111ua xe t\u1ea1i Vi\u1ec7t Nam v\xe0o n\u0103m 2020",level:"2"}];function x(e){return Object(h.jsx)(h.Fragment,{children:e.toggle?Object(h.jsx)("div",{className:"row marginB10 ",children:Object(h.jsx)("div",{className:"col-md-offset-6 col-md-6 ",style:{padding:"0%"},children:Object(h.jsxs)("form",{className:"form-inline display1",id:"create-form",onSubmit:e.onhandleSubmit,children:[Object(h.jsx)("div",{className:"form-group",style:{width:"50%"},children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"id-name",placeholder:"Item Name",name:"Taskname",value:e.fields.Taskname,onChange:e.onhandleChange})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("select",{className:"form-control",name:"level",value:e.fields.level,onChange:e.onhandleChange,children:[Object(h.jsx)("option",{value:0,children:"Small"}),Object(h.jsx)("option",{value:1,children:"Medium"}),Object(h.jsx)("option",{value:2,children:"High"})]})}),Object(h.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Submit"}),Object(h.jsx)("input",{type:"button",className:"btn btn-secondary",value:"Cancel",onClick:e.cancelForm})]})})}):Object(h.jsx)("div",{className:"row marginB10"})})}function g(e){return Object(h.jsx)(h.Fragment,{children:e.toggleEdit?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"text-center",children:e.index}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",className:"form-control",defaultValue:e.item.Taskname,name:"Taskname",onChange:e.onChangeSelected})}),Object(h.jsx)("td",{className:"text-center",children:Object(h.jsxs)("select",{className:"form-control",name:"level",defaultValue:e.item.level,onChange:e.onChangeSelected,children:[Object(h.jsx)("option",{value:"0",children:"Small"}),Object(h.jsx)("option",{value:"1",children:"Medium"}),Object(h.jsx)("option",{value:"2",children:"High"})]})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-link btn-sm",onClick:e.handleEdit,children:"Cancel"}),Object(h.jsx)("button",{type:"button",className:"btn btn-success btn-sm",onClick:e.handleSave,onBlur:e.handleEdit,children:"Save"})]})]}):Object(h.jsx)(h.Fragment,{})})}function v(e){var t={item:e.item},n=Object(c.useState)(!1),a=Object(d.a)(n,2),l=a[0],s=a[1],i=function(){e.actionTaskSelected(t),s(!l)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"text-center",children:e.index}),Object(h.jsx)("td",{children:e.item.Taskname}),Object(h.jsx)("td",{className:"text-center",children:"0"===e.item.level?Object(h.jsx)("span",{className:"label_1 success",children:"Small"}):"1"===e.item.level?Object(h.jsx)("span",{className:"label_1 warning",children:"Medium"}):Object(h.jsx)("span",{className:"label_1 danger",children:"High"})}),Object(h.jsxs)("td",{className:"button-item",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-warning btn-sm",onClick:function(){return i()},children:"Edit"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(n){return e.handleDelete(t)},children:"Delete"})]})]}),Object(h.jsx)(g,{handleEdit:i,toggleEdit:l,index:e.index,item:e.item,handleSave:e.handleSave,onChangeSelected:e.onChangeSelected})]})}function p(e){return Object(h.jsxs)("div",{className:"panel panel-success ",children:[Object(h.jsx)("div",{className:"panel-heading card-header",children:"List Item"}),Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"10%"},className:"text-center",children:"#"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{style:{width:"15%"},className:"text-center",children:"Level"}),Object(h.jsx)("th",{style:{width:"15%"},children:"Action"})]})}),Object(h.jsx)("tbody",{children:0!==e.listTask.length?e.listTask.map((function(t,n){return Object(h.jsx)(v,{item:t,index:n,handleSave:e.handleSave,actionTaskSelected:e.actionTaskSelected,handleDelete:e.handleDelete,onChangeSelected:e.onChangeSelected},n)})):Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"4",children:Object(h.jsx)("h3",{children:"List Empty"})})})})]})]})}function f(e){return Object(h.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search item name",id:"input-search",onChange:e.actionSearch}),Object(h.jsx)("span",{className:"input-group-btn",children:Object(h.jsx)("button",{className:"btn btn-info",type:"button",style:{color:"white"},onClick:e.handleClear,children:"Clear!"})})]})})}var N=n(5);function k(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(N.a,{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3",style:{display:"flex"},children:[Object(h.jsx)(N.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Sort by"}),Object(h.jsxs)(N.a.Menu,{children:[Object(h.jsx)(N.a.Item,{onClick:function(t,n){return e.handleChangeSort("name","asc")},children:"Name ASC"}),Object(h.jsx)(N.a.Item,{onClick:function(t,n){return e.handleChangeSort("name","desc")},children:"Name DESC"}),Object(h.jsx)(N.a.Divider,{}),Object(h.jsx)(N.a.Item,{onClick:function(t,n){return e.handleChangeSort("level","asc")},children:"Level ASC"}),Object(h.jsx)(N.a.Item,{onClick:function(t,n){return e.handleChangeSort("level","desc")},children:"Level DESC"})]}),Object(h.jsx)("div",{className:"sort-by",children:Object(h.jsxs)("span",{className:"label label-success label-medium",children:[e.compare.title," - ",e.compare.level]})})]})})}function S(){return Object(h.jsx)("div",{className:"page-header",style:{borderBottom:"1px solid #eee",marginBottom:"20px"},children:Object(h.jsxs)("h1",{children:["Project 01 - ToDo List ",Object(h.jsx)("small",{children:"ReactJS"})]})})}var C=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)({id:Object(j.a)(),Taskname:"",level:"0"}),s=Object(d.a)(l,2),b=s[0],g=s[1],v=Object(c.useState)(O),N=Object(d.a)(v,2),C=N[0],T=N[1],y=Object(c.useState)(O),w=Object(d.a)(y,2),E=w[0],I=w[1],F=Object(c.useState)({id:Object(j.a)(),Taskname:"",level:"0"}),B=Object(d.a)(F,2),D=B[0],L=B[1],M=Object(c.useState)({title:"name",level:"asc"}),V=Object(d.a)(M,2),A=V[0],H=V[1],J=function(){a(!n)};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(S,{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(f,{actionSearch:function(e){var t=e.target.value,n=new RegExp(t,"i");T(E.filter((function(e){return e.Taskname.match(n)})))},handleClear:function(){document.getElementById("input-search").value="",T(E)}}),Object(h.jsx)(k,{compare:A,handleChangeSort:function(e,t){H({title:e,level:t}),"name"===e?("asc"===t&&T(C.sort((function(e,t){return e.Taskname>t.Taskname?1:-1}))),"desc"===t&&T(C.sort((function(e,t){return e.Taskname<t.Taskname?1:-1})))):("asc"===t&&T(C.sort((function(e,t){return e.level>t.level?1:-1}))),"desc"===t&&T(C.sort((function(e,t){return e.level<t.level?1:-1}))))}}),Object(h.jsx)(u,{toggle:n,showToggle:J})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(x,{toggle:n,showToggle:J,fields:b,onhandleChange:function(e){var t=e.target,n=t.name,c=t.value;g(Object(o.a)(Object(o.a)({},b),{},Object(r.a)({},n,c)))},onhandleSubmit:function(e){e.preventDefault(),J(),g({id:Object(j.a)(),Taskname:"",level:"0"}),T([].concat(Object(i.a)(C),[b])),I([].concat(Object(i.a)(C),[b]))},cancelForm:function(){J(),g({id:Object(j.a)(),Taskname:"",level:"0"})}})}),Object(h.jsx)(p,{listTask:C,handleSave:function(){var e=C.findIndex((function(e){return e.id===D.id}));g(C.splice(e,1,D)),m()({title:"L\u01b0u th\xe0nh c\xf4ng!",icon:"success",button:"OK"})},handleDelete:function(e){m()({title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a: "+e.item.Taskname+" ?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(m()({title:"Item \u0111\xe3 \u0111\u01b0\u1ee3c x\xf3a b\u1ecf",icon:"success"}),T(C.filter((function(t){return t.id!==e.item.id}))))}))},onChangeSelected:function(e){var t=e.target,n=t.name,c=t.value;L(Object(o.a)(Object(o.a)({},D),{},Object(r.a)({},n,c)))},actionTaskSelected:function(e){L({id:e.item.id,Taskname:e.item.Taskname,level:e.item.level})}})]})};n(28);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a220df40.chunk.js.map