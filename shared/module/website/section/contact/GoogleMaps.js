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
        this.handleResize();

    };

    componentWillMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        let {centerLat, centerLng, markerLat, markerLng, zoom } = this.props;
        let { width } = this.state;

        return (
            <Gmaps
                width={width}
                height="650px"
                loadingMessage={'Cargando mapa...'}
                lat={centerLat}
                lng={centerLng}
                zoom={zoom}
                params={{v: '3.exp', key:'AIzaSyA2b6TbC0ZrVfLWl1wRcMuAGcdMuO7YUT4'}}
                onMapCreated={this.onMapCreated}
            >
                <Marker
                    lat={markerLat}
                    lng={markerLng}
                    draggable={false}
                />
            </Gmaps>
        );
    }
}

GoogleMaps.propTypes = {
    centerLat: PropTypes.string.isRequired,
    centerLng: PropTypes.string.isRequired,
    markerLat: PropTypes.string.isRequired,
    markerLng: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
};

export default GoogleMaps;