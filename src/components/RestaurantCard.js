import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("RestaurantCard Props:", props);

  const {
    cloudinaryImageId = '',
    name = 'No name available',
    avgRating = 'N/A',
    cuisines = [],
    costForTwo = 'Cost not available',
    sla = {},
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] lg:h-[30rem] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt={name || "Restaurant Image"}
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => e.target.src = 'fallback-image-url'} // Optional fallback image URL
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.length > 0 ? cuisines.join(", ") : 'No cuisines available'}</h4>
      <h4>{avgRating !== 'N/A' ? `${avgRating} stars` : 'Rating not available'}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString || 'Delivery time not available'}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
