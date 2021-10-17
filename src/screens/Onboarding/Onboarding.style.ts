import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%'
    },
    circularCard: {
        backgroundColor: '#ffffff',
        width: theme.DEVICE_WIDTH * 0.18,
        height: theme.DEVICE_WIDTH * 0.18,
        borderRadius: (theme.DEVICE_WIDTH * 0.18) / 2,
        shadowColor: 'red',
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circularView: {
        width: theme.DEVICE_WIDTH * 0.21,
        height: theme.DEVICE_WIDTH * 0.21,
        backgroundColor: 'rgba(241,241,250, 0.5)',
        borderRadius: (theme.DEVICE_WIDTH * 0.21) / 2,
        elevation: 6,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: (theme.DEVICE_HEIGHT * 0.40 - (theme.DEVICE_WIDTH * 0.21) / 2.5),
        alignSelf: 'center'
    },
    logo: {
        alignSelf: 'center',
        width: 30,
        height: 60
    },
    button: {
        width: theme.DEVICE_WIDTH * 0.70,
        height: 45,
        borderRadius: (theme.DEVICE_WIDTH * 0.70 + 45) / 2,
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10
    },
    getStartedTxt:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    arrowIcon: {
        position:'absolute', 
        right: 20
    }
})

export default styles