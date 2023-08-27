import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useMenu from "../../utils/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { addItem} from "../../utils/CartSlice";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = ()=>{
    const id = useParams();
    //creating a custom hook
    const dispatch = useDispatch();
    const {lat,lng} = useSelector((store)=>store.location.geocode);
    const restaurant = useMenu(id,lat,lng);
    const [addBtnActive,setAddBtn] = useState("hidden");
    const handleAddItem = (item)=>{
        console.log(item);
        dispatch(addItem(item));
        setAddBtn("flex")
    }
    
    console.log(restaurant);
    return !restaurant?<ShimmerMenu/>:(
        <>
        <div className="mx-10 my-8 md:flex justify-between">
            <div className="h-full">
                <h1 className="font-display text-2xl font-semibold text-white">{ restaurant[0].card.card.info.name }</h1> 
                <h3 className="text-sm font-display text-gray-400">{restaurant[0].card.card.info.locality} , { restaurant[0].card.card.info.areaName } , { restaurant[0].card.card.info.city}</h3>
                <img src={IMG_CDN_URL+restaurant[0].card.card.info?.cloudinaryImageId} className="shadow-gray-400 shadow-lg" />
            </div>
            <div>
                <h2 className="font-display text-lg font-semibold text-white">Menu Items:</h2>
                <h3 
                className="text-sm font-display text-gray-400">
                </h3>
                <div className="mt-5">
                {
                    <ul>
                    {
                        (restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards).map((item)=>(
                            <li key={item.card.info.id} className="mt-4">
                            <div className="flex justify-between">
                            <div>
                                <h2 className="font-display text-lg text-white">{item.card.info.name}</h2> 
                                <h3 className="font-display text-sm text-gray-400 mt-2 w-96">{item.card.info.description}</h3>
                                <h3 className="font-display text-sm text-gray-400 mt-2">₹ {item.card.info.price/100}</h3>
                                <button className="font-normal text-sm text-white pl-2 pr-2 rounded-md bg-violet"
                                    onClick={()=>handleAddItem(item)}
                                >Add+</button>
                           </div>
                           <div>
                           <img src={IMG_CDN_URL+item.card.info.imageId} className="w-32 h-32 shadow-gray-600 shadow-lg" alt="no image available"/>
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