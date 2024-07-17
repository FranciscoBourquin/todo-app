import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue, loading }) => {

  return (
    <input
      placeholder="Buscar tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled = {loading}
    />
  );
}


