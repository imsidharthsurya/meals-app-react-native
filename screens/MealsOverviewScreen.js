import MealList from "../components/MealList";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "@/data/dummy-data";
const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id == catId;
    });
    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  return <MealList mealItems={displayedMeals} />;
};

export default MealsOverviewScreen;
