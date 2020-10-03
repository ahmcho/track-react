// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map'
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: {recording}, addLocation } = useContext(LocationContext);
    
    // Limits the use of callback functions, by watching arguments and making new callback functions only when these arguments change
    const callback = useCallback(location => {
        addLocation(location, recording);
    },[recording])
    
    const [err] = useLocation(isFocused || recording, callback);
    
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Spacer>
                <Map />
            </Spacer>
            { err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
            <Spacer>
                <Text h6 style={{ textAlign: 'center' }}>Press button above and start walking to record your location </Text>
            </Spacer>
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center'
    }
});

export default withNavigationFocus(TrackCreateScreen);