import { beanList, COFFEE_COLORS } from "@/constants/defultValus";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Divider from '../../constants/divider';

const Bean = { src: require("@/assets/images/bag.png") };
const Serveringsstilar = ["Espresso", "Americano", "Cappuccino", "Latte", "Cold Brew", "Pour Over"];
const Places = ["Hemma", "Café"];

export default function AddNewBeanPage(){
    // Get the id from route params
    const { id} = useLocalSearchParams<{ id: string }>();
    
    // Find the bean from beanList
    const bean = beanList.find(b => b.id === id);

    const [image, setImage] = useState<string | null>(null);
    const [SliderState, setSliderState] = useState<number>(0);
    const [selectedServing, setSelectedServing] = useState<string | null>(null);
    const [selectedPlaces, setselectedPlaces] = useState<string | null>(null);

    // Handle case where bean is not found
    if (!bean) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Bean not found</Text>
            </View>
        );
    }

   const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:[ 'livePhotos'],
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    });

    if(!result.canceled){
        setImage(result.assets[0].uri);
    }


    }
    return (
        // {/* page view */}
        <View style={addBean.pageStyle}
         >
            <View>
                <View style={{justifyContent:'center', alignItems: 'center', paddingBottom: 12}}>
                      <Text style={{fontWeight: 'bold' , fontSize: 18}}>
                     {bean.name}
                 </Text>
                </View>
             {/* Name of coffie */}
             <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                 <Image
                     source={Bean.src}
                     style={{ width: 100, height: 100 }}
                 />

               {/*Add picture */}
                 <TouchableOpacity
                    style={camera.imagePicker }
                    onPress={pickImage}
                >
                    {
                        image ?
                        (
                          <Image source={{uri:image}} style={camera.previewImage} />  
                        ):
                       ( 
                       <View>
                         <Ionicons style={{alignSelf:'center'}} name="image-outline" size={40} color={'#393E46'} />
                         <Text style={camera.palceholderText}>  Lägg till foto  </Text>
                        </View>
                    )}
                    </TouchableOpacity>
             </View>

             {/* notes  */}
             <View style={{paddingTop: 8}}>
                <TextInput
                style={{width: '100%', fontSize: 16, }}
                placeholder="Hur var kaffet?"
                multiline={true}
                numberOfLines={5} 
                >
                </TextInput>
                </View>
            </View>

            {/* divider */}
            <Divider />
                         
            {/* GRADE (slider)*/}
            <View>
                <View style={{justifyContent: 'center',flexDirection:'row'}}>
                    <Text style= {{fontWeight: 'bold', fontSize: 20}}>
                            BETYG:  {SliderState.toString().slice(0,1)}
                     </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={10}
                  value={SliderState}
                  onValueChange={(value) => setSliderState(value)}
                  thumbTintColor="#5e0303ff"
                  minimumTrackTintColor="#5e0303ff"
                  maximumTrackTintColor="#000000ff"
                />
                </View>
            </View>

            {/* divider */}
            <Divider />
            {/* Serveringsstil */}
            <View style={{height: 100, alignItems:'center'}}>
             <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 2  }}>Serveringsstil</Text>
            
              <ScrollView horizontal={true} >
                {Serveringsstilar.map((stil, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            servingStyles.servingItem,
                            selectedServing === stil && servingStyles.selectedItem
                        ]}
                        onPress={() => setSelectedServing(stil)}
                    >
                        <FontAwesome name="coffee" size={24} color={selectedServing === stil ? "#fff" : "#393E46"} />
                        <Text style={[
                            servingStyles.servingText,
                            selectedServing === stil && servingStyles.selectedText
                        ]}>
                            {stil}
                        </Text>
                    </TouchableOpacity>
                ))}
             </ScrollView>
            </View>     

            {/* devider */}
            <Divider />

            {/* Place*/}
            <View style={{alignItems: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 2  }}>Plats</Text>
            <View style={{height:70}}>
                <ScrollView horizontal={true}>
                    {Places.map((place, index) => (
                        <TouchableOpacity
                        key={index}
                        style={[
                             servingStyles.servingItem,
                             selectedPlaces === place && servingStyles.selectedItem
                        ]}
                        onPress={() => setselectedPlaces(place)}
                        >
                          <FontAwesome name="home" size={24} color={selectedPlaces === place ? "#fff" : "#393E46"} />
                        <Text style={[     
                            servingStyles.servingText,
                            selectedPlaces === place && servingStyles.selectedText]}>
                            {place}
                        </Text>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            </View>
         </View>

          {/* devider */}
          <Divider />

           {/* CHECK-IN BUTTON*/}
           <View style={{paddingTop: 24}}>
             <View style={{borderWidth: 2, borderRadius: 12,  backgroundColor:'green', height: 60, justifyContent: 'center'}}>
                 <TouchableOpacity
                 style={{justifyContent:'center', alignItems:'center'}}
                 onPress={() => router.push("/")}
                 >
                     <Text style={{ padding: 14, color: 'white'}}> CHECK-IN</Text>
                 </TouchableOpacity>
             </View>
            </View>
        </View>
    );
}

const addBean = StyleSheet.create({
    pageStyle:{
     flexGrow: 1,
            justifyContent: 'flex-start',
            padding: 8,
            margin:8,
            gap: 12,
            backgroundColor: COFFEE_COLORS.vanillaCream,
            borderRadius: 18,
    },

    gradeStyle:{

    },

    selectedPlacestyle:{

    },

    checkInButton:{
        width: '100%',



    }
    
})

const servingStyles = StyleSheet.create({
    servingItem: {
        padding: 10,
        margin: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#393E46",
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    selectedItem: {
        backgroundColor: "#393E46",
    },
    servingText: {
        marginTop: 5,
        color: "#393E46",
    },
    selectedText: {
        color: "#fff",
    },
})

const camera = StyleSheet.create({
    imagePicker:{
        width:100,
        height:100,
        borderRadius: 8, 
        borderWidth:3, 
        justifyContent:'center',
        alignItems:'center',
        overflow: 'hidden',
    },

    previewImage:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        overflow: 'hidden',
    },

    placeholderContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    palceholderText:{
        marginTop: 4,
        fontSize: 12.5,
        fontWeight: 'bold'
    },

})