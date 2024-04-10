import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigation/taps/MainTabs";

//Screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainTabs from "./navigation/taps/MainTabs";
import Home from "./screens/home/Home";

const Stack = createNativeStackNavigator();

function MyStacks() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <MyStacks />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
