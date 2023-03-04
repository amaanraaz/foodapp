import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import logo from "../assets/fooApp.png";
import { useSelector } from "react-redux";

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
  console.log(cartItems);
  const isOnline = useOnline();
    return (
      <div className="flex justify-between bg-gradient-to-r from-pink to-violet h-20 shadow-xl items-center rounded-b-xl">
        <Title />
        <div >
          <ul className="flex justify-between ">
            <Link to="/">
              <li className="mx-10 font-display text-lg font-semibold">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-10 font-display text-lg font-semibold">About</li>
            </Link>
            <Link to="/contact">
              <li className="mx-10 font-display text-lg font-semibold">Contact</li>
            </Link>
            <Link to="/accordian">
              <li className="mx-10 font-display text-lg font-semibold">Accordian</li>
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