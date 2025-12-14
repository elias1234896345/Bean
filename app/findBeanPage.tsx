import { beanList } from '@/constants/defultValus';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FindBeanPage(){
    return(
        <View style={{flex:1, alignItems: 'center', }}>

            {/* searchbar */}
            <View style={{flexDirection: 'row', borderWidth: 3, borderRadius: 22, height: 50, width: '96%', alignContent: 'center', marginTop: 12, alignItems:'center'}}>
              <View style={{flexDirection: 'row', alignContent: 'center',  alignItems:'center', marginLeft: 8}}>
               <Ionicons
                    name="search"
                    size={20}
                    style={{justifyContent: 'center', alignItems: 'center', alignContent:'center', marginRight:6}}
                 />
               
                <TextInput
                placeholder="Coffe name..."
                numberOfLines={1}
                style={{width: '100%',flexDirection: 'row', fontSize:16, marginLeft:8}}
                >
                </TextInput>
                </View>
            </View>

            {/* Display Beans */}
                <FlatList 
                 style={{width: '96%', marginTop: 8}} 
                 contentContainerStyle={{gap: 8}}
                 data={beanList}
                 keyExtractor={(item) => item.id}
                 renderItem={({ item: bean }) => (   
                    <TouchableOpacity
                    onPress={() => router.push({ pathname: '/addNewBeanPage', params: { id: bean.id } })}
                    >
                   <View 
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
                    </TouchableOpacity>
                  )}
                 />

        </View>
    );
}