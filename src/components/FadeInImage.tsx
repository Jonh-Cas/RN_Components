import React, { useContext, useState } from 'react'
import { View, Text, Animated, ActivityIndicator, ImageStyle, StyleProp } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContex';
import { useAnimation } from '../Hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true);
    const {theme: { colors } } = useContext(ThemeContext)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View
         style={{
             justifyContent: 'center',
             alignItems: 'center',
         }}
        >
            {
                isLoading && <ActivityIndicator
                    style={{position: 'absolute'}}
                    size={30} color={colors.primary } />
            }


            <Animated.Image
                source={{ uri }}
                onLoadEnd={ finishLoading}
                style={{
                    ...style as any ,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
            />
        </View>
    )
}

export default FadeInImage;
