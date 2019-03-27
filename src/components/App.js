import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import WeatherDisplay from './WeatherDisplay';

class App extends React.Component {
  state = {
    inputValue: '',
    cityName: '',
    temp: '',
    date: '',
    pressure: '',
    wind: '',
    humidity: '',
    clouds: '',
    sunrise: '',
    sunset: '',
    error: false
  };

  onInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=26df753807a025c66570efc01c24fb39&units=metric`;
    
    fetch(apiUrl)
      .then(response => {
        if(response.ok) {
          return response;
        }
        throw Error('Something went wrong, try again')
      })
      .then(response => response.json())
      .then(result => {
        const today = new Date().toLocaleString();
        this.setState({
          cityName: this.state.inputValue,
          temp: result.main.temp,
          pressure: result.main.pressure,
          wind: result.wind.speed,
          humidity: result.main.humidity,
          clouds: result.clouds.all,
          sunrise: new Date(result.sys.sunrise*1000).toLocaleTimeString(),
          sunset: new Date(result.sys.sunset*1000).toLocaleTimeString(),
          date: today,
          error: false
        });
      })
      .catch(err => {
        this.setState({error: true})
      })
      
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
        />
        <WeatherDisplay 
        data={this.state}
        />
      </div>
    );
  }
}

export default App;
