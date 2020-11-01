import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import Motercycles from './Pages/Motercycles';
import Car from './Pages/Car'
import Houses from './Pages/Houses';
import Tv_Products from './Pages/Tv-Products';
import Tablets from './Pages/Tablets';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/Motercycles">
            <Header />
            <Motercycles />
            <Footer />
          </Route>

          <Route path="/Car">
            <Header />
            <Car />
            <Footer />
          </Route>
          <Route path="/House">
            <Header />
            <Houses />
            <Footer />
          </Route>
          <Route path="/Tv_product">
            <Header />
            <Tv_Products />
            <Footer />
          </Route>
          {/* <Route path="/Tablets">
            <Header />
            <Tablets />
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
