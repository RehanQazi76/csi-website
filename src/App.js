import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import Footer from './components/Footer';
import './app.css'
import NavBar from './components/Navbar/NavBar.jsx';
function App() {
  return (
    <div className="appClass">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />  
        </Route>
        <Route path="team">
          <Route index element={<Team />}/>
        </Route>
        <Route path="timeline">
          <Route index element={<Timeline />}/>
        </Route>
        <Route path="projects">
          <Route index element={<Projects />}/>
        </Route>
        <Route path="contact">
          <Route index element={<ContactUs />}/>
        </Route>
      </Routes>
        <Footer />
    </BrowserRouter>
    </div>

  );
}

export default App;
