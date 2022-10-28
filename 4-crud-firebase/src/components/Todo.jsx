import { useState } from "react";

export function Todo({ todo, handleDelete, toggleComplete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        className="list"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          Marcar
        </button>
        <button onClick={() => handleEdit(todo, newTitle)}className="button-edit">Editar</button>

        <button className="button-delete" onClick={() => handleDelete(todo.id)}>eliminar</button>
      </div>
    </div>
  );
}
