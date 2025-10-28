import "./Todo.css";

function Todo(props) {
  return <div className="todo-item">{props.text}</div>;
}

export default Todo;
