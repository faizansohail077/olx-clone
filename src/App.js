import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import Car from './components/Car';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          
          {/* <Route path="/car">
            <Header />
            <Car />
            
            <Footer />
          </Route> */}
          <Route path='/'>
            <Header />
            <Banner />
            <Home />
            <HomeBanner />
            <Footer />
          </Route>





        </Switch>

      </Router>



    </div>
  );
}

export default App;
