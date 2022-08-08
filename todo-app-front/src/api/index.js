import axios from "axios";

const url = "http://localhost:3000/todos";

const getTodos = () => axios.get(url);
const createTodo = todo => axios.post(url, todo);

export {
    getTodos,
    createTodo
}