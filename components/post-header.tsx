import { View, Image,StyleSheet, ImageSourcePropType} from 'react-native';
import React from 'react';
import { LogoType } from '../interfaces'


const PostHeader = ({ logo }:{ logo:LogoType  }) => {
    return (
        <View style={styles.container}>
            <Image
                source={logo.imgix_url}
                style={styles.img}
            >
            </Image>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: 'black',
      width: 350,
      height: 350,
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',

    },
    img: {
      width: 340,
      height: 340,
    },
  });


export default PostHeader;