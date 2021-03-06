import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        paddingHorizontal: 32,
        paddingTop: 20,
    },
    quizInfo: {
        maxWidth: 300,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#363636',
        padding: 20,
    },
    quizInfoText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        marginTop : -50,
    },
    question: {
        color: '#FFF',
        fontSize: 18,
        marginTop: -10,
        fontFamily: 'Roboto_500Medium',
        lineHeight: 24,
        textAlign: "center"
    },
    footer: {
        backgroundColor: '#363636',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        width: '47%',
        backgroundColor: '#008080',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 5,
    },
    buttonOption: {
        width: '100%',
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    
    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
    buttonOptionText: {
        marginLeft: 8,
        color: '#000',
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
    },
    jumpContainer: {
        backgroundColor: '#363636',
    },
    jumpText: {
        marginLeft: 8,
        color: '#A9A9A9',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        alignSelf: "flex-end",
        marginEnd: 30,
        marginBottom: 10
    },
    pointText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        marginBottom: 5,
        marginEnd: 5
    },
    point: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "flex-end"
    },
});

export default styles;