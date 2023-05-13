import React, { useState } from "react";
import axios from "axios";

export default function RecipeLookup() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value.split(","));
  };

  const handleRecipeSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/recipes/search",
        {
          ingredients,
        }
      );
      setRecipes(response.data);
      console.log(response.data);
      console.log("response data here");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Recipe Lookup</h1>
      <form onSubmit={handleRecipeSearch}>
        <label htmlFor="ingredients">
          Enter ingredients (comma-separated):
        </label>
        <input type="text" id="ingredients" onChange={handleIngredientChange} />
        <button type="submit">Search Recipes</button>
      </form>
      <div>
        {recipes.length > 0 ? (
          <div>
            {recipes.map((recipe, index) => {
              return (
                <div key={index}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.image} />
                  <p>
                    Ingredients:{" "}
                    {recipe.ingredients
                      .map((ingredient) => ingredient.food)
                      .join(", ")}
                  </p>
                  <a href={recipe.url}>View Recipe</a>
                </div>
              );
            })}
          </div>
        ) : (
          <p>please input a new ingredient name</p>
        )}
      </div>
    </>
  );
}
