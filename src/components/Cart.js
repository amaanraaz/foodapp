import { useSelector } from "react-redux";
import ItemAtCartPage from "./ItemAtCartPage";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const price = useSelector((store)=>store.cart.price);
    console.log(cartItems);

    return(
        <div className="h-full">
        <div>
        { cartItems.map((item)=>(
            <ItemAtCartPage key={item.card.info.id} {...item.card.info} />
        ))}        </div>
        <div className="bg-gradient-to-r from-pink to-violet w-fit mt-5 ml-[70%] p-2">
        <h2 className="text-black font-display text-2xl  text-center mr-36">Total price- {price}</h2></div>
        </div>
    )
}
export default Cart;