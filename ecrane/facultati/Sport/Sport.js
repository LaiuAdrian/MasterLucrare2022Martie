import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome ,FontAwesome5,Entypo } from '@expo/vector-icons'
import LicentaSport from './LicentaSport';
import MasterSport  from './MasterSport'
const Tab = createBottomTabNavigator();
  const MyTab=() =>{
    return (
    
        <Tab.Navigator   
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 16,    
          },
          headerShown: false,
          tabBarActiveTintColor: '#ffff',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor:'#0090cc',
          tabBarIconStyle: { display: "none" },
        }}
          > 
            <Tab.Screen name="LicentaSport" component={LicentaSport} options={{ title: "Licenta" }} />
            <Tab.Screen name="MasterSport" component={MasterSport} options={{ title: "Master" }} />
      </Tab.Navigator>
     
    );
  }
  export default MyTab