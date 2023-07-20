import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../context/Context";

const ThemeText = () => {
  let { theme } = useContext(ThemeContext);

  return (
    <View>
      <Text style={{ color: theme.textColor }}>{theme.text}</Text>
    </View>
  );
};
export default ThemeText;
