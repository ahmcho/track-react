import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity  } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Icon } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    
    return <>
        <NavigationEvents 
            onWillFocus={fetchTracks}
        />
        <Spacer>
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                                navigation.navigate('TrackDetail', { _id: item._id })
                            }
                        }>
                            <ListItem key={item.id} bottomDivider>
                                <Icon 
                                    name="chevron-right" 
                                    type="font-awesome"
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </Spacer>
    </>
}

TrackListScreen.navigationOptions = {
    title: "Tracks"
}

const styles = StyleSheet.create({

});

export default TrackListScreen;