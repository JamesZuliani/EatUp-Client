import { Link } from "react-router-dom";
import "./AuthHeader.scss";
import Logo from "../../assests/images/grapes-svgrepo-com.svg";

export default function AuthHeader() {

  return (
    <header className="header--auth">
      <div className="header__container--auth">
        <div className="header__logo-wrapper--auth">
          <Link to="/" className="header__brand--auth">
            <img className="header__logo--auth" src={Logo} alt="header logo" />
            <h3 className="header__title--auth">EatUp!</h3>
          </Link>
        </div>
      </div>
    </header>
  );
}
