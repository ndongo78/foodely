import {
    View,
    Text,
    Platform,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Pressable,
    Image,
    Dimensions,
    TouchableOpacity, ScrollView
} from "react-native"
import {Ionicons ,AntDesign,MaterialCommunityIcons} from "react-native-vector-icons"
import tw from 'twrnc';
import React, {useContext, useEffect, useRef, useState} from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {useNavigation, useRoute} from "@react-navigation/native";
import {productsContext} from "../context/ProductProvider";
import {CardDetaill} from "../components/CardDetaill";
import LottieView from "lottie-react-native";


const {width,height}=Dimensions.get('window')

const Detail=()=>{
    const {addToCart,cart} = useContext(productsContext);
    const navigation=useNavigation()
    const [isClicked, setIsClicked] = useState(false);
    const animation = useRef(null);
    const router=useRoute()
    const {item}=router.params

    useEffect(() => {
        if (animation.current && isClicked) {
            animation.current.play(15, 150);
        }
    }, [animation,isClicked]);

    return(
    <SafeAreaView style={styles.container}>
     <View style={tw`justify-between flex-row`}>
       <Pressable
           style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}
           onPress={()=>navigation.navigate("Home")}
       >
        <Ionicons name="ios-chevron-back-sharp" size={35} style={tw`p-1 `} />
       </Pressable>
       <Pressable
           style={tw`bg-white rounded-full m-2 p-2 justify-center items-center bg-amber-500`}
          onPress={()=>navigation.navigate("Cart")}
       >
           <Text style={tw`absolute z-100 text-white right-3 -top-2 rounded-full font-bold bg-red-800 p-1`}> {cart.length} </Text>
           <MaterialCommunityIcons name="shopping-outline" size={30} style={tw`p-2 text-white`} />
           {/*<Text>❤️</Text>*/}
       </Pressable>
     </View>
        <ScrollView>
            <View style={tw`m-8`}>
            <CardDetaill item={item} />
            </View>
            {
                isClicked ?
                    (
                        Platform.OS !== "web" &&
                        <LottieView
                            loop={false}
                            ref={animation}
                            source={require('../../assets/lf30_editor_emvnd3ts.json')}
                            style={tw`w-60 m-2 h-20  items-center justify-center self-center rounded-6`}
                        />
                    )
                    :
                    (
                        <TouchableOpacity
                            style={tw` bg-amber-500   w-55 m-2  items-center justify-center self-center rounded-6`}
                            onPress={()=>{
                                addToCart(item)
                                setIsClicked(Platform.OS === "web" ? false : true)
                            }}
                        >
                            <Text style={tw`text-white p-3 text-2xl `}>Je commande</Text>
                        </TouchableOpacity>
                    )
            }

        </ScrollView>
    </SafeAreaView>
    )
}

export default  Detail

const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Platform.OS === "web" ? "#e9f7ed" :"#e9f7ed",
  }
});