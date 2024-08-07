import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { useState, useEffect } from "react";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumer, onGameOver}) {
  const initalGuess = generateRandomBetween(1, 100, userNumer);
  const [currentGuess, setcurrentGuess] = useState(initalGuess);

  useEffect(() => {
    if(currentGuess === userNumer) {
        onGameOver();
    }
  }, [currentGuess, userNumer, onGameOver])

  function nextGuessHandler(direction) {
    if(direction === "lower") {
        maxBoundary = currentGuess;
    } else {
        minBoundary = currentGuess;
    }

    if(
        (direction === "lower" && currentGuess < userNumer) ||
        (direction === "greater" && currentGuess > userNumer)
    ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
            {text: "Sorry!", style:"cancel"}
        ])
        return
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess); 
    setcurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.highLowView}>
        <Text style={styles.highLowText}>Higher or Lower?</Text>
        <View style={styles.btnContainer}>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryBtn>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>+</PrimaryBtn>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    marginTop: 100,
  },
  btnContainer: {
     flexDirection: "row",
     justifyContent: "center",
     gap:10,
     marginTop: 12
  },
  highLowView: {
    backgroundColor: Colors.primary800,
    padding: 14,
    borderRadius: 10,
    marginTop: 50,
    marginHorizontal: 24
  },
  highLowText: {
    color: Colors.accent500,
    fontSize: 16,
    textAlign: "center"
  }
});

export default GameScreen;
