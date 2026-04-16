import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useEffect} from 'react';


function App() {
  const [count, setCount] = useState(0)
// save data that is fetched; initially set to empty list because there is no data
const [data, setData] = useState([])
  useEffect(() => {

    const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "2c16431219msh4e66357e0f01a8fp1635c4jsn34d3803ff9bb");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://yelp-business-api.p.rapidapi.com/search?location=Philadelphia%2C%20PA&search_term=Shoes&limit=5&offset=0&business_details_type=basic", requestOptions)
  .then((response) => response.json())
  .then((result) => setData(result.business_search_result)) // save data as a varaible
  .catch((error) => console.error(error)); // catch errors if applicable




  }, []);
  // if there's no data, don't return anything

  if (!data === ([])) {
    return <></>
  } else{

  
  return (
    <div className= "container">
   <h1>APIs & useEffect</h1>
     

     {
      data.map((obj) => { 
        return <p key = {obj.id} > {obj.name} </p>
      })

     }
     </div>
  )
}
}
export default App
