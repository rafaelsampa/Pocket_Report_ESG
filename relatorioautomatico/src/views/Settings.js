import React from "react";
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import { useAuth } from "../auth/context/AuthContext";
import { supabase } from "../lib/supabase";

export default props => {
    const navigation = useNavigation();

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
        fontSize: 16,
        marginLeft: 8,
        fontSize: 22,
        fontWeight: 'bold'
    }
})