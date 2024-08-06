import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";

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

function GameScreen({ userNumer }) {
  const initalGuess = generateRandomBetween(1, 100, userNumer);
  const [currentGuess, setcurrentGuess] = useState(initalGuess);

  function nextGuessHandler(direction) {
    if(direction === "lower") {
        maxBoundary = currentGuess;
    } else {
        minBoundary = currentGuess;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess); 
    setcurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryBtn>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>+</PrimaryBtn>
        </View>
      </View>
      <Text>LOG ROUND</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    marginTop: 100,
  },
});

export default GameScreen;
