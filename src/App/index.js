import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoader } from '../TodoLoader';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
function App() {

  const
  {
    loading,
    completedTodos,
    totalTodos,
    error,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo

 } = useTodos()

  return (
    <>
    <TodoCounter
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
    />
    <TodoSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
    />

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
          <TodoForm
            addTodo = {addTodo}
            setOpenModal={setOpenModal}
          />
    </Modal>
    )
    }
  </>
  );
}

export default App;
