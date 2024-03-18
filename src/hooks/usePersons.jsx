import { useEffect, useState } from "react";
import axios from "axios";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  const handleChangePersonsValue = (newValue) => {
    setPersons(newValue);
  };

  useEffect(() => {
    const promise = axios.get("http://localhost:3001/persons");
    promise.then((response) => {
      handleChangePersonsValue(response.data);
    });
  }, []);

  return {
    persons,
    handleChangePersonsValue,
  };
};
