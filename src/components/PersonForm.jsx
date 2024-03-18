export const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, addNewPerson }) => {

    return (
        <div>
            <h2>Add a New Person:</h2>
                <form onSubmit={ addNewPerson }>
                    <div>
                        <label htmlFor="new-Name">Name: </label>
                        <input id="new-Name" value={ newName } onChange={(event) => setNewName(event.target.value)} />
                        <br /><br />
                        <label htmlFor="new-Number">Number: </label>
                        <input id="new-Number" value={ newNumber } onChange={(event) => setNewNumber(event.target.value)} />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
        </div>
    );

}