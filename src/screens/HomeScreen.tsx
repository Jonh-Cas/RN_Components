import React from 'react'
import { View, Text, FlatList } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { styles } from '../Theme/appTheme';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparater from '../components/ItemSeparater';




const HomeScreen = () => {


  return (
    <View style={{ flex: 1, ...styles.globalMargin }} >

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title='Opciones de menú' />}
        ItemSeparatorComponent={() => <ItemSeparater />}
      />
    </View>
  )
}

export default HomeScreen;
