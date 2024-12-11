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
  console.log(parts)
  const total = parts.reduce((s,p) => {
    return s += p.exercises
  }, 0)
  return (
    <p>Number of exercises {total}</p>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      {courses.map(course => 
        <Course course={course} key={course.id} />
      )}
    </div>
  )
  
}

export default App