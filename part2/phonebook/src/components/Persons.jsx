const Persons = ({persons, newSearch}) => {
    return (
      <ul>
      {persons.map(person => {
        if (person.name.toUpperCase().includes(newSearch.toUpperCase())) {
        return <li key={person.name}>{person.name} {person.number}</li>
        }
      })}
      </ul>
    )
}

export {Persons}
