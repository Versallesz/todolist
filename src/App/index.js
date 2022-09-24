import React, { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
import useLocalStorage from "../TodoContext/useLocalStorage";
import {TodoProvider} from '../TodoContext';

// const defaultTodos = [
//   {
//     text: "curso 1",
//     completed: false,
//   },
//   {
//     text: "no desesperarse con los cursos de platzi",
//     completed: false,
//   },
//   {
//     text: "terminar el curso de react",
//     completed: false,
//   },
// ];

function App() {

  return <TodoProvider>
    <AppUI />
  </TodoProvider>;
}

export default App;
