import "./animeCard.css";
import AnimeList from "./animeList.jsx";

export default function AnimeCard({ animes }) {
  return (
    <div>
      <div className="cards">
        {animes.map((anime) => (
          <AnimeList
            key={anime.id}
            cover={anime.cover}
            titre={anime.titre}
            genre={anime.genre}
            episodes={anime.episodes}
            statut={anime.statut}
          />
        ))}
      </div>
    </div>
  );
}
