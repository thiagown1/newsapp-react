import React, {Fragment} from 'react';
import Card from './Card';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const renderList = () => {
  const models = [
    { 
      imageURL: `https://images.uncyc.org/pt/thumb/9/99/Inhegas.jpg/250px-Inhegas.jpg`,
      date: '22/22/2222',
      description: '1 description'
    }, 
    { 
      imageURL:  'https://images.uncyc.org/pt/thumb/9/99/Inhegas.jpg/250px-Inhegas.jpg',
      date: '11/22/3333',
      description: '2 description'
    },
    { 
      imageURL:  'https://images.uncyc.org/pt/thumb/9/99/Inhegas.jpg/250px-Inhegas.jpg',
      date: '22/11/2222',
      description: '3 description'
    }]

  return (
    <SafeAreaView>
      <FlatList 
      data={models} 
      keyExtractor={(_, id) => id}
      renderItem={ (model) => (<Card model/>) }/>
    </SafeAreaView>
    
  );
}

const App = () => {
  return (
      renderList()
    );
  };
  
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
  export default App;
  