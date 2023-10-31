import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGeocode } from '../../utils/LocationSlice';

function Location() {
  const majorCitiesIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Varanasi",
    "Noida",
    "Surat",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Patna",
    "Vadodara"
  ];
  const dispatch = useDispatch();
  
  const [city,selectCity] = useState('Noida');

  const handleCityName = (e)=>{
    selectCity(e.target.value);
  }

  useEffect(()=>{
    getGeoCodes();
  },[city]);

 async function getGeoCodes(){
  const data = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key="+process.env.REACT_APP_API_KEY);
  const json = await data.json();
  //result as lat and long
  dispatch(addGeocode(json.results[0].geometry.location))
  // console.log(json.results[0].geometry.location);
 }

  return (

    <div>
      <select className='bg-slate-800 px-2 py-1 text-zinc-400' value={city} onChange={handleCityName}>
        <option className='text-zinc-400'>select your location</option>
        {
          majorCitiesIndia.map((city)=>
            <option className='text-zinc-400'>{city}</option>
          )
        }
      </select>
    </div>
  )
}

export default Location