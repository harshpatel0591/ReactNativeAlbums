import React, { Component } from 'react';
// Component needs to be imported separately because we need React as a whole
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

// we have a class level property called state, which we can access throught the class.
state = { albums: [] };

componentWillMount() {
  // this function will be called whenever this component is being called/rendered
  // here axios is used to make http(s) calls to get data
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    // here above we are setting the new state for the state property
}

returnAlbums() {
  return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      // key is used by react to uniquely identify each element
    );
}


  // Class based component is used to get data dynamically and to render it.
  // Class based component is used to get data dynamically and to render it.
    render() {   // render is used specifically for class based components
      return (
          <View>
            {this.returnAlbums()}
          </View>
      );
    }
}
export default AlbumList;
