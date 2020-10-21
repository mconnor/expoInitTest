import Link from 'next/link'
import { StyleSheet, View, Text } from 'react-native';



export default function Head() {
    return (
        <View>
            <Text style={styles.header}>StashBox</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: 60,
    }
});


