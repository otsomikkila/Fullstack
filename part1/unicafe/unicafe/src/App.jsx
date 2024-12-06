import { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Score = ({score, amount}) => {
  return (
    <p>{score} {amount}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good * 1 + bad * (-1) + neutral * (0))/(good + bad + neutral)
  const total = (good + bad + neutral)
  return (
    <div>
      <Header name="give feedback" />

      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      
      <Header name="statistics" />
      <Score score="good" amount={good} />
      <Score score="neutral" amount={neutral} />
      <Score score="bad" amount={bad} />
      <Score score="all" amount={total} />
      <p>average {total == 0 ? 0 : average}</p>
      <p>positive {total == 0 ? 0 : (good / total) * 100} %</p>
    </div>
  )
}

export default App