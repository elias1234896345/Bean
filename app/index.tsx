import { useEffect } from "react";
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import BeanList from "./mainpage/beanlist";
import AccountViewMP from "./mainpage/account";
import GrapMP from "./mainpage/graph";
import EasyAcces from "./mainpage/easyAcces";
import { beanList,COFFEE_COLORS } from "../constants/defultValus";

export default function MainPage() {
  useEffect(() =>{
    //fetch data here later
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COFFEE_COLORS.milk }}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle = {mainpageStyle.mainPage}>

        {/* show the account view at the top */}
        <AccountViewMP />

        {/* Graph */}
        <Pressable onPress={() => router.push('/statsPage')}> 
         <GrapMP />
        </Pressable>

        {/* Easy to access functions */}
        <EasyAcces />

        {/* bean list section */}
        <BeanList
          beanList={beanList.slice(0,2)}
          onAdd={(id) => {
            console.log("add bean id:", id);
          }}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => router.push('/addNewBeanPage')}
        style={ mainpageStyle.addCoffe}
        accessibilityLabel="Add latest coffee"
      >
        <Text style={mainpageStyle.addCoffeText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const mainpageStyle = StyleSheet.create({
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

  addCoffe: {
    position: 'absolute',
    bottom: 32,
    right: 18,
    backgroundColor: COFFEE_COLORS.milk,
    padding: 10,
    borderRadius: 28,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  addCoffeText: {
    fontSize: 24,
    lineHeight: 24,
    color: COFFEE_COLORS.espresso,
  },
});

