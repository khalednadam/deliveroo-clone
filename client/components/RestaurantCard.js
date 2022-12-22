import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate("Restaurant", {
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
            })
        }}
        className=" px-2">
            <Image 
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className="h-36 w-64"
            />
            <View className="px-3 pb-4 bg-white">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row space-x-1 items-center">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-cs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}</Text>
                </View>
                <View className="pt-3 flex-row items-center space-x-1">
                    <MapPinIcon color="gray" size={22} />
                    <Text>Nearby | {address}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

export default RestaurantCard