import { Link, NavLink } from "react-router-dom";
import Logo from "../../assests/images/grapes-svgrepo-com.svg";
import "./Header.scss";

export default function Header({ handleLogOut }) {
  const handleLogOutClick = () => {
    localStorage.removeItem("token");
    if (handleLogOut) {
      handleLogOut();
    }
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-wrapper">
          <Link to="/" className="header__brand">
            <img className="header__logo" src={Logo} alt="header logo" />
            <h3 className="header__title">EatUp!</h3>
          </Link>
        </div>
        <nav className="nav">
          <NavLink to="/recipes" className="nav__item">
            <h3 className="nav__link">Recipe Lookup</h3>
          </NavLink>
          <NavLink to="/saved-meals" className="nav__item">
            <h3 className="nav__link">Saved Meals</h3>
          </NavLink>
          <NavLink to="/journal" className="nav__item">
            <h3 className="nav__link">Daily Journal</h3>
          </NavLink>
        </nav>
      </div>
      <Link to="/" className="logout-link">
        <div className="logout" onClick={handleLogOutClick}>
          logout
        </div>
      </Link>
    </header>
  );
}
