import onlypanslogo from "../assets/onlypanslogo.png";
import carticon from "../assets/shoppingcart.svg";
import {Link} from "react-router-dom";
export const Header =()=>{
    return(
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={onlypanslogo} alt="logo" className="w-40 h/40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items=center justify-between space-x-10"></div>
                    <Link to="/" ClassName="text-xl">Home</Link>
                    <Link to="#about"ClassName="text-xl">About</Link>
                    <div className="flex items-center justify-center space-x-4">
                        <Link to="/cart">
                            <img src={carticon} alt="carticon"/>
                        </Link>
                        <Link to ="/login">Log In</Link>
                        <Link to="/register">Sign Up</Link>
                    </div>
            </div>
        </nav>
    )
}