import { StyleSheet, ImageBackground, SafeAreaView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Mainmenu from '@/screens/Mainmenu'
import { SetStateAction, useState } from "react";
import GameStart from '@/screens/GameStart'
export default function Index() {
  const [selectRows, setSelectRows] = useState()
  const [selectColumns, setSelectColumns] = useState()
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
  return (
    <LinearGradient colors={['#ee9ca7', '#EACCF8']} style = {styles.rootScreen}>
      <ImageBackground  
      source={require('@/assets/images/pngegg (11).png')}
      resizeMode="contain"
      style= {styles.rootScreen}
      imageStyle = {styles.backgroundImage}
      >
        <SafeAreaView style = {styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen:{
    flex: 1
  },
  backgroundImage:{
    opacity: 0.5
  }
})
