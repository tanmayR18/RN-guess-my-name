import { Text, View, TextInput} from "react-native"
import PrimaryBtn from "../components/PrimaryBtn"

function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    )
}

export default StartGameScreen

