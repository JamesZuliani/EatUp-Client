import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewMeal.scss";

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
          `${process.env.REACT_APP_BACKEND}/saved-meals/ingredient`,
          { food: ingredient }
        );
        nutritionFactsArray.push(response.data);
      }
      setNutritionFacts(nutritionFactsArray);
    };
    getNutritionFacts();
  }, [meal]);

  return (
    <div className="view-meal">
      <h2 className="view-meal__title">{meal.title}</h2>
      <div className="view-meal__list">
        {nutritionFacts.map((nutritionFact, index) => (
          <div className="view-meal__ingredient" key={index}>
            <h4 className="view-meal__subtitle">{nutritionFact.ingredients[0].text}</h4>
            <div className="ingredient-list">
              <p className="ingredient-list__item">
                <span className="ingredient-list__item--bold">Calories:</span>{" "}
                {nutritionFact.calories}
              </p>
              <p className="ingredient-list__item">
                <span className="ingredient-list__item--bold">Carbs:</span>{" "}
                {nutritionFact.totalDaily.CHOCDF.quantity.toFixed(2)}
                {nutritionFact.totalDaily.CHOCDF.unit}
              </p>
              <p className="ingredient-list__item">
                <span className="ingredient-list__item--bold">Protein:</span>{" "}
                {nutritionFact.totalDaily.PROCNT.quantity.toFixed(2)}
                {nutritionFact.totalDaily.PROCNT.unit}
              </p>
              <p className="ingredient-list__item">
                <span className="ingredient-list__item--bold">Fat:</span>{" "}
                {nutritionFact.totalDaily.FAT.quantity.toFixed(2)}
                {nutritionFact.totalDaily.FAT.unit}
              </p>
              <p className="ingredient-list__item">
                <span className="ingredient-list__item--bold">Sugars:</span>{" "}
                {nutritionFact.totalNutrients?.SUGAR?.quantity?.toFixed(2)}
                {nutritionFact.totalNutrients?.SUGAR?.unit}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-meal__back" onClick={handleBackClick}>Back</button>
    </div>
  );
}
