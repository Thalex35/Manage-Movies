import AnimeCard from "./Components/animeCard";
import AnimeForm from "./Components/animeForm";
import { animesData } from "./Data/animesData";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [animes, setAnime] = useState(animesData);

  const handleAddAnime = (newAnime) => {
    setAnime((prev) => [...prev, newAnime]);
  };
  return (
    <div>
      <AnimeCard animes={animes} />
      <AnimeForm genres={animes} onAddAnime={handleAddAnime} />
    </div>
  );
}
