import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");


  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      id: Date.now(),
      name: newName,
      number: ''
    }
    setPersons([...persons, newPerson])
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ addNewPerson }>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value) } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { 
          persons.map((person, i) => (
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
