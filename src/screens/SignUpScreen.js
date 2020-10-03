import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents  
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
           <NavLink 
               routeName="SignIn"
               text="Already have an account? Sign in instead."
           />
        </View>
    )
}

SignUpScreen.navigationOptions =  {
    headerShown: false
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        marginBottom: 150
    }
});

export default SignUpScreen;