import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#363636',
        paddingHorizontal: 32,
        paddingTop: 20,
    },

    quizHeader: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20,
        alignItems: "center",
    },

    quizNameText: {
        color: '#FFF',
        fontSize: 18,
        marginTop: 50,
        fontFamily: 'Ubuntu_700Bold',
    },

    quizStatusText: {
        color: '#1DC9FF',
        fontSize: 18,
        marginTop: 29,
        fontFamily: 'Ubuntu_700Bold',
        
    },

    quizImage: {
        marginTop: 20,
        borderRadius: 8,
    },

    quizPoints: {
        maxWidth: 300,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#363636',
        padding: 20,
    },

    quizPointsText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
    },

    homeButton: {
        paddingTop: 15,
        alignItems: "center",
        backgroundColor: '#008080',
        borderRadius: 8,
        marginLeft: 40,
        marginRight: 40,
    },

    homeButtonText: {
        fontFamily: 'Ubuntu_700Bold',
        alignItems: "center",
        color: '#FFF',
        fontSize: 16,
        marginBottom: 10,
    },

    tryAgainButton: {
        paddingTop: 15,
        alignItems: "center",
        backgroundColor: '#363636',
        borderRadius: 8,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
    },

    tryAgainButtonText: {
        fontFamily: 'Ubuntu_700Bold',
        alignItems: "center",
        color: '#FFF',
        fontSize: 16,
        marginBottom: 10,
    }

});

export default styles;