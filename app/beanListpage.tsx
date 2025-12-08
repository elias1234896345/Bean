import { router } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity, TextInput, Image } from "react-native";
import { beanList,COFFEE_COLORS } from "../constants/defultValus";
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import { TextInputBase } from "react-native";

export default function BeanListPage(){
    return(
        <View style={{flex:1}}>
         <View style={style.mainPage}>
          {/* Serchbar */}
            <View style={{borderRadius: 18, borderWidth: 2,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput
                numberOfLines={1}
                style={{marginLeft: 18, fontWeight: 'bold', fontSize: 16, flexDirection: 'row', width: '80%'}}
                placeholder="Coffe name..."
                />
                <Ionicons
                    name="search"
                    size={18}
                    style={{justifyContent: 'center', alignItems: 'center', marginRight:18}}
                 />
            </View>
          {/* Dispaly coffes */}
          <ScrollView style={{width: '100%'}} contentContainerStyle={{gap: 12}}>
             {beanList.map(bean => (   
               <View 
                key={bean.id}
                style={{height:76, width: '100%', borderRadius: 22, borderWidth:3, flexDirection: 'row'}}>
                    {/* Coffe image */}
                    <Image
                    // source={{uri: bean.image || 'https://via.placeholder.com/84'}}
                    source={{uri:'https://via.placeholder.com/84',}}
                    style={{ width:84, height:84, borderRadius:12 }}                  >
                    
                    </Image>
                    {/* Name, palce, roastery, land, kgPrice */}
                    <View style={{ marginLeft:12, justifyContent:'center' }} >

                      <View style={{justifyContent: 'center', flexDirection: 'row' }}>
                        <Ionicons name='text'></Ionicons><Text> {bean.name} </Text>
                        <Text> {bean.land} </Text>
                      </View>

                      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <Text> {bean.roastery} </Text>
                        <Text> {bean.kgPrice} </Text>
                      </View>

                    </View>
                  </View>
              ))}
          </ScrollView>

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