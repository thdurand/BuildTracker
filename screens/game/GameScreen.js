// GameScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const GameScreen = ({ route }) => {
    const { jeu } = route.params;

    return (
        <View>
            {/* Affichez d'autres détails et permettez la réservation ici */}
            <Text>Detail d'un jeu</Text>
        </View>
    );
};

export default GameScreen;
