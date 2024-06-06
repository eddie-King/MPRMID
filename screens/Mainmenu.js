import React, { useMemo, useState } from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "@/components/PrimaryButton";
import Title1 from "@/components/Title1";
import Title2 from "@/components/Title2";
import IntructionText from "@/components/IntructionText";
import RadioGroup from 'react-native-radio-buttons-group';
const Mainmenu = ({onRow, onColumn}) => {
  const [start, setStart] = useState(false)

  const [selectedRowsId, setSelectedRowsId] = useState();
  const [selectedColumnsId, setSelectedColumnsId] = useState()

  const radioRowsButtons = useMemo(() => ([
    
    {
        id: '2',
        label: '2',
        value: '2',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '3',
        label: '3',
        value: '3',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '4',
        label: '4',
        value: '4',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '5',
        label: '5',
        value: '5',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '6',
        label: '6',
        value: '6',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '7',
        label: '7',
        value: '7',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
]), []);

const radioColumnsButtons = useMemo(() => ([
   
    {
        id: '2',
        label: '2',
        value: '2',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '3',
        label: '3',
        value: '3',
        labelStyle: styles.radioBtn,
        color: 'white',
    },
    {
        id: '4',
        label: '4',
        value: '4',
        labelStyle: styles.radioBtn,
        color: 'white',
    }
]), []);


  function confirmPlayHandler(){
    const rows = parseInt(selectedRowsId)
    const columns = parseInt(selectedColumnsId)
    onRow(rows)
    onColumn(columns)
  }

  return (
    <View style = {styles.container}>
      <Title>CARDS FLIP GAME</Title>
      <View>
        <View>
          <Title1>INTRUCTION</Title1>
          <IntructionText>
            Click the green cards to see what number they uncover and try to
            find the matching number underneath the other cards.
          </IntructionText>
          <IntructionText>
            Uncover two matching numbers in a row to eliminate them from the
            game.
          </IntructionText>
          <IntructionText>
            Eliminate all cards as fast as you can to win the game. Have fun
            FLIPing!
          </IntructionText>
        </View>

          <Title1>SELECT BOARD SIZE</Title1>
        <View>


        <View style = {styles.option}>
         <View>
            <Title2>ROWS NUMBER</Title2>
           <RadioGroup 
               radioButtons={radioRowsButtons} 
               onPress={setSelectedRowsId}
               selectedId={selectedRowsId}
              
            />
           
         </View>
         <View>
           <View>
             <Title2>COLUMNS NUMBER</Title2>
             <RadioGroup 
               radioButtons={radioColumnsButtons} 
               onPress={setSelectedColumnsId}
               selectedId={selectedColumnsId}
               
              />
               
            </View>
         
          </View>
        </View>
          


        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmPlayHandler}>Play Game</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default Mainmenu;
 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttonContainer:{
    alignItems: 'center',
  },
  option:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  radioBtn:{
    color:'white'
  }
});
