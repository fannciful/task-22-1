(()=>{"use strict";$(document).ready((function(){const t=$(".todo-form"),o=$(".input-field"),e=$(".todo-list"),s=t=>{const o=$("<li>").addClass("todo-item list-group-item d-flex justify-content-between align-items-center"),s=$("<span>").addClass("todo-text").text(t.text),n=$("<button>").addClass("btn btn-danger btn-sm").text("Видалити");n.on("click",(function(e){e.stopPropagation(),o.remove(),a(t.text)})),o.on("click",(function(){$("#taskText").text(t.text),$("#taskModal").modal("show")})),o.append(s,n),e.append(o)};t.on("submit",(function(t){t.preventDefault();const e=o.val().trim();if(""===e)return;const a={text:e};s(a),n(a),o.val("")}));const n=t=>{const o=JSON.parse(localStorage.getItem("todos"))||[];o.push(t),localStorage.setItem("todos",JSON.stringify(o))},a=t=>{let o=JSON.parse(localStorage.getItem("todos"))||[];o=o.filter((o=>o.text!==t)),localStorage.setItem("todos",JSON.stringify(o))};(JSON.parse(localStorage.getItem("todos"))||[]).forEach((t=>s(t)))}))})();