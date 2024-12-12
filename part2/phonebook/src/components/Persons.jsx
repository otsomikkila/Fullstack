import personService from "../services/person"

const Persons = ({persons, setPersons, newSearch}) => {
    const deletePerson = (person) => {
      if (window.confirm(`Delete ${person.name}?`)) {
        personService.deleteId(person.id)
        setPersons(persons.filter(n => n.id !== person.id))
      }
    }
    return (
      <ul>
      {persons.map(person => {
        if (person.name.toUpperCase().includes(newSearch.toUpperCase())) {
        return <li key={person.name}>
          {person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button>
        </li>
        }
      })}
      </ul>
    )
}

export {Persons}
