import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
const Map = () => {
  const mapStyle = {
    height: '60vh',
    width: '100%'
  }
  const defaultCenter = {
    lat: 15.385,
    lng: -87.815
  }
  return (
   <LoadScript googleMapsApiKey = 'AIzaSyCewf_3smDheiK1bAsIyNKmIfxnWzeYo7w '>
     <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={10}
        center ={defaultCenter}>
          <Marker position ={defaultCenter}/>
        </GoogleMap>
   </LoadScript>
  )
}

export default Map;
