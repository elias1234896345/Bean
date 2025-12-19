import AccountViewMP from "@/app/account/accounts";
import { COFFEE_COLORS } from "@/constants/defultValus";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function AccountPage(){
  return (
    <View style={style.mainPage}>
      <View style={{width: '100%', height: '100%',}}>

        {/* account view */}
        <AccountViewMP />

        {/* pressableTabs */}
        <View style={{gap: 18, marginTop: 18,}}>
        {/* Settings */}
          <TouchableOpacity style={ style.pressableTabs}>
              <Text>
                  Settings
              </Text>
          </TouchableOpacity>
    
          {/* Logout */}
          <TouchableOpacity style={ style.pressableTabs}>
              <Text>
                  Logout
              </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainPage:{
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 12,
    margin: 10,
    gap: 12,
    backgroundColor: COFFEE_COLORS.milk,
    borderRadius: 18,
    paddingBottom: 120,
  },

  pressableTabs:{
    borderRadius: 18,
    borderWidth: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '86%',
    height: '18%',
  }

});