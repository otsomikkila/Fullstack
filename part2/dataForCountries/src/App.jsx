import { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { Content } from './components/Content'
import axios from 'axios'


const App = () => {
  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [originalCountries, setOriginalCountries] = useState([])
  

  useEffect(() => {
    //console.log('fetching countries...')
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
      setCountries(response.data)
      setOriginalCountries(response.data)
    })
  }, [])

  return (
    <div>
    <Search 
      newSearch={newSearch}
      setNewSearch={setNewSearch}
      setCountries={setCountries}
      originalCountries={originalCountries}
    /> 
    <Content 
      countries={countries}
      setCountries={setCountries}
      originalCountries={originalCountries}
    />
    </div>
  )
}

export default App