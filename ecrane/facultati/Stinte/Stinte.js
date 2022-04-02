import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome ,FontAwesome5,Entypo } from '@expo/vector-icons'
import LicentaStinte from './LicentaStinte';
import MasterStinte  from './MasterStinte'
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
          tabBarActiveBackgroundColor:'#167543',
          tabBarIconStyle: { display: "none" },
        }}
          > 
            <Tab.Screen name="LicentaStinte" component={LicentaStinte} options={{ title: "Licenta" }} />
            <Tab.Screen name="MasterStinte" component={MasterStinte} options={{ title: "Master" }} />
      </Tab.Navigator>
     
    );
  }
  export default MyTab