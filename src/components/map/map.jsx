import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {propTypeOffer} from "../../check-prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
  }

  componentDidMount() {
    // const {offers} = this.props;

    const zoom = 12;
    const city = [52.38333, 4.9];
    // const icon = leaflet.icon({
    //   iconUrl: `img/pin.svg`,
    //   iconSize: [30, 30]
    // });

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    // offers.forEach((offer) => {
    //   leaflet.marker(offer.coordinates, {icon}).addTo(this.map);
    // });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div id="map"></div>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
};

export default Map;
