import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import styles from './OnboardingItem.style'

interface IProps {
    item: {
        imageSource: ImageSourcePropType,
        title: string,
        description: string
    }
}

const OnboardingItem: React.FC<IProps> = ({ item }) => {
    const { imageSource, title, description } = item
    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.largeImage}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

export default OnboardingItem
