import './TodoList.css';

export const TodoList = ({ error, onError, loading, onLoading, searchedTodos, onEmptyTodos, render }) => {
  return (
    <section>
       {error&& onError()}
       {loading&& onLoading()}
       {(!loading && !searchedTodos.length) && onEmptyTodos()}
       {searchedTodos.map(render)}

    <ul className="TodoList">

    </ul>
    </section>

  );
}



