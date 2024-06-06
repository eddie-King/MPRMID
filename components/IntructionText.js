
import { Text, StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'
const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instrunctionText, style]}> {children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instrunctionText:{
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        padding: 5,
        marginLeft: 15
      }
})