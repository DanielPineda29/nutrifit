import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';

 
import Home from '../../screens/home/Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: 'red',
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home',}}/>
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
            <MyTabs/>
    );
}