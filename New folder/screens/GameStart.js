import PrimaryButton from '@/components/PrimaryButton'
import React, { useEffect, useState } from 'react'
import { View, Text, Alert, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'

const GameStart = ({ pickedRows, pickedColumns, onGameOver }) => {
  const [cards, setCards] = useState([])
  const [flippedIndices, setFlippedIndices] = useState([])
  const [matchedIndices, setMatchedIndices] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)

  const restart = () => {
    setFlippedIndices([])
    setMatchedIndices([])
    setIsGameOver(false)
    initializeGame()
  }

  useEffect(() => {
    initializeGame()
  }, [pickedRows, pickedColumns])

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices(prev => {
          const newMatchedIndices = [...prev, firstIndex, secondIndex]
          if (newMatchedIndices.length === cards.length) {
            setIsGameOver(true)
          }
          return newMatchedIndices
        })
        setFlippedIndices([])
      } else {
        setTimeout(() => {
          setFlippedIndices([])
        }, 800)
      }
    }
  }, [flippedIndices, cards])

  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => {
        Alert.alert(
          'Win the game',
          'Congratulation! You won this game. Press a button to start a new game or go back to the home screen.',
          [
            {
              text: 'New game',
              onPress: restart,
            },
            {
              text: 'Go back',
              onPress: onGameOver,
            },
          ],
          { cancelable: false }
        )
      
      }, 500);
    }
  }, [isGameOver])

  const initializeGame = () => {
    let totalCards = pickedRows * pickedColumns
    if (totalCards % 2 !== 0) {
      totalCards -= 1
    }
    const pairs = totalCards / 2
    const cardValues = []
    for (let i = 1; i <= pairs; i++) {
      cardValues.push(i)
      cardValues.push(i)
    }
    cardValues.sort(() => Math.random() - 0.5)

    setCards(cardValues)
    setFlippedIndices([])
    setMatchedIndices([])
    setIsGameOver(false)
  }

  const handleCardPress = (index) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedIndices.includes(index)) {
      return
    }
    setFlippedIndices(prev => [...prev, index])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={StyleSheet.flatten([styles.grid, { width: pickedColumns * 85 }])}>
        {cards.map((card, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleCardPress(index)} 
            style={{ width: `${100 / pickedColumns}%`, aspectRatio: 1, justifyContent: 'space-between' }}>
            <FlipCard
              style={styles.card}
              flip={flippedIndices.includes(index) || matchedIndices.includes(index)}
              clickable={false}
            >
              <View style={styles.face}>
                <Image 
                  style={styles.image}
                  source={require('@/assets/images/cardi.png')}
                />
              </View>
              <View style={styles.back}>
                <Text style={styles.text}>{card}</Text>
              </View>
            </FlipCard>
          </TouchableOpacity>
        ))}
      </View>
      <View style = {styles.buttonsContainer}>
        <View style = {styles.buttonContainer}>
          <PrimaryButton onPress={restart}>Reset</PrimaryButton>
        </View>
        <View style = {styles.buttonContainer}>
          <PrimaryButton onPress={onGameOver}>Back to home</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default GameStart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  face: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRadius: 10,
  },
  back: {
    flex: 1,
    backgroundColor: 'red',
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontSize: 45,
    fontWeight: 600,
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10

  }
})
