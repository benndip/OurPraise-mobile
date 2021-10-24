import { StyleSheet } from 'react-native';
import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        height: theme.DEVICE_HEIGHT * 0.4,
        width: '100%',
        alignSelf: 'center',
        opacity: 0.78,
        backgroundColor: 'blue'
    },
    userGreetingTxt: {
        position: 'absolute',
        top: 40,
        left: 30,
        fontSize: 25,
        fontWeight: 'bold'
    },
    userText: {
        color: theme.PRIMARY_COLOR
    },
    cleftAndText: {
        flexDirection: 'row',
        alignItem: 'center',
        width: theme.DEVICE_WIDTH * 0.75,
        height: theme.DEVICE_WIDTH * 0.3,
        position: 'absolute',
        top: 80,
        left: 30,
        justifyContent: 'space-between',
    },
    trebleClefImage: {
        width: theme.DEVICE_WIDTH * 0.3,
        height: theme.DEVICE_WIDTH * 0.3,
    },
    ourPraiseText:{
        marginTop: 15,
        fontSize: 16,
        color: '#222f3e'
    },
    fromWhereText: {
        textAlign:'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 0,
        fontSize: 16,
        fontWeight: 'bold'
    },
    hymnsView: {
        width: theme.DEVICE_WIDTH,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingBottom: 10
    },
    hymnImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    hymnAndText: {
        width: theme.DEVICE_WIDTH * 0.25,
        height: theme.DEVICE_HEIGHT * 0.17,
        marginHorizontal: 4,
        alignSelf: 'center',
        marginVertical:25,
        alignItems: 'center',
        // borderWidth: 1
    },
    hymnText: {
        textAlign:'center',
        alignSelf: 'center',
    },
    scrollView: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: '-15%'
    },
    poweredByText: {
        alignSelf: 'center',
        marginBottom: 20
    },
    csText: {
        color: theme.PRIMARY_COLOR,
        fontWeight:'bold'
    },
    lottieView: {
        position: 'absolute',
    }
});

export default styles