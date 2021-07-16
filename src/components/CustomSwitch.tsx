import React, { useContext, useState } from 'react'
import { View, Text, Switch, Platform } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContex';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;

}

const CustomSwitch = ({isOn, onChange }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const [isOnState, setIsOnState] = useState(isOn);
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }


    return (
        <View>
            <Switch
                trackColor={{ false: "#D9D9DB", true: colors.primary }}
                thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default CustomSwitch;
