import React, { useContext } from 'react'
import { useNavigation} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItems } from '../interfaces/appInterfaces';
import { ThemeContext } from '../context/themeContext/ThemeContex';


interface Props {
    menuItem: MenuItems
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const {theme: {colors}  } = useContext(ThemeContext)
    // const { colors } = useTheme();


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container} >

                <Icon name={menuItem.icon}
                    color={colors.primary }
                    size={30}
                />
                <Text style={styles.itemText} >
                    {menuItem.name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon name='chevron-forward-outline'
                    color={colors.primary }
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
