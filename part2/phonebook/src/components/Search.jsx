const Search = ({newSearch, setNewSearch}) => {
    const handleSearchChange = (event) => {
      setNewSearch(event.target.value)
    }
  
    return (
      <div>
          filter shown with
          <input 
            value={newSearch}
            onChange={handleSearchChange}
          />
        </div>
    )
}

export {Search}

