import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext"


function TodoCounter() {
  const {completedTodos, totalTodos} = useContext(TodoContext);

  let message;

  if (totalTodos === 0) {
    message = 'No tienes tareas pendientes';
  } else if (completedTodos === totalTodos) {
    message = 'Felicidades, has completado todas tus tareas pendientes';
  } else {
    message = `Has completado ${completedTodos} de ${totalTodos} tareas`;
  }
  return (
    <h1 className="TodoCounter">
      {message}
    </h1>
  );
}

export { TodoCounter };
