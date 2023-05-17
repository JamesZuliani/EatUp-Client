import React, { useState } from "react";
import RecipeLookup from "../../components/RecipeLookup/RecipeLookup";
import RandomRecipe from "../../components/RandomRecipe/RandomRecipe";
import Header from "../../components/Header/Header";
import "./RecipePage.scss";

export default function RecipePage() {
  const [showRandomRecipes, setShowRandomRecipes] = useState(false);

  const handleShowRandomRecipes = () => {
    setShowRandomRecipes(true);
  };

  const handleShowRecipeLookup = () => {
    setShowRandomRecipes(false);
  };

  return (
    <>
      <Header />
      <div className="recipe-page">
        <div className="sub-nav">
          <h4
            onClick={handleShowRecipeLookup}
            className={
              showRandomRecipes ? "sub-nav__item" : "sub-nav__item active-tab"
            }
          >
            Recipe Lookup
          </h4>
          <h4
            onClick={handleShowRandomRecipes}
            className={
              showRandomRecipes ? "sub-nav__item active-tab" : "sub-nav__item"
            }
          >
            Random Recipe
          </h4>
        </div>
        {showRandomRecipes ? <RandomRecipe /> : <RecipeLookup />}
      </div>
    </>
  );
}
