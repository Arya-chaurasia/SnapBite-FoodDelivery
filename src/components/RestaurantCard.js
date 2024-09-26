import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId = '',
    name = 'No name available',
    avgRating = 'N/A',
    cuisines = [],
    costForTwo = 'Cost not available',
    sla = {},
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="rounded-lg w-full h-[160px] object-cover"
        alt={name || "Restaurant Image"}
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => (e.target.src = 'fallback-image-url')} // Fallback image
      />
      <div className="mt-3">
        <h3 className="font-bold text-lg text-gray-800 hover:text-orange-600 transition duration-200">{name}</h3>
        <h4 className="text-gray-600 text-sm mt-1">
          {cuisines.length > 0 ? cuisines.join(", ") : 'No cuisines available'}
        </h4>
        <div className="flex justify-between items-center mt-2">
          <h4 className={`text-sm ${avgRating !== 'N/A' ? 'text-green-600' : 'text-red-500'} font-semibold`}>
            {avgRating !== 'N/A' ? `${avgRating} ★` : 'Rating not available'}
          </h4>
          <h4 className="text-gray-600 text-sm">{costForTwo}</h4>
        </div>
        <h4 className="text-gray-500 text-sm mt-1">{sla?.slaString || 'Delivery time not available'}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full top-2 right-2 shadow-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
