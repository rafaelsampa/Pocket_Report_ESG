import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import SignupScreen from '../auth/SignupScreen';

const Stack = createStackNavigator()

export default function MainLayout(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                options={{
                    headerShown: false,
                }}>
                
                {props => (
                    <LoginScreen />
                )}
            </Stack.Screen>

            <Stack.Screen
                name="SignupScreen"
                options={{
                    headerShown: false,
                }}>
                
                {props => (
                    <SignupScreen />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}