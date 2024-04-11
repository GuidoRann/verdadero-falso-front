import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CrearPregunta from "./components/NewQuestion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/crearPregunta" element={<CrearPregunta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
