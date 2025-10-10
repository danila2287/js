"use strict";
console.log(1);

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

const todos = [];

const errorTodoId = () => `Todo with id ${todoId} not found`;
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
  return todos;
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
const todo = document.querySelector(".todos");

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

function createTodoElement(text) {
  const li = document.createElement("li");
  li.classList.add("todo");
  todo.appendChild(li);
  li.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
    `
  );
}

function handleCreateTodo(todos, text) {
  createTodo(todos, text);
  createTodoElement(text);
}

const buttonComplete = document.querySelector(".button-complete");
const buttonDelete = document.querySelector(".button-delete");

buttonComplete.addEventListener("click", (event) => {
  event.preventDefault();
  const todoElement = event.target.closest(".todo");
  const todoText = todoElement.querySelector(".todo-text").textContent;

  completeTodo(todoText);
});

function completeTodo(text) {
  todos.forEach((element) => {
    if (element[todoKeys.text] == text) {
      completeTodoById(todos, element[todoKeys.id]);
    }
  });
}

buttonDelete.addEventListener("click", (event) => {
  event.preventDefault();
  const todoElement = event.target.closest(".todo");
  const todoText = todoElement.querySelector(".todo-text").textContent;

  removeTodo(todoText);
});

function removeTodo(text) {
  todos.forEach((element) => {
    if (element[todoKeys.text] == text) {
      deleteTodoById(todos, element[todoKeys.id]);
    }
  });
}
