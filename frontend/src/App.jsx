/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Game from "./pages/Game";
import Start from "./pages/Start";
import NotFound from "./pages/NotFound";
import Winner from "./pages/Winner";
import { Characters } from "./context/Characters";
import { FightUtils } from "./context/FightUtils";

import "./App.css";

function App() {
  return (
    <Characters>
      <FightUtils>
        <ReactNotifications />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/game" element={<Game />} />
            <Route path="/winner" element={<Winner />} />
          </Routes>
        </BrowserRouter>
      </FightUtils>
    </Characters>
  );
}

export default App;
