import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Platform } from "react-native"
import Home from "../screens/Home"
import Detail from "../screens/Detail"
import Cart from "../screens/Cart"
import tw from 'twrnc';
import { Avatar } from 'react-native-paper';
import OnboardingScreen from '../components/Onboarding';
import Payement from "../screens/Payement";
import Profil from '../screens/Profil';
import Favorite from '../screens/Favorite';


const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS==="web"? "#e9f7ed" :'#e9f7ed',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign: "center"
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      {/* <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft: () => (
          <View style={tw`${Platform.OS ==="web" ? "flex-col m-6" :""}`}>
            <Text style={tw`font-bold italic text-2xl `}>Bonjour John  </Text>
          </View>
        ),
        headerRight: () => (
          <View style={tw`${Platform.OS ==="web" && "mt-7 mr-7"}`}>
            <Avatar.Image
              source={{
                uri: `https://picsum.photos/200/300`,
              }}
              size={65}
              style={tw`rounded-full shadow-xl bg-white items-center `}
            />
          </View>
        ),
        headerTitle: ""
      }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{
         
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
         
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false
        }}
      />
        <Stack.Screen
            name="Payement"
            component={Payement}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  );
}

export default MyStack