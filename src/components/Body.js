import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Offline from "./Offline";
import { useSelector } from "react-redux";
import MessageCard from "./MessageCard";
  

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
      if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight-100){
        setOffset((prev)=>prev+20);
      }
    }

    async function getRestaurants(){
      // console.log(lat,lng);
      const data = await fetch(`https://food-app-server-production-5648.up.railway.app/api/swiggy?lat=${lat}&lng=${lng}&offset=${offset}`)
      const json = await data.json();
      if(json.data.cards[2].card.card.gridElements){
        setRestaurants((prev)=>[...prev,...json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants]);
        setFilteredRestaurants((prev)=>[...prev,...json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants]);
      }
      else{
        setRestaurants((prev)=>[...prev,...json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants]);
        setFilteredRestaurants((prev)=>[...prev,...json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants]);
      }
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

    return (restaurants.length===0)? <Shimmer /> :(filteredRestaurants[0].cardType==="messageCard"?<MessageCard />: (
      <>
      <div className="flex justify-center my-2">
        <input type="text" className="w-80 rounded-lg bg-gray-100 font-display placeholder:text-sm outline-violet border border-black px-4 " 
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
            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} >
                <RestrauntCard {...restaurant.info} />
            </Link>
          )
        })}
      </div>
      </>
    ));
  };
  
export default Body;