const {Router} = require('express');
const {getTodos, createTodo, updateTodo, deleteTodo} = require("../controllers");

const router = Router();

router.get('/todos', getTodos)
      .post('/todos', createTodo)
      .put('/todos/:id', updateTodo)
      .delete('/todos/:id', deleteTodo);

module.exports = router;
