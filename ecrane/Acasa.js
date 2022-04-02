
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Text, View,TouchableOpacity,Image,ImageBackground} from 'react-native';



// import MyTab from '../nav/MyTab';
const image = { uri: "https://reactjs.org/logo-og.png" };
const Acasa =({navigation})=>{
    //Get user from storage daca exista 
    const user = useSelector(state => state.user);
    return (
          <>
 
                <View style={{flex: 1}}>
                    <View style={{flex: 2.5,backgroundColor: '#2c4894'}}>
                            <Image style={{width:'100%',height:80}}   source={require('../assets/img/logo-uvab.png')} />
                            <Text style={{color:'white',textAlign:'center',fontSize:32}}>ÎNSCRIERE ADMITERE ONLINE </Text>
                    </View>
                    <View style={{flex: 2,flexDirection:'row'}}>                     
                        <View style={{flex:1, backgroundColor: '#2c4894',height:200}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    navigation.navigate('Inginerie')
                                }}
                            >
                                 <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >    
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Facultatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>de inginerie</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,  backgroundColor: '#882f81',flex:1,}} >
                            <TouchableOpacity  onPress={()=>{
                                    navigation.navigate('Litere')
                                }}>
                            <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >  
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Facultatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>de litere</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 2,flexDirection:'row'}}>                     
                        <View style={{width: '50%', backgroundColor: '#167543'}}>
                        <TouchableOpacity  onPress={()=>{
                                    navigation.navigate('Stinte')
                                }}>
                            <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >  
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Facultatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>de știnte</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '50%', backgroundColor: '#d5292c'}}>
                        <TouchableOpacity  onPress={()=>{
                                    navigation.navigate('StinteEconomice')
                                }}>
                            <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >  
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Facultatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>de știnte economice</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                  
                    <View style={{flex: 2,flexDirection:'row'}}>                     
                        <View style={{width: '50%', backgroundColor: '#0090cc'}}>
                        <TouchableOpacity  onPress={()=>{
                                    navigation.navigate('Sport')
                                }}>
                            <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >  
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Facultatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>de sport</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '50%', backgroundColor: '#e6a82d'}}>
                            <TouchableOpacity style={{}}>
                            <View style={{ justifyContent:'center',  alignItems: "center",marginTop:'20%'}}  >  
                                    <Text style={{color:'white',textAlign:'center',fontSize:24}}>Universitatea </Text>
                                    <Text style={{color:'white',textAlign:'center',fontSize:24,fontWeight:'bold'}}>Bacău</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
          </>
          );
}
export default Acasa