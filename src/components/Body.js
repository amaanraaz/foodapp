import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

  function filterData (searchText,restaurants){
    const filterData = restaurants.filter((restaurant)=>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
    console.log(filterData);
    return filterData;
  }

  const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json.data.cards[2].data.data.cards);
      setFilteredRestaurants(json.data.cards[2].data.data.cards);
    }

    // if(filteredRestaurants.length===0)
    //   return <h1>No matched restaurant found!! </h1>

    return (restaurants.length===0)? <Shimmer /> : (
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
          setFilteredRestaurants(data);
        }
        }>Search</button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };
  
export default Body;