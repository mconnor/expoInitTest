// @generated: @expo/next-adapter@2.1.41


import {  Layout, Text } from '@ui-kitten/components';

import { getAllBrandsForHome } from '../lib/api'
import HeroPost from '../components/hero-post'
import { Posts } from '../interfaces';


const Index = ({ allPosts }: Posts) => {
    const heroPost = allPosts[0];
    return (
       
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
                <HeroPost title={heroPost.title} slug={heroPost.slug}></HeroPost>
            </Layout>
       
    );
}




export async function getStaticProps({ preview }) {
    const allPosts = (await getAllBrandsForHome(preview)) || []
    return {
        props: { allPosts },
    }
}

export default Index;
