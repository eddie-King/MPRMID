import { StyleSheet, ImageBackground, SafeAreaView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Mainmenu from '@/screens/Mainmenu'
import { SetStateAction, useState } from "react";
import GameStart from '@/screens/GameStart'
import { useFonts } from 'expo-font'
import {Dimensions} from 'react-native';
export default function Index() {
  const [selectRows, setSelectRows] = useState()
  const [selectColumns, setSelectColumns] = useState()

  useFonts({
    'ArchivoBlack': require('@/assets/fonts/ArchivoBlack-Regular.ttf'),
    'Roboto': require('@/assets/fonts/Roboto-Regular.ttf')
  })

 function pickedRows(pickedRows: SetStateAction<undefined>){
  setSelectRows(pickedRows)
 }
 function pickedColumns(pickedColumns: SetStateAction<undefined>){
  setSelectColumns(pickedColumns)
 }
 function gameOverHandler(){
  setSelectColumns(undefined)
  setSelectRows(undefined)
 }

  let screen = <Mainmenu onRow={pickedRows} onColumn={pickedColumns}/>

  if(selectRows && selectColumns ){
    screen =<GameStart pickedRows={selectRows} pickedColumns={selectColumns} onGameOver = {gameOverHandler}/>
  }

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <LinearGradient colors={['#2a0845', '#6441a5']} style = {styles.rootScreen}>
      <ImageBackground  
      source={require('@/assets/images/start.png')}
      resizeMode="repeat"
      style= {styles.rootScreen}
      imageStyle = {styles.backgroundImage}
      >
        <SafeAreaView style = {styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImage:{
    opacity: 1
  }
})
