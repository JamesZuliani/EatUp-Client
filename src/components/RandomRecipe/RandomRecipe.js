import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <button onClick={getRandomRecipes}>Get Random Recipes!</button>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} />
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.url}>View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}
