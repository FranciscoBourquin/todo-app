import './TodoCounter.css';

export const TodoCounter= ({completedTodos, totalTodos}) => {

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
