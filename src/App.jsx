import { useState } from "react";

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
      <form>
        <div>
          <label htmlFor="filter">Filter by: </label>
          <input htmlFor="filter" onChange={ (event) => setNewFilter(event.target.value) }/>
        </div>
      </form>
      <h2>Add a New Person:</h2>
      <form onSubmit={ addNewPerson }>
        <div>
          <label htmlFor="new-Name">Name: </label>
          <input id="new-Name" value={ newName } onChange={ (event) => setNewName(event.target.value) } />
          <br/><br/>
          <label htmlFor="new-Number">Number: </label>
          <input id="new-Number" value={ newNumber } onChange={ (event) => setNewNumber(event.target.value) } />
        </div>
        <br/><br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { 
          persons
            .filter(person => ( 
              person.name.includes(newFilter) 
            ))
            .map((person, i) => (
              <li key={i}>
                { person.name } { person.number }
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default App;
