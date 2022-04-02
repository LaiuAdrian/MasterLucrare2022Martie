
import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image ,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const LicentaInginerie =({navigation})=>{

   const tabel = {
    tableHead: [ 'Domeniul de licență', 'Program de studii Învățământ cu frecvență', 'Locuri bugetate*','Locuri cu taxă'],
    // tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
    tableData: [
      ['Ingineria mediului**', 'Ingineria şi protecția mediului în industrie / InfoIngineria dezvoltării rurale durabilermatică', '22','106'],
  
      ['Inginerie și management în agricultură și dezvoltare rurală', 'Inginerie și management în alimentația publică și agroturism', '23','32'],
      ['Inginerie energetică', 'Energetică industrială	', '2	','25'],
      ['Ingineria produselor alimentare', 'Ingineria produselor alimentare', '10','38'],
      ['Calculatoare şi tehnologia informației', 'Tehnologia informației', '1','16'],
      ['Inginerie mecanică	', 'Echipamente pentru procese industriale', '7','23'],
      ['Inginerie industrială**', 'Tehnologia construcțiilor de maşini / Design industrial / Ingineria şi managementul calității', '35','112'],
      ['Mecatronică şi robotică	', 'Mecatronică', '7','37'],
      ['Inginerie şi management', 'Inginerie economică în domeniul mecanic', '12','33'],
      ['Inginerie chimică', 'Inginerie biochimică', '16','38'],

     
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
                      Pentru înscriere online pentru concursul de admitere la studiile universitare de licență, trebuie să aveți următoarele documente în format PDF sau JPG:
                    </Text>
                  <View style={{marginHorizontal:10}}>
                      <Text>
                         1. diploma de bacalaureat sau diploma echivalentă cu aceasta, însoțită de foaia matricolă. Absolvenţii de liceu din promoţia 2021, indiferent de sesiunea de bacalaureat, pot prezenta pentru sesiunea imediat următoare de admitere, în locul diplomei de bacalaureat, adeverinţa tip, din care să rezulte: liceul absolvit, media generală cu care au promovat examenul de bacalaureat, termenul de valabilitate;
                      </Text>
                      <Text>
                         2. cartea de identitate (buletinul de identitate)/paşaportul;
                      </Text>
                      <Text>
                         3. certificatul de naştere şi de căsătorie (dacă este cazul);
                      </Text>
                      <Text>
                         4. o fotografie color recentă, tip carte de identitate (3×4 cm), în format digital;
                      </Text>
                      <Text>
                         5 .adeverinţa de student, diploma de bacalaureat sau echivalentă cu aceasta, însoțită de foaia matricolă/supliment la diplomă – în cazul studenţilor care se înscriu la concurs pentru a urma un al doilea domeniu, adeverinţa de student trebuie să menţioneze care este statutul financiar al studentului la acea facultate. Absolvenții trebuie să prezinte o adeverință din care să rezulte statutul financiar și de bursă de la facultatea terminată
                      </Text>
                      <Text>
                         6 .actele doveditoare (certificatele de deces ale părinţilor; adeverinţă de la casa de copii; certificatul de deces al părintelui erou – martir al revoluţiei sau, după caz, al certificatului medical ori a altui document doveditor, în situaţia în care însuşi candidatul a fost rănit în lupta pentru victoria revoluţiei din decembrie 1989; adeverinţă din care să rezulte că părintele/ părinţii lucrează în învăţământ) necesare candidaţilor care solicită reducerea taxelor de înscriere la concursul de admitere, în cazul în care aceştia îndeplinesc condiţiile de a beneficia de scutirea respectivă;
                      </Text>
                      <Text>
                         7. cetăţenii Republicii Moldova (dacă doresc să concureze pe locurile cu taxă) vor depune atât copia paşaportului, cât şi a buletinului sau cărţii de identitate moldoveneşti;
                      </Text>
                      <Text>
                         8. plata online a taxei de admitere; plata se poate efectua și direct în contul RO20TREZ06120F330500XXXX deschis la Trezoreria municipiului Bacău.
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
                          2.200 lei/an
                     </Text>
                  </View>
              </View>
              
            </ScrollView>
            </>
          );
}
export default LicentaInginerie;


const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#2c4894' },
  head: {  height: 'auto',  backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 'auto' ,width:'100%' },
  titlu: { textAlign: 'center',color:'#ffff',fontWeight:'bold',fontSize:16 },
  text: { textAlign: 'center',color:'#ffff',fontSize:15,padding:5  }
});