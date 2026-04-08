import "./animeCard.css";
import AnimeList from "./animeList.jsx";

export default function AnimeCard({ animes, onDelete }) {
  return (
    <div>
      <div className="cards">
        {animes.map((anime) => (
          <AnimeList
            id={anime.id}
            key={anime.id}
            cover={anime.cover}
            titre={anime.titre}
            genre={anime.genre}
            episodes={anime.episodes}
            statut={anime.statut}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
