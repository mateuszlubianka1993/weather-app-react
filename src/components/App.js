import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
