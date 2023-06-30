import React, { useEffect, useState } from 'react'

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
  
  const [city,selectCity] = useState('Noida');

  const handleCityName = (e)=>{
    selectCity(e.target.value);
  }

  useEffect(()=>{
    getGeoCodes();
  },[city]);

 async function getGeoCodes(){
  const data = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyC47iRhh3By8rUFFWFFMc8RxBYNlO0Y_wA");
  const json = await data.json();
  console.log(json.results[0].geometry.location);
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