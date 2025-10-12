"use strict";
// Пример что мы должны получить на выходе
// {
//   id:1,
//   text:"Todo",
//   is_completed:false,
// }
const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};
// ===========================================
const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todos = getTodosFromLocalStorage() || [];
// ==========================================

const errorTodoId = (todoId) => `Todo with id ${todoId} not found`;
const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => {
      // if (todo.id > maxId) {
      //   return todo.id;
      // } else {
      //   return maxId;
      // }
      return Math.max(maxId, todo[todoKeys.id]);
    }, 0) + 1
  );
};
// добавляем элемент
const createTodo = (todos, textInp) => {
  let object = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: textInp,
    [todoKeys.is_completed]: false,
  };
  todos.push(object);
  return object;
};

// console.log(createTodo("Покормить кота"));

// меняем true на false
const completeTodoById = (todos, todoId) => {
  let tot = todos.find((numb) => {
    return numb[todoKeys.id] === todoId;
  });
  if (tot == undefined) {
    console.error(errorTodoId());
    return null;
  }
  tot[todoKeys.is_completed] = !tot[todoKeys.is_completed];
  return tot;
};

const deleteTodoById = (todos, todoId) => {
  const initialLength = todos.length;
  let newTodos = todos.filter((todo) => {
    return todo[todoKeys.id] !== todoId;
  });
  if (newTodos.length === initialLength) {
    console.error(errorTodoId());
  }
  todos.length = 0;
  todos.push(...newTodos);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosContainer = document.querySelector(".todos");

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

function createTodoElement(todoObj) {
  const li = document.createElement("li");
  li.classList.add("todo");
  li.id = todoObj[todoKeys.id];
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
// ===================================
// код для вытаскивания из локал сторадже
const renderTodos = (todos, container) => {
  container.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    // container.prepend(todoElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded выполняет действия
  //  после того как Отрисиутся весь DOM;
  renderTodos(todos, todosContainer);
});
// =================================
function handleCreateTodo(todos, text) {
  const newTodos = createTodo(todos, text);
  setTodosToLocalStorage(todos);
  createTodoElement(newTodos);
}

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
