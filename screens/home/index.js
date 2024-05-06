// AccueilScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { style } from '../../style/style';
import jeuxData from '../../data/jeux.json';
import JeuItem from '../../components/JeuItem';


function HomeScreen({ navigation }) {
  const [jeux, setJeux] = useState([]);

  useEffect(() => {
    setJeux(jeuxData);
  });

  return (
    <View style={style.container}>
      <Text style={style.text}>My games</Text>
      <FlatList
        data={jeux}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <JeuItem item={item} navigation={navigation} />}
      />
    </View>
  );
};

export default HomeScreen;
