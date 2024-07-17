import "./App.css"
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
import { TodoHeader } from "../TodoHeader";

const App= () => {

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
    <TodoHeader loading={loading}>

      <TodoCounter
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

    </TodoHeader>

        <TodoList
          error = {error}
          onError = {()=> { <TodosError />}}
          loading = {loading}
          onLoading = {()=> {<TodoLoader />}}
          searchedTodos = {searchedTodos}
          onEmptyTodos = {()=> {<EmptyTodos/>}}
          render = {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}

        />

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
