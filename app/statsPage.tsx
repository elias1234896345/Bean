import { Header } from "@react-navigation/elements";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, Pressable, Dimensions, FlatList } from "react-native";
import {LineChart, BarChart} from "react-native-gifted-charts"
import {screenWidth, mainPageBorderRadius} from '../constants/defultValus';

  // later tke vlaues from json
const coffies = [2,3,4,5,6,7]
const week = ['41','42','43','44','45','46']
 const coffiesweek = coffies.map((v,i) => ({
    value: v,
    label: week[i % week.length],
  })
)

export default function GraphMP(){
    return(
 // view for the lemets in the view TODO ADD STYLE 
    <View>

         {/* Page header */}
        <View style={{flexDirection: 'row'}}>
            <Pressable
            onPress={null}
             style={({pressed}) => [        
                buttenStyles.btn,
                pressed && buttenStyles.btnPressed,
             ]}
            >
                <Text>B</Text>
            </Pressable>
            <Text>
                Stats
            </Text>
        </View>

        {/*coffies per week */}
          <View style={graphStyle.container}>
              <View style= {graphStyle.graphDisaplyArea}>
                  <BarChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
        </View>

        {/* coffies per week */}
          <View style={graphStyle.container}>
              <View style= {graphStyle.graphDisaplyArea}>
                  <BarChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
            </View>

        {/* coffein intake */}
          <View style={graphStyle.container}>
              <View style= {graphStyle.graphDisaplyArea}>
                  <LineChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
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


const buttenStyles = StyleSheet.create({
 btn: {
    backgroundColor: "#e0dfe8",
    padding: 10,
    borderRadius: 22,
    borderWidth: 2.5,

  },

  btnPressed: {
    opacity: 0.8

  }

})
