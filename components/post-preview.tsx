
import { Post, Posts } from '../interfaces';
import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link'

const PostPreview = ({ title, slug }: { title:string, slug:string }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.copy}>
        {/* <Link as={`/brands/${slug}`} href="/brands/[slug]">
          <a>{title}</a>
        </Link> */}
        {title}
      </Text>


     
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    copy: {
       color: 'white',
       fontSize: 16
    },
   

});
export default PostPreview;
