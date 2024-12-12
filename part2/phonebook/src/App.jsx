import { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newSearch, setNewSearch] = useState('')
  
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} setNewSearch={setNewSearch}/>
      <h2>add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        setPersons={setPersons}
        newSearch={newSearch}
      />
    </div>
  )
}

export default App