import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useMenu from "../../utils/useMenu";

const RestaurantMenu = ()=>{
    const id = useParams();
    //creating a custom hook
    const restaurant = useMenu(id);
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