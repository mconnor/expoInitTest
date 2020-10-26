
import { Card, Layout, Text, Button, List, ListItem } from '@ui-kitten/components';
import { View } from 'react-native'
 
import { StyleSheet } from 'react-native';
import PostPreview from './post-preview';
import { Post, Posts } from '../interfaces';





const MoreStories = ({ allPosts }: { allPosts: Posts }) => {

    return (
        <Card style={styles.card}>
            <Text style={styles.headline}>
                More Brands
            </Text>
            <View>
                {allPosts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        slug={post.slug}

                    />
                    
                ))}
            </View>
        </Card>
    )
}


const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    headline: {
        fontSize: 36,
        fontFamily: 'Lato'
    }
});


export default MoreStories