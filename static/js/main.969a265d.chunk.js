(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=a(1),u=a(11),i=a(2);a(18);var m=function(e){var t=e.todo,a=e.remove,c=e.update,l=e.toggleComplete,r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],s=u[1],d=Object(n.useState)(t.task),f=Object(i.a)(d,2),p=f[0],b=f[1],v=function(){s(!m)};return m?o.a.createElement("div",{className:"Todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:function(e){e.preventDefault(),c(t.id,p),v()}},o.a.createElement("input",{onChange:function(e){b(e.target.value)},value:p,type:"text"}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"Todo"},o.a.createElement("li",{id:t.id,onClick:function(e){l(e.target.id)},className:t.completed?"Todo-task completed":"Todo-task"},t.task),o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:v},o.a.createElement("i",{className:"fas fa-pen"})),o.a.createElement("button",{onClick:function(e){a(e.target.id)}},o.a.createElement("i",{id:t.id,className:"fas fa-trash"}))))},s=a(6),d=a(5),f=a.n(d);a(21);var p=function(e){e.task;var t=e.createTodo,a=Object(n.useReducer)(function(e,t){return Object(r.a)(Object(r.a)({},e),t)},{task:""}),c=Object(i.a)(a,2),l=c[0],u=c[1];return o.a.createElement("form",{className:"NewTodoForm",onSubmit:function(e){e.preventDefault();var a={id:f()(),task:l.task,completed:!1};t(a),u({task:""})}},o.a.createElement("label",{htmlFor:"task"},"New todo"),o.a.createElement("input",{value:l.task,onChange:function(e){u(Object(s.a)({},e.target.name,e.target.value))},id:"task",type:"text",name:"task",placeholder:"New Todo"}),o.a.createElement("button",null,"Add Todo"))};a(22);var b=function(){var e=Object(n.useState)([{id:f()(),task:"task 1",completed:!1},{id:f()(),task:"task 2",completed:!0}]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=function(e){c(a.filter(function(t){return t.id!==e}))},s=function(e,t){var n=a.map(function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{task:t}):a});c(n)},d=function(e){var t=a.map(function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t});c(t)},b=a.map(function(e){return o.a.createElement(m,{toggleComplete:d,update:s,remove:l,key:e.id,todo:e})});return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List ",o.a.createElement("span",null,"A simple React Todo List App")),o.a.createElement("ul",null,b),o.a.createElement(p,{createTodo:function(e){console.log(e),c([].concat(Object(u.a)(a),[e]))}}))};a(23);function v(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null))}var E=document.getElementById("root");l.a.render(o.a.createElement(v,null),E)}},[[12,1,2]]]);
//# sourceMappingURL=main.969a265d.chunk.js.map