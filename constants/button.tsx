// ...existing code...
import React from "react";
import {
  StyleSheet,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";

function ThemedButton(props: PressableProps) {
  const { style, children, ...rest } = props;

  const resolvedStyle = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const userStyle = typeof style === "function" ? style(state) : style;
    return [styles.btn, state.pressed && styles.btnPressed, userStyle] as StyleProp<ViewStyle>;
  };

  return (
    <Pressable {...rest} style={resolvedStyle}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#e0dfe8",
    padding: 10,
    borderRadius: 22,
    borderWidth: 2.5,
  },
  btnPressed: {
    opacity: 0.8,
  },
});

export default ThemedButton;
// ...existing code...