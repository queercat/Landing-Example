import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
