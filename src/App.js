import logo from './logo.svg';
import './App.css';
import Start from  "./components/Start";
import Game from './components/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
