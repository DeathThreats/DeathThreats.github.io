import React from 'react';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resources" component={Resources} />
        <Route path="*" component={ErrorNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
