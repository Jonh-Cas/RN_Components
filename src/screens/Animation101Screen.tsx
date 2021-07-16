import React, { useContext, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'
import ItemSeparater from '../components/ItemSeparater';
import { useAnimation } from '../Hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContex';

const Animacion101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMoving } =  useAnimation();
    const {theme: { colors } } = useContext(ThemeContext)


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
                     color={colors.primary }
                />
                <ItemSeparater />
                <Button  
                    title='FadeOut'
                    onPress={ () => fadeOut(500) }
                    color= {colors.primary }
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