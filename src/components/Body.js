import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Offline from "./Offline";
import { FETCH_REST_URL } from "../constants";
import { useSelector } from "react-redux";
import store from "../../utils/store";
  

  const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const {lat,lng} = useSelector((store)=>store.location.geocode);
    // console.log(lat,lng);

    useEffect(()=>{
      setRestaurants([]);
      getRestaurants();
    },[lat,lng]);

    async function getRestaurants(){
      // const data = await fetch(FETCH_REST_URL);
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=+"+lat+"&lng="+lng+"&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json.data.cards[2].data.data.cards);
      setFilteredRestaurants(json.data.cards[2].data.data.cards);
    }
    const isOnline = useOnline();
    if(!isOnline)return(
      <>
        <Offline />
      </>
    )
    const handleFocus = ()=>{
      setFilteredRestaurants(restaurants);
    }

    const handleSearch = (text)=>{      
      const data = filterData(text,restaurants);
          setFilteredRestaurants(data);
    }

   
    // async function getNewRestaurant(){
    //   const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat="+lat+"&lng="+lng+"&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
    //   const json = await data.json();
    //   // console.log(json);
    //   console.log(json.data.cards);
    //   setRestaurants(json.data.cards);
    //   setFilteredRestaurants(json.data.cards);
    // }



    return (restaurants.length===0)? <Shimmer /> : (
      <>
      <div className="flex justify-center my-2">
        <input type="text" className="w-80 rounded-l-lg bg-gray-100 font-display placeholder:text-sm outline-violet " 
        placeholder="Search for restaurant" 
        onChange={
          (e)=>{
            handleSearch(e.target.value);
          }
        }
        onBlur = {handleFocus}
        />
      </div>

      <div className="flex justify-center flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id} >
                <RestrauntCard {...restaurant.data} />
            </Link>
          )
        })}
      </div>
      {/* <button className="text-white" onClick={handleNext}>Next </button> */}
      </>
    );
  };
  
export default Body;