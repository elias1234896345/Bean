import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

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
    backgroundColor: "rgba(105, 131, 246, 0.6)",
    borderRadius: 22,
    overflow: "hidden",
  },

  accountView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  accountViewPicture: {
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 2,
    height: 110,
    width: 110,
  },

  mainPageTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  accountSideText: {
    textAlign: "center",
    padding: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
});