import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Artikkelside from '../pages/Artikkelside';
import Contact from '../pages/Contact';
import Hjeplesenter from '../pages/Hjelpesenter';
import Home from '../pages/Home';

/**
 * Her har jeg laget en "rute" til "/" og bruker Home komponenten i pages mappen
 */

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artikkelside">
          <Artikkelside />
        </Route>
        <Route exact path="/kontakt">
          <Contact />
        </Route>
        <Route exact path="/hjelpesenter">
          <Hjeplesenter />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
