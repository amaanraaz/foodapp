import { useState,useEffect } from "react";

const useMenu = (id,lat,lng)=>{
    const [restaurantMenuDetails,setRestaurantMenuDetails] = useState(null);
    const [restaurantInfo,setRestaurantInfo] = useState();
    // const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="+id.id+"&submitAction=ENTER"
    const FETCH_MENU_URL = `https://food-app-server-production-5648.up.railway.app/api/menu?lat=${lat}&lng=${lng}&restaurantId=${id.id}`
    useEffect(()=>{
        getMenu();
    },[]);
    
    async function getMenu(){
        const data = await fetch(FETCH_MENU_URL);
        const json = await data.json();
        // console.log(json);
        setRestaurantInfo(json.data.cards[0].card.card.info);
        setRestaurantMenuDetails(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        // console.log(restaurant);
    }
    return {restaurantInfo,restaurantMenuDetails};
}

export default useMenu;