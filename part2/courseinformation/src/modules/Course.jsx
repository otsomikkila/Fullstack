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

  export default Course