import { View, Text, StyleSheet } from "react-native";

function SingleMealScreen({ route }) {
  const id = route.params.mealId;
  const title = route.params.title;
  return (
    <View style={styles.container}>
      <Text>{[id, title]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleMealScreen;
