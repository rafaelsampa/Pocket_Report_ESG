import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Link from './Link';
import colors from '../../constants/colors';

export default props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSignup() {
        console.log({
            name,
            email,
            password
        })
    }

    return (
        <View style={styles.form}>
            <ScrollView style={{flex: 1}}>
                <View>
                    <Text style={styles.label}>Full name</Text>
                    <TextInput
                        placeholder='Enter your name'
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Enter your Email'
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <Pressable style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

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