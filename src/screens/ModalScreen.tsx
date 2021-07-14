import React, { useState } from 'react'
import { View, Text, Button, Modal } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title='Modal Screen' />
            
            <Button 
                title='Abrir modal'
                onPress={ () => {
                    setIsVisible(true);
                } }
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
                    backgroundColor: 'rgba(0,0,0,0.3 )',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                {/* contenido del texto */}
                <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'white',
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
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold'}} > Modal </Text>
                    <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}} > cuerpo del modal </Text>
                    <Button 
                        title='Cerrar'
                        onPress={ () => setIsVisible(false) }
                     />
                </View>


            </View>

            </Modal>

        </View>
    )
}

export default ModalScreen;
