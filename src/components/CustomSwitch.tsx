import React, { useState } from 'react'
import { View, Text, Switch, Platform } from 'react-native';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;

}

const CustomSwitch = ({isOn, onChange }: Props) => {

    const [isOnState, setIsOnState] = useState(isOn);
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }


    return (
        <View>
            <Switch
                trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
                thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default CustomSwitch;
