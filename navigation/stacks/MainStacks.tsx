//Screens
import Login from "../../screens/auth/Login";
import Register from "../../screens/Register";
import MainTabs from "../../navigation/taps/MainTabs";
import RecipesList from "../../screens/recipes/RecipesList";
import RecipesInfo from "../../screens/recipes/RecipesInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavRecipes from "../../screens/favRecipes/FavRecipes";
import UserData from "../../screens/configUser/UserData";
import EditUser from "../../screens/configUser/EditUser";

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
          component={UserData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavRecipes"
          component={FavRecipes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUser}
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