import { useState } from 'react'
import personService from '../services/person'

const PersonForm = ({persons, setPersons, setErrorMessage, setMessageStyle}) => {
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
        if (window.confirm(`${newName} is already added in the phonebook, replace old number with a new one?`)) {
          const person = persons.find(n => n.name === newName)
          const changedPerson = { ...person, number: newNumber}
          setErrorMessage(`Added ${personObject.name}`)

          personService
            .update(person.id, changedPerson)
            .then(response => {
              setPersons(persons.map(n => n.id === person.id ? response.data : n))
            })
            .catch(error => {
              setMessageStyle('error')
              setErrorMessage(`Information of '${person.name}' was already deleted from server`)
              setPersons(persons.filter(n => n.id !== person.id))
            })          
          setTimeout(() => {
            setErrorMessage(null)
            setMessageStyle('message')
          }, 3000)
          setNewName('')
          setNewNumber('')
        }
      }
      else {
        console.log(persons.map(n => n.name).includes("Arto Hellas"))
        
        personService.create(personObject).then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
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