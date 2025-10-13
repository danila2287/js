import { todoKeys } from "./constans.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosContainer = document.querySelector(".todos");

function createTodoElement(todoObj) {
  const li = document.createElement("li");
  li.classList.add("todo");
  li.id = todoObj[todoKeys.id];
  if (todoObj[todoKeys.is_completed]) {
    li.classList.add("completed");
  }
  todosContainer.appendChild(li);
  li.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="todo-text">${todoObj[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
    `
  );
}

// код для вытаскивания из локал
export const renderTodos = (todos) => {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    createTodoElement(todo);
    // container.prepend(todoElement);
  });
};

function handleCreateTodo(todos, text) {
  const newTodos = createTodo(todos, text);
  setTodosToLocalStorage(todos);
  createTodoElement(newTodos);
}

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
      // createTodo(todos, text);
      // createTodoElement(text);
      handleCreateTodo(todos, text);
    }
    input.value = "";
  });

  const wrapperTodos = document.querySelector(".todos");
  wrapperTodos.addEventListener("click", ({ target }) => {
    // const target=event.target;=={target}
    const todoElement = target.closest(".todo"); //closest ближайше лежащий элемент;
    //  event.target - это элемент, на котором произошло событие
    if (!todoElement) {
      return;
    }
    // const todoId = Number(todoElement[todoKeys.id]);
    const todoId = Number(todoElement.id);
    if (target.matches(".button-complete")) {
      //classList.contains==matches
      completeTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todoElement.classList.toggle("completed"); //classList.toggle() - это метод, который добавляет класс,
      //  если его нет, и удаляет, если он есть.
    } else if (target.matches(".button-delete")) {
      //contains - содеожание элемента
      deleteTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todoElement.remove();
    }
  });
};
