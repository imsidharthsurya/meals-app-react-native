import React from "react";
import { useSelector } from "react-redux";
import { MEALS } from "@/data/dummy-data";
import MealList from "../components/MealList";

const FavoriteScreen = () => {
  const favMealIds = useSelector((store) => store.favorites.ids);
  const favMealsArray = MEALS.filter((meal) => {
    return favMealIds.includes(meal.id);
  });
  return <MealList mealItems={favMealsArray} />;
};

export default FavoriteScreen;
