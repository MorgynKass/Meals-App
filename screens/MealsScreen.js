import { View, StyleSheet, Text, FlatList } from "react-native";

import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

function MealsScreen({ route }) {
  const id = route.params.categoryId;

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  function renderMeal({ item }) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsScreen;
