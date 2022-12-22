import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { urlFor } from '../sanity';
import Currency from "react-currency-formatter"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
const DishRow = ({id, name, price, image, description}) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <>
            <TouchableOpacity className={`bg-white border-y p-3 border-gray-300 ${isPressed && "border-b-0"}`}
            onPress={() => setIsPressed(!isPressed)}>
                <View className="flex-row items-center">
                    <View className="flex-1">
                        <Text className="text-lg mb-1 ">{name}</Text>
                        <Text className="text-gray-500">{description}</Text>
                        <Text className="text-gray-500 pt-3">
                            <Currency
                                quantity={price}
                                currency="TRY"
                            />
                        </Text>
                    </View>
                    <Image 
                        style={{
                            borderWidth: 1,
                            borderColor: "#F3F3F4"
                        }}
                        source={{
                            uri: urlFor(image).url()
                        }} 
                        className="w-20 h-20 rounded-lg"
                    />
                </View>
                
            </TouchableOpacity>
            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color={"#38A9AE"} />
                        </TouchableOpacity>
                        <Text className="text-xl">0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon size={40} color={"#38A9AE"} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow;