import React, {useEffect, useState} from 'react'
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Http from 'cryptotracker/src/libs/http'
import CoinsItem from './CoinsItem'

const CoinsScreen = (props) => {
    const { navigation } = props
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const uri = 'https://api.coinlore.net/api/tickers/'
    const handlePress = () => {
        navigation.navigate('CoinDetail')
    }

    const handleLongPress = () => {
        console.log(props)
    }

    const getData = async () => {
        const res = await Http.instance.get(uri)
        if(res.data){
            setCoins(res.data)
            setLoading(false)
        }else{
            console.error("error en solicitud: CoinsScreen.js - getData ")
        }
    }

    useEffect(() => {
        setLoading(true)
        getData()
        return () => {
            
        }
    }, [])

    return (
        <View style={s.container}>
            {loading ? 
            (<ActivityIndicator color='#000' size='large'/>)
            : null}
            <FlatList 
                data={coins} 
                renderItem={({item}) => 
                <CoinsItem item={item}></CoinsItem>                 
                }
                />
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