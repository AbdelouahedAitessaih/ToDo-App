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
         return res.status(404).send(`The id ${id} is not valid`);
    }
    const todo = {title, content, _id:id};
    await Todo.findByIdAndUpdate(id, todo, {new:true});
    res.json(todo);
}

const deleteTodo = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    await Todo.findByIdAndDelete(id);
    res.json({message: 'Todo deleted successfully'});
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}