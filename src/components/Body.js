import { IMG_CDN_URL, restrauntList } from "../constants";
import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";

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
    useEffect(()=>{
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setRestaurants(json.data.cards[2].data.data.cards)
    }

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