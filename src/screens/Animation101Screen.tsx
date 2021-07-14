import React, { useRef } from 'react'
import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'
import { useAnimation } from '../Hooks/useAnimation'

const Animacion101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMoving } =  useAnimation();



    return (
        <View style={{flex: 1}} >
            <View style={styles.container} >
                <Animated.View style={{
                    ...styles.purpleBox,
                    marginBottom: 20,
                    opacity,
                    transform: [{
                        translateX: position
                    }]
                    }} />
                <Button  
                    title='FadeIn'
                    onPress={ () => { 
                        fadeIn();
                        startMoving(100);
                     } }
                />
                <Button  
                    title='FadeOut'
                    onPress={ fadeOut}
                />

            </View>
        </View>
    )
}

export default Animacion101Screen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});