import { Header } from "@react-navigation/elements";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, Pressable, Dimensions, FlatList } from "react-native";
import {LineChart, BarChart} from "react-native-gifted-charts"
import {screenWidth, mainPageBorderRadius} from '../../constants/defultValus';

  // later tke vlaues from json
const coffies = [1,2,3,4,5,6,7]
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
 const coffiesDays = coffies.map((v,i) => ({
    value: v,
    label: days[i % days.length],
  })
)


export default function GraphMP(){
    return(
          <View style={graphStyle.container}>
              <View style= {graphStyle.graphDisaplyArea}>
                  <LineChart 
                  data={coffiesDays}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
            </View>
    );
}

const graphStyle = StyleSheet.create({
container:{
    height: 250,
    backgroundColor: 'rgba(105, 131, 246, 0.6)',
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',   
  },
  graphDisaplyArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
})