import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { beanList, COFFEE_COLORS } from "../constants/defultValus";


export default function BeanListPage(){
  const[data, setData] = useState([]);
  const[serch, serchQuery] = useState("");

const handleSerch = (query) => {
  serchQuery(query);
}

    return(
        <View style={{flex:1}}>
         <View style={style.mainPage}>
          {/* Serchbar */}
            <View style={{borderRadius: 18, borderWidth: 2,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput
                clearButtonMode = 'always'
                autoCapitalize="none"
                autoCorrect={false}
                numberOfLines={1}
                style={{marginLeft: 18, fontWeight: 'bold', fontSize: 16, flexDirection: 'row', width: '80%'}}
                placeholder="Coffe name..."
                value={serchQuery}
                onChangedText={(query)=> handleSerch(query)}
                />
                <Ionicons
                    name="search"
                    size={18}
                    style={{justifyContent: 'center', alignItems: 'center', marginRight:18}}
                 />
            </View>

          {/* Dispaly coffes */}
          <FlatList style={{width: '100%'}} contentContainerStyle={{gap: 12}}>
             {beanList.map(bean => (   
               <View 
                key={bean.id}
                style={{height:76, width: '100%', borderRadius: 22, borderWidth:3, flexDirection: 'row'}}
                >
                    {/* Coffe image */}
                      <Image
                        source={require("../assets/images/bag.png")}
                        style={{ width:'24%', height:'90%', borderRadius:12, alignSelf:'center',marginLeft:6 }}
                      />
                    {/* Name, palce, roastery, land, kgPrice */}
                    <View style={{ marginLeft:22, justifyContent:'space-evenly',flexDirection: 'column', width: '40%' }} >
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="coffee" size={13} />
                         <Text numberOfLines={1} style={{marginLeft:6}}>{bean.name}</Text>
                     </View>
                    
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="factory" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.roastery}</Text>
                      </View>
                    </View>

                    <View style={{  justifyContent:'space-evenly',flexDirection: 'column',width: '35%' }} >
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                          <MaterialIcons name="attach-money" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.kgPrice}</Text>
                      </View>
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <Ionicons name="location-outline" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.land}</Text>
                      </View>
                    </View>

                </View>
              ))}
          </FlatList>

          {/* Add new coffe button*/}
         </View>
          <TouchableOpacity
             onPress={() => router.push('/addNewBeanPage')}
             style={ style.addCoffe}
             accessibilityLabel="Add latest coffee"
          >
            <Text style={style.addCoffeText}>+</Text>
          </TouchableOpacity>
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

})