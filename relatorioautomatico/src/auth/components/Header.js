import {View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons';

export default props => (
    <View style={styles.header}>
        <Text style={styles.logoText}>ESG</Text>

        <Text style={styles.slogan}>{props.children}</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8,
    },

    slogan: {
        fontSize: 25,
        color: colors.white,
        marginBottom: 34,
        fontWeight: 'bold',
    },

    backButton: {
        alignSelf: 'flex-start',
        position: '',
    }
})