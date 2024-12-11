import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
  
    const addPerson = (event) => {
      event.preventDefault()
      console.log(newName)
  
      const personObject = {
        name: newName,
        number: newNumber
      }
  
      if (persons.map(n => n.name).includes(newName)) {
        alert(`${newName} is already added to phonebook`)
      }
      else {
        console.log(persons.map(n => n.name).includes("Arto Hellas"))
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    }
  
    return (
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
  
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
  
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export {PersonForm}