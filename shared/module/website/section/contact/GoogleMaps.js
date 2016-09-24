import React, {PropTypes, Component} from 'react';
import { Gmaps, Marker } from 'react-gmaps';

class GoogleMaps extends Component {
    render() {
        let { lat, lng, width, height, zoom } = this.props;

        return (
            <Gmaps
                width={width}
                height={height}
                lat={lat}
                lng={lng}
                zoom={zoom}
                params={{v: '3.exp'}}>
                <Marker
                    lat={lat}
                    lng={lng}
                    draggable={false}
                />
            </Gmaps>
        );
    }
}

GoogleMaps.propTypes = {
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
};

export default GoogleMaps;