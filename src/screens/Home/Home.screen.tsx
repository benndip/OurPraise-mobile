import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'

import styles from './Home.style'

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <Image
                source={require('../../../res/images/openHymn.jpg')}
                style={styles.image}
            />
            <Text style={styles.userGreetingTxt}>Hello <Text style={styles.userText}>Benndip</Text> !</Text>
            <View style={styles.cleftAndText}>
                <Image
                    source={require('../../../res/images/trebleclef3D.png')}
                    style={styles.trebleClefImage}
                />
                <Text style={styles.ourPraiseText}>The Lord deserves our praise</Text>
            </View>
        </View>
    )
}

export default Home
