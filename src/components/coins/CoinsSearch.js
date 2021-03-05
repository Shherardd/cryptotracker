import React, {useState} from 'react'
import {TextInput, Platform, View, StyleSheet} from 'react-native'
import Colors from 'cryptotracker/src/res/colors';

const CoinsSearch = (props) => {
    const [query, setQuery] = useState("")

    const handleText = (query) => {
        setQuery({query})
        if(props.onChange){
            props.onChange(query)
        }
    }

    return (
        <View>
            <TextInput
                style={[
                    s.TextInput,
                    Platform.OS == 'ios' ?
                    s.TextInputIOS :
                    s.TextInputAndroid
                ]}
                onChangeText={handleText}
                value={query}
                placeholder="Search coin..."
                placeholderTextColor="#fff"
            />
        </View>
    )
}

const s  = StyleSheet.create({
    TextInput: {
        height: 46,
        backgroundColor: Colors.blackpearl,
        paddingLeft: 16,
        color: "#fff"
    },
    TextInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon
    },
    TextInputIOS: {
        margin: 8,
        borderRadius: 12
    }
})

export default CoinsSearch
