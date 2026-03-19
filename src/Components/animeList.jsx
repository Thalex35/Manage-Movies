import "./animeList.css";
import defaultCover from "../assets/allanime.jpeg";

export default function AnimeList({ titre, statut, genre, episodes, cover }) {
  return (
    <section className="card">
      <h1>{titre}</h1>
      <div>
        <img src={cover || defaultCover}></img>
        <p>
          <span className="att">Genre</span> : {genre}
        </p>
        <span>
          <span className="att">Nombre d'episode</span> : {episodes}
        </span>
        <p>
          <span className="att">Statut</span> : {statut}
        </p>
      </div>
    </section>
  );
}
