import { COFFEE_COLORS } from "@/constants/defultValus";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Bean as BeanIcon } from 'lucide-react-native';
import {FontAwesome6} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Bean = {
  id: string;
  name: string;
  roastery: string;
  land: string;
  kgPrice: number;
};

type Props = {
    beanList: Bean[];
    onAdd?: (id: string) => void;
}

export default function BeanList({beanList, onAdd}: Props ){
    return(
     <View style={style.beanlist}>
       <Text style={style.mainPageTextStyle}> BeanList </Text>

      <View style={style.alignmentStyle}>
         <FlatList
          data={beanList}
          keyExtractor={(item)=> item.id}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}                       
          contentContainerStyle={{ paddingVertical: 8 }}  
          renderItem={({item}) => (
            <View style={styles.row}>
              <View style={styles.itemBox}>
                <View style={{width: '40%', flexDirection: 'row', justifyContent:'center'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                        <BeanIcon size={13} /> {item.name}      
                  </Text> 
                </View>

                <View style={{width: '35%', flexDirection: 'row', justifyContent:'center'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                    <FontAwesome6 name={"map-location-dot"}size={13}/> {item.land}   
                  </Text> 
                </View>

                <View style={{width: '25%', flexDirection: 'row', justifyContent:'center'}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{justifyContent: 'center', alignSelf:'center', alignItems: 'center', textAlign: 'center', alignContent: 'center'}}>
                    <MaterialCommunityIcons name="factory" size={14} />{item.roastery} 
                  </Text> 
                </View>
               
              </View>

              <TouchableOpacity 
                onPress={()=> onAdd?.(item.id)}
                style={styles.btn}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{alignItems: 'center', height:40}}>    
        <TouchableOpacity
           onPress={()=> '/beanListPage'}
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

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  itemBox: {
    flex: 1,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
 btn: {
    backgroundColor: "#e0dfe8",
    borderRadius: 22,
    borderWidth: 2.5,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const style = StyleSheet.create({

beanlist:{
    minHeight: 200,
    maxHeight: 420,
    alignContent:  "center",
    backgroundColor: COFFEE_COLORS.nr4,
    borderRadius: 22,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },    

mainPageTextStyle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',

  },

  alignmentStyle:{
    width: '100%',
    maxHeight: 340,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  beanListDispaly:{
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },

  beanListTextStyle:{

  }

})