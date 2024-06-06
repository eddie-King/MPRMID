import { Text, StyleSheet } from 'react-native'

const Title1 = ({children}) => {
  return (
    <Text style = {styles.title}>{children}</Text>
  )
}

export default Title1
const styles= StyleSheet.create({
    title:{
        fontFamily: 'ArchivoBlack',
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
        borderWidth: 0,
        textAlign: 'left',
        borderColor: 'white',
        padding: 15,
        maxWidth: "",
        width: 350
    }
})
