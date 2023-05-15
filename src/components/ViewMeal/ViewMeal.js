import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewMeal({ meal, handleBackClick }) {
  const [nutritionFacts, setNutritionFacts] = useState([]);

  useEffect(() => {
    const getNutritionFacts = async () => {
      const ingredients = [];

      for (let i = 1; i <= 8; i++) {
        if (meal[`ingredient_${i}`] !== null) {
          ingredients.push(meal[`ingredient_${i}`]);
        }
      }
      const nutritionFactsArray = [];
      for (const ingredient of ingredients) {
        const response = await axios.post(
            "http://localhost:8080/saved-meals/ingredient",
          { food: ingredient }
        );
        nutritionFactsArray.push(response.data);
      }
      setNutritionFacts(nutritionFactsArray);
    };
    getNutritionFacts();
  }, [meal]);

  return (
    <div>
      <h2>{meal.title}</h2>
      {nutritionFacts.map((nutritionFact, index) => (
        <div key={index}>
          <h4>{nutritionFact.ingredients[0].text}</h4>
          <h4>Calories: {nutritionFact.calories}</h4>
        </div>
      ))}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}
