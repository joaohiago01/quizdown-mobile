import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import styles from './styles';
import api from '../../services/api';

const Home = () => {

    const navigation = useNavigation();

    const [textInput, setTextInput] = useState('');

    const [quizzes, setQuizzes] = useState([]);

    const [user, setUser] = useState({});

    useEffect(() => {
        api.get('quizzes').then(response => {
            setQuizzes(response.data);
        });

        api.get(`users/${1}`).then(response => {
            setUser(response.data);
        });

    }, []);

    function handleNavigationToQuiz(quiz_id) {
        navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: 'Quiz',
                    params: {
                        user_id: user.id,
                        quiz_id: quiz_id,
                        jumps: user.skips,
                        points: user.points
                    }
                },
            ],
        }));
    }

    function filterSearch(text) {
        const newData = quizzes.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        });
        this.setQuizzes(newData)({
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.quizDownText}>
                    <Text style={styles.quizDownText}> QuizDown </Text>
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.userInfoText}> {user.username} </Text>
                    <Text style={styles.userInfoText}> Pontos: {user.points} </Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Pesquisar"
                        onChangeText={(text) => filterSearch(text)}
                        value={textInput}>
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