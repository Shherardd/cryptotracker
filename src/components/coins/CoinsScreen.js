import React from 'react'
import { View, Text, Pressable, StyleSheet }from 'react-native'

const CoinsScreen = (props) => {
    const { navigation } = props
    const handlePress = () => {
        navigation.navigate('CoinDetail')
    }

    const handleLongPress = () => {
        console.log(props)
    }

    return (
        <View style={s.container}>
            <Text style={s.title}>henlo</Text>
            <Pressable onPress={handlePress} style={s.btn} onLongPress={handleLongPress}>
                <Text style={s.btnText}>Ver detalles</Text>
            </Pressable>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4c4c4",
        alignItems: "center"

    },
    title:{
        fontSize: 24,
        margin: 15
    },
    btn: {
        padding: 8,
        backgroundColor: "black",
        borderRadius: 8,
        margin:16,
        width: 400
    },
    btnText: {
        color: "white",
        textAlign: 'center'
    }
})

export default CoinsScreen