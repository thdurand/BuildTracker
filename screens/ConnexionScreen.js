
// import React from 'react';
// import { View, Text, Button, TextInput, Alert } from 'react-native';

// function ConnexionScreen({ navigation }) {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');

//     const handleLogin = () => {
//         // Vérification basique des champs
//         if (isValidEmail(email) && password.length > 0) {
//             // Simulation d'authentification réussie
//             const fakeUserId = 123; // Remplacez ceci par la logique réelle de récupération de l'ID utilisateur
//             navigation.navigate('Accueil', { idStagiaire: fakeUserId });
//         } else {
//             Alert.alert('Erreur', 'Veuillez fournir une adresse e-mail valide et un mot de passe.');
//         }
//     };

//     const isValidEmail = (value) => {
//         // Logique de vérification d'une adresse e-mail simple
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(value);
//     };

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Bonjour, tu veux connaitre un secret ?</Text>
//             <Button
//                 title="Oui !"
//                 onPress={() => {
//                     /* 1. Navigate to the Details route with params */
//                     navigation.navigate('Accueil', {
//                         itemId: email,
//                         otherParam: 'anything you want here',
//                     });
//                 }}
//             />
//             <TextInput
//                 placeholder="Adresse e-mail"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 value={email}
//                 onChangeText={setEmail}
//             />
//             <TextInput
//                 placeholder="Mot de passe"
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword}
//             />
//             <Button title="Se connecter" onPress={handleLogin} />
//         </View>
//     );
// }

// export default ConnexionScreen;