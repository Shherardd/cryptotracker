import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';
import Colors from 'cryptotracker/src/res/colors';
const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackpearl,
          shadowColor: Colors.blackpearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name="Coins"
        component={CoinScreen}
        options={{
          title: 'Monedas',
        }}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CoinsStack;
