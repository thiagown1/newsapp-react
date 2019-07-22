import React, {Fragment} from 'react';
import Card from './Card';

import useArticles from './hooks'

import {
  SafeAreaView,
  FlatList,
} from 'react-native';

const renderList = () => {
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

const App = () => {
  return (
      renderList()
    );
}
  
export default App;
  