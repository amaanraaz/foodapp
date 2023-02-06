import { IMG_CDN_URL, restrauntList } from "../constants";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
             IMG_CDN_URL + cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  
  const Body = () => {
    return (
      <div className="restaurant-list">
        {restrauntList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    );
  };
  
export default Body;