import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigasjon';
import DefaultLayout from '../layouts/DefaultLayout';
import Artikkelside from '../pages/Artikkelside';
import Contact from '../pages/Contact';
import Hjeplesenter from '../pages/Hjelpesenter';
import Home from '../pages/Home';
import Omoss from '../pages/Omoss';
import Galleri from '../pages/Galleri';
import PageNotFound from '../pages/PageNotFound';
import Artikkel from '../pages/Artikkelen';

/**
 * Her har jeg laget en "rute" til "/" og bruker Home komponenten i pages mappen
 */

const Routes = () => (
  <Router>
    <Navigation />
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
        <Route exact path="/om-oss">
          <Omoss />
        </Route>
        <Route exact path="/galleri">
          <Galleri />
        </Route>
        {/* <Route path="/artikkel/:id">
          <Artikkel />
</Route> */}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
