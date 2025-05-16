import {View, Text, StyleSheet} from 'react-native';
import FormLogin from '../components/FormLogin';
import Header from '../components/Header';
import colors from '../../constants/colors';

export default props => (
    <View style={styles.container}>
        <Header>Relatório Automático</Header>

        <FormLogin />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: colors.turquoise
    }
});