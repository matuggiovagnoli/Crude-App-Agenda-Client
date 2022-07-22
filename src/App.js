import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Bienvenida from './components/Bienvenida';
import Calendario from "./components/Calendario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida/>}/>
        <Route path="/Inicio" element={<Bienvenida/>}/>
        <Route path="/Inicio/Calendario" element={<Calendario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
