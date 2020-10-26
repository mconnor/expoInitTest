import { useEffect, useState } from 'react';
import Link from 'next/link'
import * as eva from '@eva-design/eva';
import { default as theme } from '../../theme.json';

import {ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'


import { getAllBrandsWithSlug, getBrandAndMoreBrands } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Header from '../../components/head'
import MoreStories from '../../components/more-stories'
import { Post, Posts, Preview } from '../../interfaces';
import { default as mapping } from '../../mapping.json';

type BrandType = Post & Posts;


const Brand = ({ post, morePosts }: { post: Post, morePosts: Posts }) => {
    const [title, setTitle] = useState('xxxx')
    useEffect(() => {
      setTitle(post.title)
    }, [post])
    return (
        <ApplicationProvider
        {...eva}
        theme={{ ...eva.dark, ...theme }}
        // customMapping={mapping}
        >
        <Layout>
            <Text style={{ fontFamily: 'Lato' }}>{post.title}</Text>

            { morePosts && morePosts.length > 0 && <MoreStories allPosts={morePosts} />}
            <Link href="../">
                <Button>ui kitten HOME button </Button>
            </Link>
        
            <Link href="../">
                <Button>HOME</Button>
            </Link>
        </Layout>
        </ApplicationProvider>

    );
}



export default Brand;



export const getStaticProps = async ({ params, preview = null }: { params: Post, preview: Preview }) => {

    const data = await getBrandAndMoreBrands(params.slug, preview)
    const content: string = await markdownToHtml(data.post?.metadata?.content || '')

    return {
        props: {
            preview,
            post: {
                ...data.post,
                content,
            },
            morePosts: data.morePosts || [],
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = (await getAllBrandsWithSlug()) || []
    return {
        paths: slugs.map((post) => `/brands/${post.slug}`),
        fallback: true,
    }
} 