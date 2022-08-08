const mongoose = require("mongoose");
const Todo = require('../models/todo');

const getTodos = async (req,res) => {
   await Todo.find().then((todos)=> {
       res.json(todos);
   }).catch((err)=> {
       res.json({error: err.message});
   })
}

const createTodo = async (req,res) => {
    const todo = new Todo(req.body);
    await todo.save().then((todo)=> {
        res.status(201).json(todo);
    }).catch((err)=> {
        res.json({error: err.message});
    })
}

const updateTodo = async (req,res) => {
    const {id} = req.params;
    const {title,content} =  req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {

    }
}

module.exports = {
    getTodos,
    createTodo
}