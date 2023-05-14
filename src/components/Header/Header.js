import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assests/images/grapes-svgrepo-com.svg"

export default function Header () {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-wrapper">
                    <Link to ="/" className="header__brand">
                        <img className="header__logo" src={Logo} alt="header logo" />
                        <h3 className="header__title">EatUp!</h3>
                    </Link>
                </div>
                <nav className="nav">
                    <NavLink to="/recipes" className="nav__item">
                        <h3 className="nav__link">Recipe Page</h3>
                    </NavLink>
                    <NavLink to="/saved-meals" className="nav__item">
                        <h3 className="nav__link">Saved Meals Page</h3>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}