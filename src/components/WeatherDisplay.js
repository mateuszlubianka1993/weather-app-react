import React from 'react';

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
                    <   div>{this.props.data.date}</div>
                    </div>
                    <div>Temp {this.props.data.temp}&deg;C</div>
                    <div>Ciś {this.props.data.pressure} hPa</div>
                    <div>Wilg {this.props.data.humidity} %</div>
                    <div>Wiatr {this.props.data.wind} m/s</div>
                    <div>Zach {this.props.data.clouds} %</div>
                    <div>Wsch {this.props.data.sunrise}</div>
                    <div>zach {this.props.data.sunset}</div>
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