import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {Rating} from "react-native-ratings";
import {AntDesign} from "react-native-vector-icons";
import {useContext} from "react";
import {productsContext} from "../context/ProductProvider";

const {width, height} =Dimensions.get('window')

export const CardDetaill=({item})=>{
    const {addQty,removeQty} = useContext(productsContext);
    return(
        <>
            <View style={tw`justify-center items-center`}>
                <Image
                    source={{uri:item.image}}
                    style={[{width:width-50,height:height/3.2,resizeMode:'contain'},tw`m-4 `]}
                />
            </View>
            <View style={tw`mt-4`}>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`ml-2 text-3xl font-semibold`}>{item.name}</Text>
                    <Text style={tw`ml-2 text-3xl font-semibold mr-3`}>{item.price}€</Text>
                </View>
                <View style={tw`justify-start mb-15`}>
                    <Rating
                        //showRating
                        onFinishRating={()=>{}}
                        style={tw`absolute left-2 top-3 bg-slate-300`}
                        tintColor={'#999'}
                        readonly={true}
                        ratingCount={5}
                        startingValue={Number(item.note)}
                    />
                </View>
                <View style={tw`flex-row justify-between mt-4`}>
                    <View style={tw`flex-row`}>
                        <View style={tw`flex-row items-end justify-center`}>
                            <Text style={tw`text-4xl`}>🔥</Text>
                            <Text style={tw`text-xs`}>210 colories</Text>
                        </View>
                        <View style={tw`flex-row items-end justify-center ml-4`}>
                            <Text style={tw`text-5xl`}>🛵</Text>
                            <Text style={tw`text-xs`}>15 à 20mn</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row  bg-amber-400 mr-3 rounded-2xl`}>
                        <TouchableOpacity
                            style={tw`items-center justify-center p-2`}
                            onPress={()=>removeQty(item)}
                        >
                            <AntDesign name={'minus'} style={tw`text-2xl text-black font-bold`}    />
                        </TouchableOpacity>
                        <Text style={tw`text-2xl text-black font-bold items-center justify-center m-1`}> {item.qty} </Text>
                        <TouchableOpacity
                            style={tw`items-center justify-center p-2`}
                            onPress={()=>addQty(item)}
                        >
                            <AntDesign name={'plus'} style={tw`text-2xl text-black font-bold`}    />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={tw`text-2xl m-3 mt-4`}>Description </Text>
                    <View>
                        <Text style={tw`text-sm ml-1`}>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
                            calibrer une mise en page,
                            le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée
                        </Text>
                    </View>
                    <Text style={tw`text-2xl m-2 font-bold`}>{item.category !== "drink01" && "Ingrédients"}</Text>
                    <View style={tw`flex-row justify-around items-end mb-2`}>

                        {item.category !== "drink01" &&
                            <Image
                                source={require("../../assets/ingredients/salade.png")}
                                style={[tw`w-15 h-15 `,
                                    {resizeMode: 'contain'}]}
                            />
                        }
                        {item.category !== "drink01" &&
                            <Image
                                source={require("../../assets/ingredients/hache.png")}
                                style={[tw`w-15 h-15 `,
                                    {resizeMode: 'contain'}]}
                            />
                        }
                        {item.category !== "drink01" &&
                            <Image
                                source={require("../../assets/ingredients/fromage.png")}
                                style={[tw`w-15 h-15`,
                                    {resizeMode: 'contain'}]}
                            />
                        }
                        {item.category !== "drink01" &&
                            <Image
                                source={require("../../assets/ingredients/cornichon.png")}
                                style={[tw`w-15 h-15 `,
                                    {resizeMode: 'contain'}]}
                            />
                        }
                    </View>

                </View>
            </View>
        </>
    )
}
