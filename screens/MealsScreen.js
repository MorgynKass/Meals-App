import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/dummyData";

function MealsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsScreen;
