import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>businesses</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
