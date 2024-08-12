import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

export default Card

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary800,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
})