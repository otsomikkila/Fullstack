const Country = ({country}) => {
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
            </div>
  )
}

const Content = ({countries, setCountries, originalCountries}) => {
    console.log("countries", countries)
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
        console.log(country.flags.png)
        
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