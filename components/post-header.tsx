import { View, Image, StyleSheet} from 'react-native';
import React from 'react';
import { LogoType } from '../interfaces'

import { Avatar, Button, Divider, Text } from '@ui-kitten/components';
const PostHeader = ({ logo }:{ logo:LogoType  }) => {
    return (
        <>
            <View style={styles.container}>
                <Avatar
                    style={styles.avatar}
                    shape='square'
                    source={logo.imgix_url}
                >
                </Avatar>
            
            </View >
            <Divider/>
         </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        marginVertical: 4,

    },
    img: {
      width: 340,
      height: 340,
    },
    avatar: {
        margin: 8,
        justifyContent: 'center'
    }
  });


export default PostHeader;