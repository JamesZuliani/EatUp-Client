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
          <h4 onClick={handleShowRecipeLookup} className="sub-nav__item">
            Recipe Lookup
          </h4>
          <h4 onClick={handleShowRandomRecipes} className="sub-nav__item">
            Random Recipe
          </h4>
        </div>
        {showRandomRecipes ? <RandomRecipe /> : <RecipeLookup />}
      </div>
    </>
  );
}
