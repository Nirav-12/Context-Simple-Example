import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ThemeButton from "./src/components/ThemeButton";
import { ThemeContextProvider } from "./src/context/Context";
import ThemeSwitch from "./src/components/ThemeSwitch";
import ThemeText from "./src/components/ThemeText";

export default function App() {
  return (
    <ThemeContextProvider>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{ height: 40, margin: 10 }}>
          <ThemeSwitch />
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <ThemeText />
          <ThemeButton />
        </View>
      </View>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
