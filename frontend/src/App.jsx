import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Start from "./pages/Start";
import NotFound from "./pages/NotFound";
import Winner from "./pages/Winner";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
