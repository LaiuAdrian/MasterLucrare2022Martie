
import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image ,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const MasterInginerie =({navigation})=>{

   const tabel = {
    tableHead: [ 'Domeniul de master', 'Program de studiide master acreditat', 'Locuri bugetate*','Locuri cu taxă'],
    // tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
    tableData: [
      ['Ingineria mediului	', ' Managementul protecției mediului în industrie / Echipamente pentru reabilitare şi tehnologii asistive', '2','50'],
      ['Inginerie chimică	', ' Chimia moleculelor bioactive – obținere, valorificare, controlul şi asigurarea calității	', '7','30'],
      ['Inginerie energetică	', ' Echipamente şi tehnologii moderne în energetică', '1','77'],
      ['Inginerie produselor alimentare	', ' Știința și ingineria produselor alimentare ecologice', '5','83'],
      ['Calculatoare si tehnologia informației	', ' Tehnologia informației aplicată în industrie', '3','242'],
      ['Inginerie mecanică	', ' Managementul şi optimizarea echipamentelor de proces', '8','81'],
      ['Inginerie industrială	', ' Strategii în asigurarea calității în industrie /Managementul fabricației produselor industriale', '1','31'],
      ['Mecatronică şi robotică	', ' Mecatronică avansată', '7','30'],
      ['Inginerie şi management	', ' Managementul sistemelor industriale de producție și servici', '0','37'],
   
    
    ],
    widthArr: [175, 390, 90, 90,]


  }


 

    return (
          <>
          <ScrollView >                
              <View>
                 <Image style={{width:'100%',height:85}}   source={require('../../../assets/img/INGINERIE-logo.png')} />  
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
                     2.200 lei/an – pentru programele de studii care au și locuri bugetate
                     </Text>
                     <Text>
                     5.000 lei/an – pentru programele de studii care se organizează numai cu locuri cu taxă
                     </Text>
                  </View>
              </View>
              
            </ScrollView>
            </>
          );
}
export default MasterInginerie;


const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#2c4894' },
  head: {  height: 'auto',  backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 'auto' ,width:'100%' },
  titlu: { textAlign: 'center',color:'#ffff',fontWeight:'bold',fontSize:16 },
  text: { textAlign: 'center',color:'#ffff',fontSize:15,padding:5  }
});