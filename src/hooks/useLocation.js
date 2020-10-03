import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect( () => {
        let subscriber;
        const startWatching = async () => {
            const response =  await requestPermissionsAsync();
            if(response.status === 'denied'){
                setErr('Permission denied')
            }
            subscriber =  await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                callback
            );
        }


        if(shouldTrack){
            startWatching();
        } else{
            if(subscriber){
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
            subscriber = null;
        };
    }, [shouldTrack, callback]);

    return [err];
};