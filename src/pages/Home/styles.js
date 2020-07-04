import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        paddingHorizontal: 32,
        paddingTop: 20,
    },

    quizDownText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        alignItems: "center",
    },

    userInfo: {
        maxWidth: 300,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#363636',
        padding: 20,
    },

    userInfoText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
    },

    textInput: {
        color: '#929292',
        backgroundColor: '#FFF',
        borderRadius: 8,
    },

    quizListContainer: {
        alignItems: "center",
    },

    quizList: {
        paddingHorizontal: 32,
        paddingTop: 20,
        
    },

    quizNameText: {
        marginTop: 30,
        color: "#FFF",
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold'
    },

    quizImage: {
        marginTop: 20,
        borderRadius: 8,
    },

    quizDescripitionText: {
        color: '#FFF',
        marginTop: 20,
        fontSize: 13,
        fontFamily: 'Ubuntu_700Bold',
    }

});

export default styles;