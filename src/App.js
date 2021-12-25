import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import './app.css'
import { Timeline } from './components/Timeline';
function App() {
  return (
    <div className="appClass">
    <Router>
      <Navbar/>
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
              <Route exact path="/contact">
                <ContactUs />
                </Route>
              <Route exact path="/Events">
                <Timeline />
               </Route>  
            </Switch>
    </Router>
    </div>
  );
}

export default App;
