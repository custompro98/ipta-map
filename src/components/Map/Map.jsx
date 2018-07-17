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
    }
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
        className="Map__Marker"
        key={`${marker.lat}_${marker.lng}`}
      >
        <div className={this.classNameForMarker(marker)} />
        { marker.active && <span>{marker.programType}</span> }
      </Marker>
    ))
  );

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {this.markers()}
      </ReactMapGL>
    );
  };
};

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    programType: PropTypes.oneOf(['PT', 'PTA'])
  }))
};

export default Map;
