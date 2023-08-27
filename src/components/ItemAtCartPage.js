import { IMG_CDN_URL } from "../constants";
const ItemAtCartPage = ({name,price,imageId})=>{
    return(
    <div className="flex justify-between mt-5 mx-44 bg-slate-400 p-5">
        <div>
        <h1 className="text-white">{name}</h1>
        <h3 className="text-white">{price/100}</h3>
        </div>
        <div>
        <img src={IMG_CDN_URL+imageId} className="w-32 h-24"/>
        </div>
    </div>)
}
export default ItemAtCartPage;