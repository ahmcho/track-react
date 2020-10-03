import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Spacer>
                <Text style={{fontSize:48}}>Account settings</Text>
            </Spacer>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'My Account',
    tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
}

const styles = StyleSheet.create({

});

export default AccountScreen;