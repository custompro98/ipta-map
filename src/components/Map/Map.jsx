import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    },
    mapStyle: "light"
  };

  classNameForMarker = (marker) => {
    const classes = ['Map__Marker_Div'];

    if (marker.active) {
      classes.push('Map__Marker_Div_Active')
    } else {
      classes.push(`Map__Marker_Div_${marker.programType}`);
    }

    return classes.join(' ');
  };

  markers = () => (
    this.props.markers.map(marker => (
      <Marker
        latitude={marker.lat}
        longitude={marker.lng}
        className={marker.active ? "Map__Marker_Active" : "Map__Marker"}
        key={`${marker.lat}_${marker.lng}`}
      >
        <div className={this.classNameForMarker(marker)} />
        { marker.active && this.props.children }
      </Marker>
    ))
  );

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle={`mapbox://styles/mapbox/${this.state.mapStyle}-v9`}
      >
        {this.markers()}
      </ReactMapGL>
    );
  };
};

Map.defaultProps = {
  children: null
};

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    programType: PropTypes.oneOf(['PT', 'PTA'])
  })),
  children: PropTypes.element
};

export default Map;
