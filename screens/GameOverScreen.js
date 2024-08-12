import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryBtn from '../components/ui/PrimaryBtn'

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContiner}>
        <Image style={styles.image} source={require("../assets/images/game-over.png")} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryBtn onPress={onStartNewGame}>
        Start New Game
      </PrimaryBtn>
    </View>
  )
}

export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContiner: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
        
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500
    }
})