import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Team } from './components/Team';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="container">

      <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              <Route exact path="/projects">
                <Projects />
                </Route>
            </Switch>
            </div>
    </Router>
    </>
  );
}

export default App;
