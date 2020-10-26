
import Link from 'next/link'
import { StyleSheet, Text, View } from 'react-native';


const HeroPost = ({ title, slug }: { title: string, slug: string }) => {
    return (
        <View>

            <Text style={styles.text}>
                <Link as={`/brands/${slug}`} href="/brands/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </Text>

        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        fontFamily: 'Lato'
    },
});


export default HeroPost