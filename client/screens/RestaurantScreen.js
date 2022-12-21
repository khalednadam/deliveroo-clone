import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id, 
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat
        }
    } = useRoute();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <ScrollView>
            <View className="relative">
                <Image 
                source={{
                    uri: urlFor(imgUrl).url()
                }}    
                className="h-56 bg-gray-300 p-4 "
                />
                <TouchableOpacity className="absolute top-12 left-5 bg-gray-200 p-3 rounded-full drop-shadow-sm"
                onPress ={() =>{
                    navigation.goBack();
                }}>
                    <ArrowLeftIcon size={20} color={"#38A9AE"} />
                </TouchableOpacity>
                <View className="px-4 pt-4 bg-white">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="p-2">
                        <View className="flex-row space-x-1 items-center">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-cs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> . {genre}</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen