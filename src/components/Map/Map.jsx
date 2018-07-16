import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import './styles.css';

class Map extends Component {
  state = {
    viewport: {
      width: 600,
      height: 575,
      latitude: 39.7817,
      longitude: -89.6501,
      zoom: 5
    }
  };

  markers = () => (
    this.props.markers.map(marker => (
      <Marker
        latitude={marker.lat}
        longitude={marker.lng}
        className="Map__Marker"
        key={`${marker.lat}_${marker.lng}`}
      >
        <div className={`Map__Marker_Div Map__Marker_Div_${marker.programType}`} />
      </Marker>
    ))
  );

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiY3VzdG9tcHJvOTgiLCJhIjoiY2pqbm0xMDZ0N2RseDNwcDF0anBwdjczcCJ9.Xt5-HsttWY_AgpPfwObbgw"
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {this.markers()}
      </ReactMapGL>
    );
  };
}

export default Map;
