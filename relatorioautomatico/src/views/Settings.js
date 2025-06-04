import React, { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import { useAuth } from "../auth/context/AuthContext";
import { supabase } from "../lib/supabase";

export default props => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [companyName, setCompanyName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCompanyName() {
            if (!user) return;
            setLoading(true);
            const { data, error } = await supabase
                .from('users')
                .select('CompanyName')
                .eq('id', user.id)
                .single();
            if (data && data.CompanyName) {
                setCompanyName(data.CompanyName);
            } else {
                setCompanyName(user.email || 'Empresa');
            }
            setLoading(false);
        }
        fetchCompanyName();
    }, [user]);

    async function handleLogOut() {
        const {error} = await supabase.auth.signOut();

        if(error){
            Alert.alert('Unable to log out', error.message);
        }

        Alert.alert('Logged out');
        navigation.navigate('LoginScreen');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.iconWrapper} onPress={() => navigation.navigate('Home')}>
                        <Icon
                            name="arrowleft"
                            type="antdesign"
                            color='#FFFFFF'
                        />
                    </Pressable>

                    <View style={styles.titleWrapper}>
                        <Text style={styles.headerTitle}>Settings</Text>
                    </View>

                    <Pressable style={styles.iconWrapper}>
                        <Icon
                            name="sun"
                            type="feather"
                            color='#FFFFFF'
                        />
                    </Pressable>
                </View>

                {/* Perfil do usuário logado */}
                <View style={styles.profileContainer}>
                    {loading ? (
                        <ActivityIndicator size="small" color={colors.turquoise} />
                    ) : (
                        <>
                            <Text style={styles.profileLabel}>Empresa:</Text>
                            <Text style={styles.profileValue}>{companyName}</Text>
                            <Text style={styles.profileLabel}>Email:</Text>
                            <Text style={styles.profileValue}>{user?.email}</Text>
                        </>
                    )}
                </View>

                <View style={styles.logoutContainer}>
                    <View>
                        <Pressable style={styles.logoutButton} onPress={handleLogOut}>
                            <Icon
                                name='logout'
                                type='material'
                                color='red'
                                size={35}
                            />

                            <Text style={styles.logoutText}>Logout</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.turquoise,
        paddingHorizontal: 10,
        height: 60,
        justifyContent: 'space-between',
    },
    iconWrapper: {
        width: 40,
        alignItems: 'center',
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileContainer: {
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 20,
        padding: 20,
        borderRadius: 14,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 4,
        elevation: 2,
    },
    profileLabel: {
        fontSize: 16,
        color: colors.turquoise,
        fontWeight: 'bold',
        marginTop: 8,
    },
    profileValue: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
    },
    logoutContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        alignItems: 'center',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    logoutText: {
        color: 'red',
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold'
    }
})