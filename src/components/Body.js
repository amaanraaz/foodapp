import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Offline from "./Offline";
import { useSelector } from "react-redux";
  

  const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [offset,setOffset] = useState(0);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const {lat,lng} = useSelector((store)=>store.location.geocode);

    // restaurant displays
    useEffect(()=>{
      setRestaurants([]);
      if(offset<15){
        setFilteredRestaurants([]);
      }
      getRestaurants();
    },[lat,lng,offset]);

    // for infinite scroll
    useEffect(()=>{
      window.addEventListener("scroll",handleInfiniteScroll);
      return ()=> window.removeEventListener("scroll",handleInfiniteScroll);
    },[]);

    const handleInfiniteScroll = ()=>{
      // console.log("scroll height "+ document.documentElement.scrollHeight);
      // console.log("view ht "+ window.innerHeight);
      // console.log("scrolltop" + document.documentElement.scrollTop);
      if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
        setOffset((prev)=>prev+15);
      }
    }

    async function getRestaurants(){
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=+"+lat+"&lng="+lng+"&offset="+offset+"&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
      const json = await data.json();
      setRestaurants((prev)=>[...prev,...json.data.cards]);
      setFilteredRestaurants((prev)=>[...prev,...json.data.cards]);
      console.log(restaurants,filteredRestaurants);
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
            <Link to={"/restaurant/"+restaurant.data.data.id} key={restaurant.data.data.id} >
                <RestrauntCard {...restaurant.data.data} />
            </Link>
          )
        })}
      </div>
      </>
    );
  };
  
export default Body;