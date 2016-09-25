import React, {PropTypes, Component} from 'react';
import { Gmaps, Marker } from 'react-gmaps';

class GoogleMaps extends Component {

    state = {
        width: document.body.clientWidth
    };

    handleResize = () => {
        this.setState({
            width: document.body.clientWidth
        })
    };

    onMapCreated = (map) => {
        map.setOptions({
            center: null,
            scrollwheel: false
        });
    };

    componentWillMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        let { lat, lng, zoom } = this.props;
        let { width } = this.state;

        return (
            <Gmaps
                width={width}
                height="650px"
                lat={lat}
                lng={lng}
                zoom={zoom}
                params={{v: '3.exp'}}
                onMapCreated={this.onMapCreated}
            >
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