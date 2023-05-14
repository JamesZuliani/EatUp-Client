import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SavedMeals({ setSavedMeals, savedMeals }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mealTitle, setMealTitle] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8080/saved-meals", {
        userId: 1,
      })
      .then((response) => {
        setSavedMeals(response.data);
      })

      .catch((error) => console.log(error));
  },[]);

  const handleSearch = () => {
    axios
      .post("http://localhost:8080/saved-meals/ingredient", {
        food: searchInput,
      })
      .then((response) => {
        console.log(response.data);
        setSearchResults([...searchResults, response.data]);
      })
      .catch((error) => console.log(error));
  };

  const handleSaveMeal = () => {
    const ingredients = searchResults.map(
      (result) => result.ingredients[0].text
    );
    axios
      .put("http://localhost:8080/saved-meals", {
        user_id: 1,
        title: mealTitle,
        ingredient_1: ingredients[0],
        ingredient_2: ingredients[1],
        ingredient_3: ingredients[2],
        ingredient_4: ingredients[3],
        ingredient_5: ingredients[4],
        ingredient_6: ingredients[5],
        ingredient_7: ingredients[6],
        ingredient_8: ingredients[7],
      })
      .then((res) => {
        setSearchResults([]);
        setMealTitle("");
        setSavedMeals((cur) => [...cur, res.data.meal]);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteMeal = (mealId) => {
    console.log(mealId)
    console.log("meal id above")
    axios
      .delete(`http://localhost:8080/saved-meals/${mealId}`)
      .then(() => setSavedMeals((cur) => cur.filter((meal) => meal.id !== mealId)))
      .catch((error) => console.log(error));
  };

  const handleTitleChange = (event) => {
    setMealTitle(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h1> Saved Meal</h1>
      <div>
        <h2>Search for Ingredients</h2>
        <input type="text" onChange={handleSearchInputChange} />
        <button onClick={handleSearch}>Search</button>
        <div>
          {searchResults.map((result, index) => {
            return (
              <div key={index} className="here">
                <h3>{result.ingredients[0].text}</h3>
                <p>Calories: {result.calories}</p>
              </div>
            );
          })}
          <div>
            <input type="text" onChange={handleTitleChange} />
            <button onClick={handleSaveMeal}>Save Meal</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Saved Meals</h2>
        {savedMeals.map((meal) => {
          return (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <button onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
