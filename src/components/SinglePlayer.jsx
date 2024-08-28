import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../API";
import { removePlayer } from "../API";
import { useNavigate } from "react-router-dom";

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayer() {
      try {
        const response = await fetch(`${URL}/${id}`);
        const result = await response.json();
        setPlayer(result.data.player);
      } catch (error) {
        console.error(error);
      }
    }
    getPlayer();
  }, []);

  return (
    <>
      <div className="single">
        <h4>{player.name}</h4>
        <h5>{player.breed}</h5>
        <img src={player.imageUrl} className="singleplayer" /> <br />
        <button
          className="delete"
          onClick={() =>
            removePlayer(player.id) ? navigate("/") : console.log(URL)
          }
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default SinglePlayer;
