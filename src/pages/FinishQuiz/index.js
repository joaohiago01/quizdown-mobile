import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native';
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

        if (routeParams.hits >= 7) {
            setResult('Vitória!');
        } else {
            setResult('Derrota...');
        }

        api.get(`quizzes/${routeParams.quiz_id}`).then(response => {
            setQuiz(response.data);
            const percentage = routeParams.hits / 10;
            const points = (percentage * response.data.pointValue) + routeParams.points;
            setTotalPoints(points);
        });

        api.get(`users/${routeParams.user_id}`).then(response => {
            setUser(response.data);
        });

    }, []);

    function tryAgain() {
        navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: 'Quiz',
                    params: {
                        user_id: user.id,
                        quiz_id: quiz.id,
                        jumps: user.jumps,
                        points: user.points
                    }
                },
            ],
        }));
    }

    function finishQuiz() {
        const skips = routeParams.jumps;

        api.put(`users/${user.id}`, {
            data: {
                username: user.username,
                points: totalPoints,
                skips: skips
            }
        }).then(response => {
            navigation.navigate('Home', {
                user_id: user.id
            });
        });
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
                    <Text style={styles.quizPointsText}> Pontuação Atual: {totalPoints} </Text>
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