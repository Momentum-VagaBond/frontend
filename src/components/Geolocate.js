import React, { useState } from 'react';
import MapGL, {NavigationControl, Feature, Layer} from 'react-map-gl';

// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const token = "pk.eyJ1IjoiZW1pbHlmbG8iLCJhIjoiY2wyZGRsNG9hMHk0aDNicGR1bjhxZGZmdyJ9.OwfzAfjxswxUss6pTmNVUQ";
const Map = 'pk.eyJ1IjoiZW1pbHlmbG8iLCJhIjoiY2wyZGRsNG9hMHk0aDNicGR1bjhxZGZmdyJ9.OwfzAfjxswxUss6pTmNVUQ';

export const Geolocate = () => {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
}

return (
  <div className="Geolocate">
    <button onClick={getLocation}>Get Location</button>
    <h1>Coordinates</h1>
    <p>{status}</p>
    {lat && <p>Latitude: {lat}</p>}
    {lng && <p>Longitude: {lng}</p>}
  <div>
    {/* <MapGL
    mapboxApiAccessToken={token}
    initialViewState={{
      longitude: 35.9165683,
      latitude: -78.9220001,
      zoom: 3.5
      
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />; */}
  </div>

  {/* <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Coodinates: 101.8224, 2.955139</h2>
      <a href="https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/">
        Popup on click
      </a>
      <a href="https://www.mapbox.com/mapbox-gl-js/example/set-popup/">
        {" "}
        / and here
      </a>
      <MapGL
        style="mapbox://styles/mapbox/streets-v8"
        zoom={[10]}
        center={[101.8224, 2.955139]}
        containerStyle={{
          height: "60vh",
          width: "100vw"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[101.8224, 2.955139]} />
        </Layer>
      </MapGL>
    </div> */}
  </div>
);
}

// export default Geolocate;