import { StyleSheet } from "react-native";

import theme from '../../theme/'

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    largeImage: {
        width: theme.DEVICE_WIDTH,
        height: theme.DEVICE_HEIGHT * 0.40
    },
    title: {
        color: 'rgb(11,38,70)',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        position: 'absolute',
        top: (theme.DEVICE_HEIGHT * 0.60),
        textAlign:'center'
    },
    description: {
        alignSelf: 'center',
        marginVertical: theme.DEVICE_HEIGHT * 0.05,
        color: 'rgb(144,144,156)',
        textAlign:'center',
        fontSize: 15,
        fontWeight: '700',
        position: 'absolute',
        top: (theme.DEVICE_HEIGHT * 0.65),
        letterSpacing: 1.2
    }
})

export default styles