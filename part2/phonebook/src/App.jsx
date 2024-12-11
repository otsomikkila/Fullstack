import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(newName)
    const nameObject = {
      name: newName
    }

    if (persons.map(n => n.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      console.log(persons.map(n => n.name).includes("Arto Hellas"))
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => {
        return <li key={person.name}>{person.name}</li>
      })}
      </ul>
    </div>
  )
}

export default App