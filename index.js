import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
    // since we cannot have 2 components at the same time separately, we wrap it around a View tag
       <Header headerText={'Albums'} />
       <AlbumList />
     </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
