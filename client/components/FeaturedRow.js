import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity';

const FeaturedRow = ({id, title, description}) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() =>{
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            restaurants[] ->{
              ...,
              dishes[] ->, 
              type ->{
                name
              }
            }
          }[0]
          
        `, {id})
        .then(data =>{
            setRestaurants(data.restaurants)
            console.log(data)
        })
    }, [id])  
    console.log(restaurants);
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-xl">{title}</Text>
                <ArrowRightIcon color="#38A9AE"/>
            </View>
            <Text className="text-gray-500 text-xs px-4">{description}</Text>
            <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4 "
            >
                {restaurants?.map((restaurant) =>(
                    <RestaurantCard 
                    key={restaurant._id}
                    id = {restaurant._id}
                    imgUrl={restaurant.image}
                    title= {restaurant.name}
                    rating = {restaurant.rating}
                    genre = {restaurant.type?.name}
                    address = {restaurant.address}
                    shortDescription = {restaurant.shortDescription}
                    dishes = {restaurant.dishes}
                    long={restaurant?.long}
                    lat ={restaurant?.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow