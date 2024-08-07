import { CATEGORIES } from "../data/dummyData";
import { FlatList } from "react-native";

import CategoryGrid from "../components/CategoryGrid";

function renderCategoryItem({ item }) {
  return <CategoryGrid title={item.title} color={item.color} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

export default CategoriesScreen;
