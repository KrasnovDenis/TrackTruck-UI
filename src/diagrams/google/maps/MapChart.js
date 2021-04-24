import React, {Component} from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker, Polyline} from "google-maps-react";
import mapMarker from '../../../style/images/icons/mapMarker.png'

export class MapChart extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        const google = window.google
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        const triangleCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757},
            {lat: 25.774, lng: -80.190}
        ];

        return (
            <div
                style={{
                    position: "relative",
                    height: "calc(100vh - 20px)",
                    width: "90vh"
                }}
            >
                <Map style={{}}
                     initialCenter={{
                         lat: 51.50369,
                         lng: 45.95136
                     }}
                     google={this.props.google} zoom={14}>

                    <Marker
                        onClick={this.onMarkerClick}
                        icon={{
                            url: mapMarker,
                            size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(25, 25)
                        }}
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>

                    <Polyline
                        path={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA2OKiMDYIitVNVOjhaE8fqT0xv1LEXZe4",
    v: "3.30"
})(MapChart);
