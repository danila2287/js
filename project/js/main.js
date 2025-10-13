import {getTodosFromLocalStorage} from "./storage.js";
import {renderTodos, initTodoHandlers} from "./dom.js";

// ===========================================
const todos = getTodosFromLocalStorage() || [];
// ==========================================


// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded выполняет действия
  //  после того как Отрисиутся весь DOM;
  renderTodos(todos);
  initTodoHandlers(todos);
});
// =================================


