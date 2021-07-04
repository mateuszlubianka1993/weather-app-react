import React from 'react';
import './WeatherDisplay.css';
import './WeatherDisplayRWD.css';

class WeatherDisplay extends React.Component{
   
render() {
    if(this.props.data.error) {
        return (
            <div className="display-container" >
            <div className="display-box">
                <h3>Something went wrong, try again.</h3>
            </div>
        </div>
        );
    } else if (!this.props.data.error && this.props.data.cityName) {
        return (
            <div className="display-container" >
                <div className="display-box">
                    <div className="display-header">
                        <div>{this.props.data.cityName}</div>
                        <div>{this.props.data.date}</div>
                    </div>
                    <div className="weather-detail-box temp-box">
                        <div className="temp-detail temp-icon"><i className="fas fa-thermometer-half"></i></div>
                        <div className="temp-detail">{this.props.data.temp}&deg;C</div>
                    </div>
                    <div className="weather-detail-box other-detail-box">
                        <div className="sun-rise-set">
                            <div className="sun-rise-set-box"><i className="fas fa-sort-up"></i><i className="fas fa-sun"></i> {this.props.data.sunrise}</div>
                            <div className="sun-rise-set-box"><i className="fas fa-sort-down"></i><i className="fas fa-sun"></i> {this.props.data.sunset}</div>
                        </div>
                        <div className="weater-detail-div-container">
                            <div className="weather-detail-div"><i className="fab fa-cloudscale"></i> {this.props.data.pressure} hPa</div>
                            <div className="weather-detail-div"><i className="fas fa-tint"></i> {this.props.data.humidity} %</div>
                            <div className="weather-detail-div"><i className="fas fa-wind"></i> {this.props.data.wind} m/s</div>
                            <div className="weather-detail-div"><i className="fas fa-cloud"></i> {this.props.data.clouds} %</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (!this.props.data.error && !this.props.data.cityName) {
        return (
            <div className="display-container" >
            <div className="display-box">
                <h3>Welcome! Find your city and check the weather.</h3>
            </div>
        </div>
        );
    }
    
}
}

export default WeatherDisplay;
