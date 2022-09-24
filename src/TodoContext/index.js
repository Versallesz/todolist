import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let searchedTodos = [];

  //filter with the search
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text });
    saveTodos(newTodos); //actualiza el valor con el del nuevo array
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //crea un nuevo array con los valores del array todos
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //permite hacer toggle
    saveTodos(newTodos); //actualiza el valor con el del nuevo array
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //sacar 1 todo desde la posición todoIndex
    saveTodos(newTodos);
  };

  useEffect(() => {
    console.log("llamando al useEffect");
  }, []);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        addTodo,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
