import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  /* here instead of getting the whole prop, we are only getting what we want
   that is only the album property
   that's why we used {album}
   and futher below we can see that we more destructured it to only
   get 3 props from the album object
   */

  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;

  return (
      <Card>
        <CardSection>
          <View>
            <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
              /* Image tag is inbuilt from the react-native package
              it need source object where we need to provide uri
              2 curley braces outer one is because since source an object
              and inner one because we are assigning a dynamic JSX property */
            />

          </View>
          <View style={headerContentStyle}>
              <Text>{title}</Text>
              <Text>{artist}</Text>
          </View>
        </CardSection>
      </Card>
  );
};

const styles = {
    headerContentStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
