import { router } from 'expo-router';
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { beanList, COFFEE_COLORS } from "../constants/defultValus";
import AccountViewMP from "./account/accounts";
import BeanList from "./beanList/beanlist";
import EasyAcces from "./easyAcces/easyAcces";
import GrapMP from "./graphs/graph";

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
        <TouchableOpacity onPress={()=> router.push('../account/accountPage')}>
            <AccountViewMP />
        </TouchableOpacity>
        
        {/* Graph */}
        <Pressable onPress={() => router.push('../graphs/statsPage')}> 
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
        onPress={() => router.push('../addBean/findBeanPage')}
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
    padding: 8,
    margin:8,
    gap: 12,
    backgroundColor: '#faf7f2', 
    borderRadius: 18,
  },

  addCoffe: {
    position: 'absolute',
    bottom: 32,
    right: 18,
    borderColor: '#6f4e37', 
    padding: 10,
    borderRadius: 28,
    borderWidth: 2.5,
    backgroundColor: '#c19a6b', 
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    shadowColor: '#6f4e37',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  addCoffeText: {
    fontSize: 24,
    lineHeight: 24,
    color: '#f5ebe0', 
  },
});


