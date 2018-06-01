import React, { Component } from 'react';
// Component needs to be imported separately because we need React as a whole
import { Text, View } from 'react-native';


class AlbumList extends Component {

componentWillMount() {
  // this function will be called whenever this component is being called/rendered
    console.log('hello Albumlist called');
}


  // Class based component is used to get data dynamically and to render it.
  // Class based component is used to get data dynamically and to render it.
    render() {   // render is used specifically for class based components
      return (
          <View>
            <Text>Album List</Text>
          </View>
      );
    }
}
export default AlbumList;
