import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/open-sans.regular.ttf"),
    "open-sans-bold": require("./assets/fonts/open-sans.bold.ttf"),
  });

  if(!fontsLoaded) {
    return null
  }

  function onPickNumber(number) {
    setUserNumber(number);
    setgameIsOver(false);
  }

  function gameOverHandler(numberOfRound) {
    setgameIsOver(true);
    setGuessRound(numberOfRound);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setgameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={onPickNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumer={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style={"light"} />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
          resizeMode="cover"
          source={require("./assets/images/background.png")}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
