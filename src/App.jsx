import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Nav from "./components/NavBar";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<AllPlayers players={players} setPlayers={setPlayers} />}
        />
        <Route
          path="/players/:id/:name"
          element={<SinglePlayer setPlayers={setPlayers} />}
        />
      </Routes>
    </>
  );
}

export default App;
