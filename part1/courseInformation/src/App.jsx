const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <Part part={props.part} number={props.number}/>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part[0]} {props.number[0]}</p>
      <p>{props.part[1]} {props.number[1]}</p>
      <p>{props.part[2]} {props.number[2]}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header name={course}/>
      <Content part={parts} number={exercises} />
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App