import MealItem from "./MealItem";
import { Text, StyleSheet, View, FlatList } from "react-native";
const MealList = ({ mealItems }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
