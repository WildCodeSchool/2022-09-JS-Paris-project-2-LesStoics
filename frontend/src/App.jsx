import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import rickAndMorty from "./assets/rickandmortysong.mp3";

import Game from "./pages/Game";
import Start from "./pages/Start";
import NotFound from "./pages/NotFound";
import Winner from "./pages/Winner";
import Credits from "./pages/Credits";
import { Characters } from "./context/Characters";
import { FightUtils } from "./context/FightUtils";

import "./App.css";

function App() {
  return (
    <Characters>
      <FightUtils>
        <ReactNotifications />
        <BrowserRouter>
          <AudioPlayer
            autoPlay
            loop
            src={rickAndMorty}
            style={{ display: "none" }}
          />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/game" element={<Game />} />
            <Route path="/winner" element={<Winner />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </BrowserRouter>
      </FightUtils>
    </Characters>
  );
}

export default App;
