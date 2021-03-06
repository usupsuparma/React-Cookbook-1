// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import About from './components/About';
import Coins from './components/Coins';
import Contact from './components/Contact';
import Home from './components/Home';
import Notes from './components/Notes';
import Todo from './components/Todo';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/coins" component={Coins} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/notes" component={Notes} exact />
      <Route path="/notes/:noteId" component={Notes} exact />
      <Route path="/todo" component={Todo} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
