import React from 'react'
import { View, Text, Animated, useWindowDimensions } from 'react-native'

import styles from './Paginator.style'

type IProps = {
    data: object[],
    scrollX: any
}

const Paginator: React.FC<IProps> = ({ data, scrollX }) => {

    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            {
                data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, width * (i + 1)]
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp'
                    })

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View
                            key={i.toString()}
                            style={[styles.dot, { width: dotWidth, opacity }]}
                        />
                    );
                })
            }
        </View>
    )
}

export default Paginator
