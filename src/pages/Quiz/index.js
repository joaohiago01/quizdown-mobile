import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

const Quiz = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <TouchableOpacity>
                    <Icon name="arrow-left" size={20} color="#fff" />
                </TouchableOpacity>

                <View style={styles.quizInfo}>
                    <Text style={styles.quizInfoText}>Questão: 1/10</Text>
                    <Text style={styles.quizInfoText}>Acertos: 0</Text>
                </View>

                <View>
                    <Text style={styles.question}>Quais são as três muralhas existentes em que a humanidade vive para se proteger dos titãs?</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.buttonOptionText}>Marta, Rosa e Simbala.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.buttonOptionText}>Shiganshina, Rose e Manta.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.buttonOptionText}>Marta, Rosália e Siná.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.buttonOptionText}>Maria, Rose e Sina.</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Próxima</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pular</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.jumpContainer}>
                <Text style={styles.jumpText}>Pulos restantes: 2</Text>
            </View>
        </>
    );
}

export default Quiz;