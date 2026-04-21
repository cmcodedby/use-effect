

import { useState,useEffect } from "react";
import './App.css'

function App() {
const [query, setQuery] = useState('')
const [data, setData] = useState([])
const handleChange = (e) => {
   // console.log(e.target.value)
    setQuery(e.target.value)
}

const getData = async() => {

  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2c16431219msh4e66357e0f01a8fp1635c4jsn34d3803ff9bb',
		'x-rapidapi-host': 'pokemon-api3.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};
const url = `https://pokemon-api3.p.rapidapi.com/pokemon?name=${query}`
try{
  const response = await fetch(url, options);
	const result = await response.json();
	setData(result);
}
catch (error){
  console.error(error);
}

}


return (

  <>
  <input placeholder = 'Enter Pokemon Name' value = {query} onChange={handleChange} /> 
  <button onClick = {getData}>Get Pokemon Info </button>
  </>

)
}
  



export default App
