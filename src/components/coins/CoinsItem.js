import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Platform, Pressable} from 'react-native';
import redArrow from 'cryptotracker/src/assets/redarrow.png';
import greenArrow from 'cryptotracker/src/assets/greenarrow.png';

const CoinsItem = ({item, actionDetail}) => {
  const [coinChange, setCoinChange] = useState(s.greenText);
  const [arrowIndicator, setArrowIndicator] = useState([]);
  useEffect(() => {
    if (item.percent_change_1h > 0) {
      setCoinChange(s.greenText);
      setArrowIndicator(greenArrow);
    } else {
      setCoinChange(s.redText);
      setArrowIndicator(redArrow);
    }
    return () => {};
  }, [item.percent_change_1h]);
  return (
    <Pressable onPress={actionDetail} key={item.id} style={s.container}>
      <View style={s.row}>
        <Text style={s.symbolText}>{item.symbol}</Text>
        <Text style={s.nameText}>{item.name}</Text>
        <Text style={s.priceText}>${item.price_usd} USD</Text>
      </View>
      <View style={s.row}>
        <Text style={(s.percentText, coinChange)}>
          {item.percent_change_1h}%{' '}
        </Text>
        <Image source={arrowIndicator} style={s.imageIcon} />
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 0 : 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 12,
  },
  percentText: {
    fontSize: 12,
  },
  priceText: {
    color: '#fff',
    fontSize: 14,
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  imageIcon: {
    width: 12,
    height: 6,
    alignSelf: 'center',
  },
});

export default CoinsItem;
