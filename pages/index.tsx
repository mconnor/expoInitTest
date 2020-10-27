// @generated: @expo/next-adapter@2.1.41

import { View, StyleSheet } from 'react-native'
import { Layout, Text,Card } from '@ui-kitten/components';

import { getAllBrandsForHome } from '../lib/api'
import HeroPost from '../components/hero-post'
import BrandTopNav from '../components/BrandInfluencer/BrandTopNav'
import { Posts } from '../interfaces';




const Index = ({ allPosts }: Posts) => {
    const heroPost = allPosts[0];
    return (

        <Layout style={styles.container}>

            {/* <HeroPost title={heroPost.title} slug={heroPost.slug}></HeroPost> */}
            <BrandTopNav flexNum={1} />
            {/* <View style={styles.avatar}>    
                <Text>middle</Text>
            </View> */}
            <Card style={styles.panel}>
                <Text>panel</Text>
            </Card>
            

         
        </Layout>

    );
}


const styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection: 'column', 
    },

    panel: {
        flex: 6,
       
    }
  });

export async function getStaticProps({ preview }) {
    const allPosts = (await getAllBrandsForHome(preview)) || []
    return {
        props: { allPosts },
    }
}

export default Index;
