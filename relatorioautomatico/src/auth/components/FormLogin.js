import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Link from './Link';
import colors from '../../constants/colors';

export default props => (
  <View style={styles.form}>
    <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
            placeholder='Enter your Email'
            style={styles.input}
        />
    </View>

    <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry
        />
    </View>

    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Enter</Text>
    </Pressable>

    <Link to="SignupScreen">Don't have an account? Sign up</Link>
    
  </View>
)

const styles = StyleSheet.create({
    form: {
        flex: 2,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 14,
        paddingRight: 14,
    },

    label: {
        color: colors.black,
        marginBottom: 4,
    },

    input: {
        borderWidth: 1,
        borderColor: colors.navyBlue,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14,
    },

    button: {
        backgroundColor: colors.forestGreen,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
})