import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

const Quiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;

    const [question, setQuestion] = useState({});
    const [quiz, setQuiz] = useState([]);

    const [jumps, setJumps] = useState(routeParams.jumps);

    const [numberQuestion, setNumberQuestion] = useState(1);
    const [hits, setHits] = useState(0);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        api.get(`questions/${routeParams.quiz_id}`).then(response => {
            setQuiz(response.data);
            setQuestion(response.data[numberQuestion - 1]);
        }).catch(reject => {
            navigation.goBack();
        });

        /*api.get(`users/${routeParams.user_id}`).then(response => {
            setPoints(response.data.points);
        }).catch(reject => {
            navigation.goBack();
        });*/
    },);

    useEffect(() => {
        if (numberQuestion <= 10) {
            setQuestion(quiz[numberQuestion - 1]);
        } else {
            navigation.navigate('FinishQuiz', {
                hits: hits,
                points: points,
                jumps: jumps,
                user_id: routeParams.user_id,
                quiz_id: routeParams.quiz_id,
            });
        }
    }, [numberQuestion]);

    useEffect(() => {
        setPoints(points - 30);
        setNumberQuestion(numberQuestion + 1);
        setQuestion(quiz[numberQuestion - 1]);
    }, [jumps]);

    /*useEffect(() => {

    }, []);*/

    function chosenAlternative(alternative) {
        if (alternative === question.rightAnswer) {
            setHits(hits + 1);
            //styles.buttonOption.backgroundColor = '#05FF00';
        } else {
            //styles.buttonOption.backgroundColor = '#FF0000';
        }
        setNumberQuestion(numberQuestion + 1);
    }

    function nextQuestion() {

    }

    function jumpQuestion() {
        if (jumps <= 0 || points <= 0) {
            //MODAL
        } else {
            setJumps(jumps - 1);
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