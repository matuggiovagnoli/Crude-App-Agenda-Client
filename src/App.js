import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Bienvenida from './components/Bienvenida';
import Inicio from "./components/Inicio"
import Calendario from "./components/Calendario";
import Contactos from './components/Contactos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Inicio/Calendario" element={<Calendario/>}/>
        <Route path="/Inicio/Contactos" element={<Contactos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
