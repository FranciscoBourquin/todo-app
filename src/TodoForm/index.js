import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"

export const TodoForm = () => {

  const {addTodo, setOpenModal} = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e)=> {

    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);

  }

  const onCancel = ()=>{
    setOpenModal(false)
  }

  const onChange = (e)=> {
    setNewTodoValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Escribe la nueva tarea
      </label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      required/>
      <div className="TodoForm-buttonContainer">
        <button
        className="TodoForm-button TodoForm-button--cancel"
        type="button"
        onClick = {onCancel}
        >

          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button--add"
        type="submit">
          Crear tarea
        </button>
      </div>
    </form>
  )
}
