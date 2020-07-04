import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import styles from './styles';
import api from '../../services/api';

const Home = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        api.get('quizzes').then(response => {
            setQuizzes(response.data);
        });
    }, []);

    function handleNavigationToQuiz() {
        navigation.navigate('Quiz', {
            user_id: 1,
            quiz_id: 2,
            jumps: 5
        });
    }

    return (
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
                    <TextInput style={styles.textInput}> <Text> Pesquisar </Text> </TextInput>
                </View>

                {quizzes.map(quiz => (
                    <TouchableOpacity
                        onPress={handleNavigationToQuiz}
                        key={String(quiz.id)}>
                        <Text> {quiz.name} </Text>
                        <SvgUri width={42} heigth={42} uri={quiz.image_url}></SvgUri>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </>
    );
}

export default Home;