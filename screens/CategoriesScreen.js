import { CATEGORIES } from "../data/dummyData";
import { FlatList } from "react-native";

import CategoryGrid from "../components/CategoryGrid";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("Meals", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGrid
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
