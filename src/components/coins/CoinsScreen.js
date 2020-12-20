import React from 'react'
import { View, Text, Pressable }from 'react-native'

const CoinsScreen = (props) => {

    const handlePress = () => {
        console.log('henlo')
    }

    return (
        <View>
            <Text>henlo</Text>
            <Pressable onPress={handlePress}><Text>Ver detalles</Text></Pressable>
        </View>
    )
}

export default CoinsScreen
