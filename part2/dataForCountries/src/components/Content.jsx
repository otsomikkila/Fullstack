import { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({country}) => {
  const api_key = import.meta.env.VITE_SOME_KEY
  const [data, setData] = useState([])
  const [temperature, setTemperature] = useState('')
  const [wind, setWind] = useState('')
  const [icon, setIcon] = useState('')

  if (data) {
    useEffect(() => {
      console.log('fetching weather...')
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`).then(response => {
        //console.log(response)
        setData(response.data)
        setTemperature(response.data.main.temp)
        setWind(response.data.wind.speed)
        setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
      })
    }, [country])
  }
  
  console.log("data", data)
  
  

  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {Object.values(country.languages).map(n => 
                <li key={n}>{n}</li>
            )}
        </ul>
        <img src={country.flags.png} />
        <h1>Weather in {country.capital}</h1>
        <p>temperature {temperature ?? 'loading...'} Celsius</p>
        <img src={icon}/>
        <p>wind {wind ?? 'loading...'} m/s</p>
    </div>
  )
}

const Content = ({countries, setCountries, originalCountries}) => {
    //console.log("countries", countries)
    const handleClick = (countryName) => {
      setCountries(countries.filter(n => n.name.common === countryName))
    }

    

    if (countries.length > 10) {
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    else if (countries.length == 1) {
        const country = originalCountries.find(n => n.name.common === countries[0].name.common)
        //console.log(country.flags.png)
        
        return (
            <Country country={country}/>
        )
    }
    else {
      return (
        <div>
        {countries.map(n => 
          <div key={n.name.common}>{n.name.common} <button onClick={() => handleClick(n.name.common)}>show</button>
          </div>)}
        </div>
      )
    }
}

export {Content}