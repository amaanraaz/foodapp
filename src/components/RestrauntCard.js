import { IMG_CDN_URL } from "../constants";
const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    avgRating,
  }) => {
    return (
      <>
      <div className="w-72 h-80 m-5 bg-gradient-to-br from-violet to-pink p-5
       shadow-gray-600 shadow-md rounded-md">
        <img className="shadow-sm shadow-black"
          src={
             IMG_CDN_URL + cloudinaryImageId
          }
        />
        <div className="my-4">
          <div className="flex justify-between">
            <h2 className="text-white font-display font-semibold ">{name}</h2>
           <div> {
              avgRating>=3
              ?(avgRating>=4?<h2 className="px-1 bg-green-700 rounded-md text-sm text-white">{avgRating}*</h2>
              :<h2 className="px-1 bg-yellow-400 rounded-md text-sm text-white">{avgRating}*</h2>
              )
              :<h2 className="px-1 bg-red-700 rounded-md text-sm text-white">{avgRating}*</h2>
            }</div>
          </div>
        <h3 className="text-white font-display text-sm my-1 ">{cuisines.join(", ")}</h3>
        <h4 className="text-white font-display text-xs my-1">{lastMileTravelString}</h4>
        </div>
      </div>
      </>
    );
  };
  export default RestrauntCard;