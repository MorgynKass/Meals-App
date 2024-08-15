import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import { MEALS } from "../data/dummyData";

import MealInfo from "../components/MealInfo";

function SingleMealScreen({ route, navigation }) {
  const id = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === id);

  useEffect(() => {
    const title = meal.title;
    navigation.setOptions({
      title: title,
    });
  }, [id, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <MealInfo
          imageUrl={meal.imageUrl}
          title={meal.title}
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <View style={styles.innerContainer}>
          <View style={styles.mealInformation}>
            <Text style={styles.titles}>Ingredients</Text>
            {meal.ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.text}>
                • {ingredient}
              </Text>
            ))}
            <Text style={styles.titles}>Instructions</Text>
            {meal.steps.map((step) => (
              <Text key={step} style={styles.text}>
                • {step} {"\n"}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  innerContainer: {
    marginVertical: 25,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "white",
  },
  mealInformation: {
    margin: 15,
  },
  titles: {
    marginVertical: 10,
    fontSize: 25,
    color: "#1A4D2E",
  },
  text: {
    fontSize: 19,
    fontFamily: "Montserrat_400Regular",
  },
});

export default SingleMealScreen;
