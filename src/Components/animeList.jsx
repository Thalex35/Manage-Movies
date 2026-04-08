import "./animeList.css";
import DeleteAnime from "./DeleteAnime";

// import { Edit } from "lucide-react";
import defaultCover from "../assets/allanime.jpeg";

export default function AnimeList({
  id,
  titre,
  statut,
  genre,
  episodes,
  cover,
  onDelete,
}) {
  return (
    <section className="card">
      <h3>{titre}</h3>

      <div>
        <img src={cover || defaultCover}></img>
        <p>
          <span className="before">Genre</span> : {genre}
        </p>
        <span>
          <span className="before">Nombre d'episode </span>: {episodes}
        </span>
        <p>
          <span className="before">Statut</span> : {statut}
        </p>
        <div className="card-header">
          <DeleteAnime id={id} onDelete={onDelete} />
        </div>
      </div>
    </section>
  );
}
