import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';

 
import Home from '../../screens/home/Home';
import RecipeMenu from '../../screens/recipes/RecipeMenu';
import ConfigUser from '../../screens/configUser/MenuUser';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: 'red',
        }}
        >
            <Tab.Screen name="HomeScreen" component={Home} options={{tabBarLabel: 'Home',}}/>
            <Tab.Screen name="Recipes" component={RecipeMenu} options={{tabBarLabel: 'Recetas', headerShown: false}} />
            <Tab.Screen name="ConfigUser" component={ConfigUser} options={{tabBarLabel: 'Configuración', headerShown: false}} />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
            <MyTabs/>
    );
}