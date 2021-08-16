
const FilterByYear = (props) => {

    const filterChangeHandler= (event) => {
        props.filter(event.target.value)
    }

    return (
        <div>
            <div style={{ color: "white" }}>Filter By Year</div>
            <div>
                <select
                    onChange={filterChangeHandler}>
                    <option value="All">All</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    )
}

export default FilterByYear;