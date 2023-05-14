import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// You can import from local files

// or any pure javascript modules available in npm
import MyStack from "./src/navigation/StackNavigator";
import ProductProvider from "./src/context/ProductProvider";

export default function App() {
  
  return (
    <ProductProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ProductProvider>
  );
}
