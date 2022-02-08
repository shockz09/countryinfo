import React  from "react";
import Weather from "./weather";

const CountryInfo = ({ country }) => (
    <div>
      <br/><br/><br/>
  <h1>{country.name}</h1>
  <p>Capital :{country.capital}</p>
  <p>Population : {country.population}</p>
  <h2>Languages</h2>
  <ul>
      {country.languages.map((language, i) => (
        <li key={i}>{language.name}</li>
      ))}
    </ul>
    <img src={country.flag} width='190' alt='${country.name} flag'/>
    <Weather city={country.capital}/>
                 
  </div>
);

export default CountryInfo;