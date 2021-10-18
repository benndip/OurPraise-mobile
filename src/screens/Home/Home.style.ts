import { StyleSheet } from 'react-native';
import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        height: theme.DEVICE_HEIGHT * 0.35,
        width: theme.DEVICE_WIDTH,
        alignSelf: 'center',
        opacity: 0.6,
        backgroundColor: theme.PRIMARY_COLOR
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
        // borderWidth: 1,
    },
    trebleClefImage: {
        width: theme.DEVICE_WIDTH * 0.3,
        height: theme.DEVICE_WIDTH * 0.3,
    },
    ourPraiseText:{
        marginTop: 10,
        fontSize: 16,
        color: '#222f3e'
    }
});

export default styles