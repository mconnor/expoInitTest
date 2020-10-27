import { View, StyleSheet } from 'react-native'
import { Layout, Text, Avatar, Card, CardProps } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';




const BrandTopNav = ({ flexNum }: { flexNum: number }) => {
    return (
        <View
            style={{
                flex: flexNum,

            }}>
            <View style={[styles.container, styles.myBorder]}>
                <Icon
                    name='arrow-back-outline'
                    width={48} height={48}
                    fill='white'
                />
                <View style={{
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={styles.logoText}>STASH BOX</Text>
                </View>
                <Icon
                    name='settings-2-outline'
                    width={48} height={48}
                    fill='white'
                />
            </View>


            <View style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    backgroundColor: 'blue',

                    borderColor: 'white',
                    borderWidth: 2,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',



                }}><Text style={styles.logoText}>influencer</Text></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyItems: 'center',




    },
    icon: {
        color: 'white'
    },
    logoText: {
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'red',
        fontSize: 16,
        fontFamily: 'Lato'
    },
    myBorder: {
        borderColor: 'white',
        borderWidth: 2
    }

});

export default BrandTopNav;