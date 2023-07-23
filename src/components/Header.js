import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import logo from "../assets/fooApp.png";
import { useSelector } from "react-redux";
import Location from "./Location";
import {GiHamburgerMenu} from "react-icons/Gi"


const Title = () => (
    <a href="/">
      <img
        className="w-20"
        alt="logo"
        src={logo}
      />
    </a>
  );
  
const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  const isOnline = useOnline();
    return (
      <div className="md:flex justify-between bg-gradient-to-r from-pink to-violet md:h-20 shadow-xl items-center rounded-b-xl">
        <Title />
        <Location />
        {/* <GiHamburgerMenu /> */}
        <div >
          <ul className="hidden md:flex justify-between ">
            <Link to="/">
              <li className="mx-10 font-display text-lg font-semibold">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-10 font-display text-lg font-semibold">About</li>
            </Link>
            <Link to="/contact">
              <li className="mx-10 font-display text-lg font-semibold">Contact</li>
            </Link>
            <Link to="/faq">
              <li className="mx-10 font-display text-lg font-semibold">FAQ's</li>
            </Link>
          </ul>
        </div>
          <h1>{isOnline?"✅":"🔴"}</h1>
        <Link to="/cart">
          <h3 className="text-white mr-7 fon
          t-display">Cart-{cartItems.length}</h3>
        </Link>
        </div>
    );
  };

export default Header;