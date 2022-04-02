import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Text, View,TouchableOpacity,TextInput,StyleSheet,Picker,ImageBackground} from 'react-native';
import {umsCreateAccount,loginAccount,loggOut} from '../actions/user'



const CreazaCont= ({navigation})=>{
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()

  const [nume, setNume] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setbirthday] = useState('');
  const [sex, setSex] = useState('-');

console.log(
  nume,password
)


  const createAccount = ()=>{
    //Acest obiect va prlua datele der la input-urile de la formularul de la sign up 
    //acest cont exista e de test 
    //valorile din functie vor fi transferate in user.js de unde vor fi introduse in db si firebase auth 

    // uid:response.user.uid,
    // nume:userObj.nume,
    // email:userObj.email,
    // role:userObj.role,
    // photo:userObj.photo,
    // coverPhoto:userObj.coverPhoto,
    // facultate:userObj.facultate,
    // tip_studii:userObj.tip_studii,
    // domeniu:userObj.domeniu,
    // specializarea:userObj.specializarea,
    // an:userObj.an,
    // grupa:userObj.grupa,
    // favPost:[],
    // createdPost:[]


    let userObj = {
      nume:' Super Student2',
      password:'123456',
      email:'testtest@specialsoft.ro',
      role:'Student',
      photo:'',
      coverPhoto:'',
      facultate:'Facultatea de Inginerie',
      tip_studii:'Studii universitare de masterat',
      domeniu:'Calculatoare şi tehnologia informaţiei',
      specializarea:'Tehnologia informaţiei aplicată în industrie',
      an:2,
      grupa:'TIAI'
    }
    if(userObj){
      dispatch(umsCreateAccount(userObj))
    }
  }
 
    return (
          <>
              <ImageBackground  source={require('../assets/img/bg.jpg')} resizeMode="cover" style={{flex: 1,justifyContent: "center"}}>
                  <View style={styles.input_V}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Nume"
                        placeholderTextColor="black" 
                        onChangeText={nume => setNume(nume)}
                        defaultValue={nume}
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
                        placeholder="ZI de nastere"
                        placeholderTextColor="black" 
                        onChangeText={birthday => setbirthday(birthday)}
                        defaultValue={birthday}
                      />
                  </View>
                  <View style={{   flexDirection: 'row',  justifyContent: 'center',   marginBottom: 20,  height: 45,  }}>       
                          <View style={{width: '25%', height: 45, backgroundColor: '#1daee3'}} >
                          <Text style={{fontSize:25,  paddingHorizontal:20, paddingVertical:5,color:'white'}}>Gen:</Text>
                          </View>
                          <View style={{width: '20%', height: 45, backgroundColor: '#1daee3'}} >
                          <Picker
                          selectedValue={sex}
                          style={{color:'white',fontSize:25}}
                          
                          onValueChange={(itemValue, itemIndex) => setSex(sex)}
                        >
                  
                            <Picker.Item label="M" value="M" />
                            <Picker.Item label="F" value="F" />
                        </Picker>
                          </View>
                        
                      
                  
                  </View>
                  {/* <View style={styles.input_V}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Nume"
                        placeholderTextColor="#FFFFFF" 
                        onChangeText={nume => setNume(nume)}
                        defaultValue={nume}
                      />
                  </View> */}
              
                  <View style={styles.V_Buton}>
                      <TouchableOpacity onPress={createAccount}>
                          <Text style={styles.Text_Buton}>Creaza Cont</Text>
                      </TouchableOpacity>
                  </View>
                  {/* <View>
                      <TouchableOpacity
                            onPress={()=>{
                                  navigation.navigate('Login')
                            }}
                        >
                            <Text style={{ fontSize:25, color:'white',fontStyle:'italic',textAlign:'center'}}>
                                Ai deja cont?         
                            </Text>
                      </TouchableOpacity>
                  </View> */}
            </ImageBackground> 
         </>

      );
}
export default CreazaCont

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
