export const Filter = ({ setNewFilter }) => {

    const handleChangeFilterValue = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <form>
            <div>
                <label htmlFor="filter">Filter by: </label>
                {/* <input htmlFor="filter" onChange={ (event) => handleChangeFilterValue(event) }/> */}
                {/* Works as the line before */}
                <input htmlFor="filter" onChange={ handleChangeFilterValue }/>
            </div>
        </form>
    );
}