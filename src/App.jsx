import { animesData } from "./Data/animesData";
import { useState } from "react";
import AnimeCard from "./Components/animeCard";
import AnimeForm from "./Components/animeForm";
import Banner from "./Components/Banner";
import "./App.css";

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedStatut, setSelectedStatut] = useState("");

  const filterAnime = animes.filter((anime) => {
    const matchGenre = selectedGenre === "" || anime.genre === selectedGenre;
    const matchStatut =
      selectedStatut === "" || anime.statut === selectedStatut;
    return matchGenre && matchStatut;
  });
  const handleAddAnime = (newAnime) => {
    setAnimes((prev) => [...prev, newAnime]);
  };

  return (
    <div>
      <Banner />
      <div className="body">
        <AnimeCard animes={filterAnime} />
        <AnimeForm
          data={animes}
          onAddAnime={handleAddAnime}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          selectedStatut={selectedStatut}
          onStatutChange={setSelectedStatut}
        />
      </div>
    </div>
  );
}
