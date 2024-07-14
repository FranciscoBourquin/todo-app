import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoader } from '../TodoLoader';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
 const
  {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,

 } =  useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />

          <TodoList>
            {loading && (
              <>
                <TodoLoader />
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>


      <CreateTodoButton
        setOpenModal={setOpenModal}
       />

      {
      openModal&& (
        <Modal>
            <TodoForm />
      </Modal>
      )
      }
    </>
  );
}

export { AppUI };
