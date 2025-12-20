import { beanList } from "@/constants/defultValus";
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#faf7f2' }}>
                <Text style={{ color: '#6f4e37' }}>Bean not found</Text>
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
        <View style={{ flex: 1, backgroundColor: '#faf7f2' }}>
            <ScrollView contentContainerStyle={addBean.pageStyle}>
                <View>
                    <View style={{justifyContent:'center', alignItems: 'center', paddingBottom: 12}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#6f4e37'}}>
                            {bean.name}
                        </Text>
                    </View>
                    
                    {/* Bean image and photo picker */}
                    <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                        <View style={camera.beanImageContainer}>
                            <Image
                                source={Bean.src}
                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                            />
                        </View>

                        {/* Add picture */}
                        <TouchableOpacity
                            style={camera.imagePicker}
                            onPress={pickImage}
                        >
                            {image ? (
                                <Image source={{uri:image}} style={camera.previewImage} />  
                            ) : (
                                <View style={camera.placeholderContainer}>
                                    <Ionicons name="image-outline" size={40} color={'#8b7355'} />
                                    <Text style={camera.palceholderText}>Lägg till foto</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Notes */}
                    <View style={addBean.notesContainer}>
                        <TextInput
                            style={addBean.notesInput}
                            placeholder="Hur var kaffet?"
                            placeholderTextColor="#8b7355"
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                </View>

                {/* Divider */}
                <Divider />
                             
                {/* GRADE (slider) */}
                <View style={addBean.sectionContainer}>
                    <Text style={addBean.sectionTitle}>
                        BETYG: {SliderState.toString().slice(0,1)}
                    </Text>
                    <View style={{alignItems:'center', width: '100%', paddingHorizontal: 10}}>
                        <Slider
                            style={{width: '100%', height: 40}}
                            minimumValue={0}
                            maximumValue={10}
                            value={SliderState}
                            onValueChange={(value) => setSliderState(value)}
                            thumbTintColor="#6f4e37"
                            minimumTrackTintColor="#c19a6b"
                            maximumTrackTintColor="#d4c4b0"
                        />
                    </View>
                </View>

                {/* Divider */}
                <Divider />

                {/* Serveringsstil */}
                <View style={addBean.sectionContainer}>
                    <Text style={addBean.sectionTitle}>Serveringsstil</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {Serveringsstilar.map((stil, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    servingStyles.servingItem,
                                    selectedServing === stil && servingStyles.selectedItem
                                ]}
                                onPress={() => setSelectedServing(stil)}
                            >
                                <FontAwesome 
                                    name="coffee" 
                                    size={24} 
                                    color={selectedServing === stil ? "#f5ebe0" : "#6f4e37"} 
                                />
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

                {/* Divider */}
                <Divider />

                {/* Place */}
                <View style={addBean.sectionContainer}>
                    <Text style={addBean.sectionTitle}>Plats</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {Places.map((place, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    servingStyles.servingItem,
                                    selectedPlaces === place && servingStyles.selectedItem
                                ]}
                                onPress={() => setselectedPlaces(place)}
                            >
                                <FontAwesome 
                                    name="home" 
                                    size={24} 
                                    color={selectedPlaces === place ? "#f5ebe0" : "#6f4e37"} 
                                />
                                <Text style={[     
                                    servingStyles.servingText,
                                    selectedPlaces === place && servingStyles.selectedText
                                ]}>
                                    {place}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Divider */}
                <Divider />

                {/* CHECK-IN BUTTON */}
                <View style={{ paddingBottom: 20}}>
                    <TouchableOpacity
                        style={addBean.checkInButton}
                        onPress={() => router.push("/")}
                    >
                        <Text style={addBean.checkInButtonText}>CHECK-IN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const addBean = StyleSheet.create({
    pageStyle:{
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        paddingTop: 8, 
        paddingBottom: 12,
        marginHorizontal: 10,
        marginBottom: 10,
        gap: 12,
        backgroundColor: '#faf7f2',
        borderRadius: 18,
    },

    sectionContainer: {
        alignItems: 'center',
        paddingVertical: 4, 
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 4, 
        color: '#6f4e37',
    },

    notesContainer: {
        paddingTop: 8,
    },

    notesInput: {
        width: '100%',
        fontSize: 16,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#c19a6b',
        backgroundColor: '#ecdfd0',
        color: '#6f4e37',
        minHeight: 100,
        textAlignVertical: 'top',
    },

    checkInButton: {
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#6f4e37',
        borderColor: '#c19a6b',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#6f4e37',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },

    checkInButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5ebe0',
        letterSpacing: 1,
    },
})

const servingStyles = StyleSheet.create({
    servingItem: {
        padding: 12,
        margin: 5,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "#c19a6b",
        backgroundColor: '#ecdfd0',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
        shadowColor: '#6f4e37',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    selectedItem: {
        backgroundColor: "#6f4e37",
        borderColor: "#c19a6b",
    },
    servingText: {
        marginTop: 5,
        color: "#6f4e37",
        fontWeight: '600',
    },
    selectedText: {
        color: "#f5ebe0",
    },
})

const camera = StyleSheet.create({
    beanImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#c19a6b',
        overflow: 'hidden',
        backgroundColor: '#ecdfd0',
    },

    imagePicker: {
        width: 100,
        height: 100,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#c19a6b',
        backgroundColor: '#ecdfd0',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    previewImage: {
        width: '100%',
        height: '100%',
    },

    placeholderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    palceholderText: {
        marginTop: 4,
        fontSize: 12,
        fontWeight: '600',
        color: '#8b7355',
    },
})