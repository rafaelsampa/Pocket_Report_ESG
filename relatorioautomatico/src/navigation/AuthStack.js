import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/views/LoginScreen';
import SignupScreen from '../auth/views/SignupScreen';

const Stack = createStackNavigator()

export default function MainLayout(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
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