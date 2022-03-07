import './App.css';
import Home from './components/Home/Home.jsx';
import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
