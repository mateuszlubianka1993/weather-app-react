import React from 'react';
import PropTypes from 'prop-types';
import './WeatherDisplay.css';
import './WeatherDisplayRWD.css';
import ErrorMessage from './display/errorMessage';

const WeatherDisplay = ({ data }) => (
  data.error
    ? <ErrorMessage />
    : (
      <div className="display-container">
        <div className="display-box">
          <div className="display-header">
            <div>{data.cityName}</div>
            <div>{data.date}</div>
          </div>
          <div className="weather-detail-box temp-box">
            <div className="temp-detail temp-icon"><i className="fas fa-thermometer-half" /></div>
            <div className="temp-detail">{data.temp}&deg;C</div>
          </div>
          <div className="weather-detail-box other-detail-box">
            <div className="sun-rise-set">
              <div className="sun-rise-set-box"><i className="fas fa-sort-up" /><i className="fas fa-sun" /> {data.sunrise}</div>
              <div className="sun-rise-set-box"><i className="fas fa-sort-down" /><i className="fas fa-sun" /> {data.sunset}</div>
            </div>
            <div className="weater-detail-div-container">
              <div className="weather-detail-div"><i className="fab fa-cloudscale" /> {data.pressure} hPa</div>
              <div className="weather-detail-div"><i className="fas fa-tint" /> {data.humidity} %</div>
              <div className="weather-detail-div"><i className="fas fa-wind" /> {data.wind} m/s</div>
              <div className="weather-detail-div"><i className="fas fa-cloud" /> {data.clouds} %</div>
            </div>
          </div>
        </div>
      </div>)
);

WeatherDisplay.propTypes = {
  data: PropTypes.shape({
    cityName: PropTypes.string,
    date: PropTypes.string,
    temp: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    pressure: PropTypes.string,
    humidity: PropTypes.string,
    wind: PropTypes.string,
    clouds: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};

export default WeatherDisplay;
