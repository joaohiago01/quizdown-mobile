import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

const Quiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({});

    const [jumps, setJumps] = useState(0);
    const [points, setPoints] = useState(0);

    const [numberQuestion, setNumberQuestion] = useState(1);
    const [hits, setHits] = useState(0);

    useEffect(() => {

        api.get(`questions/${routeParams.quiz_id}`).then(response => {
            setQuestions(response.data);
            setQuestion(response.data.pop());
        }).catch(reject => {
            navigation.goBack();
        });

        setPoints(routeParams.points);
        setJumps(routeParams.jumps);

    }, []);

    function chosenAlternative(alternative) {
        if (alternative === question.rightAnswer) {
            setHits(hits + 1);
        }

        checkQuestions();

    }

    function checkQuestions() {
        setNumberQuestion(numberQuestion + 1);
        const nextQuestion = questions.pop();
        if (nextQuestion != null) {
            setQuestions(questions);
            setQuestion(nextQuestion);
        } else {
            let hitsCorrect = hits;
            if (hits != 0) {
                hitsCorrect = hits + 1;
            }
            navigation.navigate('FinishQuiz', {
                hits: hitsCorrect,
                points: points,
                jumps: jumps,
                user_id: routeParams.user_id,
                quiz_id: routeParams.quiz_id,
            });
        }
    }

    function nextQuestion() {
        const skippedQuestion = question;
        const nextQuestion = questions.pop();
        if (nextQuestion == null) {
            setQuestion(skippedQuestion);
        } else {
            setQuestion(nextQuestion);
            const restQuestions = questions;
            restQuestions.push(skippedQuestion);
            restQuestions.sort(() => { });
            setQuestions(restQuestions);
        }
    }

    function jumpQuestion() {
        if (jumps <= 0) {
            if (points >= 30) {
                (
                    Alert.alert('Seus Pulos Acabaram...', 'Comprar Pulo?', [
                        {
                            text: 'Sim',
                            onPress: () => {
                                setPoints(points - 30);
                                setJumps(jumps + 1);
                            }
                        },
                        {
                            text: 'Não',
                            onPress: () => { }
                        }
                    ],
                        { cancelable: false })
                )
            } else {
                (
                    Alert.alert('Pontos insuficientes!')
                )
            }
        } else {
            setJumps(jumps - 1);
            if (points > 0) {
                setPoints(points - 30);
            }
            checkQuestions();
        }
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.point}>
                    <Text style={styles.pointText}>{points}</Text>
                    <Image source={require('../../assets/icons-moedas.png')}
                    />
                </View>

                <View style={styles.quizInfo}>
                    <Text style={styles.quizInfoText}>Questão: {numberQuestion}/10</Text>
                    <Text style={styles.quizInfoText}>Acertos: {hits}</Text>
                </View>

                <View>
                    <Text style={styles.question}>{question.question}</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonOption} onPress={() => chosenAlternative(1)}>
                        <Text style={styles.buttonOptionText}>{question.alternativeOne}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption} onPress={() => chosenAlternative(2)}>
                        <Text style={styles.buttonOptionText}>{question.alternativeTwo}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption} onPress={() => chosenAlternative(3)}>
                        <Text style={styles.buttonOptionText}>{question.alternativeThree}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption} onPress={() => chosenAlternative(4)}>
                        <Text style={styles.buttonOptionText}>{question.alternativeFour}</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={nextQuestion}>
                    <Text style={styles.buttonText}>Próxima</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={jumpQuestion}>
                    <Text style={styles.buttonText}>Pular</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.jumpContainer}>
                <Text style={styles.jumpText}>Pulos restantes: {jumps}</Text>
            </View>
        </>
    );
}

export default Quiz;