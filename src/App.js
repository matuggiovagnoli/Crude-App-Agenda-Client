import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Bienvenida from './components/Bienvenida';
import Inicio from "./components/Inicio"
import Calendario from "./components/Calendario";
import Contactos from './components/Contactos';
import Posts from './components/Posts'
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida/>}/>
        <Route path="/Inicio/:username" element={<Inicio/>}/>
        <Route path="/Inicio/:username/Posts" element={<Posts/>}/>
        <Route path="/Inicio/:username/Contactos" element={<Contactos/>}/>
        <Route path="/Inicio/:username/Calendario" element={<Calendario/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
