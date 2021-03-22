import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesEmptyState = () => {
    return (
        <View style={s.container}>
            <Text style={s.text}>There is nothing rn</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex:1,
        alignContent:"center",
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    }
})

export default FavoritesEmptyState
