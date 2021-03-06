import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from 'cryptotracker/src/libs/http';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch'
import Colors from 'cryptotracker/src/res/colors';

const CoinsScreen = (props) => {
  const {navigation} = props;
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const uri = 'https://api.coinlore.net/api/tickers/';
  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', {coin});
  };

  const handleLongPress = () => {
    console.log(props);
  };

  const handleSearch = (query) => {
    const coinsFiltered = allCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    })
    setCoins(coinsFiltered);
  }

  const getData = async () => {
    const res = await Http.instance.get(uri);
    if (res.data) {
      setCoins(res.data);
      setAllCoins(res.data); 
      setLoading(false);
    } else {
      console.error('error en solicitud: CoinsScreen.js - getData ');
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
    return () => {};
  }, []);

  return (
    <View style={s.container}>
      {loading ? (
        <ActivityIndicator style={s.loader} color="#000" size="large" />
      ) : null}
      <CoinsSearch onChange={handleSearch}/>
      <FlatList
        data={coins}
        renderItem={({item}) => (
          <CoinsItem item={item} actionDetail={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  title: {
    fontSize: 24,
    margin: 15,
  },
  btn: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 16,
    width: 400,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
