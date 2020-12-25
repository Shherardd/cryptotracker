import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CoinsItem = ({item}) => {
    const [coinChange, setCoinChange] = useState(s.greenText)

    useEffect(() => {
        if(item.percent_change_1h > 0){
            setCoinChange(s.greenText)
        }else{
            setCoinChange(s.redText)
        }
        return () => {
            
        }
    }, [])
    return (
        
        <View key={item.id} style={s.container}>
            <View style={s.row}>
                <Text>{item.id}</Text>  
                <Text style={s.symbolText}>{item.symbol}</Text>  
                <Text style={s.nameText}>{item.name}</Text>  
            </View>
            <View style={s.row}>
                <Text style={s.percentText, coinChange}>{item.percent_change_1h}%</Text>
            </View>
        </View>   
        
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16
    },
    row: {
        flexDirection: 'row'
    },
    symbolText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:16,
        marginRight: 12
    },
    nameText: {
        color: "#fff",
        fontSize: 14,
        marginRight: 12
    },
    percentText: {
        fontSize: 12
    },
    redText: {
        color: 'red'
    },
    greenText: {
        color: 'green'
    }
})

export default CoinsItem
