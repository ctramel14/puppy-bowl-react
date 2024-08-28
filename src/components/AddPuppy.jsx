import { URL } from "../API";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AddPuppy = ({ players, setPlayers }) => {
  const [newName, setNewName] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          breed: newBreed,
          imageUrl: newImageUrl,
        }),
      });
      const json = await result.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up!</h2>
        <label>
          Name:
          <input
            minLength="2"
            type="text"
            value={newName}
            required
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>{" "}
        <label>
          Breed:
          <input
            minLength="3"
            type="breed"
            value={newBreed}
            required
            onChange={(e) => setNewBreed(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            minLength="10"
            type="link"
            value={newImageUrl}
            required
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
        </label>
        <br />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddPuppy;
