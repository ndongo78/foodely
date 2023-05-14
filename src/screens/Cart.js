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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import tw from "twrnc";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar } from "react-native-paper";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";
import { productsContext } from "../context/ProductProvider";
import { CardCart } from "../components/CardCart";
import LottieView from "lottie-react-native";

const { height } = Dimensions.get("window");
const Cart = () => {
  const { cart, total, totalArticle, deleteFromCart } =
    useContext(productsContext);
  const navigation = useNavigation();
  const animation = useRef(null);

  //  console.log("cart",cart)
  useEffect(() => {
    if (animation.current) {
      animation.current.play(8, 25);
    }
  }, [animation]);

  const onRowDidOpen = (rowKey) => {
    //Alert.alert("")
    //console.log("This row opened", rowKey);
  };

  const renderItem = (data) => <CardCart item={data.item} />;

  const renderHiddenItem = (data) => (
    <View
      style={tw`bg-transparent flex-row justify-end w-80%
             self-end items-center mt-6.7  h-29 mr-4`}
    >
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteFromCart(data.item.key)}
      >
        <MaterialCommunityIcons name={"delete"} size={45} color={"red"} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={tw`justify-between flex-row items-center `}>
        <Pressable
          style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="ios-chevron-back-sharp" size={35} />
        </Pressable>
        <Text style={tw`text-2xl font-semibold`}>votre panier</Text>
        <Pressable style={tw`rounded-full m-2 p-2 justify-center items-center`}>
          <Avatar.Image
            source={{
              uri: `https://picsum.photos/200/300`,
            }}
            size={40}
            style={tw`rounded-3xl shadow-xl bg-white items-center`}
          />
        </Pressable>
      </View>
      <View style={tw` h-${height / 5.9}`}>
        {cart.length === 0 ? (
          <View
            style={{
              width: 500,
              height: 500,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Text
              style={{
                position: "absolute",
                top: 250,
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Votre panier vide !!!
            </Text>
             {
              Platform.OS != "web" && <LottieView
              loop={false}
              ref={animation}
              style={{
                width: 500,
                height: 500,
                // backgroundColor: '#eee',
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require("../../assets/constants/emptyCart.json")}
            />
             }
          </View>
        ) : (
          <SwipeListView
            disableRightSwipe
            data={cart}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-50}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
            closeOnScroll={true}
          />
        )}
      </View>

      {cart.length > 0 && (
        <View
          style={tw`  absolute w-100%
       bottom-0 bg-white h-40 rounded-t-5 p-2 shadow-xl`}
        >
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-xl font-bold`}>Total à payer</Text>
            <Text style={tw`text-xl font-bold mr-2`}>{total()}€</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-xl font-bold`}>Articles</Text>
            <Text style={tw`text-xl font-bold  mr-2`}> {totalArticle()} </Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-xl font-bold`}>Livraison</Text>
            <Text style={tw`text-xl font-bold  mr-2`}>Gratuit</Text>
          </View>
          <TouchableOpacity
            style={tw`bg-amber-400 self-center m-2 rounded-5`}
            activeOpacity={0.6}
            onPress={()=>navigation.navigate("Payement")}
          >
            <Text style={tw`p-3.3 text-xl  mr-2`}>Payer la commande</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Platform.OS === "android" ? "#e9f7ed" :"#e9f7ed",
  },
});
