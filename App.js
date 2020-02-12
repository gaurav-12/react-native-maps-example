import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
 
export default class App extends React.Component {
  onRegionChange(region) {
    console.log(region);
  }
  render() {
    return (
      <View style={styles.map}>
          <MapView
            onRegionChangeComplete={this.onRegionChange}
            showsUserLocation={true}

            // Replace PROVIDER_GOOGLE with PROVIDER_DEFAULT for Apple Maps on iOS
            provider={PROVIDER_GOOGLE}
            
            style={styles.mapReg}
            initialRegion={{
              latitude: 20.5937,
              longitude: 78.9629,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            ref={c => this.mapView = c}>
                <Marker coordinate={{
                  latitude: 20.5937,
                  longitude: 78.9629,
                }}/>
          </MapView>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  map: {
    position: "absolute",
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },

  mapReg: {
    ...StyleSheet.absoluteFillObject,
  },
});