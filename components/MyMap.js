import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MyMap = props => {
    const userLocationMarker = null;

    // if (props.userLocation) {
    //     userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
    // }
    // const usersMarkers = props.usersPlaces.map(userPlace => (
    //     <MapView.Marker
    //         coordinate={{ latitude: 38.581573, longitude: -121.4944 }}
    //         key={userPlace.id}
    //     />
    // ));
    return (
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }}
                // region={props.userLocation}
                style={styles.map}
            >
                {userLocationMarker}
                <MapView.Marker
                    coordinate={{ latitude: 38.581573, longitude: -121.4944 }}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 400,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default MyMap;
