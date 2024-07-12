//test todo list service

const todoService = require('./todo-list.service');

describe('Todo List Service', () => {
  it('should create a new todo', () => {
    const todo = todoService.create({ title: 'test' });
    expect(todo.title).toBe('test');
  });
});
