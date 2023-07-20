import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../context/Context";

const ThemeButton = () => {
  let { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.backgroundColor,
            width: 100,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => toggleTheme()}
        >
          <Text style={{ color: theme.textColor }}>Hello </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeButton;
