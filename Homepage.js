import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const StagesScreen = ({ route }) => {
  const { idStagiaire } = route.params;
  const [stages, setStages] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les stages du stagiaire
    fetch(`https://odissee/api/stages/${idStagiaire}`)
      .then(response => response.json())
      .then(data => setStages(data))
      .catch(error => console.error('Erreur lors de la récupération des stages:', error));
  }, [idStagiaire]);

  return (
    <View>
      <Text>Liste des stages du stagiaire:</Text>
      <FlatList
        data={stages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Nom du stage: {item.nom}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Lieu de départ: {item.lieuDepart}</Text>
            <Text>Lieu d'arrivée: {item.lieuArrivee}</Text>
            <Text>Date de début: {item.dateDebut}</Text>
            <Text>Date de fin: {item.dateFin}</Text>
            <Text>--------------------</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StagesScreen;
