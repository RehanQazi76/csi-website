import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Events } from './components/Events';
import Footer from './components/Footer';
import './app.css'
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
              <Route exact path="/timeline">
                <Timeline />
                </Route>
              <Route exact path="/projects">
                <Projects />
                </Route>
              <Route exact path="/contact">
                <ContactUs />
                </Route>
            </Switch>
            
    </Router>
    <Footer />
    </div>
  );
}

export default App;
