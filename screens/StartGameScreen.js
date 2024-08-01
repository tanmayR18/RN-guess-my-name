import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(number) {
    setEnteredNumber(number);
  }

  function resetHandler(){
    setEnteredNumber("")
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber)

    if( isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
        Alert.alert(
            "Invalid Number",
            "Number should be between 1 and 99",
            [{ text: "Okay", style: "destructive", onPress: resetHandler}]
        )

        return
    }

    onPickNumber(choosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredNumber}
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryBtn onPress={numberInputHandler} >Reset</PrimaryBtn>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryBtn onPress={confirmInputHandler}>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#3b021f",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 6,
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3, // Adjusted to make it more visible
  },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    borderColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
