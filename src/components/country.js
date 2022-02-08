import React , { useState } from "react";
import CountryInfo from "./countryInfo";


const Country = ({ country, capital }) => {
    const [show, setShow] = useState(false);

  const handleButtonClick = () => setShow(!show);

  if (show) {
    return (
      <div>
         <br/>
        {country.name}
        {""}
        <button onClick={handleButtonClick}>{show ? "hide" : "show"}</button>
        <CountryInfo country={country} />
     
      </div>
    );
  }

  return(
      <div>
        
        <br/>
           {country.name}{" "}
   
          <button onClick={handleButtonClick}>{show ? "hide" : "show"}</button>
      </div>
  )
};

export default Country;