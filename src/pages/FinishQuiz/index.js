import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

 import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const FinishQuiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
 //   const routeParams = route.params;  {routeParams.hits}



//

    return (

        <>
            <ScrollView style={styles.container}>

                <View style={styles.quizHeader}>
                    <Text style={styles.quizNameText}> Sigenki No Kyojin </Text>
                    <Text style={styles.quizStatusText}> Vitória! </Text>
                    <Image style={styles.quizImage} source={require('../../assets/image-shigenki.png')}/>
                </View>

                <View style={styles.quizPoints}>
                    <Text style={styles.quizPointsText}> Questões: 10/10 </Text>
                    <Text style={styles.quizPointsText}> Pontos: 20 </Text>
                </View>

                
                <View style={styles.homeButton}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                        <Text style={styles.homeButtonText}> Home </Text>
                    </TouchableOpacity>
                </View> 

                <View style={styles.tryAgainButton}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                        <Text style={styles.tryAgainButtonText}> Tentar Novamente </Text>
                    </TouchableOpacity>
                </View>
                

            </ScrollView>

        </>
    );
}

export default FinishQuiz;