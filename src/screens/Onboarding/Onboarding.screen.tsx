import React, { useRef, useState } from 'react'
import { View, Text, FlatList, StatusBar, Image, Animated, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './Onboarding.style'
import { OnboardingItem, Paginator } from '../../components'

const Onboarding: React.FC = () => {

    const slides = [
        {
            id: 1,
            title: 'Welcome To OurPraise',
            description: 'Revotunalizing church singing and praise adoration. The lord inhabits our Praise',
            imageSource: require('../../../res/images/liftingUpHands.jpg')
        },
        {
            id: 2,
            title: 'God Inhabits Our Praise',
            description: 'Sing Praises to the lord with all your hear, with all your soul. ',
            imageSource: require('../../../res/images/liftingUpHands.jpg')
        },
        {
            id: 3,
            title: 'Welcome to OurPraise',
            description: 'Revotunalizing church singing and praise adoration.',
            imageSource: require('../../../res/images/liftingUpHands.jpg')
        },
        {
            id: 4,
            title: 'Welcome to OurPraise',
            description: 'Revotunalizing church singing and praise adoration.',
            imageSource: require('../../../res/images/liftingUpHands.jpg')
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const slideRef = useRef(null)
    const viewConfig = useRef({ veiwAreaCoveragePercentThreshold: 50 }).current
    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slideRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            // try {
            //     storage.save({
            //         key: 'NOTFIRSTTIME',
            //         data: true,
            //         expires: 1000 * 3600 * 24 * 360
            //     });
            //     navigation.navigate('DrawerNavigation')
            // } catch (err) {
            //     // console.log(err)
            //     navigation.navigate('DrawerNavigation')
            // }
        }
    }

    const renderItem = ({ item }: any) => {
        return <OnboardingItem item={item} />
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <FlatList
                data={slides}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                pagingEnabled
                bounces={false}
                onViewableItemsChanged={viewableItemsChanged}
                // viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slideRef}
            />
            <View style={styles.circularView}>
                <View style={styles.circularCard}>
                    <Image
                        source={require('../../../res/images/logo.png')}
                        style={styles.logo}
                    />
                </View>
            </View>
            <Paginator data={slides} scrollX={scrollX} />
            <Pressable
                style={styles.button}
                onPress={scrollTo}
            >
                <Text style={styles.getStartedTxt}>Get started</Text>
                <AntDesign
                    name='arrowright'
                    color='#ffffff'
                    size={18}
                    style={styles.arrowIcon}
                />
            </Pressable>
        </View>
    )
}

export default Onboarding
