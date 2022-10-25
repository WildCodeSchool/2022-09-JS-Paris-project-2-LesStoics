import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Winner from "./pages/Winner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
