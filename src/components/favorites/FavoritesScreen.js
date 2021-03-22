import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import color from 'cryptotracker/src/res/colors'

const FavoritesScreen = () => {
    return (
        <View style={s.container}>
            <FavoritesEmptyState/>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        backgroundColor: color.charade,
        flex: 1
    }
})


export default FavoritesScreen
