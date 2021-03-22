import React from 'react'
import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen'
import Colors from 'cryptotracker/src/res/colors';

const Stack = createStackNavigator()
const FavoritesStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: Colors.blackpearl,
              shadowColor: Colors.blackpearl,
            },
            headerTintColor: Colors.white,
          }}
        >
            <Stack.Screen 
            name={"Favorites"}
            component={FavoritesScreen}
            />
        </Stack.Navigator>
    )
}

export default FavoritesStack
