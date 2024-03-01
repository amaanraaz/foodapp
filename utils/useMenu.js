import { useState,useEffect } from "react";

const useMenu = (id,lat,lng)=>{
    const [restaurant,setRestaurant] = useState(null);
    // const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="+id.id+"&submitAction=ENTER"
    const FETCH_MENU_URL = `https://food-app-server-production-5648.up.railway.app/api/menu?lat=${lat}&lng=${lng}&restaurantId=${id.id}`
    useEffect(()=>{
        getMenu();
    },[]);
    
    async function getMenu(){
        const data = await fetch(FETCH_MENU_URL);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data.cards);
        // console.log(restaurant);
    }
    return restaurant;
}

export default useMenu;