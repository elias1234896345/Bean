import { ScrollView, StyleSheet, View, Text, Pressable, Image, TextInput, TouchableOpacity } from "react-native";
import {FontAwesome,AntDesign, Ionicons} from '@expo/vector-icons'
import {mainPageBorderRadius,screenWidth} from '../constants/defultValus'
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Slider from '@react-native-community/slider';

const Bean = { name: "Darsy Bloom", src: require("../assets/images/bag.png") };
const Serveringsstilar = ["Espresso", "Americano", "Cappuccino", "Latte", "Cold Brew", "Pour Over"];
const Places = ["Hemma", "Café"];


export default function AddNewBeanPage(){

    const [image, setImage] = useState<string | null>(null);
    const [SliderState, setSliderState] = useState<number>(0);
    const [selectedServing, setSelectedServing] = useState<string | null>(null);
    const [selectedPlaces, setselectedPlaces] = useState<string | null>(null);


   const pickImage = async () => {
    // try{
    //     if(Platform.OS !== 'web'){
    //         if(status?.status !== 'granted'){
    //             const permissonRespose = await requestPermission();
    //             console.log({permissonRespose})
    //         }
    //     }
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:[ 'livePhotos'],
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    });

    if(!result.canceled){
        setImage(result.assets[0].uri);
    }


    // } catch(error){
    //     console.log(error);
    // }
    
    // handle the slider value

    }
    return (
    <View style={{justifyContent: 'center', flex:1 }}>
            {/* page view */}
        <View style={addBean.pageStyle}
        >

            {/* Name of coffie */}
            <View style={{flexDirection: 'row'}}>
                <Image
                    source={Bean.src}
                    style={{ width: 200, height: 200 }}
                />
                <Text>
                    {Bean.name}
                </Text>
            </View>

            {/* notes and add picture */}
            <View style={{flexDirection: 'row'}}>
                <TextInput
                style={{width: 300}}
                placeholder="Hur var kaffet?"
                >

                </TextInput>

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
                         <Ionicons style={{justifyContent: 'center', alignItems: 'center'}} name="image-outline" size={40} color={'#393E46'} />
                         <Text style={camera.palceholderText}>  Lägg till foto  </Text>
                        </View>
                    )}
                </TouchableOpacity>
                
                
            </View>

            {/* GRADE (slider)*/}
            <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
                <Text style= {{fontWeight: 'bold', fontSize: 20}}>
                        BETYG: 
                 </Text>
                <Text style= {{fontWeight: 'bold', fontSize: 20}}>
                         {SliderState.toString().slice(0,1)}
                 </Text>
            </View>
            <View style={{alignItems:'center'}}>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              value={SliderState}
              onValueChange={(value) => setSliderState(value)}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              
            />
            </View>

            {/* Serveringsstil */}
            <View style={{height: 100}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20}}>Serveringsstil</Text>
            
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
            {/* Place*/}
            <View style={{height:60}}>
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
            {/* CHECK-IN BUTTON*/}
            <View style={{ width:'100%',  backgroundColor:'green', height: 60, justifyContent: 'center'}}>
                <TouchableOpacity
                style={{justifyContent:'center', alignItems:'center'}}
                onPress={() => [null]}
                >
                    <Text style={{borderWidth: 2, borderRadius: 12, padding: 14, color: 'white'}}> CHECKIN-IN</Text>


                </TouchableOpacity>
                </View>
        
        </View>

    </View>
    );
}

const addBean = StyleSheet.create({

    pageStyle:{
        justifyContent: 'center',
        flex:1 

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
        backgroundColor: "",
        borderColor:"",
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
        marginTop: 8,

    },

})