import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { useState, useEffect } from "react";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons} from "@expo/vector-icons"

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

function GameScreen({ userNumer, onGameOver }) {
  const initalGuess = generateRandomBetween(1, 100, userNumer);
  const [currentGuess, setcurrentGuess] = useState(initalGuess);

  useEffect(() => {
    if (currentGuess === userNumer) {
      onGameOver();
    }
  }, [currentGuess, userNumer, onGameOver]);

  function nextGuessHandler(direction) {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    if (
      (direction === "lower" && currentGuess < userNumer) ||
      (direction === "greater" && currentGuess > userNumer)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setcurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.btnContainers}>
          <View style={styles.btnContainer}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons size={24} color={"white"} name="remove" />
            </PrimaryBtn>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryBtn>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    marginTop: 100,
  },
  btnContainers: {
    flexDirection: "row",
    // justifyContent: "center",
    gap: 10,
    marginTop: 12,
  },
  btnContainer: {
    flex: 1
  },
  highLowView: {
    backgroundColor: Colors.primary800,
    padding: 14,
    borderRadius: 10,
    marginTop: 50,
    marginHorizontal: 24,
  },
  highLowText: {
    color: Colors.accent500,
    fontSize: 16,
    textAlign: "center",
  },
  instructionText:{
    marginBottom: 12
  }
});

export default GameScreen;
