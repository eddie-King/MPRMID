import { Text, StyleSheet } from 'react-native'

const Title2 = ({children}) => {
  return (
    <Text style = {styles.title}>{children}</Text>
  )
}

export default Title2
const styles= StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        textAlign: 'left',
        borderColor: 'white',
        padding: 10,
        maxWidth: "",
        width: '100%'
    }
})
