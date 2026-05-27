import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=" + import.meta.env.VITE_API_KEY)
      .then(async (response) => {
        const data = await response.json();
        setGames(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return {games, error}
}

export default useGames