import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
        {
          props.children
          /*
            props.children is used to lift and shift the whole JSX code where this component is used
            here, AlbumDetail uses this Card,
            so whatever JSX element code is written inside the card element
            in the AlbumDetail will be passed and rendered inside this props.children
          */
        }
      </View>
  );
};

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
  }
};


export default Card;
