import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItems } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItems
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { colors } = useTheme();


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container} >

                <Icon name={menuItem.icon}
                    color='#5856D6'
                    size={30}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                    }} >
                    {menuItem.name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon name='chevron-forward-outline'
                    color='#5856D6'
                    size={30}
                />

            </View>
        </TouchableOpacity>


    )
}

export default FlatListMenuItem;

const styles = StyleSheet.create({


    container: {
        flexDirection: 'row',
        flex: 1
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
});
