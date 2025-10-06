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
