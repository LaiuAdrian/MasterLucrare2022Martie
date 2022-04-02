import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome ,FontAwesome5,Entypo } from '@expo/vector-icons'
import LicentaStinteEconomice from './LicentaStinteEconomice';
import MasterStinteEconomice  from './MasterStinteEconomice'
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
          tabBarActiveBackgroundColor:'#d5292c',
          tabBarIconStyle: { display: "none" },
        }}
          > 
            <Tab.Screen name="LicentaStinteEconomice" component={LicentaStinteEconomice} options={{ title: "Licenta" }} />
            <Tab.Screen name="MasterStinteEconomice" component={MasterStinteEconomice} options={{ title: "Master" }} />
      </Tab.Navigator>
     
    );
  }
  export default MyTab