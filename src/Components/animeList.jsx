import "./animeList.css";
import defaultCover from "../assets/allanime.jpeg";

export default function AnimeList({ titre, statut, genre, episodes, cover }) {
  return (
    <section className="card">
      <h3>{titre}</h3>
      <div>
        <img src={cover || defaultCover}></img>
        <p>Genre : {genre}</p>
        <span>Nombre d'episode : {episodes}</span>
        <p>Statut : {statut}</p>
      </div>
    </section>
  );
}
