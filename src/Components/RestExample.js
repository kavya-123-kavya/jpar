import {useEffect,useState} from 'react';
import axios from 'axios';
function RestExample() {
    const url='https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        axios.get(url).then(res=>{
            setCountries(res.data.countries);
        })
    },[])
  return (
    <div>
          <h1>List of Countries</h1>
        <ul>
            {countries.map(c=><li key={c}>{c}</li>)}
        </ul>
    </div>
  )
}

export default RestExample