import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse } from '@material-ui/core';
import Marker from './Marker';



const CarSalesMap = (props) => {
  const { checked} = props
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

    const [center, setCenter] = useState({lat: -37.820782, lng: 144.989487});
    const [zoom, setZoom] = useState(11);
  return (
    // <Collapse in={checked}  timeout="1000">
        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA4sWZjJoW4pjVN-08KQuBCD-RId2FNoDI' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            lat={-37.820782}
            lng={144.989487}
            name="Second Hand CarSales"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    // </Collapse>
    );
}

export default CarSalesMap;
