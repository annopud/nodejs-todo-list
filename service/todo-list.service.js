let todos = [];

function getAll() {
  return todos;
}

function create(todo) {
  if (!todo.title) return null;

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
}

function update(todo) {
  const index = todos.findIndex((t) => t.id === todo.id);
  if (index !== -1) {
    todos[index].title = todo.title;
    todos[index].completed = todo.completed;
    return todo;
  }
  console.log('test');
  return null;
}

function remove(id) {
  try {
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1) return false;
    todos.splice(todoIndex, 1);
    return true;
  } catch (error) {
    return false;
  }
}

function getById(id) {
  return todos.find((t) => t.id === id);
}

const services = {
  getAll,
  create,
  update,
  remove,
  getById,
};

module.exports = services;
