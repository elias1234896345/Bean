import { useEffect } from "react";
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import BeanList from "./mainpage/beanlist";
import AccountViewMP from "./mainpage/account";
import GrapMP from "./mainpage/graph";
import EasyAcces from "./mainpage/easyAcces";


export default function MainPage() {

  console.log();
  useEffect(() =>{
    //fetch data here later
  }, []);

  // fake data
  const beanList = [
  { id: 'b01', name: 'El Paraiso', roastery: 'La Finca', land: 'Guatemala', kgPrice: 51.96 },
  { id: 'b02', name: 'Santa Maria', roastery: 'Cafe Norte', land: 'Colombia', kgPrice: 46.00 },
  { id: 'b03', name: 'Yirgacheffe Select', roastery: 'Addis Beans', land: 'Ethiopia', kgPrice: 58.50 },
  { id: 'b04', name: 'Nyeri AA', roastery: 'Kenya Hill', land: 'Kenya', kgPrice: 55.25 },
  { id: 'b05', name: 'Santos Dulce', roastery: 'Rio Roast', land: 'Brazil', kgPrice: 40.00 },
  { id: 'b06', name: 'Tarrazu Gold', roastery: 'Costa Roast', land: 'Costa Rica', kgPrice: 48.30 },
  { id: 'b07', name: 'Mandheling Dark', roastery: 'Sumatra Roast', land: 'Indonesia', kgPrice: 43.10 },
  { id: 'b08', name: 'Copan Peak', roastery: 'Hondura Blend', land: 'Honduras', kgPrice: 45.75 },
  { id: 'b09', name: 'Andes Single', roastery: 'Andean Roast', land: 'Peru', kgPrice: 42.00 },
  { id: 'b10', name: 'Kigali Bloom', roastery: 'Rwanda Rise', land: 'Rwanda', kgPrice: 57.00 },
];

  
  return (
// makes it so that we can haevthe add button to teh right bottom coner
  <View style={{ flex: 1 }}>  

   <ScrollView 
   style={{ flex: 1 }}
   contentContainerStyle = {mainpageStyle.mainPage}>

    {/* show the account view at the top */}
    <AccountViewMP></AccountViewMP>

    {/*
     Graph siaply for how many coffies you have driken each day during a week
     and also the path ot go to a differnt info page
    */}
    <Pressable onPress={() => router.push('/statsPage')}> 
     <GrapMP></GrapMP>
    </Pressable>
  

    {/* Easy to accces functions usually done */}
    <EasyAcces></EasyAcces>

    {/* bean list section */}
      <BeanList
        beanList={beanList}
        onAdd={(id) => {
          console.log("add bean id:", id);
        }}
      />
   </ScrollView>

      {/* Floating action button — stays on screen while you scroll */}
      <TouchableOpacity
        onPress={() => router.push('/addNewBeanPage')}
        style={ mainpageStyle.fab}
        accessibilityLabel="Add latest coffee"
      >
        <Text style={mainpageStyle.fabText}>+</Text>
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
  },

  fab: {
    position: 'absolute',
    bottom: 32,
    right: 18,
    backgroundColor: "#e0dfe8",
    padding: 10,
    borderRadius: 22,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  fabText: {
    fontSize: 24,
    lineHeight: 24,
  },
});

