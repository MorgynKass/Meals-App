import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function MealItemHandler() {
    navigation.navigate("SingleMeal", { mealId: id, title: title });
  }

  return (
    <View style={styles.mealItems}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={MealItemHandler}
      >
        <View style={styles.mealInnerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.mealInfo}>
            <Text style={styles.mealText}>Time: {duration} mins</Text>
            <Text style={styles.mealText}>
              Difficulty: {complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealText}>
              Affordability: {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItems: {
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: 0.5,
  },
  mealInnerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  mealInfo: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mealText: {
    marginVertical: 5,
    fontFamily: "Montserrat_400Regular",
  },
});

export default MealItem;
