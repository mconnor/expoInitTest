
import { Post, Posts } from '../interfaces';
import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link'

const PostPreview = ({ title, slug }: { title:string, slug:string }) => {
  return (
    <View>

      <Text>
        <Link as={`/brands/${slug}`} href="/brands/[slug]">
          <a>{title}</a>
        </Link>
      </Text>


     
    </View>
  )
}

export default PostPreview;
