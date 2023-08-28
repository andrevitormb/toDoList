import { View,Text,Image } from "react-native";
import React from 'react';
import Input from '../../components/Input';
export default function Home (){
    return(
        <>
            <View className="bg-gray-700 z-10 flex h-1/4  justify-center items-center">
                <Image 
                source={require('../../../assets/Logo.png')}/>
            </View>
            <Input/>
            <View className="bg-gray-500 flex-1">
            </View>
        </>
    )
}