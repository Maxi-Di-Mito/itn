import React, {PropTypes, Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

class GMap extends Component {



    constructor(props) {
        super(props);
    }

    onMapCreated()
    {

    }
    ;
    render() {

        const {lat,lng,width,height,zoom} = this.props;

        return (
            <Gmaps
                width={width}
                height={height}
                lat={lat}
                lng={lng}
                zoom={zoom}
                loadingMessage={'Be happy'}
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

GMap.propTypes =
{
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}

export default GMap;