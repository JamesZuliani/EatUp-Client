import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomRecipe.scss"

export default function RandomRecipe() {
  const [recipes, setRecipes] = useState([]);

  const getRandomRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/recipes");
      setRecipes(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomRecipes();
    
  }, []);

  return (
    <div className="recipe-container">
      <h4 onClick={getRandomRecipes} className="recipe-container__randomizer">Click to Generate Random Recipes!</h4>
      <div className="card-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2 className="recipe__title">{recipe.title}</h2>
            <img src={recipe.image} alt="recipe image" className="recipe__image"/>
            <ul className="recipe__item-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="recipe__item">{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.url} target="_blank" className="recipe__link">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}
