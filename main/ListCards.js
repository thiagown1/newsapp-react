import React, {Fragment} from 'react';
import {
    SafeAreaView,
    FlatList,
} from 'react-native';
import Card from './Card';
import useArticles from './hooks'

const ListCards = () => {
    const articles = useArticles('bitcoin');

    return (
        <SafeAreaView>
            <FlatList 
            data={articles} 
            keyExtractor={(_, id) => id}
            renderItem={ (data) => (<Card model={data.item}/>) }/>
        </SafeAreaView>
        
    );
}

export default ListCards;