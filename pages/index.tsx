// @generated: @expo/next-adapter@2.1.41

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

import { default as theme } from '../custom-theme.json';

import { getAllBrandsForHome } from '../lib/api'
import HeroPost from '../components/hero-post'
import { Posts } from '../interfaces';

const Index = ({ allPosts }: Posts) => {
    const heroPost = allPosts[0];
    return (
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme}}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <HeroPost title={heroPost.title} slug={heroPost.slug}></HeroPost>
                <Button>HOME</Button>
            </Layout>
        </ApplicationProvider>
    );
}




export async function getStaticProps({ preview }) {
    const allPosts = (await getAllBrandsForHome(preview)) || []
    return {
        props: { allPosts },
    }
}

export default Index;
