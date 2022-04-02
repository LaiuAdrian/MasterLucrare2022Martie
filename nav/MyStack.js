import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acasa from '../ecrane/Acasa'
import Info from '../ecrane/Contact'
import CreazaCont from '../ecrane/CreazaCont'
import MyTab from './MyTab';
import {createRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View ,Text,Image,TouchableOpacity} from 'react-native';
 import Inginerie from '../ecrane/facultati/Inginerie/Inginerie';
 import Litere from '../ecrane/facultati/Litere/Litere'
 import Stinte from '../ecrane/facultati/Stinte/Stinte';
 import StinteEconomice from '../ecrane/facultati/StinteEconomice/StinteEconomice';
 import Sport from '../ecrane/facultati/Sport/Sport';
 
const Stack = createStackNavigator();

let nume=''
let role =''
let arataNav;
  const MyStack=({navigation}) =>{
  const user = useSelector(state => state.user);

      if(user.umsUserData.length !== 0  ){
          role =user.umsUserData.role+':'
          nume = user.umsUserData.nume;
          grupa=user.umsUserData.grupa;
          an=user.umsUserData.an;
          arataNav=true
      }
     
  
  console.log(user.umsUserData)
    return (
      <NavigationContainer  >
            <Stack.Navigator  >
                <Stack.Screen  
                options={{
                  headerShown :arataNav,
                  // headerShown:false,
                  title: "",
                  headerStyle: {
                    backgroundColor: '#114b8a',           
                  },  
                  headerTitleStyle: {
                    color: 'white'
                  },
                  headerLeft: () => (
                    <View style={{marginLeft:10}}>
                    {
                      (user.umsUserData.length !== 0  ) ?
              
                        <Text style={{fontSize:16,color:'white'}}>{role}{nume} {grupa} {an}</Text>
                      :
                      <TouchableOpacity
                      onPress={()=>{
                           props.navigation.navigate('CreazaCont')
                      }}
                  >
                         <Text style={{fontSize:16,color:'white'}}> Bine ati venit! </Text>
                         </TouchableOpacity>
                      }
                    </View>
                ),
                  headerRight: () => (
                      <View style={{marginRight:10}}>
                            {
                             (user.umsUserData.length !== 0  ) ?
                                 <Image style={{width:45,height:45,borderRadius:20}} source={require('../assets/img/adrian.png')} />
                                    :
                                 <Text></Text>
                                }
                      </View>
                  )                
                  }}   
                  name="Default" component={MyTab} />

                <Stack.Screen 
                    options={{
                      headerShown :true,                
                      title: 'Home',
                      headerStyle: {
                        backgroundColor: 'red',
                      },   
    
                      }}   
                
                     name="CreazaCont" component={CreazaCont} 
                 />
                  <Stack.Screen 
                      options={{
                        headerShown :true,                
                        title: 'FACULATEA DE INGINERIE',
                        headerStyle: {
                          backgroundColor: '#2c4894',
                        },   
                        headerTintColor: '#fff',
                        
                        }}                         
                      name="Inginerie" component={Inginerie} 
                  />

                  <Stack.Screen 
                      options={{
                        headerShown :true,                
                        title: 'FACULATEA DE LITERE',
                        headerStyle: {
                          backgroundColor: '#882f81',
                        },   
                        headerTintColor: '#fff',  
                        }}                         
                      name="Litere" component={Litere} 
                  />  
               
                 <Stack.Screen 
                      options={{
                        headerShown :true,                
                        title: 'FACULATEA DE STINȚE',
                        headerStyle: {
                          backgroundColor: '#167543',
                        },   
                        headerTintColor: '#fff',  
                        }}                         
                      name="Stinte" component={Stinte} 
                  />  
              
                 <Stack.Screen 
                      options={{
                        headerShown :true,                
                        title: 'FACULATEA DE STINȚE ECONOMICE',
                        headerStyle: {
                          backgroundColor: '#d5292c',
                        },   
                        headerTintColor: '#fff',  
                        }}                         
                      name="StinteEconomice" component={StinteEconomice} 
                  /> 
                  <Stack.Screen 
                      options={{
                        headerShown :true,                
                        title: 'FACULATEA DE SPORT',
                        headerStyle: {
                          backgroundColor: '#0090cc',
                        },   
                        headerTintColor: '#fff',  
                        }}                         
                      name="Sport" component={Sport} 
                  /> 
                 </Stack.Navigator>

          
                 
             
            
      </NavigationContainer>
    );
  }
  export default MyStack



  