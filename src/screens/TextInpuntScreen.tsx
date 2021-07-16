import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import useForm from '../Hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContex';

const TextInpuntScreen = () => {


    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribe: false,
    });

    const {theme: {colors } } = useContext(ThemeContext)

    const { isSubcribe } = form;


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>

                <TouchableWithoutFeedback>



                    <View style={styles.globalMargin} >
                        <HeaderTitle title='TextInput' />
                        <TextInput
                            style={{...stylesText.inputStyle, borderColor: colors.primary, color: colors.text }}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor='gray'
                        />
                        <TextInput
                             autoCorrect={false}
                             autoCapitalize='none'
                             style={{...stylesText.inputStyle, borderColor: colors.primary, color: colors.text }}
                            placeholder='Ingrese su email'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                            placeholderTextColor='gray'
                        />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }} >

                            <HeaderTitle
                                title='Suscrito'
                            />
                            <View style={{ flex: 1 }} />
                            <CustomSwitch isOn={isSubcribe} onChange={(value) => onChange(value, 'isSuscribe')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                             style={{...stylesText.inputStyle, borderColor: colors.primary, color: colors.text }}
                            placeholder='ingrese su telefono'
                            placeholderTextColor='gray'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />


                    </View>
                    <View style={{ height: 100 }} />
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default TextInpuntScreen;

const stylesText = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        padding: 10,
        marginBottom: 10,
    }
});