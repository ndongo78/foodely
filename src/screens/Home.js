import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
  Animated,
  TextInput,
  ScrollView,
  Platform,
  
} from 'react-native'
import tw from 'twrnc'
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from 'react-native-vector-icons'

import { menuItems } from '../../assets/constants/MenuItems'
import { CardItem } from '../components/CardItem'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useRef } from 'react'
import { productsContext } from '../context/ProductProvider'
import { Searchbar } from 'react-native-paper'


//console.log(height)
const Home = () => {
  const {
    products,
    fetchData,
    fetchAllData,
    searchProduct,
    searchList,
    notFound,
  } = useContext(productsContext)
  const navigation = useNavigation()
  const route = useRoute()
  const scrollY = useRef(new Animated.Value(0)).current
  const { cart } = useContext(productsContext)

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={tw`m-3`}>
          <View style={tw`flex-row mt-2 mb-3 ${Platform.OS === "web" && 'justify-center items-center'}`}>
          {Platform.OS === "web" ?
            <Text style={tw`text-4xl mt-2  text-center m-3`}> Que voulez-vous dîner aujourd'hui</Text>
            :(
              <>
                 <Text style={tw`text-8 mt-2`}> Que voulez-vous </Text>
             <View style={tw`flex-row mt-2 mb-3`} />
            <Text style={tw`text-2xl ml-1 mb-2 mt-2`}> dîner aujourd'hui</Text>
              </>
            )
          }
            <Image
              source={require('../../assets/images/petit-dejeuner.png')}
              style={[tw`w-10 h-10 ml-2`, { resizeMode: 'contain' }]}
            />
          </View>
        </View>
        <View
          style={tw`flex-row self-center items-center
    rounded-xl  m-4`}
        >
          <Searchbar
      placeholder="Search"
      style={tw`bg-white w-full outline-none`}
      onChangeText={(text) => searchProduct(text)}
    />
        </View>
        {searchList.length > 0 ? (
          <View style={tw`flex-row flex-wrap`}>
            {searchList.map((item) => (
              <Pressable
                onPress={() => navigation.navigate('Detail', { item: item })}
                style={tw`flex-row  flex-wrap ml-3 mr-3 ${Platform.OS === "web" && "mr-3"}  `}
                key={item._id}
              >
                <CardItem item={item} scrollY={scrollY} />
              </Pressable>
            ))}
          </View>
        ) : (
          <>
          {
            notFound && <Text style={tw`text-red-600 text-xl italic ml-2 mb-5`}>
            Désole pas d'article avec l'orthographe
          </Text>
          }
            <View style={tw`${Platform.OS === "web" && "self-center m-4 shadow"}`}>
              <FlatList
                data={menuItems}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={tw`m-4 w-20 h-15 bg-white justify-center items-center rounded[25] shadow-2xl`}
                    activeOpacity={0.8}
                    onPress={() => fetchData(item.category)}
                  >
                    <Image
                      source={item.img}
                      style={[tw`w-10 h-10`, { resizeMode: 'contain' }]}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
              <Text style={tw`text-2xl m-2 p-2`}>Recommander pour vous !</Text>
            {products.length !== 0 ? (
              <View style={tw`flex-row flex-wrap`}>
                {products.map((item) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Detail', { item: item })
                    }
                    style={tw`flex-row  flex-wrap ml-3 mr-3`}
                    key={item._id}
                  >
                    <CardItem item={item} scrollY={scrollY} />
                  </Pressable>
                ))}
              </View>
            ) : (
              <View style={tw`justify-center items-center mt-10`}>
                <ActivityIndicator
                  size={100}
                  animating={true}
                  color={'#000000'}
                />
              </View>
            )}
          </>
        )}
      </ScrollView>
      <View
        style={tw`flex-row  absolute ${Platform.OS ==="web" ? "  self-center rounded-full bg-amber-400 text-white w-[70%]" :"w-full rounded-t-2xl"} 
     bottom-2  h-16 justify-between items-center `}
      >
        <TouchableOpacity style={tw`ml-6 items-center`}>
          <Ionicons name="ios-home-outline" size={25} />
          {route.name === 'Home' && (
            <Text style={tw`bg-amber-500 h-2 w-2 rounded-full`} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-search-outline" size={25} />
        </TouchableOpacity>
        <View style={tw`bg-transparent -mt-4`}>
          <TouchableOpacity
            style={tw`-mt-5 bg-amber-500 rounded-full h-17 w-17 items-center justify-center`}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text
              style={tw`absolute z-100 text-white right-3 -top-2 rounded-full font-bold bg-red-800 p-1`}
            >
              {' '}
              {cart.length}{' '}
            </Text>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={35}
              style={tw`text-white rounded-b-55`}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Favorite")}>
          <MaterialIcons name="favorite-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={tw`mr-6 `} onPress={()=>navigation.navigate("Profil")}>
          <Ionicons name="person-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f7ed',
    justifyContent: 'space-between',
  },
})
