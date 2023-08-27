import { useSelector } from "react-redux";
import ItemAtCartPage from "./ItemAtCartPage";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const price = useSelector((store)=>store.cart.price);
    console.log(cartItems);

    return(
        <div className="h-fit">
        <div>
        { cartItems.map((item)=>(
            <ItemAtCartPage key={item.card.info.id} {...item.card.info} />
        ))}        </div>
        <div className="bg-yellow-400">
        <h2 className="text-black font-display text-2xl mt-5 text-right mr-36">Total price- {price}</h2></div>
        </div>
    )
}
export default Cart;