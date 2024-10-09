import React from 'react'
import{useEffect,useState} from "react";
import axios from 'axios';
import DisplayFood from './DisplayFood';
function FoodApi() {
    const [search,setSearch]=useState('');
    const [data,setData]=useState([]);
    const YOUR_APP_ID="1cea9353";
    const YOUR_APP_KEY="737588e5a57a50c8a12623364f68d211	—";
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=60&calories=591-722&health=alcohol-free`)
        .then(
            response => response.json()
        ).then(
            data=>setData(data.hits)
        )
    }

  return (
    <div><center>
        <h1 style={{color:'#191970'}}><b>KL Food Recipes</b></h1>
        <form onSubmit={submitHandler}>
            <input type="text" value={search} placeholder='' onChange={(e)=>setSearch(e.target.value)}
            style={{width:"300px"}}/><br/>
            <input type="Submit" className="btn btn-primary" value="Search"/>
            </form>
            {data.length>=1 ? <DisplayFood data={data}/>:null}
            </center>
            </div>
  )
}

export default FoodApi;