import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Offline from "./Offline";
import { FETCH_REST_URL } from "../constants";
  

  const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(()=>{
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data = await fetch(FETCH_REST_URL);
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

    // const handleScroll=()=>{
    //   console.log("scrollllll");
    // }

    // useEffect(() => {
    //   window.onscroll = function(ev) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         handleScroll();
    //     }
    // };
    // }, []);

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
      </>
    );
  };
  
export default Body;