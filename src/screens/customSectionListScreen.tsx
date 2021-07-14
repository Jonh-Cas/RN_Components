import React from 'react'
import { View, Text, SectionList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparater from '../components/ItemSeparater';
import { styles } from '../Theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];



const customSectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex: 1, backgroundColor: 'white'  }} >
           {/* <HeaderTitle title='Section List' /> */}
            <SectionList 
                sections={ casas }
                keyExtractor={(item, index) => item + index}
                
                ListHeaderComponent={ () => <HeaderTitle title='Section List' /> }
                ListFooterComponent={ () => (
                <View style={{marginBottom: 70 }} >
                    <HeaderTitle title={ 'Total de casas: ' + casas.length  } /> 
                </View>
                )}
                
                stickySectionHeadersEnabled

                renderItem={ ({item}) => <Text>{item } </Text> }
                renderSectionHeader={ ({section}) => 
                <View style={{backgroundColor: 'white'}} >
                    <HeaderTitle title={ section.casa } />
                </View> }
                renderSectionFooter={({section}) =>(
                    <HeaderTitle title={'Total: ' + section.data.length } /> 
                )}
                
                // SectionSeparatorComponent={ () => <ItemSeparater /> }
                ItemSeparatorComponent={() => <ItemSeparater /> }
                showsVerticalScrollIndicator={false}

            />

        </View>
    )
}

export default customSectionListScreen;
