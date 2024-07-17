import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {

  return (
    <input
      placeholder="Buscar tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}


