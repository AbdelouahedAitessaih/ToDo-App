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


export {
    getTodos,
    createTodo
}