import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useMenu from "../../utils/useMenu";
import { useDispatch } from "react-redux";
import { addItem} from "../../utils/CartSlice";
import { useState } from "react";

const RestaurantMenu = ()=>{
    const id = useParams();
    //creating a custom hook
    const restaurant = useMenu(id);
    const dispatch = useDispatch();
    // const [price,setPrice] = useState(0);
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return !restaurant?<Shimmer/>:(
        <>
        <div className="mx-10 my-8 flex justify-between">
            <div className="">
                <h1 className="font-display text-2xl font-semibold text-white">{ restaurant.name }</h1> 
                <h3 className="text-sm font-display text-gray-400">{restaurant.area} , {restaurant.city}</h3>
                <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} className="shadow-gray-400 shadow-lg" />
            </div>
            <div className="ml-44">
                <h2 className="font-display text-lg font-semibold text-white">Menu Items:</h2>
                <h3 
                className="text-sm font-display text-gray-400">
                {Object.keys(restaurant.menu.items).length} items recommended
                </h3>
                <div className="mt-5">
                {
                    <ul>
                    {
                        Object.values(restaurant.menu.items).map((item)=>(
                            <li key={item.id} className="mt-4">
                            <div className="flex justify-between">
                            <div>
                                <h2 className="font-display text-lg text-white">{item.name}</h2> 
                                <h3 className="font-display text-sm text-gray-400 mt-2 w-96">{item.description}</h3>
                                <h3 className="font-display text-sm text-gray-400 mt-2">₹{item.price/100}</h3>
                                <button className="font-normal text-sm text-white pl-2 pr-2 rounded-md bg-violet"
                                    onClick={()=>handleAddItem(item)}
                                >Add+</button>
                           </div>
                           <div>
                           <img src={IMG_CDN_URL+item.cloudinaryImageId} className="w-32 h-32 shadow-gray-600 shadow-lg" alt="no image available"/>
                           </div>
                           </div>
                           <div className="h-[0.8] bg-gray-400 mt-3"></div>
                        </li>
                    ))
                    }
                    </ul>
                }
                </div>
            </div>
        </div>
        </>
    )
}
export default RestaurantMenu