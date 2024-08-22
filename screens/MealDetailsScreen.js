import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { MEALS } from "@/data/dummy-data";
import MealDetail from "@/components/MealDetail";
import List from "../components/List";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../store/favorites";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const dispatch = useDispatch();
  const favMeals = useSelector((store) => store.favorites.ids);
  const isFavorite = (mealId) => {
    return favMeals.includes(mealId);
  };
  const headerButtonHandler = () => {
    if (isFavorite(mealId)) {
      dispatch(removeFromFavorite(mealId));
      // console.log("already was in fav so removed");
    } else {
      dispatch(addToFavorite(mealId));
      // console.log("was not in fav so added");
    }
    // console.log("Button clicked");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon={isFavorite(mealId)?"star":"star-outline"} color="white" onPress={headerButtonHandler} />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>

          <List data={selectedMeal.ingredients} />

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
export default MealDetailsScreen;
