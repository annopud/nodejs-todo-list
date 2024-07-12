const todoService = require('../service/todo-list.service');

const getAll = (req, res) => {
  res.send(todoService.getAll());
};

const getById = (req, res) => {
  const todo = todoService.getById(parseInt(req.params.id));
  if (!todo)
    return res.status(404).send('The todo with the given ID was not found.');
  res.json(todo);
};

const create = (req, res) => {
  const todo = todoService.create(req.body);
  if (!todo)
    return res.status(400).json({ message: 'Please provide a valid input' });

  res.status(201).json(todo);
};

const update = (req, res) => {
  const todo = todoService.update(req.body);
  if (!todo)
    return res.status(404).send('The todo with the given ID was not found.');

  res.json(todo);
};

const remove = (req, res) => {
  const removeSuccess = todoService.remove(parseInt(req.params.id));
  if (!removeSuccess)
    return res.status(404).send('The todo with the given ID was not found.');

  return res.end('The todo was removed');
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
