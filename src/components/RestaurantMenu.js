import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const id = useParams();
    // console.log(id.id);
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getMenu();
    },[]);
    
    async function getMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId="+id.id);
        const json = await data.json();
        // console.log(json);
        setRestaurant(json.data);
    }
    return !restaurant?<Shimmer/>:(
        <>
           <h1>{ restaurant.name }</h1> 
           <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
           <h3>{restaurant.Area}</h3>
           <h3>{restaurant.city}</h3>
           <h2>Menu:</h2>
           {
            <ul>
                {
                    Object.values(restaurant.menu.items).map((item)=>(
                        <li key={item.id}>
                            {item.name}
                            <img src={IMG_CDN_URL+item.cloudinaryImageId} style={{height:"100px",width:"100px"}}/>
                        </li>
                    ))
                }
            </ul>
           }
        </>
    )
}
export default RestaurantMenu