import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Text, View,TouchableOpacity,TextInput,StyleSheet,Picker ,ImageBackground} from 'react-native';
import {umsCreateAccount,loginAccount,loggOut} from '../actions/user'



const Login= ({navigation})=>{
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

console.log(
  email,password
)

// const logareAccount = ()=>{
//     let loginOBj = {
//       email:email,
//       password:password
//     }
//     if(loginOBj){
//       dispatch(loginAccount(loginOBj))
//     }
//   }
const logareAccount = ()=>{
  let loginOBj = {
    email:'adrian.laiu@yahoo.com',
    password:'123456'
  }
  if(loginOBj){
    dispatch(loginAccount(loginOBj))
  }
}
 
    return (
       <>
        <ImageBackground  source={require('../assets/img/bg.jpg')} resizeMode="cover" style={{flex: 1,justifyContent: "center"}}>
        {
            (user.umsUserData.length !== 0  )
            ?
            <View>
                <Text>{user.umsUserData.nume}</Text>
                {
                  user.umsUserData.role === 'profesor'
                  ?
                  <Text>este logat ca profesor </Text>
                  :
                  <Text>este logat student</Text>
                }

            </View>
            :
            <View></View>
          }
            <View style={styles.input_V}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="E-mail"
                      placeholderTextColor="black" 
                      onChangeText={email => setEmail(email)}
                      defaultValue={email}
                    />
              </View>          
              <View style={styles.input_V}>
                  <TextInput
                  style={styles.inputText}
                    placeholder="Parola"
                    placeholderTextColor="black" 
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    defaultValue={password}
                  />
              </View>
              <View>
                      <TouchableOpacity
                            onPress={()=>{
                                  navigation.navigate('CreazaCont')
                            }}
                        >
                            <Text style={{ fontSize:20, color:'white',fontStyle:'italic',textAlign:'center'}}>
                             Nu ai cont? Creaza-ti contul acum!       
                            </Text>
                      </TouchableOpacity>
              </View>
              <View style={styles.V_Buton}>
                  <TouchableOpacity onPress={logareAccount}>
                      <Text style={styles.Text_Buton}>Log In</Text>
                  </TouchableOpacity>
              </View>
         </ImageBackground>
  
       </>

      );
}
export default Login

const styles = StyleSheet.create({
  BgEcran:{
    backgroundColor:'#114b8a',
    paddingVertical:'5%'
    },
    input_V: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
      height: 45,  
  },
  inputText:{
      fontSize:22,
      color:'#114b8a',
      width:'85%',
      borderWidth:2,
      borderColor:'red',
      backgroundColor: "white",
      borderRadius: 25,
      paddingHorizontal:20,
      paddingVertical:5
  },
  V_Buton:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      height: 55,  
  },
  Text_Buton:{
      fontSize:26,
      color:'white',
      paddingHorizontal:20,
      paddingVertical:5,
      backgroundColor: "red",
      borderRadius:5,
      fontWeight: "bold"
  }
  
    
 
});
