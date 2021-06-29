(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(7),r=n.n(s),o=n(6),i=n(9),d=n(3),l=n(12),u=n(13),j="POST",b="DELETE",p="COMPLETE",O=function(e){return{type:j,payload:e}},m=n(2),x={taskId:0,taskDesc:"",isCompleted:!1};var h=function(){var e=Object(a.useState)({taskId:0,taskDesc:"",isCompleted:!1}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],j=r[1],h=Object(o.c)((function(e){return e.postTask})),f=Object(o.b)();return Object(a.useEffect)((function(){var e=(new Date).getHours();j(e<12?"Good morning":e<18?"Good afternoon":"Good evening")}),[i]),Object(m.jsxs)("div",{className:"bg-gray-200 min-h-screen font-mono flex",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)("title",{children:"Simple Task App"})}),Object(m.jsxs)("div",{className:"max-w-screen-md m-auto",children:[Object(m.jsxs)("h1",{className:"text-5xl antialiased mb-3",children:[i,", human!"]}),Object(m.jsx)("p",{className:"text-2xl",children:"What are you up to?"}),Object(m.jsxs)("div",{className:"flex my-10",children:[Object(m.jsx)("input",{id:n.taskId,type:"text",className:"p-2 px-5 w-full rounded rounded-r-none",placeholder:"Got bored, made a task app",onChange:function(e){c(Object(d.a)(Object(d.a)({},n),{},{taskDesc:e.target.value}))},onKeyUp:function(e){n&&"Enter"===e.key&&(f(O(n)),c(Object(d.a)(Object(d.a)({},x),{},{taskId:n.taskId+1})))},value:n.taskDesc}),Object(m.jsx)("button",{className:"bg-white p-2 px-5 text-3xl rounded rounded-l-none",onClick:function(){n&&(f(O(n)),c(Object(d.a)(Object(d.a)({},x),{},{taskId:n.taskId+1})))},children:"+"})]}),h&&Object(m.jsx)("ul",{children:h.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("li",{className:"p-3 pl-4 bg-gray-50 rounded flex justify-between items-center mb-2",style:{minHeight:52},children:[Object(m.jsxs)("div",{className:"flex flex-grow mr-3 items-center",children:[Object(m.jsx)("input",{id:t,type:"checkbox",className:"mr-3",onChange:function(n){var a,c,s;f((a=t,c=e,s=n.target.checked,{type:p,task:Object(d.a)(Object(d.a)({},c),{},{taskId:a,isCompleted:s})}))}}),Object(m.jsx)("label",{htmlFor:t,className:"flex-grow cursor-pointer ".concat(e.isCompleted?"line-through text-gray-400":""),children:e.taskDesc})]}),!e.isCompleted&&Object(m.jsx)("button",{className:"p-1 px-3 bg-red-500 rounded text-white text-sm font-bold",onClick:function(){return f({type:b,task:e})},children:"x"})]},t)})}))})]})]})},f=(n(26),n(16)),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[].concat(Object(f.a)(e),[t.payload]);case b:return e.filter((function(e){return e!==t.task}));case p:return e.map((function(e){return e.taskId===t.task.taskId?t.task:e}));default:return e}},g=Object(i.a)({postTask:k}),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},v=Object(i.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(m.jsx)(o.a,{store:v,children:Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.1038fa79.chunk.js.map