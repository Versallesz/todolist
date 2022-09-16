import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    text: "curso 1",
    completed: false,
  },
  {
    text: "no desesperarse con los cursos de platzi",
    completed: false,
  },
  {
    text: "terminar el curso de react",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = useState("");

  let searchedTodos = [];

  //filter with the search
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
     
  }

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos] //crea un nuevo array con los valores del array todos
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //permite hacer toggle
  setTodos(newTodos); //actualiza el valor con el del nuevo array
}

const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos]
  newTodos.splice(todoIndex, 1); //sacar 1 todo desde la posición todoIndex
  setTodos(newTodos);
}
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
