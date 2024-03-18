import { useState } from "react";
import { Filter, Numbers, PersonForm } from "./components";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

	const addNewPerson = (event) => {
		event.preventDefault();
		if (!persons.some(person => (person.name === newName))) {
			const newPerson = {
				id: Date.now(),
				name: newName,
				number: newNumber
			}
			setPersons([...persons, newPerson])
		} else {
			alert(`${newName} is already added to the phonebook`)
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setNewFilter={ setNewFilter }/>
			<PersonForm 
				newName={ newName } 
				setNewName={ setNewName } 
				newNumber={ newNumber }
				setNewNumber={ setNewNumber }
				addNewPerson={ addNewPerson }
			/>
			<Numbers newFilter={newFilter} persons={persons}/>
		</div>
	);
};

export default App;
