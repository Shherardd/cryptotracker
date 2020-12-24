import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CoinsItem = ({item}) => {
    return (
        
        <View key={item.id}>
            <Text>{item.id}</Text>  
            <Text>{item.name}</Text>  
            <Text>{item.symbol}</Text>  
        </View>   
        
    )
}

export default CoinsItem
