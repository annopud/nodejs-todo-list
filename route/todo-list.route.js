const express = require('express');
const router = express.Router();

const {
  getAll,
  create,
  getById,
  remove,
  update,
} = require('../controller/todo-list.controller');

router.route('').get(getAll);
router.route('/:id').get(getById);
router.route('').post(create);
router.route('').put(update);
router.route('/:id').delete(remove);

module.exports = router;
