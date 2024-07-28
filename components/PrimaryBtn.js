import { Text, View } from "react-native"

function PrimaryBtn({children}) {
    return (
        <View>
            <Text>
                {children}
            </Text>
        </View>
    )
}

export default PrimaryBtn