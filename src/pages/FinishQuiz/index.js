import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import styles from './styles';
import api from '../../services/api';

const FinishQuiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;

    const [quiz, setQuiz] = useState({});
    const [user, setUser] = useState({});
    const [totalPoints, setTotalPoints] = useState(0);
    const [result, setResult] = useState('');

    useEffect(() => {

        if (routeParams.hits > 0) {
            setResult('Vitória!');
        } else {
            setResult('Derrota...');
        }

        api.get(`quizzes/${routeParams.quiz_id}`).then(response => {
            setQuiz(response.data);
        });

        /*api.get(`users/${routeParams.user_id}`).then(response => {
            setUser(response.data);
        });*/

        //FAZER LÓGICA DE QUANTO PONTOS FORAM GANHOS APARTIR DOS ACERTOS PARA ATUALIZAR OS PONTOS DO USUÁRIO

    }, []);

    function tryAgain() {
        //NESTE CASO TODOS OS PONTOS, PULOS E ACERTOS QUE OCORERAM NO QUIZ SERAM IGNORADOS
        navigation.navigate('Quiz', {
            user_id: user.id,
            quiz_id: quiz.id,
            jumps: user.jumps,
            points: user.points
        });
    }

    function finishQuiz() {
        //setTotalPoints(quiz.pointValue + routeParams.points);
        /*api.put(`users/${user.id}`).then(response => {
            navigation.navigate('Home', {
                user_id: user.id
            });
        });*/
        navigation.navigate('Home', {
            user_id: user.id
        });//APENAS PARA FACILITAÇÃO DE NAVEGAÇÃO, REMOVER DEPOIS E DEIXAR APENAS O NAVIGATE QUE ESTÁ ACIMA
    }

    return (
        <>
            <ScrollView style={styles.container}>

                <View style={styles.quizHeader}>
                    <Text style={styles.quizNameText}> {quiz.name} </Text>
                    <Text style={styles.quizStatusText}> {result} </Text>
                    <SvgUri uri={quiz.image_url} width={300} height={200} style={styles.quizImage}></SvgUri>
                </View>

                <View style={styles.quizPoints}>
                    <Text style={styles.quizPointsText}> Acertos: {routeParams.hits}/10 </Text>
                    <Text style={styles.quizPointsText}> Pontos: {routeParams.points} </Text>
                </View>

                <View style={styles.homeButton}>
                    <TouchableOpacity onPress={finishQuiz}>
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