import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import Link from '../../components/Link';
import colors from '../../constants/colors';
import { supabase } from '../../lib/supabase';

export default props => {
    const navigation = useNavigation();
    const { refreshUser } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSingIn(){
        setLoading(true);

        // Validação simples de e-mail antes de tentar login
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            setLoading(false);
            return;
        }

        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(error){
            Alert.alert('Error', error.message);
            setLoading(false);
            return;
        }

        setLoading(false);
        await refreshUser(); // força atualização do contexto
        // Navegação automática será feita pelo fluxo do contexto (App.js)
    }

    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder='Enter your Email'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
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
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Pressable style={styles.button} onPress={handleSingIn}>
                <Text style={styles.buttonText}>
                {loading ? 'Loading...' : 'Sign In'}
                </Text>
            </Pressable>

            <Link to="SignupScreen">Don't have an account? Sign up</Link>

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
        borderColor: colors.turquoise,
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