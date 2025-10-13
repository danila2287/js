import { todoKeys, errorTodoId } from "./constans.js";
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
export const createTodo = (todos, textInp) => {
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
export const completeTodoById = (todos, todoId) => {
  let tot = todos.find((numb) => {
    return numb[todoKeys.id] === todoId;
  });
  if (tot == undefined) {
    console.error(errorTodoId(todoId));
    return null;
  }
  tot[todoKeys.is_completed] = !tot[todoKeys.is_completed];
  return tot;
};

export const deleteTodoById = (todos, todoId) => {
  const initialLength = todos.length;
  let newTodos = todos.filter((todo) => {
    return todo[todoKeys.id] !== todoId;
  });
  if (newTodos.length === initialLength) {
    console.error(errorTodoId(todoId));
  }
  todos.length = 0;
  todos.push(...newTodos);
  return todos;
};
