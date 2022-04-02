
import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image ,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const MasterStinte =({navigation})=>{

   const tabel = {
    tableHead: [ 'Domeniul de master', 'Program de studiide master acreditat', 'Locuri bugetate*','Locuri cu taxă'],
    // tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
    tableData: [
      ['Biologie	', 'Valorificarea resurselor biologice şi protecția mediului', '0','2'],
      ['Biologie	', 'Biologie medicală', '0','2'],
      ['Filologie	', 'Limba franceză. Practici de comunicare (în limba franceză)', '4','65'],
      ['Informatică', 'Informatică aplicată în ştiințe şi tehnologie', '3','25'],
      ['Matematică', 'Matematică didactică', '0','100'],
    
    ],
    widthArr: [175, 390, 90, 90,]


  }


 

    return (
          <>
          <ScrollView >                
              <View>
                 <Image style={{width:'100%',height:75}}   source={require('../../../assets/img/STIINTE-logo.png')} />  
              </View>
              <ScrollView horizontal={true}>
                      <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 1,borderColor:'#ffff'}}>
                        <Row data={tabel.tableHead} widthArr={tabel.widthArr} style={styles.header} textStyle={styles.titlu}/>
                          <TableWrapper style={styles.wrapper}>
                              {/* <Col data={tabel.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
                              <Rows data={tabel.tableData}  widthArr={tabel.widthArr}  style={styles.row} textStyle={styles.text}/>
                          </TableWrapper>
                        </Table>
                    </View>
              </ScrollView>

              <View style={{marginVertical:10,marginHorizontal:15}}>
                    <Text style={{textAlign:'center',fontSize:30,padding:12,fontWeight:'bold'}}>
                        DOCUMENTE, TAXE ȘI ALTE INFORMAȚII
                    </Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>
                    Pentru înscriere online pentru concursul de admitere la studiile universitare de master, trebuie să aveți următoarele documente în format PDF sau JPG:
                    </Text>
                  <View style={{marginHorizontal:10}}>
                      <Text>
                         1. diploma de licenţă (inclusiv anexa/ anexele) în original. Pentru absolvenţii din promoţiile 2020 şi 2021 este valabilă şi Adeverinţa tip în original, din care să rezulte media la examenul de licenţă şi media anilor de studii, până la eliberarea actului de studii;
                      </Text>
                      <Text>
                         2. cartea de identitate (buletinul de identitate)/paşaportul;
                      </Text>
                      <Text>
                         3. certificatul de naştere şi de căsătorie (dacă este cazul);
                      </Text>
                      <Text>
                         4. adeverinţă medicală tip eliberată, după caz, de cabinetele medicale şcolare, de medicul de întreprindere sau de medicul de familie, cu menţiunea „nu este în evidenţă cu afecţiuni neuropsihice și boli infecto-contagioase”;
                      </Text>
                      <Text>
                         5. o fotografie color recentă, tip carte de identitate (3×4 cm), în format digital;
                      </Text>
                      <Text>
                         6. plata online a taxei de admitere; plata se poate efectua și direct în contul RO20TREZ06120F330500XXXX deschis la Trezoreria municipiului Bacău
                      </Text>
                    
                  </View>
                  <View style={{marginHorizontal:10}}>
                     <Text style={{textAlign:'center',fontSize:30,padding:12,fontWeight:'bold'}}>
                          TAXĂ DE ÎNSCRIERE
                     </Text>
                     <Text>
                        Taxă de înscriere 100 lei
                     </Text>
                     <Text>
                       Taxă de înmatriculare 50 lei
                     </Text>
                     <Text>
                     Scutiri de taxă: Conform Regulamentului de Admitere de la nivelul Universității „Vasile Alecsandri” din Bacău
                     </Text>
                  </View>
                  <View style={{marginHorizontal:10}}>
                     <Text style={{textAlign:'center',fontSize:30,padding:12,fontWeight:'bold'}}>
                     TAXĂ ȘCOLARIZARE ANUL I
                     </Text>
                     <Text>
                     2.600 lei/an – Valorificarea resurselor biologice și portecția mediului, Informatică aplicată în ştiințe şi tehnologie
                     </Text>
                     <Text>
                     4.000 lei/an – Biologie medicală (BM)
                     </Text>
                     <Text>
                     5.000 lei/an – Matematică didactică (MD)
                     </Text>
                  </View>
              </View>
              
            </ScrollView>
            </>
          );
}
export default MasterStinte


const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#167543' },
  head: {  height: 'auto',  backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 'auto' ,width:'100%' },
  titlu: { textAlign: 'center',color:'#ffff',fontWeight:'bold',fontSize:16 },
  text: { textAlign: 'center',color:'#ffff',fontSize:15,padding:5  }
});