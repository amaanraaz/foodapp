import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../src/constants";

const useMenu = (id)=>{
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getMenu();
    },[]);
    
    async function getMenu(){
        const data = await fetch(FETCH_MENU_URL+id.id);
        const json = await data.json();
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useMenu;