import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localstorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localstorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //crea por defecto un array vacío convertido en string
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localstorageItem); //parsea el texto a un objeto
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(e)
      }
    }, 1200);
  });

  const saveItem = (newItem) => {
    try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }catch(e){
        setError(e)
    }
  };

  return { item, saveItem, loading, error};
}

export default useLocalStorage;
