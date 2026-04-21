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

  const [editId, setEditId] = useState(null);
  const [tempData, setTempData] = useState({
    id: "",
    titre: "",
    genre: "",
    episode: "",
    statut: "",
    cover: "",
  });

  useEffect(() => {
    localStorage.setItem("animes", JSON.stringify(animes));
    document.title = `Anime List (${animes.length})`;
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

  function handleEditAnime(id) {
    const animeToEdit = animes.find((anime) => anime.id === id);

    if (!animeToEdit) return;

    setEditId(animeToEdit.id);
    setTempData({
      id: animeToEdit.id,
      titre: animeToEdit.titre,
      genre: animeToEdit.genre,
      episode: animeToEdit.episodes,
      statut: animeToEdit.statut,
      cover: animeToEdit.cover,
    });
  }

  function startEdit(anime) {
    setEditId(anime.id);
    setTempData({
      id: anime.id,
      titre: anime.titre,
      genre: anime.genre,
      episode: anime.episodes,
      statut: anime.statut,
      cover: anime.cover,
    });
  }

  function saveEdit(updatedAnime) {
    setAnimes((prev) =>
      prev.map((anime) =>
        anime.id === updatedAnime.id ? updatedAnime : anime,
      ),
    );
    setEditId(null);
    setTempData({
      id: "",
      titre: "",
      genre: "",
      episode: "",
      statut: "",
      cover: "",
    });
  }

  function cancelEdit() {
    setEditId(null);
    setTempData({
      id: "",
      titre: "",
      genre: "",
      episode: "",
      statut: "",
      cover: "",
    });
  }

  return (
    <div className="thePage">
      <Banner />
      <div className="body">
        <div className="animecard">
          <AnimeCard
            animes={filterAnime}
            onDelete={handleDeleteAnime}
            onEdit={handleEditAnime}
          />
        </div>
        <div className="functions">
          <AnimeForm
            data={animes}
            onAddAnime={handleAddAnime}
            editId={editId}
            tempData={tempData}
            onSavedEdit={saveEdit}
            onCancelEdit={cancelEdit}
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
