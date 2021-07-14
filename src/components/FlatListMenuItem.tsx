import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItems } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItems
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();


    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={() => navigation.navigate(menuItem.component) }
        >
            <View style={styles.container} >
    
                <Icon name={menuItem.icon}
                    color='#5856D6'
                    size={30}
                />
                <Text style={styles.itemText} >
                    {menuItem.name}
                </Text>
    
                <View style={{flex: 1 }} />
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
