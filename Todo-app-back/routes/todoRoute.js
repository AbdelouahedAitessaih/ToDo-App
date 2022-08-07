const {Router} = require('express');
const {getTodos, createTodo} = require("../controllers/todoController");

const router = Router();

router.get('/todos', getTodos)
      .post('/todos', createTodo);

module.exports = router;
