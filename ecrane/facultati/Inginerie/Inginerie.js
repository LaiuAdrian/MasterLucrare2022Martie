import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome ,FontAwesome5,Entypo } from '@expo/vector-icons'
import LicentaInginerie from './LicentaInginerie';
import MasterInginerie  from './MasterInginerie'
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
          tabBarActiveBackgroundColor:'#2c4894',
          tabBarIconStyle: { display: "none" },
        }}
          > 
            <Tab.Screen name="LicentaInginerie" component={LicentaInginerie} options={{ title: "Licenta" }} />
            <Tab.Screen name="MasterStinte" component={MasterInginerie} options={{ title: "Master" }} />
      </Tab.Navigator>
     
    );
  }
  export default MyTab