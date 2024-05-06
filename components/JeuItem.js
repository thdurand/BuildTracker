// JeuItem.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../style/styleCard';

const JeuItem = ({ item, navigation }) => {
    return (
        <View style={styles.cardContainer}>
            <Text>{item.nom}</Text>
            <Text>{item.type}</Text>
            <Button
                title="Visualiser"
                onPress={() => {
                    navigation.navigate('Reservation', {
                        jeu: item,
                    });
                }}
            />
        </View>
    );
};

export default JeuItem;
