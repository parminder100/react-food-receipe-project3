import logo from "../../Assets/img/logo.png"
import "../Header/Header.css";
import Search from "../Search/Search";

const Header = () =>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="row align-items-baseline">
                        <div className="col-sm-4">
                            <a href="/"><img className="logo" src={logo} alt="logo.png" /></a>
                        </div>
                        <div className="col-sm-8">
                            <ul className="nav-contact">
                                <li><Search /></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;