import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
   <View style={styles.rootContiner}>
    <Title>Guess My Number</Title>
     <Card>
        <InstructionText>Enter a Number</InstructionText>
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
    </Card>
   </View>
  );
}

const styles = StyleSheet.create({
    rootContiner: {
        marginTop:100,
        alignItems: "center"
    },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.accent500,
    borderColor: Colors.accent500,
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
