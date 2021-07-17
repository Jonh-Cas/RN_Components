import React, { useContext, useState } from 'react'
import { View, Text, Button, Modal } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContex';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title='Modal Screen' />
            
            <Button 
                title='Abrir modal'
                onPress={ () => {
                    setIsVisible(true);
                } }
                color={colors.primary }
            />
            
            <Modal
                animationType='slide'
                visible={isVisible}
                transparent={true}
                
            >   

            {/* background negro */}
            <View
                style={{ 
                    flex: 1, 
                    // height: 100,
                    // width: 100,
                    backgroundColor: 'rgba(0,0,0,0.5 )',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                {/* contenido del texto */}
                <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor: colors.background,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.25,
                    elevation: 4,
                    borderRadius: 5,
                    
                }} >
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text }} > Modal </Text>
                    <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20, color: colors.text }} > cuerpo del modal </Text>
                    <Button 
                        title='Cerrar'
                        onPress={ () => setIsVisible(false) }
                        color={colors.primary }

                     />
                </View>


            </View>

            </Modal>

        </View>
    )
}

export default ModalScreen;
