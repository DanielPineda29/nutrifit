//Screens
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import MainTabs from "../../navigation/taps/MainTabs";
import Home from "../../screens/home/Home";
import RecipesList from "../../screens/recipes/RecipesList";
import RecipesInfo from "../../screens/recipes/RecipesInfo";
import UserInfo from "../../components/user/UserInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStacks() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipesList"
          component={RecipesList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipesInfo"
          component={RecipesInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

export default function MainStacks () {
    return(
        <MyStacks />
    );
}