import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const Header = () => {
  const {isLoggedIn}=useAppContext();   //now the component has the access to the showToast property //here we are using the useAppContext hook to use the context which we created in AppContext.tsx
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">PrimeHotel.com</Link>
        </span>
        <span className="flex space-x-2">
              {isLoggedIn ? <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/my-hotels">My Hotels</Link>
              <button>Sign Out</button>
              </> : <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">
                Sign In
              </Link>}
        </span>
      </div>
    </div>
  );
};

export default Header;

//the jsx code is same as the tsx code above