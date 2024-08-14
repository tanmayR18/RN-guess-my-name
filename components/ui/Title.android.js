import { Text, StyleSheet, Platform } from "react-native"

function Title({children}) {
    return <Text style = {styles.title} >{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        // borderWidth: Platform.OS === "ios" ? 0 : 2,
        // borderWidth: Platform.select({ ios: 0, android:2}),
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
        fontFamily: "open-sans-bold",
        width: 300,
        maxWidth: "80%"
    }
})


export default Title;