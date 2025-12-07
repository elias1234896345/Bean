import { useEffect } from "react";
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity, TextInput } from "react-native";
import BeanList from "./mainpage/beanlist";
import AccountViewMP from "./mainpage/account";
import GrapMP from "./mainpage/graph";
import EasyAcces from "./mainpage/easyAcces";
import { COFFEE_COLORS } from "../constants/defultValus";
import { Icon } from "lucide-react-native";
import {FontAwesome, Ionicons} from '@expo/vector-icons'


 const coffeData =[
    {name: 13123,},
    {name: 1653},
 ]

export default function BeanListPage(){
    return(
        <View style={{flex:1}}>
        <View style={style.mainPage}>
            <View style={{borderRadius: 18, borderWidth: 2,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput
                numberOfLines={1}
                style={{marginLeft: 18, fontWeight: 'bold', fontSize: 16, flexDirection: 'row', width: '80%'}}
                placeholder="Coffe name..."
                >
                </TextInput>

                <Ionicons
                  name="search"
                  size={18}
                  style={{justifyContent: 'center', alignItems: 'center', marginRight:18}}
                >
                  
                </Ionicons>
            </View>
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