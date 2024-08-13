import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGrid({ title, color, onPress }) {
  return (
    <View style={styles.gridContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.itemContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    // style testing
    backgroundColor: "white",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
  },
});

export default CategoryGrid;
