import { StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 25,
        position: 'absolute',
        alignSelf: 'center',
        top: (theme.DEVICE_HEIGHT * 0.52),
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height: 8,
        borderRadius: 5,
        backgroundColor: theme.PRIMARY_COLOR,
        marginHorizontal: 8
    }
})

export default styles