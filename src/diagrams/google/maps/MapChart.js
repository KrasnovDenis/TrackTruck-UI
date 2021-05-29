import React, {Component} from 'react';
import {Circle, GoogleMap, InfoWindow, Polyline, withGoogleMap, withScriptjs} from "react-google-maps";


export class MapChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeCircleCoords: {
                lat: 0.0, lng: 0.0
            },
            selectedPlace: {},
            time: new Date().getTime(),
            isExtremeDriving: false
        };
    }


    onCloseInfoWindow = () => {
        this.setState({
            showingInfoWindow: false
        })
    }

    render() {

        const triangleCoords = [];

        for(let i in this.props.data.trace) {
            let coordinate = this.props.data.trace[i]
            triangleCoords.push({
                "time" : coordinate.time,
                "lat" : coordinate.lat,
                "lng" : coordinate.lng,
                "extremeDriving" : i === 4 ? true : coordinate.extremeDriving,
            })
        }

        return (
            <div
                style={{
                    position: "relative",
                    height: "calc(100vh - 20px)",
                    width: "90vh"
                }}>

                <GoogleMap
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}
                >

                    <Polyline
                        path={triangleCoords}
                        options={{
                            strokeColor: "#ff2527",
                            strokeOpacity: 0.75,
                            strokeWeight: 2,
                        }}
                    />
                    {triangleCoords.map((coordinate) =>
                        <div>
                            <Circle
                                onClick={(e) => this.setState({
                                    activeCircleCoords: e.latLng,
                                    showingInfoWindow: true,
                                    time: coordinate.time,
                                    isExtremeDriving: false
                                })
                                }
                                radius={5}
                                defaultCenter={{
                                    lat: coordinate.lat,
                                    lng: coordinate.lng
                                }}
                                options={{
                                    strokeColor: "#092faf",
                                    strokeOpacity: 0.75,
                                    fillColor: "#3981ee",
                                    fillOpacity: 0.3,
                                    strokeWeight: 2,
                                }}
                            />
                        </div>
                    )}

                    {triangleCoords.map((coordinate) =>
                        coordinate.extremeDriving &&
                        <div>
                            <Circle
                                onClick={(e) => this.setState({
                                    activeCircleCoords: e.latLng,
                                    showingInfoWindow: true,
                                    time: coordinate.time,
                                    isExtremeDriving: true
                                })
                                }
                                radius={5}
                                defaultCenter={{
                                    lat: coordinate.lat,
                                    lng: coordinate.lng
                                }}
                                options={{
                                    strokeColor: "#ff2527",
                                    strokeOpacity: 0.75,
                                    fillColor: "#ff0000",
                                    fillOpacity: 0.3,
                                    strokeWeight: 2,
                                }}
                            />
                        </div>
                    )}

                    {this.state.showingInfoWindow &&
                    <InfoWindow
                        position={this.state.activeCircleCoords}
                        onCloseClick={this.onCloseInfoWindow}
                    >
                        <div>
                            {this.state.isExtremeDriving
                                ? <h6>Опасное вождение</h6>
                                : <h6>Данные GPS</h6> }
                            <hr/>
                            <h6>Дата: {new Date(this.state.time).toLocaleDateString()}</h6>
                            <h6>Время: {new Date(this.state.time).toLocaleTimeString()}</h6>
                        </div>
                    </InfoWindow>
                    }
                </GoogleMap>
            </div>
        );
    }
}

export default withScriptjs(withGoogleMap(MapChart));
