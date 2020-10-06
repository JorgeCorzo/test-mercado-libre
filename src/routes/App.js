import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../views/Home';
import Search from '../views/Search';
import Description from '../views/Description';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/items"><Search /></Route>
      <Route exact path="/items/:id"><Description /></Route>
    </BrowserRouter>
  );
}

export default App;
