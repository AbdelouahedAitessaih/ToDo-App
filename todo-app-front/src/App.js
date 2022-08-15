import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./controllers";

function App() {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [todos, setTodos] = useState(null);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    GetTodos();
  }, [activeId]);

  useEffect(() => {
    let currentTodo =
      activeId !== 0
        ? todos?.find((todo) => todo._id === activeId)
        : { title: "", content: "" };
    setTodo(currentTodo);
  }, [activeId]);

  const Clear = () => {
    setActiveId("");
    setTodo({ title: "", content: "" });
  };

  const GetTodos = async () => {
    const result = await getTodos();
    setTodos(result);
  };

  const SubmitTodo = async (e) => {
    e.preventDefault();

    if(activeId === "") {
       const result =  await createTodo(todo);
       setTodos([...todos, result]);
    }else {
      await updateTodo(activeId, todo);
    }
    Clear();
  };

  const DeleteTodo = async(id) => {
    await deleteTodo(id);
    Clear();
    const todosCopy = [...todos];
    todosCopy.filter(todo => todo._id !== id);
    setTodos(todosCopy);
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={SubmitTodo}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="title"
                type="text"
                value={
                  todo === undefined || todo.title === "" ? "" : todo.title
                }
                className="validate"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input
                id="content"
                type="text"
                value={
                  todo === undefined || todo.content === "" ? "" : todo.content
                }
                className="validate"
                onChange={(e) => setTodo({ ...todo, content: e.target.value })}
              />
              <label htmlFor="content">Content</label>
            </div>
          </div>
          <div className="row right-align">
          <button className="waves-effect waves-light btn blue" type="reset" onClick={Clear}>Clear</button>
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>
      </div>
      {!todos ? (
        <Preloader />
      ) : todos.length > 0 ? (
        <ul className="collection">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="collection-item"
              onClick={() => setActiveId(todo._id)}
            >
              <div>
                <h5 style={{cursor:"pointer"}}>{todo.title}</h5>
                <p>
                  {todo.content}
                  <a style={{cursor:"pointer"}} onClick={()=> DeleteTodo(todo._id)} className="secondary-content">
                    <i className="material-icons">delete</i>
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h5>Nothing to do !</h5>
        </div>
      )}
    </div>
  );
}

export default App;
