import React, { useState } from "react";
import RecipeLookup from "../../components/RecipeLookup/RecipeLookup";
import RandomRecipe from "../../components/RandomRecipe/RandomRecipe";

export default function RecipePage() {
  const [showRandomRecipes, setShowRandomRecipes] = useState(false);

  const handleShowRandomRecipes = () => {
    setShowRandomRecipes(true);
  };

  const handleShowRecipeLookup = () => {
    setShowRandomRecipes(false);
  };
  
  return (
    <div>
      <button onClick={handleShowRecipeLookup}>Recipe Lookup</button>
      <button onClick={handleShowRandomRecipes}>Random Recipe</button>
      {showRandomRecipes ? <RandomRecipe /> : <RecipeLookup />}
    </div>
  );
}
