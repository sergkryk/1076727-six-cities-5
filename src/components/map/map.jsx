import React, {PureComponent} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.zoom = 12;
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, this.zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet.marker(offerCords, {icon}).addTo(map);
  }

  componentWillUnmount() {

  }

  render() {
    return <div id="map"></div>;
  }

  componentDidUpdate() {

  }
}

export default Map;
