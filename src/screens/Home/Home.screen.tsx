import React from 'react'
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView,  } from 'react-native'
import LottieView from 'lottie-react-native';


import styles from './Home.style'

const Home: React.FC = () => {

    const hymns = [
        {
            id: 1,
            name: "Songs of the Church",
            image: require('../../../res/images/soc.jpg')
        },
        {
            id: 2,
            name: "Songs of Faith and Praises ",
            image: require('../../../res/images/sfp.jpeg')
        },
        {
            id: 3,
            name: "21st Century",
            image: require('../../../res/images/21st_cen.jpg')
        },
        {
            id: 4,
            name: "Chans de Victoire",
            image: require('../../../res/images/cdv.jpg')
        },
        {
            id: 5,
            name: "Choruses Of Faith",
            image: require('../../../res/images/21st_cen.jpg')
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <Image
                source={require('../../../res/images/openHymn.jpg')}
                style={styles.image}
            />
            <Text style={styles.userGreetingTxt}>Hello <Text style={styles.userText}>Benndip</Text> !</Text>
            <View style={styles.cleftAndText}>
                <LottieView style={styles.lottieView} source={require('../../../res/lottieFiles/27209-music-notes.json')} autoPlay loop />
                <Image
                    source={require('../../../res/images/trebleclef3D.png')}
                    style={styles.trebleClefImage}
                />
                <Text style={styles.ourPraiseText}>The Lord deserves our praise</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Text style={styles.fromWhereText}>Form where do you wish to sing ?</Text>
                <View style={styles.hymnsView}>
                    {
                        hymns.map(hymn=>(
                            <TouchableOpacity 
                                style={styles.hymnAndText}
                                activeOpacity={0.7}
                                key={hymn.id}
                            >
                                    <Image
                                        source={hymn.image}
                                        style={styles.hymnImage}
                                    />
                                <Text style={styles.hymnText}>{hymn.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
            <Text style={styles.poweredByText}>Powered By <Text style={styles.csText}> Celestial Singers</Text>
            </Text>
        </View>
    )
}

export default Home
