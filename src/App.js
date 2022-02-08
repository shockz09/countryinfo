import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./components/countryInfo"
import Country from "./components/country"

const App = () => {

  //States
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [ weather, setWeather ] = useState([])
  //fetch the countries
  useEffect(() => {
   
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  

  //Handle the search change that has been done.
  const handleSearchChange = (event) => setSearch(event.target.value);

  //check the countries to show by seeing that if search is empty string then return empty array otheriwise filter throught the countries and check if the country exits!
  const countriesToShow =
    search === ""
      ? []
      : countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );

    //check if countries to show length is 1 , if it is then return in which it shows the country name .
 if(countriesToShow.length === 1){
   return(
     <div>
         Find countries by name <input onChange={handleSearchChange} />
      
         <div>
         
           <CountryInfo country={countriesToShow[0]}/>
         </div>
     </div>
   )
 }

 //return
  return (
    <div>
      Find countries by name <input onChange={handleSearchChange} placeholder='search by country name' />
      <div>
        {countriesToShow.length > 10
        ? 'too many matches , specify more'
        : countriesToShow.map((country)=>(
          <div key={country.name}>
<Country country = {country}/>
            </div>
        )
        
        )
        }
      </div>
    </div>
  );
};

export default App;
