import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Landing from "./pages/Landing";
import CrearPregunta from "./components/NuevasPreguntas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
          <Route path="/crearPregunta" element={<CrearPregunta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
