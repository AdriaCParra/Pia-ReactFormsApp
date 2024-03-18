import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {

	const { newName, newNumber, setNewName, setNewNumber } = useForm();
	const { newFilter, setNewFilter } = useFormFilter();
	const { persons, setPersons} = usePersons();
	
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
