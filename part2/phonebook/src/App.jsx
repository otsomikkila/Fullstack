import { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newSearch, setNewSearch] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
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
      <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App