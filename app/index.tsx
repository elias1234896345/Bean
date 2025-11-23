import { Header } from "@react-navigation/elements";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, Pressable } from "react-native";
import {LineChart, BarChart} from "react-native-gifted-charts"

export default function MainPage() {

  console.log();
  useEffect(() =>{
    //fetch data here later
  }, []);

  // later tke vlaues from json
  const coffies = [1,2,3,4,5,6,7]
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

  const coffiesDays = coffies.map((v,i) => ({
    value: v,
    label: days[i % days.length],
  })
  )

  return (
   <ScrollView 
   style={{ flex: 1 }}
   contentContainerStyle = {mainpageStyle.mainPageContainer}>

    {/* Account display with beans and chekins */}
    <View style={mainpageStyle.account}>
      {/* Chekins*/}
      <View style={accountStyle.accountView}>
        <Text style ={ accountStyle.accountHeaderText}>
          Chekins
        </Text>
        <Text style ={ accountStyle.accountSideText}>
          0
        </Text>

      </View>

      {/*Pivture*/}
      <View style={accountStyle.accountView}>
        {/* <Text style={styles.accountHeaderText}>
          Profile
        </Text> */}
                <Image
                  source={require('../assets/images/profileCoffie.png')}
                  style={accountStyle.accountViewPicture}

                />

      </View>

      {/* Beans*/}
      <View style={accountStyle.accountView}>
                <Text style = {accountStyle.accountHeaderText}>
                  Beans
                </Text>
                <Text style = {accountStyle.accountSideText}>
                  0
                </Text>

      </View>



    </View>

    {/*
     Graph siaply for how many coffies you have driken each day during a week
     and also the path ot go to a differnt info page
    */}
    <View style={mainpageStyle.graph}>
      <View style= {graphStyle.graphDisaplyArea}>
          <LineChart 
          data={coffiesDays}
        
      />
      </View>
    </View>

    <View style={mainpageStyle.latest}>
    </View>
    <View style={mainpageStyle.beanlist}>
    </View>

  
    
   </ScrollView>
  );
}

const accountStyle = StyleSheet.create({
  

  accountView:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,
  },

  accountViewPicture:{
    flexDirection: 'column',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    height: 110,
    width: 110,
  },

  accountHeaderText:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',

  },

  accountSideText:{
    textAlign: 'center',
    padding: 4,
    fontSize: 16,
    fontWeight: 'bold',

  },
})

const graphStyle = StyleSheet.create({
  graphDisaplyArea: {
    marginTop: 3,
  }
})

const quickTabStyle = StyleSheet.create({


})

const beanlistDisplayStyle = StyleSheet.create({


})

const mainpageStyle = StyleSheet.create({
  mainPageContainer:{
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },

  account:{
    flex: 0.16,
    flexDirection: 'row',
    backgroundColor: ' rgba(214, 216, 225, 0.6)',
    borderRadius:22,
  },

  graph:{
    flex: 0.3,
    backgroundColor: 'rgba(105, 131, 246, 0.6)',
    borderRadius: 22,
    alignItems: 'center',
    
  },

  latest:{
    flex: 0.2,
    alignContent:  "center",
    backgroundColor: 'brown',
    borderRadius: 22,

  },

  beanlist:{
    flex: 0.2,
    alignContent:  "center",
    backgroundColor: 'orange',
    borderRadius: 22,
  },

  checkIn:{
    flex: 0.2,
    alignContent:  "center",
    backgroundColor: 'yellow',
    borderRadius: 22,

  }
});