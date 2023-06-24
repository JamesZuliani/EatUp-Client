import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import ViewMeal from "../../components/ViewMeal/ViewMeal";
import "./SavedMealPage.scss";

export default function SavedMeals({ setSavedMeals, savedMeals, userId }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mealTitle, setMealTitle] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/saved-meals`, {
        userId,
      })
      .then((response) => {
        setSavedMeals(response.data);
      })

      .catch((error) => console.log(error));
    //no dependency required, comment included to bypass warning
    //eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/saved-meals/ingredient`, {
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
      .put(`${process.env.REACT_APP_BACKEND}/saved-meals`, {
        user_id: userId,
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
    console.log(mealId);
    console.log("meal id above");
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/saved-meals/${mealId}`)
      .then(() => {
        console.log("meal deleted successfully");
        setSavedMeals((cur) => cur.filter((meal) => meal.id !== mealId));
      })
      .catch((error) => {
        console.log("error deleting meal: ", error);
      });
  };

  const handleTitleChange = (event) => {
    setMealTitle(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleBackClick = () => {
    setSelectedMeal(null);
  };

  return (
    <div>
      <Header />
      <h1 className="title"> Saved Meals Page</h1>
      {selectedMeal ? (
        <ViewMeal meal={selectedMeal} handleBackClick={handleBackClick} />
      ) : (
        <div className="feature-wrapper">
          <div className="new-input">
            <h3 className="new-input__title">Search for Ingredients</h3>
            <div className="search-wrapper">
              <input
                placeholder="Ex. 1 tbsp Butter"
                className="search"
                type="text"
                onChange={handleSearchInputChange}
              />
              <button className="search__submit" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="searched-card__wrapper">
              {searchResults.map((result, index) => {
                return (
                  <div key={index} className="searched-card">
                    <h3 className="searched-card__title">
                      {result.ingredients[0].text}
                    </h3>
                    <div className="ingredient-list">
                      <p className="ingredient-list__item">
                        <span className="ingredient-list__item--bold">
                          Calories:
                        </span>{" "}
                        {result.calories}
                      </p>
                      <p className="ingredient-list__item">
                        <span className="ingredient-list__item--bold">
                          Carbs:
                        </span>{" "}
                        {result.totalDaily.CHOCDF.quantity.toFixed(2) || "N/A"}
                        {result.totalDaily.CHOCDF.unit|| ""}
                      </p>
                      <p className="ingredient-list__item">
                        <span className="ingredient-list__item--bold">
                          Protein:
                        </span>{" "}
                        {result.totalDaily.PROCNT.quantity.toFixed(2)|| "N/A"}
                        {result.totalDaily.PROCNT.unit || ""}
                      </p>
                      <p className="ingredient-list__item">
                        <span className="ingredient-list__item--bold">
                          Fat:
                        </span>{" "}
                        {result.totalDaily.FAT.quantity.toFixed(2)|| "N/A"}
                        {result.totalDaily.FAT.unit || ""}
                      </p>
                      <p className="ingredient-list__item">
                        <span className="ingredient-list__item--bold">
                          Sugars:
                        </span>{" "}
                        {result.totalNutrients?.SUGAR?.quantity?.toFixed(2) || "N/A"}
                        {result.totalNutrients?.SUGAR?.unit || ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="new-input__title">Save to your Meal List</h3>
            <div className="save-wrapper">
              <input
                placeholder="Your Meals Name..."
                className="save"
                type="text"
                onChange={handleTitleChange}
              />
              <button className="save__submit" onClick={handleSaveMeal}>
                Save Meal
              </button>
            </div>
          </div>
          <div className="saved-wrapper">
            <h2 className="saved-container__title">Your Saved Meals</h2>
            <div className="saved-container">
              {savedMeals.map((meal) => {
                return (
                  <div className="saved-card" key={meal.id}>
                    <h3
                      className="saved-card__title"
                      onClick={() => handleMealClick(meal)}
                    >
                      {meal.title}
                    </h3>
                    <button
                      className="saved-card__delete"
                      onClick={() => handleDeleteMeal(meal.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
