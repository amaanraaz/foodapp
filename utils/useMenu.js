import { useState,useEffect } from "react";

const useMenu = (id,lat,lng)=>{
    const [restaurant,setRestaurant] = useState(null);
    const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="+id.id+"&submitAction=ENTER"
    useEffect(()=>{
        getMenu();
    },[]);
    
    async function getMenu(){
        const data = await fetch(FETCH_MENU_URL);
        const json = await data.json();
        setRestaurant(json.data.cards);
    }
    return restaurant;
}

export default useMenu;