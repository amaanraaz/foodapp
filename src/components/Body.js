import { IMG_CDN_URL, restrauntList } from "../constants";
import { useState } from "react";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
             IMG_CDN_URL + cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };

  function filterData (searchText,restaurants){
    const filterData = restaurants.filter((restaurant)=>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
    console.log(filterData);
    return filterData;
  }


  const Body = () => {
    const [restaurants,setRestaurants] = useState(restrauntList);
    const [searchText,setSearchText] = useState("");
    return (
      <>
      <div className="search-bar">
        <input type="text" className="search-input" 
        placeholder="Search" value={searchText}
        onChange={
          (e)=>{
            setSearchText(e.target.value);
          }
        }
        />
        <button className="search-btn" onClick={()=>{
          const data = filterData(searchText,restaurants);
          setRestaurants(data);
        }
        }>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };
  
export default Body;