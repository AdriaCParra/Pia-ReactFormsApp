export const Filter = ({ setNewFilter }) => {

    return (
        <form>
            <div>
                <label htmlFor="filter">Filter by: </label>
                <input htmlFor="filter" onChange={ (event) => setNewFilter(event.target.value) }/>
            </div>
        </form>
    );
}