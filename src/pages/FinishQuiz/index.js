import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// import { Container } from './styles';

const FinishQuiz = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;

    return (
        <View>
            <Text style={{color: '#FFF', alignItems: "center", marginTop: 100}}>{routeParams.hits}</Text>

            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FinishQuiz;