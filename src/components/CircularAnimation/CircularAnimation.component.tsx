import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import styles from './CircularAnimation.style';

type IProps = {
    percentage: number,
}

const CircularAnimation: React.FC<IProps> = ({ percentage }) => {

    const size = 92
    const strokeWidth = 2
    const radius = (size / 2) - (strokeWidth / 2)
    const circumference = 2 * Math.PI * radius
    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                console.log("running");
                const strokeDashoffset = circumference - (circumference * value.value) / 100;
                if (progressRef?.current) {
                    progressRef.current.setNativeProps({
                        strokeDashoffset
                    })
                }
            },
            [percentage]
        )

        return (() => {
            progressAnimation.removeAllListeners()
        })
    }, [])

    return (
        <View
            style={styles.container}
        >
            <Svg height="98%" width="98%" viewBox="0 0 100 100">
                <Circle
                    ref={progressRef}
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgb(72,205,178)"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                />
            </Svg>
        </View>
    )
}

export default CircularAnimation
