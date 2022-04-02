import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Acasa from '../ecrane/Acasa';
import Postari from '../ecrane/Info';
import CreazaCont from '../ecrane/CreazaCont';
import Login from '../ecrane/Login';
import Contul_Meu from '../ecrane/Contul_Meu';
import Favorite from '../ecrane/Favorite';
import { FontAwesome ,FontAwesome5,Entypo,Ionicons } from '@expo/vector-icons'
import MyStack from './MyStack';
import Contact from '../ecrane/Contact'
const Tab = createBottomTabNavigator();
  const MyTab=() =>{
    return (
    
      <Tab.Navigator   
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
                   

         

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} focused />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#1f1f85',
        tabBarInactiveTintColor: 'black',
        // tabBarActiveBackgroundColor:'#7ca233',
                    
      })}
        > 
      
            <Tab.Screen name="Acasa" component={Acasa}
                options={({ route}) => ({
                     tabBarIcon: ({color, size }) => (
                          <Entypo name='home'  color={'#1f1f85'}  size={26} />      
                      )
                  })} 
      
             />
                     <Tab.Screen name="Postari" component={Postari} 
                  options={({ route}) => ({
                      tabBarIcon: ({color, size }) => (

                        <FontAwesome5 name='newspaper' color={'#1f1f85'} size={26} />

                      )
                    })} 
              />
            {/* <Tab.Screen name="Contul Meu" component={Contul_Meu} 
                  options={({ route}) => ({
                      tabBarIcon: ({color, size }) => (
                        <FontAwesome name='heart' color={'red'} size={26} />


                      )
                    })} 
              /> */}
       
               <Tab.Screen name="Login" component={Login} 
                  options={({ route}) => ({
                      tabBarIcon: ({color, size }) => (
                        <FontAwesome name='user' color={'#1f1f85'} size={26} />
                      )
                    })} 
              />
                  <Tab.Screen name="Contact" component={Contact} 
                  options={({ route}) => ({
                      tabBarIcon: ({color, size }) => (
                        <Ionicons name="call" size={24} color="#1f1f85" />
                      )
                    })} 
              />
            </Tab.Navigator>
     
    );
  }
  export default MyTab