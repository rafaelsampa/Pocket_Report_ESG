import {View, Text, StyleSheet, Pressable} from 'react-native';
import FormSignup from '../components/FormSignup';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';

export default props => (
    <View style={styles.container}>
        <Header back="LoginScreen">Sign up</Header>

        <FormSignup />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: colors.turquoise
    }
});