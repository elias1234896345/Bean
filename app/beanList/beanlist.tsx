import type { BeanInfo } from "@/constants/defultValus";
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import { Bean as BeanIcon } from 'lucide-react-native';
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BeanInfoModal from "./beanInfoModal";

type Props = {
    beanList: BeanInfo[];
    onAdd?: (id: string) => void;
}

type Bean = BeanInfo;

export default function BeanList({beanList, onAdd}: Props ){
    const [selectedBean, setSelectedBean] = useState<Bean | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    return(
     <View style={style.beanlist}>
       <Text style={style.mainPageTextStyle}> BeanList </Text>

      <View style={style.alignmentStyle}>
         <FlatList
          data={beanList}
          keyExtractor={(item, index) => item.id ?? index.toString()}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}                       
          contentContainerStyle={{ paddingVertical: 8 }}  
          renderItem={({item}) => (
        
            <View style={styles.row}>
              <TouchableOpacity
                 onPress={() => {
                   console.log('pressed, setting selectedBean:', item);
                   setSelectedBean(item); 
                   setModalVisible(true); 
                 }}
              >
              <View style={styles.itemBox}>
                <View style={{width: '36%', flexDirection: 'row', justifyContent:'flex-start'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                    <BeanIcon size={13} /> {item.name}      
                  </Text> 
                </View>

                <View style={{width: '32%', flexDirection: 'row', justifyContent:'flex-start'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                    <FontAwesome6 name={"map-location-dot"}size={13}/> {item.land}   
                  </Text> 
                </View>

                <View style={{width: '25%', flexDirection: 'row', justifyContent:'flex-start'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                    <MaterialCommunityIcons name="factory" size={14} />{item.roastery} 
                  </Text> 
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => item.id && onAdd?.(item.id)}
                style={styles.btn}
              >
                 <Text style={{color: '#4f3828ff', fontSize:16}}>+</Text>
              </TouchableOpacity>
            </View>
          
          )}
        />
        
        {/* place modal once, controlled by state */}
        <BeanInfoModal
          visiable={modalVisible}
          bean={selectedBean}
          onClose={() => { setModalVisible(false); setSelectedBean(null); }}
        />
      </View>
      <View style={{alignItems: 'center', height:40}}>    
        <TouchableOpacity
           onPress={()=> router.push('../beanList/beanListpage')}
          style={{
             borderRadius: 12,
             borderWidth: 2,
             height: 30,
             width: '80%',
             justifyContent: 'center',
             alignItems: 'center',
           }}
        >
          <Text> View full bean list </Text>
        </TouchableOpacity>
      </View>
    </View>     
    );
}

const style = StyleSheet.create({
  beanlist:{
    minHeight: 200,
    maxHeight: 420,
    alignContent: "center",
    backgroundColor: '#ecdfd0', // Card background
    borderRadius: 22,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#c19a6b', // Caramel border
    shadowColor: '#6f4e37', // Coffee shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  mainPageTextStyle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#6f4e37', // Coffee brown text
    paddingTop: 8,
  },

  alignmentStyle:{
    width: '100%',
    maxHeight: 340,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  beanListDispaly:{
    borderRadius: 60,
    borderColor: '#6f4e37', // Coffee brown border
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  beanListTextStyle:{
  }
})

const styles = StyleSheet.create({
  row: {
    width: "96%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  itemBox: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#6f4e37', // Coffee brown border
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    borderColor: '#6f4e37', // Coffee brown
    borderRadius: 22,
    borderWidth: 2.5,
    backgroundColor: '#c19a6b', // Caramel border
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})