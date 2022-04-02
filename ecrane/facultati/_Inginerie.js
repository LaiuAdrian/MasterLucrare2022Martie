
import React from 'react';
import { StyleSheet, Text, View,Image ,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';


const Inginerie =({navigation})=>{
    return (
          <>
           <View style={{backgroundColor:'#2c4894'}}>
               <Image style={{width:'100%',height:100}}   source={require('../../assets/img/INGINERIE-logo.png')} />  
              <View style={{flexDirection:'row',marginVertical:15,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            Domeniul de licență
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelHeader}>
                            Învățământ cu frecvență
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            Buget
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            Taxa
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff',}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Inginerie și management în agricultură și dezvoltare rurală
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                         Inginerie și management în alimentația publică și agroturism
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            23
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
              <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:'5%',borderBottomWidth:1,borderColor:'#fff'}}>  
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                          Ingineria mediului**
                          </Text>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.textTabelText}>
                          în industrie / dezvoltării rurale durabile
                        </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textTabelText}>
                            22
                          </Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
                          <Text style={styles.textTabelHeader}>
                            106
                          </Text>
                      </View>
              </View>
          </View>
    
          </>
          );
}
export default Inginerie


const styles = StyleSheet.create({
  textTabelHeader:{
   textAlign:'center',
   color:'#fff',
   fontSize:14,
   fontWeight:'bold'
  },
  textTabelText:{
    textAlign:'center',
    color:'#fff',
    fontSize:13,
    justifyContent:'center'
   }
});