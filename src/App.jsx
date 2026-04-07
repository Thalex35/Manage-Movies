import { animesData } from "./Data/animesData";
import { useState } from "react";
import AnimeCard from "./Components/animeCard";
import AnimeForm from "./Components/animeForm";
import Banner from "./Components/Banner";
import "./App.css";

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredList =
    selectedGenre === ""
      ? animes
      : animes.filter((anime) => anime.genre === selectedGenre);

  const handleAddAnime = (newAnime) => {
    setAnimes((prev) => [...prev, newAnime]);
  };

  return (
    <div>
      <Banner />
      <div className="body">
        <AnimeCard animes={filteredList} />
        <AnimeForm
          genres={animes}
          onAddAnime={handleAddAnime}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
      </div>
    </div>
  );
}
