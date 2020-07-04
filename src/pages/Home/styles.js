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

    quizNameText: {
        marginTop: 40,
        color: "#FFF",
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold'
    },

    quizImage: {
        borderRadius: 90,
    },

    quizDescripitionText: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'Ubuntu_700Bold',
    },

    
    playButton: {
        paddingTop: 15,
        alignItems: "center",
        backgroundColor: '#008080',
        borderRadius: 8,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#FFF'
    },

    playButtonText: {
        fontFamily: 'Ubuntu_700Bold',
        alignItems: "center",
        color: '#FFF',
        fontSize: 16,
        marginBottom: 10,
    }

});

export default styles;