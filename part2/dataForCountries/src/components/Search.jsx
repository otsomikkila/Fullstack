const Search = ({newSearch, setNewSearch, setCountries, originalCountries}) => {
    //console.log(originalCountries)

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        //console.log(event.target.value);
        setCountries(originalCountries.filter(n => n.name.common.toUpperCase().includes(event.target.value.toUpperCase())))
    }

    return (
        <div>
        find countries <input 
            value={newSearch}
            onChange={handleSearchChange}
          />
        </div>
    )
}

export {Search}