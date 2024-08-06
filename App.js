import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function onPickNumber(number) {
    setUserNumber(number);
  }

  let screen = <StartGameScreen onPickNumber={onPickNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumer={userNumber} />;
  }

  return (
    <LinearGradient colors={[ Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
