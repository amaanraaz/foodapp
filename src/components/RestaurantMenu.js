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
    const {restaurantInfo,restaurantMenuDetails} = useMenu(id,lat,lng);
    const [addBtnActive,setAddBtn] = useState([]);

    const handleAddItem = (item)=>{
        console.log(item);
        dispatch(addItem(item));
        setAddBtn([...addBtnActive,item.card.info.id]);
    }

    return !restaurantInfo?<ShimmerMenu/>:(
        <>
        <div className="mx-10 my-8 md:flex justify-between">
            <div className="h-full">
                <h1 className="font-display text-2xl font-semibold text-pink">{ restaurantInfo.name }</h1> 
                <h3 className="text-sm font-display text-violet">{restaurantInfo.locality} , { restaurantInfo.areaName } , { restaurantInfo.city}</h3>
                <img src={IMG_CDN_URL+restaurantInfo?.cloudinaryImageId} className="shadow-gray-400 shadow-lg" />
            </div>
            <div className="mx-5">
                <h2 className="font-display text-lg font-bold text-violet">Menu Items:</h2>
                <ul>
                    {
                        restaurantMenuDetails.map((menu,index)=>{
                            if('itemCards' in menu.card.card){
                                return <div className="" key={index}>
                                    <h1 className="font-display text-xl text-pink font-semibold">{menu.card.card.title}</h1>
                                    {
                                        menu.card.card.itemCards.map((item)=>(
                                            <li key={item.card.info.id} className="mt-4">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h2 className="font-display text-lg text-pink">{item.card.info.name}</h2> 
                                                        <h3 className="font-display text-sm text-gray-500 mt-2 w-96">{item.card.info.description}</h3>
                                                        {
                                                            item.card.info.price
                                                            ?<h3 className="font-display text-sm text-violet mt-2">₹ {item.card.info.price/100}</h3>
                                                            :<h3 className="font-display text-sm text-violet mt-2">₹ {item.card.info.defaultPrice/100}</h3>
                                                        }
                                                        <button className={`font-normal text-sm pl-2 pr-2 rounded-md
                                                            ${addBtnActive.includes(item.card.info.id)?'bg-gray-500 text-black':'bg-violet text-white'}`}
                                                            onClick={()=>{
                                                            handleAddItem(item)
                                                            }} disabled={addBtnActive.includes(item.card.info.id)}
                                                        >{addBtnActive.includes(item.card.info.id)?'Added to cart':'Add+'}</button>
                                                    </div>
                                                    <div>
                                                        <img src={IMG_CDN_URL+item.card.info.imageId} className="w-32 h-32 shadow-gray-600 shadow-lg" alt="no image available"/>
                                                    </div>
                                                </div>
                                                <div className="h-[0.8] bg-gray-400 mt-3"></div>
                                            </li>                                            
                                        ))
                                    }
                                </div>
                            }
                        })
                    }
                </ul>


            </div>
        </div>
        </>
    )
}
export default RestaurantMenu