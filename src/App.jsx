

import { useState,useEffect } from "react";
import './App.css'

function App() {
    // variables to keep track of user search & pokemon data
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [sprite, setSprite] = useState([])
    // saving what the user types in the input field
    const handleChange = (e) => {
      // console.log(e.target.value)
        setQuery(e.target.value)
    }

    // retrieves the api data based on user input. 
    const getData = async() => {
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '2c16431219msh4e66357e0f01a8fp1635c4jsn34d3803ff9bb',
            'x-rapidapi-host': 'pokemon-api3.p.rapidapi.com',
            'Content-Type': 'application/json'
          }
        };

        //api url
        const url = `https://pokemon-api3.p.rapidapi.com/pokemon?name=${query}`

        //fetches data
        try{
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result)
          setData(result.moves);
          setSprite(result.sprites.front_default);

        }
        // catch errors
        catch (error){
          console.error(error);
        }
    }

return (
  <>
  <input placeholder = 'Enter Pokemon Name' value = {query} onChange={handleChange} /> 
  <button onClick = {getData}>Get Pokemon Info </button>
  {/* loop through data and show every move */} 
  <>
    <>
         <img src = {sprite}></img>
        {
          data.map((move) => {
            return(
              <div key={move.move.url}>{move.move.name}</div>
            )
          })
        }
    </>

    {/* show data if it exists, else show nothing */}
    {/* {data ? 
      <>
        {
          data.map((move) => {
            return(
              <div key={move.move.url}>{move.move.name}</div>
            )
          })
        }
      </> : 
      <></>
    }  */}

    {/* show data if it exists */}
    {/* {data && 
      <>
        {
          data.map((move) => {
            return(
              <div key={move.move.url}>{move.move.name}</div>
            )
          })
        }
      </>
    } */}

  </>
  </>


)
}
  



export default App
