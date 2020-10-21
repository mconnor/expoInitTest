// @generated: @expo/next-adapter@2.1.41
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getAllBrandsForHome } from '../lib/api'
import HeroPost from '../components/hero-post'
import { Posts } from '../interfaces';

const Index = ({ allPosts }: Posts) => {
    const heroPost = allPosts[0];
    return (
        <View style={styles.container}>
            <HeroPost
                title={heroPost.title}
                slug={heroPost.slug}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
});



export async function getStaticProps({ preview }) {
    const allPosts = (await getAllBrandsForHome(preview)) || []
    return {
        props: { allPosts },
    }
}


export default Index;
