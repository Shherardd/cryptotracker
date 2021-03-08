/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import CoinsStack from 'cryptotracker/src/components/coins/CoinsStack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Colors from 'cryptotracker/src/res/colors';
import FavoritesStack from 'cryptotracker/src/components/favorites/FavoritesStack'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe",
          activeTintColor: "#E8A63F",
          inactiveTintColor: "#f4f4f4",
          style:{
            backgroundColor: Colors.blackpearl,
            borderTopColor: "black"
          }
        }}
      >
        <Tabs.Screen 
          name="Coins" 
          component={ CoinsStack }
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                style={{ tintColor: color, width: size, height:size}}
                source={require('cryptotracker/src/assets/bank.png')}
              />
            )
          }}
          />
          <Tabs.Screen 
          name="Favs" 
          component={ FavoritesStack }
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                style={{ tintColor: color, width: size, height:size}}
                source={require('cryptotracker/src/assets/star.png')}
              />
            )
          }}
          />
          
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

//const styles = StyleSheet.create({});

export default App;
