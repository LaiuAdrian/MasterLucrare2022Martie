import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Text, View,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import {umsCreateAccount,loginAccount,loggOut} from '../actions/user'



const Contul_Meu= ()=>{
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  //Get user from storage daca exista 
  const user = useSelector(state => state.user);

  const dispatch = useDispatch()


  const createAccount = ()=>{
    //Acest obiect va prlua datele der la input-urile de la formularul de la sign up 
    //acest cont exista e de test 
    //valorile din functie vor fi transferate in user.js de unde vor fi introduse in db si firebase auth 

    let userObj = {

      nume:'Adrian Laiu',
      password:'test12345',
      email:'adrian.laiu@yahoo.com',
      role:'profesor',
      photo:'',
      coverPhoto:'',
      birthday:'22.10.1888',
      sex:'M'
    }
    if(userObj){
      dispatch(umsCreateAccount(userObj))
    }
  }



  const logareAccount = ()=>{
    let loginOBj = {
      email:'pruteanualexandru764@yahoo.com',
      password:'test12345'
    }
    if(loginOBj){
      dispatch(loginAccount(loginOBj))
    }
  }



  const logOut = ()=>{
    dispatch(loggOut())
  }
 
    return (
       <>
        <View>
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
            <View style={styles.camp_text}>
                <TextInput
                  style={styles.camp_text_scris}
                  placeholder="E-mail"
                  onChangeText={email => setEmail(email)}
                  defaultValue={email}
                />
                {/* <Text style={styles.inside_text}>
                 
                </Text> */}
            </View>

            <View style={styles.camp_text}>
                <TextInput
                 style={styles.camp_text_scris}
                  placeholder="Password"
                  onChangeText={parola => setParola(parola)}
                  defaultValue={parola}
                />
                {/* <Text style={{padding: 10, fontSize: 42}}>
                  
                </Text> */}
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={createAccount}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={logareAccount}>
                <Text>Logare  Account</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={logOut}>
                <Text>Dezautentificare</Text>
            </TouchableOpacity>
        </View>
       </>

      );
}
export default Contul_Meu

const styles = StyleSheet.create({
  camp_text: {
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    
   

  },
  camp_text_scris:{
    fontSize:25,
    color:'black',
    width:'80%',
    padding:10,
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inside_text:{
    textAlign:'center',
    backgroundColor:'red',
    color:'red'
  }
});
