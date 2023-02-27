import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Offline from "./Offline";
  

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
    const isOnline = useOnline();
    if(!isOnline)return(
      <>
        <Offline />
      </>
    )

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
          return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id} >
                <RestrauntCard {...restaurant.data} />
            </Link>
          )
        })}
      </div>
      </>
    );
  };
  
export default Body;