import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';

class App extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
