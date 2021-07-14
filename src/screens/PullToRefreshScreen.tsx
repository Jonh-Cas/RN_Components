import React, { useState } from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';

const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { top } =  useSafeAreaInsets()
    
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola mundo');
        }, 3000);

    }


    return (
        <ScrollView 
            style={{
                marginTop:  refreshing ? top : 0,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={ onRefresh }
                    progressViewOffset={10}
                    progressBackgroundColor='#5856D6'
                    colors={[ 'red', 'green', 'blue' ]} // Android
                    style={{backgroundColor: '#5856D6'}} // IOS
                    tintColor='white'  // IOS
                    // title='Refresigh' //IOS
                    // titleColor='white' //IOS
                />
            }
        >

        <View style={styles.globalMargin} >
            <HeaderTitle title='Pull to Refresh' />

            {
                data && <HeaderTitle title={ data } />

            }
            
        </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen;
