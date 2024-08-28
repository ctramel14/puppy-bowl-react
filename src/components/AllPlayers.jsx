import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import AddPuppy from "./AddPuppy";
import { removePlayer } from "../API";

const AllPlayers = ({ players, setPlayers }) => {
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

  return (
    <>
      <AddPuppy players={players} setPlayers={setPlayers} />
      <div className="search">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <div className="allplayers"></div>
      {playersToDisplay.map((player) => {
        return (
          <h3 key={player.id}>
            <img
              src={player.imageUrl}
              onClick={() => navigate(`/players/${player.id}/${player.name}`)}
            />{" "}
            <br />
            {player.name} <br />
            <button
              onClick={() => navigate(`/players/${player.id}/${player.name}`)}
            >
              More Details
            </button>
            <button onClick={() => removePlayer(player.id)}>Delete</button>
            <br />
          </h3>
        );
      })}
    </>
  );
};

export default AllPlayers;
