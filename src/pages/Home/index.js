import React, { Component, useEffect, useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SvgUri } from 'react-native';
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
                    <TextInput style={styles.textInput}> <Text> Pesquisar </Text> </TextInput>
                </View>

                <Text>
                    {quizzes.map(quiz => (
                        <TouchableOpacity onPress={handleNavigationToQuiz}>
                            <Text> {quiz.name} </Text>
                            <SvgUri width={42} heigth={42} uri="http://192.168.100.33:19000/uploads/naruto.jpg"></SvgUri>
                        </TouchableOpacity>
                    ))};
                </Text>
                

            </ScrollView>
        </>
    );
}

export default Home;