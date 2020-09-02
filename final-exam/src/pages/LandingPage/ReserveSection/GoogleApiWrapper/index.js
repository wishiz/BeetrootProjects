import React from 'react';

import types from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import {
  GOOGLE_MAPS_API_KEY,
  dniproLatLong,
} from '../../../../constants/reserveSectionData';

import './styles.scss';

export const GoogleMapContainer = ({ google }) => (
  <Map
    className="google-map"
    google={google}
    zoom={15}
    initialCenter={dniproLatLong}
  />
);

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
  language: 'en',
})(GoogleMapContainer);

GoogleMapContainer.propTypes = {
  google: types.shape,
};
