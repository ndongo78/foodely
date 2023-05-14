import React, { useContext, useEffect, useRef } from 'react';
import tw from "twrnc";
import { Image, Text, View, Dimensions, Pressable, Alert, TouchableOpacity, Animated, Easing, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { productsContext } from '../context/ProductProvider';
const { width } = Dimensions.get('window')

//console.log('width',width)

export const CardItem = ({ item, scrollY }) => {
    const navigation = useNavigation();
    const {addToCart} = useContext(productsContext);
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={[tw`bg-white shadow-xl ${Platform.OS ==="web" ? "w-[320px] flex-col "  : `w-${width / 10.6}` } m-3  relative mt-15 shadow-2xl   ${Platform.OS !="web" && "h-50"} rounded-xl justify-between`,
        {
            opacity: fadeAnim,
            transform: [{
                translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                }),

            }]

        }]}
        >
            <Image
                source={{ uri: item.image }}
                style={[{ width: Platform.OS==="web"  ? 220 :100, height: Platform.OS==="web"  ? 150 :100, resizeMode: 'contain' }, tw`absolute -top-10 left-15`]}
            />
            <View style={tw`items-center mt-15 ${Platform.OS ==="web" && "mt-35"}`}>
                <Text style={tw`text-2xl font-bold m-2`}> {item.name} </Text>
                <Pressable
                    onPress={() => navigation.navigate("Detail", { item: item })}
                //style={tw`flex-row  flex-wrap ml-3 mr-3`}
                >
                    <Text style={tw` text-blue-500 `}>voir plus ...</Text>
                </Pressable>
            </View>
            <View style={tw`flex-row justify-between m-6`}>
                <Text style={tw`text-xl`}> {item.price} € </Text>
                <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={tw`shadow-2xl rounded ${Platform.OS==="web" ? "bg-yellow-500" :"bg-[#111] rounded-full"} `}
                >
                    {Platform.OS==="web" ? <Text style={tw`p-2 text-xl`}>Acheter</Text> :<AntDesign name={'plus'} size={25} color={'#fff'} /> }
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

