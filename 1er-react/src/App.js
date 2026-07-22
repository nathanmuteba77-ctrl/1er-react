
import './App.css';
import About from './component/About';
import Analyse from './component/Analyse';
import Heading from './component/Heading';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Team from './component/Team';



function App() {
  return (
    <div className="App">
<Navbar />
<Hero />
<About />
<Heading />
<Analyse />
<Team />
    </div>
  );
}

export default App;
