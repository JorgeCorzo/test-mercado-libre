import React from 'react';
import SearchingBar from '../components/SearchingBar';

function Home() {

  function getData(value) {
    window.location.href = '/items?search=' + value
  }

  return (
    <div className="App">
      <div className="app-header">
        <SearchingBar event={getData} />
      </div>
      <div className="app-body">
      </div>
    </div>
  );
}

export default Home;
