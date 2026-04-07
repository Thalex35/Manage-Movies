import "./animeList.css";
import defaultCover from "../assets/allanime.jpeg";

export default function AnimeList({ titre, statut, genre, episodes, cover }) {
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
      </div>
    </section>
  );
}
