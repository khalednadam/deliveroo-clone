import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
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
            headerShown: true,
            title: title
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
                {/* <TouchableOpacity className="absolute top-12 left-5 bg-gray-200 p-3 rounded-full drop-shadow-sm"
                onPress ={() =>{
                    navigation.goBack();
                }}>
                    <ArrowLeftIcon size={20} color={"#38A9AE"} />
                </TouchableOpacity> */}
                <View className="px-4 pt-4 bg-white flex-1">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="">
                        <View className="flex-row space-x-1 items-center">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-cs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> . Nearby</Text>
                            <MapPinIcon color="gray" opacity={0.5} size={22} />
                            <Text className="text-gray-500">{address}</Text>
                        </View>
                        <Text className="text-gray-500 pt-5">
                            {shortDescription}
                        </Text>
                    </View>    
                    <TouchableOpacity className="flex-row space-x-2 mt-3 py-4 items-center border-y border-gray-300 flex-1">
                        <QuestionMarkCircleIcon color={"gray"} opacity={0.5} size={22} />
                        <Text className="font-bold flex-1">Have a food allergy?</Text>
                        <ChevronRightIcon />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-xl font-bold p-5">Menu</Text>
                    {dishes?.map(dish =>(
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            price={dish.price}
                            image={dish.image}
                            description={dish.shortDescription}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen;