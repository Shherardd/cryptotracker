import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, SectionList, FlatList} from 'react-native';
import CoinMarketItem from './coinMarketItem'
import Http from 'cryptotracker/src/libs/http'
import Colors from 'cryptotracker/src/res/colors'
const CoinDetailScreen = (props) => {

  const [coin, setCoin] = useState({})
  const [market, setMarket] = useState([])

  useEffect(() => {
    const coinObj = props.route.params.coin
    setCoin( coinObj )
    props.navigation.setOptions({title: coinObj.name})
    getMarkets(coinObj.id)
    return () => {};
  }, [props]);

  const getSymbol = (symbol) => {
    if(symbol){      
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`
    }
  }

  const getSections = (coin) => {
    const sections = [
      {
        title: "Market cap",
        data: [coin.market_cap_usd]
      },
      {
        title: "Volume 24h",
        data: [coin.volume24]
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h]
      }
    ]
    return sections
  }

  const getMarkets = async (coinId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`

    const markets = await Http.instance.get(url)
    setMarket(markets)
  }

  return (
    <View style={s.container}>
      <View style={s.subHeader}>
        <Image
        style= {s.coinImg}
          source={{uri: getSymbol(coin.nameid)}}
        />
        <Text style={s.textTitle}>{coin.name}</Text>
      </View>
      <SectionList
        style={s.section}
        sections={getSections(coin)}
        keyExtractor={(item) => item}
        renderItem={({item}) => 
        <View style={s.sectionItem}>
          <Text style={s.itemText}>{item}</Text>
        </View>
      }
        renderSectionHeader={({section}) => 
        <View style={s.sectionHeader}>
          <Text style={s.sectionText}>{section.title}</Text>
        </View>
      }
      />
      <Text style={s.marketTitle}> Markets </Text>
      <FlatList
        style={s.marketList}
        horizontal={true}
        data={market}
        renderItem={({item}) => <CoinMarketItem item={item}
        />
        }
        keyExtractor={(item) => `${item.name}-${item.volume}`}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: "row",
    alignItems: 'center'
  },
  textTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:8,
  },
  coinImg: {
    width: 25,
    height: 25
  },
  section: {
    maxHeight: 220
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    color: "#fff",
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  marketList: {
    maxHeight: 100,
    paddingLeft: 16
  },
  marketTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold'

  }
})

export default CoinDetailScreen;
