import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen.js";
import SingleMealScreen from "./screens/SingleMealScreen.js";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  // Initially return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer theme={{ colors: { background: "#F5EFE6" } }}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4F6F52" },
            headerTintColor: "white",
            headerBackTitleStyle: {
              fontFamily: "Montserrat_400Regular",
              fontSize: 17,
            },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              headerTitleStyle: {
                fontFamily: "Montserrat_700Bold",
                fontSize: 15,
              },
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            options={{
              headerTitleStyle: {
                fontFamily: "Montserrat_700Bold",
              },
            }}
          />
          <Stack.Screen
            name="SingleMeal"
            component={SingleMealScreen}
            options={{
              title: "Meal Information",
              headerTitleStyle: {
                fontFamily: "Montserrat_700Bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
  },
});
