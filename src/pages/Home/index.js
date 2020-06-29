import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

import styles from './styles';

const Home = () => {

    const navigation = useNavigation();

 /*   function handleNavigationToQuiz() {
        navigation.navigate('Quiz', {
            quiz_id: 2,
            jump: 5
        });
    }
*/
    return ( //INICIANDO TELA DE HOME, ALGUMAS COISAS VÃO SER ACESSADAS ATRAVÉS DO BACKEND E CONSEQUENTEMENTE SUBSTITUÍDAS
        //Teste
        <>
            <ScrollView style={styles.container}>
                <View style={styles.quizDownText}>
                    <Text style={styles.quizDownText}> QuizDown </Text>
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.userInfoText}> User </Text>
                    <Text style={styles.userInfoText}> Pontos: 100 </Text>
                </View>

                <View>
                    <TextInput style={styles.textInput}> Pesquisar </TextInput>
                </View>

            </ScrollView>
        </>
    );
}

export default Home;