import React, { useContext } from "react";
import { Switch, View, Text } from "react-native";
import { ThemeContext } from "../context/Context";

const ThemeSwitch = () => {
  let { theme, toggleTheme, THEMES } = useContext(ThemeContext);

  console.log(THEMES);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Text style={{ color: theme.textColor }}>
        Change to {theme == THEMES.light ? "dark" : "light"}
      </Text>
      <Switch value={theme == THEMES.light} onValueChange={toggleTheme} />
    </View>
  );
};

export default ThemeSwitch;
