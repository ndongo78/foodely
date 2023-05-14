
import React, {useState} from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from "react-native";
import tw from 'twrnc';
import { RadioButton } from 'react-native-paper';


const Payement=()=>{
    const [checked, setChecked] = useState("card");
    return(
        <View style={tw`bg-[#e9f7ed] flex-1`}>
            <Text style={tw`text-2xl font-bold m-4 text-center`}>Sélectionner un mode de payement</Text>
        <ScrollView  contentContainerStyle={tw`justify-center items-center m-3 p-2`}>
           <TouchableHighlight style={tw`border-2 shadow-sm shadow-blue-500/40 rounded-xl border-lime-500   w-85% justify-center items-center`}
           onPress={()=>setChecked('card')}
           >
             <>
                 <RadioButton
                     value={checked}
                     status={checked === "card" && "checked"}
                     color={"blue"}
                 />
                 <Image source={require('../../assets/credit-card.png')} style={tw`w-60 h-25`} />
             </>
           </TouchableHighlight>
            <TouchableHighlight style={tw`border-2 shadow-sm shadow-blue-500/40 rounded-xl border-lime-500 m-3   w-85% justify-center items-center`}
                                onPress={()=>setChecked('paypal')}
            >
                <>
                    <RadioButton
                        value={checked}
                        status={checked === "paypal" && "checked"}
                        color={"blue"}
                    />
                    <Image source={require('../../assets/paypal.png')} style={tw`w-60 h-25`} resizeMode={"contain"} />
                </>
            </TouchableHighlight>
            <TouchableHighlight style={tw`border-2 shadow-sm shadow-blue-500/40 rounded-xl border-lime-500 m-3   w-85% justify-center items-center`}
                                onPress={()=>setChecked('gpay')}
            >
                <>
                    <RadioButton
                        value={checked}
                        status={checked === "gpay" && "checked"}
                        color={"blue"}
                    />
                    <Image source={require('../../assets/gpay.png')} style={tw`w-60 h-25`} resizeMode={"contain"} />
                </>
            </TouchableHighlight>
            <TouchableHighlight style={tw`border-2 shadow-sm shadow-blue-500/40 rounded-xl border-lime-500 m-3   w-85% justify-center items-center`}
                                onPress={()=>setChecked('paylib')}
            >
                <>
                    <RadioButton
                        value={checked}
                        status={checked === "paylib" && "checked"}
                        color={"blue"}
                    />
                    <Image source={require('../../assets/paylib.png')} style={tw`w-60 h-25`} resizeMode={"contain"} />
                </>
            </TouchableHighlight>
        </ScrollView>
        </View>
    )
}

export default Payement