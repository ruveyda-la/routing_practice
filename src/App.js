import Home from './components/Home';
import Begin from './components/Begin';
import Params from './components/Params';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Routes>
        <Route element={<Begin />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Params />} path="/:word" />
        <Route element={<Params />} path="/:word/:color/:backColor" />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
