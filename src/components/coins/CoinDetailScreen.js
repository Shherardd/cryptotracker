import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
const CoinDetailScreen = ({route}) => {
  useEffect(() => {
    console.log(route.params);
    return () => {};
  }, [route.params]);

  return (
    <View>
      <Text>Moneda: {route.params.coin.name}</Text>
    </View>
  );
};

export default CoinDetailScreen;
