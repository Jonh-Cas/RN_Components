import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContex';

const ItemSeparater = () => {

    const { theme: { dividerColor } } = useContext(ThemeContext)

    return (
        <View style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            marginVertical: 8,
            borderBottomColor: dividerColor,
        }} >

        </View>
    );


}

export default ItemSeparater;
