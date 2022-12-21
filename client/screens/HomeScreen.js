import { SafeAreaView, View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import FeaturedRow from '../components/FeaturedRow'
import { ChevronDownIcon,
         UserIcon,
         MagnifyingGlassIcon,
         AdjustmentsHorizontalIcon
} from 'react-native-heroicons/outline';
import sanityClient from '../sanity';
import Categories from '../components/Categories';
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false
        });
    }, [])

    useEffect(() =>{
        sanityClient.fetch(`
        *[_type == 'featured'] {
            ...,
            restaurants[] ->{
              ...,
              dishes[] ->{
                ...
              }
            }
          }`).then(data => {
            setFeaturedCategories(data)
          })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full"
                />
                <View className="flex-1">
                    <Text className="text-xs text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#38A9AE" />
                    </Text>   
                </View>
                <UserIcon size={25} color="#38A9AE" />
            </View>
            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 px-4">
                <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3 rounded-xl">
                    <MagnifyingGlassIcon size={20} color="gray"/>
                    <TextInput 
                        placeholder='Search for restaurants'
                        keyboardType='default' 
                    />
                </View>
                <AdjustmentsHorizontalIcon color="#38A9AE"/>
            </View>
            <ScrollView 
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100
            }}>
                {/* <Categories /> */}
                {featuredCategories.map(category => (
                    <FeaturedRow
                        key={category._id}
                        title={category.name}
                        id={category._id}
                        description={category.shortDescription}
                    />
                ))}
               
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;