import axios from "axios";

const url = "https://todoss-app.herokuapp.com/todos";

const getTodos = () => axios.get(url);
const createTodo = todo => axios.post(url, todo);
const updateTodo = (id, updatedTodo) => axios.put(`${url}/${id}`, updatedTodo);
const deleteTodo = (id) => axios.delete(`${url}/${id}`);

export {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}