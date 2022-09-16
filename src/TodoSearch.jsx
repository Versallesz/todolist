import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      
    </>
  );
}

export { TodoSearch };
