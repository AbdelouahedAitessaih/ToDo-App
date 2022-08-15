import * as api from "../api";

const getTodos = async ()=>{
   try{
     const {data} = await api.getTodos();
     return data;
   }catch(error) {
    console.log(error);
   }
}

const createTodo = async (todo)=>{
    try{
      const {data} = await api.createTodo(todo);
      return data;
    }catch(error) {
     console.log(error);
    }
 }

const updateTodo = async (id, todo)=>{
 try{
   const {data} = await api.updateTodo(id,todo);
   return data;
 }catch(error) {
  console.log(error);
 }
} 

const deleteTodo = async (id)=>{
  try{
    const {data} = await api.deleteTodo(id);
    return data;
  }catch(error) {
   console.log(error);
  }
 } 


export {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}