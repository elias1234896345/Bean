import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AccountViewMP() {
  return (
    <View style={style.container}>
      {/* Chekins */}
      <View style={style.accountView}>
        <Text style={style.mainPageTextStyle}>Chekins</Text>
        <Text style={style.accountSideText}>0</Text>
      </View>

      {/* Picture */}
      <View style={style.accountView}>
        <Image
          source={require("../../assets/images/profileCoffie.png")}
          style={style.accountViewPicture}
        />
      </View>

      {/* Beans */}
      <View style={style.accountView}>
        <Text style={style.mainPageTextStyle}>Beans</Text>
        <Text style={style.accountSideText}>0</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    backgroundColor: "#ecdfd0", // Card background
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#c19a6b", // Caramel border
    shadowColor: "#6f4e37", // Coffee shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  accountView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  accountViewPicture: {
    borderRadius: 60,
    borderColor: "#6f4e37", // Coffee brown border
    borderWidth: 2,
    height: 110,
    width: 110,
  },

  mainPageTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#6f4e37", // Coffee brown text
  },

  accountSideText: {
    textAlign: "center",
    padding: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "#6f4e37", // Coffee brown text
  },
});