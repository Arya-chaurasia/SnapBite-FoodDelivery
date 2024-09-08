import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategorySlider from "./Slider/CategorySlider";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5820607&lng=77.3109035&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("API Response:", json);

    const categoriesData = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
    setCategories(categoriesData);

    const restaurantsData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestraunt(restaurantsData);
    setFilteredRestaurant(restaurantsData);
  };

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };

  if (onlineStatus === false)
    return <h1>Looks like you are offline!! Please check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="filter flex flex-col sm:flex-row gap-4 mb-4">
        <div className="search flex flex-col sm:flex-row items-center gap-4 bg-white p-6 shadow-lg rounded-lg">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition w-full sm:w-[800px]"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-button flex items-center p-4 bg-white shadow-md rounded-lg">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={handleFilterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <CategorySlider categories={categories} />

      <div className="flex flex-wrap border">
  {filteredRestaurant.map((restaurant) => {
    // Log the restaurant object to check its content
    console.log("Restaurant Object:", restaurant);
    
    return (
      <Link
        key={restaurant.info.id}
        to={"/restaurants/" + restaurant.info.id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
      >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <RestaurantCardPromoted resData={restaurant} />
        </div>
      </Link>
    );
  })}
</div>
    </div>
  );
};

export default Body;
