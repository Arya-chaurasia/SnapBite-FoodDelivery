import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";  // No need to dispatch login from here

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const authStatus = useSelector((store) => store.auth.isAuthenticated);
  const cartItems = useSelector((store) => store.cart.items);

  const handleAuthClick = () => {
    if (authStatus) {
      dispatch(logout()); // Logout if the user is authenticated
    } else {
      navigate("/login"); // Navigate to the login page when login is clicked
    }
  };

  return (
    <header className="bg-white shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-orange-600 hover:underline">
          <Link to="/">SnapBite</Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-orange-600 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-600 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition duration-300">
            Contact Us
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-orange-600 font-bold transition duration-300">
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        <button
          className="ml-6 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          onClick={handleAuthClick}
        >
          {authStatus ? "Logout" : "Login"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 bg-gray-100 p-4 rounded-md shadow-md">
          <Link
            to="/"
            className="block text-gray-700 py-2 hover:text-orange-600 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 py-2 hover:text-orange-600 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 py-2 hover:text-orange-600 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            className="block relative text-gray-700 py-2 font-bold hover:text-orange-600 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
