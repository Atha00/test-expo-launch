import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "./assets/restaurants.json";

// console.log(data);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Ceci est un titre pour vérifier si l'update fonctionne</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.placeId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
});
