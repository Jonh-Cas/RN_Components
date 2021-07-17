import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from '../context/themeContext/ThemeContex';

import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInpuntScreen from '../screens/TextInpuntScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import customSectionListScreen from '../screens/customSectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();

const StackNavigation = () => {


    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            backgroundColor: theme.colors.background,
            flex: 1,
        }} >


            <NavigationContainer
                theme={theme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {

                        }

                    }}


                >
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen name='Animation101Screen' component={Animation101Screen} />
                    <Stack.Screen name='Animation102Screen' component={Animation102Screen} />
                    <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
                    <Stack.Screen name='AlertScreen' component={AlertScreen} />
                    <Stack.Screen name='TextInpuntScreen' component={TextInpuntScreen} />
                    <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen} />
                    <Stack.Screen name='customSectionListScreen' component={customSectionListScreen} />
                    <Stack.Screen name='ModalScreen' component={ModalScreen} />
                    <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} />
                    <Stack.Screen name='SlidesScreen' component={SlidesScreen} />
                    <Stack.Screen name='ChangeThemeScreen' component={ChangeThemeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default StackNavigation;
