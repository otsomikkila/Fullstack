import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.function}>
      {props.name}
    </button>
  )
}

const StatisticLine = ({name, value}) => {
  return (
    <p>{name} {value}</p>
  )
}

const Statistics = ({allstats}) => {
  const {good, bad, neutral, average, total} = allstats
  const positiveValue = `${(good / total) * 100} %`
  if (total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine name="good" value={good}/>
        <StatisticLine name="neutral" value={neutral}/>
        <StatisticLine name="bad" value={bad}/>
        <StatisticLine name="all" value={total}/>
        <StatisticLine name="average" value={average}/>
        <StatisticLine name="positive" value={positiveValue}/>
      </div>
    )
  }
  else{
    return (
      <p>No feedback given</p>
    )
  }

  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good * 1 + bad * (-1) + neutral * (0))/(good + bad + neutral)
  const total = (good + bad + neutral)
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    average: average,
    total: total
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button name="good" function={() => setGood(good + 1)}/>
      <Button name="neutral" function={() => setNeutral(neutral + 1)}/>
      <Button name="bad" function={() => setBad(bad + 1)}/>
      
      <Statistics allstats={statistics}/>
      
    </div>
  )
}

export default App