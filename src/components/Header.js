import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext)
  console.log(data, "context")


  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between items-center bg-yellow-50 shadow-lg px-8 py-4">
        <div className="logo-container text-2xl font-bold text-orange-600">
        <Link to="/">SnapBite</Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-4 sm:space-x-8">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
            {/* <li className="px-4"><Link to="/grocery">Grocery</Link></li> */}
          <li className="px-4 font-bold"><Link to="/cart">Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
