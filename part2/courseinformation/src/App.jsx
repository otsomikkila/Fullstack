const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = ({parts}) => {
  console.log(parts[0])

  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={part.id}/>
      )}
      <Total parts={parts}/>
    </div>
  )
}

const Part = ({part}) => {
  //console.log(props.part)
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = ({parts}) => {
  let sum = 0
  const partsList = parts.map(n => sum += n.exercises)
  //console.log(partsList)
  //console.log(sum)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
    ]
  }
  
  return (
    <div>
      <Course course={course}/>
    </div>
  )
  
}

export default App