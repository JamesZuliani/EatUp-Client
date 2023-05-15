import React, { useState } from "react";
import axios from "axios";
import "./RecipeLookup.scss";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lookup">
      <form onSubmit={handleRecipeSearch} className="lookup__form">
        <label htmlFor="ingredients" className="lookup__label">
          Enter ingredients (comma-separated):
        </label>
        <input
          type="text"
          id="ingredients"
          placeholder="Ex. Chicken, Parmesan, Tomato Sauce"
          className="lookup__input"
          onChange={handleIngredientChange}
        />
        <button type="submit" className="lookup__submit">
          Search Recipes
        </button>
      </form>
      <div>
        {recipes.length > 0 ? (
          <div className="suggestion-container">
            {recipes.map((recipe, index) => {
              return (
                <div key={index} className="suggestion">
                  <h3 className="suggestion__title">{recipe.title}</h3>
                  <img className="suggestion__image" src={recipe.image} alt="suggestion recipe" />
                  <p className="suggestion__ingredients">
                    <span className="bold">Ingredients:</span>{" "}
                    {recipe.ingredients
                      .map((ingredient) => ingredient.food)
                      .join(",  ")}
                  </p>
                  <a href={recipe.url} target="_blank" rel="noreferrer" className="suggestion__link">
                    View Recipe
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="suggestion__instruction">Please input a new ingredient name above to display recipe suggestion cards!</p>
        )}
      </div>
    </div>
  );
}
