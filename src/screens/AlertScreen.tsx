import React, { useContext } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContex';

const AlertScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: 'destructive'
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss'),
            }
        )
    }

    const showPropt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );


        // Alert.prompt(
        //     'esta Seguro?',
        //     '¿Esta accion no se puede revertir?',
        //     (valor: string) => console.log('info', valor),
        //     'plain-text',
        //     'hola mundo ',
        // )
    }


    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title='Alerts' />
            <Button
                title='mostrar Alerta'
                onPress={showAlert}
                color={colors.primary}
            />

            <View style={{ height: 10 }} >

            </View>
            <Button
                title='mostrar Propt'
                onPress={showPropt}
                color={colors.primary}
            />

        </View>
    )
}

export default AlertScreen;
