import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Software from './components/Software';
import Contact from './components/Contact';
import Home from './components/Home';
import Resources from './components/resources';
import ScrollToTop from './ScrollToTop';
import ErrorNotFound from './components/ErrorNotFound';
import FairUse from './components/FairUse';
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    document.addEventListener('loaded', loadings())
  }, [])

  function loadings() {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
   <div>
     {
        loading?
        <div className="loading">
          <HashLoader color={"#13176E"} loading={HashLoader} size={100} />
        </div>
        :
        <Router>
          <ScrollToTop />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/software" component={Software} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/fair-use-notice" component={FairUse} />
            <Route path="*" component={ErrorNotFound} />
          </Switch>
          <Footer />
        </Router>
     }
   </div>
  );
}

export default App;