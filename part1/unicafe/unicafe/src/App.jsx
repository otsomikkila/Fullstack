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
    </div>
  )
}

export default App