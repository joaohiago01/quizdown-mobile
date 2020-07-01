import React, { Component, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SvgUri, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';


const Home = () => {

    const [quizzes, setQuizzes] = useState([]);
    const navigation = useNavigation();

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
                    <TextInput style={styles.textInput}> Pesquisar </TextInput>
                </View>

                {quizzes.map(quiz => (
                    <TouchableOpacity onPress={handleNavigationToQuiz}>
                        <Text> {quiz.name} </Text>
                    </TouchableOpacity>
                ))};

            </ScrollView>
        </>
    );
}

export default Home;