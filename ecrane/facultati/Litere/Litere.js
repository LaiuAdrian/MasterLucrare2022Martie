import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome ,FontAwesome5,Entypo } from '@expo/vector-icons'
import LitereLicenta from './LitereLicenta';
import MasterLitere  from './MasterLitere'
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
          tabBarActiveBackgroundColor:'#882f81',
          tabBarIconStyle: { display: "none" },
        }}
          > 
            <Tab.Screen name="LitereLicenta" component={LitereLicenta} options={{ title: "Licenta" }} />
            <Tab.Screen name="MasterLitere" component={MasterLitere} options={{ title: "Master" }} />
      </Tab.Navigator>
     
    );
  }
  export default MyTab