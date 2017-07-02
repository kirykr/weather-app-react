var React = require('react');
import { Route, Switch } from 'react-router-dom';

import Weather from 'Weather';
import About  from 'About';

const Main = () => {
  return (
    <section>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ Weather } />
          <Route path="/about" component={ About } />
        </Switch>
      </div>
    </section>
  );
};

export default Main;
