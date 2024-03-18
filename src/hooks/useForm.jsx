import { useState } from "react";

export const useForm = () => {
    const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

    return {
        newName,
        newNumber,
        setNewName,
        setNewNumber
    }
}