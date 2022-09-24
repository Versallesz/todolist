import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
    //prevState devuelve el estado anterior a la actualización
  }
  return <button onClick={onClickButton} className="CreateTodoButton">+</button>;
}

export { CreateTodoButton };
