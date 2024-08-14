import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import MealInfo from "./MealInfo";

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
        <MealInfo
          title={title}
          imageUrl={imageUrl}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
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
});

export default MealItem;
