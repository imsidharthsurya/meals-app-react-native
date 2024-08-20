import { View, Text, StyleSheet } from "react-native";
import CategoriesScreen from "../../screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
