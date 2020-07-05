import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
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

    function handleNavigationToQuiz(quiz_id) {
        navigation.navigate('Quiz', {
            user_id: 1,
            quiz_id: quiz_id,
            jumps: 5,
            points: 180
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.quizDownText}>
                    <Text style={styles.quizDownText}> QuizDown </Text>
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.userInfoText}> User </Text>
                    <Text style={styles.userInfoText}> Pontos: 100 </Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Pesquisar">
                    </TextInput>

                </View>
                {quizzes.map(quiz => (
                    <View key={String(quiz.id)} style={styles.quizListContainer}>
                        <Text style={styles.quizNameText}>{quiz.name}</Text>
                        <SvgUri style={styles.quizImage} width={300} height={200} uri={quiz.image_url}></SvgUri>
                        <Text style={styles.quizDescripitionText}>{quiz.description}</Text>

                        <TouchableOpacity style={styles.playButton} onPress={() => { handleNavigationToQuiz(quiz.id) }}>
                            <Text style={styles.playButtonText}> Jogar </Text>
                        </TouchableOpacity>

                    </View>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;