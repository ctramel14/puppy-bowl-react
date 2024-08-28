const COHORT = "2407-FTB-ET-WEB-FT";
export const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export async function fetchAllPlayers() {

    try {
        const response = await fetch(URL);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function removePlayer (playerId) {
    function refreshPage() {
        window.location.reload(false);
    }
    try {
      const response = await fetch(`${URL}/${playerId}`, {
        method: "DELETE"
    }) 
        refreshPage();
} catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };
