import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import VendingLinks from './VendingLinks';

import './App.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
          <VendingLinks />
        </Route>
        <Route exact path="/soda">
            <Soda />
        </Route> 
        <Route exact path="/chips">
            <Chips />
        </Route>     
        <Route exact path="/candy">
            <Candy />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
