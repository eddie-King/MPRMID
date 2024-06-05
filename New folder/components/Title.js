import { Text, StyleSheet } from 'react-native';

const Title = ({children}) => {
  return (
    <Text style = {styles.title}>{children}</Text>
  )
}

export default Title
const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'white',
        textAlign: 'center',
        borderWidth: 0,
        borderColor: 'white',
        padding: 10
    }
})