import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

const FinishQuiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;
    const [quiz, setQuiz] = useState({});
    const [user, setUser] = useState({});
    useEffect(() => {
        api.get(`quizzes/${routeParams.quiz_id}`).then(response => {
            setQuiz(response.data.name);
        });

        /*api.get(`users/${routeParams.user_id}`).then(response => {
            setUser(response.data);
        });*/

        //FAZER LÓGICA DE QUANTO PONTOS FORAM GANHOS APARTIR DOS ACERTOS PARA ATUALIZAR OS PONTOS DO USUÁRIO

    }, []);

    function tryAgain() {
        //NESTE CASO TODOS OS PONTOS, PULOS E ACERTOS QUE OCORERAM NO QUIZ SERAM IGNORADOS
        navigation.navigate('Quiz');
    }

    return (
        <>
            <ScrollView style={styles.container}>

                <View style={styles.quizHeader}>
                    <Text style={styles.quizNameText}> {quiz.name} </Text>
                    <Text style={styles.quizStatusText}> Vitória! </Text>
                    <Image style={styles.quizImage} source={require('../../assets/image-shigenki.png')} />
                </View>

                <View style={styles.quizPoints}>
                    <Text style={styles.quizPointsText}> Questões: {routeParams.hits}/10 </Text>
                    <Text style={styles.quizPointsText}> Pontos: {routeParams.points} </Text>
                </View>


                <View style={styles.homeButton}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                        <Text style={styles.homeButtonText}> Home </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tryAgainButton}>
                    <TouchableOpacity onPress={tryAgain}>
                        <Text style={styles.tryAgainButtonText}> Tentar Novamente </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </>
    );
}

export default FinishQuiz;