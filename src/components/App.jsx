import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import WeatherDisplay from './WeatherDisplay';
import { fetchData } from '../services/weatherAPI';
import WelcomeMessage from './display/welcomeMessage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      error: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    const { inputValue } = this.state;
    e.preventDefault();
    fetchData(inputValue)
      .then((result) => {
        const today = new Date().toLocaleString();
        this.setState({
          cityName: inputValue,
          temp: Math.round(result.main.temp),
          pressure: result.main.pressure,
          wind: result.wind.speed,
          humidity: result.main.humidity,
          clouds: result.clouds.all,
          sunrise: new Date(result.sys.sunrise*1000).toLocaleTimeString(),
          sunset: new Date(result.sys.sunset*1000).toLocaleTimeString(),
          date: today,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { cityName } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          onInputChange={e => this.setState({ inputValue: e.target.value })}
          onFormSubmit={this.onFormSubmit}
        />
        {cityName
          ? <WeatherDisplay data={this.state} />
          : <WelcomeMessage />}
      </div>
    );
  }
}

export default App;
