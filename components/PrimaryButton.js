import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style= {styles.buttonOuterContainer}>
      <Pressable style = {({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}
      onPress={onPress} android_ripple={{color: 'white'}}>
        <Text style = {styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton
const styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius: 28,
    borderWidth:2,
    mergin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer:{
    backgroundColor:'white',
    paddingVertical:8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor:'black',
    shadowOffset: {width: 3, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5
  },
  buttonText:{
    color: 'black',
    textAlign: 'center',
    fontFamily:'Roboto',
    fontSize: 18,
  },
  pressed:{
    opacity: 0.5
  }
})
