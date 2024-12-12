import { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import personService from './services/person'
import './index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newSearch, setNewSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  
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
      <Notification message={errorMessage}/>
      <Search newSearch={newSearch} setNewSearch={setNewSearch}/>
      <h2>add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
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