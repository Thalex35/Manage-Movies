import { animesData } from "./Data/animesData";
import { useState, useEffect } from "react";
import AnimeCard from "./Components/animeCard";
import AnimeForm from "./Components/animeForm";
import Banner from "./Components/Banner";
import "./App.css";

export default function App() {
  const [animes, setAnimes] = useState(() => {
    const savedAnime = localStorage.getItem("animes");
    return savedAnime ? JSON.parse(savedAnime) : animesData;
  });
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedStatut, setSelectedStatut] = useState("");

  useEffect(() => {
    localStorage.setItem("animes", JSON.stringify(animes));
  }, [animes]);

  const filterAnime = animes.filter((anime) => {
    const matchGenre = selectedGenre === "" || anime.genre === selectedGenre;
    const matchStatut =
      selectedStatut === "" || anime.statut === selectedStatut;
    return matchGenre && matchStatut;
  });
  const handleAddAnime = (newAnime) => {
    setAnimes((prev) => [...prev, newAnime]);
  };

  function handleDeleteAnime(id) {
    setAnimes((prev) => prev.filter((anime) => anime.id !== id));
  }

  return (
    <div className="thePage">
      <Banner />
      <div className="body">
        <div className="animecard">
          <AnimeCard animes={filterAnime} onDelete={handleDeleteAnime} />
        </div>
        <div className="functions">
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
    </div>
  );
}
