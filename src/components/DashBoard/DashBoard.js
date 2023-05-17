import { Link } from "react-router-dom";
import Bowl from "../../assests/images/bowl-svgrepo-com.svg";
import Meal from "../../assests/images/healthy-nutrition-svgrepo-com.svg";
import Soon from "../../assests/images/nutrionist-svgrepo-com.svg";
import "./DashBoard.scss";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Welcome to EatUp!</h1>
      <div className="feature-list">
        <div className="feature-container">
          <Link to="/recipes" className="sub-title__link">
            <h3 className="sub-title">The Recipes page!</h3>
          </Link>
          <div className="feature">
            <div className="feature__text">
              <p className="feature__paragraph">
                The Recipe Lookup feature is perfect for making use of
                ingredients you have on hand. Give this feature a try by
                searching a couple of ingredients!
              </p>
              <p className="feature__paragraph">
                The Random Recipe feature can be a great tool for you to use to
                help get those creative juices flowing. Click the button for new
                results!
              </p>
            </div>
            <img className="feature__image" src={Bowl} alt="feature" />
          </div>
        </div>
        <div className="feature-container">
          <Link to="/saved-meals" className="sub-title__link">
            <h3 className="sub-title">The Saved Meals page!</h3>
          </Link>
          <div className="feature">
            <img className="feature__image" src={Meal} alt="feature" />
            <div className="feature__text">
              <p className="feature__paragraph">
                When you're thinking of making a new meal or following a recipe,
                try out our Nutrition Fact Finder feature to be fully informed!
              </p>
              <p className="feature__paragraph">
                Once you're satisfied with how your meal looks on paper, give it
                a title and save it to your list for later!
              </p>
            </div>
          </div>
        </div>
        <div className="feature-container">
          <Link to="/journal" className="sub-title__link">
            <h3 className="sub-title">The Journal Page!</h3>
          </Link>
          <div className="feature">
            <div className="feature__text feature__text--journal">
              <p className="feature__paragraph">
                The daily journal feature allows you to log your meals, and
                produces dynamic charts for you to understand your daily uptake!
              </p>
              <img className="feature__image" src={Soon} alt="feature" />
              <p className="feature__paragraph">
                This feature is coming soon in the phase-2 rollout, stay tuned
                for more nutrition focused content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
