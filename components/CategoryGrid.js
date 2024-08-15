import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function CategoryGrid({ title, onPress, imageUrl }) {
  const image = { uri: imageUrl };
  return (
    <View style={styles.gridContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <ImageBackground source={image} style={styles.imageBackground}>
            <View style={styles.itemContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
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
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,

    // style testing
    backgroundColor: "#F5EFE6",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    padding: 5,
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "#4f6f52e0",
    borderRadius: 9,
    overflow: "hidden",
  },
});

export default CategoryGrid;
