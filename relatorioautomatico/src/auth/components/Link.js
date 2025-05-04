import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(props.to)}>
            <Text style={styles.link}>{props.children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    link: {
        marginTop: 16,
        color: colors.black,
        fontWeight: 'bold',
        color: colors.navyBlue,
    },
})