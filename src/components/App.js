import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';

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
    sunset: ''
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
        throw Error('Error')
      })
      .then(response => response.json())
      .then(result => {
        this.setState({
          cityName: this.state.inputValue,
          temp: result.main.temp,
          pressure: result.main.pressure,
          wind: result.wind.speed,
          humidity: result.main.humidity,
          clouds: result.clouds.all,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset
        });
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default App;
