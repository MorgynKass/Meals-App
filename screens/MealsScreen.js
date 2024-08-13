import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/dummyData";

function MealsScreen({ route }) {
  const id = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsScreen;
