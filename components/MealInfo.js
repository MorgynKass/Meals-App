import { View, Text, StyleSheet, Image } from "react-native";

function MealInfo({ imageUrl, title, duration, complexity, affordability }) {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 260,
    height: 260,
    margin: 15,
    borderWidth: 4,
    borderColor: "#1A4D2E",
    borderRadius: 150,
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A4D2E",
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  mealInfo: {
    marginTop: 5,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  mealText: {
    marginVertical: 5,
    color: "#4F6F52",
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
  },
});

export default MealInfo;
